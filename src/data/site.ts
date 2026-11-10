// サイト全体で使う定数。料金や対応言語を変えるときは、ここと src/data/faq.ts を直す。
export const site = {
  name: 'Reprise',
  nameJa: 'リプライズ',
  url: 'https://reprise.ponzudev.app',
  appId: '6825080777',
  appStoreUrl:
    'https://apps.apple.com/jp/app/reprise-%E3%83%AA%E3%83%97%E3%83%A9%E3%82%A4%E3%82%BA/id6825080777',
  supportEmail: 'reprise.app.support@gmail.com',
  ogImage: '/assets/og.png',
  requirement: 'iPhone 対応 · iOS 26 以降',
  price: { monthly: 600, yearly: 6000 },
  // アプリの StudySettings.supportedLocales と揃える。
  languages: [
    '英語（アメリカ・イギリス・オーストラリア）',
    '日本語',
    '中国語（簡体）',
    '韓国語',
    'フランス語',
    'ドイツ語',
    'スペイン語',
  ],
};

/** パスから正規 URL を作る（末尾スラッシュなし。トップだけ `/`）。 */
export function canonical(path: string): string {
  const clean = path.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '');
  return site.url + (clean === '' ? '/' : clean);
}
