// 練習ガイドの一覧（src/pages/guides/*.md の frontmatter から作る。order の小さい順）。
// ガイドのレイアウトからも呼ぶので、読み込みが循環しないよう、使うときに読み込む。
type GuideModule = { frontmatter: { title: string; description: string; order?: number } };

const modules = import.meta.glob<GuideModule>('../pages/guides/*.md');

export async function getGuides() {
  const entries = await Promise.all(
    Object.entries(modules).map(async ([file, load]) => {
      const { frontmatter } = await load();
      return {
        href: '/guides/' + file.split('/').pop()!.replace(/\.md$/, ''),
        title: frontmatter.title,
        description: frontmatter.description,
        order: frontmatter.order ?? 99,
      };
    }),
  );
  return entries.sort((a, b) => a.order - b.order);
}
