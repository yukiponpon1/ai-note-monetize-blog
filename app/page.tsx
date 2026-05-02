import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { CategoryArticleSections } from "@/components/CategoryArticleSections";
import { SearchForm } from "@/components/SearchForm";
import { getAllArticles, getCategories } from "@/lib/articles";

const trustPoints = [
  "収益を保証しない現実的な副業設計",
  "仕様変更を前提にしたAIツール比較",
  "AdSense審査を見据えた固定ページ整備",
];

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const categories = getCategories();
  const heroStats = [
    { label: "公開記事", value: `${articles.length}本` },
    { label: "カテゴリ", value: `${categories.length}種類` },
    { label: "広告コード", value: "未設置" },
  ];

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-bold text-muted shadow-soft"
                >
                  {point}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm font-bold text-sky">
              AI自動化と発信設計の実践ガイド
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal text-ink sm:text-6xl">
              読む人にも、作る人にもやさしいAI副業ブログ。
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Claude Code、Codex、Cursor、GitHub Copilot、Google Antigravity
              などの使い分けを、仕様変更がある前提で検証します。収益は保証せず、読者が無理なく試せる判断材料を積み上げます。
            </p>
            <div className="mt-8">
              <SearchForm id="hero-search" />
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-line bg-surface px-4 py-3 shadow-soft"
                >
                  <dt className="text-xs font-semibold text-muted">{stat.label}</dt>
                  <dd className="mt-1 text-xl font-black text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-md bg-sky px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-coral"
              >
                最新記事を読む
              </Link>
              <Link
                href="/free-gift"
                className="inline-flex items-center justify-center rounded-md border border-line bg-surface px-5 py-3 text-sm font-bold text-ink transition hover:border-sky hover:bg-sky/10"
              >
                無料特典を見る
              </Link>
            </div>
          </div>

          <aside className="grid gap-4" aria-label="注目記事とサイト概要">
            <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-soft">
              <img
                src="/ogp.svg"
                alt="AI収益化ノートの概要を表したカード型の画像"
                className="h-auto w-full"
              />
              <div className="border-t border-line p-5">
                <p className="text-sm font-bold text-coral">ピックアップ</p>
              {featured ? (
                <div className="mt-3">
                  <Link
                    href={`/articles/${featured.slug}`}
                    className="text-2xl font-black leading-snug text-ink transition hover:text-sky"
                  >
                    {featured.title}
                  </Link>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {featured.description}
                  </p>
                  <Link
                    href={`/articles/${featured.slug}`}
                    className="mt-4 inline-flex rounded-md bg-sky px-4 py-2 text-sm font-bold text-white transition hover:bg-coral"
                  >
                    記事を読む
                  </Link>
                </div>
              ) : (
                <div className="mt-4 rounded-lg border border-line bg-surface p-5 text-muted">
                  記事を準備中です。
                </div>
              )}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-surface p-5 shadow-soft">
                <p className="text-sm font-bold text-sky">読者導線</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  無料記事、無料特典、有料noteの役割を分けて、判断しやすい流れにしています。
                </p>
              </div>
              <AdPlaceholder label="トップページ広告枠" />
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-coral">カテゴリー別コンテンツ</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              読みたいテーマから最短で探す
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              AIエージェント比較、AI自動化、note販売導線、AdSense準備をセクションごとに整理しています。
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex w-fit rounded-md border border-line bg-surface px-3 py-2 text-sm font-bold text-sky hover:border-sky hover:text-coral"
          >
            すべての記事を見る
          </Link>
        </div>
        <CategoryArticleSections
          articles={articles}
          categories={categories}
          limitPerCategory={3}
        />
      </section>

      <section className="border-y border-line bg-surface-soft">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold text-sky">カテゴリ</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              サイト全体のテーマ
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              ツール比較、AI自動化、note販売、AdSense準備を分けて管理しています。
              迷ったら比較記事から読むと全体像をつかみやすくなります。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-5 shadow-soft transition hover:-translate-y-1 hover:border-sky hover:shadow-glow"
              >
                <h3 className="text-lg font-bold text-ink">{category.name}</h3>
                <span className="mt-2 block text-sm text-muted">
                  {category.count}本の記事
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Link
          href="/note"
          className="rounded-lg border border-line bg-gradient-to-br from-surface to-paper p-6 text-ink shadow-soft transition hover:-translate-y-1 hover:border-coral hover:shadow-glow"
        >
          <p className="text-sm font-bold text-coral">有料note導線</p>
          <h3 className="mt-3 text-2xl font-black tracking-normal">
            記事では概要、noteでは設計シートと実践手順へ。
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            読者が納得して購入を判断できるよう、無料記事と有料部分の役割を分けています。
          </p>
        </Link>
        <Link
          href="/free-gift"
          className="rounded-lg border border-line bg-gradient-to-br from-surface to-paper p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber hover:shadow-glow"
        >
          <p className="text-sm font-bold text-amber">無料特典</p>
          <h3 className="mt-3 text-2xl font-black tracking-normal text-ink">
            AI記事設計チェックリストを配布するページ。
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            メール配信や外部ツール連携は未実装のため、公開前に配布方法を選べます。
          </p>
        </Link>
      </section>
    </>
  );
}
