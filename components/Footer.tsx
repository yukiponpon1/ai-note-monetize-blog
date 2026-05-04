import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    heading: "コンテンツ",
    links: [
      { href: "/articles", label: "記事一覧" },
      { href: "/categories/agent-comparison", label: "AIエージェント比較" },
      { href: "/categories/ai-automation", label: "AI自動化の実践" },
      { href: "/articles/ai-leak-guide", label: "安全なAI活用" },
    ],
  },
  {
    heading: "サイト情報",
    links: [
      { href: "/profile", label: "プロフィール・編集方針" },
      { href: "/free-gift", label: "無料プレゼント" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
  {
    heading: "規約・ポリシー",
    links: [
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/disclaimer", label: "免責事項" },
    ],
  },
];

const tags = ["AIエージェント", "AI自動化", "安全対策", "初心者向け", "図解"];

export const Footer = () => (
  <footer className="border-t border-white/8 bg-[#080604] text-white">
    {/* Top glow line */}
    <div
      className="h-px"
      style={{ background: "linear-gradient(90deg, transparent, rgba(201,74,42,0.4) 50%, transparent)" }}
      aria-hidden="true"
    />

    <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">

        {/* Brand column */}
        <div>
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#c94a2a] text-sm font-black text-white shadow-[0_0_0_1px_rgba(201,74,42,0.3),0_4px_20px_rgba(201,74,42,0.25)]">
              AI
            </span>
            <span className="font-serif text-base font-black text-white/90 transition group-hover:text-white">
              {siteConfig.name}
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-[13px] leading-7 text-white/38">
            AIツールの変化を前提に、比較・検証・制作フロー・安全な使い方を図解で整理するブログです。
            収益や成果を保証せず、読者自身が判断するための材料を提供します。
          </p>

          {/* Topic tags */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/8 px-3 py-1 text-[11px] font-bold text-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={`${col.heading}ナビゲーション`}>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/28">
              {col.heading}
            </p>
            <ul className="mt-5 space-y-3.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-white/45 transition hover:text-white/85"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/6 pt-8 sm:flex-row sm:items-center">
        <p className="text-[11px] text-white/22">
          Copyright &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-[11px] text-white/18">
          Powered by Next.js &amp; Vercel
        </p>
      </div>
    </div>
  </footer>
);
