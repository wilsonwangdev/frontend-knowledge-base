import { Feed } from 'feed';
import { ai } from '@/lib/source';
import { NextResponse } from 'next/server';

export const revalidate = false;

const baseUrl = 'https://frontend-knowledge-base-wilson.vercel.app/en';

export function GET() {
  const feed = new Feed({
    title: 'AI Feed',
    id: `${baseUrl}/ai`,
    link: `${baseUrl}/ai`,
    language: 'en',
    copyright: 'All rights reserved 2025, Wilson Wang',
  });

  for (const page of ai
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.date as string).getTime() -
        new Date(a.data.date as string).getTime(),
    )) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: new Date(page.data.date as string),
      author: page.data.author
        ? [
            {
              name: page.data.author as string,
            },
          ]
        : undefined,
    });
  }

  return new NextResponse(feed.rss2());
}

