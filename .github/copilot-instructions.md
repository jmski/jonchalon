# AI Coding Guidelines for jonchalon

## Architecture Overview
- **Framework**: Next.js 16 with App Router (React 19, TypeScript)
- **Styling**: Tailwind CSS v4 with inline theme configuration
- **Key Features**: React Compiler enabled, path alias `@/*` maps to `./`

## Development Workflow
- **Start dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Production start**: `npm run start`
- **Linting**: `npm run lint` (ESLint 9 with flat config, Next.js rules)

## Code Patterns
- **Imports**: Use `@/*` for relative imports from project root (e.g., `@/components/Button`)
- **Fonts**: Geist Sans/Mono loaded via `next/font/google`, applied via CSS variables
- **Dark Mode**: Implemented with CSS custom properties (`--background`, `--foreground`) and Tailwind's `dark:` classes
- **Images**: Use `next/image` with priority for above-the-fold images
- **Layout**: Root layout in `app/layout.tsx` sets HTML lang, fonts, and global styles

## Configuration Files
- `next.config.ts`: Enables React Compiler
- `tsconfig.json`: ES2017 target, bundler resolution, JSX as `react-jsx`
- `eslint.config.mjs`: Flat config with Next.js core web vitals and TypeScript rules
- `postcss.config.mjs`: Tailwind CSS v4 plugin
- `app/globals.css`: Tailwind import, custom theme variables for background/foreground

## Styling Conventions
- Use Tailwind utility classes directly in JSX
- Dark mode variants: `dark:bg-black`, `dark:text-zinc-50`
- Color palette: Zinc grays for text, custom background/foreground variables
- Responsive: Mobile-first with `sm:` breakpoints

## File Structure
- `app/`: App Router pages and layouts
- `public/`: Static assets (e.g., next.svg, vercel.svg)
- Root-level config: next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs</content>
<parameter name="filePath">/Users/gyalua/Documents/GitHub/jonchalon/.github/copilot-instructions.md