# Workstream 4 | Plan

## Project context

Jonchalant — coaching platform helping corporate professionals find purpose via the ikigai framework, embodied through dance-taught presence practice. Brand: Japanese Zen-inspired — burnt indigo, muted moss, warm amber palette evolved into a Mocha Mousse warm system; editorial Fraunces typography; warm and honest, not polished or aspirational; light mode only.

Stack: Next.js / TypeScript frontend, Sanity CMS backend, Tailwind for utilities, custom CSS for section-specific work. Workflow: strategy in claude.ai, implementation in VS Code via Claude Code. CLAUDE.md and copilot-instructions.md propagate context across environments. canonical-copy.md is source of truth for all marketing copy and lives in `design/`.

## What Workstream 4 is

A refactor / cleanup / audit pass on the codebase, schema, and conventions documentation. The goal is to bring the foundation into a settled state before the page-by-page design audits planned for Workstream 5.

**Workstream 4 is not page-design work.** No new sections, no new content, no copy changes. The output is a healthier codebase, a corrected schema, a consolidated CLAUDE.md, and a deprecated copilot-instructions.md.

## Diagnostic findings summary

Two diagnostic passes ran before this plan was scoped. Reports live in `/design/diagnostics/`.

**Schema diagnostic** (`schema-diagnostic-2026-05-09.md`) — 23 document types, 225 fields, 16 marketing pages mapped. Findings clustered as follows:

- *Localized drift, not structural rot.* Document types are reasonably named, singletons are properly enforced, page-to-document mapping is mostly clean.
- *Queried-but-discarded fields.* The dominant pattern. Many pages query `sectionHeader.body`, `hero.microcopy`, optional CTA fields that no current consumer renders. Low-stakes individually, accumulates as noise.
- *Whole-section dead code.* `pageIkigai` is mostly queried-and-discarded; `pageAbout.hero` is queried but not rendered. These tie to pages awaiting design audits in Workstream 5.
- *Active registry drift.* `curriculumWeek` schema file exists and is queried by `lib/sanity.ts` but isn't registered in `sanity/schemas/index.ts`.
- *Payload-field mismatch.* Lesson queries return `videoId` and `duration`; marketing lesson components expect `videoUrl` and `estimatedDuration`. Silent failure category.
- *Hardcoded nav vs. siteConfig.* siteConfig contains a full nav block (wordmark, desktopLinks, rightSideLinks, mobileLinks, mobilePersistentCta, plus auth/404 microcopy). Navbar.tsx is hardcoded. The siteConfig nav block is queried but unused.
- *Naming inconsistency at concept level.* `headline` vs `title` vs `heading` for similar roles; `subhead` vs `body` vs `description` vs `summary` vs `excerpt` with semantic overlap; two parallel lesson models (`lesson` and `courseLesson`) with different field vocabularies.

**CLAUDE.md diagnostic** (`claude-md-diagnostic-2026-05-09.md`) — 7 internal contradictions, 16 obsolete references, 13 coverage gaps, 7 organic-growth artifacts, 14 reference accuracy failures. Findings clustered as follows:

- *The Key Colors section is entirely the legacy palette.* Every token name and hex value is from the prior Muted Moss / Burnt Indigo system, none of which exists in current `variables.css`. Highest-impact correction; lowest-effort fix.
- *Sanity documentation is obsolete.* The schema types named in CLAUDE.md (`homePageContent`, `aboutPage`, etc.) no longer exist; the fetcher naming convention described (`get{ContentType}()`) was superseded by `getPage{Name}()`; copilot-instructions.md's full fetcher list is obsolete.
- *Routes and components named in CLAUDE.md don't exist.* `/dance` route, `RouteAwareLayout` component, Media Kit page, `pageContent.ts`, `jonchalant-positioning.md`, the `baseline/` screenshot directory, `phase-1-change-list.md`. API route count says 9; actual count is 15.
- *Significant component territory undocumented.* `components/ui/` directory (where `Button` lives, used in 20+ files) has zero coverage. `SectionHeader`, `StarterGuideForm`, `Bento`/`BentoCell`, `MochaSweep`, `CookieConsent`, `MochaCursor`, `lib/env.ts`, `lib/footerData.ts`, `useFormSubmission`, `useMultiStep`, the portal `settings/` route — all in active use, none documented.
- *Live correctness conflict.* CLAUDE.md says animation-only sections must stay server components; `Method.tsx` is `'use client'` with its own animation hooks. The rule and the code disagree.
- *Tailwind allowance is ambiguous.* Strict rule reads narrower than examples allow.
- *`tertiary` SectionWrapper variant exists in code and example, undocumented in the variant section.*
- *home-why-works-* CSS classes persist on the renamed `Method` component* — semantic-vs-CSS mismatch confirmed.
- *copilot-instructions.md is the deeper drift source.* Multiple obsolete references in CLAUDE.md trace back to copilot-instructions.md as the "detailed reference." copilot-instructions.md describes pages, components, and fetchers that don't exist.

**Cross-cutting observation.** Most CLAUDE.md drift is downstream of work that already happened (Phase 2 schema migration, Workstream 3 design changes). Earlier workstreams updated the truths — `variables.css`, `sanity/schemas/`, component files — without updating the summary documents that describe them. This is the failure mode Workstream 4 needs to fix and prevent recurrence of.

## Authoritative sources hierarchy

Workstream 4 codifies an explicit hierarchy that the diagnostics surfaced as currently implicit and therefore violated. CLAUDE.md is a *summary*; the truths live elsewhere. When CLAUDE.md and a truth disagree, the truth wins and CLAUDE.md is corrected.

The truths:

| Domain | Authoritative source |
|---|---|
| Visual tokens (colors, spacing, radius) | `app/css/variables.css` |
| Typography | `design-notes/fonts.css`, `design-notes/tokens.css` |
| Visual design system reference | `design-notes/design-system.html`, `design-notes/design-system.png` |
| Marketing copy | `design/canonical-copy.md` |
| Content shape (CMS-editable) | `sanity/schemas/index.ts` and registered schemas |
| Implementation | Actual component and page files |
| Conventions and cross-environment context | CLAUDE.md (summary; corrected when truths change) |

This hierarchy is added to CLAUDE.md in Layer 3 as a near-top section. It establishes a verifiable contract: any future workstream that changes a truth is responsible for updating CLAUDE.md to match, in the same workstream — not as deferred cleanup.

## Scope decisions

Each layer below states what's in scope, what's out, and the reason. Out-of-scope items are deferred to Workstream 5 or to a future workstream as noted.

### Layer 1 — CLAUDE.md correction pass

**Job:** Fix everything actively wrong in CLAUDE.md. Mechanical, low-judgment corrections sourced from the truths.

**In scope:**
- Replace Key Colors section with current Mocha Mousse palette, sourced from `variables.css` (resolves C-1, O-7)
- Update Sanity CMS section with current document types and fetcher names, sourced from schema diagnostic and `lib/sanity.ts` (resolves O-4, O-5)
- Remove or replace references to deleted files: `jonchalant-positioning.md`, `baseline/`, `phase-1-change-list.md`, `pageContent.ts`, `RouteAwareLayout`, Media Kit page (resolves O-1, O-2, O-3, O-11, O-13, O-15)
- Correct API route count and list — 15 routes (resolves O-16)
- Correct home and about section lists to match current `sections/index.ts` (resolves O-9, O-10)
- Clarify Tailwind allowance — explicit list of permitted utility categories, examples reconciled with rule (resolves C-4)
- Document `tertiary` SectionWrapper variant in the Surface Tier section (resolves C-6)
- Resolve C-3 (Animation-only-components rule vs. `Method.tsx`) — soften the rule to acknowledge that section components may be `'use client'` when section-level animation state is unavoidable, with a stated preference for wrapping `ScrollFade`/`ScrollReveal`/`ScrollStagger` where possible. The rule was overstated; `Method.tsx` is a legitimate exception, not a violation
- Resolve C-7 (duplicate `portableTextComponents.tsx` location) — verify which one is canonical and document the single correct path
- Update C-2 hooks parenthetical to mention all hooks accurately

**Out of scope:**
- Reorganization of sections that are merely organic-growth artifacts (deferred to Layer 3)
- Adding undocumented conventions / coverage gaps (deferred to Layer 3)
- Authoritative sources hierarchy section (added in Layer 3)

**Why this order:** Corrections are mechanical and unblock everything downstream. Reorganization on top of wrong content is wasted reorganization.

### Layer 2 — Schema cleanup pass

**Job:** Targeted fixes the schema diagnostic identified as unambiguous bugs or drift. Surgical, not architectural.

**In scope:**
- Resolve `curriculumWeek` registry drift — register it in `sanity/schemas/index.ts` if used, or remove file and query if not. Diagnostic shows it's queried but unregistered, which is incoherent
- Fix lesson payload mismatch — `videoId`/`duration` returned by query vs `videoUrl`/`estimatedDuration` expected by component. Pick one naming, align both ends
- Remove unambiguously dead fields:
  - `pageHome.blogPreviewPerCardCtaLabel`
  - `pageHome.blogPreviewSectionCta`
  - `pageBlog.filterPillsNote` (studio note, no consumer)
  - `pageBlog.postsListNote` (studio note, no consumer)
  - `pageIkigai.quizNote` (studio note, no consumer)
- **Migrate hardcoded Navbar to `lib/navData.ts`.** Mirror the existing `lib/footerData.ts` pattern: typed module export, imported by component. Remove the unused siteConfig nav block (`wordmark`, `desktopLinks`, `rightSideLinks`, `mobileLinks`, `mobilePersistentCta`, `columns`, `accountSection`, `signIn`, `signUp`)
- **Audit remaining unused siteConfig fields against the same principle.** Auth/error/404 microcopy fields (`submitError`, `validation`, `loadingLabel`, `notFoundHeadline`, `notFoundBody`, `notFoundLinks`, `notFoundMicrocopy`) — if not actively consumed, migrate to typed lib modules or remove. siteConfig retains only fields with active CMS-editing benefit (`contactEmail`, `brandLine`, `socialLinks`, `copyright`, `privacyLink`, `successStates`)

**Out of scope (deferred to Workstream 5):**
- `pageIkigai` content (hero, fourCirclesHeader, fourCirclesSet, quizBridge, cta) — queried-but-not-rendered because the page hasn't had its design audit. Pruning now would prefigure the redesign
- `pageAbout.hero` — same reasoning

**Out of scope (deferred to a future workstream):**
- Field-naming consistency cleanup at concept level (`headline` vs `title` vs `heading`, `subhead` vs `body` vs `description`) — large coordinated change, low marginal value
- Two parallel lesson models (`lesson` vs `courseLesson`) consolidation — architectural decision deserving dedicated session

**Design principle established by Layer 2** (added to CLAUDE.md in Layer 3):

> The default for editable-but-stable content is a typed `lib/` module, not Sanity, and not hardcoded JSX. Sanity is reserved for content that genuinely benefits from CMS editing — content that changes frequently, requires non-developer editing, or is part of an active editorial workflow. Stable content (nav, footer, microcopy, error messages) lives in typed lib modules.

### Layer 3 — CLAUDE.md consolidation pass

**Job:** After Layer 1 and Layer 2 land, CLAUDE.md is correct but still has organic-growth shape. This is the reorganization-and-additions pass.

**In scope — structural reorganization:**
- Add **Authoritative Sources Hierarchy** section near the top of CLAUDE.md, stating that CLAUDE.md is a summary and naming the canonical source for each domain
- Merge `## Current positioning` and `## Project Purpose` (resolves A-2)
- Restructure `## Headline rendering convention` to separate user-facing rule from rule-maintenance procedure (resolves A-3)
- Split `## Architecture` into separate sections by topic; the Key Colors sub-section (now corrected in Layer 1) moves to a dedicated tokens section (resolves A-4)
- Move the product fact ("ikigai quiz and Four Circles course are tightly coupled") out of Strict Rules → Positioning & Copy (resolves A-5)
- Promote `KineticMoment` constraint paragraph to higher visibility within its sub-section (resolves A-6)
- Update or remove temporally-anchored framing in `## Design Notes` (resolves A-7)
- Reorganize `## Strict Rules → CSS` to separate cascade rules from style rules from the overflow note (resolves A-1)

**In scope — coverage additions** (resolves G-1 through G-13):
- `components/ui/` directory documentation — placement rules, what goes in `ui/` vs `utilities/` vs `shared/`
- `SectionHeader` and `Button` placement and usage conventions
- `lib/env.ts` access pattern (server-side env access goes through `lib/env.ts`, not `process.env`)
- Page-level `renderHeadline()` usage convention
- Page-level `ScrollFade`/`ScrollReveal`/`ScrollStagger` usage convention
- `StarterGuideForm` documentation
- `Bento`/`BentoCell` layout primitive documentation
- `MochaSweep`, `CookieConsent`, `MochaCursor` global layout components documentation
- `lib/footerData.ts`, `lib/typography.tsx`, `lib/navData.ts` (added in Layer 2) documentation
- `useFormSubmission`, `useMultiStep` hook documentation
- Portal `settings/` route in route map
- The Layer 2 design principle: typed lib modules as default for editable-but-stable content

**In scope — naming decision:**
- `home-why-works-*` CSS classes on the renamed `Method` component (O-6) — keep with documented intent (rationale: classes are stable and renaming touches multiple files), or rename for semantic clarity. Decision recorded in CLAUDE.md once made

**Out of scope:**
- Adding new conventions not surfaced by the diagnostics — Layer 3 captures what already exists in code; new conventions are out of band
- Visual / design content — the design system documents in `design-notes/` are separately authoritative

### Layer 4 — copilot-instructions.md deprecation

**Job:** Eliminate copilot-instructions.md as a separate reference. CLAUDE.md becomes the single source for cross-environment conventions.

**In scope:**
- Read copilot-instructions.md end-to-end
- Identify content not already covered by Layer 1+3 corrections to CLAUDE.md
- Migrate any genuinely useful content into CLAUDE.md
- Delete copilot-instructions.md
- Remove the "see copilot-instructions.md" preamble from CLAUDE.md
- Verify no other repo files reference copilot-instructions.md; if any do, update them

**Why deprecate rather than audit-and-fix:**
- copilot-instructions.md is the deeper drift source per the diagnostic — auditing produces the same fixes Layer 1+3 already produce, plus more
- Two reference docs is one too many; the diagnostic shows CLAUDE.md inherits credibility from a doc that's wrong
- The user has explicitly stated "less references the better"

**Out of scope:**
- Keeping copilot-instructions.md as a separate doc — explicitly rejected

### Layer 5 — Code health

**Job:** Mechanical cleanup. Independent of all other layers.

**In scope:**
- Resolve all pre-existing lint violations (baseline: 1 after Layer 5 P5 — only `.migration/inspect.cjs` `no-require-imports` remains, accepted; was 152 at Workstream 4 start)
- B-ii migration: refactor allowlisted safe-consumer components to accept ReactNode instead of string, eliminate the ESLint allowlist
- ESLint rule auto-fixer (`--fix` support to wrap violations in `renderHeadline()`)
- Remove `--bg-dark` legacy token from `variables.css` if confirmed stranded, or document its retention reason if kept
- Mobile nav close X button hover/focus state — verify intended interaction state vs stuck visual

**Subdivisible:** Each item is independently scopable. The lint cleanup is split into 5 sub-prompts (P1–P5) by violation category per `design/diagnostics/lint-inventory-2026-05-09.md`.

**Out of scope:**
- Any lint rule changes that would mask rather than fix violations
- Refactors that exceed the scope of resolving the named violation

## Dependency graph

```
Layer 1 (CLAUDE.md correction)  ──┐
                                  ├──> Layer 3 (CLAUDE.md consolidation)
Layer 2 (Schema cleanup)  ────────┘                 │
                                                    │
Layer 4 (copilot-instructions deprecation)  ────────┤
                                                    ▼
                                        (Layer 4 content folds into Layer 3)

Layer 5 (Code health)  ──> independent, parallel with all of the above
```

**Parallelization opportunities:**
- Layers 1, 2, 4, and 5 can all begin in parallel as separate Claude Code sessions
- Layer 3 depends on Layers 1, 2, and 4 completing
- Layer 5 has no dependencies and can run alongside everything else

**Sequencing within layers:**
- Layer 1: single session (or split by section type if oversized)
- Layer 2: ordered as listed — registry drift → payload mismatch → dead field removal → Navbar migration → siteConfig audit
- Layer 3: structural reorganization first, then coverage additions; doing additions first invites duplication that reorganization then has to undo
- Layer 4: single session
- Layer 5: lint cleanup first (largest, most mechanical), then B-ii migration, then auto-fixer, then small items

## Per-item specifications

The plan above defines scope. Implementation prompts will be drafted per-layer in subsequent claude.ai sessions, following the Workstream 3 prompt convention: terminal state explicit, files touched named, verification steps spelled out, lint count delta required to be 0, negative-space callouts for what NOT to do.

Each prompt expected to live in its own session and produce a single coherent change. Combining prompts across layers is allowed only when the work shares scope; combining unrelated items has produced drift in past workstreams.

## Conventions to capture

Workstream 4 establishes or formalizes the following conventions, all of which land in CLAUDE.md during Layer 3:

1. **Authoritative sources hierarchy.** CLAUDE.md is a summary; the truths live in `variables.css`, `design-notes/`, `canonical-copy.md`, the Sanity schema, and the actual codebase. When CLAUDE.md and a truth disagree, the truth wins and CLAUDE.md is corrected.

2. **The summary-update contract.** Any future workstream that changes a truth is responsible for updating CLAUDE.md to match, in the same workstream. CLAUDE.md drift is now a regression signal, not deferred cleanup.

3. **The typed-lib-module default.** Editable-but-stable content lives in typed `lib/` modules (`lib/footerData.ts`, `lib/navData.ts`, etc.). Sanity is reserved for content with active CMS-editing benefit. Hardcoded JSX is the last resort, used only with explicit justification.

4. **Single reference document.** CLAUDE.md is the only conventions document. copilot-instructions.md is deprecated. Future cross-environment context goes in CLAUDE.md, full stop.

These conventions also apply to Workstream 5's page audits when those begin.

## What's deferred to Workstream 5

- Page-by-page design audits for About, Foundation, Programs, Ikigai, Dance, Lessons, Blog, Contact, Privacy
- `pageIkigai` and `pageAbout.hero` schema cleanup — tied to page redesigns
- Item 2 (kinetic typography moment) work on pages other than Home
- Mobile nav "Start Here" treatment — italic Fraunces vs. anchor-word reservation conflict

## What's deferred to a future workstream (not Workstream 5)

- Field-naming consistency cleanup at concept level (`headline` vs `title` vs `heading`, `subhead` vs `body` vs `description`)
- Two parallel lesson models (`lesson` vs `courseLesson`) consolidation
- Cowork orchestration setup — to be scoped against Workstream 4's output, not before it
- Course detail pages — Lessons references course documents that may not all exist
- `/lessons/baby-steps/...` redirect from the Workstream 3 rename

## Working pattern (continues from Workstream 3)

- **Verification before fix.** Both diagnostics already ran; their findings are the verification. Per-prompt verification still applies for any item the diagnostics didn't explicitly cover
- **One Claude Code prompt at a time.** Combining items into a single prompt is acceptable when items share scope; combining unrelated items produces drift
- **Diagnostic-only prompts when uncertain.** The Workstream 4 diagnostics are the model. Future workstreams should use the same pattern
- **Specificity discipline in prompts.** Naming what NOT to do is as important as naming what TO do
- **Lint count delta as regression signal.** Pre-existing baseline at Workstream 4 start was 152; current baseline is 1 after Layer 5 P5 (the lone remaining violation is `.migration/inspect.cjs` `no-require-imports`, accepted as deliberate per the lint inventory's config-vs-conversion judgment). Layer 5 is complete; every other layer must verify delta is 0 (no new violations introduced)
- **Visual judgment is the user's.** Claude Code can verify code structure, lint, and build. It cannot reliably verify visual rendering
- **Component-vs-inline question.** When introducing reusable patterns, prefer extracting a small component or typed lib module now over inlining-and-extracting-on-second-use

## Conventions from earlier workstreams (still active)

All Workstream 3 conventions remain in force: surface tier system, SectionWrapper variants, italic anchor color tokens, parallel kinetic typography systems, KineticMoment constraint, page rhythm convention. Headline rendering, overflow handling, component-as-default-handler pattern, mobile nav layering. These are codified in CLAUDE.md (with Layer 1 corrections) and Workstream 4 does not alter them.

## Brand and design principles

Voice in two registers — direct/honest for naming problems, warm/present for acknowledging hard things and welcoming the reader.

Banned words: unlock, transform, journey, empowered, authentic self, limiting beliefs, inner game, holistic, alignment (in personal-development sense), level up, breakthrough, mindset shift, self-mastery, soul work.

Stylistic conventions:
- One italic anchor per headline, wrapped in `{{double-braces}}`
- "ikigai" lowercase in body, "Ikigai" capitalized when product name
- "The Foundation" always title-cased (product name)
- Em-dashes are em-dashes (—), never two hyphens

Design philosophy:
- Warm and honest > polished and aspirational
- Borrow principles from reference designs, not styles wholesale
- One dramatic type moment per page (Fraunces opsz 144, italic anchor) — used sparingly, with generous whitespace earning the moment

## Handoff to Claude Code

This plan document is the input. Each layer should open as its own claude.ai session for prompt drafting (following the Workstream 3 prompt convention), then dispatch to Claude Code for execution. The plan is structured so that any layer can be picked up cold without re-reading the full diagnostic reports — but the diagnostics remain available in `/design/diagnostics/` if a prompt-drafting session needs deeper detail than this plan summarizes.

After all five layers complete, the next thread opens Workstream 5 — beginning with About page design audit.
