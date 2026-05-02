import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import type { ArticleMeta, Category } from "@/lib/articles";

type CategoryArticleSectionsProps = {
  articles: ArticleMeta[];
  categories: Category[];
  limitPerCategory?: number;
};

export const CategoryArticleSections = ({
  articles,
  categories,
  limitPerCategory,
}: CategoryArticleSectionsProps) => (
  <div className="grid gap-12">
    {categories.map((category) => {
      const categoryArticles = articles
        .filter((article) => article.categorySlug === category.slug)
        .slice(0, limitPerCategory);

      if (categoryArticles.length === 0) return null;

      return (
        <section
          key={category.slug}
          aria-labelledby={`category-${category.slug}`}
          className="scroll-mt-24"
        >
          <div className="mb-5 flex flex-col gap-3 border-l-4 border-sky pl-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-sky">カテゴリー</p>
              <h2
                id={`category-${category.slug}`}
                className="mt-2 text-2xl font-black tracking-normal text-ink sm:text-3xl"
              >
                {category.name}
              </h2>
            </div>
            <Link
              href={`/categories/${category.slug}`}
              className="inline-flex w-fit rounded-md border border-line bg-surface px-3 py-2 text-sm font-bold text-sky transition hover:border-sky hover:text-coral"
            >
              {category.name}の記事をすべて見る
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} compact />
            ))}
          </div>
        </section>
      );
    })}
  </div>
);
