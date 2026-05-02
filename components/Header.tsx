import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { navigation, siteConfig } from "@/lib/site";

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-[#3a3530] bg-ink text-white">
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_minmax(260px,380px)_auto] lg:items-center lg:px-8">
      <Link href="/" className="inline-flex w-fit items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-sky text-sm font-black text-white">
          AI
        </span>
        <span className="inline-flex flex-col">
          <span className="font-mono text-lg font-bold tracking-normal text-coral">
            {siteConfig.name}
          </span>
          <span className="text-xs text-white/55">
            AIエージェント比較と実践ノート
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
            className="rounded-md border border-transparent px-3 py-2 text-sm font-medium text-white/65 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);
