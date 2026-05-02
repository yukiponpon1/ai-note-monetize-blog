import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/disclaimer", label: "免責事項" },
];

export const Footer = () => (
  <footer className="border-t border-[#3a3530] bg-ink text-white">
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
      <div>
        <p className="font-mono text-lg font-bold text-coral">{siteConfig.name}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
          AIツールの変化を前提に、比較、検証、制作フロー、販売導線を落ち着いて整理するブログです。
          収益や成果を保証するものではなく、読者自身が判断するための材料を提供します。
        </p>
      </div>
      <div className="flex flex-wrap items-start gap-3 md:justify-end">
        {footerLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/60 transition hover:border-coral hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);
