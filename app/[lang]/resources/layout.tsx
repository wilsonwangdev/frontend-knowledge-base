import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { resources } from '@/lib/source';

export default async function Layout({ params, children }: LayoutProps<'/[lang]/resources'>) {
  const { lang } = await params;

  return (
    <DocsLayout {...baseOptions(lang)} tree={resources.pageTree[lang]}>
      {children}
    </DocsLayout>
  );
}

