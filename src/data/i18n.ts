// 日本語以外のトップページ（src/pages/[lang].astro）と、言語の切り替えに使う定数。
// アプリの紹介文そのものは App Store の文面を取り込んだ src/data/store-text.json を使い、
// ここにはページの枠（見出し・ボタン・案内）の言葉だけを置く。
import storeText from './store-text.json';

export type Lang = 'en' | 'ko' | 'zh-hans' | 'zh-hant' | 'es' | 'pt-br' | 'pt-pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'ru';

export interface Language {
  /** URL のパス（/en など）。日本語はトップ（/）。 */
  path: string;
  /** <html lang> と hreflang に書く言語タグ。 */
  tag: string;
  /** og:locale。 */
  ogLocale: string;
  /** 言語の切り替えに出す、その言語での名前。 */
  label: string;
  /**
   * App Store の国コード。空なら、見る人の国のストアが開く URL にする。
   * 何か国かで話される言語（スペイン語・フランス語・ドイツ語など）は、その言語でストアのページが出る代表の国にしている
   * （iPhone では、どの国の URL でも自分の国のストアで開く）。
   */
  storefront: string;
}

/** サイトにある言語。並びは言語の切り替えに出す順。 */
export const languages: Record<'ja' | Lang, Language> = {
  ja: { path: '/', tag: 'ja', ogLocale: 'ja_JP', label: '日本語', storefront: 'jp' },
  en: { path: '/en', tag: 'en', ogLocale: 'en_US', label: 'English', storefront: '' },
  ko: { path: '/ko', tag: 'ko', ogLocale: 'ko_KR', label: '한국어', storefront: 'kr' },
  'zh-hans': { path: '/zh-hans', tag: 'zh-Hans', ogLocale: 'zh_CN', label: '简体中文', storefront: 'cn' },
  'zh-hant': { path: '/zh-hant', tag: 'zh-Hant', ogLocale: 'zh_TW', label: '繁體中文', storefront: 'tw' },
  es: { path: '/es', tag: 'es', ogLocale: 'es_ES', label: 'Español', storefront: 'es' },
  'pt-br': { path: '/pt-br', tag: 'pt-BR', ogLocale: 'pt_BR', label: 'Português (Brasil)', storefront: 'br' },
  'pt-pt': { path: '/pt-pt', tag: 'pt-PT', ogLocale: 'pt_PT', label: 'Português (Portugal)', storefront: 'pt' },
  fr: { path: '/fr', tag: 'fr', ogLocale: 'fr_FR', label: 'Français', storefront: 'fr' },
  de: { path: '/de', tag: 'de', ogLocale: 'de_DE', label: 'Deutsch', storefront: 'de' },
  it: { path: '/it', tag: 'it', ogLocale: 'it_IT', label: 'Italiano', storefront: 'it' },
  nl: { path: '/nl', tag: 'nl', ogLocale: 'nl_NL', label: 'Nederlands', storefront: 'nl' },
  sv: { path: '/sv', tag: 'sv', ogLocale: 'sv_SE', label: 'Svenska', storefront: 'se' },
  ru: { path: '/ru', tag: 'ru', ogLocale: 'ru_RU', label: 'Русский', storefront: 'ru' },
};

export const langs = Object.keys(storeText) as Lang[];

interface Strings {
  /** <title>。 */
  title: string;
  /** 最初の画面の見出し（2 行）。 */
  headline: [string, string];
  skip: string;
  nav: { screens: string; features: string; pricing: string };
  /** App Store のバッジの横幅（高さ 40 のときの幅。バッジの SVG の viewBox と同じ）。 */
  badgeWidth: number;
  /** バッジの代替テキスト（Apple のバッジの文言）。 */
  badgeAlt: string;
  badgeLabel: string;
  device: string;
  screens: { eyebrow: string; title: string; text: string };
  features: { eyebrow: string; title: string };
  pricing: { eyebrow: string; title: string; free: string; freeText: string; premium: string };
  closing: { eyebrow: string; noAccount: string; qr: string; qrAlt: string };
  /** englishOnly は、英語のページへ送るリンクに添える言葉（「英語」）。英語のページでは空。 */
  footer: { support: string; privacy: string; terms: string; language: string; englishOnly: string };
  mobileCta: string;
}

export const strings: Record<Lang, Strings> = {
  en: {
    badgeWidth: 120,
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
    badgeWidth: 130,
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
    badgeWidth: 109,
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
    badgeWidth: 109,
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
  es: {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Shadowing y repetición, frase a frase',
    headline: ['Frase a frase,', 'hasta que puedas decirla.'],
    skip: 'Saltar al contenido',
    nav: { screens: 'Pantallas', features: 'Funciones', pricing: 'Precios' },
    badgeAlt: 'Consíguelo en el App Store',
    badgeLabel: 'Descargar Reprise en el App Store',
    device: 'iPhone',
    screens: { eyebrow: 'UN VISTAZO', title: 'Mira cómo funciona.', text: 'Trae tu propio audio. Reprise lo convierte en frases que puedes practicar una a una.' },
    features: { eyebrow: 'FUNCIONES', title: 'Todo lo que hace Reprise.' },
    pricing: { eyebrow: 'PRECIOS', title: 'Empieza gratis.', free: 'Gratis', freeText: 'No necesitas cuenta.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'EMPIEZA CON UNA FRASE', noAccount: 'Sin cuenta', qr: '¿No estás en tu iPhone? Escanea el código con la cámara del iPhone.', qrAlt: 'Código QR que abre Reprise en el App Store' },
    footer: { support: 'Soporte', privacy: 'Política de privacidad', terms: 'Términos de uso', language: 'Idioma', englishOnly: 'en inglés' },
    mobileCta: 'Practica en voz alta, gratis.',
  },
  'pt-br': {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Shadowing e repetição, frase por frase',
    headline: ['Frase por frase,', 'até você conseguir dizer.'],
    skip: 'Pular para o conteúdo',
    nav: { screens: 'Telas', features: 'Recursos', pricing: 'Preços' },
    badgeAlt: 'Baixar na App Store',
    badgeLabel: 'Baixar o Reprise na App Store',
    device: 'iPhone',
    screens: { eyebrow: 'POR DENTRO', title: 'Veja como funciona.', text: 'Traga o seu próprio áudio. O Reprise o transforma em frases para você praticar uma a uma.' },
    features: { eyebrow: 'RECURSOS', title: 'Tudo o que o Reprise faz.' },
    pricing: { eyebrow: 'PREÇOS', title: 'Comece grátis.', free: 'Grátis', freeText: 'Não precisa de conta.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'COMECE COM UMA FRASE', noAccount: 'Sem conta', qr: 'Não está no iPhone? Escaneie o código com a câmera do iPhone.', qrAlt: 'QR code que abre o Reprise na App Store' },
    footer: { support: 'Suporte', privacy: 'Política de Privacidade', terms: 'Termos de Uso', language: 'Idioma', englishOnly: 'em inglês' },
    mobileCta: 'Pratique em voz alta, grátis.',
  },
  'pt-pt': {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Shadowing e repetição, frase a frase',
    headline: ['Frase a frase,', 'até a conseguir dizer.'],
    skip: 'Saltar para o conteúdo',
    nav: { screens: 'Ecrãs', features: 'Funcionalidades', pricing: 'Preços' },
    badgeAlt: 'Descarregar na App Store',
    badgeLabel: 'Descarregar o Reprise na App Store',
    device: 'iPhone',
    screens: { eyebrow: 'POR DENTRO', title: 'Veja como funciona.', text: 'Traga o seu próprio áudio. O Reprise transforma-o em frases para praticar uma a uma.' },
    features: { eyebrow: 'FUNCIONALIDADES', title: 'Tudo o que o Reprise faz.' },
    pricing: { eyebrow: 'PREÇOS', title: 'Comece gratuitamente.', free: 'Gratuito', freeText: 'Não é necessária conta.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'COMECE COM UMA FRASE', noAccount: 'Sem conta', qr: 'Não está no iPhone? Leia o código com a câmara do iPhone.', qrAlt: 'Código QR que abre o Reprise na App Store' },
    footer: { support: 'Suporte', privacy: 'Política de Privacidade', terms: 'Termos de Utilização', language: 'Idioma', englishOnly: 'em inglês' },
    mobileCta: 'Pratique em voz alta, grátis.',
  },
  fr: {
    badgeWidth: 127,
    title: 'Reprise: Repeating Player | Shadowing et répétition, phrase par phrase',
    headline: ['Une phrase à la fois,', 'jusqu’à savoir la dire.'],
    skip: 'Aller au contenu',
    nav: { screens: 'Écrans', features: 'Fonctions', pricing: 'Tarifs' },
    badgeAlt: 'Télécharger dans l’App Store',
    badgeLabel: 'Télécharger Reprise dans l’App Store',
    device: 'iPhone',
    screens: { eyebrow: 'APERÇU', title: 'Voyez comment ça marche.', text: 'Apportez votre propre audio. Reprise le transforme en phrases à travailler une par une.' },
    features: { eyebrow: 'FONCTIONS', title: 'Tout ce que fait Reprise.' },
    pricing: { eyebrow: 'TARIFS', title: 'Commencez gratuitement.', free: 'Gratuit', freeText: 'Aucun compte requis.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'COMMENCEZ PAR UNE PHRASE', noAccount: 'Sans compte', qr: 'Vous n’êtes pas sur votre iPhone ? Scannez le code avec l’appareil photo de l’iPhone.', qrAlt: 'Code QR qui ouvre Reprise dans l’App Store' },
    footer: { support: 'Assistance', privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', language: 'Langue', englishOnly: 'en anglais' },
    mobileCta: 'À voix haute, gratuitement.',
  },
  de: {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Shadowing und Nachsprechen, Satz für Satz',
    headline: ['Satz für Satz,', 'bis du ihn sagen kannst.'],
    skip: 'Zum Inhalt springen',
    nav: { screens: 'Einblicke', features: 'Funktionen', pricing: 'Preise' },
    badgeAlt: 'Laden im App Store',
    badgeLabel: 'Reprise im App Store laden',
    device: 'iPhone',
    screens: { eyebrow: 'EINBLICK', title: 'So funktioniert es.', text: 'Bring dein eigenes Audio mit. Reprise macht daraus Sätze, die du einzeln üben kannst.' },
    features: { eyebrow: 'FUNKTIONEN', title: 'Alles, was Reprise kann.' },
    pricing: { eyebrow: 'PREISE', title: 'Kostenlos starten.', free: 'Kostenlos', freeText: 'Kein Konto nötig.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'FANG MIT EINEM SATZ AN', noAccount: 'Kein Konto', qr: 'Nicht am iPhone? Scanne den Code mit der iPhone-Kamera.', qrAlt: 'QR-Code, der Reprise im App Store öffnet' },
    footer: { support: 'Support', privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', language: 'Sprache', englishOnly: 'Englisch' },
    mobileCta: 'Sprechen üben, kostenlos.',
  },
  it: {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Shadowing e ripetizione, una frase alla volta',
    headline: ['Una frase alla volta,', 'finché non riesci a dirla.'],
    skip: 'Vai al contenuto',
    nav: { screens: 'Schermate', features: 'Funzioni', pricing: 'Prezzi' },
    badgeAlt: 'Scarica su App Store',
    badgeLabel: 'Scarica Reprise su App Store',
    device: 'iPhone',
    screens: { eyebrow: 'UNO SGUARDO', title: 'Guarda come funziona.', text: 'Porta il tuo audio. Reprise lo trasforma in frasi da esercitare una alla volta.' },
    features: { eyebrow: 'FUNZIONI', title: 'Tutto quello che fa Reprise.' },
    pricing: { eyebrow: 'PREZZI', title: 'Inizia gratis.', free: 'Gratis', freeText: 'Nessun account richiesto.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'INIZIA DA UNA FRASE', noAccount: 'Nessun account', qr: 'Non sei su iPhone? Inquadra il codice con la fotocamera dell’iPhone.', qrAlt: 'Codice QR che apre Reprise su App Store' },
    footer: { support: 'Supporto', privacy: 'Informativa sulla privacy', terms: 'Condizioni d’uso', language: 'Lingua', englishOnly: 'in inglese' },
    mobileCta: 'Esercitati a voce alta, gratis.',
  },
  nl: {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Shadowing en nazeggen, zin voor zin',
    headline: ['Zin voor zin,', 'tot je hem kunt zeggen.'],
    skip: 'Naar de inhoud',
    nav: { screens: 'Schermen', features: 'Functies', pricing: 'Prijzen' },
    badgeAlt: 'Download in de App Store',
    badgeLabel: 'Download Reprise in de App Store',
    device: 'iPhone',
    screens: { eyebrow: 'EEN KIJKJE', title: 'Bekijk hoe het werkt.', text: 'Neem je eigen audio mee. Reprise maakt er zinnen van die je één voor één kunt oefenen.' },
    features: { eyebrow: 'FUNCTIES', title: 'Alles wat Reprise doet.' },
    pricing: { eyebrow: 'PRIJZEN', title: 'Begin gratis.', free: 'Gratis', freeText: 'Geen account nodig.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'BEGIN MET ÉÉN ZIN', noAccount: 'Geen account', qr: 'Niet op je iPhone? Scan de code met de camera van je iPhone.', qrAlt: 'QR-code die Reprise in de App Store opent' },
    footer: { support: 'Ondersteuning', privacy: 'Privacybeleid', terms: 'Gebruiksvoorwaarden', language: 'Taal', englishOnly: 'Engels' },
    mobileCta: 'Hardop oefenen, gratis.',
  },
  sv: {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Shadowing och upprepning, mening för mening',
    headline: ['En mening i taget,', 'tills du kan säga den.'],
    skip: 'Hoppa till innehållet',
    nav: { screens: 'Skärmar', features: 'Funktioner', pricing: 'Priser' },
    badgeAlt: 'Hämta i App Store',
    badgeLabel: 'Hämta Reprise i App Store',
    device: 'iPhone',
    screens: { eyebrow: 'EN TITT', title: 'Se hur det fungerar.', text: 'Ta med ditt eget ljud. Reprise gör om det till meningar som du kan öva på en i taget.' },
    features: { eyebrow: 'FUNKTIONER', title: 'Allt som Reprise gör.' },
    pricing: { eyebrow: 'PRISER', title: 'Börja gratis.', free: 'Gratis', freeText: 'Inget konto behövs.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'BÖRJA MED EN MENING', noAccount: 'Inget konto', qr: 'Inte på din iPhone? Skanna koden med iPhone-kameran.', qrAlt: 'QR-kod som öppnar Reprise i App Store' },
    footer: { support: 'Support', privacy: 'Integritetspolicy', terms: 'Användarvillkor', language: 'Språk', englishOnly: 'på engelska' },
    mobileCta: 'Öva på att tala, gratis.',
  },
  ru: {
    badgeWidth: 120,
    title: 'Reprise: Repeating Player | Шэдоуинг и повторение, предложение за предложением',
    headline: ['Фраза за фразой,', 'пока не получится.'],
    skip: 'Перейти к содержимому',
    nav: { screens: 'Экраны', features: 'Функции', pricing: 'Цены' },
    badgeAlt: 'Загрузите в App Store',
    badgeLabel: 'Загрузить Reprise в App Store',
    device: 'iPhone',
    screens: { eyebrow: 'КАК ЭТО ВЫГЛЯДИТ', title: 'Посмотрите, как это работает.', text: 'Добавьте своё аудио. Reprise превратит его в предложения, которые можно отрабатывать по одному.' },
    features: { eyebrow: 'ФУНКЦИИ', title: 'Всё, что умеет Reprise.' },
    pricing: { eyebrow: 'ЦЕНЫ', title: 'Начните бесплатно.', free: 'Бесплатно', freeText: 'Аккаунт не нужен.', premium: 'Reprise Premium' },
    closing: { eyebrow: 'НАЧНИТЕ С ОДНОГО ПРЕДЛОЖЕНИЯ', noAccount: 'Без аккаунта', qr: 'Смотрите с компьютера? Отсканируйте код камерой iPhone.', qrAlt: 'QR-код, открывающий Reprise в App Store' },
    footer: { support: 'Поддержка', privacy: 'Политика конфиденциальности', terms: 'Условия использования', language: 'Язык', englishOnly: 'на английском' },
    mobileCta: 'Практика речи, бесплатно.',
  },
};

export { storeText };
