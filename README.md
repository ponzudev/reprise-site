# reprise-site

Reprise（リプライズ）のサイト。Astro でビルドし、Cloudflare Workers（静的アセット）で
`https://reprise.ponzudev.app` として配信する。

| URL | ファイル | 内容 |
|---|---|---|
| `/` | `src/pages/index.astro` | ランディングページ（スタイルは `src/styles/lp.css`、体験版の動きは `src/scripts/demo.js`） |
| `/guides` | `src/pages/guides/index.astro` | 練習ガイドの一覧 |
| `/guides/◯◯` | `src/pages/guides/*.md` | 練習ガイド（シャドーイング・リピーティングなど。検索から来る人向けの記事） |
| `/support` | `src/pages/support.md` | サポート・よくある質問（ストアの「サポート URL」） |
| `/privacy` | `src/pages/privacy.md` | プライバシーポリシー（ストアの「プライバシーポリシー URL」） |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` | サイトマップ（ページを足すと自動で入る）。`public/robots.txt` から案内している |
| それ以外 | `src/pages/404.astro` | ページが見つからないとき |

- 文書ページ（サポート・プライバシーポリシー・練習ガイド）は Markdown で書き、見た目は `src/layouts/DocLayout.astro` で揃える
- 画像・音声は `public/assets/`
- サポートとプライバシーポリシーの原稿の元はアプリ側リポジトリ（`ponzudev/ShadowPlayer`）の `docs/support.md`・`docs/privacy-policy.md`。直すときは両方に反映する（こちらでは先頭に `layout`・`title`・`description` を足し、プライバシーポリシーへのリンクを `/privacy` にする）
- 外部のパッケージは Astro と Wrangler（デプロイ用）だけ。足すときは、本当に必要かを先に考える

## 検索・共有のための設定

- 各ページの `<head>`（タイトル・説明・正規 URL・OGP・Smart App Banner・構造化データ）は `src/components/Head.astro` にまとめている
- App Store の URL・料金・対応言語は `src/data/site.ts`、トップの「よくある質問」は `src/data/faq.ts`（画面と構造化データの両方に使う）。料金や機能が変わったら、この 2 つとトップの料金表を直す
- 練習ガイドを足すときは、`src/pages/guides/` に Markdown を置く。先頭に `layout`・`title`・`description`・`order`（並び順）・`published`（公開日）を書くと、一覧・サイトマップ・ほかのガイドからのリンクに自動で入る
- SNS 共有用の画像は `public/assets/og.png`（1200×630）。元は `scripts/og.html` で、`npx -p playwright node scripts/og.mjs` で作り直す
- 最後の案内に出す QR コード（`public/assets/appstore-qr.svg`）は App Store の URL から作ったもの。URL を変えたら作り直す

## スクリーンショットを差し替えるとき

トップで使っている画面は次の 3 枚（幅 660 × 高さ 1434 の WebP）。同じファイル名で置き換えれば、そのまま反映される。
縦横比を変えるときは、`src/pages/index.astro` の `width`・`height` も直す。

| ファイル | 使っている場所 |
|---|---|
| `public/assets/04-player-playing.webp` | 最初の画面、SNS 共有用の画像 |
| `public/assets/13-podcast-picker.webp` | 「使える教材」 |
| `public/assets/07-study-log.webp` | 学習記録 |

## 手元で動かす

```sh
npm install
npm run dev       # http://localhost:4321 で編集しながら確認
npm run preview   # ビルドして、本番と同じ Cloudflare の配信方法（wrangler dev）で確認
```

## デプロイ

`main` に push すると、Cloudflare の Workers Builds が自動でビルド・デプロイする。
PR ごとにプレビュー用の URL も出る。

初回だけ、Cloudflare のダッシュボードで次を設定する。

1. **Workers & Pages** → **Create** → **Import a repository** で GitHub を連携し、`ponzudev/reprise-site` を選ぶ
2. プロジェクト名は `reprise-site`（`wrangler.jsonc` の `name` と同じにする）
3. Build command: `npm run build` / Deploy command: `npx wrangler deploy`
4. デプロイが終わると、`wrangler.jsonc` の `routes` によって `reprise.ponzudev.app` の DNS と証明書が自動で作られる

## 旧 URL（GitHub Pages）

以前は `https://ponzudev.github.io/reprise-site/` で公開していた。アプリの古いバージョンと
App Store Connect にこの URL が残っているので、GitHub Pages は止めずに、新しい URL へ転送するページだけを置く。
転送用のページは `legacy-redirects` ブランチにある。

| 旧 URL | 転送先 |
|---|---|
| `/reprise-site/` | `/privacy` |
| `/reprise-site/support` | `/support` |
| `/reprise-site/lp/` | `/` |
