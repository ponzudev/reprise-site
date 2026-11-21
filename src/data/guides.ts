// 練習ガイドの一覧（src/pages/guides/*.md と src/pages/<言語>/guides/*.md の frontmatter から作る。order の小さい順）。
// ガイドのレイアウトからも呼ぶので、読み込みが循環しないよう、使うときに読み込む。
import type { DocLang } from './docs';

type GuideModule = { frontmatter: { title: string; description: string; order?: number; lang?: DocLang } };

const modules = import.meta.glob<GuideModule>('../pages/**/guides/*.md');

/** その言語の練習ガイド。省くと日本語。 */
export async function getGuides(lang: DocLang = 'ja') {
  const entries = await Promise.all(
    Object.entries(modules).map(async ([file, load]) => {
      const { frontmatter } = await load();
      return {
        href: file.replace(/^\.\.\/pages/, '').replace(/\.md$/, ''),
        lang: frontmatter.lang ?? 'ja',
        title: frontmatter.title,
        description: frontmatter.description,
        order: frontmatter.order ?? 99,
      };
    }),
  );
  return entries.filter((guide) => guide.lang === lang).sort((a, b) => a.order - b.order);
}
