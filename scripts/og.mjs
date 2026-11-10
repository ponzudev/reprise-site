// scripts/og.html を 1200×630 の画像にして public/assets/og.png へ書き出す。
// Playwright は依存に入れていない。使うときだけ `npx -p playwright node scripts/og.mjs` で実行する。
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(new URL('./og.html', import.meta.url).href);
await page.screenshot({ path: fileURLToPath(new URL('../public/assets/og.png', import.meta.url)) });
await browser.close();
