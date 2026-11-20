// 各言語のトップページ（src/pages/[lang].astro）に使う文面を、アプリ側リポジトリ（ponzudev/ShadowPlayer）の
// App Store の文面から取り込み、src/data/store-text.json に書き出す。
//
//   node scripts/store-text.mjs <ShadowPlayer の store フォルダ>
//
// ストアの文面（store/metadata/<ロケール>/）とスクリーンショットの見出し（store/screenshots/captions.json）を
// そのまま使うので、ストアの文面を変えたらこれを流し直す。訳はここでは作らない。
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const store = process.argv[2];
if (!store) {
  console.error('使い方: node scripts/store-text.mjs <ShadowPlayer の store フォルダ>');
  process.exit(1);
}

// サイトの言語 → ストアの文面のロケールと、スクリーンショットの見出しのキー。
const languages = {
  en: { metadata: 'en-US', captions: 'en' },
  ko: { metadata: 'ko', captions: 'ko' },
  'zh-hans': { metadata: 'zh-Hans', captions: 'zh-Hans' },
  'zh-hant': { metadata: 'zh-Hant', captions: 'zh-Hant' },
};

const read = (...parts) => readFileSync(join(store, ...parts), 'utf8').trim();
const captions = JSON.parse(read('screenshots', 'captions.json'));

/** 説明文を、前書きの段落と「■ 見出し」ごとの箇条書きに分ける。 */
function parseDescription(text) {
  const intro = [];
  const sections = [];
  for (const line of text.split('\n').map((l) => l.trim()).filter(Boolean)) {
    if (line.startsWith('■')) sections.push({ title: line.slice(1).trim(), items: [] });
    else if (sections.length === 0) intro.push(line);
    else if (line.startsWith('・')) sections.at(-1).items.push(line.slice(1).trim());
    // 箇条書きでない行（利用規約・プライバシーポリシーの URL）は、ページ側でリンクにするので取り込まない
  }
  return { intro, sections };
}

const out = {};
for (const [lang, source] of Object.entries(languages)) {
  const { intro, sections } = parseDescription(read('metadata', source.metadata, 'description.txt'));
  if (intro.length !== 2 || sections.length !== 8) {
    throw new Error(`${lang}: 説明文の形が変わっています（前書き ${intro.length} 段落・見出し ${sections.length} 個）。ページ側の並びも見直してください`);
  }
  const caption = captions[source.captions];
  out[lang] = {
    subtitle: read('metadata', source.metadata, 'subtitle.txt'),
    promotionalText: read('metadata', source.metadata, 'promotional_text.txt'),
    intro: intro[0],
    premiumLegend: intro[1],
    // 見出しの改行は、中国語では詰め、ほかは空白にする。
    // 見出しの並びはどの言語も同じ: 分割・再生・学習記録・言語・プライバシー・取り込み・Premium・動作環境
    features: sections.slice(0, 6),
    premium: { title: sections[6].title, items: sections[6].items.slice(0, 2) },
    requirement: sections[7].items[0],
    slides: captions.slides.map((id) => ({ id, title: caption[id][0].replace(/\n/g, lang.startsWith('zh') ? '' : ' '), text: caption[id][1] })),
  };
}

writeFileSync(new URL('../src/data/store-text.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(`src/data/store-text.json を書き出しました（${Object.keys(out).join('・')}）`);
