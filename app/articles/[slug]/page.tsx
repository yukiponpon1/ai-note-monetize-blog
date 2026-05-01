import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleCta } from "@/components/ArticleCta";
import {
  getAllArticles,
  getArticleBySlug,
} from "@/lib/articles";
import { formatDate } from "@/lib/format";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () =>
  getAllArticles().map((article) => ({
    slug: article.slug,
  }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      tags: article.tags,
    },
  };
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getAllArticles()
    .filter(
      (item) =>
        item.slug !== article.slug && item.categorySlug === article.categorySlug,
    )
    .slice(0, 3);

  return (
    <article className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
      <div className="min-w-0">
        <header className="rounded-2xl border border-line bg-surface p-5 shadow-soft sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <Link
              href={`/categories/${article.categorySlug}`}
              className="rounded-full border border-sky/30 bg-sky/10 px-2.5 py-1 font-semibold text-sky transition hover:border-sky hover:text-ink"
            >
              {article.category}
            </Link>
            <span>{formatDate(article.date)}</span>
            <span>{article.readingMinutes}分で読める</span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-normal text-ink sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">
            {article.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-paper/60 px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="article-body mt-8 rounded-2xl border border-line bg-surface p-5 shadow-soft sm:p-8"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />

        <div className="mt-8">
          <ArticleCta
            title={article.noteCtaTitle}
            text={article.noteCtaText}
          />
        </div>

        {relatedArticles.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-black tracking-normal text-ink">
              関連記事
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.slug} article={item} compact />
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-5" aria-label="記事の補助情報">
        <AdPlaceholder label="記事上部広告枠" />
        <section className="rounded-2xl border border-line bg-surface p-5 shadow-soft">
          <h2 className="text-lg font-bold text-ink">この記事の方針</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            AIツールの仕様、料金、利用条件は変わる場合があります。
            本文では断定を避け、公開時点で確認したい観点を中心にまとめています。
          </p>
        </section>
        <AdPlaceholder label="記事下部広告枠" />
      </aside>
    </article>
  );
}
