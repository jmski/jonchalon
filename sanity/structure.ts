// Document model:
//   - Page singletons (page*): one per route, listed in "Pages" group
//   - Reusable singletons: referenced from multiple pages, listed in "Shared content"
//   - Listed types: collections (posts)
//
// Retirement note (2026-08-19): the coaching business was retired. The Pages
// group is down to Blog, the Foundation / Curriculum / Podcast groups are gone,
// and the case-study, testimonial, course, lesson, and module listings went with
// their schemas. Every listItem below must reference a type that still exists in
// schemas/index.ts — a stale reference here is exactly what makes Studio throw
// "schema type not found" on load.

import type { StructureResolver, StructureBuilder } from 'sanity/structure'

// ─────────────────────────────────────────────────────────────────────────────
// Singleton helper: locks document ID to the schema name. Belt-and-suspenders
// alongside __experimental_actions on each singleton schema — desk lock prevents
// navigation to a duplicate; __experimental_actions blocks create/delete.
// ─────────────────────────────────────────────────────────────────────────────
const singleton = (
  S: StructureBuilder,
  schemaType: string,
  title: string,
  documentId: string = schemaType,
) =>
  S.listItem()
    .id(schemaType)
    .title(title)
    .schemaType(schemaType)
    .child(S.document().schemaType(schemaType).documentId(documentId))

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // ── Pages ──────────────────────────────────────────────────────────────
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              singleton(S, 'pageBlog', 'Blog'),
            ]),
        ),

      // ── Shared content ─────────────────────────────────────────────────────
      S.listItem()
        .title('Shared content')
        .child(
          S.list()
            .title('Shared content')
            .items([
              singleton(S, 'newsletterCapture', 'Newsletter capture'),
              singleton(S, 'siteConfig', 'Site configuration (nav, footer, microcopy)'),
            ]),
        ),

      S.divider(),

      // ── Listed types ───────────────────────────────────────────────────────
      S.documentTypeListItem('blogPost')
        .title('Posts')
        .child(
          S.documentTypeList('blogPost')
            .title('Posts')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
    ])
