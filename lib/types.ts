// ─────────────────────────────────────────────────────────────────────────────
// lib/types.ts — Central type definitions for the jonchalant codebase
//
// Single source of truth for all shared interfaces across pages, components,
// and utility functions.
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

// ── Shared object types ────────────────────────────────────────────────────────

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

export interface SiteConfig {
  contactEmail: string
  brandLine: string
  copyright: string
  privacyLink: Cta
  socialLinks?: SocialLink[]
}
