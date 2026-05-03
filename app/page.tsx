import Link from "next/link";
import { CategoryArticleSections } from "@/components/CategoryArticleSections";
import { SearchForm } from "@/components/SearchForm";
import { formatDate } from "@/lib/format";
import { getAllArticles, getCategories } from "@/lib/articles";

const featuredSlug = "ai-agent-hikaku-2026";

const newsItems = [
  {
    date: "2026-05-03",
    label: "サイト名を「初心者に優しいAI図解ラボ」に変更しました",
  },
  {
    date: "2026-05-03",
    label: "AI情報漏洩リスク対策の記事を追加しました",
  },
  {
    date: "2026-05-02",
    label: "AIエージェント徹底比較 2026を公開しました",
  },
];

const businessAreas = [
  {
    title: "AIエージェント比較",
    text: "Claude Code、Codex、Cursor、GitHub Copilotなどを、料金・使いやすさ・自律性で整理します。",
    href: "/categories/agent-comparison",
  },
  {
    title: "AI自動化の実践",
    text: "小さな業務改善から副業案件化まで、初心者が現実的に試せる手順をまとめます。",
    href: "/categories/ai-automation",
  },
  {
    title: "安全なAI活用",
    text: "情報漏洩、APIコスト、ハルシネーションなど、導入前に知りたい注意点を図解します。",
    href: "/articles/ai-leak-guide",
  },
];

const supportItems = [
  "公式情報を確認する前提で解説",
  "誇大な収益表現を避ける",
  "初心者が迷いやすい判断基準を整理",
  "スマホでも読みやすい記事導線",
];

const articleVisuals: Record<string, string> = {
  "ai-agent-hikaku-2026": "/ogp.svg",
  "ai-automation-monetize-agent-comparison": "/images/ai-visual-lab-hero.png",
  "ai-leak-guide": "/images/ai-visual-lab-hero.png",
};

export default function HomePage() {
  const articles = getAllArticles();
  const categories = getCategories();
  const featured =
    articles.find((article) => article.slug === featuredSlug) ?? articles[0];
  const featuredHref = featured ? `/articles/${featured.slug}` : "/articles";
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      <section className="hero-motion bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8 lg:py-16">
          <div className="hero-copy">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              AI Guide & Visual Notes
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
              初心者に優しいAI活用を、図解と比較でカタチにします。
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/65">
              AIエージェント、AI自動化、情報漏洩対策を、難しい言葉だけで終わらせず、
              使いどころと注意点がすぐ分かる記事として整理しています。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={featuredHref}
                className="inline-flex items-center justify-center rounded bg-sky px-5 py-3 text-sm font-bold text-white transition hover:bg-coral"
              >
                特集記事を読む
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded border border-white/25 px-5 py-3 text-sm font-bold text-white/80 transition hover:border-coral hover:text-white"
              >
                記事一覧を見る
              </Link>
            </div>
          </div>

          <figure className="hero-visual-shell">
            <Link href={featuredHref} aria-label="特集記事を読む">
              <img
                src="/images/ai-visual-lab-hero.png"
                alt="AIエージェント比較とAI自動化を図解するヒーロー画像"
                className="hero-visual-image"
              />
            </Link>
            <figcaption className="hero-visual-caption">
              <div className="hero-caption-slide hero-caption-slide-1">
                <span>01</span>
                AIエージェントを比較する
              </div>
              <div className="hero-caption-slide hero-caption-slide-2">
                <span>02</span>
                自動化の使い道を整理する
              </div>
              <div className="hero-caption-slide hero-caption-slide-3">
                <span>03</span>
                リスクを確認して安全に試す
              </div>
            </figcaption>
            <div className="hero-slider-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </figure>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[160px_1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky">
              News
            </p>
            <h2 className="mt-1 font-serif text-xl font-bold tracking-normal text-ink">
              お知らせ
            </h2>
          </div>
          <div className="news-ticker" aria-label="お知らせ">
            <ul className="news-ticker-track">
            {[...newsItems, ...newsItems].map((item, index) => (
              <li
                key={`${item.date}-${item.label}-${index}`}
                aria-hidden={index >= newsItems.length}
                className="news-ticker-item"
              >
                <time className="font-mono text-xs font-bold text-sky">
                  {item.date}
                </time>
                <span className="text-muted">{item.label}</span>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              What We Organize
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
              AIの使い方を、迷わず選べる情報設計に。
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted">
              ツール紹介だけで終わらせず、何に使えるのか、どこでつまずくのか、
              どんな順番で学ぶべきかまで整理します。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {businessAreas.map((area) => (
              <article
                key={area.title}
                className="home-service-card flex min-h-[220px] flex-col rounded border border-line bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-sky hover:shadow-glow"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fef2f1] text-lg font-black text-sky">
                  AI
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold tracking-normal text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{area.text}</p>
                <Link
                  href={area.href}
                  className="mt-auto pt-5 text-sm font-bold text-sky transition hover:text-coral"
                >
                  詳しく見る
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <SearchForm id="home-search" placeholder="Claude Code、Codex、情報漏洩対策を検索" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky">
              Featured Articles
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal text-ink sm:text-4xl">
              まず読んでほしい記事
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              AIエージェント比較、自動化の始め方、安全対策を中心に、
              初心者が順番に読み進めやすい記事を並べています。
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex w-fit rounded border border-line bg-surface px-4 py-3 text-sm font-bold text-sky transition hover:border-sky hover:bg-[#fef2f1]"
          >
            すべての記事を見る
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {latestArticles.map((article) => (
            <article
              key={article.slug}
              className="article-visual-card group flex h-full flex-col overflow-hidden rounded border border-line bg-surface shadow-soft transition hover:-translate-y-1 hover:border-sky hover:shadow-glow"
            >
              <Link href={`/articles/${article.slug}`} aria-label={`${article.title}を読む`}>
                <img
                  src={articleVisuals[article.slug] ?? "/images/ai-visual-lab-hero.png"}
                  alt={`${article.title}のアイキャッチ画像`}
                  className="article-visual-thumb"
                />
              </Link>
              <div className="border-b border-line bg-ink px-5 py-4 text-white">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">
                  Article
                </p>
                <p className="mt-2 text-xs text-white/55">
                  {formatDate(article.date)} / {article.readingMinutes}分で読める
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <Link
                  href={`/categories/${article.categorySlug}`}
                  className="w-fit rounded bg-[#fef2f1] px-2.5 py-1 text-xs font-bold text-sky"
                >
                  {article.category}
                </Link>
                <h3 className="mt-4 font-serif text-xl font-bold leading-snug tracking-normal text-ink">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="transition group-hover:text-coral"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-auto pt-5 text-sm font-bold text-sky transition hover:text-coral"
                >
                  記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              Editorial Policy
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-normal text-ink">
              読者が判断できる材料を、過不足なく届けます。
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted">
              AIツールは仕様や料金が変わりやすいため、断定しすぎず、
              公式情報を確認する前提で記事を設計しています。
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {supportItems.map((item) => (
              <li
                key={item}
                className="rounded border border-line bg-paper px-4 py-4 text-sm font-bold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-sky">
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
    </>
  );
}
