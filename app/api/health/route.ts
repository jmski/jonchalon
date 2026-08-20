/**
 * Liveness probe.
 *
 * GET /api/health
 *   200 → the app is up
 *
 * The Supabase check was removed when the coaching portal was retired, and the
 * Sanity check was removed when the CMS was removed. The site has no upstream
 * dependency left to probe, so this just confirms the process is serving.
 */
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
}
