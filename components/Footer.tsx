import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  {
    heading: "コンテンツ",
    items: [
      { href: "/articles", label: "記事一覧" },
      { href: "/categories/agent-comparison", label: "AIエージェント比較" },
      { href: "/categories/ai-automation", label: "AI自動化" },
    ],
  },
  {
    heading: "サイト情報",
    items: [
      { href: "/profile", label: "プロフィール" },
      { href: "/contact", label: "お問い合わせ" },
      { href: "/free-gift", label: "無料プレゼント" },
    ],
  },
  {
    heading: "規約",
    items: [
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/disclaimer", label: "免責事項" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-[#302c28] bg-ink text-white">
    <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg font-black text-coral">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/48">
            AIツールの変化を前提に、比較・検証・制作フロー・安全な使い方を図解で整理するブログです。
            収益や成果を保証せず、読者自身が判断するための材料を提供します。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["AIエージェント", "AI自動化", "安全対策", "初心者向け"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Nav groups */}
        {footerLinks.map((group) => (
          <nav key={group.heading} aria-label={`${group.heading}ナビゲーション`}>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/35">
              {group.heading}
            </p>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center">
        <p className="text-xs text-white/28">
          Copyright &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-xs text-white/22">
          Powered by Next.js &amp; Vercel
        </p>
      </div>
    </div>
  </footer>
);
