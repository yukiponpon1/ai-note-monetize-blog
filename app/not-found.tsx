import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
        Not Found
      </p>
      <h1 className="mt-3 font-serif text-3xl font-bold tracking-normal text-ink">
        URLを確認してください。
      </h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        記事が移動したか、まだ公開前のページにアクセスしている可能性があります。
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex rounded-md bg-sky px-5 py-3 text-sm font-bold text-white hover:bg-coral"
      >
        ホームへ戻る
      </Link>
    </section>
  );
}
