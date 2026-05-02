import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "AI収益化ノートへのお問い合わせページです。静的サイトのため送信処理は未実装です。",
  openGraph: {
    title: "お問い合わせ",
    description:
      "AI収益化ノートへのお問い合わせページです。静的サイトのため送信処理は未実装です。",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
        Contact
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold tracking-normal text-ink">
        ご連絡について
      </h1>
      <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
        現在は本番DB、API、個人情報を扱う送信処理を設置していません。
        公開時には運営者が管理できる連絡先、または安全に運用できるフォームへ差し替えてください。
      </p>
      <form className="mt-8 grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-soft">
        <label className="grid gap-2 text-sm font-bold text-ink">
          お名前
          <input
            type="text"
            disabled
            placeholder="公開時に入力欄を有効化"
            className="rounded-md border border-line bg-paper px-4 py-3 text-sm font-normal text-muted"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          メールアドレス
          <input
            type="email"
            disabled
            placeholder="送信先設定後に有効化"
            className="rounded-md border border-line bg-paper px-4 py-3 text-sm font-normal text-muted"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          お問い合わせ内容
          <textarea
            disabled
            rows={6}
            placeholder="このサンプルでは保存されません"
            className="rounded-md border border-line bg-paper px-4 py-3 text-sm font-normal text-muted"
          />
        </label>
        <button
          type="button"
          disabled
          className="rounded-md bg-sky/40 px-5 py-3 text-sm font-bold text-white"
        >
          送信機能は未設定です
        </button>
      </form>
    </section>
  );
}
