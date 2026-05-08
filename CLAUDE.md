# CLAUDE.md — Jonchalant Codebase Rules

Rules and conventions for jonchalant.com. For detailed reference (component trees, page breakdowns, Sanity schemas, data fetching), see `.github/copilot-instructions.md`.

---

## Current positioning (read this first)

Jonchalant helps professionals find the work they were meant for — then learn to inhabit it. Ikigai is the entry point. Embodiment is the practice. Dance is Jon's personal medium, used as the demonstration and the teaching vehicle, but the philosophy is medium-agnostic.

**Funnel:**
1. Ikigai Assessment (free, ungated) — identifies which of the four circles are strong/missing
2. The Four Circles (free, gated behind account creation) — 12-lesson course explaining what the results mean
3. The Foundation (paid, $197 or $497) — embodiment training through dance, transfers to any medium
4. 1-on-1 coaching ($3,500+) — custom work on specific situations

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

See `design-notes/jonchalant-positioning.md` for full copy blocks and page-by-page direction.

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

---

## Project Purpose

Jonchalant is a professional platform helping people find their purpose (using the ikigai framework) and learn to embody it (through a dance-taught, medium-agnostic embodiment practice). Target audience: corporate professionals who are quietly misaligned — usually well-paid, competent, in-demand, and missing one of the four ikigai circles (most often Mission or Passion).

Design philosophy: Japanese Zen-inspired (burnt indigo, muted moss, warm amber palette; editorial typography via Fraunces; generous whitespace). The brand is warm and honest, not polished and aspirational. Light mode only.

---

## Content & copy principles

When editing copy or generating new content:

1. **Ikigai first.** Any new top-of-funnel copy should lead with the purpose/ikigai frame, not with "executive presence" or "coaching."
2. **Medium-agnostic.** Never assume the reader is a dancer. If a copy block is dance-specific, justify the mention or make it optional.
3. **No coaching jargon.** Avoid: unlock, transform, journey, empowered, authentic self, limiting beliefs, inner game.
4. **Specificity wins.** Prefer concrete numbers, named situations, sensory detail over abstract claims.
5. **Honest about tradeoffs.** When describing a program or course, name what it isn't as clearly as what it is.
6. **Kinetic typography moments.** One per page maximum. Must carry the page's argument, not decorate it. See `design-notes/jonchalant-positioning.md` for the approved phrase library.

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
happens automatically - those components run `renderHeadline` internally on
string input. For raw `<h1>`/`<h2>`/etc. interpolations in page routes or
shared components, the wrap must be explicit.

**ESLint enforcement:** The `jonchalant/headline-needs-render` rule (in
`eslint-plugin-jonchalant/`) enforces this automatically. It flags any `.headline`
member expression used directly in JSX that is not wrapped in `renderHeadline()`
and not passed as a prop to an allowlisted safe-consumer component.

**Safe-consumer allowlist** (components that call `renderHeadline` internally —
passing `.headline` to these as any prop is fine):

```text
Hero, GenericHero, PageHero, CTA, SectionHeader, KineticHeading,
BlogOptIn, StarterGuideForm, EmailCapture, FourPillars, MeetJon,
Method, WhoFor, StoryScroll, CurriculumBento, Testimonials, BlogCards
```

When you add a new component that accepts a headline string and calls
`renderHeadline()` internally, add its JSX element name to both:
1. `DEFAULT_SAFE_CONSUMERS` in `eslint-plugin-jonchalant/rules/headline-needs-render.js`
2. The `safeConsumers` list in `eslint.config.mjs` (if you ever override the default there)

The rule does **not** flag boolean guards (`{x?.headline && <jsx>}`) or values
inside `JSON.stringify()` (schema data). It only catches direct renders like
`<h2>{x.headline}</h2>` and passing to non-allowlisted components.

---

## Strict Rules

**CSS:**
- **No `!important`** — fix specificity/cascade instead. Only exception: `@media (prefers-reduced-motion: reduce)` overrides in `interactions.css`
- **No new CSS files** — 18 files exist (9 system + 9 page-scoped). Add styles to the relevant one
- **No inline styles** except truly dynamic values (progress widths, transform offsets, CSS custom properties set per render)
- **No Tailwind in component JSX** — only `text-*`, `font-*`, `leading-*`, responsive breakpoint prefixes
- **BEM-inspired kebab-case naming**: `.section-name`, `.section-name-header`, `.section-name-title`
- **Light mode only** — no dark mode
- **Always use CSS variables for colors** — never hardcode hex in page-scoped CSS files
- **Use `overflow: clip` / `overflow-x: clip` (not `overflow: hidden` / `overflow-x: hidden`) on layout-establishing elements** (`html`, `body`, `main`, `section`, `article`, `.container`, `.section-wrapper`) unless they are intentionally scroll containers — hidden overflow can establish a scroll context that breaks descendant `position: sticky`
- **Standard breakpoints only**: 640px (sm), 768px (md), 1024px (lg) — no 480px, 560px, 960px
- **OpenGraph image exception**: `app/**/opengraph-image.tsx` files render server-side to PNG via `next/og` and may use inline styles + hardcoded hex. Nowhere else.

**Components:**
- **No "Section" suffix** on component names (`Hero` not `HeroSection`)
- **Server components by default** — only `'use client'` for interactive state (`useState`, `useEffect`, event handlers, refs to interactive APIs)
- **Animation-only components must stay server components**. Wrap in `<ScrollFade>` / `<ScrollReveal>` / `<ScrollStagger>` (which are already client) instead of marking the section itself `'use client'` and running an internal `IntersectionObserver`
- **Import alias `@/` always** — never relative paths from deep files
- **All sections exported from `components/sections/index.ts`** with descriptive aliases

**Data:**
- **Sanity fallback pattern**: `try { fetch } catch { use fallback }`
- **No hardcoded page copy** — all marketing text from Sanity or lib data files
- **Audit quiz data** stays in `lib/auditData.ts` (not Sanity) — scoring coupled to question structure
- **Shared TypeScript types** live in `lib/types.ts` — import from there, don't re-declare inline

**Auth:**
- **Never import `lib/supabase.ts`** (deleted). Use SSR-safe helpers:
  - Server: `import { createClient } from "@/utils/supabase/server"`
  - Client: `import { createClient } from "@/utils/supabase/client"`
- **Auth-gate logic lives client-side** in the `useAuth` hook (`lib/auth-context.tsx`)

**Positioning & Copy:**
- **Positioning consistency**: All new copy must align with `design-notes/jonchalant-positioning.md`. If a section of the codebase has copy that contradicts the ikigai-front-door positioning, flag it rather than preserving it.
- **Ikigai + Four Circles integration**: The ikigai quiz (on `/ikigai`) and the Four Circles course are tightly coupled. Quiz results always save to the user's portal (if authed) and unlock personalized lesson recommendations. Never treat them as separate products in code or copy.

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

**Important:** Do not extend `KineticMoment` to support per-word reveal, color animation, or transform-based motion. The component's value is its *constraint* — adding motion options dilutes the convention and makes future kinetic moments feel inconsistent. If a future page needs a different motion treatment for a kinetic moment, that's a design decision worth surfacing in claude.ai before introducing a second motion variant. The default answer should be "use `KineticMoment` as-is" until proven otherwise.

---

## Page Rhythm Convention

A typical content page on Jonchalant is mostly cream. Pages introduce hierarchy through:

1. **One deepest-dark moment** (the chromatic climax) — typically the Method section or equivalent
2. **One dramatic kinetic moment** (the typographic climax) — ideally the same gesture, with the kinetic phrase living inside or adjacent to the dark section

When implementing changes that affect surface color or section weight, consider the whole page's rhythm, not just the section being changed. Adding a second dark moment, or a second kinetic moment, requires deliberate justification — uniform section weight is the design flatness the system explicitly fights against.

---

## Architecture

### Route Groups
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
└── api/            ← 9 routes: admin, checkout, inquiries, movement-plan,
                       presence-coach, presence-score, subscribe, tonality-analysis, webhooks
```

### CSS Layer Order

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

### Key Colors
- `--accent-primary: #6b8e63` (Muted Moss — primary CTA)
- `--color-burnt-indigo: #4a3a5c` (depth/contemplation)
- `--bg-primary: #f8f8f5` (rice paper), `--text-primary: #1a1a1a`

---

## Component Organization

### Placement Rules
- **Page-specific sections** → `components/sections/{page}/` (e.g., `sections/home/hero/`)
- **Reusable sections** → `components/shared/{name}/` (e.g., `shared/cta/`, `shared/testimonials/`)
- **Utility components** (cards, badges, grids) → `components/utilities/{category}/`
- Each component gets its own folder with `ComponentName.tsx` + `index.ts`

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

---

## Design Notes (`design-notes/`)

A folder of design reference assets. Do not delete or move these — they are used for visual regression checks and design system reference during Phase 1 refactoring.

| File / Folder | Purpose |
|---|---|
| `design-system.html` | Live HTML render of the full design system (tokens, typography, components) |
| `design-system.png` | Static screenshot of the design system render |
| `baseline/desktop/` | Pre-Phase-1 desktop screenshots (1280px) for 9 marketing pages |
| `baseline/mobile/` | Pre-Phase-1 mobile screenshots (375px) for 9 marketing pages |
| `phase-1-change-list.md` | Planned Phase 1 UI changes |
| `tokens.css` | Design token reference (mirrors `variables.css`) |
| `fonts.css` | Font stack reference |
| `SKILL.md` | Design-system skill file for Copilot |
| `README.md` | Design notes overview |

Baseline screenshots cover: `home`, `about`, `blog`, `contact`, `dance`, `foundation`, `ikigai`, `lessons`, `programs` — at both 1280px and 375px.

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
| `lib/hooks/` | 9 custom hooks (scroll, form, keyboard, focus, swipe) |
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

23 schema types in `sanity/schemas/`. Key ones: `blogPost`, `service`, `course`, `courseLesson`, `module`, `lesson`, `testimonial`, `caseStudy`, `homePageContent`, `aboutPage`, `contactPage`, `foundationPage`, `programsPageContent`, `ikigaiQuiz`.

All data fetching lives in `lib/sanity.ts` — functions follow pattern `get{ContentType}()`.

---

## Environment Variables

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
