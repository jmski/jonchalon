# CLAUDE.md — Jonchalant Codebase Rules

Rules and conventions for jonchalant.com. CLAUDE.md is a *summary* — see [Authoritative Sources Hierarchy](#authoritative-sources-hierarchy) for which files own which truths and how summary updates work.

---

## Project Purpose

Jonchalant helps professionals find the work they were meant for — then learn to inhabit it. Ikigai is the entry point. Embodiment is the practice. Dance is Jon's personal medium, used as the demonstration and the teaching vehicle, but the philosophy is medium-agnostic.

**Target audience:** corporate professionals who are quietly misaligned — usually well-paid, competent, in-demand, and missing one of the four ikigai circles (most often Mission or Passion).

**Funnel:**
1. Ikigai Assessment (free, ungated) — identifies which of the four circles are strong/missing
2. The Four Circles (free, gated behind account creation) — 12-lesson course explaining what the results mean
3. The Foundation (paid, $197 or $497) — embodiment training through dance, transfers to any medium
4. 1-on-1 coaching ($3,500+) — custom work on specific situations

The ikigai quiz (on `/ikigai`) and the Four Circles course are tightly coupled: quiz results always save to the user's portal (if authed) and unlock personalized lesson recommendations. Never treat them as separate products in code or copy.

**Voice and tone:** Casual, direct, unpretentious. Specific over general. No coaching jargon. Jon speaks like someone who's honest about tradeoffs and doesn't need to impress you.

**Key phrases that should stay consistent across the site:**
- "Find the work you were meant for"
- "The medium changes. The fundamentals don't."
- "Dance is my medium. Yours will be different."
- The four pillars: Grounding, Energy, Flow, Command
- The four circles: Passion, Mission, Vocation, Profession

**What the site is not:**
- Not a dance school
- Not a generic executive coaching program
- Not a self-help product

**Design philosophy:** Japanese Zen-inspired (burnt indigo, muted moss, warm amber palette; editorial typography via Fraunces; generous whitespace). The brand is warm and honest, not polished and aspirational. Light mode only.

See `design/canonical-copy.md` for full copy blocks (source of truth for all marketing copy).

---

## Authoritative Sources Hierarchy

CLAUDE.md is a summary. When CLAUDE.md disagrees with the file that actually owns a truth, the truth wins and CLAUDE.md is corrected.

| Domain | Authoritative source |
|---|---|
| Visual tokens (colors, spacing, surface tiers) | `app/css/variables.css` |
| Typography (font stacks, font tokens) | `design-notes/fonts.css`, `design-notes/tokens.css` |
| Visual design system (rendered components, tokens, type scale) | `design-notes/design-system.html` / `design-notes/design-system.png` |
| Marketing copy (headlines, CTAs, body blocks) | `design/canonical-copy.md` |
| Content shape (Sanity schemas, document types, fields) | `sanity/schemas/index.ts` and the schema files it registers |
| Implementation (what components exist, how they render, what fetchers return) | The actual files in the repo |
| Conventions and cross-environment context | CLAUDE.md (this file) |

**Summary-update contract:** when a truth changes, CLAUDE.md is updated in the same workstream as the change. CLAUDE.md is never permitted to lag the underlying file. If a workstream changes a token, a schema, a fetcher name, or a component-organization rule, that workstream owns the corresponding CLAUDE.md edit.

---

## Stack & Build

Next.js 16.1.1 (App Router) | React 19 | TypeScript 5 | Tailwind v4 (utility-only) | Sanity CMS | Supabase Auth | Resend | Stripe

```bash
npm run dev           # localhost:3000
npm run build         # Production build (Turbopack)
npm run lint          # ESLint
npm run sanity:dev    # Sanity Studio dev
npm run sanity:deploy # Deploy Sanity Studio
```

Config: `reactCompiler: true` (no manual useMemo/useCallback), `turbopack` enabled.

**Lint baseline:** 1 (Workstream 4 Layer 5 cleanup complete; was 152 at Workstream 4 start). The remaining violation is `@typescript-eslint/no-require-imports` in `.migration/inspect.cjs`, an ESM-incompatible one-off CJS migration script — accepted as deliberate per the lint inventory's config-vs-conversion judgment. Non-cleanup work must keep this number flat — delta-0 is the regression signal.

---

## Content & copy principles

When editing copy or generating new content:

1. **Ikigai first.** Any new top-of-funnel copy should lead with the purpose/ikigai frame, not with "executive presence" or "coaching."
2. **Medium-agnostic.** Never assume the reader is a dancer. If a copy block is dance-specific, justify the mention or make it optional.
3. **No coaching jargon.** Avoid: unlock, transform, journey, empowered, authentic self, limiting beliefs, inner game.
4. **Specificity wins.** Prefer concrete numbers, named situations, sensory detail over abstract claims.
5. **Honest about tradeoffs.** When describing a program or course, name what it isn't as clearly as what it is.
6. **Kinetic typography moments.** One per page maximum. Must carry the page's argument, not decorate it. See `design/canonical-copy.md` for the approved phrase library.

---

## Headline rendering convention

Headlines from Sanity contain `{{double-brace}}` markers around italic anchor
words (e.g., `Find the work you were {{meant}} for.`). These markers must be
stripped and the anchor word wrapped in `<em>` (or `<AnchorWord>` for kinetic
headings) before rendering.

**The rule:** any time a `.headline` field is interpolated into JSX, route it
through `renderHeadline()`:

```tsx
// wrong - renders literal braces
<h2 className="...">{content.section.headline}</h2>

// right
<h2 className="...">{renderHeadline(content.section.headline)}</h2>
```

For sections built using `<SectionHeader>` or `<KineticHeading>`, the wrapping
happens automatically — those components run `renderHeadline` internally on
string input. For raw `<h1>`/`<h2>`/etc. interpolations in page routes or
shared components, the wrap must be explicit. This includes route files under
`app/(marketing)/*/page.tsx` — `renderHeadline()` applies to direct
interpolation everywhere it occurs, not only inside section components.

**Safe-consumer pattern:** components that call `renderHeadline` internally are on an allowlist; passing `.headline` to one of them as any prop is fine. The current allowlist:

```text
Hero, GenericHero, PageHero, CTA, SectionHeader, KineticHeading,
BlogOptIn, StarterGuideForm, EmailCapture, FourPillars, MeetJon,
Method, WhoFor, StoryScroll, CurriculumBento, Testimonials, BlogCards
```

The `jonchalant/headline-needs-render` ESLint rule flags any `.headline` member expression used directly in JSX that is not wrapped in `renderHeadline()` and not passed to a safe-consumer component. The rule does **not** flag boolean guards (`{x?.headline && <jsx>}`) or values inside `JSON.stringify()` (schema data). It only catches direct renders like `<h2>{x.headline}</h2>` and passing to non-allowlisted components.

### Maintaining the safe-consumer allowlist

When you add a new component that accepts a headline string and calls
`renderHeadline()` internally, add its JSX element name to both:

1. `DEFAULT_SAFE_CONSUMERS` in `eslint-plugin-jonchalant/rules/headline-needs-render.js`
2. The `safeConsumers` list in `eslint.config.mjs` (if you ever override the default there)

---

## Strict Rules

### CSS

**Architecture and cascade**
- **No new CSS files.** 18 files exist (9 system + 9 page-scoped). Add styles to the relevant one.
- **BEM-inspired kebab-case naming**: `.section-name`, `.section-name-header`, `.section-name-title`.
- **Standard breakpoints only**: 640px (sm), 768px (md), 1024px (lg) — no 480px, 560px, 960px.

**Style restrictions**
- **No `!important`** — fix specificity/cascade instead. Only exception: `@media (prefers-reduced-motion: reduce)` overrides in `interactions.css`.
- **No inline styles** except truly dynamic values (progress widths, transform offsets, CSS custom properties set per render).
- **Light mode only** — no dark mode.
- **Always use CSS variables for colors** — never hardcode hex in page-scoped CSS files.
- **Tailwind utilities permitted in component JSX**: typography (`text-*`, `font-*`, `leading-*`, `tracking-*`), responsive prefixes (`sm:`, `md:`, `lg:`), and layout primitives in page route files (`max-w-*`, `mx-auto`, `px-*`, `py-*`, `grid`, `gap-*`, `flex`). Anything beyond these — colors, custom backgrounds, decorative effects, component-level styling — belongs in CSS files.
- **OpenGraph image exception**: `app/**/opengraph-image.tsx` files render server-side to PNG via `next/og` and may use inline styles + hardcoded hex. Nowhere else.

**Engineering constraints**

Use `overflow: clip` / `overflow-x: clip` (not `overflow: hidden` / `overflow-x: hidden`) on layout-establishing elements: `html`, `body`, `main`, `section`, `article`, `.container`, `.section-wrapper` — unless they are intentionally scroll containers.

`overflow: hidden` establishes a scroll context that silently breaks descendant `position: sticky`. The page renders, the sticky element doesn't stick, and there is no error to trace. `overflow: clip` clips the visual overflow without establishing a scroll context, so descendants further down the tree can still use `position: sticky` against an outer ancestor. This rule is non-negotiable on layout primitives; treat any `overflow: hidden` you find on `html`, `body`, `main`, `section`, `article`, `.container`, or `.section-wrapper` as a bug to fix on sight unless that element is genuinely a scroll container.

### Components
- **No "Section" suffix** on component names (`Hero` not `HeroSection`)
- **Server components by default** — only `'use client'` for interactive state (`useState`, `useEffect`, event handlers, refs to interactive APIs)
- **Prefer wrapping over marking sections client.** When a section needs scroll-triggered reveals, wrap it (or its children) in `<ScrollFade>` / `<ScrollReveal>` / `<ScrollStagger>` rather than marking the section itself `'use client'` and running an internal `IntersectionObserver`. Section components may still be `'use client'` when section-level animation state is genuinely unavoidable (e.g., `Method.tsx`'s scroll-driven timeline) — that's a legitimate exception, not a violation, but the wrapper-based pattern is the default. The same wrapper-first preference applies in route files: `<ScrollFade>` may wrap content blocks directly inside `app/(marketing)/*/page.tsx` rather than pushing animation state down into a client section component
- **Import alias `@/` always** — never relative paths from deep files
- **All sections exported from `components/sections/index.ts`** with descriptive aliases

### Data
- **Sanity fallback pattern**: `try { fetch } catch { use fallback }`
- **No hardcoded page copy** — all marketing text from Sanity or lib data files
- **Audit quiz data** stays in `lib/auditData.ts` (not Sanity) — scoring coupled to question structure
- **Shared TypeScript types** live in `lib/types.ts` — import from there, don't re-declare inline
- **Server env vars go through `lib/env.ts`** — never `process.env` directly. The exported `env` object validates the full server environment with zod at startup, so missing or malformed variables fail loudly rather than producing `undefined` at runtime, and consumers get typed access instead of `string | undefined`.

#### Content source: typed lib modules vs Sanity

Editable-but-stable content lives in typed `lib/` modules, not Sanity, and not hardcoded in JSX. Sanity is reserved for content with active CMS-editing benefit — content that changes frequently, requires non-developer editing, or is part of an editorial workflow (page hero copy, blog posts, testimonials, course lessons). Stable cross-page content — navigation links, footer structure, microcopy, error messages, fallback strings — lives in typed `lib/` modules (`lib/navData.ts`, `lib/footerData.ts`, `lib/auditData.ts`, etc.) and is imported directly by the components that consume it. The default when adding new content is the typed module; promoting content to Sanity requires a real editing-workflow justification. See [Authoritative Sources Hierarchy](#authoritative-sources-hierarchy) for which file owns content shape (`sanity/schemas/index.ts`) versus stable content (the `lib/` module itself).

Page-specific stable copy. Stable page-argument copy that doesn't need CMS editorial workflow lives in a typed `lib/` module. Foundation uses `lib/foundationCopy.ts` for its kinetic line as the working example. The pattern is the same as `lib/navData.ts` and `lib/footerData.ts`: typed export, no surrounding object unless multiple values share scope, sourced from `canonical-copy.md`. Don't reach for Sanity for content of this kind unless an active CMS-editing benefit is named.

### Auth
- **Never import `lib/supabase.ts`** (deleted). Use SSR-safe helpers:
  - Server: `import { createClient } from "@/utils/supabase/server"`
  - Client: `import { createClient } from "@/utils/supabase/client"`
- **Auth-gate logic lives client-side** in the `useAuth` hook (`lib/auth-context.tsx`)

### Positioning & Copy
- **Positioning consistency**: All new copy must align with `design/canonical-copy.md`. If a section of the codebase has copy that contradicts the ikigai-front-door positioning, flag it rather than preserving it.

---

## Surface Tier System

The dark surface system has **three tiers**, used deliberately to create chromatic hierarchy on pages with multiple darker sections:

- **`--mocha-deep` (`#6B4F3F`)** — the deepest mocha. **Reserved for the page's chromatic climax.** On Home, this is the Method section only. Do not introduce additional `--mocha-deep` sections on a page that already has one without rebalancing the existing one — having two sections at this depth flattens the hierarchy.
- **`--mocha-mid` (`#8C7264`)** — tertiary warm surface, lighter than `--mocha-deep` but visibly darker than cream. Used for warm-toned content sections that should feel distinct from the cream majority but subordinate to the page's deepest dark moment. Currently used for Home's testimonial and body newsletter sections.
- **`--bg-tertiary` and below** — cream surface tiers for the bulk of page content.

When introducing a new dark or warm-tinted section, choose the tier that preserves the page's existing rhythm. If the page has a `--mocha-deep` climax already, new dark-tinted content uses `--mocha-mid`. If the page has no climax yet, the new section *might* be the climax — but that's a design call, not a default.

The legacy `--bg-dark` (`#0a0a0a`) token exists in `variables.css` but is not used by any current section and should not be introduced into new work without an explicit design decision.

### SectionWrapper Variants

`SectionWrapper` exposes these variants for surface tier:

- **`variant="primary"`** — `--bg-primary` (cream)
- **`variant="secondary"`** — `--bg-secondary` (warmer cream)
- **`variant="tertiary"`** — `--bg-tertiary` (deepest cream tier; warm sand accent)
- **`variant="dark"`** — emits `.jc-section--dark`, surface `--mocha-deep` (page climax)
- **`variant="dark-mid"`** — emits `.jc-section--dark-mid`, surface `--mocha-mid` (subordinate warm-dark)

Choose by tier intent, not by current hex value. If the design system later shifts `--mocha-mid`'s exact value, every `dark-mid` consumer updates with it. New content rules for dark surfaces should be written against `.jc-section--dark` and `.jc-section--dark-mid` classes (e.g., `.jc-section--dark-mid .some-element`), parallel to existing rules.

**Opacity convention on dark surfaces:**
- Body text and attribution copy on dark-mid surfaces uses opacity `0.88` (not the `0.72` used on `--mocha-deep`) to compensate for the lighter background
- Eyebrow text on dark-mid uses `var(--anchor-on-dark)` rather than `--mocha-mousse`

### Italic Anchor Colors

The italic anchor color depends on surface:

- **Light surface (cream)**: `--mocha-mousse` (`#A47864`) — the brand's signature accent
- **Dark surface (`--mocha-deep` or `--mocha-mid`)**: `--anchor-on-dark` (`#E8C8B0`) — warm amber

Do not hardcode `#E8C8B0` anywhere. The token exists for a reason.

---

## Kinetic Typography Systems

There are **two distinct kinetic typography systems** in this codebase. They share no CSS and are NOT interchangeable:

### `.jc-kinetic` — Static Dramatic Heading Primitive

- Static, dramatic-heading CSS class (in `typography.css`)
- Written directly as JSX: `<p className="jc-kinetic">Phrase with <em>anchor</em>.</p>`
- Italic anchor handled by a child `<em>` element
- Used for the *one dramatically scaled type moment per page* — the held-breath moment where stillness is the point
- No motion of its own

### `KineticHeading` Component — Animated Section Title

- Animated section title with per-word reveal via `.kinetic-heading` / `.kinetic-word` / `.anchor-word` classes
- Auto-handles `{{double-brace}}` interpolation (strips braces, wraps anchor in `<em>`)
- Used for animated headings inside content sections
- Per-word stagger is the right motion language for section titles, NOT for held-breath moments

### `KineticMoment` Component — Scroll-Triggered Opacity Fade

> **Constraint (read first).** Do not extend `KineticMoment` to support per-word reveal, color animation, or transform-based motion. The component's value is its *constraint* — adding motion options dilutes the convention and makes future kinetic moments feel inconsistent. If a future page needs a different motion treatment for a kinetic moment, that's a design decision worth surfacing in claude.ai before introducing a second motion variant. The default answer should be "use `KineticMoment` as-is" until proven otherwise.

Wraps a `.jc-kinetic` block to add standard scroll-triggered opacity fade-in:

```jsx
<KineticMoment>
  <p className="jc-kinetic">
    Find your <em>medium</em>.
  </p>
</KineticMoment>
```

**Behavior:**
- Opacity fades from 0 → 1 over 1200ms, ease-out
- Triggered when wrapper enters viewport at ~70% from bottom (`rootMargin: '0px 0px -30% 0px'`)
- `prefers-reduced-motion: reduce` skips observer entirely; phrase renders visible from initial mount
- Generous internal `padding-block` for the held-breath whitespace (mobile 7.5rem / sm 10rem / lg 15rem)
- Opacity is the only animated property — no transform, no scale, no blur

Singular opsz 144 per page. When a page has a kinetic frame, italic anchors elsewhere on the page use formatting-only italics — no explicit `font-variation-settings` `opsz` override. The opsz 144 climax is singular; italics outside the kinetic frame are formatting choices, not type-scale events. The Foundation hero's italic-anchor rule (`.foundation-hero-headline em` in `pages-foundation.css`) is the working example: `font-style: italic` and a color, no opsz declaration.

---

## Page Rhythm Convention

A typical content page on Jonchalant is mostly cream. Pages introduce hierarchy through:

1. **One deepest-dark moment** (the chromatic climax) — typically the Method section or equivalent
2. **One dramatic kinetic moment** (the typographic climax) — ideally the same gesture, with the kinetic phrase living inside or adjacent to the dark section

Kinetic frame placement (long product pages). On pages with substantial content above the commercial ask, the kinetic frame sits after the page has earned the reader's investment but before its operations or pricing — roughly 40–50% scroll depth. Foundation places it between Curriculum (the what) and How It Works (the how). The frame is a dark `SectionWrapper` containing only a `KineticMoment`-wrapped `<p className="jc-kinetic">`; no eyebrow, no subhead, no other content shares the surface. Surface tier rhythm around it: warm cream into deepest dark into warm cream — the dark moment is singular, neighboring sections never repeat dark.

When implementing changes that affect surface color or section weight, consider the whole page's rhythm, not just the section being changed. Adding a second dark moment, or a second kinetic moment, requires deliberate justification — uniform section weight is the design flatness the system explicitly fights against.

---

## Route Groups

```text
app/
├── (marketing)/    ← Navbar + Footer layout (public pages)
│   ├── layout.tsx
│   ├── page.tsx (home), about/, blog/, contact/, foundation/,
│   │   programs/, lessons/, audit/, ikigai/, login/, mfa/, privacy/
│   └── opengraph-image.tsx
├── (portal)/       ← PortalShell + sidebar layout (auth-gated, noindexed)
│   ├── layout.tsx
│   └── portal/
│       ├── page.tsx (dashboard)
│       ├── four-circles/page.tsx (Four Circles course — free, gated behind account creation)
│       ├── four-circles/[lessonSlug]/page.tsx
│       ├── [courseSlug]/page.tsx
│       ├── [courseSlug]/[lessonSlug]/page.tsx
│       └── movement-plan/, presence-score/, tonality/
├── admin/          ← Admin dashboard (separate auth)
└── api/            ← 15 routes: account, admin, auth, billing-portal, checkout,
                       health, inquiries, movement-plan, presence-coach, presence-score,
                       sentry-example-api, starter-guide, subscribe, tonality-analysis, webhooks
```

Portal subroutes (under `(portal)/portal/`): `four-circles/`, `[courseSlug]/`, `movement-plan/`, `presence-score/`, `tonality/`, `settings/`.

---

## CSS System

### Layer Order

Defined in `globals.css`:

```text
@layer reset → variables → base → components → utilities → interactive
```

### 9 System CSS Files

| File | Purpose |
|------|---------|
| `variables.css` | Design tokens: colors, spacing, fonts, gradients |
| `base.css` | HTML/body resets |
| `components.css` | Buttons, badges, FAQ, section-header utils |
| `typography.css` | Text hierarchy |
| `layout.css` | Grid systems, flexbox, sidebar |
| `cards.css` | All card types |
| `sections.css` | Hero, carousel, CTA sections |
| `utilities.css` | Spacing, responsive breakpoints |
| `interactions.css` | Hover states, transitions, animations |

### 9 Page-Scoped CSS Files

`pages-forms.css` | `pages-portal.css` | `pages-blog.css` | `pages-audit.css` | `pages-ikigai.css` | `pages-lessons.css` | `pages-portal-tools.css` | `pages-contact.css` | `pages-foundation.css`

---

## Design Tokens

`app/css/variables.css` is the authoritative source for every visual token. The list below documents the most-used tokens for orientation; consult `variables.css` for the complete set.

The Mocha Mousse system is the canonical palette; the prior Muted Moss / Burnt Indigo palette has been retired.

- `--mocha-mousse: #A47864` — the brand anchor (PANTONE 17-1230)
- `--mocha-deep: #6B4F3F` — chromatic climax (deepest dark)
- `--mocha-mid: #8C7264` — subordinate warm-dark surface
- `--mocha-soft: #D4B8A3` — warm hairline
- `--anchor-on-dark: #E8C8B0` — italic anchor color on dark surfaces
- `--sage-whisper: #8A9A85` — single cool accent, used sparingly
- `--bg-primary: #F4EBE0` (cream), `--bg-secondary: #EFE4D6`, `--bg-tertiary: #E8D9C7`
- `--text-primary: #2A1F1A` (espresso), `--text-secondary: #5C4A3F`, `--text-tertiary: #8A7668`
- `--border-color: #D4B8A3`

Semantic aliases: `--accent-primary` resolves to `var(--mocha-mousse)`; `--accent-hover` to `var(--mocha-deep)`; `--accent-tertiary` to `var(--sage-whisper)`. The `--bg-dark: #0a0a0a` legacy token still exists but is unused — see Surface Tier System.

---

## Component Organization

### Placement Rules
- **Shared primitives** → `components/ui/` (Button, FormField, FormMessage, SectionHeader, SectionIntro, FeatureList — the small, generic building blocks reused across sections and pages)
- **Cross-page composite sections** → `components/shared/{name}/` (e.g., `shared/cta/`, `shared/testimonials/`, `shared/bento/`) — composites that combine primitives into a reusable section pattern
- **Page-specific sections** → `components/sections/{page}/` (e.g., `sections/home/hero/`)
- **Utility components** (cards, badges, grids) → `components/utilities/{category}/`
- Each component gets its own folder with `ComponentName.tsx` + `index.ts`
- **Props-driven children.** Reusable components (utilities, shared sections) accept their data as props and do not depend on context, route state, or other external state. Pages compose them; they do not reach upward.

### Standard Primitives

- **`Button`** (`@/components/ui/Button`) — the standard interactive primitive. Replaces direct `<button>` and `<a>` for CTAs and navigation actions.
- **`SectionHeader`** (`@/components/ui/SectionHeader`) — the standard component for section eyebrow / headline / subhead triplets. On the headline safe-consumer allowlist; pass `.headline` strings to it directly.
- **`Bento` / `BentoCell`** (`@/components/shared/bento`) — layout primitive for grid-based content displays (e.g., `CurriculumBento`).
- **`StarterGuideForm`** (`@/components/forms/StarterGuideForm`) — cross-page shared form used on home, ikigai, audit, foundation, and programs.

### Global Layout

`CookieConsent`, `MochaSweep`, and `MochaCursor` are mounted in the root `app/layout.tsx` as global UI elements; they are not composed by individual pages.

### Page Wrapper Pattern
```tsx
<PageTransition animation="fade">
  <SectionWrapper variant="primary|secondary|tertiary">
    <SectionContent>
      {/* component */}
    </SectionContent>
  </SectionWrapper>
</PageTransition>
```

### Style Placement Guide
New card → `cards.css` | New section → `sections.css` | Page-specific → `pages-*.css` | Utility → `components.css` | Forms → `pages-forms.css`

### Documented class-name retention: `home-why-works-*`

The `Method` component (`components/sections/home/method/Method.tsx`) was renamed from a prior `WhyItWorks` component, but its CSS class names retain the `home-why-works-*` prefix in both the JSX and `app/css/sections.css`. This is documented intent, not drift: the classes are stable, internal, and not exposed to users, and a coordinated rename across CSS and JSX exceeds the semantic-clarity benefit at this scale. References are confined to `Method.tsx` and `sections.css` — no other consumers. Future component-renames that would orphan CSS class names should follow the same calculus: rename only when a consumer outside the component's own scope would otherwise be misled, or when the class names are part of a public/shared selector surface.

---

## Design Notes (`design-notes/`)

A folder of design reference assets. These files are authoritative references for the design system and for visual regression checks; do not delete or move them.

| File / Folder | Purpose |
|---|---|
| `design-system.html` | Live HTML render of the full design system (tokens, typography, components) |
| `design-system.png` | Static screenshot of the design system render |
| `tokens.css` | Design token reference (mirrors `variables.css`) |
| `fonts.css` | Font stack reference |
| `SKILL.md` | Design-system skill file for Copilot |
| `README.md` | Design notes overview |

Marketing copy lives in `design/canonical-copy.md` (source of truth, not in `design-notes/`).

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/sanity.ts` | Sanity client + all `get{ContentType}()` data fetching |
| `lib/types.ts` | Shared TypeScript interfaces |
| `lib/auditData.ts` | Audit quiz questions + scoring |
| `lib/auth-context.tsx` | React auth context (useAuth hook) |
| `lib/portal-progress.ts` | Portal lesson progress tracking |
| `lib/schema.ts` | JSON-LD structured data |
| `lib/env.ts` | Zod-validated typed access to server environment variables |
| `lib/navData.ts` | `NAV_LINKS`, `MOBILE_LINKS`, `MOBILE_CTA` — consumed by `Navbar.tsx` |
| `lib/footerData.ts` | `FOOTER_NAV`, `FALLBACK_SOCIAL` — consumed by `SiteFooter.tsx` |
| `lib/typography.tsx` | `withAnchorWords()` presentational helper — wraps matched words in `<AnchorWord>` for headline/pull-quote rendering |
| `lib/hooks/` | 9 custom hooks: `useFocusTrap`, `useFormSubmission` (standard form submission hook), `useFormValidation`, `useKeyboardNavigation`, `useMultiStep`, `usePointerPosition`, `useScrollAnimation`, `useScrollTrigger`, `useSwipeGesture` |
| `components/sections/index.ts` | Central export hub for all sections |
| `components/portal/PortalShell.tsx` | Portal sidebar + course tree layout |
| `components/portal/PresenceCoachWidget.tsx` | Floating AI coach (all portal pages) |
| `middleware.ts` | Supabase session refresh only |
| `lib/ikigai-results.ts` | Ikigai result calculation + Supabase helpers |

### Database (Supabase)

- `lesson_progress` — RLS-protected, tracks lesson completion per user
- `ikigai_results` — RLS-protected, stores quiz results (scores per quadrant, timestamp, pattern classification, retake history)
- Progress helpers in `lib/portal-progress.ts` — `markLessonComplete`, `getLessonProgress`, `getCourseProgress`
- Ikigai helpers in `lib/ikigai-results.ts` — `saveIkigaiResult`, `getLatestIkigaiResult`, `getIkigaiResultHistory`

---

## Sanity CMS

Schemas live in `sanity/schemas/` and are registered in `sanity/schemas/index.ts`. They fall into four buckets:

- **Page singletons** (`sanity/schemas/documents/pages/`): `pageHome`, `pageAbout`, `pageContact`, `pageFoundation`, `pagePrograms`, `pageBlog`, `pageLessons`, `pageAudit`, `pageIkigai`
- **Shared singletons** (`sanity/schemas/documents/shared/`): `siteConfig`, `auditCta`, `newsletterCapture`, `starterGuideCapture`, `pillarSet`, `fourCirclesSet`
- **Content list documents** (`sanity/schemas/`): `blogPost`, `caseStudy`, `testimonial`, `course`, `courseLesson`, `module`, `lesson`
- **Object types** (`sanity/schemas/objects/`): inline composition primitives used by the documents above

All data fetching lives in `lib/sanity.ts`. The current naming conventions are:

- **Page singletons** → `getPage{Name}()` — e.g., `getPageHome()`, `getPageAbout()`, `getPageFoundation()`, `getPageIkigai()`
- **Shared singletons** → `get{Name}()` — e.g., `getSiteConfig()`, `getAuditCta()`, `getNewsletterCapture()`, `getStarterGuideCapture()`, `getPillarSet()`, `getFourCirclesSet()`
- **Content lists** → `get{Plural}()` / `get{Singular}(slug)` — e.g., `getTestimonials()`, `getCaseStudies()`, `getCaseStudy(slug)`, `getLessons()`, `getCourses()`, `getCourse(slug)`, `getRecentBlogPosts()`

The legacy `get{ContentType}()` page-content fetchers (`getHomePageContent`, `getAboutPageContent`, etc.) were removed during the Phase 2 schema migration and no longer exist.

---

## Environment Variables

Server-side access goes through the typed `env` export from `lib/env.ts` (zod-validated at startup), not `process.env` directly — see Strict Rules > Data.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=   # optional, admin only
ANTHROPIC_API_KEY=           # AI portal tools + PresenceCoach
RESEND_API_KEY=              # Enrollment confirmation emails
STRIPE_SECRET_KEY=           # Stripe checkout
STRIPE_WEBHOOK_SECRET=       # Stripe webhook verification
KIT_API_KEY=                 # Kit/ConvertKit
KIT_FORM_ID=                 # /api/subscribe endpoint
```

---

## Fonts

- **Fraunces** (`var(--font-headline)`) — serif display/headings
- **DM Sans** (`var(--font-body)`) — body text
