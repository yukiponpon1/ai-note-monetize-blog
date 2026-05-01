import Link from "next/link";
import { siteConfig } from "@/lib/site";

type ArticleCtaProps = {
  title: string;
  text: string;
};

export const ArticleCta = ({ title, text }: ArticleCtaProps) => (
  <section className="rounded-2xl border border-sky/40 bg-gradient-to-br from-surface via-surface to-paper px-5 py-6 text-ink shadow-glow sm:px-7">
    <p className="text-sm font-semibold text-sky">有料noteへの案内</p>
    <h2 className="mt-2 text-2xl font-bold tracking-normal">{title}</h2>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{text}</p>
    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/note"
        className="inline-flex items-center justify-center rounded-full bg-sky px-5 py-3 text-sm font-bold text-white transition hover:bg-coral"
      >
        note販売ページを見る
      </Link>
      <Link
        href="/free-gift"
        className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-bold text-ink transition hover:border-sky hover:bg-sky/10"
      >
        無料特典から試す
      </Link>
    </div>
    <p className="mt-4 text-xs leading-6 text-muted">
      noteの販売先URLは公開時に差し替えてください。現在の外部リンク候補: {siteConfig.noteUrl}
    </p>
  </section>
);
