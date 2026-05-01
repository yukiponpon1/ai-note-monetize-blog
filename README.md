# AI収益化ノート

AI自動化、AIコーディングエージェント比較、note販売導線、AdSense準備に対応した日本語ブログサイトです。

## 開発コマンド

```bash
npm install
npm run dev
npm run build
```

記事は `content/articles` 配下の Markdown で管理します。

`npm run dev` は静的エクスポートを生成してローカル確認サーバーを起動します。
Next.js 標準の開発サーバーを使う場合は `npm run next:dev` を実行します。

## 公開時のSEO設定

Vercelでは環境変数 `NEXT_PUBLIC_SITE_URL` に本番URLを設定してください。
例: `https://example.com`

この値はOGP、`robots.txt`、`sitemap.xml` のURL生成に使います。
