import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ArticleCard } from "@/components/ArticleCard";
import {
  getArticlesByCategory,
  getCategories,
} from "@/lib/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () =>
  getCategories().map((category) => ({
    slug: category.slug,
  }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const category = getCategories().find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "カテゴリが見つかりません",
    };
  }

  return {
    title: `${category.name}の記事`,
    description: `${category.name}に関する記事一覧です。AIツールの比較や実践の注意点を日本語で整理しています。`,
    openGraph: {
      title: `${category.name}の記事`,
      description: `${category.name}に関する記事一覧です。`,
    },
  };
};

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategories().find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
          Category
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-normal text-ink sm:text-5xl">
          {category.name}の記事
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          このテーマの記事をまとめています。具体的な仕様や料金は変わる可能性があるため、必要に応じて公式情報も確認してください。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
      <aside className="space-y-5" aria-label="カテゴリの補助情報">
        <section className="rounded-lg border border-line bg-surface p-5 shadow-soft">
          <h2 className="font-serif text-lg font-bold text-ink">掲載本数</h2>
          <p className="mt-2 text-3xl font-black text-sky">{articles.length}</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            関連記事は今後も追加できます。Markdownを増やすだけで一覧に反映されます。
          </p>
        </section>
        <AdPlaceholder label="カテゴリ広告枠" />
      </aside>
    </section>
  );
}
