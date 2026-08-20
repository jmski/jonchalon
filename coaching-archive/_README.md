# Coaching Archive

**Retired: 2026-08-19**

The Jonchalant coaching business is fully retired. Everything in this folder is
**preserved for reference only** — it is not part of the active site, is not
built, is not linted, and is not deployed. Nothing here should be imported by
application code.

jonchalant.com continues as a personal creative portfolio. The visual identity
(Fraunces + DM Sans typography, the Mocha Mousse palette, the `renderHeadline()`
`{{double-brace}}` italic-anchor convention, BEM-ish class naming, and the
layered `globals.css` cascade) carried forward into the new site. The coaching
product, its content model, and its client area did not.

---

## What's here

### `design-system/`

| File | What it was |
|---|---|
| `canonical-copy.md` | Source of truth for all coaching marketing copy — headlines, CTAs, body blocks, the approved kinetic-phrase library, the four pillars and four circles language. |

The rest of `design-system/` (tokens, fonts, the rendered design-system page)
stayed in the repo root — those are visual-identity assets, and the visual
identity was kept.

### `design-work/`

| File | What it was |
|---|---|
| `program-structure-strategy.md` | Strategy doc for the coaching program ladder — Climb / Vantage / Leap stages, standalone modules, pricing tiers. |
| `obsidian-setup-guide.md` | Setup and operating instructions for the `jonchalant-knowledge` Obsidian vault (also archived here). |
| `SUPABASE_KEEPALIVE.md` | Operating notes for keeping the coaching portal's Supabase project from idling out. |

### `jonchalant-knowledge/`

The scaffolded Obsidian vault — curriculum, book, podcast, lab, blog,
newsletter, daily-notes, inbox. Its `design-system/` and `design-work/`
subfolders were duplicate copies of the repo-root originals rather than the
links the setup guide called for, so they are archived as found.

### `scripts/`

| File | What it was |
|---|---|
| `migrate-content.ts` | Bulk seed/migration of coaching content into the Sanity dataset. |
| `audit-migration.ts` | Migration for the presence-audit quiz content. |
| `migrate-blogPost-pillar-to-category.ts` | One-shot migration renaming the blog `pillar` field to `category`. |
| `build-design-system.ts` | Built `design-system.html` from a template plus canonical content. Already carried a `HISTORICAL — DO NOT RUN` banner before retirement; it reads pillar-era content that no longer exists. |
| `lib/sanity-diff.ts` | Helper used by the migration scripts. |

The `build:design-system` npm script was removed along with these.

### `supabase-migrations/`

SQL migrations for the coaching portal's database — Stripe event log,
enrollment revocation, RLS audit fixes, and profiles. Archived rather than
deleted because they document the schema of a Supabase project that may still
exist. **Retiring the code does not drop the tables** — if the Supabase project
itself should be torn down, that is a separate manual step in the Supabase
dashboard.

### `sanity/`

The dry-run-by-default script used to delete retired coaching document types
from the Sanity production dataset, kept alongside a record of what it removed.
See `sanity/README.md` in this folder.

### `lib/`

`auditData.ts` — the presence-audit quiz: question set, answer options, and the
scoring rubric. Archived rather than deleted because the questions are authored
content, not plumbing.

---

## What was removed outright

These were deleted rather than archived — `git log` on the `coaching-retirement`
branch is the record, and the code has no reference value beyond it:

- Routes: `/foundation`, `/programs`, `/lessons`, `/ikigai`, `/audit`, `/portal/*`,
  `/login`, `/mfa`, `/auth/*`, `/admin/*`
- The Supabase auth stack, Stripe checkout and webhooks, the Resend enrollment
  mail, and the AI portal tools (presence coach, presence score, tonality,
  movement plan)
- Coaching-specific components (FourPillars, CurriculumBento, Method, the
  portal shell, and the rest)
- Coaching-specific Sanity schemas (see `sanity/README.md` here for the list)

## Restoring something

```bash
git log --oneline main..coaching-retirement   # the retirement sequence
git show <commit> -- <path>                   # a single deleted file
```
