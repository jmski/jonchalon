# Audit: `.github/copilot-instructions.md`

**Date:** 2026-05-09
**Layer:** Workstream 4 · Layer 4
**Mode:** Read-only diagnostic. No source files were modified by this audit.
**Target:** `.github/copilot-instructions.md` (910 lines)
**Reference:** `CLAUDE.md` (post-Layer 1 corrected state)
**Cross-ref code source:** `design/diagnostics/claude-md-diagnostic-2026-05-09.md` (codes prefixed `O-`)

---

## 1. Document Skeleton

```text
.github/copilot-instructions.md
├── # AI Coding Guidelines for jonchalant
├── ## Architecture Overview
│   ├── Tech Stack
│   ├── Core Architecture (7 bullets)
│   ├── Build System (npm scripts)
│   └── Key Config (4 bullets)
├── ## Current Positioning (context for all code + copy decisions)
│   ├── Reposition narrative (old frame → new frame)
│   ├── Generation rules (4 bullets: ikigai-first, medium-agnostic, four pillars, Four Circles rename)
│   └── Design reference assets (refs design-notes/jonchalant-positioning.md, baseline/, phase-1-change-list.md, tokens.css, fonts.css)
├── ## Component Architecture
│   ├── Directory Structure (ASCII tree of components/)
│   ├── ### Utility Components Pattern (Badge, Cards, Grids)
│   ├── ### Page/Feature-Scoped Section Components Pattern (code example: Featured/Posts/Related)
│   ├── ### Shared Section Components Pattern (code example: Testimonials, Carousel)
│   ├── ### Page-Specific Section Components (About + Home lists)
│   └── ### Architecture Highlights (Separation of Concerns, How to Determine Placement, Export Strategy, Folder Organization Benefits)
├── ## Styling System
│   ├── ### CSS File Organization (18 files tree + globals.css import block + Architectural Layers cascade)
│   ├── ### CSS Naming Convention (BEM-Inspired) (3 code examples)
│   ├── ### Color System (CSS Variables) — Zen Design System (full :root block + Design Principles)
│   ├── ### Example: CSS File Pattern (testimonial-card.css block)
│   └── ### Brand Identity Details (Primary Accent Elements + Visual Language)
├── ## Page Structure & Responsive Design (template code block + breakpoints + spacing + key principle)
├── ## Code Patterns & Conventions
│   ├── ### Imports (@/* alias)
│   ├── ### Client vs Server Components (Gallery.tsx example)
│   ├── ### Styling Approach: CSS-First (rule + TestimonialCard JSX example + cards.css example + Advantages)
│   ├── ### Client vs Server Components (second pass: CaseStudySection + TestimonialSection examples)
│   └── ### Typography & Text Classes (h2/p/span examples + Keep it simple bullets)
├── ## Configuration Files (5 bullets)
├── ## Development Tips (15+ procedural bullets: New page, New utility component, New shared section, etc.)
├── ## Reference: Routing Structure (App Router) (ASCII tree)
├── ## Reference: Page Section Breakdown (per-page Fetches/Sections lines for Home, About, Blog, Programs, Lessons, Media Kit, Audit, Contact)
├── ## Reference: Sanity Schema Types (21 total) (table with 19 schemas)
├── ## Reference: All Sanity Data Fetching Functions (lib/sanity.ts) (10 lines of fetcher names)
├── ## Reference: lib/ Files (table) + Custom hooks (lib/hooks/) line
├── ## Reference: Layout Components (5 bullets)
├── ## Reference: sections/index.ts Exports (4 categorized lines)
└── ## Copy-editing conventions (4 numbered points)
```

---

## 2. Bucket 1 — Already in CLAUDE.md

Items where copilot-instructions.md adds nothing beyond what CLAUDE.md (post-Layer 1) already states.

| # | Copilot location | CLAUDE.md location | Notes |
|---|---|---|---|
| B1-1 | Architecture Overview > Tech Stack | Stack & Build | Same stack listed |
| B1-2 | Architecture Overview > Build System (npm scripts) | Stack & Build (code block) | Same scripts |
| B1-3 | Architecture Overview > Key Config (Turbopack, React Compiler, TS strict, ESLint flat) | Stack & Build trailing line | Compact form in CLAUDE.md is sufficient |
| B1-4 | Architecture Overview > Core Architecture > "React 19 Compiler: Automatic memoization without manual useMemo/useCallback" | Stack & Build | Already noted as `reactCompiler: true` (no manual useMemo/useCallback) |
| B1-5 | Current Positioning (full section: ikigai entry, medium-agnostic, four pillars, Four Circles rename) | Current positioning | Equivalent narrative, CLAUDE.md is more current (includes pricing tiers + voice/tone) |
| B1-6 | Styling System > CSS File Organization (18 files, 9 system + 9 page-scoped) | Architecture > 9 System CSS Files + 9 Page-Scoped CSS Files | Identical lists |
| B1-7 | Styling System > Architectural Layers / globals.css import | Architecture > CSS Layer Order | Same `@layer reset → variables → base → components → utilities → interactive` order |
| B1-8 | Styling System > CSS Naming Convention (BEM-Inspired, kebab-case) | Strict Rules > CSS ("BEM-inspired kebab-case naming") | Same rule |
| B1-9 | Styling System > Color System note "Light mode only" | Strict Rules > CSS ("Light mode only") | Same rule |
| B1-10 | Code Patterns > Styling Approach > "Never use `!important`" | Strict Rules > CSS ("No `!important`") | Same rule |
| B1-11 | Code Patterns > Styling Approach > "Exception — OpenGraph image files" | Strict Rules > CSS ("OpenGraph image exception") | Same rule |
| B1-12 | Development Tips > "Do NOT create new .css files" | Strict Rules > CSS ("No new CSS files — 18 files exist") | Same rule |
| B1-13 | Component Architecture > "❌ WRONG: Don't use 'Section' suffix" | Strict Rules > Components ("No 'Section' suffix") | Same rule |
| B1-14 | Code Patterns > Client vs Server Components (use `'use client'` only for state) | Strict Rules > Components ("Server components by default") | Same rule (CLAUDE.md adds wrap-over-mark guidance) |
| B1-15 | Code Patterns > Imports ("Always use `@/*` alias") | Strict Rules > Components ("Import alias `@/` always") | Same rule |
| B1-16 | Architecture Highlights > Export Strategy ("All sections exported from sections/index.ts with descriptive aliases") | Strict Rules > Components ("All sections exported from `components/sections/index.ts`") | Same rule |
| B1-17 | Development Tips > Auth bullet (Supabase SSR; never `lib/supabase.ts`; useAuth hook) | Strict Rules > Auth | Verbatim equivalent |
| B1-18 | Development Tips > Audit quiz data ("`lib/auditData.ts` ... not Sanity") | Strict Rules > Data ("Audit quiz data stays in `lib/auditData.ts`") | Same rule |
| B1-19 | Development Tips > Shared TypeScript types (`lib/types.ts`) | Strict Rules > Data ("Shared TypeScript types live in `lib/types.ts`") | Same rule |
| B1-20 | Development Tips > "No hardcoded page copy" | Strict Rules > Data ("No hardcoded page copy") | Same rule |
| B1-21 | Component Architecture > How to Determine Placement (sections vs shared vs utilities) | Component Organization > Placement Rules | Same three-tier placement model |
| B1-22 | Development Tips > "New card / New section / New form: add styles to..." | Component Organization > Style Placement Guide | Same file-by-purpose mapping |
| B1-23 | Reference: Routing Structure (App Router tree) | Architecture > Route Groups | Same structure (CLAUDE.md is more accurate on api/ route count — see B3-15) |
| B1-24 | Page Structure & Responsive Design > Mobile-first breakpoints (sm/md/lg) | Strict Rules > CSS ("Standard breakpoints only: 640/768/1024") | Same rule |
| B1-25 | Copy-editing conventions (4 points: Sanity-default, link language, headlines as claims, voice check) | Content & copy principles (6 points) | CLAUDE.md is a strict superset |
| B1-26 | Component Architecture > "Each in its own folder with `index.ts`" | Component Organization > Placement Rules | Same convention |

---

## 3. Bucket 2 — Novel and Correct (migration candidates)

Items that are substantively novel (not in CLAUDE.md) AND verified true against the current codebase. Each row names a current CLAUDE.md section as a destination — this is a *placement suggestion*, not a content recommendation.

| # | Copilot location | Description | Verification | Suggested CLAUDE.md destination |
|---|---|---|---|---|
| B2-1 | Architecture Overview > Core Architecture, first bullet | **Component-First Design principle:** "Build reusable components first, compose into pages second. All child components should be props-driven and not depend on context or external state." | Consistent with current architecture: `components/utilities/cards/*` are props-only (e.g. `TestimonialCard.tsx`), `components/sections/home/*` compose them. No verified counterexamples. | `Component Organization` section (would extend "Placement Rules") |

That's the only item that meets all three filters (novel + correct + non-trivial). Every other piece of substantive guidance in copilot-instructions.md either duplicates CLAUDE.md (Bucket 1), contradicts current state (Bucket 3), or is a judgment call (Bucket 4).

---

## 4. Bucket 3 — Novel but Obsolete (discard)

Items that *appear* novel but are factually wrong against the current codebase and should not be migrated.

| # | Copilot location | Description | Why obsolete | Cross-ref |
|---|---|---|---|---|
| B3-1 | Architecture Overview, opening paragraph | Tagline says "muted palette (burnt indigo & muted moss accents)" | Palette retired; current is Mocha Mousse (`--mocha-mousse #A47864`, `--mocha-deep #6B4F3F`) per `app/css/variables.css` | — |
| B3-2 | Current Positioning > Design reference assets bullets | References `design-notes/jonchalant-positioning.md`, `design-notes/baseline/desktop/`, `design-notes/baseline/mobile/`, `design-notes/phase-1-change-list.md` | All four paths deleted; current `design-notes/` contains only `design-system.html`, `design-system.png`, `tokens.css`, `fonts.css`, `SKILL.md`, `README.md` | O-1, O-2, O-3 |
| B3-3 | Component Architecture > Directory Structure tree (home/) | Lists `home/impact/`, plus implies the home subtree is `hero/featured-areas/blog-cards/impact/portfolio-preview/why-work-together/why-it-works` | Verified (`ls components/sections/home/`): actual subfolders are `blog-cards, credibility-strip, cta, email-capture, featured-areas, four-pillars, hero, meet-jon, method, portfolio-preview, why-it-works, why-work-together`. `impact/` does not exist; `credibility-strip, cta, email-capture, four-pillars, meet-jon, method` are not listed | O-10 |
| B3-4 | Component Architecture > Directory Structure tree (about/) | Lists about subtree as `hero, origin, turning-point, methodology-narrative, why-exists, who-for, services (dormant), philosophy (dormant), introvert (dormant)` | Verified (`ls components/sections/about/`): actual subfolders are `hero, introvert, origin, philosophy, services, story-scroll, who-for`. `turning-point, methodology-narrative, why-exists` do not exist; `story-scroll` not listed | O-9 |
| B3-5 | Component Architecture > Directory Structure tree (shared/) | Lists `shared/collaboration/` | Verified (`ls components/shared/`): no `collaboration/` directory. Actual shared sections: `bento, carousel, copy-button, cta, faq, hero, InstagramEmbed.tsx, kinetic-moment, page-hero, press-strip, programs, series-banner, services, testimonials, VideoEmbed.tsx` | — |
| B3-6 | Component Architecture > Page-Specific Section Components > About | "Rendered on the About page (in order): Hero, Origin, TurningPoint, MethodologyNarrative, WhyExists, WhoFor" | Per B3-4, three of those six components do not exist | O-9 |
| B3-7 | Component Architecture > Page-Specific Section Components > Home | "No 'Section' suffix (e.g., Hero, FeaturedAreas, BlogCards)" — implies the section list match | Per B3-3, the home tree differs significantly | O-10 |
| B3-8 | Styling System > Color System (entire `:root` code block) | Defines `--bg-primary: #f8f8f5`, `--text-primary: #1a1a1a`, `--color-burnt-indigo: #4a3a5c`, `--color-muted-moss: #6b8e63`, `--accent-primary: #6b8e63` | Current values per `app/css/variables.css` are entirely different (`--bg-primary: #F4EBE0`, `--text-primary: #2A1F1A`, `--mocha-mousse: #A47864`, `--mocha-deep: #6B4F3F`). Every hex in this block is wrong | — |
| B3-9 | Styling System > Color System > Design Principles list | Frames design as "Ikigai / Kaizen / Ma / Wabi-Sabi" Zen four-principles | Current CLAUDE.md frames design as Surface Tier System + Page Rhythm Convention + Kinetic Typography Systems. The Zen-four-principles framing is not used anywhere in the active codebase or copy | — |
| B3-10 | Styling System > Example: CSS File Pattern | Code block uses `var(--bg-light)`, `var(--shadow-md)`, `var(--bg-muted)` | None of those tokens exist in `app/css/variables.css`; current tokens are `--bg-primary/secondary/tertiary` | — |
| B3-11 | Styling System > Brand Identity Details > Primary Accent Elements | Lists Muted Moss `#6b8e63`, Burnt Indigo `#4a3a5c`, Soft Indigo `#6a8aaa` | Same retired palette as B3-8 | — |
| B3-12 | Styling System > Brand Identity Details > Visual Language | "CTA buttons with muted moss accent" | Retired palette | — |
| B3-13 | Page Structure & Responsive Design (entire template code block) | Template uses `import Navbar from "@/components/Navbar"`, inline `style={{ backgroundColor: "var(--bg-primary)" }}`, raw Tailwind layout (`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24`), no `SectionWrapper`/`SectionContent`/`PageTransition` | Verified: `components/Navbar.tsx` does not exist (actual is `components/navigation/Navbar.tsx`). Inline color styles violate current "No inline styles" rule (CLAUDE.md Strict Rules > CSS). Pages now wrap in `PageTransition > SectionWrapper > SectionContent` per CLAUDE.md Page Wrapper Pattern. Template is invalid on three independent counts | — |
| B3-14 | Code Patterns > Imports > example | `import Navbar from "@/components/Navbar"` | Path does not exist; correct path is `@/components/navigation/Navbar` | — |
| B3-15 | Code Patterns > Client vs Server Components > Gallery.tsx example | Code example titled `Gallery.tsx` rendering an image grid | No `Gallery.tsx` component exists in the codebase | — |
| B3-16 | Code Patterns > Client vs Server Components (second pass) > example components `CaseStudySection`, `TestimonialSection` | Both example components use the "Section" suffix | The doc itself prohibits this suffix one section earlier (Component Architecture > "❌ WRONG: Don't use 'Section' suffix"). Self-contradicting | — |
| B3-17 | Code Patterns > Typography & Text Classes > h2/p/span examples | Uses inline `style={{ color: "var(--text-primary)" }}` together with Tailwind `mb-6 mb-4` | Inline color styles violate Strict Rules > CSS. The "Keep it simple" bullets that follow are also inconsistent with the current Tailwind utility allow-list, which permits typography utilities + layout primitives in page route files but forbids inline color styles | — |
| B3-18 | Configuration Files > `app/globals.css` line | "imports 10 consolidated CSS files organized by @layer (base, components, utilities, interactive)" | Wrong on three counts: file count is 18 not 10; layer list omits `reset` and `variables`; CLAUDE.md states the correct count and layer order | — |
| B3-19 | Development Tips > "New page" bullet | "Create app/newpage/page.tsx, import Navbar, follow page structure template" | The page structure template it points to is invalid (B3-13); pages now live under `app/(marketing)/...` or `app/(portal)/...` route groups | — |
| B3-20 | Development Tips > "New form or page-specific styles" bullet, plus repeated mentions of `app/css/pages.css` | Tells contributors to add styles to `pages.css` | `pages.css` does not exist; was split into nine `pages-*.css` files (`pages-forms.css`, `pages-portal.css`, etc.). Multiple Development Tips bullets reference this dead file | — |
| B3-21 | Development Tips > "CSS architecture note" final bullet | Lists removed dead-code class prefixes (`featured-blog-*`, `portal-dashboard-*`, `program-track-*`, `focus-area-card`, `programs-for-*`) "removed as dead code in March 2026" | Cleanup-history note, not a forward-looking convention. The "March 2026" date is also from a future point relative to many code states | — |
| B3-22 | Reference: Routing Structure > api/ block | Lists 9 API routes: "admin/enroll, checkout, inquiries, movement-plan, presence-coach, presence-score, subscribe, tonality-analysis, webhooks/stripe" | Actual API surface is 15 routes per CLAUDE.md and `app/api/`: account, admin, auth, billing-portal, checkout, health, inquiries, movement-plan, presence-coach, presence-score, sentry-example-api, starter-guide, subscribe, tonality-analysis, webhooks. Six routes missing | — |
| B3-23 | Reference: Page Section Breakdown (entire section, ~40 lines) | Per-page Fetches lines reference legacy fetchers `getHomePageContent()`, `getAboutPageContent()`, `getProgramsFocusItems()`, `getMediaKitData()`, `getPageMetadata('mediaKit')`, `getCollaborationPackages()`, `getAuditPageContent()`, `getContactPageContent()`. Per-page Sections lines name section components matching B3-3 / B3-6 obsolete lists | All `get{ContentType}()` legacy fetchers were removed in Phase 2 (per CLAUDE.md Sanity CMS section); `mediaKit` page does not exist; section component lists are wrong | O-4, O-5, O-9, O-10, O-13 |
| B3-24 | Reference: Page Section Breakdown > Media Kit | Documents an `app/media-kit/page.tsx` route with `KeyMetrics → PlatformBreakdown → ContentMix → AudienceProfile → CollaborationPackages` sections | Route does not exist; no `(marketing)/media-kit/` directory in `app/` | O-13 |
| B3-25 | Reference: Sanity Schema Types (21 total) — entire table | Lists 19 schemas including `aboutPage, auditPage, contactPage, homePageContent, mediaKitData, pageMetadata, programFocus, programsPageContent, serviceCategory, portalLesson, service, collaboration, collaborationPackage, contactInfo` | Per CLAUDE.md Sanity CMS section, current schemas are organized into four buckets (page singletons `pageHome..pageIkigai`, shared singletons `siteConfig/auditCta/newsletterCapture/starterGuideCapture/pillarSet/fourCirclesSet`, content lists `blogPost/caseStudy/testimonial/course/courseLesson/module/lesson`, object types). None of the obsolete schema names listed match the current schema set. `portalLesson` specifically not found | O-4, O-14 |
| B3-26 | Reference: All Sanity Data Fetching Functions — entire list | Lists `getServices, getPrimaryService, getService, getCollaborations, getCollaborationsByCategory, getMediaKitData, getCaseStudies, getCaseStudy, getLessonsByCategory, getLessonsByPillar, getPrograms, getProgramBySlug, getProgramsByCategory, getProgramsFocusItems, getPageMetadata, getContactInfo, getAboutPageContent, getHomePageContent, getServiceCategories, getCollaborationPackages, getAuditPageContent, getContactPageContent` | Per CLAUDE.md, current naming convention is `getPage{Name}() / get{Name}() / get{Plural}()`; the entire legacy fetcher list above is gone | O-5 |
| B3-27 | Reference: lib/ Files > `pageContent.ts` row | "Static/fallback page content (largely superseded by Sanity)" | Verified (`ls lib/pageContent.ts`): file does not exist | O-15 |
| B3-28 | Reference: lib/ Files > `optimizedImage.tsx` row | "Optimized image wrapper" | Verified (`ls lib/optimizedImage.tsx`): file does not exist | — |
| B3-29 | Reference: lib/ Files > Custom hooks line | Lists 6 hooks: `useFocusTrap, useFormValidation, usePointerPosition, useScrollAnimation, useScrollTrigger, useSwipeGesture` | Verified (`ls lib/hooks/`): 9 hooks actually exist (adds `useFormSubmission, useKeyboardNavigation, useMultiStep`). CLAUDE.md Key Files row reflects the correct count of 9 | — |
| B3-30 | Reference: lib/ Files > `types.ts` row note "21 shared TypeScript interfaces" | Specific count "21" | Stale count; `lib/types.ts` was slimmed in Layer 2 (interfaces removed: FooterColumn, AccountSection, ValidationMicrocopy, SignInContent, SignUpContent). Numerical claim no longer holds | — |
| B3-31 | Reference: Layout Components > `<RouteAwareLayout>` bullet | "`<RouteAwareLayout>` — Navbar visibility (in app/layout.tsx)" | Verified (`ls components/layout/`): no such component. Current layout components are `CookieConsent.tsx, MochaSweep.tsx, PageTransition.tsx, SectionContent.tsx, SectionWrapper.tsx, SidebarOverlay.tsx`. Navbar visibility is now handled by route groups, not a wrapper component | O-11 |
| B3-32 | Reference: sections/index.ts Exports > Home line | Names `ImpactSection, PortfolioPreview, WhyWorkTogether, WhyItWorks` as home aliases | Per B3-3, `ImpactSection` does not exist; the broader home section composition is far larger and these four are not the dominant set anyway | O-10 |
| B3-33 | Reference: sections/index.ts Exports > About line | Names `AboutHero, Origin, TurningPoint, MethodologyNarrative, WhyExists, WhoFor` | Per B3-4 / B3-6, three of these do not exist | O-9 |

---

## 5. Bucket 4 — Judgment Calls

Items where novelty + correctness alone don't determine inclusion — the call is whether the item earns space in CLAUDE.md given that document's stated role as a *summary* of conventions.

| # | Copilot location | Description | Why a judgment call | Recommendation |
|---|---|---|---|---|
| B4-1 | Architecture Overview > Core Architecture, "TypeScript Strict Mode" bullet | "Enforced at build time; failing types block production" | Trivially true of any strict TypeScript project; the rule "we use TypeScript strict" is a non-rule | **Omit.** CLAUDE.md's Stack & Build line ("TypeScript 5") is sufficient. Adding "strict mode is enforced" is noise. |
| B4-2 | Configuration Files > `tsconfig.json` line | "ES2017 target, bundler resolution, `paths: {\"@/*\": [\"./\"]}`" | Explains *why* `@/*` resolves; readers can also open `tsconfig.json` | **Omit.** CLAUDE.md Strict Rules > Components already states "Import alias `@/` always". The mechanism is implementation detail; the rule is what matters. Risk of adding: the path mapping changes once and CLAUDE.md drifts again. |
| B4-3 | Code Patterns > Styling Approach > full TestimonialCard JSX example + cards.css example + "Advantages" bullet list | Concrete code example showing the JSX-class + CSS-file pattern | Concrete examples teach, but they also rot. The example uses `var(--bg-primary)` which is current, but examples have historically been a major drift source (e.g. B3-13, B3-15, B3-16) | **Omit code blocks; keep the rule.** CLAUDE.md already states the rule (no inline styles, BEM-kebab classes, styles in the right CSS file). The rule + Style Placement Guide table give readers what they need. If a worked example is wanted, link to a real production component (e.g. `components/utilities/cards/TestimonialCard.tsx`) instead of inlining a synthetic example that can drift. |
| B4-4 | Code Patterns > Client vs Server Components (second pass) > full server + client component code blocks | `CaseStudySection` server example + `TestimonialSection` client example with hooks | Same drift risk as B4-3, plus the example names use the "Section" suffix that the doc forbids (B3-16) | **Omit.** The conceptual rule ("server by default, `'use client'` only for state, prefer wrapping over marking sections client") is already in CLAUDE.md Strict Rules > Components and is more accurate than these examples. |
| B4-5 | Development Tips > step-by-step procedural lists ("New utility component: 1) create file, 2) add styles to components.css, 3) export from index.ts, 4) no new CSS file") — repeated for utility / shared / page-specific / card / form variants | Numbered "how to add a new X" workflows | The information collapses to: (a) where the file goes (placement rules) + (b) which CSS file gets the styles (style placement guide). CLAUDE.md already has both as compact tables | **Omit step-by-step.** The Style Placement Guide one-liner in CLAUDE.md ("New card → cards.css", "New section → sections.css", etc.) carries the same information without the verbosity, and without the `pages.css` references that are factually wrong (B3-20). |
| B4-6 | Architecture Highlights > "Folder Organization Benefits" ✅/❌ bullet list ("Clear separation, Easy to identify scope, No ambiguous nesting, Scalable") | Rationale-style commentary on why the placement scheme exists | Rationale is useful when contested; not useful as boilerplate. The placement scheme is already stated as a rule in CLAUDE.md | **Omit.** Rationale belongs in design discussions / commit messages, not in the rules summary. CLAUDE.md's Component Organization > Placement Rules states the rule directly. |
| B4-7 | Reference: Layout Components > `<SidebarOverlay>` bullet | "`<SidebarOverlay>` — mobile nav" | Component verified to exist (`components/layout/SidebarOverlay.tsx`), but is it convention-relevant? The actual layout primitives that contributors must use (`PageTransition`, `SectionWrapper`, `SectionContent`) are already in CLAUDE.md's Page Wrapper Pattern. `SidebarOverlay` is portal-internal | **Omit.** CLAUDE.md's Page Wrapper Pattern covers the components contributors compose with. `SidebarOverlay` is consumed inside `(portal)/layout.tsx` and doesn't need to be advertised as a top-level convention. |
| B4-8 | Brand Identity Details > Visual Language line "Decorative elements: fluid shapes (FluidShape only — Enso circles and blueprint grid components were removed)" | Documents that `FluidShape` is the only sanctioned decorative SVG | Forward-looking guard-rail (don't reintroduce Enso/blueprint grid), but very narrow. Also tied to the retired palette context | **Omit.** Single-component guard-rails of this form (don't re-add X) are better expressed as a comment in `components/decorative/` or as a CSS-architecture note next to similar guard-rails. Putting them in CLAUDE.md scales poorly: every retired component would deserve a line. |

---

## 6. Cross-References to copilot-instructions.md from Other Files

Repository search for `copilot-instructions` (excluding the target file itself) returns hits in **2 files**:

| File | Lines | Nature of reference |
|---|---|---|
| `design/workstream-4-plan.md` | 7, 13, 32, 39, 151, 153, 156, 159, 160, 161, 164, 169, 195, 230 | Workstream 4 plan itself — describes Layer 4's job (deprecate copilot-instructions.md). These references are *meta* (the plan to remove the file) and will resolve naturally when Layer 4 lands. They do not require updates as part of the audit. |
| `design/diagnostics/claude-md-diagnostic-2026-05-09.md` | 16, 150, 234, 283, 295, 301, 302, 304, 315, 316, 322, 323, 329, 330 | Layer 1 diagnostic — already-published audit cites copilot-instructions.md as the source of drift. Historical artifact; should not be edited. |

Note: The single match inside the target file (`.github/copilot-instructions.md` line 910) is the file's own trailing footer artifact (`<parameter name="filePath">…copilot-instructions.md`), not a cross-reference.

**CLAUDE.md does not currently contain a "see copilot-instructions.md for detailed reference" preamble.** The Layer 4 plan (`workstream-4-plan.md` line 160) anticipates removing such a preamble, but post-Layer 1 CLAUDE.md no longer has one. No CLAUDE.md edit is needed on this front during Layer 4.

**Conclusion:** Once `.github/copilot-instructions.md` is deleted in the implementation step of Layer 4, the only files that will reference it are two design notes (`workstream-4-plan.md`, `claude-md-diagnostic-2026-05-09.md`), both of which describe its deprecation. Neither needs to be updated.

---

## 7. Lint Baseline Check

Command run from repo root:

```text
npm run lint 2>&1 | tail -5
✖ 152 problems (120 errors, 32 warnings)
```

**Baseline:** 152 problems (120 errors, 32 warnings)
**Current:** 152 problems (120 errors, 32 warnings)
**Delta:** 0

This audit performed no source modifications, consistent with its read-only mandate.

---

## Summary

- **Total items inventoried:** 67 (B1: 26 · B2: 1 · B3: 33 · B4: 7).
- **Bucket 1 — already in CLAUDE.md:** 26.
- **Bucket 2 — novel and correct (migration candidates):** 1.
- **Bucket 3 — novel but obsolete (discard):** 33.
- **Bucket 4 — judgment calls:** 7. Recommendation across all 7: **omit from CLAUDE.md** (rationale per row).
- **Cross-references in other files:** 2 files (`design/workstream-4-plan.md`, `design/diagnostics/claude-md-diagnostic-2026-05-09.md`); neither requires update.
- **Lint delta:** 0.
- **Net signal for Layer 4:** copilot-instructions.md is overwhelmingly drift (33 obsolete items vs 1 novel-and-correct migration candidate). The single migration candidate (B2-1, "Component-First Design" principle) can be folded into CLAUDE.md's Component Organization section if desired during Layer 3 consolidation. After that, the file can be deleted with no cross-reference fallout.
