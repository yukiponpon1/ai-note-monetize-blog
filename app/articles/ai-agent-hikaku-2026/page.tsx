import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const articleSlug = "ai-agent-hikaku-2026";
const articlePath = path.join(
  process.cwd(),
  "content",
  "standalone",
  `${articleSlug}.html`,
);

const extractStandaloneArticle = () => {
  const source = fs.readFileSync(articlePath, "utf8");
  const style = source.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1] ?? "";

  return { style, body };
};

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    absolute:
      "AIエージェント徹底比較 2026｜Claude Code・Codex・Antigravity・Cursor・Copilot",
  },
  description:
    "Claude Code、OpenAI Codex、Google Antigravity、Cursor、GitHub Copilotを初心者向けに比較。料金、使いやすさ、自律性、副業活用、注意点までわかりやすく解説します。",
  alternates: {
    canonical: `/articles/${articleSlug}`,
  },
  openGraph: {
    title: "AIエージェント徹底比較 2026｜初心者におすすめはどれ？",
    description:
      "Claude Code・Codex・Antigravity・Cursor・Copilotの違いを、初心者にもわかりやすく比較。目的別の選び方も解説。",
    url: `${siteConfig.url}/articles/${articleSlug}`,
    type: "article",
    locale: "ja_JP",
    siteName: siteConfig.name,
    images: [
      {
        url: "/ogp.svg",
        width: 1200,
        height: 630,
        alt: "AIエージェント徹底比較 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIエージェント徹底比較 2026｜初心者におすすめはどれ？",
    description:
      "Claude Code・Codex・Antigravity・Cursor・Copilotの違いを、初心者にもわかりやすく比較。目的別の選び方も解説。",
    images: ["/ogp.svg"],
  },
};

export default function StandaloneAiAgentArticlePage() {
  const { style, body } = extractStandaloneArticle();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `${style}

body > header,
body > footer {
  display: none !important;
}

body > main {
  display: block !important;
}

.standalone-ai-agent-page {
  isolation: isolate;
}`,
        }}
      />
      <div
        className="standalone-ai-agent-page"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </>
  );
}
