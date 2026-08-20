/**
 * Migrated blogPost.pillar values to blogPost.category.
 * Run once successfully during the schema redesign workstream.
 * Idempotent: safe to re-run, but unnecessary.
 *
 * Usage:
 *   npx tsx scripts/migrate-blogPost-pillar-to-category.ts
 */

// ✓ HISTORICAL — COMPLETED MIGRATION
//
// This script migrated blogPost.pillar values to blogPost.category. Run once,
// successfully, during the Sanity schema redesign workstream. The blogPost.
// pillar field has since been retired from the schema.
//
// Idempotent — safe to re-run, but unnecessary. Kept in the repo as a record
// of the migration.

import { createClient } from '@sanity/client'
import * as fs from 'node:fs'
import * as path from 'node:path'

const PILLAR_TO_CATEGORY: Record<string, string> = {
  'movement-body': 'body',
  'presence-confidence': 'presence',
  'leadership-career': 'work',
  'the-lab': 'lab',
}

interface BlogPostRecord {
  _id: string
  _rev: string
  title?: string
  pillar?: string
  category?: string
}

// Try to load .env.local for local runs (best-effort, no dependency required).
function loadEnvLocal() {
  try {
    const envPath = path.join(process.cwd(), '.env.local')
    if (!fs.existsSync(envPath)) return
    const content = fs.readFileSync(envPath, 'utf8')
    for (const line of content.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i)
      if (!m) continue
      const key = m[1]
      let val = m[2]
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      if (process.env[key] === undefined) process.env[key] = val
    }
  } catch (err) {
    console.error('WARN: failed to load .env.local:', String(err))
  }
}

async function main() {
  loadEnvLocal()

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

  if (!projectId) {
    console.error(
      'FATAL: NEXT_PUBLIC_SANITY_PROJECT_ID not set. Add it to .env.local or export it before running.'
    )
    process.exit(1)
  }

  if (!process.env.SANITY_API_TOKEN) {
    console.error('FATAL: SANITY_API_TOKEN environment variable is required')
    process.exit(1)
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  })

  const posts: BlogPostRecord[] = await client.fetch(
    `*[_type == "blogPost"]{ _id, _rev, pillar, category, title }`
  )

  let migrated = 0
  let skipped = 0
  const unmapped: Array<{ _id: string; title?: string; pillar?: string }> = []

  console.log('\n[APPLY] Blog post pillar -> category migration')
  console.log(`Project: ${projectId} | Dataset: ${dataset}`)
  console.log(`Found ${posts.length} blog posts`)

  for (const post of posts) {
    if (post.category) {
      skipped++
      continue
    }

    if (!post.pillar) {
      skipped++
      continue
    }

    const newCategory = PILLAR_TO_CATEGORY[post.pillar]
    if (!newCategory) {
      unmapped.push({ _id: post._id, title: post.title, pillar: post.pillar })
      continue
    }

    await client
      .patch(post._id)
      .set({ category: newCategory })
      .commit()

    migrated++
    console.log(`  OK ${post.title || post._id}: ${post.pillar} -> ${newCategory}`)
  }

  console.log('\nMigration complete.')
  console.log(`  Migrated: ${migrated}`)
  console.log(`  Skipped:  ${skipped}`)
  if (unmapped.length > 0) {
    console.log('  Unmapped (manual review needed):')
    for (const u of unmapped) {
      console.log(`    - ${u.title || u._id} (pillar: ${u.pillar})`)
    }
  }
}

main().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
