// サイトマップ。ページを足したら自動で入る（404 は除く）。外部パッケージを増やさないため手書きにしている。
import { canonical } from '../data/site';

const pages = import.meta.glob('./**/*.{astro,md}');

export function GET() {
  const urls = Object.keys(pages)
    .map((file) => file.slice(1).replace(/\.(astro|md)$/, '').replace(/\/index$/, '/'))
    .filter((path) => path !== '/404')
    .map((path) => canonical(path))
    .sort();
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
