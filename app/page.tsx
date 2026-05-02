import Link from "next/link";
import { CategoryArticleSections } from "@/components/CategoryArticleSections";
import { SearchForm } from "@/components/SearchForm";
import { getAllArticles, getCategories } from "@/lib/articles";

const featuredSlug = "ai-agent-hikaku-2026";

const guidePoints = [
  "初心者向けの選び方",
  "料金と始めやすさを比較",
  "副業で使う時の注意点",
];

export default function HomePage() {
  const articles = getAllArticles();
  const categories = getCategories();
  const featured =
    articles.find((article) => article.slug === featuredSlug) ?? articles[0];
  const featuredHref = featured ? `/articles/${featured.slug}` : "/articles";

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-coral">
              AI Coding Agent Guide
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
              AIエージェント選びを、シンプルに判断できるサイトへ。
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60">
              Claude Code、Codex、Antigravity、Cursor、GitHub Copilotを中心に、
              料金・使いやすさ・副業での活用を落ち着いて比較します。
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {guidePoints.map((point) => (
                <span
                  key={point}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/70"
                >
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={featuredHref}
                className="inline-flex items-center justify-center rounded-md bg-sky px-5 py-3 text-sm font-bold text-white transition hover:bg-coral"
              >
                特集記事を読む
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white/80 transition hover:border-coral hover:text-white"
              >
                記事一覧を見る
              </Link>
            </div>
          </div>

          <article className="overflow-hidden rounded-lg border border-white/10 bg-white shadow-soft">
            <Link href={featuredHref} aria-label="AIエージェント徹底比較の記事を読む">
              <img
                src="/ogp.svg"
                alt="AIエージェント徹底比較の記事を紹介するアイキャッチ画像"
                className="h-auto w-full border-b border-line"
              />
            </Link>
            <div className="p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
                Featured Article
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold leading-snug tracking-normal text-ink sm:text-3xl">
                <Link href={featuredHref} className="transition hover:text-sky">
                  {featured?.title ?? "AIエージェント徹底比較 2026"}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {featured?.description ??
                  "初心者向けにAIエージェントの違いを比較します。"}
              </p>
              <Link
                href={featuredHref}
                className="mt-5 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-sky"
              >
                この記事をそのまま読む
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <SearchForm id="home-search" placeholder="Claude Code、Codex、Cursorを検索" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
            Categories
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            読みたいテーマから探す
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            AIエージェント比較とAI自動化に絞り、必要な記事へすぐ移動できるように整理しています。
          </p>
        </div>
        <CategoryArticleSections
          articles={articles}
          categories={categories}
          limitPerCategory={3}
        />
      </section>

      <section className="border-y border-line bg-surface-soft">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="rounded-lg border border-line bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-sky hover:shadow-glow"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
                Category
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold tracking-normal text-ink">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {category.count}本の記事を掲載しています。
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
