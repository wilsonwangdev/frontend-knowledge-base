import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    tags: z.array(z.string()).optional(),
    preview: z.string().optional(),
    date: z.iso.date().or(z.date()),
  }),
});

export const resources = defineCollections({
  type: 'doc',
  dir: 'content/resources',
  schema: frontmatterSchema.extend({
    description: z.string().optional(),
    preview: z.string().optional(),
  }),
});

export const ai = defineCollections({
  type: 'doc',
  dir: 'content/ai',
  schema: frontmatterSchema.extend({
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    preview: z.string().optional(),
    date: z.iso.date().or(z.date()).optional(),
    description: z.string().optional(),
  }),
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    // MDX options
  },
});
