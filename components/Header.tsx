import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { navigation, siteConfig } from "@/lib/site";

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-xl">
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[auto_minmax(260px,420px)_auto] lg:items-center lg:px-8">
      <Link href="/" className="inline-flex w-fit items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sky to-coral text-sm font-black text-white shadow-glow">
          AI
        </span>
        <span className="inline-flex flex-col">
          <span className="text-lg font-bold tracking-normal text-ink">
            {siteConfig.name}
          </span>
          <span className="text-xs text-muted">AI活用を、現実的な収益導線へ</span>
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
            className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-muted transition hover:border-line hover:bg-surface hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);
