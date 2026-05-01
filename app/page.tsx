import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryArticleSections } from "@/components/CategoryArticleSections";
import { SearchForm } from "@/components/SearchForm";
import { getAllArticles, getCategories } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const categories = getCategories();

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold text-sky">
              AI自動化と発信設計のプレミアムガイド
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal text-ink sm:text-6xl">
              AI副業の始め方を、検索しやすい知識ベースとして整理する。
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Claude Code、Codex、Cursor、GitHub Copilot、Google Antigravity
              などの使い分けを、仕様変更がある前提で検証します。収益は保証せず、読者が無理なく試せる判断材料を積み上げます。
            </p>
            <div className="mt-8">
              <SearchForm id="hero-search" />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-full bg-sky px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-coral"
              >
                最新記事を読む
              </Link>
              <Link
                href="/free-gift"
                className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-5 py-3 text-sm font-bold text-ink transition hover:border-sky hover:bg-sky/10"
              >
                無料特典を見る
              </Link>
            </div>
          </div>

          <aside className="grid gap-4" aria-label="注目記事と広告枠">
            {featured ? (
              <ArticleCard article={featured} />
            ) : (
              <div className="rounded-2xl border border-line bg-surface p-5 text-muted">
                記事を準備中です。
              </div>
            )}
            <AdPlaceholder label="トップページ広告枠" />
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
          <Link href="/articles" className="text-sm font-bold text-sky hover:text-coral">
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
                className="rounded-2xl border border-line bg-surface p-5 shadow-soft transition hover:-translate-y-1 hover:border-sky hover:shadow-glow"
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
          className="rounded-2xl border border-line bg-surface p-6 text-ink shadow-soft transition hover:-translate-y-1 hover:border-coral hover:shadow-glow"
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
          className="rounded-2xl border border-line bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:border-amber hover:shadow-glow"
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
