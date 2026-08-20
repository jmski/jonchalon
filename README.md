# jonchalant.com

Personal creative portfolio for Jon. Next.js 16 (App Router) · React 19 · TypeScript · Netlify · Sentry.

## Status

Placeholder while the site is redesigned. `/`, `/about`, and `/contact` hold
minimal placeholder copy; `/privacy` is current. Planned: a graphic novel
section and a house dance journey section.

## Local dev

```bash
npm install
npm run dev          # localhost:3000
```

No environment variables are required to build. Optional: `SENTRY_*` (error
monitoring) and `NEXT_PUBLIC_GA_ID` (analytics) — see `.env.example`.

If `next build` / `next dev` fails to fetch Google Fonts with a TLS error,
set `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1` in your environment.

## Scripts

```bash
npm run dev      # dev server
npm run build    # production build (Turbopack)
npm run start    # serve the production build
npm run lint     # ESLint — 0 violations, keep it that way
```

## Deploy

Automatic on push to `main` via Netlify. Build config in `netlify.toml`.

## Conventions

`CLAUDE.md` documents CSS architecture, component placement, the
surface-tier system, and the `renderHeadline()` convention. Read it before
making changes.
