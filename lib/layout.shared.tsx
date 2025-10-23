import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      transparentMode: 'top',
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          {locale === 'cn' ? '前端知识库' : 'Frontend Knowledge Base'}
        </>
      ),
      url: `/${locale}`,
    },
    githubUrl: 'https://github.com/wilsonwangdev/frontend-knowledge-base',
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        type: 'main',
        text: locale === 'cn' ? '文档' : 'Documentations',
        url: `/${locale}/docs`,
      },
      {
        type: 'main',
        text: locale === 'cn' ? '博客' : 'Blog',
        url: `/${locale}/blog`,
      },
      {
        type: 'main',
        text: locale === 'cn' ? '游乐场' : 'Playground',
        url: `/${locale}/playground`,
      },
    ],
  };
}
