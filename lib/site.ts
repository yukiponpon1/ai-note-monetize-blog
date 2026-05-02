export const siteConfig = {
  name: "初心者に優しいAI図解ラボ",
  description:
    "AI自動化とAIコーディングエージェントを、初心者にも分かりやすい図解と比較で学べる日本語ブログです。",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://ai-note-monetize-blog.vercel.app",
  noteUrl: "https://note.com/",
};

export const navigation = [
  { href: "/", label: "ホーム" },
  { href: "/articles", label: "記事一覧" },
  { href: "/categories", label: "カテゴリ" },
  { href: "/profile", label: "プロフィール" },
];
