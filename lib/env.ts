/**
 * Centralized, zod-validated environment variable schema.
 *
 * Imported at boot from `app/layout.tsx` so a misconfigured deployment fails
 * fast with a readable error instead of a cryptic runtime crash later.
 *
 * Required vars throw immediately. Optional vars (Sentry, GA4, KIT) are
 * allowed to be undefined — features that depend on them must check for
 * presence and degrade gracefully.
 *
 * Retirement note: Supabase, Stripe, Resend, Anthropic, and Sanity vars were
 * dropped when the coaching portal, checkout, AI tools, and CMS were removed.
 * A fresh clone needs no required vars to build.
 */
import { z } from 'zod'

/** Treat empty strings as undefined — common when .env has KEY= with no value. */
const optionalString = z
  .preprocess((v) => (v === '' ? undefined : v), z.string().min(1).optional())

const optionalUrl = z
  .preprocess((v) => (v === '' ? undefined : v), z.string().url().optional())

const serverSchema = z.object({
  // Newsletter (Kit / ConvertKit) — /api/subscribe
  KIT_API_KEY: optionalString,
  KIT_FORM_ID: optionalString,

  // Observability
  SENTRY_DSN: optionalUrl,
  NEXT_PUBLIC_SENTRY_DSN: optionalUrl,
  SENTRY_AUTH_TOKEN: optionalString,
  SENTRY_ORG: optionalString,
  SENTRY_PROJECT: optionalString,

  // Analytics
  NEXT_PUBLIC_GA_ID: optionalString,

  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

export type ServerEnv = z.infer<typeof serverSchema>

const parsed = serverSchema.safeParse(process.env)

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((i) => `  • ${i.path.join('.')}: ${i.message}`)
    .join('\n')
  // Use console.error before throwing so the message survives Next.js serverless wrapping.
  console.error('\n❌ Invalid environment variables:\n' + issues + '\n')
  throw new Error('Invalid environment variables — see logs above.')
}

export const env: ServerEnv = parsed.data

/** True when an optional integration is configured. */
export const flags = {
  sentry: Boolean(env.SENTRY_DSN || env.NEXT_PUBLIC_SENTRY_DSN),
  ga4: Boolean(env.NEXT_PUBLIC_GA_ID),
  kit: Boolean(env.KIT_API_KEY && env.KIT_FORM_ID),
} as const
