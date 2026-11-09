// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://reprise.ponzudev.app',
  // /support.html のように出力し、Cloudflare 側で /support として配信する（末尾スラッシュなし）。
  build: { format: 'file' },
  trailingSlash: 'never',
});
