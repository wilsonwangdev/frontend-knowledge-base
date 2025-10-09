import { source } from '@/lib/source';
import { DynamicLink } from 'fumadocs-core/dynamic-link';

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const params = await props.params;
  const { lang } = params;
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <p className="text-fd-muted-foreground">
        <DynamicLink
          href="/[lang]/docs"
          className="text-fd-foreground font-semibold underline"
        >
          { lang === 'cn' ? '开始' : 'Get Started' }
        </DynamicLink>{' '}
      </p>
    </main>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}
