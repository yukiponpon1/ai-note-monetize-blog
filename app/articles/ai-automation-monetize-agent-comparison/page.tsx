import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const articleSlug = "ai-automation-monetize-agent-comparison";
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
      "AI自動化で副業収益を狙う現実ルートとAIコーディングエージェント5選",
  },
  description:
    "プログラミング初心者がAI自動化で副業を始めるための考え方、マネタイズの手順、主要AIコーディングエージェントの選び方と注意点を解説します。",
  alternates: {
    canonical: `/articles/${articleSlug}`,
  },
  openGraph: {
    title: "AI自動化で副業収益を狙う現実ルート",
    description:
      "AI自動化で副業を始めるための現実的な手順、初心者が避けたい罠、AIコーディングエージェント5選を整理します。",
    url: `${siteConfig.url}/articles/${articleSlug}`,
    type: "article",
    locale: "ja_JP",
    siteName: siteConfig.name,
    images: [
      {
        url: "/ogp.svg",
        width: 1200,
        height: 630,
        alt: "AI自動化で副業収益を狙う現実ルート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI自動化で副業収益を狙う現実ルート",
    description:
      "AI自動化で副業を始めるための現実的な手順、初心者が避けたい罠、AIコーディングエージェント5選を整理します。",
    images: ["/ogp.svg"],
  },
};

export default function StandaloneAiAutomationArticlePage() {
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

.standalone-ai-automation-page {
  isolation: isolate;
}`,
        }}
      />
      <div
        className="standalone-ai-automation-page"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </>
  );
}
