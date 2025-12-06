import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { resources } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';

export default async function Page(
  props: PageProps<'/[lang]/resources/[[...slug]]'>,
) {
  const params = await props.params;
  const { slug, lang } = params;
  const page = resources.getPage(slug, lang);
  if (!page) notFound();

  const { body: MDX, lastModified } = page.data;

  return (
    <DocsPage
      toc={Array.isArray(page.data.toc) ? page.data.toc : undefined}
      full={page.data.full}
      lastUpdate={lastModified ? new Date(lastModified) : undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(resources, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return resources.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[lang]/resources/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = resources.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
