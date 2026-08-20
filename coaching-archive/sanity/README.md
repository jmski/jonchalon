# Sanity dataset cleanup

The coaching **schemas** were deleted from the codebase in the commit before
this one. That stops the types appearing in Studio, but it does **not** remove
the documents already stored in the dataset — those are still there, now
invisible to the Studio UI. This folder holds the tooling to remove them.

This step was deliberately left as a script for you to run rather than executed
automatically. Bulk-deleting from a live production dataset is irreversible
beyond Sanity's history retention window, and it needs a write token.

---

## Run it

**1. Back up the dataset first.** Do not skip this.

```bash
cd sanity
npx sanity dataset export production ../coaching-archive/sanity/production-backup.tar.gz
cd ..
```

The export lands in this folder. It is gitignored by default if it is large —
check whether you want it committed or stored outside the repo.

**2. Dry run.** Writes nothing; prints every document it would touch.

```bash
SANITY_WRITE_TOKEN=sk... npx tsx coaching-archive/sanity/delete-retired-types.ts
```

**3. Apply.**

```bash
SANITY_WRITE_TOKEN=sk... npx tsx coaching-archive/sanity/delete-retired-types.ts --confirm
```

Create a write-scoped token at sanity.io/manage → project → API → Tokens.

---

## What it does

**Phase 1 — clear references and dead fields.** Sanity refuses to delete a
document that something else still references, so the surviving documents are
patched first:

| Document | Fields unset | Why |
|---|---|---|
| `blogPost` | `category`, `podcastEpisode` | `category` held the retired enum; `podcastEpisode` referenced a type being deleted |
| `pageBlog` | `auditCta`, `seriesBannerEnabled`, `seriesName`, `seriesSlug`, `seriesStatus`, `seriesDescription`, `seriesCurrentPhase`, `seriesCtaLabel` | `auditCta` referenced a type being deleted; the `series*` fields drove the removed banner |

**Phase 2 — delete the retired document types.**

```
stage  program  standaloneModule  curriculumWeek  module  course  courseLesson
lesson  ikiGuy  podcastEpisode  testimonial  caseStudy  pillarSet  auditCta
starterGuideCapture  fourCirclesSet  pageHome  pageAbout  pageIkigai
pageFoundation  pagePrograms  pageLessons  pageContact  pageAudit
```

Drafts (`drafts.<id>`) are separate documents and are matched by the same type
queries, so they go too.

**Surviving in the dataset:** `blogPost`, `pageBlog`, `newsletterCapture`,
`siteConfig`.

---

## What it deliberately does NOT do

- **Image assets.** Deleting the documents leaves some `sanity.imageAsset`
  records unreferenced. The script counts them and prints the number, but never
  deletes them — some may be worth keeping for the portfolio redesign. Review in
  Studio and remove by hand.
- **The `siteConfig` document's contents.** The `starterGuide` success-state
  entry is now a retired key. The schema's validation was relaxed from
  `.length(4)` to `.min(1)` precisely so this doesn't show as an error before you
  edit it, but the stale entry is still in the document. Remove it in Studio when
  convenient.
- **Anything in Supabase.** Retiring the code does not drop tables. See
  `../supabase-migrations/` and tear the project down from the Supabase
  dashboard if you want it gone.

## If you'd rather not run a script

Everything above can be done by hand in Vision (Studio's GROQ playground):

```groq
*[_type in ["stage","program","standaloneModule","curriculumWeek","module",
            "course","courseLesson","lesson","ikiGuy","podcastEpisode",
            "testimonial","caseStudy","pillarSet","auditCta",
            "starterGuideCapture","fourCirclesSet","pageHome","pageAbout",
            "pageIkigai","pageFoundation","pagePrograms","pageLessons",
            "pageContact","pageAudit"]]{_id, _type}
```

Run that first to see the scope. Phase 1's field unsets still have to happen
before the deletes, or the two referenced types will refuse to delete.
