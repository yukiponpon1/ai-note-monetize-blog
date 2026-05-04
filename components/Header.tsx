import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { navigation, siteConfig } from "@/lib/site";

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0d0b09]/90 text-white shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.36)]"
    style={{ backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)" }}
  >
    {/* Top strip */}
    <div className="border-b border-white/6 bg-white/[0.025]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium tracking-wide text-white/38">
          AI活用を、図解と比較で分かりやすく。
        </p>
        <Link
          href="/contact"
          className="text-[11px] font-bold tracking-wide text-[#e8733a]/80 transition hover:text-[#e8733a]"
        >
          お問い合わせ →
        </Link>
      </div>
    </div>

    {/* Main header */}
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-3.5 sm:px-6 lg:grid-cols-[auto_minmax(240px,340px)_auto] lg:items-center lg:px-8">
      {/* Logo */}
      <Link href="/" className="inline-flex min-w-0 items-center gap-3 group">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#c94a2a] text-xs font-black text-white shadow-[0_0_0_1px_rgba(201,74,42,0.35),0_4px_16px_rgba(201,74,42,0.3)] transition group-hover:shadow-[0_0_0_1px_rgba(232,115,58,0.5),0_4px_24px_rgba(232,115,58,0.36)]">
          AI
        </span>
        <span className="inline-flex min-w-0 flex-col">
          <span className="truncate text-sm font-black text-white/90 transition group-hover:text-white sm:text-base">
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-medium tracking-wide text-white/35">
            AIエージェント比較と実践図解
          </span>
        </span>
      </Link>

      {/* Search */}
      <div className="order-3 lg:order-none">
        <SearchForm id="header-search" compact placeholder="記事を検索" />
      </div>

      {/* Nav */}
      <nav aria-label="主要ナビゲーション" className="flex flex-wrap gap-1 lg:justify-end">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-transparent px-3 py-2 text-[13px] font-bold text-white/52 transition hover:border-white/8 hover:bg-white/[0.05] hover:text-white/90"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);
