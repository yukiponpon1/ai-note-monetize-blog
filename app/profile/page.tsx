import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プロフィール",
  description:
    "AI収益化ノートの運営方針と、AIツール検証ブログとしての考え方を紹介します。",
  openGraph: {
    title: "プロフィール",
    description:
      "AI収益化ノートの運営方針と、AIツール検証ブログとしての考え方を紹介します。",
  },
};

export default function ProfilePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold text-moss">プロフィール</p>
      <h1 className="mt-3 text-4xl font-black tracking-normal text-ink">
        AIツールを、手触りのある制作フローとして検証します。
      </h1>
      <div className="mt-8 space-y-5 rounded-2xl border border-line bg-surface p-6 text-sm leading-8 text-muted shadow-soft">
        <p>
          AI収益化ノートは、AI自動化とAIコーディングエージェントの使い方を、
          日本語で実践的に整理するブログです。ツールの優劣を断定するよりも、
          目的、作業環境、リスクに合わせて選ぶための観点を重視しています。
        </p>
        <p>
          収益化については、記事制作、無料特典、有料note、広告審査の準備を扱います。
          ただし、収益額や成果を保証するものではありません。読者が自分の状況に合わせて試せる材料を提供します。
        </p>
        <p>
          公開前には、運営者名、連絡先、実績の記載範囲を差し替えてください。
          個人情報やAPIキーを扱う実装はこのサイトには含めていません。
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/articles"
          className="inline-flex justify-center rounded-full bg-sky px-5 py-3 text-sm font-bold text-white hover:bg-coral"
        >
          記事を読む
        </Link>
        <Link
          href="/contact"
          className="inline-flex justify-center rounded-full border border-line bg-surface px-5 py-3 text-sm font-bold text-ink hover:border-sky hover:bg-sky/10"
        >
          お問い合わせへ
        </Link>
      </div>
    </section>
  );
}
