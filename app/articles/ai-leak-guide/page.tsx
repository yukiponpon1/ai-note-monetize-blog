import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const articleSlug = "ai-leak-guide";
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
    absolute: "AI自動化で失敗しない「情報漏洩リスクと対策」完全ガイド",
  },
  description:
    "AI自動化やAIツール活用で起こりやすい情報漏洩リスクと、初心者でも今日から実践できる安全対策をわかりやすく解説します。",
  alternates: {
    canonical: `/articles/${articleSlug}`,
  },
  openGraph: {
    title: "AI自動化で失敗しない情報漏洩リスクと対策",
    description:
      "AI自動化やAIツール活用で起こりやすい情報漏洩リスクと、安全に使うための基本対策を整理します。",
    url: `${siteConfig.url}/articles/${articleSlug}`,
    type: "article",
    locale: "ja_JP",
    siteName: siteConfig.name,
    images: [
      {
        url: "/ogp.svg",
        width: 1200,
        height: 630,
        alt: "AI自動化で失敗しない情報漏洩リスクと対策",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI自動化で失敗しない情報漏洩リスクと対策",
    description:
      "AI自動化やAIツール活用で起こりやすい情報漏洩リスクと、安全に使うための基本対策を整理します。",
    images: ["/ogp.svg"],
  },
};

export default function StandaloneAiLeakGuidePage() {
  const { style, body } = extractStandaloneArticle();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Share+Tech+Mono&display=swap"
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

.standalone-ai-leak-page {
  isolation: isolate;
}`,
        }}
      />
      <div
        className="standalone-ai-leak-page"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </>
  );
}
