# reprise-site

Reprise（リプライズ）のサイト。Astro でビルドし、Cloudflare Workers（静的アセット）で
`https://reprise.ponzudev.app` として配信する。

| URL | ファイル | 内容 |
|---|---|---|
| `/` | `src/pages/index.astro` | ランディングページ（スタイルと動きは `public/lp/`） |
| `/support` | `src/pages/support.md` | サポート・よくある質問（ストアの「サポート URL」） |
| `/privacy` | `src/pages/privacy.md` | プライバシーポリシー（ストアの「プライバシーポリシー URL」） |
| それ以外 | `src/pages/404.astro` | ページが見つからないとき |

- 文書ページ（サポート・プライバシーポリシー）は Markdown で書き、見た目は `src/layouts/DocLayout.astro` で揃える
- 画像・音声は `public/assets/`
- 原稿の元はアプリ側リポジトリ（`ponzudev/ShadowPlayer`）の `docs/support.md`・`docs/privacy-policy.md`。直すときは両方に反映する
- 外部のパッケージは Astro と Wrangler（デプロイ用）だけ。足すときは、本当に必要かを先に考える

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
