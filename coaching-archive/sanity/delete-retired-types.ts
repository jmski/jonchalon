/**
 * Delete retired coaching documents from the Sanity production dataset.
 *
 * DRY RUN BY DEFAULT. Nothing is written unless you pass --confirm.
 *
 *   # 1. Back the dataset up first — this is irreversible.
 *   cd sanity && npx sanity dataset export production ../coaching-archive/sanity/production-backup.tar.gz
 *
 *   # 2. See what would happen (writes nothing):
 *   SANITY_WRITE_TOKEN=sk... npx tsx coaching-archive/sanity/delete-retired-types.ts
 *
 *   # 3. Actually do it:
 *   SANITY_WRITE_TOKEN=sk... npx tsx coaching-archive/sanity/delete-retired-types.ts --confirm
 *
 * The token needs write access (Editor or Administrator). Create one at
 * sanity.io/manage → your project → API → Tokens.
 *
 * ── Why this runs in two phases ──────────────────────────────────────────────
 * Sanity refuses to delete a document that another document still references.
 * Two such references exist in this dataset:
 *
 *   blogPost.podcastEpisode → podcastEpisode   (blogPost survives, target dies)
 *   pageBlog.auditCta       → auditCta         (pageBlog survives, target dies)
 *
 * So phase 1 unsets those fields on the surviving documents, and only then does
 * phase 2 delete. Phase 1 also strips fields whose schema was removed
 * (blogPost.category, pageBlog.series*) so the surviving documents don't carry
 * dead data forward into the portfolio redesign.
 *
 * Drafts are handled explicitly: a `drafts.` copy is a separate document and is
 * matched by the same type queries below.
 */
import { createClient } from '@sanity/client'

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'f0611nfi'
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const TOKEN = process.env.SANITY_WRITE_TOKEN

const CONFIRM = process.argv.includes('--confirm')

/** Document types retired with the coaching business. */
const RETIRED_TYPES = [
  // Coaching product structure
  'stage',
  'program',
  'standaloneModule',
  'curriculumWeek',
  'module',
  'course',
  'courseLesson',
  'lesson',
  // Podcast
  'ikiGuy',
  'podcastEpisode',
  // Social proof
  'testimonial',
  'caseStudy',
  // Shared singletons
  'pillarSet',
  'auditCta',
  'starterGuideCapture',
  'fourCirclesSet',
  // Page singletons
  'pageHome',
  'pageAbout',
  'pageIkigai',
  'pageFoundation',
  'pagePrograms',
  'pageLessons',
  'pageContact',
  'pageAudit',
] as const

/** Fields to unset on surviving documents, keyed by type. */
const FIELDS_TO_UNSET: Record<string, string[]> = {
  blogPost: ['category', 'podcastEpisode'],
  pageBlog: [
    'auditCta',
    'seriesBannerEnabled',
    'seriesName',
    'seriesSlug',
    'seriesStatus',
    'seriesDescription',
    'seriesCurrentPhase',
    'seriesCtaLabel',
  ],
}

if (!TOKEN) {
  console.error('SANITY_WRITE_TOKEN is not set. Export it and re-run.')
  process.exit(1)
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2026-03-02',
  token: TOKEN,
  useCdn: false,
})

async function main() {
  console.log(`\nProject ${PROJECT_ID} / dataset ${DATASET}`)
  console.log(CONFIRM ? '*** LIVE RUN — changes WILL be written ***' : 'DRY RUN — nothing will be written')

  // ── Phase 1: unset dead fields on surviving documents ──────────────────────
  console.log('\n── Phase 1: clear references and dead fields ──')
  for (const [type, fields] of Object.entries(FIELDS_TO_UNSET)) {
    const ids: string[] = await client.fetch(`*[_type == $type]._id`, { type })
    if (ids.length === 0) {
      console.log(`  ${type}: no documents`)
      continue
    }
    console.log(`  ${type}: ${ids.length} document(s) → unset ${fields.join(', ')}`)
    if (CONFIRM) {
      let tx = client.transaction()
      for (const id of ids) tx = tx.patch(id, (p) => p.unset(fields))
      await tx.commit()
    }
  }

  // ── Phase 2: delete retired document types ─────────────────────────────────
  console.log('\n── Phase 2: delete retired document types ──')
  let total = 0
  const empty: string[] = []

  for (const type of RETIRED_TYPES) {
    const ids: string[] = await client.fetch(`*[_type == $type]._id`, { type })
    if (ids.length === 0) {
      empty.push(type)
      continue
    }
    total += ids.length
    console.log(`  ${type}: ${ids.length}`)
    for (const id of ids) console.log(`      ${id}`)

    if (CONFIRM) {
      let tx = client.transaction()
      for (const id of ids) tx = tx.delete(id)
      await tx.commit()
    }
  }

  if (empty.length) console.log(`  (already empty: ${empty.join(', ')})`)

  console.log(`\n${total} document(s) ${CONFIRM ? 'deleted' : 'would be deleted'}.`)

  if (!CONFIRM && total > 0) {
    console.log('\nRe-run with --confirm to apply. Export a backup first if you have not.')
  }

  // ── Leftovers worth eyeballing ─────────────────────────────────────────────
  const orphanAssets: number = await client.fetch(
    `count(*[_type == "sanity.imageAsset" && !defined(*[references(^._id)][0])])`,
  )
  if (orphanAssets > 0) {
    console.log(
      `\nNote: ${orphanAssets} image asset(s) are now unreferenced. This script does NOT touch` +
        `\nassets — deleting them is a separate call, and some may be worth keeping for the` +
        `\nportfolio redesign. Review them in Studio before removing anything.`,
    )
  }
}

main().catch((err) => {
  console.error('\nFailed:', err instanceof Error ? err.message : err)
  process.exit(1)
})
