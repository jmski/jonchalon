# CLAUDE.md Diagnostic Report — 2026-05-09

Audit of `CLAUDE.md` as it exists on branch `workstream-4`. Read-only: no files edited except this report.

**Handoff document search:** Searched `/design/` and surrounding directories for a Workstream 3 → Workstream 4 handoff document. None found. The `/design/` directory contains: `canonical-copy.md`, `migration-e2-summary.md`, `migration-inventory.md`, `migration-phase-2-summary.md`, `migration-script-audit.md`. The closest upstream document is `migration-phase-2-summary.md`, which names Workstream 3 as the owner of content/render polish and records which components were created, modified, and deleted during Phase 2. This document is used as the proxy handoff for cross-referencing Workstream 3 conventions.

---

## 1. Document Skeleton

Hierarchical outline of CLAUDE.md as written. Line counts are approximate.

```
CLAUDE.md — Jonchalant Codebase Rules  (~500 lines total)
│
├── (preamble) "For detailed reference…see copilot-instructions.md"  [1 line]
│
├── ## Current positioning (read this first)  [~30 lines]
│   ├── Funnel (numbered list, 4 items)
│   ├── Voice and tone (1 sentence)
│   ├── Key phrases (bullet list, 5 items)
│   └── What the site is not (bullet list, 3 items)
│   └── See design-notes/jonchalant-positioning.md
│
├── ## Stack & Build  [~12 lines]
│   ├── Tech stack string
│   ├── npm script block (4 commands)
│   └── Config flags
│
├── ## Project Purpose  [~5 lines]
│
├── ## Content & copy principles  [~12 lines]
│   └── 6 numbered rules
│
├── ## Headline rendering convention  [~45 lines]
│   ├── Rule statement + code block (wrong/right examples)
│   ├── ESLint enforcement note
│   ├── Safe-consumer allowlist (13 names)
│   ├── Update instructions (2 locations)
│   └── Rule exclusions
│
├── ## Strict Rules  [~40 lines]
│   ├── CSS (10 bullets)
│   ├── Components (5 bullets)
│   ├── Data (4 bullets)
│   ├── Auth (3 bullets)
│   └── Positioning & Copy (2 bullets)
│
├── ## Surface Tier System  [~45 lines]
│   ├── Three-tier description (3 bullets)
│   ├── Legacy --bg-dark note
│   ├── ### SectionWrapper Variants (4 bullets + opacity convention)
│   └── ### Italic Anchor Colors (2 bullets)
│
├── ## Kinetic Typography Systems  [~50 lines]
│   ├── ### .jc-kinetic — Static Dramatic Heading Primitive (4 bullets)
│   ├── ### KineticHeading Component — Animated Section Title (4 bullets)
│   └── ### KineticMoment Component — Scroll-Triggered Opacity Fade
│       ├── Code block example
│       ├── Behavior (5 bullets)
│       └── Important: constraint note
│
├── ## Page Rhythm Convention  [~10 lines]
│   └── 2 numbered items + constraint rule
│
├── ## Architecture  [~45 lines]
│   ├── ### Route Groups (ASCII tree)
│   ├── ### CSS Layer Order
│   ├── ### 9 System CSS Files (table)
│   └── ### 9 Page-Scoped CSS Files (inline list)
│   └── ### Key Colors (3 bullets)
│
├── ## Component Organization  [~15 lines]
│   ├── ### Placement Rules (3 bullets)
│   ├── ### Page Wrapper Pattern (code block)
│   └── ### Style Placement Guide (inline)
│
├── ## Design Notes (`design-notes/`)  [~20 lines]
│   ├── Purpose note
│   ├── File table (9 rows)
│   └── Baseline screenshots list
│
├── ## Key Files  [~25 lines]
│   ├── Table (12 rows)
│   └── ### Database (Supabase) (5 bullets)
│
├── ## Sanity CMS  [~5 lines]
│   └── Schema count + key types list
│
├── ## Environment Variables  [~15 lines]
│   └── bash block (12 vars)
│
└── ## Fonts  [~3 lines]
    └── 2 bullets
```

---

## 2. Internal Contradictions

### C-1 · Key Colors section vs actual design system
**Location A:** `## Architecture → ### Key Colors`
**Location B:** `## Surface Tier System` and `## Project Purpose`

CLAUDE.md's Key Colors section states:
```
--accent-primary: #6b8e63 (Muted Moss — primary CTA)
--color-burnt-indigo: #4a3a5c (depth/contemplation)
--bg-primary: #f8f8f5 (rice paper), --text-primary: #1a1a1a
```

The Surface Tier System section, Project Purpose section, and the actual `variables.css` use an entirely different color vocabulary: `--mocha-mousse`, `--mocha-deep`, `--mocha-mid`, cream backgrounds (`#F4EBE0`), and espresso text (`#2A1F1A`). The token `--accent-primary` resolves to `var(--mocha-mousse)` (#A47864), not `#6b8e63`. The token `--color-burnt-indigo` does not exist in `variables.css`. The token `--color-muted-moss` does not exist. `--bg-primary` is `#F4EBE0` (cream), not `#f8f8f5` (rice paper).

**Type:** Direct contradiction — two color palettes coexist in the same document, one of which is the actual palette and one of which is a legacy palette from a prior design phase.

---

### C-2 · "9 custom hooks" count
**Location A:** `## Key Files → lib/hooks/`
**Location B:** Actual `lib/hooks/` directory

CLAUDE.md states "9 custom hooks (scroll, form, keyboard, focus, swipe)". The `lib/hooks/` directory contains 9 files including `index.ts`, making 8 actual hook files: `useFocusTrap`, `useFormSubmission`, `useFormValidation`, `useKeyboardNavigation`, `useMultiStep`, `usePointerPosition`, `useScrollAnimation`, `useScrollTrigger`, `useSwipeGesture`. Count is 9 hooks (not including index.ts) — but `useFormSubmission` is missing from the descriptive list in the parenthetical "(scroll, form, keyboard, focus, swipe)," and `useMultiStep` is entirely absent from both the count and the list. The count of "9" happens to be correct by coincidence, but the parenthetical description is incomplete.

**Type:** Tension — not a hard contradiction, but the parenthetical fails to account for all hooks.

---

### C-3 · "Animation-only components must stay server components" vs actual component practice
**Location A:** `## Strict Rules → Components`
**Location B:** Actual component implementations

CLAUDE.md states: "Animation-only components must stay server components. Wrap in `<ScrollFade>` / `<ScrollReveal>` / `<ScrollStagger>` (which are already client) instead of marking the section itself `'use client'`."

In practice:
- `components/sections/home/method/Method.tsx` is `'use client'` and contains its own `useEffect` + `useRef` for scroll-driven timeline animation. It is not wrapping a `ScrollFade` externally.
- `components/shared/cta/CTA.tsx` is `'use client'` and uses `ScrollReveal` internally (imported, not wrapped externally).

The rule as written says sections should NOT be `'use client'` for animation — they should be server components wrapping animation wrappers. `Method.tsx` directly contradicts this: it is a section component that is `'use client'` due to animation state.

**Type:** Direct contradiction between the documented rule and the existing code.

---

### C-4 · "No Tailwind in component JSX" vs the Page Wrapper Pattern example
**Location A:** `## Strict Rules → CSS`
**Location B:** `## Component Organization → Page Wrapper Pattern` code block

The Strict Rules section states: "No Tailwind in component JSX — only `text-*`, `font-*`, `leading-*`, responsive breakpoint prefixes."

The Page Wrapper Pattern code block shows `<SectionWrapper variant="primary|secondary|tertiary">` — this is fine. But the rule says only `text-*`, `font-*`, `leading-*` Tailwind utilities are allowed, yet earlier sections and the copilot-instructions.md show Tailwind layout utilities (`max-w-6xl`, `mx-auto`, `px-4`, `grid`, `gap-8`) in page structure examples. The page structure template in `copilot-instructions.md` is built entirely on Tailwind layout classes, which CLAUDE.md's strict rule would prohibit.

**Type:** Tension — the strict rule is more restrictive than the examples suggest; the scope of "allowed Tailwind" is ambiguous across the two documents.

---

### C-5 · "Sanity fallback pattern: try { fetch } catch { use fallback }" vs page singleton fetchers
**Location A:** `## Strict Rules → Data`
**Location B:** `## Sanity CMS` + actual `lib/sanity.ts`

CLAUDE.md's data rules state the fallback pattern as `try { fetch } catch { use fallback }`. The Sanity CMS section says "functions follow pattern `get{ContentType}()`."

The actual fetchers in `lib/sanity.ts` are now named `getPageHome()`, `getPageAbout()`, `getPageContact()`, etc. — page singletons, not content type fetchers. The old pattern `getHomePageContent()`, `getAboutPageContent()`, `getContactPageContent()` no longer exists. The documented convention (`get{ContentType}()`) correctly describes the legacy naming pattern, not the current one. There is no internal contradiction within CLAUDE.md itself on this point, but it describes a pattern that has been superseded.

**Type:** Not a direct internal contradiction, but a statement of convention that contradicts the current code. (Reported in full under §3 Obsolete References.)

---

### C-6 · SectionWrapper "tertiary" variant — documented but behavior unclear
**Location A:** `## Component Organization → Page Wrapper Pattern`
**Location B:** `## Surface Tier System → SectionWrapper Variants`

The Page Wrapper Pattern code block shows `<SectionWrapper variant="primary|secondary|tertiary">`. The Surface Tier System section documents only four variants: `primary`, `secondary`, `dark`, `dark-mid`. The `tertiary` variant appears in the code block example but is absent from the authoritative variant list. `SectionWrapper.tsx` accepts `'primary' | 'secondary' | 'tertiary' | 'dark' | 'dark-mid'` — five variants — but only four are described in the Surface Tier System section.

**Type:** Direct gap — `tertiary` is accepted by the component and shown in an example but never described in the section that exists specifically to describe the variant system.

---

### C-7 · Two "Key Files" sections for lib/blog/portableTextComponents
**Location A:** `## Key Files` table
**Location B:** Actual `lib/blog/` path

CLAUDE.md's Key Files table lists: `lib/blog/portableTextComponents.tsx | Portable text renderer`. The file exists at `lib/blog/portableTextComponents.tsx`. However, the root-level `lib/` also contains `lib/portableTextComponents.tsx` as a separate file — a duplicate or a relocated copy. CLAUDE.md only documents one location, but two exist.

**Evidence:** `ls lib/` shows both `blog/` (subdirectory containing `portableTextComponents.tsx`) and `portableTextComponents.tsx` directly in `lib/`.

**Type:** Reference ambiguity — the documented path is valid but there is an undocumented sibling file.

---

## 3. Obsolete References

### O-1 · `design-notes/jonchalant-positioning.md` — file does not exist
**Where in CLAUDE.md:** `## Current positioning` (line 31) and `## Content & copy principles` (line 68)
**What it references:** `design-notes/jonchalant-positioning.md` — described as containing "full copy blocks and page-by-page direction" and "the approved phrase library."
**Current state:** File does not exist. `ls design-notes/` shows: `design-system.html`, `design-system.png`, `fonts.css`, `README.md`, `scrollfade-screenshot-note.md`, `SKILL.md`, `SUPABASE_KEEPALIVE.md`, `tokens.css`. No `jonchalant-positioning.md`. The content described as living there may now be in `design/canonical-copy.md`.
**Evidence:** Directory listing of `design-notes/` confirms absence.

---

### O-2 · `design-notes/baseline/` — directory does not exist
**Where in CLAUDE.md:** `## Design Notes → Baseline screenshots` (file table)
**What it references:** `baseline/desktop/` and `baseline/mobile/` subdirectories containing pre-Phase-1 screenshots for 9 marketing pages at 1280px and 375px.
**Current state:** Directory does not exist. `design-notes/` contains no `baseline/` subdirectory.
**Evidence:** `ls design-notes/baseline` returns "NO baseline dir."

---

### O-3 · `design-notes/phase-1-change-list.md` — file does not exist
**Where in CLAUDE.md:** `## Design Notes` file table
**What it references:** "Planned Phase 1 UI changes."
**Current state:** File does not exist in `design-notes/`.
**Evidence:** `ls design-notes/` confirms absence.

---

### O-4 · Sanity schema types — named types no longer exist
**Where in CLAUDE.md:** `## Sanity CMS` — "23 schema types… Key ones: `blogPost`, `service`, `course`, `courseLesson`, `module`, `lesson`, `testimonial`, `caseStudy`, `homePageContent`, `aboutPage`, `contactPage`, `foundationPage`, `programsPageContent`, `ikigaiQuiz`"
**Current state:** After the E-2 migration (Workstream 2), the schema was restructured. The following named types in this list no longer exist as top-level schema documents:
- `homePageContent` — replaced by `pageHome` singleton
- `aboutPage` — replaced by `pageAbout` singleton  
- `contactPage` — replaced by `pageContact` singleton
- `foundationPage` — replaced by `pageFoundation` singleton
- `programsPageContent` — replaced by `pagePrograms` singleton
- `ikigaiQuiz` — no such schema file exists; replaced by `pageIkigai` singleton
- `service` — no such schema file found in current `sanity/schemas/`
**Still present:** `blogPost`, `course`, `courseLesson`, `module`, `lesson`, `testimonial`, `caseStudy` schemas exist as files.
**Schema count:** CLAUDE.md claims 23. Current count across `sanity/schemas/` root (7 files), `documents/pages/` (9), `documents/shared/` (6), and `objects/` (9) = roughly 31 schema entities, but many are object types not document types. The "23" figure appears to reference a prior state.
**Evidence:** `ls sanity/schemas/`, `ls sanity/schemas/documents/pages/`, `ls sanity/schemas/documents/shared/`.

---

### O-5 · Sanity data fetching functions — entire list is obsolete
**Where in CLAUDE.md:** `## Sanity CMS` — "All data fetching lives in `lib/sanity.ts` — functions follow pattern `get{ContentType}()`"
**Current state:** The `lib/sanity.ts` file was rewritten in Phase 2. None of the following functions listed in the copilot-instructions.md (which CLAUDE.md defers to for "detailed reference") still exist:
- `getServices()`, `getPrimaryService()`, `getService(slug)`
- `getCollaborations()`, `getCollaborationsByCategory(cat)`
- `getMediaKitData()`
- `getPrograms()`, `getProgramBySlug(slug)`, `getProgramsByCategory(cat)`, `getProgramsFocusItems()`
- `getPageMetadata(page)`, `getContactInfo()`
- `getAboutPageContent()`, `getHomePageContent()`
- `getServiceCategories()`, `getCollaborationPackages()`
- `getAuditPageContent()`, `getContactPageContent()`
- `getLessonsByCategory(cat)`, `getLessonsByPillar(pillar)` (only `getLessons()` remains)

Current functions are: `getTestimonials`, `getCaseStudies`, `getCaseStudy`, `getLessons`, `getFreeLessons`, `getCourses`, `getCourse`, `getFeaturedCourses`, `getLesson`, `getModulesByCourse`, `getRecentBlogPosts`, `getCurriculumWeeks`, `getFourCirclesCourseBySlug`, `getFourCirclesCourse`, `getCoursesFiltered`, `getFourCirclesLesson`, `getNewsletterCapture`, `getAuditCta`, `getStarterGuideCapture`, `getPillarSet`, `getFourCirclesSet`, `getSiteConfig`, `getPageHome`, `getPageAbout`, `getPageContact`, `getPageAudit`, `getPageFoundation`, `getPagePrograms`, `getPageBlog`, `getPageLessons`, `getPageIkigai`.
**Evidence:** `grep "^export" lib/sanity.ts`

---

### O-6 · `home-why-works-*` CSS classes — used by renamed component
**Where in CLAUDE.md:** The handoff task specifically flags `home-why-works-*` as a possible mismatch to verify.
**What it references:** The `WhyItWorks` component (now deleted per Phase 2 migration) had CSS classes prefixed `home-why-works-*`.
**Current state:** The component `WhyItWorks` was deleted. Its replacement is `Method` (in `components/sections/home/method/`). However, `Method.tsx` still uses the old `home-why-works-*` CSS class names (e.g., `home-why-works-section`, `home-why-works-timeline`, `home-why-works-step`), and `sections.css` retains all these selectors. CLAUDE.md does not mention this class-name mismatch. The component is `Method` but its CSS classes are named after the old `WhyItWorks` pattern.
**Evidence:** `grep "home-why-works" components/sections/home/method/Method.tsx` — 12 matches.

---

### O-7 · Key Colors — wrong token names and values
**Where in CLAUDE.md:** `## Architecture → ### Key Colors`
**What it references:**
- `--accent-primary: #6b8e63` (Muted Moss)
- `--color-burnt-indigo: #4a3a5c`
- `--bg-primary: #f8f8f5`
- `--text-primary: #1a1a1a`
**Current state:**
- `--accent-primary` resolves to `var(--mocha-mousse)` = `#A47864`, not `#6b8e63`
- `--color-burnt-indigo` does not exist in `variables.css`
- `--color-muted-moss` does not exist in `variables.css`
- `--bg-primary` = `#F4EBE0` (cream), not `#f8f8f5`
- `--text-primary` = `#2A1F1A` (espresso), not `#1a1a1a`
The Key Colors section is entirely from the prior Muted Moss/Burnt Indigo palette, which was replaced by the Mocha Mousse palette.
**Evidence:** `app/css/variables.css` `:root` block.

---

### O-8 · `--bg-dark` token described as unused but present
**Where in CLAUDE.md:** `## Surface Tier System` — "The legacy `--bg-dark` (`#0a0a0a`) token exists in `variables.css` but is not used by any current section and should not be introduced into new work."
**Current state:** The token does exist in `variables.css` (line 106: `--bg-dark: #0a0a0a`). This is accurate. This is not obsolete — it's a documented legacy token. No action needed. Listed here for completeness; the statement is currently accurate.

---

### O-9 · About page sections — listed sections don't match current code
**Where in CLAUDE.md (copilot-instructions.md, referenced by CLAUDE.md):** About page sections described as: `Hero`, `Origin`, `TurningPoint`, `MethodologyNarrative`, `WhyExists`, `WhoFor` (rendered) + `Philosophy`, `Services`, `Introvert` (dormant).
**Where in CLAUDE.md directly:** `## Architecture → Route Groups` lists `about/`
**Current state in sections/index.ts:** Exported about sections are: `AboutHero`, `Origin`, `AboutServices`, `Philosophy`, `Introvert`, `WhoFor`, `AboutStoryScroll`. Missing from current exports (and from folders):
- `TurningPoint` — no folder exists at `components/sections/about/turning-point/`
- `MethodologyNarrative` — no folder exists at `components/sections/about/methodology-narrative/`
- `WhyExists` — no folder exists at `components/sections/about/why-exists/`
- `StoryScroll` appears instead (as `AboutStoryScroll`) — the Phase 2 migration replaced `TurningPoint` + `MethodologyNarrative` + `WhyExists` with `StoryScroll`
**Evidence:** `ls components/sections/about/`, `cat components/sections/index.ts`.

---

### O-10 · Home page sections — listed sections don't match current code
**Where in CLAUDE.md (copilot-instructions.md, referenced by CLAUDE.md):** Home sections listed as: `Hero`, `FeaturedAreas`, `BlogCards`, `ImpactSection`, `PortfolioPreview`, `WhyWorkTogether`, `WhyItWorks`
**Current state in sections/index.ts:** Exported home sections are: `Hero`, `EmailCapture`, `MeetJon`, `FeaturedAreas`, `BlogCards`, `PortfolioPreview`, `WhyWorkTogether`, `Method`, `FourPillars`. Missing/renamed: `ImpactSection` does not exist anywhere. `WhyItWorks` was deleted and replaced by `Method`. New additions: `EmailCapture`, `MeetJon`, `Method`, `FourPillars`.
**Evidence:** `ls components/sections/home/`, `cat components/sections/index.ts`.

---

### O-11 · `RouteAwareLayout` — referenced in copilot-instructions.md but does not exist
**Where:** `copilot-instructions.md` (the detailed reference CLAUDE.md points to) lists `<RouteAwareLayout>` as a layout component "in `app/layout.tsx`."
**Current state:** No file named `RouteAwareLayout` exists in `components/layout/`. The layout directory contains: `CookieConsent.tsx`, `index.ts`, `MochaSweep.tsx`, `PageTransition.tsx`, `SectionContent.tsx`, `SectionWrapper.tsx`, `SidebarOverlay.tsx`.
**Evidence:** `ls components/layout/`, `grep RouteAwareLayout components/ app/ -r` — single match in copilot-instructions.md only.

---

### O-12 · `app/(marketing)/dance/` — referenced in baseline screenshots, route does not exist
**Where in CLAUDE.md:** `## Design Notes` — "Baseline screenshots cover: `home`, `about`, `blog`, `contact`, `dance`, `foundation`, `ikigai`, `lessons`, `programs`"
**Current state:** `ls app/(marketing)/` shows no `dance/` route. The baseline screenshots directory also does not exist (see O-2), so this is a double ghost reference.
**Evidence:** `ls app/(marketing)/`

---

### O-13 · `app/(marketing)/media-kit/` — referenced in copilot-instructions.md, route does not exist
**Where:** `copilot-instructions.md` (referenced by CLAUDE.md for detailed reference) documents a `Media Kit` page at `app/(marketing)/media-kit/page.tsx` with its own section breakdown and Sanity fetchers.
**Current state:** No `media-kit/` directory exists under `app/(marketing)/`. No `getMediaKitData()` function exists in `lib/sanity.ts`.
**Evidence:** `ls app/(marketing)/`, `grep getMediaKitData lib/sanity.ts`.

---

### O-14 · Sanity `portalLesson` schema type — referenced in copilot-instructions.md, not found
**Where:** `copilot-instructions.md` Sanity schema table lists `portalLesson | Portal lesson content`
**Current state:** No such schema file exists. `ls sanity/schemas/` and all subdirectories confirm absence.
**Evidence:** `grep -rn "portalLesson" sanity/ lib/`.

---

### O-15 · `lib/pageContent.ts` — referenced in copilot-instructions.md, exists but undocumented context
**Where:** `copilot-instructions.md` Key Files table lists `lib/pageContent.ts | Static/fallback page content (largely superseded by Sanity)`
**Current state:** `ls lib/` does not show `pageContent.ts`. This file appears to have been deleted. The `lib/footerData.ts` file exists and is actively imported.
**Evidence:** `ls lib/` — no `pageContent.ts`.

---

### O-16 · API route count — CLAUDE.md says "9 routes," actual count is higher
**Where in CLAUDE.md:** `## Architecture → Route Groups` — "api/ ← 9 routes: admin, checkout, inquiries, movement-plan, presence-coach, presence-score, subscribe, tonality-analysis, webhooks"
**Current state:** `ls app/api/` shows: `account/`, `admin/`, `auth/`, `billing-portal/`, `checkout/`, `health/`, `inquiries/`, `movement-plan/`, `presence-coach/`, `presence-score/`, `sentry-example-api/`, `starter-guide/`, `subscribe/`, `tonality-analysis/`, `webhooks/` — 15 directories. Missing from the CLAUDE.md list: `account/`, `auth/`, `billing-portal/`, `health/`, `sentry-example-api/`, `starter-guide/`.
**Evidence:** `ls app/api/`.

---

## 4. Coverage Gaps — Conventions in Practice but Not in Writing

### G-1 · `components/ui/` — undocumented component directory
**Convention observed:** A `components/ui/` directory exists containing `Button/`, `FeatureList/`, `FormField/`, `FormMessage/`, `SectionHeader/`, `SectionIntro/`. These are imported across ~18 files in `app/` and `components/`. `Button` is the most widely used primitive component on the site.
**Evidence:** `ls components/ui/`, `grep "import.*@/components/ui"` — 20+ matches across `app/`, `components/forms/`, `components/shared/cta/`, etc.
**CLAUDE.md status:** `components/ui/` does not appear anywhere in CLAUDE.md. The Component Organization section describes `sections/`, `shared/`, `utilities/`, `layout/`, `navigation/`, `typography/`, `forms/`, `decorative/`, `animations/` — `ui/` is absent. No guidance exists on what goes in `ui/` vs `utilities/` or `shared/`.

---

### G-2 · `SectionHeader` component — safe-consumer but placement undocumented
**Convention observed:** `SectionHeader` is imported from `@/components/ui/SectionHeader` in ~10 section components and is in the headline safe-consumer allowlist. It is the standard component for section eyebrow/headline/subhead triplets.
**Evidence:** `grep "SectionHeader" components/sections/ components/shared/ -r --include="*.tsx"` — 13 matches. All import from `@/components/ui/SectionHeader`.
**CLAUDE.md status:** `SectionHeader` appears only in the safe-consumer allowlist. Its purpose, placement, and usage pattern are undocumented. No mention of `SectionHeader` in Component Organization, Style Placement Guide, or Development Tips.

---

### G-3 · `components/ui/Button` — primary interactive primitive, undocumented
**Convention observed:** `Button` from `@/components/ui/Button` is the primary interactive element on the site — used in error pages, portal pages, form pages, and section components. It replaces direct `<button>` or `<a>` elements for interactive CTAs.
**Evidence:** `grep "import.*Button.*@/components/ui"` — used in `app/(marketing)/error.tsx`, `app/global-error.tsx`, `app/not-found.tsx`, `components/shared/cta/CTA.tsx`, `components/forms/BlogOptIn.tsx`, and many more.
**CLAUDE.md status:** No mention of `Button` from `components/ui/`. The Strict Rules section's CSS examples show buttons via CSS class (`.btn-primary`, etc.) but no convention for which component to use for buttons is stated.

---

### G-4 · Page-level `renderHeadline()` calls — convention applies beyond components
**Convention observed:** `renderHeadline()` is called directly in `app/` page files (not just in components), including `app/(marketing)/foundation/page.tsx`, `app/(marketing)/programs/page.tsx`, `app/(marketing)/blog/BlogClient.tsx`, `app/(marketing)/contact/ContactClient.tsx`. This means the headline rendering convention applies to route files, not only to named section components.
**Evidence:** `grep "renderHeadline" app/ -r --include="*.tsx"` — 4 matches in page/client files.
**CLAUDE.md status:** The Headline rendering convention says "For raw `<h1>`/`<h2>`/etc. interpolations in page routes or shared components, the wrap must be explicit." This is stated but the examples only show component-level usage. The safe-consumer pattern only covers components. No guidance on when it's appropriate to call `renderHeadline` at the page level vs pushing it into a component.

---

### G-5 · `ScrollFade` as the primary animation wrapper on page files
**Convention observed:** `ScrollFade` (from `@/components/animations`) is the animation wrapper used directly in page files (e.g., `app/(marketing)/page.tsx`, `app/(marketing)/programs/page.tsx`) to add scroll-triggered opacity/transform reveals to content blocks. It is not used via a section component intermediary — it is called directly in the page route.
**Evidence:** `grep "ScrollFade" app/ -r --include="*.tsx"` — used in `app/(marketing)/page.tsx` (3x) and `app/(marketing)/programs/page.tsx` (5x+).
**CLAUDE.md status:** `ScrollFade`, `ScrollReveal`, `ScrollStagger` are mentioned in the Strict Rules section only as the correct wrappers to use so that "animation-only components stay server components." There is no guidance on when it is appropriate to use `ScrollFade` directly in a page route file vs pushing animation into a component.

---

### G-6 · `StarterGuideForm` — cross-page shared form not in Key Files or Component Organization
**Convention observed:** `StarterGuideForm` (in `components/forms/StarterGuideForm.tsx`) is used on 5+ marketing pages (home, ikigai, audit, foundation, programs) and is in the headline safe-consumer allowlist. It is a significant shared form component.
**Evidence:** `grep "StarterGuideForm" app/ components/ -r --include="*.tsx"` — multiple matches across pages.
**CLAUDE.md status:** No mention in Key Files, Component Organization, or Strict Rules. Listed in the safe-consumer allowlist only. Not in the `components/sections/index.ts` barrel, despite being a cross-page component comparable in scope to `CTA` or `FAQ`.

---

### G-7 · `CookieConsent` and `MochaSweep` — global layout components, undocumented
**Convention observed:** `CookieConsent` and `MochaSweep` are layout components mounted in the root `app/layout.tsx` alongside `MochaCursor`. They are global UI elements.
**Evidence:** `grep "CookieConsent\|MochaSweep\|MochaCursor" app/layout.tsx` — all three imported and rendered in root layout.
**CLAUDE.md status:** None of these appear in CLAUDE.md's Key Files, Component Organization, or Architecture sections.

---

### G-8 · `lib/env.ts` — centralized environment variable validation, undocumented
**Convention observed:** `lib/env.ts` uses zod to validate all environment variables at startup and exports `env` (typed `ServerEnv`) and `features` (capability flags). API routes and server utilities import `env` from this file rather than accessing `process.env` directly. This is a significant architectural convention.
**Evidence:** `lib/env.ts` exists and is imported by `app/api/movement-plan/route.ts`, `app/api/presence-coach/route.ts`, etc.
**CLAUDE.md status:** `lib/env.ts` appears nowhere in CLAUDE.md's Key Files table, Environment Variables section, or Auth section. The Environment Variables section lists raw env var names and shows them with bare comments — no mention that access should go through `lib/env.ts` rather than `process.env`.

---

### G-9 · `lib/footerData.ts` — active lib file, undocumented
**Convention observed:** `lib/footerData.ts` exports `FOOTER_NAV` and `FALLBACK_SOCIAL`, both actively imported by `components/navigation/SiteFooter.tsx`.
**Evidence:** `grep "footerData" components/ -r --include="*.tsx"`.
**CLAUDE.md status:** Not listed in the Key Files table.

---

### G-10 · `Bento` / `BentoCell` shared components — undocumented layout primitive
**Convention observed:** `components/shared/bento/` exports `Bento` and `BentoCell`, which are used by `CurriculumBento` to lay out the programs page curriculum section. This is an established layout pattern for grid-based content displays.
**Evidence:** `grep "Bento" components/ -r --include="*.tsx"` — `CurriculumBento` imports and uses `Bento`/`BentoCell`.
**CLAUDE.md status:** Not mentioned anywhere. The shared component list in the preamble or Component Organization section does not include `bento/`. The sections/index.ts barrel also does not export it (it's imported directly by `CurriculumBento`).

---

### G-11 · `lib/typography.tsx` — undocumented lib file
**Convention observed:** `lib/typography.tsx` exists in `lib/` alongside the other lib files.
**Evidence:** `ls lib/` confirms presence.
**CLAUDE.md status:** Not listed in Key Files table. Its purpose is unknown from CLAUDE.md alone.

---

### G-12 · `useFormSubmission` hook — undocumented, referenced in migration
**Convention observed:** `useFormSubmission` hook exists in `lib/hooks/` and the Phase 2 migration summary notes "Wire to `useFormSubmission` once the endpoint lands" for `StarterGuideForm`. It is a deliberate convention for form submission handling.
**Evidence:** `lib/hooks/useFormSubmission.ts` exists. The migration summary references it explicitly.
**CLAUDE.md status:** Not mentioned in CLAUDE.md. The hooks parenthetical "(scroll, form, keyboard, focus, swipe)" should implicitly cover it under "form" but the hook itself is never named.

---

### G-13 · Portal `settings/` route — not in CLAUDE.md route map
**Convention observed:** `app/(portal)/portal/settings/` exists as a route.
**Evidence:** `ls app/(portal)/portal/` — includes `settings/`.
**CLAUDE.md status:** The Architecture route group for `(portal)` does not list `settings/`. It lists `movement-plan/`, `presence-score/`, `tonality/` but omits `settings/`.

---

## 5. Organic-Growth Artifacts

### A-1 · `## Strict Rules` — CSS sub-list has grown without architectural coherence
**Section:** `## Strict Rules → CSS`
**Issue:** The CSS sub-list contains 10 bullets that mix three distinct concerns without separation: cascade/architecture rules ("No new CSS files," "CSS layer order"), micro-style rules ("No `!important`," "No inline styles," "No Tailwind"), and a narrow engineering constraint that needed a paragraph to explain (`overflow: clip` vs `overflow: hidden`). The `overflow: clip` rule is the most complex item in the list and merits its own note, but is buried as a peer of "Light mode only." The rule was added later (it has the feel of a hard-won lesson) and is sandwiched between unrelated items.
**Excerpt evidence:** The overflow rule reads: "Use `overflow: clip` / `overflow-x: clip` (not `overflow: hidden` / `overflow-x: hidden`) on layout-establishing elements (`html`, `body`, `main`, `section`, `article`, `.container`, `.section-wrapper`) unless they are intentionally scroll containers — hidden overflow can establish a scroll context that breaks descendant `position: sticky`." This is 2–3x longer than any adjacent bullet and covers a different abstraction level.

---

### A-2 · `## Current positioning` + `## Project Purpose` — redundant with different framing
**Sections:** `## Current positioning` and `## Project Purpose`
**Issue:** Both sections describe the same thing: what jonchalant.com is and who it's for. The positioning section does it in narrative + bullet form (funnel, voice, key phrases, what it is not). The project purpose section does it again in paragraph form (target audience, design philosophy). Neither section links to or acknowledges the other. A reader sees the same information twice without understanding why. The Project Purpose section also restates the Zen design philosophy that appears again in the Key Colors section and in `variables.css`.

---

### A-3 · `## Headline rendering convention` — ESLint enforcement note is embedded in a user-facing rule
**Section:** `## Headline rendering convention`
**Issue:** This section starts as a clear user-facing rule (how to call `renderHeadline`), then adds ESLint enforcement detail (rule location, safe-consumer allowlist, update instructions for the rule file), then adds more behavioral details. The safe-consumer list and the rule-update instructions are implementation details of the ESLint rule, not the rendering convention itself. They have grown into the section by accretion and make the core rule harder to scan. The "When you add a new component…add its JSX element name to both: 1. `DEFAULT_SAFE_CONSUMERS`… 2. The `safeConsumers` list…" paragraph is maintenance procedure for a developer extending the rule, not a coding convention for a developer using it.

---

### A-4 · `## Architecture` — three unrelated sub-topics share a heading
**Section:** `## Architecture`
**Issue:** This section contains three conceptually distinct topics: route group structure (ASCII tree), CSS layer order (string), and the full CSS file inventory (table). These have nothing to do with each other except that they are both "architectural." The CSS layer order was likely added when the CSS system was documented (in a later workstream), and the CSS file table added again later. The result is a section that answers three different questions without signaling which question is being addressed. The Key Colors sub-section (3 bullets at the bottom) is especially jarring — it is a design token reference embedded inside an Architecture section.

---

### A-5 · `## Strict Rules` — Positioning & Copy sub-section contains a rule that belongs elsewhere
**Section:** `## Strict Rules → Positioning & Copy`
**Issue:** The two bullets under "Positioning & Copy" are:
1. A consistency rule ("All new copy must align with jonchalant-positioning.md")
2. A product integration note ("The ikigai quiz and the Four Circles course are tightly coupled")

The second bullet is a product/architecture fact, not a copy rule. It would be more accurately placed in the Architecture section or the Current Positioning section. It appears to have been added to the Strict Rules section as a catch-all because "Positioning & Copy" was the closest available heading, not because it belongs there structurally.

---

### A-6 · `## Kinetic Typography Systems` — three sub-sections have asymmetric depth
**Section:** `## Kinetic Typography Systems`
**Issue:** The three sub-systems (`.jc-kinetic`, `KineticHeading`, `KineticMoment`) are documented at different levels of detail. `.jc-kinetic` gets 4 bullets. `KineticHeading` gets 4 bullets. `KineticMoment` gets a code block, 5 behavioral bullets, and a long "Important" constraint paragraph. The `KineticMoment` documentation is substantially richer — and the constraint paragraph at the end is both the most important and the hardest to find, because a reader would need to read through the behavioral bullets first. The asymmetry suggests the section was written incrementally (`.jc-kinetic` and `KineticHeading` first, `KineticMoment` added with more detail in a later session).

---

### A-7 · `## Design Notes` — describes a folder that has partially ceased to match
**Section:** `## Design Notes`
**Issue:** The section opens "Do not delete or move these — they are used for visual regression checks and design system reference during Phase 1 refactoring." Phase 1 is presumably complete or ongoing. The section documents 9 files/folders, 3 of which no longer exist (`jonchalant-positioning.md`, `baseline/desktop/`, `baseline/mobile/`, `phase-1-change-list.md`). The remaining files exist but the framing ("during Phase 1 refactoring") is temporally anchored to a past phase, making the purpose unclear for someone reading after Phase 1.

---

## 6. Reference Accuracy

The following specific references in CLAUDE.md were verified against the codebase. Each is marked Accurate / Inaccurate / Partial.

| Reference in CLAUDE.md | Verdict | Notes |
|---|---|---|
| `lib/sanity.ts` | Accurate | File exists |
| `lib/types.ts` | Accurate | File exists |
| `lib/auditData.ts` | Accurate | File exists |
| `lib/auth-context.tsx` | Accurate | File exists |
| `lib/portal-progress.ts` | Accurate | File exists |
| `lib/schema.ts` | Accurate | File exists |
| `lib/hooks/` | Accurate | Directory exists |
| `lib/ikigai-results.ts` | Accurate | File exists |
| `components/sections/index.ts` | Accurate | File exists |
| `components/portal/PortalShell.tsx` | Accurate | File exists |
| `components/portal/PresenceCoachWidget.tsx` | Accurate | File exists |
| `middleware.ts` | Accurate | File exists |
| `lib/blog/portableTextComponents.tsx` | Accurate | File exists at this path; a duplicate `lib/portableTextComponents.tsx` also exists (undocumented) |
| `utils/supabase/server` | Accurate | `utils/supabase/server.ts` exists |
| `utils/supabase/client` | Accurate | `utils/supabase/client.ts` exists |
| `lib/auth-context.tsx` (`useAuth` hook) | Accurate | `useAuth` exported from this file |
| `markLessonComplete`, `getLessonProgress`, `getCourseProgress` | Partial | `markLessonComplete` and `getLessonProgress` and `getCourseProgress` exist; `getCourseProgressPercent` also exists (undocumented variant) |
| `saveIkigaiResult`, `getLatestIkigaiResult`, `getIkigaiResultHistory` | Accurate | All three present in `lib/ikigai-results.ts` |
| `eslint-plugin-jonchalant/` | Accurate | Directory and `rules/headline-needs-render.js` exist |
| `DEFAULT_SAFE_CONSUMERS` in `rules/headline-needs-render.js` | Accurate | Variable exists |
| `safeConsumers` list in `eslint.config.mjs` | Partial | `eslint.config.mjs` exists; `safeConsumers` is not explicitly overridden there (uses plugin default) — the instruction to "add to safeConsumers list in `eslint.config.mjs`" may refer to a configuration option not currently configured |
| Safe-consumer allowlist in CLAUDE.md (13 names) | Accurate | Matches `DEFAULT_SAFE_CONSUMERS` in `headline-needs-render.js` exactly |
| `app/css/variables.css` — `--mocha-deep: #6B4F3F` | Accurate | |
| `app/css/variables.css` — `--mocha-mid: #8C7264` | Accurate | |
| `app/css/variables.css` — `--anchor-on-dark: #E8C8B0` | Accurate | |
| `app/css/variables.css` — `--mocha-mousse: #A47864` | Accurate | |
| `app/css/variables.css` — `--bg-dark: #0a0a0a` | Accurate | |
| `--accent-primary: #6b8e63` (Key Colors section) | **Inaccurate** | `--accent-primary` = `var(--mocha-mousse)` = `#A47864` |
| `--color-burnt-indigo: #4a3a5c` (Key Colors section) | **Inaccurate** | Token does not exist in `variables.css` |
| `--bg-primary: #f8f8f5` (Key Colors section) | **Inaccurate** | `--bg-primary` = `#F4EBE0` |
| `--text-primary: #1a1a1a` (Key Colors section) | **Inaccurate** | `--text-primary` = `#2A1F1A` |
| `design-notes/jonchalant-positioning.md` | **Inaccurate** | File does not exist |
| `design-notes/baseline/desktop/` | **Inaccurate** | Directory does not exist |
| `design-notes/baseline/mobile/` | **Inaccurate** | Directory does not exist |
| `design-notes/phase-1-change-list.md` | **Inaccurate** | File does not exist |
| `design-notes/design-system.html` | Accurate | File exists |
| `design-notes/design-system.png` | Accurate | File exists |
| `design-notes/tokens.css` | Accurate | File exists |
| `design-notes/fonts.css` | Accurate | File exists |
| `design-notes/SKILL.md` | Accurate | File exists |
| `design-notes/README.md` | Accurate | File exists |
| `app/**/opengraph-image.tsx` (exception for inline styles) | Accurate | `app/(marketing)/opengraph-image.tsx` exists |
| `components/animations/ScrollFade.tsx`, `ScrollReveal.tsx`, `ScrollStagger.tsx` | Accurate | All three files exist in `components/animations/` |
| `components/layout/SectionWrapper.tsx`, `SectionContent.tsx`, `PageTransition.tsx` | Accurate | All exist |
| `lib/hooks/` — 9 custom hooks | Partial | 9 hook files exist, but `useMultiStep` is not mentioned by name anywhere in CLAUDE.md |
| `23 schema types in sanity/schemas/` | **Inaccurate** | Count is wrong; named types include several that no longer exist (see O-4) |
| `homePageContent`, `aboutPage`, `contactPage`, `foundationPage`, `programsPageContent`, `ikigaiQuiz` (Sanity schemas) | **Inaccurate** | None of these schema names exist in current `sanity/schemas/` |
| `service` schema (Sanity) | **Inaccurate** | No `service.ts` schema file found |
| Route `app/(marketing)/dance/` (implied by baseline screenshot list) | **Inaccurate** | Route does not exist |
| API count "9 routes" | **Inaccurate** | 15 API route directories exist |
| `Next.js 16.1.1` | Accurate | Matches `package.json` |
| `React 19` | Accurate | `react: 19.2.3` in package.json |
| `TypeScript 5` | Accurate | `typescript: ^5` in package.json |

---

## 7. Lint Baseline Check

**Pre-existing lint count from `lint-out.txt`:** 152 problems (120 errors, 32 warnings)

**Current lint run (`npm run lint`):**
```
✖ 152 problems (120 errors, 32 warnings)
  3 errors and 1 warning potentially fixable with the --fix option.
```

**Delta:** 0. Baseline is unchanged.

---

## Summary

| Category | Count |
|---|---|
| Internal contradictions | 7 (C-1 through C-7) |
| Obsolete references | 16 (O-1 through O-16) |
| Coverage gaps | 13 (G-1 through G-13) |
| Organic-growth artifacts | 7 (A-1 through A-7) |
| Reference accuracy failures | 14 specific items inaccurate (see §6 table) |
| Lint count delta | 0 (152 → 152) |

**Report file:** `design/diagnostics/claude-md-diagnostic-2026-05-09.md`
