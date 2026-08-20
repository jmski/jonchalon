# CLAUDE.md — Jonchalant Codebase Rules

Rules and conventions for jonchalant.com.

---

## Status: portfolio placeholder

**The coaching business was retired on 2026-08-19**, and a second pass on
2026-08-20 finished the pivot: Sanity CMS, the blog, and the Kit newsletter
integration are gone from the code entirely (the Sanity project itself stays
live in the cloud, unused, in case its content is ever wanted for reference).

The site is now a **personal creative portfolio** with no CMS and no backend
dependency beyond Sentry. `/`, `/about`, and `/contact` are deliberate
placeholders; `/privacy` is current and accurate. The redesign hasn't
happened yet — planned sections include a **graphic novel** and a **house
dance journey**. `public/models/dance*.glb` are unreferenced today but exist
for that second section.

**What this means for work in this repo right now:**

- Do not reintroduce coaching concepts — ikigai, the four circles, the four
  pillars (Grounding/Energy/Flow/Command), The Foundation, Iki-Guys, presence
  coaching, embodiment training, the blog, or a newsletter opt-in. They are
  retired positioning and retired infrastructure, not dormant features.
- The visual identity was deliberately kept and is still authoritative. Build
  on it rather than around it.
- Content-neutral component primitives were kept even where nothing currently
  renders them (`Hero`, `CTA`, `PageHero`, `Carousel`, `FAQ`, `Bento`,
  `SectionHeader`, `Badge`, `StatsGrid`, `CardGrid`, `KineticMoment`, `TextLink`,
  etc., all still exported from their barrels). Unused does not mean dead —
  they exist for the redesign, and their CSS was deliberately preserved
  alongside them. Don't delete a component or its styles just because no
  current page mounts it; check whether its own source still references the
  classes before touching anything CSS-adjacent.
- Anything that reads as stale coaching positioning, or as Sanity/blog/Kit
  plumbing, is a bug to flag, not a pattern to match.

### What was preserved, and why

| Preserved | Why |
|---|---|
| Typography — Fraunces + DM Sans, `renderHeadline()` and the `{{double-brace}}` italic-anchor convention | Brand identity carries into the portfolio |
| Palette tokens — the Mocha Mousse system, cream backgrounds, espresso text, sage accent | Same |
| BEM-ish kebab-case class naming, the layered `globals.css` cascade | Structural convention, not coaching-specific |
| Layout primitives — `SectionWrapper`, `SectionContent`, `PageTransition`, nav, footer | The page shell survives the content |
| Content-neutral component primitives (`Hero`, `CTA`, `PageHero`, `Carousel`, `FAQ`, `Bento`, `SectionHeader`, `Badge`, `StatsGrid`, `CardGrid`, `KineticMoment`, `TextLink`, `ScrollReveal`/`ScrollFade`/`ScrollStagger`) and their CSS | Kept for the redesign to build with — none are currently mounted by any route |
| Netlify config, deploy pipeline, domain, Sentry | Untouched by the pivot |

### What is gone

Routes `/foundation`, `/programs`, `/lessons`, `/ikigai`, `/audit`,
`/portal/*`, `/login`, `/mfa`, `/admin/*`, `/blog`, `/blog/[slug]`; the
Supabase auth stack; Stripe checkout and webhooks; the Sanity CMS and Studio
(`sanity/`); the Kit newsletter integration and `/api/subscribe`; `lib/types.ts`
and the object-type schema it mirrored; and every coaching-era component
(cards, testimonials, case studies, the old About page sections, email
capture, four pillars, the starter-guide form). See `git log` for
file-level detail on either pass.

---

## Authoritative Sources Hierarchy

CLAUDE.md is a summary. When CLAUDE.md disagrees with the file that actually owns
a truth, the truth wins and CLAUDE.md is corrected.

| Domain | Authoritative source |
|---|---|
| Visual tokens (colors, spacing, surface tiers) | `app/css/variables.css` |
| Typography (font stacks, font tokens) | `design-system/fonts.css`, `design-system/tokens.css` |
| Visual design system (rendered components, tokens, type scale) | `design-system/design-system.html` / `design-system.png` |
| Implementation (what components exist, how they render) | The actual files in the repo |
| Conventions and cross-environment context | CLAUDE.md (this file) |

There is currently no canonical marketing-copy source — the previous one was
coaching copy and was deleted with `coaching-archive/`. The redesign needs to
establish one.

Note: `design-system/design-system.html` and `.png` still render coaching-era
specimens (the pillar grid, coaching voice examples). They remain accurate for
*color, type, shape, and motion* — which is why they were kept — but their
content examples are stale. Treat them as visual references, not copy references.

**Summary-update contract:** when a truth changes, CLAUDE.md is updated in the
same workstream as the change. CLAUDE.md is never permitted to lag the underlying
file.

---

## Stack & Build

Next.js 16.1.1 (App Router) | React 19 | TypeScript 5 | Tailwind v4 (utility-only)

```bash
npm run dev           # localhost:3000
npm run build          # Production build (Turbopack)
npm run lint           # ESLint
```

Config: `reactCompiler: true` (no manual useMemo/useCallback), `turbopack` enabled.

**Lint baseline: 0 violations.** `npm run lint` is clean and must stay clean.

**Environment.** No environment variables are required to build — see
`.env.example`. Optional: `SENTRY_*` (error monitoring), `NEXT_PUBLIC_GA_ID`
(analytics, consent-gated). Server env goes through the zod-validated schema
in `lib/env.ts` — imported once for its validate-on-boot side effect, not for
its (nonexistent) named exports.

---

## Strict Rules

### CSS

**Architecture and cascade**
- **No new CSS files.** 9 system files + 2 page-scoped files
  (`pages-contact`, `pages-forms`) exist. Add styles to the relevant one.
- **BEM-inspired kebab-case naming**: `.section-name`, `.section-name-header`,
  `.section-name-title`.
- **Standard breakpoints only**: 640px (sm), 768px (md), 1024px (lg) — no 480px,
  560px, 960px.

**Style restrictions**
- **No `!important`** — fix specificity/cascade instead. Only exception:
  `@media (prefers-reduced-motion: reduce)` overrides in `interactions.css`.
- **No inline styles** except truly dynamic values (progress widths, transform
  offsets, CSS custom properties set per render).
- **Light mode only** — no dark mode.
- **Always use CSS variables for colors** — never hardcode hex in page-scoped CSS.
- **Tailwind utilities permitted in component JSX**: typography (`text-*`,
  `font-*`, `leading-*`, `tracking-*`), responsive prefixes (`sm:`, `md:`, `lg:`),
  and layout primitives in page route files (`max-w-*`, `mx-auto`, `px-*`, `py-*`,
  `grid`, `gap-*`, `flex`). Anything beyond these belongs in CSS files.
- **OpenGraph image exception**: `app/**/opengraph-image.tsx` files render
  server-side to PNG via `next/og` and may use inline styles + hardcoded hex.
  Nowhere else. (No such file currently exists.)

**Engineering constraints**

Use `overflow: clip` / `overflow-x: clip` (not `overflow: hidden`) on
layout-establishing elements: `html`, `body`, `main`, `section`, `article`,
`.container`, `.section-wrapper` — unless they are intentionally scroll
containers.

`overflow: hidden` establishes a scroll context that silently breaks descendant
`position: sticky`. The page renders, the sticky element doesn't stick, and there
is no error to trace. `overflow: clip` clips visual overflow without establishing
a scroll context. Treat any `overflow: hidden` on those primitives as a bug to fix
on sight unless the element is genuinely a scroll container.

**Dead-code judgment call.** A class or custom property counts as "in use" if
a component's own source still references it — even if that component isn't
currently mounted by any route (see "What was preserved" above). Before
deleting anything CSS-adjacent, check whether it's a false negative: dynamic
class construction (`` `badge-${variant}` ``, `` `section-wrapper-${variant}` ``)
won't show up in a plain string search, and short/generic class names collide
with unrelated substrings (`flex` inside "flexibility", `sidebar` inside
"sidebar-overlay"). Grep for the literal string, then check the component
source directly before concluding something is dead.

### Components
- **No "Section" suffix** on component names (`Hero` not `HeroSection`)
- **Server components by default** — only `'use client'` for interactive state
- **Prefer wrapping over marking sections client.** Use `<ScrollFade>` /
  `<ScrollReveal>` / `<ScrollStagger>` rather than marking a section `'use client'`
  to run an internal `IntersectionObserver`.
- **Import alias `@/` always** — never relative paths from deep files
- **Sections exported from `components/sections/index.ts`** with descriptive aliases
- **Props-driven children.** Reusable components accept data as props and do not
  depend on context or route state. Pages compose them; they do not reach upward.

### Data
- **Shared TypeScript types** live inline in the files that use them, or in a
  page-local module. There is no central `lib/types.ts` — it was deleted when
  nothing imported it (its object types mirrored deleted Sanity schemas).
- **Server env vars go through `lib/env.ts`**

#### Content source: typed lib modules

Editable-but-stable content lives in typed `lib/` modules, not hardcoded in
JSX: navigation links (`lib/navData.ts`), footer structure and contact email
(`lib/footerData.ts`). There is no CMS in this project currently — if the
redesign wants one, that's a fresh decision, not a restoration of Sanity.

**Italic-anchor markup:** page-stable copy strings that contain an italic
anchor word use `{{double-braces}}` around the anchor, interpreted by
`renderHeadline()` (see below). The convention holds for the redesign even
though no `lib/{page}Copy.ts` file exists yet.

---

## Headline rendering convention

Copy strings can contain `{{double-brace}}` markers around italic anchor
words (e.g., `Find the work you were {{meant}} for.`). These markers must be
stripped and the anchor word wrapped in `<em>` (or `<AnchorWord>` for kinetic
headings) before rendering.

**The rule:** any time a string containing this markup is interpolated into
JSX, route it through `renderHeadline()`:

```tsx
// wrong - renders literal braces
<h2 className="...">{content.headline}</h2>

// right
<h2 className="...">{renderHeadline(content.headline)}</h2>
```

For sections built using `<SectionHeader>` or `<KineticHeading>`, the wrapping
happens automatically — those components run `renderHeadline` internally on string
input. For raw `<h1>`/`<h2>` interpolations in page routes or shared components,
the wrap must be explicit.

**Safe-consumer pattern:** components that call `renderHeadline` internally are on
an allowlist; passing a headline string to one of them as any prop is fine. The
current allowlist:

```text
Hero, GenericHero, PageHero, CTA, SectionHeader, KineticHeading
```

The `jonchalant/headline-needs-render` ESLint rule flags any raw headline-like
string used directly in JSX that is not wrapped in `renderHeadline()` and not
passed to a safe-consumer component. It does **not** flag boolean guards
(`{x?.headline && <jsx>}`) or values inside `JSON.stringify()`.

### Maintaining the safe-consumer allowlist

When you add a component that accepts a headline string and calls
`renderHeadline()` internally, add its JSX element name to both:

1. `DEFAULT_SAFE_CONSUMERS` in `eslint-plugin-jonchalant/rules/headline-needs-render.js`
2. The `safeConsumers` list in `eslint.config.mjs` (if overridden there)

---

## Surface Tier System

The dark surface system has **three tiers**, used deliberately to create chromatic
hierarchy on pages with multiple darker sections:

- **`--mocha-deep` (`#6B4F3F`)** — the deepest mocha. **Reserved for the page's
  chromatic climax.** Do not introduce a second `--mocha-deep` section on a page
  that already has one without rebalancing the existing one.
- **`--mocha-mid` (`#8C7264`)** — tertiary warm surface, lighter than `--mocha-deep`
  but visibly darker than cream. For warm-toned sections that should feel distinct
  from the cream majority but subordinate to the page's deepest dark moment.
- **`--bg-tertiary` and below** — cream surface tiers for the bulk of page content.

When introducing a new dark or warm-tinted section, choose the tier that preserves
the page's existing rhythm. If the page has a `--mocha-deep` climax already, new
dark-tinted content uses `--mocha-mid`.

### SectionWrapper Variants

- **`variant="primary"`** — `--bg-primary` (cream)
- **`variant="secondary"`** — `--bg-secondary` (warmer cream)
- **`variant="tertiary"`** — `--bg-tertiary` (deepest cream tier; warm sand accent)
- **`variant="dark"`** — emits `.jc-section--dark`, surface `--mocha-deep` (climax)
- **`variant="dark-mid"`** — emits `.jc-section--dark-mid`, surface `--mocha-mid`

Choose by tier intent, not by current hex value.

**Opacity convention on dark surfaces:**
- Body text on dark-mid surfaces uses opacity `0.88` (not the `0.72` used on
  `--mocha-deep`) to compensate for the lighter background
- Eyebrow text on dark-mid uses `var(--anchor-on-dark)` rather than `--mocha-mousse`

### Italic Anchor Colors

- **Light surface (cream)**: `--mocha-mousse` (`#A47864`) — the signature accent
- **Dark surface (`--mocha-deep` or `--mocha-mid`)**: `--anchor-on-dark` (`#E8C8B0`)

Do not hardcode `#E8C8B0` anywhere. The token exists for a reason.

---

## Kinetic Typography Systems

There are **two distinct kinetic typography systems**. They share no CSS and are
NOT interchangeable.

### `.jc-kinetic` — Static Dramatic Heading Primitive

- Static, dramatic-heading CSS class (in `typography.css`)
- Written directly as JSX: `<p className="jc-kinetic">Phrase with <em>anchor</em>.</p>`
- Used for the *one dramatically scaled type moment per page* — the held-breath
  moment where stillness is the point
- No motion of its own
- Currently used on `app/page.tsx`, the only live page with a kinetic moment

### `KineticHeading` Component — Animated Section Title

- Animated section title with per-word reveal via `.kinetic-heading` /
  `.kinetic-word` / `.anchor-word`
- Auto-handles `{{double-brace}}` interpolation
- Per-word stagger is the right motion language for section titles, NOT for
  held-breath moments

### `KineticMoment` Component — Scroll-Triggered Opacity Fade

> **Constraint (read first).** Do not extend `KineticMoment` to support per-word
> reveal, color animation, or transform-based motion. The component's value is its
> *constraint*. If a future page needs different motion for a kinetic moment, that
> is a design decision worth surfacing before introducing a second variant. The
> default answer is "use `KineticMoment` as-is" until proven otherwise.

Wraps a `.jc-kinetic` block to add standard scroll-triggered opacity fade-in:

```jsx
<KineticMoment>
  <p className="jc-kinetic">Find your <em>medium</em>.</p>
</KineticMoment>
```

**Behavior:**
- Opacity fades 0 → 1 over 1200ms, ease-out
- Triggered at ~70% from viewport bottom (`rootMargin: '0px 0px -30% 0px'`)
- `prefers-reduced-motion: reduce` skips the observer; phrase renders visible
- Generous internal `padding-block` (mobile 7.5rem / sm 10rem / lg 15rem)
- Opacity is the only animated property — no transform, scale, or blur

**Singular opsz 144 per page.** When a page has a kinetic frame, italic anchors
elsewhere use formatting-only italics — no explicit `font-variation-settings`
`opsz` override. The opsz 144 climax is singular.

---

## Page Rhythm Convention

A typical content page is mostly cream. Pages introduce hierarchy through:

1. **One deepest-dark moment** (the chromatic climax)
2. **One dramatic kinetic moment** (the typographic climax) — ideally the same
   gesture, with the kinetic phrase inside or adjacent to the dark section

When implementing changes that affect surface color or section weight, consider
the whole page's rhythm, not just the section being changed. Adding a second dark
moment, or a second kinetic moment, requires deliberate justification — uniform
section weight is the design flatness the system explicitly fights against.

---

## Routes

```text
app/
├── layout.tsx           (Navbar + SiteFooter wrap all pages — no route groups)
├── page.tsx              (PLACEHOLDER — landing)
├── about/page.tsx         (PLACEHOLDER)
├── contact/page.tsx       (mailto, no form)
├── privacy/page.tsx       (current — two honest paragraphs)
├── api/
│   ├── health/            (liveness probe — no upstream to check anymore)
│   └── sentry-example-api/ (Sentry's own verification route)
├── sentry-example-page/    (Sentry's own verification page)
├── error.tsx, global-error.tsx, not-found.tsx
├── robots.ts, sitemap.ts
└── globals.css, css/       (9 system files + 2 page-scoped)
```

There was previously a `(marketing)` route group; it existed to separate
marketing pages from a `(portal)` group. Once the portal was deleted, the
group was the only one left and was flattened into the app root.

There is no `sanity/` directory, no `/blog`, no `admin/`, and no
`middleware.ts`.

---

## Design Tokens

`app/css/variables.css` is authoritative. Most-used tokens:

- `--mocha-mousse: #A47864` — the brand anchor (PANTONE 17-1230)
- `--mocha-deep: #6B4F3F` — chromatic climax (deepest dark)
- `--mocha-mid: #8C7264` — subordinate warm-dark surface
- `--mocha-soft: #D4B8A3` — warm hairline
- `--anchor-on-dark: #E8C8B0` — italic anchor color on dark surfaces
- `--sage-whisper: #8A9A85` — single cool accent, used sparingly
- `--bg-primary: #F4EBE0` (cream), `--bg-secondary: #EFE4D6`, `--bg-tertiary: #E8D9C7`
- `--text-primary: #2A1F1A` (espresso), `--text-secondary: #5C4A3F`, `--text-tertiary: #8A7668`
- `--border-color: #D4B8A3`

Semantic aliases: `--accent-primary` → `var(--mocha-mousse)`; `--accent-hover` →
`var(--mocha-deep)`; `--accent-tertiary` → `var(--sage-whisper)`.

The `--quadrant-*` (ikigai), `--fc-tier-*` (Four Circles), and `--admin-status-*`
token blocks that used to live here — kept through the first retirement pass as
harmless aliases — were deleted in the second-pass CSS audit. If you need
something like them again, that's a fresh design decision, not a restoration.

---

## Component Organization

### Placement Rules
- **Shared primitives** → `components/ui/` (Button, FormField, FormMessage,
  SectionHeader, SectionIntro, FeatureList)
- **Cross-page composite sections** → `components/shared/{name}/` (CTA, FAQ,
  Hero, PageHero, Carousel, KineticMoment, Bento, CopyButton)
- **Page-specific sections** → `components/sections/{page}/` (currently empty —
  no page has bespoke sections; everything renders through shared primitives
  or is a placeholder)
- **Utility components** → `components/utilities/{category}/` (badges, cursor,
  grids)
- Each component gets its own folder with `ComponentName.tsx` + `index.ts`

### Standard Primitives

- **`Button`** (`@/components/ui/Button`) — the standard interactive primitive
- **`SectionHeader`** (`@/components/ui/SectionHeader`) — eyebrow / headline /
  subhead triplets. On the headline safe-consumer allowlist
- **`Bento` / `BentoCell`** (`@/components/shared/bento`) — grid layout primitive

### Global Layout

`CookieConsent`, `MochaSweep`, and `MochaCursor` are mounted in the root
`app/layout.tsx` as global UI; they are not composed by individual pages.
`Navbar` and `SiteFooter` are also mounted directly in the root layout — there
is no separate marketing layout anymore.

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
New card → `cards.css` | New section → `sections.css` | Page-specific →
`pages-*.css` | Utility → `components.css` | Forms → `pages-forms.css`

---

## Design System (`design-system/`)

| File | Purpose |
|---|---|
| `design-system.html` | Live HTML render of the design system (tokens, typography, components). Visual reference only — its content examples are coaching-era |
| `design-system.png` | Static screenshot of the above |
| `tokens.css` | Design token reference (mirrors `app/css/variables.css`) |
| `fonts.css` | Font stack reference |
| `SKILL.md` | Design rules for future work in this system |
| `README.md` | Design system overview |

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/design-tokens.ts` | Design token values shared with a couple of components |
| `lib/schema.ts` | JSON-LD structured data (Person, Organization, FAQ) |
| `lib/env.ts` | Zod-validated environment schema, validate-on-boot side effect only |
| `lib/navData.ts` | `NAV_LINKS`, `MOBILE_LINKS` — consumed by `Navbar.tsx` |
| `lib/footerData.ts` | `FOOTER_NAV`, `FALLBACK_SOCIAL`, `CONTACT_EMAIL` — consumed by `SiteFooter.tsx` |
| `lib/render-headline.tsx` | `renderHeadline()` — `{{anchor}}` → `<em>` |
| `lib/hooks/` | `useScrollAnimation`, `useScrollTrigger` — imported by subpath (`@/lib/hooks/useX`), never through a barrel; there is no `lib/hooks/index.ts` |
| `components/sections/index.ts` | Central export hub for shared sections |

There is no database and no CMS. `lib/types.ts`, `lib/typography.tsx`,
`lib/imageConfig.ts`, `lib/rate-limit.ts`, and 7 of the 9 original hooks were
deleted in the second-pass `lib/` audit — each had zero real importers.

---

## Fonts

- **Fraunces** (`var(--font-headline)`) — serif display/headings. Loaded via a
  Google Fonts `@import` in `globals.css`, **not** `next/font` — `next/font`
  silently strips the WONK axis from the downloaded bytes.
- **DM Sans** (`var(--font-body)`) — body text, via `next/font`.
