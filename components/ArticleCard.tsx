import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { formatDate } from "@/lib/format";

type ArticleCardProps = {
  article: ArticleMeta;
  compact?: boolean;
};

export const ArticleCard = ({ article, compact = false }: ArticleCardProps) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-soft transition hover:-translate-y-1 hover:border-sky hover:shadow-glow">
    <span className="absolute inset-x-0 top-0 h-1 bg-sky" />
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
      <Link
        href={`/categories/${article.categorySlug}`}
        className="rounded-md border border-sky/25 bg-[#fef2f1] px-2.5 py-1 font-semibold text-sky transition hover:border-sky hover:bg-sky hover:text-white"
      >
        {article.category}
      </Link>
      <span>{formatDate(article.date)}</span>
      <span>{article.readingMinutes}分で読める</span>
    </div>
    <h3 className="mt-4 font-serif text-xl font-bold leading-snug tracking-normal text-ink">
      <Link
        href={`/articles/${article.slug}`}
        className="transition group-hover:text-coral"
      >
        {article.title}
      </Link>
    </h3>
    <p
      className={`mt-3 text-sm leading-7 text-muted ${compact ? "line-clamp-3" : ""}`}
    >
      {article.description}
    </p>
    <div className="mt-5 flex flex-wrap gap-2">
      {article.tags.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-line bg-paper px-2.5 py-1 text-xs text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
    <Link
      href={`/articles/${article.slug}`}
      className="mt-auto inline-flex pt-5 text-sm font-bold text-sky transition hover:text-coral"
    >
      記事を読む
    </Link>
  </article>
);
