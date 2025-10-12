'use client';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { useState } from 'react';
import { bundledLanguages, type BundledLanguage } from 'shiki';

export default function Example({ codeString, langType }: { codeString?: string, langType?: BundledLanguage }) {
  const [lang, setLang] = useState(langType ?? 'javascript');
  const [code, setCode] = useState(codeString ?? 'console.log("Hello World")');

  return (
    <div className="prose flex flex-col gap-4 rounded-lg bg-fd-background p-4">
      <div className="not-prose flex flex-col rounded-lg bg-fd-secondary text-fd-secondary-foreground">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as BundledLanguage)}
          className="w-fit bg-transparent px-4 py-2 text-sm focus-visible:outline-none"
        >
          {Object.keys(bundledLanguages).filter((lang) => (['javascript', 'typescript', 'markdown'] as BundledLanguage[]).includes(lang as BundledLanguage)).map((lang) => (
            <option value={lang} key={lang}>
              {lang}
            </option>
          ))}
        </select>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bg-transparent h-60 px-4 py-2 text-sm focus-visible:outline-none"
        />
      </div>
      <DynamicCodeBlock
        lang={lang}
        code={code}
        options={{
          themes: {
            light: 'catppuccin-latte',
            dark: 'catppuccin-mocha',
          },
        }}
      />
    </div>
  );
}