import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

// statically cached
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    // [locale]: Orama options
    cn: {
      components: {
        tokenizer: createTokenizer()
      },
      search: {
        threshold: 0,
        tolerance: 0,
      }
    }
  }
});
