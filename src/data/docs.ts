// 文書ページ（サポート・プライバシーポリシー・練習ガイド）を言語ごとに出すための定数と関数。
// 枠の言葉（ナビゲーション・フッターなど）は src/data/docs/<言語>.json。本文は src/pages/<言語>/ の Markdown。
// 日本語はトップの下（/support・/privacy・/guides）、ほかの言語は /<言語>/support のように置く。
import { languages, type Lang } from './i18n';

export type DocLang = 'ja' | Lang;

export interface DocStrings {
  home: string;
  guides: string;
  support: string;
  privacy: string;
  privacyPolicy: string;
  navLabel: string;
  tagline: string;
  titleSuffix: string;
  defaultDescription: string;
  /** 文書ページの終わりのアプリの案内（対応端末まで含む）。 */
  appCard: string;
  otherGuides: string;
  guidesTitle: string;
  guidesDescription: string;
  guidesLead: string;
}

const files = import.meta.glob<DocStrings>('./docs/*.json', { eager: true, import: 'default' });

export const docStrings = Object.fromEntries(
  Object.entries(files).map(([file, value]) => [file.replace(/^\.\/docs\//, '').replace(/\.json$/, ''), value]),
) as Record<DocLang, DocStrings>;

/** サイトにある言語の順（言語の切り替えに出す順）。 */
export const docLangs = Object.keys(languages) as DocLang[];

/** その言語での文書ページのパス。rest は 'support'・'guides/shadowing' など（先頭の / なし）。 */
export function docPath(lang: DocLang, rest: string): string {
  return lang === 'ja' ? `/${rest}` : `${languages[lang].path}/${rest}`;
}

/** パス（/fr/guides/shadowing など）を、言語と、言語に関係ない部分（guides/shadowing）に分ける。 */
export function splitDocPath(pathname: string): { lang: DocLang; rest: string } {
  const path = pathname.replace(/\.html$/, '').replace(/\/$/, '');
  for (const lang of docLangs) {
    if (lang === 'ja') continue;
    const prefix = languages[lang].path + '/';
    if (path.startsWith(prefix)) return { lang, rest: path.slice(prefix.length) };
  }
  return { lang: 'ja', rest: path.replace(/^\//, '') };
}

// どの言語にどの文書ページがあるか（言語の切り替えと hreflang に、ある言語だけを出すため）。
const pageFiles = Object.keys(import.meta.glob('../pages/**/*.{md,astro}'));
const existing = new Set(
  pageFiles.map((file) => file.replace(/^\.\.\/pages/, '').replace(/\.(md|astro)$/, '').replace(/\/index$/, '')),
);

/** rest の文書ページがある言語と、そのパス。 */
export function docAlternates(rest: string): Partial<Record<DocLang, string>> {
  const result: Partial<Record<DocLang, string>> = {};
  for (const lang of docLangs) {
    const path = docPath(lang, rest);
    if (existing.has(path)) result[lang] = path;
  }
  return result;
}
