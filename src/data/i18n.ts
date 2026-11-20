// 日本語以外のトップページ（src/pages/[lang].astro）と、言語の切り替えに使う定数。
// アプリの紹介文そのものは App Store の文面を取り込んだ src/data/store-text.json を使い、
// ここにはページの枠（見出し・ボタン・案内）の言葉だけを置く。
import storeText from './store-text.json';

export type Lang = 'en' | 'ko' | 'zh-hans' | 'zh-hant';

export interface Language {
  /** URL のパス（/en など）。日本語はトップ（/）。 */
  path: string;
  /** <html lang> と hreflang に書く言語タグ。 */
  tag: string;
  /** og:locale。 */
  ogLocale: string;
  /** 言語の切り替えに出す、その言語での名前。 */
  label: string;
  /** App Store の国コード。空なら、見る人の国のストアが開く URL にする。 */
  storefront: string;
}

/** サイトにある言語。並びは言語の切り替えに出す順。 */
export const languages: Record<'ja' | Lang, Language> = {
  ja: { path: '/', tag: 'ja', ogLocale: 'ja_JP', label: '日本語', storefront: 'jp' },
  en: { path: '/en', tag: 'en', ogLocale: 'en_US', label: 'English', storefront: '' },
  ko: { path: '/ko', tag: 'ko', ogLocale: 'ko_KR', label: '한국어', storefront: 'kr' },
  'zh-hans': { path: '/zh-hans', tag: 'zh-Hans', ogLocale: 'zh_CN', label: '简体中文', storefront: 'cn' },
  'zh-hant': { path: '/zh-hant', tag: 'zh-Hant', ogLocale: 'zh_TW', label: '繁體中文', storefront: 'tw' },
};

export const langs = Object.keys(storeText) as Lang[];

interface Strings {
  /** <title>。 */
  title: string;
  /** 最初の画面の見出し（2 行）。 */
  headline: [string, string];
  skip: string;
  nav: { screens: string; features: string; pricing: string };
  /** バッジの代替テキスト（Apple のバッジの文言）。 */
  badgeAlt: string;
  badgeLabel: string;
  device: string;
  screens: { eyebrow: string; title: string; text: string };
  features: { eyebrow: string; title: string };
  pricing: { eyebrow: string; title: string; free: string; freeText: string; premium: string };
  closing: { eyebrow: string; noAccount: string; qr: string; qrAlt: string };
  footer: { support: string; privacy: string; terms: string; language: string; englishOnly: string };
  mobileCta: string;
}

export const strings: Record<Lang, Strings> = {
  en: {
    title: 'Reprise: Repeating Player | Shadowing and repeating, sentence by sentence',
    headline: ['One sentence at a time,', 'until you can say it.'],
    skip: 'Skip to content',
    nav: { screens: 'Screens', features: 'Features', pricing: 'Pricing' },
    badgeAlt: 'Download on the App Store',
    badgeLabel: 'Download Reprise on the App Store',
    device: 'iPhone',
    screens: { eyebrow: 'A LOOK INSIDE', title: 'See how it works.', text: 'Bring your own audio. Reprise turns it into sentences you can drill.' },
    features: { eyebrow: 'FEATURES', title: 'Everything Reprise does.' },
    pricing: { eyebrow: 'PRICING', title: 'Free to start.', free: 'Free', freeText: 'No account needed.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'START WITH ONE SENTENCE', noAccount: 'No account needed', qr: 'On a computer? Scan this with your iPhone camera.', qrAlt: 'QR code that opens Reprise on the App Store' },
    footer: { support: 'Support', privacy: 'Privacy Policy', terms: 'Terms of Use', language: 'Language', englishOnly: '' },
    mobileCta: 'Speaking practice, free.',
  },
  ko: {
    title: 'Reprise: Repeating Player | 한 문장씩 연습하는 쉐도잉·리피팅 플레이어',
    headline: ['그 한 문장을,', '말할 수 있을 때까지.'],
    skip: '본문으로 건너뛰기',
    nav: { screens: '화면', features: '기능', pricing: '요금' },
    badgeAlt: 'App Store에서 다운로드 하기',
    badgeLabel: 'App Store에서 Reprise 다운로드',
    device: 'iPhone',
    screens: { eyebrow: 'A LOOK INSIDE', title: '화면으로 살펴보기', text: '가지고 있는 음성을 가져오면, 한 문장씩 연습할 수 있는 교재가 돼요.' },
    features: { eyebrow: 'FEATURES', title: 'Reprise의 기능' },
    pricing: { eyebrow: 'PRICING', title: '무료로 시작하세요.', free: '무료', freeText: '계정 등록이 필요 없어요.', premium: 'Reprise Premium' },
    closing: { eyebrow: '오늘의 한 문장부터', noAccount: '계정 등록 없음', qr: '컴퓨터로 보고 있다면 iPhone 카메라로 스캔하세요.', qrAlt: 'App Store의 Reprise 페이지를 여는 QR 코드' },
    footer: { support: '지원', privacy: '개인정보 처리방침', terms: '이용 약관', language: '언어', englishOnly: '영어' },
    mobileCta: '소리 내어 연습하기, 무료로.',
  },
  'zh-hans': {
    title: 'Reprise: Repeating Player | 逐句练习的影子跟读·复述播放器',
    headline: ['这一句，', '练到说得出口。'],
    skip: '跳到正文',
    nav: { screens: '界面', features: '功能', pricing: '价格' },
    badgeAlt: 'App Store 下载',
    badgeLabel: '在 App Store 下载 Reprise',
    device: 'iPhone',
    screens: { eyebrow: 'A LOOK INSIDE', title: '看看怎么用', text: '导入你手头的音频，它就变成可以逐句练习的教材。' },
    features: { eyebrow: 'FEATURES', title: 'Reprise 的功能' },
    pricing: { eyebrow: 'PRICING', title: '免费开始。', free: '免费', freeText: '无需注册账户。', premium: 'Reprise Premium' },
    closing: { eyebrow: '从今天的一句开始', noAccount: '无需注册账户', qr: '正在用电脑浏览？请用 iPhone 相机扫描。', qrAlt: '打开 App Store 中 Reprise 页面的二维码' },
    footer: { support: '支持', privacy: '隐私政策', terms: '使用条款', language: '语言', englishOnly: '英文' },
    mobileCta: '开口练习，免费。',
  },
  'zh-hant': {
    title: 'Reprise: Repeating Player | 逐句練習的影子跟讀・複述播放器',
    headline: ['這一句，', '練到說得出口。'],
    skip: '跳到內文',
    nav: { screens: '畫面', features: '功能', pricing: '價格' },
    badgeAlt: '在 App Store 下載',
    badgeLabel: '在 App Store 下載 Reprise',
    device: 'iPhone',
    screens: { eyebrow: 'A LOOK INSIDE', title: '看看怎麼用', text: '匯入你手邊的音訊，它就變成可以逐句練習的教材。' },
    features: { eyebrow: 'FEATURES', title: 'Reprise 的功能' },
    pricing: { eyebrow: 'PRICING', title: '免費開始。', free: '免費', freeText: '不需註冊帳號。', premium: 'Reprise Premium' },
    closing: { eyebrow: '從今天的一句開始', noAccount: '不需註冊帳號', qr: '正在用電腦瀏覽？請用 iPhone 相機掃描。', qrAlt: '開啟 App Store 中 Reprise 頁面的 QR 碼' },
    footer: { support: '支援', privacy: '隱私權政策', terms: '使用條款', language: '語言', englishOnly: '英文' },
    mobileCta: '開口練習，免費。',
  },
};

export { storeText };
