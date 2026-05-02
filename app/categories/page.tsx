import type { Metadata } from "next";
import Link from "next/link";
import { getCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description:
    "AIエージェント比較、AI自動化、note販売導線、AdSense準備、SEO記事設計のカテゴリ一覧です。",
  openGraph: {
    title: "カテゴリ一覧",
    description:
      "AIエージェント比較、AI自動化、note販売導線、AdSense準備、SEO記事設計のカテゴリ一覧です。",
  },
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold text-sky">カテゴリ一覧</p>
      <h1 className="mt-3 text-4xl font-black tracking-normal text-ink sm:text-5xl">
        テーマ別に記事を探す
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        AIコーディングエージェントの比較から、note販売導線、AdSense準備まで、
        読みたいテーマごとに記事を整理しています。
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-6 shadow-soft transition hover:-translate-y-1 hover:border-sky hover:shadow-glow"
          >
            <h2 className="text-xl font-black tracking-normal text-ink">
              {category.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {category.count}本の記事を掲載しています。
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
