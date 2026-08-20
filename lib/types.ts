// ─────────────────────────────────────────────────────────────────────────────
// lib/types.ts — Central type definitions for the jonchalant codebase
//
// Single source of truth for all shared interfaces across pages, components,
// and utility functions. Page/singleton types match the GROQ projections in
// lib/sanity.ts.
//
// Retirement note (2026-08-19): the coaching business was retired. Types for
// the program ladder (Program, StandaloneModule, PillarCard/PillarSet,
// ProgramCard), the podcast (IkiGuy, PodcastEpisode), the curriculum (Course,
// Module, Lesson, CourseLesson, CourseCard, ContentPillar, LessonStructureStep,
// TechnicalNote, LessonEmphasis, DifficultyTier, CourseType), the ikigai model
// (Quadrant, IkigaiPattern, IkigaiScores, IkigaiResult, FourCirclesSet),
// social proof (Testimonial, CaseStudy), the portal database rows
// (LessonProgress, MovementPlan and its Plan* helpers), and every retired page
// singleton were removed alongside their schemas and consumers.
// ─────────────────────────────────────────────────────────────────────────────

// ── Sanity primitives ─────────────────────────────────────────────────────────

export interface SanitySlug { current: string }

export interface SanityImageAsset {
  _id: string
  url: string
  metadata?: {
    dimensions?: {
      width: number
      height: number
    }
    lqip?: string
  }
}

export interface SanityImage {
  asset: SanityImageAsset
  hotspot?: { x: number; y: number; width: number; height: number }
  crop?: { top: number; bottom: number; left: number; right: number }
  alt?: string
}

// ── Shared object types (sanity/schemas/objects/*) ────────────────────────────

export interface Cta {
  label: string
  href: string
  ariaLabel?: string
}

export interface Link {
  label: string
  href: string
}

export interface Hero {
  eyebrow?: string
  headline: string
  subhead?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  microcopy?: string
}

export interface SectionHeader {
  eyebrow?: string
  headline: string
  subhead?: string
  body?: string
}

export interface CtaBlock {
  eyebrow?: string
  headline: string
  body?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  microcopy?: string
}

export interface FaqItem {
  question: string
  answer: string
}

// ── Shared singletons ─────────────────────────────────────────────────────────

export interface NewsletterCapture {
  eyebrow?: string
  headline: string
  subhead: string
  emailLabel: string
  emailPlaceholder: string
  submitLabel: string
  microcopy: string
}

export interface SocialLink {
  platform:
    | 'instagram'
    | 'linkedin'
    | 'youtube'
    | 'tiktok'
    | 'twitter'
    | 'threads'
    | 'bluesky'
    | 'substack'
    | 'medium'
    | 'other'
  url: string
  label?: string
}

export interface SuccessState {
  key: 'general' | 'newsletter' | 'contact'
  message: string
}

export interface SiteConfig {
  contactEmail: string
  brandLine: string
  copyright: string
  privacyLink: Cta
  socialLinks?: SocialLink[]
  successStates: SuccessState[]
}

// ── Page singletons ───────────────────────────────────────────────────────────

export interface PageBlog {
  hero: Hero
  newsletter: NewsletterCapture
  emptyState: { headline: string; body: string }
}

// ── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt: string
  readTime?: number
  excerpt?: string
  coverImage?: SanityImage
}
