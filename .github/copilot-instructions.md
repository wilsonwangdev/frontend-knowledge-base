# AI Agent Instructions for Frontend Knowledge Base

This is a Next.js-based documentation site using [Fumadocs](https://fumadocs.dev) for managing and displaying frontend development knowledge. Follow these guidelines to effectively assist with this codebase.

## Project Architecture

### Core Components
- **Content Structure**: All documentation content lives in `/content/docs/` organized by topic categories
- **Framework**: Uses Next.js App Router with language-based routing (`[lang]`)
- **Documentation Engine**: Fumadocs MDX for content processing and UI components
- **Search**: Custom search implementation at `/app/api/search/route.ts`

### Key Files
- `source.config.ts`: Configures MDX processing and frontmatter schemas
- `lib/source.ts`: Content source adapter implementation
- `lib/layout.shared.tsx`: Shared layout options
- `app/[lang]/(home)`: Main landing pages
- `app/[lang]/docs`: Documentation pages with [[...slug]] catch-all routing

## Development Workflows

### Setup and Development
```bash
# Install dependencies
pnpm install

# Start development server with turbo
pnpm dev
```

### Content Management
1. Documentation is written in MDX format
2. Each section requires an `index.mdx` and can have language variants (e.g., `index.cn.mdx`)
3. Navigation structure defined in `meta.json` files within content directories

### Conventions
- Use bilingual content structure with `.cn.mdx` suffix for Chinese variants
- MDX files support custom frontmatter with `preview` field (see `source.config.ts`)
- Content changes trigger automatic lastModifiedTime updates via git

## Project-Specific Patterns

### MDX Features
- Custom components available in `components/preview/`
- Dynamic code block support via `dynamic-codeblock.tsx`
- OpenGraph image generation for docs at `app/og/docs/[...slug]/`

### Data Flow
1. Content source → Fumadocs processing → Page rendering
2. Search: Client query → `/api/search` endpoint → Filtered results

### Quality Checks
- ESLint and Prettier enforced via lint-staged
- Husky pre-commit hooks for code quality
- Vitest for testing (run with `pnpm test`)

## Common Tasks
- Adding new documentation: Create MDX file in `/content/docs/` with appropriate frontmatter
- Modifying navigation: Update relevant `meta.json` in content directory
- Preview changes: Run development server and check both language variants