# reprise-site

Reprise（リプライズ）のサイト。Astro でビルドし、Cloudflare Workers（静的アセット）で
`https://reprise.ponzudev.app` として配信する。

| URL | ファイル | 内容 |
|---|---|---|
| `/` | `src/pages/index.astro` | ランディングページ（スタイルは `src/styles/lp.css`、体験版の動きは `src/scripts/demo.js`） |
| `/en`・`/ko`・`/zh-hans`・`/zh-hant`・`/es`・`/pt-br`・`/pt-pt`・`/fr`・`/de`・`/it`・`/nl`・`/sv`・`/ru` | `src/pages/[lang].astro` | 日本語以外の 13 言語のトップページ（スタイルは `src/styles/intl.css`）。下の「ほかの言語のページ」 |
| `/<言語>/guides`・`/<言語>/guides/◯◯`・`/<言語>/support`・`/<言語>/privacy` | `src/pages/<言語>/` | 日本語のほかの 13 言語の練習ガイド・サポート・プライバシーポリシー（`/en/support`、`/fr/privacy` など） |
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

## ほかの言語のページ

アプリは 14 の言語、App Store の文面は 18 ロケールに対応している。サイトのトップページは、アプリと同じ 14 の言語にある（日本語のほか、英語・韓国語・中国語（簡体字・繁体字）・スペイン語・ポルトガル語（ブラジル・ポルトガル）・フランス語・ドイツ語・イタリア語・オランダ語・スウェーデン語・ロシア語）。

- **紹介文は App Store の文面をそのまま使う。** `src/data/store-text.json` は、アプリ側リポジトリ（`ponzudev/ShadowPlayer`）の `store/metadata/<ロケール>/`（サブタイトル・プロモーション用テキスト・説明文）と `store/screenshots/captions.json`（スクリーンショットの見出し）から `node scripts/store-text.mjs <ShadowPlayer の store フォルダ>` で作る。ストアの文面を変えたら流し直す（訳をこちらで書き直さない）
- **画面は App Store と同じ紹介画像**（`public/assets/store/<言語>-1-split.webp` 〜 `7-privacy.webp` と高精細版 `@2x`。幅 660 と 1320）。App Store に出ている画像を取り込んだもので、ストアの画像を変えたら同じ名前で置き換える
- **枠の言葉**（見出し・ボタン・案内）と、言語ごとの URL・App Store の国は `src/data/i18n.ts`。App Store のバッジは `public/assets/app-store-badge-<言語>.svg`（出どころは `docs/app-store-badge.md`）
- **言語を足すとき**: `scripts/store-text.mjs` の `languages` と `src/data/i18n.ts` の `Lang`・`languages`・`strings` に足し、バッジ・紹介画像・QR コードを置く。`/s`（`src/pages/s.astro`）の言語の振り分けにも足す。ページ・サイトマップ・言語の切り替え・hreflang には自動で入る
- App Store のリンクは、英語は国コードなし（見る人の国のストアが開く）、日本語は日本のストア、ほかはその言語でページが出る国のストア（韓国・中国・台湾・スペイン・ブラジル・ポルトガル・フランス・ドイツ・イタリア・オランダ・スウェーデン・ロシア）。スペイン語のページはスペイン向けの文面を使う（メキシコ向けのストアの文面との違いは言い回しだけ）
- 練習ガイド・サポート・プライバシーポリシーは 14 言語すべてにある。ほかの言語の文書は `src/pages/<言語>/` に置き、先頭に `lang: <言語>` を書く。ナビゲーション・フッター・アプリの案内などの枠の言葉は `src/data/docs/<言語>.json`。同じ文書のほかの言語版は自動で hreflang とフッターの言語の切り替えに出る（`src/data/docs.ts`）
- `/privacy` の後半には英語版も残している（アプリの購読画面と、ストアの説明文の「プライバシーポリシー」が `/privacy` を指しているため）
- ほかの言語の文書は日本語の文書の訳。画面の言葉（ボタン・メニュー名）は、アプリのその言語の表示（String Catalog）と同じにする。日本語を直したら、ほかの言語も直す
- App Store Connect の各ロケールの「マーケティング URL」「サポート URL」「プライバシーポリシー URL」は、アプリ側リポジトリの `store/metadata/<ロケール>/marketing_url.txt`・`support_url.txt` で、その言語のページへ向ける

## 検索・共有のための設定

- 各ページの `<head>`（タイトル・説明・正規 URL・OGP・Smart App Banner・構造化データ）は `src/components/Head.astro` にまとめている
- App Store の URL・料金・対応言語は `src/data/site.ts`、トップの「よくある質問」は `src/data/faq.ts`（画面と構造化データの両方に使う）。料金や機能が変わったら、この 2 つとトップの料金表を直す
- 練習ガイドを足すときは、`src/pages/guides/`（ほかの言語は `src/pages/<言語>/guides/`）に Markdown を置く。先頭に `layout`・`title`・`description`・`order`（並び順）・`published`（公開日）を書くと、一覧・サイトマップ・ほかのガイドからのリンクに自動で入る
- SNS 共有用の画像は `public/assets/og.png`（1200×630）。元は `scripts/og.html` で、`npx -p playwright node scripts/og.mjs` で作り直す
- `/s`（`src/pages/s.astro`）は、アプリの学習記録の共有で投稿文に入るリンクの行き先。iPhone なら App Store へ、それ以外はブラウザーの言語に合うトップページへ送る（検索には出さない）。アプリが投稿文に入れる URL なので、パスを変えない。`src/data/site.ts` の `appStoreProviderId` に App Store Connect のプロバイダ ID を入れると、サイトの App Store へのリンクすべてにキャンペーンの印が付き、どこから来た人がダウンロードしたかを App Store Connect の「App アナリティクス」で見られる（言語ごとのページは `site-<言語>`（`site-ja`・`site-en`・`site-de` など。言語は URL のパスと同じ）、QR コードは `qr-<言語>`、学習記録の共有は `share`）
- 最後の案内に出す QR コード（日本語は `public/assets/appstore-qr.svg`、ほかの言語は `appstore-qr-<言語>.svg`）は App Store の URL から作ったもの。URL を変えたら `swift scripts/qr.swift <URL> <出力する .svg>` で作り直す（Mac の Core Image で作り、読み取れることを確かめてから書き出す）。URL は、その言語のストアの短い URL にキャンペーンの印を付けたもの（例: `https://apps.apple.com/kr/app/id6825080777?pt=<プロバイダ ID>&ct=qr-ko&mt=8`。`ct` は `qr-<言語>`。`qr-ja`・`qr-en`・`qr-pt-br` など）。QR コードは画像なので、プロバイダ ID を変えたら作り直す

## スクリーンショットを差し替えるとき

トップの画面は、スクリーンショットを iPhone の枠（`scripts/iphone-frame.png`）にはめ込んだ画像を使っている。
元のスクリーンショット（原寸の PNG がいちばんきれいに仕上がる。`public/assets/04-player-playing.webp` などの縮小版でもよい）から、次で枠つきの画像を作り直す
（Python に Pillow と NumPy が要る）。

```sh
python3 scripts/frame.py scripts/iphone-frame.png public/assets/04-player-playing.webp public/assets/phone-04-player-playing.webp
```

| 枠つきの画像 | 使っている場所 |
|---|---|
| `public/assets/phone-04-player-playing.webp` | 最初の画面、SNS 共有用の画像 |
| `public/assets/phone-13-podcast-picker.webp` | 「使える教材」 |
| `public/assets/phone-07-study-log.webp` | 学習記録 |
| `public/assets/phone-11-player-text-hidden.webp`・`phone-06-sentence-editor.webp`・`phone-14-podcast-episodes.webp`・`phone-08-study-log-graph.webp` | 「特徴」の下に並べた 4 枚（`src/pages/index.astro` の `screens`） |

App Store と同じ紹介画像（文字入り）は `public/assets/store-1-split.webp`・`store-2-podcast.webp`・`store-3-check.webp`（幅 660 × 高さ 1434）。
ストアの画像を変えたら、同じ名前で置き換える。`src/pages/index.astro` の `gallery` に、画像の中の文字を代替テキストとして書いている。

画素密度の高い画面向けに、どの画像にも高精細版（`◯◯@2x.webp`）を置いている。枠つきは末尾に幅 `1260` を付けて作り、
紹介画像は原寸（幅 1320）のまま WebP にする。差し替えるときは両方を作り直す。

```sh
python3 scripts/frame.py scripts/iphone-frame.png 画面.png public/assets/phone-04-player-playing@2x.webp 1260
```

最初の画面の画像を変えたら、SNS 共有用の画像（`public/assets/og.png`）も作り直す。
