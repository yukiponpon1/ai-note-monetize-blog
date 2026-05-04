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

const toolsRow1 = [
  "Claude Code", "ChatGPT", "Gemini 2.5", "Codex CLI", "Cursor", "GitHub Copilot",
  "Perplexity", "Grok", "Windsurf", "Copilot Studio",
];

const topicsRow2 = [
  "AIエージェント比較", "AI自動化", "情報漏洩対策", "プロンプト設計",
  "副業×AI", "コスト管理", "ハルシネーション", "ノーコードAI",
];

const bentoFeatures = [
  {
    id: "compare",
    num: "01",
    tag: "AIエージェント比較",
    heading: "どのAIを使えばいいか、比較で答えます。",
    body: "Claude Code、Codex CLI、Cursor、GitHub Copilotなどを料金・自律性・用途で整理します。",
    href: "/categories/agent-comparison",
    cta: "比較記事を読む",
    tall: true,
    hasBg: true,
  },
  {
    id: "automate",
    num: "02",
    tag: "AI自動化",
    heading: "小さな業務から、AIで動かす。",
    body: "初心者でも試せる自動化の入口を、具体的な手順で解説します。",
    href: "/categories/ai-automation",
    cta: "自動化を学ぶ",
    tall: false,
    hasBg: false,
  },
  {
    id: "safe",
    num: "03",
    tag: "安全なAI活用",
    heading: "リスクを知って、安心して使う。",
    body: "情報漏洩・APIコスト・ハルシネーション。導入前に知りたい注意点を図解します。",
    href: "/articles/ai-leak-guide",
    cta: "安全対策を確認",
    tall: false,
    hasBg: false,
  },
];

const statsData = [
  { value: "50+", label: "公開記事数", detail: "継続的に増加中" },
  { value: "3", label: "専門カテゴリ", detail: "AI特化コンテンツ" },
  { value: "10+", label: "AIツールを比較", detail: "実際に検証済み" },
  { value: "毎週", label: "更新サイクル", detail: "最新情報を反映" },
];

const policyItems = [
  { icon: "✓", text: "公式情報を確認する前提で解説" },
  { icon: "✓", text: "誇大な収益表現を避ける" },
  { icon: "✓", text: "初心者が迷いやすい判断基準を整理" },
  { icon: "✓", text: "スマホでも読みやすい記事導線" },
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
  const [mainArticle, ...sideArticles] = articles.slice(0, 3);

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          HERO  —  full-viewport dark with orbs + shimmer visual
          ════════════════════════════════════════════════════════ */}
      <section className="lp-hero lp-noise min-h-screen">
        {/* Grid */}
        <div className="lp-hero-grid" aria-hidden="true" />
        {/* Orbs */}
        <div className="lp-orb lp-orb-1" aria-hidden="true" />
        <div className="lp-orb lp-orb-2" aria-hidden="true" />
        <div className="lp-orb lp-orb-3" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-14 px-4 py-28 sm:px-6 lg:grid lg:grid-cols-[1fr_1.08fr] lg:items-center lg:px-8 lg:py-32">

          {/* ── Left copy ────────────────────────────── */}
          <div className="lp-hero-copy">
            {/* Live badge */}
            <div className="lp-live-badge mb-7 w-fit">
              <span className="lp-live-dot" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/62">
                AI Guide &amp; Visual Notes
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-lg font-serif text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.15] tracking-tight text-white">
              AIの使い方を、<br />
              <span className="lp-text-gradient">迷わず選べる</span><br />
              情報設計に。
            </h1>

            {/* Sub */}
            <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-white/55">
              AIエージェント比較・自動化・情報漏洩対策を、難しい言葉だけで終わらせず、
              使いどころと注意点がすぐわかる記事として整理しています。
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={featuredHref}
                className="lp-btn-primary inline-flex items-center gap-2.5 rounded-xl bg-[#c94a2a] px-7 py-3.5 text-sm font-bold text-white"
              >
                特集記事を読む
                <span aria-hidden="true" className="text-base leading-none opacity-80">→</span>
              </Link>
              <Link
                href="/articles"
                className="lp-btn-ghost inline-flex items-center gap-2 rounded-xl border border-white/16 px-7 py-3.5 text-sm font-bold text-white/65"
              >
                記事一覧を見る
              </Link>
            </div>

            {/* Mini stat chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {statsData.slice(0, 3).map((s) => (
                <div key={s.label} className="lp-stat-chip">
                  <span className="font-serif text-lg font-black text-[#e8733a]">{s.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right visual panel ───────────────────── */}
          <div className="lp-hero-visual">
            <div className="lp-shimmer-border rounded-[22px]">
              <figure className="lp-visual-inner rounded-[20px]">
                <Link href={featuredHref} aria-label="特集記事を読む" tabIndex={-1}>
                  <img
                    src="/images/ai-visual-lab-hero.png"
                    alt="AIエージェント比較とAI自動化を図解するヒーロー画像"
                    className="lp-visual-image"
                  />
                </Link>
                <div className="lp-visual-overlay" aria-hidden="true" />

                {/* Slider dots */}
                <div className="lp-slider-dots" aria-hidden="true">
                  <span /><span /><span />
                </div>

                {/* Floating badge top-right */}
                <div
                  className="lp-float-a lp-glass-dark absolute right-4 top-4 z-10 rounded-xl px-3 py-2 text-center"
                  aria-hidden="true"
                >
                  <span className="block font-serif text-xl font-black text-[#e8733a]">10+</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wide text-white/45">Tools</span>
                </div>

                {/* Caption */}
                <figcaption className="lp-caption-wrap">
                  <div className="lp-caption-slide lp-caption-slide-1">
                    <span>01</span>AIエージェントを比較する
                  </div>
                  <div className="lp-caption-slide lp-caption-slide-2">
                    <span>02</span>自動化の使い道を整理する
                  </div>
                  <div className="lp-caption-slide lp-caption-slide-3">
                    <span>03</span>リスクを確認して安全に試す
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          DUAL MARQUEE  —  tools ↔ topics
          ════════════════════════════════════════════════════════ */}
      <div className="border-y border-white/8 bg-[#0a0807]">
        <div className="lp-dual-marquee" aria-hidden="true">
          {/* Row 1 → left (tools) */}
          <div className="lp-mrow lp-mrow-fwd">
            {[...toolsRow1, ...toolsRow1].map((t, i) => (
              <span key={i} className="lp-mpill lp-mpill-dark">{t}</span>
            ))}
          </div>
          {/* Row 2 ← right (topics) */}
          <div className="lp-mrow lp-mrow-bwd">
            {[...topicsRow2, ...topicsRow2].map((t, i) => (
              <span key={i} className="lp-mpill lp-mpill-dark">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          NEWS TICKER
          ════════════════════════════════════════════════════════ */}
      <section className="border-b border-[#e4e0d8] bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[148px_1fr] lg:items-center lg:px-8">
          <div>
            <p className="lp-eyebrow text-[#c94a2a]">News</p>
            <h2 className="mt-2 font-serif text-lg font-black tracking-tight text-[#1a1714]">お知らせ</h2>
          </div>
          <div className="news-ticker" aria-label="お知らせ">
            <ul className="news-ticker-track">
              {[...newsItems, ...newsItems].map((item, idx) => (
                <li
                  key={`${item.date}-${idx}`}
                  aria-hidden={idx >= newsItems.length}
                  className="news-ticker-item"
                >
                  <time className="font-mono text-xs font-bold text-[#c94a2a]">{item.date}</time>
                  <span className="text-[#5a5650]">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BENTO FEATURES  —  dark asymmetric grid
          ════════════════════════════════════════════════════════ */}
      <section className="bg-[#080604]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          {/* Header */}
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <p className="lp-eyebrow text-[#e8733a]">What We Organize</p>
              <h2 className="mt-4 font-serif text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                AIの迷いを、<br />
                <span className="lp-text-gradient">整理する専門誌。</span>
              </h2>
            </div>
            <Link
              href="/articles"
              className="lp-btn-ghost inline-flex w-fit items-center gap-2 rounded-xl border border-white/14 px-5 py-2.5 text-sm font-bold text-white/55"
            >
              すべての記事 →
            </Link>
          </div>

          {/* Bento */}
          <div className="lp-bento">

            {/* ── Tall card: AIエージェント比較 ───── */}
            <article className="lp-bento-card lp-bento-tall lp-bento-image-card group min-h-[360px]">
              <img
                src="/images/ai-visual-lab-hero.png"
                alt=""
                className="lp-bento-img"
                aria-hidden="true"
              />
              <div className="lp-bento-overlay" aria-hidden="true" />
              <div className="relative z-10 flex h-full flex-col p-7 lg:min-h-[480px]">
                <div className="lp-mpill lp-mpill-dark w-fit">{bentoFeatures[0].tag}</div>
                <div className="mt-auto">
                  <p className="font-serif text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8733a]">
                    {bentoFeatures[0].num}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-black leading-snug text-white lg:text-3xl">
                    {bentoFeatures[0].heading}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">{bentoFeatures[0].body}</p>
                  <Link
                    href={bentoFeatures[0].href}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-bold text-white/75 transition hover:border-[#e8733a]/60 hover:text-white"
                  >
                    {bentoFeatures[0].cta} →
                  </Link>
                </div>
              </div>
            </article>

            {/* ── Top-right: AI自動化 ─────────────── */}
            <article className="lp-bento-card lp-glass-card group p-7">
              <div className="lp-mpill lp-mpill-dark w-fit">{bentoFeatures[1].tag}</div>
              <p className="mt-6 font-serif text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8733a]">
                {bentoFeatures[1].num}
              </p>
              <h3 className="mt-2 font-serif text-xl font-black leading-snug text-white">
                {bentoFeatures[1].heading}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/48">{bentoFeatures[1].body}</p>
              <Link
                href={bentoFeatures[1].href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#e8733a] transition group-hover:text-white"
              >
                {bentoFeatures[1].cta} →
              </Link>
              {/* Decorative circle */}
              <div
                className="pointer-events-none absolute bottom-[-20px] right-[-20px] h-40 w-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #e8733a 0%, transparent 70%)" }}
                aria-hidden="true"
              />
            </article>

            {/* ── Bottom-right: 安全なAI活用 ──────── */}
            <article className="lp-bento-card lp-glass-card group p-7">
              <div className="lp-mpill lp-mpill-dark w-fit">{bentoFeatures[2].tag}</div>
              <p className="mt-6 font-serif text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8733a]">
                {bentoFeatures[2].num}
              </p>
              <h3 className="mt-2 font-serif text-xl font-black leading-snug text-white">
                {bentoFeatures[2].heading}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/48">{bentoFeatures[2].body}</p>
              <Link
                href={bentoFeatures[2].href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#e8733a] transition group-hover:text-white"
              >
                {bentoFeatures[2].cta} →
              </Link>
            </article>

            {/* ── Wide: 最新情報 毎週更新 ─────────── */}
            <article className="lp-bento-card lp-bento-wide lp-glass-card group flex flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center">
              <div>
                <p className="lp-eyebrow text-[#e8733a]">Weekly Update</p>
                <h3 className="mt-3 font-serif text-xl font-black leading-snug text-white">
                  AIの最新情報を、毎週整理して届けます。
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/48">
                  仕様変更・料金改定・新機能を見逃さないよう、定期的に記事を更新しています。
                </p>
              </div>
              <div className="flex shrink-0 gap-4">
                {["記事", "カテゴリ", "ツール"].map((label, i) => (
                  <div key={label} className="text-center">
                    <span className="block font-serif text-2xl font-black text-[#e8733a]">
                      {["50+", "3", "10+"][i]}
                    </span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-white/38">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          ARTICLE SPOTLIGHT  —  editorial layout
          ════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f5f0]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="lp-eyebrow text-[#c94a2a]">Featured Articles</p>
              <h2 className="mt-4 font-serif text-3xl font-black leading-tight tracking-tight text-[#1a1714] sm:text-4xl">
                まず読んでほしい記事
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5a5650]">
                AIエージェント比較、自動化の始め方、安全対策を中心に選定しています。
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#ddd9d0] bg-white px-5 py-2.5 text-sm font-bold text-[#c94a2a] shadow-sm transition hover:border-[#c94a2a] hover:shadow-md"
            >
              すべての記事 →
            </Link>
          </div>

          <div className="lp-spotlight">

            {/* ── Main spotlight ──────────────────── */}
            {mainArticle && (
              <article className="lp-spotlight-card lp-spotlight-main group overflow-hidden">
                <Link href={`/articles/${mainArticle.slug}`} className="overflow-hidden block" aria-label={`${mainArticle.title}を読む`}>
                  <img
                    src={articleVisuals[mainArticle.slug] ?? "/images/ai-visual-lab-hero.png"}
                    alt={`${mainArticle.title}のアイキャッチ`}
                    className="lp-spotlight-thumb"
                  />
                </Link>
                <div className="border-b border-[#e4e0d8] bg-[#1a1714] px-6 py-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e8733a]">Featured</p>
                  <p className="mt-1.5 text-xs text-white/50">
                    {formatDate(mainArticle.date)} · {mainArticle.readingMinutes}分で読める
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Link
                    href={`/categories/${mainArticle.categorySlug}`}
                    className="w-fit rounded-full bg-[#fef2f1] px-3 py-1 text-xs font-bold text-[#c94a2a] transition hover:bg-[#fde0d0]"
                  >
                    {mainArticle.category}
                  </Link>
                  <h3 className="mt-4 font-serif text-2xl font-black leading-snug tracking-tight text-[#1a1714]">
                    <Link href={`/articles/${mainArticle.slug}`} className="lp-sweep transition group-hover:text-[#c94a2a]">
                      {mainArticle.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5a5650]">{mainArticle.description}</p>
                  <Link
                    href={`/articles/${mainArticle.slug}`}
                    className="mt-auto pt-6 text-sm font-bold text-[#c94a2a] transition hover:text-[#e8733a]"
                  >
                    記事を読む →
                  </Link>
                </div>
              </article>
            )}

            {/* ── Side cards ──────────────────────── */}
            {sideArticles.map((article) => (
              <article key={article.slug} className="lp-side-card group">
                <Link href={`/articles/${article.slug}`} className="overflow-hidden shrink-0" aria-label={`${article.title}を読む`}>
                  <img
                    src={articleVisuals[article.slug] ?? "/images/ai-visual-lab-hero.png"}
                    alt={`${article.title}のアイキャッチ`}
                    className="lp-side-thumb"
                  />
                </Link>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={`/categories/${article.categorySlug}`}
                        className="w-fit rounded-full bg-[#fef2f1] px-2.5 py-0.5 text-[11px] font-bold text-[#c94a2a]"
                      >
                        {article.category}
                      </Link>
                      <time className="font-mono text-[10px] text-[#5a5650]/60">{formatDate(article.date)}</time>
                    </div>
                    <h3 className="mt-3 font-serif text-base font-black leading-snug text-[#1a1714]">
                      <Link href={`/articles/${article.slug}`} className="transition group-hover:text-[#c94a2a]">
                        {article.title}
                      </Link>
                    </h3>
                  </div>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="mt-4 text-xs font-bold text-[#c94a2a] transition hover:text-[#e8733a]"
                  >
                    読む →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SEARCH
          ════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#e4e0d8] bg-[#f0ede6]">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <SearchForm id="home-search" placeholder="Claude Code、Codex、情報漏洩対策を検索" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STATS  —  dark glass cards
          ════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0807]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <p className="lp-eyebrow justify-center text-[#e8733a]">By The Numbers</p>
            <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-white sm:text-4xl">
              数字で見る、<span className="lp-text-gradient">このサイトについて。</span>
            </h2>
          </div>
          <div className="lp-stats-grid">
            {statsData.map((s, i) => (
              <div key={s.label} className="lp-stat-card lp-stagger-1" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="lp-stat-num">{s.value}</span>
                <span className="mt-2 block text-xs font-bold uppercase tracking-[0.16em] text-white/65">{s.label}</span>
                <span className="mt-1.5 block text-xs text-white/28">{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          EDITORIAL POLICY
          ════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f5f0]">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="lp-eyebrow text-[#c94a2a]">Editorial Policy</p>
            <h2 className="mt-4 font-serif text-3xl font-black leading-tight tracking-tight text-[#1a1714] sm:text-4xl">
              読者が判断できる材料を、<br />過不足なく届けます。
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#5a5650]">
              AIツールは仕様や料金が変わりやすいため、断定しすぎず、
              公式情報を確認する前提で記事を設計しています。
            </p>
            <Link
              href="/profile"
              className="lp-sweep mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#c94a2a]"
            >
              編集方針を詳しく見る
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {policyItems.map((item, i) => (
              <li key={item.text} className="lp-policy-item lp-stagger-1" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c94a2a] text-[11px] font-black text-white">
                  {item.icon}
                </span>
                <span className="text-sm font-bold leading-6 text-[#1a1714]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CATEGORIES
          ════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e4e0d8] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="lp-eyebrow text-[#c94a2a]">Categories</p>
            <h2 className="mt-4 font-serif text-3xl font-black leading-tight tracking-tight text-[#1a1714] sm:text-4xl">
              読みたいテーマから探す
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5a5650]">
              AIエージェント比較とAI自動化に絞り、必要な記事へすぐ移動できるように整理しています。
            </p>
          </div>
          <CategoryArticleSections articles={articles} categories={categories} limitPerCategory={3} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TOOLS MARQUEE  —  light version before CTA
          ════════════════════════════════════════════════════════ */}
      <div className="overflow-hidden border-y border-[#e4e0d8] bg-[#f7f5f0] py-4" aria-hidden="true">
        <div className="lp-mrow lp-mrow-fwd gap-2">
          {[...toolsRow1, ...toolsRow1].map((t, i) => (
            <span key={i} className="lp-mpill lp-mpill-paper">{t}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          CTA  —  dramatic dark with grid + orbs
          ════════════════════════════════════════════════════════ */}
      <section className="lp-cta-section lp-noise text-white">
        <div className="lp-cta-grid" aria-hidden="true" />

        {/* Orbs */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{ filter: "blur(100px)", background: "radial-gradient(circle, rgba(201,74,42,0.8) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="lp-live-badge mx-auto mb-8 w-fit">
            <span className="lp-live-dot" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Start Reading</span>
          </div>

          <h2 className="font-serif text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            今日から、AIを<br />
            <span className="lp-text-gradient">賢く使い始めましょう。</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-[15px] leading-8 text-white/50">
            初心者でも迷わず読める記事設計で、AIの比較・自動化・安全対策を整理しています。
            まずは一番気になる記事から。
          </p>

          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/articles"
              className="lp-btn-primary inline-flex items-center gap-2.5 rounded-xl bg-[#c94a2a] px-8 py-4 text-sm font-bold text-white"
            >
              記事を読む
              <span aria-hidden="true" className="text-base leading-none opacity-75">→</span>
            </Link>
            <Link
              href="/categories/agent-comparison"
              className="lp-btn-ghost inline-flex items-center gap-2 rounded-xl border border-white/16 px-8 py-4 text-sm font-bold text-white/58"
            >
              AIエージェントを比較する
            </Link>
          </div>

          {/* Bottom mini stats */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-white/8 pt-10">
            {statsData.map((s) => (
              <div key={s.label} className="text-center">
                <span className="block font-serif text-2xl font-black text-[#e8733a]">{s.value}</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-white/32">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
