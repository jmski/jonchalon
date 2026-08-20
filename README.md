# jonchalant.com

Personal site of Jon. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Sanity CMS · deployed on Netlify.

---

## Status: mid-transition

**The coaching business was retired on 2026-08-19.** The site is being rebuilt as
a **personal creative portfolio**; that redesign has not happened yet.

Right now the repo is in a deliberate intermediate state:

- `/` , `/about`, and `/contact` are **placeholders**, not finished pages
- `/blog` and `/blog/[slug]` work and hold the existing writing
- `/privacy` is current and accurate
- The visual identity — typography, palette, class-naming conventions, the layered
  CSS cascade — was preserved intact and is what the redesign will build on

Everything specific to the coaching business (the ikigai funnel, The Foundation,
the programs ladder, the client portal, the podcast, the audit quiz, Supabase
auth, Stripe checkout) was removed. Retired planning documents and content are
preserved in [`coaching-archive/`](coaching-archive/_README.md) — reference only,
never imported by application code.

## Getting started

```bash
npm install
npm run dev          # localhost:3000
```

Only two environment variables are required:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
```

Optional: `SANITY_API_TOKEN` (draft content), `KIT_API_KEY` + `KIT_FORM_ID`
(newsletter form), `SENTRY_*`, `NEXT_PUBLIC_GA_ID`.

Server-side environment access goes through the zod-validated `env` export in
`lib/env.ts`, which fails loudly at boot rather than producing `undefined` later.

## Scripts

```bash
npm run dev            # dev server
npm run build          # production build (Turbopack)
npm run start          # serve the production build
npm run lint           # ESLint — currently 0 violations, keep it that way
npm run sanity:dev     # Sanity Studio at localhost:3333
npm run sanity:deploy  # deploy Studio
```

## Layout

```text
app/            Next.js App Router — (marketing) route group, 3 API routes, css/
components/     ui/ primitives, shared/ composites, sections/, layout/, utilities/
lib/            Sanity client, types, env, nav/footer data, hooks, helpers
sanity/         Studio config, schemas, desk structure
design-system/  Tokens, fonts, rendered specimen, design rules
coaching-archive/  Retired material. Reference only — do not import.
```

## Deployment

Netlify, from `main`. Build config is in `netlify.toml`; the domain hookup is
unchanged by the retirement.

## Conventions

`CLAUDE.md` is the working reference for codebase rules — CSS architecture,
component placement, the surface-tier system, the `renderHeadline()` headline
convention, and the Sanity content model. Read it before making changes.

One rule worth knowing up front: **`sanity/structure.ts` must only reference
document types that still exist in `sanity/schemas/index.ts`.** A stale reference
there is what makes Sanity Studio throw "schema type not found" on load.

## A note on the Sanity dataset

The coaching *schemas* are deleted, but the retired *documents* may still be in
the production dataset — invisible in Studio, but present.
[`coaching-archive/sanity/`](coaching-archive/sanity/README.md) holds a
dry-run-by-default cleanup script and instructions. Check whether it has been run
before assuming the dataset is clean.
