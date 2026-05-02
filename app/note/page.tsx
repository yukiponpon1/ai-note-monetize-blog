import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "有料noteの案内",
  description:
    "AIエージェント比較とAI自動化の学習を深掘りする有料noteの案内ページです。",
  openGraph: {
    title: "有料noteの案内",
    description:
      "AIエージェント比較とAI自動化の学習を深掘りする有料noteの案内ページです。",
  },
};

const items = [
  "AIツール比較記事の構成テンプレート",
  "無料記事から有料noteへつなげるCTA例",
  "AIツール選定時に確認する料金と安全性のチェックリスト",
  "誇大表現を避けるための言い換え集",
];

export default function NotePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-sm font-bold text-coral">有料note</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-normal text-ink sm:text-5xl">
            AI活用ブログを、記事単体で終わらせないための設計ノート。
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            無料記事で信頼を積み上げ、有料noteではテンプレート、判断基準、チェックリストを提供する想定です。
            成果を保証する内容ではなく、作業を整理するための補助教材として設計しています。
          </p>
          <section className="mt-8 rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-6 shadow-soft">
            <h2 className="text-2xl font-black tracking-normal text-ink">
              含める予定の内容
            </h2>
            <ul className="mt-5 grid gap-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-paper px-4 py-3 text-sm leading-7 text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-8 rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-6 text-ink shadow-soft">
            <h2 className="text-2xl font-black tracking-normal">購入前の考え方</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              AIツールや検索評価の状況は変わります。購入判断では、現在の自分の発信テーマ、
              作業時間、検証できる範囲に合うかを確認してください。
            </p>
            <Link
              href="/free-gift"
              className="mt-5 inline-flex rounded-md bg-sky px-5 py-3 text-sm font-bold text-white hover:bg-coral"
            >
              先に無料特典を見る
            </Link>
          </section>
        </div>
        <aside className="space-y-5">
          <section className="rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-5 shadow-soft">
            <h2 className="text-xl font-black tracking-normal text-ink">
              noteリンク設置予定
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              公開時に実際のnote販売ページURLへ差し替えます。現在はサイト内LPとして導線だけを確認できます。
            </p>
            <a
              href="https://note.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-coral px-5 py-3 text-sm font-bold text-white hover:bg-sky"
            >
              note公式サイトを開く
            </a>
          </section>
          <AdPlaceholder label="noteページ広告枠" />
        </aside>
      </div>
    </section>
  );
}
