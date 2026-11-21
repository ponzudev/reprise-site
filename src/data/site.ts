import { languages } from './i18n';

// サイト全体で使う定数。料金や対応言語を変えるときは、ここと src/data/faq.ts を直す。
export const site = {
  name: 'Reprise',
  nameJa: 'リプライズ',
  url: 'https://reprise.ponzudev.app',
  appId: '6825080777',
  appStoreUrl:
    'https://apps.apple.com/jp/app/reprise-%E3%83%AA%E3%83%97%E3%83%A9%E3%82%A4%E3%82%BA/id6825080777',
  // App Store Connect のキャンペーンリンクに付けるプロバイダ ID（pt）。
  // 入れると、サイトの各言語のページや学習記録の共有から来た人のダウンロード数を、App Store Connect の「App アナリティクス」で
  // キャンペーン別（site-<言語>（site-ja・site-en・site-de など）・share。QR コードは qr-<言語>）に見られる。
  // QR コード（public/assets/appstore-qr*.svg）にもこの ID が入っているので、変えたら QR コードも作り直す（README）。
  // 空のうちは、キャンペーンの印を付けずに App Store へ送る
  appStoreProviderId: '129358834',
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

/**
 * その言語の人に向けた App Store の URL。国コードが空の言語（英語）は、見る人の国のストアが開く URL にする。
 * 日本語は、これまでどおり日本のストアの URL（site.appStoreUrl。QR コードもこの URL から作っている）。
 */
export function appStoreUrl(lang: keyof typeof languages = 'ja'): string {
  if (lang === 'ja') return site.appStoreUrl;
  const storefront = languages[lang].storefront;
  return `https://apps.apple.com/${storefront ? storefront + '/' : ''}app/id${site.appId}`;
}

/**
 * どこから来たか（キャンペーン）の印を付けた App Store の URL。
 * プロバイダ ID（site.appStoreProviderId）が空のうちは、印を付けない URL を返す。
 */
export function appStoreCampaignUrl(campaign: string, lang: keyof typeof languages = 'ja'): string {
  const url = appStoreUrl(lang);
  if (!site.appStoreProviderId) return url;
  const query = new URLSearchParams({ pt: site.appStoreProviderId, ct: campaign, mt: '8' });
  return `${url}?${query}`;
}
