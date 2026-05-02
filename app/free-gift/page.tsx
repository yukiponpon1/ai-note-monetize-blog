import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "無料特典",
  description:
    "AIエージェント比較とAI自動化の学習前に確認したい無料チェックリストページです。",
  openGraph: {
    title: "無料特典",
    description:
      "AIエージェント比較とAI自動化の学習前に確認したい無料チェックリストページです。",
  },
};

const checklist = [
  "記事の読者像を一文で書ける",
  "AIツールの仕様変更に備えた注意書きを入れる",
  "どのAIエージェントを何の目的で使うか決める",
  "収益や効率化の表現が断定になっていないか確認する",
  "料金、利用上限、機密情報の扱いを確認する",
];

export default function FreeGiftPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold text-amber">無料特典</p>
      <h1 className="mt-3 text-4xl font-black leading-tight tracking-normal text-ink sm:text-5xl">
        AIツール選定チェックリスト
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
        AIエージェントを使う前に、目的、料金、注意書き、確認範囲を整理するための特典ページです。
        メールアドレスや個人情報を保存する仕組みはまだ実装していません。
      </p>
      <div className="mt-8 grid gap-4">
        {checklist.map((item, index) => (
          <article key={item} className="rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-5 shadow-soft">
            <p className="text-sm font-bold text-coral">確認 {index + 1}</p>
            <p className="mt-2 text-lg font-bold leading-8 text-ink">{item}</p>
          </article>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-6 text-ink shadow-soft">
        <h2 className="text-2xl font-black tracking-normal">次に読むページ</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          チェックリストで方向性が見えたら、記事一覧から比較記事を読み、必要に応じて有料noteの案内ページへ進めます。
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/articles"
            className="inline-flex justify-center rounded-md bg-sky px-5 py-3 text-sm font-bold text-white hover:bg-coral"
          >
            記事一覧へ
          </Link>
          <Link
            href="/note"
            className="inline-flex justify-center rounded-md border border-line px-5 py-3 text-sm font-bold text-ink hover:border-sky hover:bg-sky/10"
          >
            有料noteの案内へ
          </Link>
        </div>
      </section>
    </section>
  );
}
