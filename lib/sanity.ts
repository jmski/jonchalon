// ─────────────────────────────────────────────────────────────────────────────
// lib/sanity.ts — Sanity client + GROQ fetchers for the jonchalant site.
//
// Retirement note (2026-08-19): the coaching business was retired. This file
// previously held ~30 fetchers across page singletons, courses, lessons,
// modules, testimonials, case studies, and curriculum weeks. All of those
// schemas are gone, so their fetchers and GROQ fragments went with them.
//
// What remains is the blog surface plus the two shared singletons the preserved
// layout still reads: siteConfig (footer brand line, socials, success copy) and
// newsletterCapture (the opt-in form).
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

import type { NewsletterCapture, PageBlog, SiteConfig } from './types'

// ============================================================================
// CLIENT
// ============================================================================

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ============================================================================
// GROQ FRAGMENTS — shared object projections
// ============================================================================

const CTA_FIELDS = `label, href, ariaLabel`

const HERO_FIELDS = `
  eyebrow,
  headline,
  subhead,
  primaryCta { ${CTA_FIELDS} },
  secondaryCta { ${CTA_FIELDS} },
  microcopy
`

const NEWSLETTER_CAPTURE_FIELDS = `
  eyebrow,
  headline,
  subhead,
  emailLabel,
  emailPlaceholder,
  submitLabel,
  microcopy
`

// ============================================================================
// BLOG
// ============================================================================

export async function getRecentBlogPosts(count = 3) {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) [0...$count] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage { asset->{ url }, alt }
  }`
  return await client.fetch(query, { count })
}

// ============================================================================
// SHARED SINGLETONS
// ============================================================================

export async function getNewsletterCapture(): Promise<NewsletterCapture | null> {
  const query = `*[_type == "newsletterCapture"][0] { ${NEWSLETTER_CAPTURE_FIELDS} }`
  return await client.fetch(query)
}

export async function getSiteConfig(): Promise<SiteConfig | null> {
  const query = `*[_type == "siteConfig"][0] {
    contactEmail,
    brandLine,
    copyright,
    privacyLink { ${CTA_FIELDS} },
    socialLinks[] { platform, url, label },
    successStates[] { key, message }
  }`
  return await client.fetch(query)
}

// ============================================================================
// PAGE SINGLETONS
// ============================================================================

export async function getPageBlog(): Promise<PageBlog | null> {
  const query = `*[_type == "pageBlog"][0] {
    hero { ${HERO_FIELDS} },
    newsletter-> { ${NEWSLETTER_CAPTURE_FIELDS} },
    emptyState { headline, body }
  }`
  return await client.fetch(query)
}
