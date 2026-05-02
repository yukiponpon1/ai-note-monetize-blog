import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免責事項",
  description:
    "初心者に優しいAI図解ラボの免責事項です。AIツールの仕様変更、収益表現、外部リンクについて記載しています。",
  openGraph: {
    title: "免責事項",
    description:
      "初心者に優しいAI図解ラボの免責事項です。AIツールの仕様変更、収益表現、外部リンクについて記載しています。",
  },
};

const notices = [
  "本サイトの内容は、AIツールの利用や発信活動を検討するための一般的な情報です。",
  "紹介するAIツールの仕様、料金、利用条件は変更される可能性があります。利用前に公式情報を確認してください。",
  "本サイトでは、収益、成果、審査通過、作業時間の短縮を保証しません。",
  "有料noteや外部サービスを利用する場合は、内容、価格、返金条件を確認したうえで判断してください。",
  "本サイトの情報をもとに行った判断や行動によって生じた損失について、可能な範囲で責任を負いかねます。",
];

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
        Disclaimer
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold tracking-normal text-ink">
        免責事項
      </h1>
      <section className="mt-8 rounded-lg border border-line bg-surface p-6 shadow-soft">
        <ul className="grid gap-4">
          {notices.map((notice) => (
            <li key={notice} className="text-sm leading-8 text-muted">
              {notice}
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-8 text-xs leading-6 text-muted">
        制定日: 2026年5月2日
      </p>
    </section>
  );
}
