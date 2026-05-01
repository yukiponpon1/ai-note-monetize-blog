"use client";

import { useEffect, useMemo, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import type { ArticleMeta, Category } from "@/lib/articles";

type ArticleSearchPanelProps = {
  articles: ArticleMeta[];
  categories: Category[];
};

export const ArticleSearchPanel = ({
  articles,
  categories,
}: ArticleSearchPanelProps) => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("q");
    if (initialQuery) setQuery(initialQuery);
  }, []);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "all" || article.categorySlug === activeCategory;
      const searchableText = [
        article.title,
        article.description,
        article.category,
        article.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, articles, query]);

  const groupedArticles = categories
    .map((category) => ({
      category,
      articles: filteredArticles.filter(
        (article) => article.categorySlug === category.slug,
      ),
    }))
    .filter((group) => group.articles.length > 0);

  return (
    <section aria-labelledby="article-search-heading" className="grid gap-8">
      <div className="rounded-2xl border border-line bg-surface p-5 shadow-soft sm:p-6">
        <h2
          id="article-search-heading"
          className="text-2xl font-black tracking-normal text-ink"
        >
          記事を検索する
        </h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">検索キーワード</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
              />
            </svg>
            <input
              type="search"
              aria-label="記事タイトル、説明、タグから検索"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例: Claude Code、AdSense、無料特典"
              className="w-full rounded-full border border-line bg-paper px-12 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-sky focus:shadow-glow"
            />
          </label>
          <p className="text-sm font-semibold text-muted">
            {filteredArticles.length}件の記事
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="カテゴリーで絞り込み">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              activeCategory === "all"
                ? "border-sky bg-sky text-white"
                : "border-line bg-paper text-muted hover:border-sky hover:text-ink"
            }`}
          >
            すべて
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                activeCategory === category.slug
                  ? "border-sky bg-sky text-white"
                  : "border-line bg-paper text-muted hover:border-sky hover:text-ink"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {groupedArticles.length > 0 ? (
        groupedArticles.map((group) => (
          <section
            key={group.category.slug}
            aria-labelledby={`search-category-${group.category.slug}`}
          >
            <h2
              id={`search-category-${group.category.slug}`}
              className="text-2xl font-black tracking-normal text-ink"
            >
              {group.category.name}
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {group.articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        ))
      ) : (
        <p className="rounded-2xl border border-line bg-surface p-6 text-sm leading-7 text-muted">
          条件に一致する記事が見つかりませんでした。キーワードを短くするか、カテゴリーを「すべて」に戻して探してください。
        </p>
      )}
    </section>
  );
};
