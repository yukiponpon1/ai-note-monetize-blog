export const siteConfig = {
  name: "AI収益化ノート",
  description:
    "AI自動化とAIコーディングエージェントを、無理のない副業導線として学ぶ日本語ブログです。",
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
