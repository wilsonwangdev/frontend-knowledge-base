import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[lang]/docs'>) {
  const { lang } = await params;
  return (
    <DocsLayout
      sidebar={{
        tabs: [
          {
            title: 'Algorithms',
            url: '/docs/algorithms',
          },
          {
            title: 'Modules',
            url: '/docs/modules',
          },
        ],
      }}
      {...baseOptions(lang)}
      tabMode='navbar'
      tree={source.pageTree[lang]}
    >
      {children}
    </DocsLayout>
  );
}
