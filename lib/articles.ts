import fs from "node:fs";
import path from "node:path";
import { markdownToHtml } from "./markdown";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  categorySlug: string;
  tags: string[];
  noteCtaTitle: string;
  noteCtaText: string;
  readingMinutes: number;
};

export type Article = ArticleMeta & {
  content: string;
  html: string;
};

export type Category = {
  name: string;
  slug: string;
  count: number;
};

const parseValue = (value: string) => value.replace(/^["']|["']$/g, "").trim();

const parseFrontMatter = (source: string) => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("記事のフロントマターが見つかりません。");
  }

  const data: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    data[key] = parseValue(value);
  });

  return {
    data,
    content: match[2].trim(),
  };
};

const readArticleFile = (fileName: string): Article => {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontMatter(fileContents);
  const tags = (data.tags ?? "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const meta: ArticleMeta = {
    slug,
    title: data.title ?? "無題の記事",
    description: data.description ?? "",
    date: data.date ?? "2026-05-02",
    category: data.category ?? "AI活用",
    categorySlug: data.categorySlug ?? "ai",
    tags,
    noteCtaTitle: data.noteCtaTitle ?? "詳しい手順をnoteで読む",
    noteCtaText:
      data.noteCtaText ??
      "記事では概要を整理し、有料noteではテンプレートや判断基準をより具体的にまとめています。",
    readingMinutes: Number(data.readingMinutes ?? 5),
  };

  return {
    ...meta,
    content,
    html: markdownToHtml(content),
  };
};

export const getAllArticles = () => {
  if (!fs.existsSync(articlesDirectory)) return [];

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readArticleFile)
    .sort((a, b) => b.date.localeCompare(a.date));
};

export const getArticleBySlug = (slug: string) =>
  getAllArticles().find((article) => article.slug === slug);

export const getArticlesByCategory = (categorySlug: string) =>
  getAllArticles().filter((article) => article.categorySlug === categorySlug);

export const getCategories = (): Category[] => {
  const categories = new Map<string, Category>();

  getAllArticles().forEach((article) => {
    const current = categories.get(article.categorySlug);
    categories.set(article.categorySlug, {
      name: article.category,
      slug: article.categorySlug,
      count: current ? current.count + 1 : 1,
    });
  });

  return Array.from(categories.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "ja"),
  );
};
