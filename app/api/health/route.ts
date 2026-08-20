/**
 * Liveness + readiness probe.
 *
 * GET /api/health
 *   200 → all upstream services responding
 *   503 → at least one upstream is failing (body lists which)
 *
 * Intentionally lightweight: a HEAD-ish query against the Sanity CDN.
 * No auth, no caching.
 *
 * The Supabase check was removed when the coaching portal was retired — the
 * site no longer has a database dependency. Sanity is the only upstream left.
 */
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type CheckResult = { ok: boolean; latencyMs: number; error?: string }

async function checkSanity(): Promise<CheckResult> {
  const start = Date.now()
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
  if (!projectId) {
    return { ok: false, latencyMs: 0, error: 'SANITY_PROJECT_ID missing' }
  }
  try {
    const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=*[_type=="sanity.imageAsset"][0]._id`
    const res = await fetch(url, { signal: AbortSignal.timeout(3000) })
    if (!res.ok) {
      return { ok: false, latencyMs: Date.now() - start, error: `HTTP ${res.status}` }
    }
    return { ok: true, latencyMs: Date.now() - start }
  } catch (err) {
    return {
      ok: false,
      latencyMs: Date.now() - start,
      error: err instanceof Error ? err.message : 'unknown',
    }
  }
}

export async function GET() {
  const sanity = await checkSanity()

  return NextResponse.json(
    {
      status: sanity.ok ? 'ok' : 'degraded',
      timestamp: new Date().toISOString(),
      checks: { sanity },
    },
    { status: sanity.ok ? 200 : 503 },
  )
}
