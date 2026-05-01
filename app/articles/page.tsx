import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ArticleSearchPanel } from "@/components/ArticleSearchPanel";
import { getAllArticles, getCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "AI自動化、AIコーディングエージェント比較、note販売導線、AdSense準備の記事一覧です。",
  openGraph: {
    title: "記事一覧",
    description:
      "AI自動化、AIコーディングエージェント比較、note販売導線、AdSense準備の記事一覧です。",
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = getCategories();

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
      <div>
        <p className="text-sm font-bold text-coral">記事一覧と検索</p>
        <h1 className="mt-2 text-4xl font-black tracking-normal text-ink sm:text-5xl">
          AI活用と収益導線のロードマップ
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          ツールの仕様や料金は変わる可能性があるため、記事では考え方、検証観点、注意点を中心に整理しています。
        </p>
        <div className="mt-8">
          <ArticleSearchPanel articles={articles} categories={categories} />
        </div>
      </div>
      <aside className="space-y-5" aria-label="記事一覧の補助情報">
        <section className="rounded-2xl border border-line bg-surface p-5 shadow-soft">
          <h2 className="text-lg font-bold text-ink">カテゴリ</h2>
          <div className="mt-4 grid gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="flex items-center justify-between rounded-xl border border-line bg-paper/60 px-3 py-2 text-sm text-muted transition hover:border-sky hover:text-ink"
              >
                <span>{category.name}</span>
                <span>{category.count}</span>
              </Link>
            ))}
          </div>
        </section>
        <AdPlaceholder label="記事一覧広告枠" />
      </aside>
    </section>
  );
}
