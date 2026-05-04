import Link from "next/link";
import { CategoryArticleSections } from "@/components/CategoryArticleSections";
import { SearchForm } from "@/components/SearchForm";
import { formatDate } from "@/lib/format";
import { getAllArticles, getCategories } from "@/lib/articles";

const featuredSlug = "ai-agent-hikaku-2026";

const newsItems = [
  { date: "2026-05-03", label: "サイト名を「初心者に優しいAI図解ラボ」に変更しました" },
  { date: "2026-05-03", label: "AI情報漏洩リスク対策の記事を追加しました" },
  { date: "2026-05-02", label: "AIエージェント徹底比較 2026を公開しました" },
];

const businessAreas = [
  {
    num: "01",
    title: "AIエージェント比較",
    text: "Claude Code、Codex、Cursor、GitHub Copilotなどを、料金・使いやすさ・自律性で整理します。",
    href: "/categories/agent-comparison",
    badge: "10+ ツールを比較",
  },
  {
    num: "02",
    title: "AI自動化の実践",
    text: "小さな業務改善から副業案件化まで、初心者が現実的に試せる手順をまとめます。",
    href: "/categories/ai-automation",
    badge: "ステップ別で解説",
  },
  {
    num: "03",
    title: "安全なAI活用",
    text: "情報漏洩、APIコスト、ハルシネーションなど、導入前に知りたい注意点を図解します。",
    href: "/articles/ai-leak-guide",
    badge: "リスク対策を整理",
  },
];

const statsItems = [
  { value: "50+", label: "公開記事数", sub: "増加中" },
  { value: "3", label: "専門カテゴリ", sub: "AI特化" },
  { value: "10+", label: "AIツール比較", sub: "実際に検証" },
  { value: "毎週", label: "更新頻度", sub: "最新情報" },
];

const toolPills = [
  "Claude Code", "ChatGPT", "Gemini", "Codex CLI", "Cursor",
  "GitHub Copilot", "Perplexity", "Grok", "Windsurf", "Copilot",
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
  const featured = articles.find((a) => a.slug === featuredSlug) ?? articles[0];
  const featuredHref = featured ? `/articles/${featured.slug}` : "/articles";
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-motion bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8 lg:py-32">
          <div className="hero-copy">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-coral" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                AI Guide &amp; Visual Notes
              </span>
            </div>
            <h1 className="mt-2 max-w-lg font-serif text-4xl font-bold leading-[1.2] tracking-normal sm:text-5xl lg:text-6xl">
              初心者に優しいAI活用を、図解と比較でカタチに。
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-8 text-white/58">
              AIエージェント、AI自動化、情報漏洩対策を、難しい言葉だけで終わらせず、
              使いどころと注意点がすぐ分かる記事として整理しています。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={featuredHref}
                className="lp-btn-primary inline-flex items-center justify-center gap-2 rounded-lg bg-sky px-7 py-4 text-sm font-bold text-white"
              >
                特集記事を読む
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-lg border border-white/18 px-7 py-4 text-sm font-bold text-white/70 transition hover:border-coral/50 hover:text-white"
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
                <span>01</span>AIエージェントを比較する
              </div>
              <div className="hero-caption-slide hero-caption-slide-2">
                <span>02</span>自動化の使い道を整理する
              </div>
              <div className="hero-caption-slide hero-caption-slide-3">
                <span>03</span>リスクを確認して安全に試す
              </div>
            </figcaption>
            <div className="hero-slider-dots" aria-hidden="true">
              <span /><span /><span />
            </div>
          </figure>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────── */}
      <section className="border-b border-white/8 bg-[#0f0d0b]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {statsItems.map((stat, i) => (
            <div
              key={i}
              className="lp-stat-item flex flex-col items-center px-6 py-10 text-center"
            >
              <span className="font-serif text-3xl font-black text-coral lg:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/75">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-white/30">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── News ─────────────────────────────────────────── */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[160px_1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky">News</p>
            <h2 className="mt-1 font-serif text-xl font-bold tracking-normal text-ink">
              お知らせ
            </h2>
          </div>
          <div className="news-ticker" aria-label="お知らせ">
            <ul className="news-ticker-track">
              {[...newsItems, ...newsItems].map((item, index) => (
                <li
                  key={`${item.date}-${index}`}
                  aria-hidden={index >= newsItems.length}
                  className="news-ticker-item"
                >
                  <time className="font-mono text-xs font-bold text-sky">{item.date}</time>
                  <span className="text-muted">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Tool Marquee ─────────────────────────────────── */}
      <div className="overflow-hidden border-b border-line bg-paper py-4" aria-hidden="true">
        <div className="lp-marquee-track flex gap-3">
          {[...toolPills, ...toolPills].map((tool, i) => (
            <span
              key={i}
              className="lp-tool-pill whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-bold text-muted shadow-soft"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* ── What We Organize ─────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
                What We Organize
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl lg:text-5xl">
                AIの使い方を、<br />迷わず選べる<br />情報設計に。
              </h2>
              <p className="mt-5 text-sm leading-8 text-muted">
                ツール紹介だけで終わらせず、何に使えるのか、どこでつまずくのか、
                どんな順番で学ぶべきかまで整理します。
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-bold text-sky shadow-soft transition hover:border-sky hover:shadow-glow"
            >
              すべての記事を見る <span>→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {businessAreas.map((area) => (
              <article
                key={area.title}
                className="home-service-card group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-soft transition hover:-translate-y-2 hover:border-sky hover:shadow-glow"
              >
                <div
                  className="absolute right-5 top-4 font-serif text-6xl font-black text-ink/4 select-none"
                  aria-hidden="true"
                >
                  {area.num}
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#fef2f1] text-xs font-black tracking-wider text-sky">
                  AI
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold tracking-normal text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{area.text}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold text-muted">
                    {area.badge}
                  </span>
                  <Link
                    href={area.href}
                    className="text-sm font-bold text-sky transition group-hover:text-coral"
                  >
                    詳しく見る →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search ───────────────────────────────────────── */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <SearchForm id="home-search" placeholder="Claude Code、Codex、情報漏洩対策を検索" />
        </div>
      </section>

      {/* ── Featured Articles ────────────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
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
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-bold text-sky shadow-soft transition hover:border-sky hover:shadow-glow"
            >
              すべての記事 →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="article-visual-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition hover:-translate-y-2 hover:border-sky hover:shadow-glow"
              >
                <Link
                  href={`/articles/${article.slug}`}
                  aria-label={`${article.title}を読む`}
                  className="overflow-hidden"
                >
                  <img
                    src={articleVisuals[article.slug] ?? "/images/ai-visual-lab-hero.png"}
                    alt={`${article.title}のアイキャッチ画像`}
                    className="article-visual-thumb"
                  />
                </Link>
                <div className="border-b border-line bg-ink px-5 py-4 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">Article</p>
                  <p className="mt-2 text-xs text-white/55">
                    {formatDate(article.date)} / {article.readingMinutes}分で読める
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Link
                    href={`/categories/${article.categorySlug}`}
                    className="w-fit rounded-full bg-[#fef2f1] px-3 py-1 text-xs font-bold text-sky"
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
                  <p className="mt-3 text-sm leading-7 text-muted">{article.description}</p>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="mt-auto pt-5 text-sm font-bold text-sky transition hover:text-coral"
                  >
                    記事を読む →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial Policy ─────────────────────────────── */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">
              Editorial Policy
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
              読者が判断できる材料を、<br />過不足なく届けます。
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted">
              AIツールは仕様や料金が変わりやすいため、断定しすぎず、
              公式情報を確認する前提で記事を設計しています。
            </p>
            <Link
              href="/profile"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-sky transition hover:text-coral"
            >
              編集方針を詳しく見る →
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {supportItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface px-5 py-5 shadow-soft"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky text-[10px] font-black text-white">
                  ✓
                </span>
                <span className="text-sm font-bold leading-6 text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky">Categories</p>
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
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="lp-cta-section relative overflow-hidden bg-ink text-white">
        <div className="lp-cta-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-coral">
            Start Reading
          </p>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            今日から、AIを<br />賢く使い始めましょう。
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-8 text-white/55">
            初心者でも迷わず読める記事設計で、AIの比較・自動化・安全対策を整理しています。
            まずは一番気になる記事から。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/articles"
              className="lp-btn-primary inline-flex items-center gap-2 rounded-lg bg-sky px-8 py-4 text-sm font-bold text-white"
            >
              記事を読む <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/categories/agent-comparison"
              className="inline-flex items-center gap-2 rounded-lg border border-white/18 px-8 py-4 text-sm font-bold text-white/65 transition hover:border-coral/50 hover:text-white"
            >
              AIエージェントを比較する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
