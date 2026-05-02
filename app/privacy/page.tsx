import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "AI収益化ノートのプライバシーポリシーです。アクセス解析や広告掲載前提の記載を整理しています。",
  openGraph: {
    title: "プライバシーポリシー",
    description:
      "AI収益化ノートのプライバシーポリシーです。アクセス解析や広告掲載前提の記載を整理しています。",
  },
};

const sections = [
  {
    title: "個人情報の取り扱い",
    body: "本サイトでは、現時点で個人情報を保存するフォームや会員機能を実装していません。今後お問い合わせ機能を設置する場合は、取得目的、保管方法、削除依頼の手順を明記します。",
  },
  {
    title: "アクセス解析について",
    body: "公開後にアクセス解析ツールを利用する場合があります。利用する場合は、各ツールの規約に従い、Cookie等の利用について必要な説明を追記します。",
  },
  {
    title: "広告配信について",
    body: "Google AdSense等の広告配信を行う可能性があります。現時点では広告コードを設置しておらず、ページ上には広告枠のプレースホルダーのみを表示しています。",
  },
  {
    title: "外部リンクについて",
    body: "本サイトには外部サイトへのリンクを含む場合があります。外部サイトで提供される情報やサービスについて、本サイトは責任を負いかねます。",
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold text-moss">固定ページ</p>
      <h1 className="mt-3 text-4xl font-black tracking-normal text-ink">
        プライバシーポリシー
      </h1>
      <div className="mt-8 grid gap-4">
        {sections.map((section) => (
          <section key={section.title} className="rounded-lg border border-line bg-gradient-to-b from-surface to-paper p-6 shadow-soft">
            <h2 className="text-xl font-black tracking-normal text-ink">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-8 text-muted">{section.body}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 text-xs leading-6 text-muted">
        制定日: 2026年5月2日
      </p>
    </section>
  );
}
