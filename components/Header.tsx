import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { navigation, siteConfig } from "@/lib/site";

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-[#3a3530] bg-ink text-white shadow-[0_8px_28px_rgba(26,23,20,0.18)]">
    <div className="border-b border-white/10 bg-white/[0.03]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs text-white/60 sm:px-6 lg:px-8">
        <p>AI活用を、図解と比較で分かりやすく。</p>
        <Link href="/contact" className="font-bold text-coral transition hover:text-white">
          お問い合わせ
        </Link>
      </div>
    </div>
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[auto_minmax(260px,360px)_auto] lg:items-center lg:px-8">
      <Link href="/" className="inline-flex min-w-0 items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-sky text-sm font-black text-white">
          AI
        </span>
        <span className="inline-flex min-w-0 flex-col">
          <span className="text-base font-black tracking-normal text-coral sm:text-lg">
            {siteConfig.name}
          </span>
          <span className="text-xs text-white/55">
            AIエージェント比較と実践図解
          </span>
        </span>
      </Link>
      <div className="order-3 lg:order-none">
        <SearchForm id="header-search" compact placeholder="記事を検索" />
      </div>
      <nav
        aria-label="主要ナビゲーション"
        className="flex flex-wrap gap-2 lg:justify-end"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded border border-transparent px-3 py-2 text-sm font-bold text-white/65 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);
