import { DynamicLink } from 'fumadocs-core/dynamic-link';

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const params = await props.params;
  const { lang } = params;
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">{ lang === 'cn' ? '前端知识库' : 'Frontend Knowledge Base'}</h1>
      <p className="text-fd-muted-foreground">
        { lang === 'cn' ? '点击 ' : 'You can open '}
        <DynamicLink
          href="/[lang]/docs"
          className="text-fd-foreground font-semibold underline"
        >
          { lang === 'cn' ? '这里' : 'here' }
        </DynamicLink>{' '}
        { lang === 'cn' ? '开始' : 'and see the documentation.' }
      </p>
    </main>
  );
}
