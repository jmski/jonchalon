# CLAUDE.md — Jonchalant Codebase Rules

Rules and conventions for jonchalant.com.

---

## Status: mid-transition

**The coaching business was retired on 2026-08-19.** Everything specific to it —
the ikigai funnel, The Foundation, the programs ladder, the client portal, the
podcast, the audit quiz — was removed from active code. Retired planning
documents and content live in `coaching-archive/`, which is **reference only**
and must never be imported by application code.

The site is being rebuilt as a **personal creative portfolio**. That redesign has
not happened yet. `/`, `/about`, and `/contact` are deliberate placeholders.

**What this means for work in this repo right now:**

- Do not reintroduce coaching concepts — ikigai, the four circles, the four
  pillars (Grounding/Energy/Flow/Command), The Foundation, Iki-Guys, presence
  coaching, embodiment training. They are retired positioning, not dormant
  features.
- The visual identity was deliberately kept and is still authoritative. Build on
  it rather than around it.
- Content-neutral primitives were kept even where nothing currently renders
  them. Unused does not mean dead — they exist for the redesign.
- Anything that reads as stale coaching positioning is a bug to flag, not a
  pattern to match.

### What was preserved, and why

| Preserved | Why |
|---|---|
| Typography — Fraunces + DM Sans, `renderHeadline()` and the `{{double-brace}}` italic-anchor convention | Brand identity carries into the portfolio |
| Palette tokens — the Mocha Mousse system, cream backgrounds, espresso text, sage accent | Same |
| BEM-ish kebab-case class naming, the layered `globals.css` cascade | Structural convention, not coaching-specific |
| Layout primitives — `SectionWrapper`, `SectionContent`, `PageTransition`, nav, footer | The page shell survives the content |
| The blog — `/blog`, `/blog/[slug]`, the `blogPost` schema | Repurposable as a personal journal |
| Netlify config, deploy pipeline, domain | Untouched by the retirement |

### What is gone

Routes `/foundation`, `/programs`, `/lessons`, `/ikigai`, `/audit`, `/portal/*`,
`/login`, `/mfa`, `/admin/*`; the Supabase auth stack; Stripe checkout and
webhooks; Resend enrollment mail; the AI portal tools; every coaching component;
and 24 Sanity document types. See `coaching-archive/_README.md` for the full
inventory and `git log` on the retirement commits for file-level detail.

---

## Authoritative Sources Hierarchy

CLAUDE.md is a summary. When CLAUDE.md disagrees with the file that actually owns
a truth, the truth wins and CLAUDE.md is corrected.

| Domain | Authoritative source |
|---|---|
| Visual tokens (colors, spacing, surface tiers) | `app/css/variables.css` |
| Typography (font stacks, font tokens) | `design-system/fonts.css`, `design-system/tokens.css` |
| Visual design system (rendered components, tokens, type scale) | `design-system/design-system.html` / `design-system.png` |
| Content shape (Sanity schemas, document types, fields) | `sanity/schemas/index.ts` and the schema files it registers |
| Implementation (what components exist, how they render, what fetchers return) | The actual files in the repo |
| Conventions and cross-environment context | CLAUDE.md (this file) |

Marketing copy previously had an authoritative source, `design-system/canonical-copy.md`.
It was coaching copy and now lives in `coaching-archive/design-system/`. **There is
currently no canonical copy source.** The redesign needs to establish one.

Note: `design-system/design-system.html` and `.png` still render coaching-era
specimens (the pillar grid, coaching voice examples). They remain accurate for
*color, type, shape, and motion* — which is why they were kept — but their
content examples are stale. Treat them as visual references, not copy references.

**Summary-update contract:** when a truth changes, CLAUDE.md is updated in the
same workstream as the change. CLAUDE.md is never permitted to lag the underlying
file.

---

## Stack & Build

Next.js 16.1.1 (App Router) | React 19 | TypeScript 5 | Tailwind v4 (utility-only) | Sanity CMS

```bash
npm run dev           # localhost:3000
npm run build         # Production build (Turbopack)
npm run lint          # ESLint
npm run sanity:dev    # Sanity Studio dev
npm run sanity:deploy # Deploy Sanity Studio
```

Config: `reactCompiler: true` (no manual useMemo/useCallback), `turbopack` enabled.

**Lint baseline: 0 violations.** `npm run lint` is clean and must stay clean. The
previous baseline of 7 accepted violations is obsolete — six lived in React
clients deleted with the portal (`IkigaiClient`, `MfaClient`, `SettingsClient`,
`TonalityClient`, `PresenceCoach`) and the seventh was a `.migration/` script no
longer present. Any violation now is new and belongs to whoever introduced it.

**Environment.** Only two variables are required to build:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
```

Optional: `SANITY_API_TOKEN`, `KIT_API_KEY` + `KIT_FORM_ID` (newsletter),
`SENTRY_*`, `NEXT_PUBLIC_GA_ID`. Server env goes through the zod-validated `env`
export in `lib/env.ts` — never `process.env` directly.

The Supabase, Stripe, Resend, and Anthropic variables are gone along with the
services that used them.

---

## Strict Rules

### CSS

**Architecture and cascade**
- **No new CSS files.** 12 files exist (9 system + 3 page-scoped: `pages-blog`,
  `pages-contact`, `pages-forms`). Add styles to the relevant one.
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
- **Sanity fallback pattern**: `try { fetch } catch { use fallback }`
- **Shared TypeScript types** live in `lib/types.ts` — import from there
- **Server env vars go through `lib/env.ts`**

#### Content source: typed lib modules vs Sanity

Editable-but-stable content lives in typed `lib/` modules, not Sanity, and not
hardcoded in JSX. Sanity is reserved for content with active CMS-editing benefit —
content that changes frequently or is part of an editorial workflow (blog posts,
page hero copy). Stable cross-page content — navigation links, footer structure,
microcopy, fallback strings — lives in typed `lib/` modules (`lib/navData.ts`,
`lib/footerData.ts`) and is imported directly by consumers. The default when
adding new content is the typed module; promoting content to Sanity requires a
real editing-workflow justification.

**Italic-anchor markup in `lib/{page}Copy.ts`:** page-stable copy strings that
contain an italic anchor word use `{{double-braces}}` around the anchor.
`renderHeadline()` interprets the markup and renders the anchor as `<em>` with the
correct surface-aware color token. No such file currently exists — `lib/foundationCopy.ts`
and `lib/programsCopy.ts` were retired with their pages — but the convention holds
for the redesign.

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
happens automatically — those components run `renderHeadline` internally on string
input. For raw `<h1>`/`<h2>` interpolations in page routes or shared components,
the wrap must be explicit.

**Safe-consumer pattern:** components that call `renderHeadline` internally are on
an allowlist; passing `.headline` to one of them as any prop is fine. The current
allowlist, pruned during the retirement:

```text
Hero, GenericHero, PageHero, CTA, SectionHeader, KineticHeading, BlogOptIn
```

The `jonchalant/headline-needs-render` ESLint rule flags any `.headline` member
expression used directly in JSX that is not wrapped in `renderHeadline()` and not
passed to a safe-consumer component. It does **not** flag boolean guards
(`{x?.headline && <jsx>}`) or values inside `JSON.stringify()`.

### Maintaining the safe-consumer allowlist

When you add a component that accepts a headline string and calls
`renderHeadline()` internally, add its JSX element name to both:

1. `DEFAULT_SAFE_CONSUMERS` in `eslint-plugin-jonchalant/rules/headline-needs-render.js`
2. The `safeConsumers` list in `eslint.config.mjs` (if overridden there)

The allowlist still contains names of deleted components. That is harmless — an
allowlist entry for a nonexistent element never matches — but prune them when
next editing the rule.

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

The legacy `--bg-dark` (`#0a0a0a`) token exists in `variables.css` but is not used
by any current section and should not be introduced without an explicit design
decision.

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

## Route Groups

```text
app/
├── (marketing)/    ← Navbar + Footer layout (public pages)
│   ├── layout.tsx
│   ├── page.tsx      (PLACEHOLDER — "Under redesign")
│   ├── about/        (PLACEHOLDER)
│   ├── contact/      (PLACEHOLDER — mailto, no form)
│   ├── privacy/
│   └── blog/, blog/[slug]/
├── api/            ← 3 routes: health, subscribe, sentry-example-api
├── layout.tsx, not-found.tsx, global-error.tsx, robots.ts, sitemap.ts
└── sentry-example-page/
```

There is no `(portal)` route group, no `admin/`, and no `middleware.ts` — all
retired with the client area.

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
| `utilities.css` | Spacing, responsive breakpoints, placeholder-page styles |
| `interactions.css` | Hover states, transitions, animations |

### 3 Page-Scoped CSS Files

`pages-blog.css` | `pages-contact.css` | `pages-forms.css`

The system files still contain rules for deleted coaching sections. That dead CSS
was left in place deliberately — surgically unpicking it risks breaking preserved
primitives for no runtime benefit, and the redesign will rewrite these files
anyway. Do not treat an unused selector here as a live pattern.

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

`variables.css` still defines `--quadrant-*` (ikigai) and `--fc-tier-*` (Four
Circles) token blocks. Nothing consumes them. They were left rather than pruned
because they are pure aliases onto preserved palette tokens and carry no risk;
prune them when next editing the file.

---

## Component Organization

### Placement Rules
- **Shared primitives** → `components/ui/` (Button, FormField, FormMessage,
  SectionHeader, SectionIntro, FeatureList)
- **Cross-page composite sections** → `components/shared/{name}/`
- **Page-specific sections** → `components/sections/{page}/`
- **Utility components** → `components/utilities/{category}/`
- Each component gets its own folder with `ComponentName.tsx` + `index.ts`

### Standard Primitives

- **`Button`** (`@/components/ui/Button`) — the standard interactive primitive
- **`SectionHeader`** (`@/components/ui/SectionHeader`) — eyebrow / headline /
  subhead triplets. On the headline safe-consumer allowlist
- **`Bento` / `BentoCell`** (`@/components/shared/bento`) — grid layout primitive

### Global Layout

`CookieConsent`, `MochaSweep`, and `MochaCursor` are mounted in the root
`app/layout.tsx` as global UI; they are not composed by individual pages.

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

`canonical-copy.md` moved to `coaching-archive/design-system/`.

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/sanity.ts` | Sanity client + the remaining `get*()` fetchers |
| `lib/types.ts` | Shared TypeScript interfaces |
| `lib/schema.ts` | JSON-LD structured data |
| `lib/env.ts` | Zod-validated typed access to server environment variables |
| `lib/navData.ts` | `NAV_LINKS`, `MOBILE_LINKS` — consumed by `Navbar.tsx` |
| `lib/footerData.ts` | `FOOTER_NAV`, `FALLBACK_SOCIAL` — consumed by `SiteFooter.tsx` |
| `lib/render-headline.tsx` | `renderHeadline()` — `{{anchor}}` → `<em>` |
| `lib/typography.tsx` | `withAnchorWords()` presentational helper |
| `lib/hooks/` | 9 custom hooks |
| `components/sections/index.ts` | Central export hub for sections |

There is no database. `lib/portal-progress.ts`, `lib/ikigai-results.ts`,
`lib/auth-context.tsx`, and `utils/supabase/` were removed with the portal.

---

## Sanity CMS

Schemas live in `sanity/schemas/`, registered in `sanity/schemas/index.ts`:

- **Page singletons** (`documents/pages/`): `pageBlog`
- **Shared singletons** (`documents/shared/`): `siteConfig`, `newsletterCapture`
- **Content list documents**: `blogPost`
- **Object types** (`objects/`): `cta`, `link`, `hero`, `sectionHeader`,
  `ctaBlock`, `kineticMoment`, `faqItem`

Fetchers live in `lib/sanity.ts`: `getPageBlog()`, `getSiteConfig()`,
`getNewsletterCapture()`, `getRecentBlogPosts()`.

**Studio-loader rule:** every `listItem` in `sanity/structure.ts` must reference a
type that still exists in `schemas/index.ts`. A stale reference there is what makes
Studio throw "schema type not found" on load. This bit during the retirement and
will bite again.

**Dataset state:** the schemas are deleted but the *documents* may still be in the
production dataset — invisible in Studio, but present. `coaching-archive/sanity/`
holds a dry-run-by-default script and instructions to remove them. Check whether
it has been run before assuming the dataset is clean.

The blog content model is unfinished. `blogPost.category` was dropped without a
replacement taxonomy; existing documents carry orphan values that are ignored.
This is deferred to the redesign, not an oversight.

---

## Fonts

- **Fraunces** (`var(--font-headline)`) — serif display/headings. Loaded via a
  Google Fonts `@import` in `globals.css`, **not** `next/font` — `next/font`
  silently strips the WONK axis from the downloaded bytes.
- **DM Sans** (`var(--font-body)`) — body text, via `next/font`.
