import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://frontend-knowledge-base-wilson.vercel.app/en',
      siteName: 'Frontend Knowledge Base',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@wilsonwangx',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
    alternates: {
      types: {
        'application/rss+xml': [
          {
            title: 'AI Conversations Blog',
            url: 'https://https://frontend-knowledge-base-wilson.vercel.app/en/blog/rss.xml',
          },
        ],
      },
      ...override.alternates,
    },
  };
}
