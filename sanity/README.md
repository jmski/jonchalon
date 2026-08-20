# Sanity Studio

The CMS behind jonchalant.com.

> **Status (2026-08-19).** The coaching business was retired and most document
> types went with it. This file previously documented content models — Portfolio
> Item, Service, Collaboration, Media Kit — and a `npm run migrate:data` script
> that no longer exist (several hadn't existed for some time). It has been
> rewritten to describe what is actually here.

## Setup

### 1. Environment

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=<project id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<optional; only needed to read drafts>
```

Find the project ID at [manage.sanity.io](https://manage.sanity.io/). Generate a
token under **Settings → API → Tokens** — Viewer is enough for reading drafts;
Editor or higher only if you intend to write.

### 2. Run Studio

```bash
npm run sanity:dev     # http://localhost:3333
npm run sanity:deploy  # deploy to Sanity Cloud
```

## Content model

The full, authoritative list is `schemas/index.ts`. As of the retirement:

| Type | Kind | Notes |
|---|---|---|
| `blogPost` | collection | Title, slug, excerpt, cover image, Portable Text body, reading time, published date, featured flag |
| `pageBlog` | page singleton | Blog index hero, newsletter reference, empty state |
| `siteConfig` | shared singleton | Brand line, contact email, copyright, social links, form success messages |
| `newsletterCapture` | shared singleton | Copy for the newsletter opt-in form |

Object types used inline: `cta`, `link`, `hero`, `sectionHeader`, `ctaBlock`,
`kineticMoment`, `faqItem`.

### Known gap

`blogPost.category` was removed with the coaching taxonomy (body / presence /
work / lab / iki-guys) and has no replacement yet. Existing documents may still
carry an orphan value; it is ignored and needs no migration. A new taxonomy is
deferred to the portfolio redesign.

## Adding or removing a schema

Two files must agree, or Studio breaks on load:

1. `schemas/index.ts` — registers the type
2. `structure.ts` — places it in the desk

**Every `listItem` in `structure.ts` must reference a type that still exists in
`schemas/index.ts`.** A stale reference is exactly what produces a "schema type
not found" throw when Studio boots. This was the main hazard during the
retirement and it will recur.

Singletons additionally use the `singleton()` helper in `structure.ts`, which
locks the document ID to the schema name.

## Retired documents still in the dataset

Deleting a schema stops the type appearing in Studio; it does **not** delete the
documents already stored. The retired coaching documents may still be present in
`production`, invisible rather than gone.

`coaching-archive/sanity/` holds a dry-run-by-default cleanup script plus
instructions — including exporting a dataset backup first, and the reference
ordering that has to be respected (Sanity refuses to delete a document another
document still references).

## Troubleshooting

**"Missing NEXT_PUBLIC_SANITY_PROJECT_ID"** — check `.env.local` exists with the
right values, then restart the dev server.

**"Schema type not found" on Studio load** — a `structure.ts` entry references a
deleted type. See *Adding or removing a schema* above.

**Images not appearing** — assets upload to Sanity's CDN automatically. Check the
file is a reasonable size and a standard format (JPG, PNG, WebP).
