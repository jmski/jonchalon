// Document model:
//   - Page singletons (page*): one per route, listed in "Pages" group
//   - Reusable singletons: referenced from multiple pages, listed in "Shared content"
//   - Listed types: collections (posts, courses, case studies, testimonials)

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
      // ── Pages (IA order, not alphabetical) ─────────────────────────────────
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              singleton(S, 'pageHome', 'Home'),
              singleton(S, 'pageAbout', 'About'),
              singleton(S, 'pageIkigai', 'Ikigai'),
              singleton(S, 'pageFoundation', 'Foundation'),
              singleton(S, 'pagePrograms', 'Programs'),
              singleton(S, 'pageLessons', 'Lessons'),
              singleton(S, 'pageBlog', 'Blog'),
              singleton(S, 'pageContact', 'Contact'),
              singleton(S, 'pageAudit', 'Audit'),
            ]),
        ),

      // ── Shared content ─────────────────────────────────────────────────────
      S.listItem()
        .title('Shared content')
        .child(
          S.list()
            .title('Shared content')
            .items([
              singleton(S, 'starterGuideCapture', 'Foundation Starter Guide capture'),
              singleton(S, 'newsletterCapture', 'Newsletter capture (Tuesdays)'),
              singleton(S, 'auditCta', 'Audit CTA'),
              singleton(S, 'pillarSet', 'Pillar definitions'),
              singleton(S, 'fourCirclesSet', 'Four Circles definitions'),
              singleton(S, 'siteConfig', 'Site configuration (nav, footer, microcopy)'),
            ]),
        ),

      S.listItem()
        .title('Foundation')
        .child(
          S.list()
            .title('Foundation')
            .items([
              singleton(S, 'program', 'Program Config', 'program'),
              S.documentTypeListItem('standaloneModule').title('Standalone Modules'),
              S.listItem()
                .title('Stages')
                .child(
                  S.list()
                    .title('Stages')
                    .items([
                      singleton(S, 'stage', 'The Climb', 'climb'),
                      singleton(S, 'stage', 'The Vantage', 'vantage'),
                      singleton(S, 'stage', 'The Leap', 'leap'),
                    ]),
                ),
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
      S.documentTypeListItem('course').title('Courses'),

      // ── Curriculum content (supports course detail pages) ──────────────────
      S.listItem()
        .title('Curriculum content')
        .child(
          S.list()
            .title('Curriculum content')
            .items([
              S.documentTypeListItem('module').title('Modules'),
              S.documentTypeListItem('courseLesson').title('Course lessons'),
              S.documentTypeListItem('lesson').title('Lessons (legacy listing)'),
            ]),
        ),

      S.documentTypeListItem('caseStudy').title('Case studies'),
      S.documentTypeListItem('testimonial').title('Testimonials'),

      S.divider(),

      // ── Podcast ────────────────────────────────────────────────────────────
      S.listItem()
        .title('Podcast')
        .child(
          S.list()
            .title('Podcast')
            .items([
              S.documentTypeListItem('ikiGuy').title('Iki-Guys'),
              S.documentTypeListItem('podcastEpisode').title('Episodes'),
            ]),
        ),
    ])
