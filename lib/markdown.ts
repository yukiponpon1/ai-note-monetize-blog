const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const sanitizeHref = (href: string) => {
  const trimmed = href.trim();
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("http://")
  ) {
    return escapeHtml(trimmed);
  }
  return "#";
};

const parseInline = (value: string) => {
  let html = escapeHtml(value);

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, href) => {
    const safeHref = sanitizeHref(href);
    const isExternal = safeHref.startsWith("http");
    const attrs = isExternal
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return `<a href="${safeHref}"${attrs}>${text}</a>`;
  });

  return html;
};

const shouldStopParagraph = (line: string) =>
  /^#{2,4}\s+/.test(line) ||
  /^\|.+\|$/.test(line) ||
  /^[-*]\s+/.test(line) ||
  /^\d+\.\s+/.test(line) ||
  /^>\s?/.test(line) ||
  /^```/.test(line);

const isTableSeparator = (line: string) =>
  /^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|$/.test(line);

const parseTableRow = (line: string) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

export const markdownToHtml = (markdown: string) => {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line || !line.trim()) {
      index += 1;
      continue;
    }

    if (/^```/.test(line)) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index])) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
    if (headingMatch) {
      const level = Math.min(headingMatch[1].length, 4);
      html.push(`<h${level}>${parseInline(headingMatch[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (
      /^\|.+\|$/.test(line) &&
      index + 1 < lines.length &&
      isTableSeparator(lines[index + 1])
    ) {
      const headers = parseTableRow(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && /^\|.+\|$/.test(lines[index])) {
        rows.push(parseTableRow(lines[index]));
        index += 1;
      }
      const headerHtml = headers
        .map((header) => `<th>${parseInline(header)}</th>`)
        .join("");
      const bodyHtml = rows
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${parseInline(cell)}</td>`).join("")}</tr>`,
        )
        .join("");
      html.push(
        `<div class="table-scroll"><table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`,
      );
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quoteLines: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote><p>${parseInline(quoteLines.join(" "))}</p></blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(`<li>${parseInline(lines[index].replace(/^[-*]\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(`<li>${parseInline(lines[index].replace(/^\d+\.\s+/, ""))}</li>`);
        index += 1;
      }
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !shouldStopParagraph(lines[index])
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    html.push(`<p>${parseInline(paragraphLines.join(" "))}</p>`);
  }

  return html.join("\n");
};
