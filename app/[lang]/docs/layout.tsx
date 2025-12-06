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
            title: 'Basic',
            url: '/docs/basic',
          },
          {
            title: 'Algorithms',
            url: '/docs/algorithms',
          },
          {
            title: 'Design Patterns',
            url: '/docs/design-patterns',
          },
          {
            title: 'Frameworks',
            url: '/docs/frameworks',
          },
          {
            title: 'Web',
            url: '/docs/web',
          },
          {
            title: 'Modules',
            url: '/docs/modules',
          }
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
