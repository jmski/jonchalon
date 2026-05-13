# Workstream 4 → Workstream 5 | Handoff

## Project context

Jonchalant — coaching platform helping corporate professionals find purpose via the ikigai framework, embodied through dance-taught presence practice. Brand: Japanese Zen-inspired — burnt indigo, muted moss, warm amber palette evolved into a Mocha Mousse warm system; editorial Fraunces typography; warm and honest, not polished or aspirational; light mode only.

Stack: Next.js / TypeScript frontend, Sanity CMS backend, Tailwind for utilities, custom CSS for section-specific work. Workflow: strategy in claude.ai, implementation in VS Code via Claude Code. CLAUDE.md is the single source for cross-environment conventions (copilot-instructions.md was deprecated in Workstream 4 Layer 4). canonical-copy.md is source of truth for all marketing copy and lives in `design/`.

## Workstream 4 — closed

Workstream 4 is complete. All five layers landed, plus the closing verification pass on Layer 3.

**Diagnostic-first approach validated.** Two diagnostic passes (schema, CLAUDE.md) ran before scoping. A third (lint inventory) ran before drafting Layer 5 cleanup prompts. A fourth (copilot-instructions.md audit) ran before drafting Layer 4 migration. Every diagnostic surfaced something that would have made the next step produce drift if skipped — copilot-instructions.md being heavier than expected, the schema being lighter than expected, lint violations clustering cleanly into 5 prompt-sized buckets. The pattern was non-negotiable throughout the workstream and earned its keep at every step.

**Layer-by-layer outcomes:**

- ✅ Layer 1 — CLAUDE.md correction. 14 corrections applied: Key Colors replaced with Mocha Mousse palette, Sanity section rewritten, dead-file references removed, API count corrected, hooks parenthetical expanded, animation rule softened, Tailwind allowance reconciled, `tertiary` SectionWrapper variant documented, authoritative-sources preamble added.

- ✅ Layer 2 — Schema cleanup. `curriculumWeek` registry drift resolved, lesson payload mismatch fixed (`videoId`/`duration` aligned end-to-end), 5 dead Sanity fields removed, Navbar migrated from hardcoded to `lib/navData.ts`, siteConfig slimmed from ~22 fields to 6 actively-consumed fields.

- ✅ Layer 3 — CLAUDE.md consolidation. Four sub-prompts: 3A (8 structural reorganization items), 3B (14 coverage additions), 3C (home-why-works-* documented-intent note, Option A), 3D (read-only verification, no fix-up needed). Final document is structurally coherent, all Workstream 3 conventions preserved, all references resolve.

- ✅ Layer 4 — copilot-instructions.md deprecation. Audit classified 67 items: 26 already in CLAUDE.md, 33 obsolete (49% rot rate), 1 novel-and-correct (Component-First Design / Props-driven children), 7 judgment calls (all discarded). File deleted; CLAUDE.md is now the single source.

- ✅ Layer 5 — Code health. Lint baseline 152 → 1 across five prompts. P1 mechanical sweep (152 → 140), P2 unused-vars (140 → 121), P3 `no-explicit-any` in Sanity/scripts (121 → 96), P4 `no-explicit-any` in app/components (96 → 22), P5 React hooks judgment-heavy (22 → 1). Zero `any` reintroduced, zero `eslint-disable` masking, zero `@ts-expect-error` suppressions. P5 surfaced 3 latent bugs, restructured 17 misuse patterns per React's "you might not need an effect" guidance, applied 1 documented suppression.

**The remaining lint baseline of 1 is correct, not a loose end.** The single violation is `@typescript-eslint/no-require-imports` in `.migration/inspect.cjs`, a CJS migration tool where `require()` is appropriate. Two reasonable fixes: exclude `.cjs` files from the rule via ESLint config, or leave the violation as documented deliberate. Either is fine; neither is cleanup work. The Workstream 5 baseline is 1, not 0.

## What Workstream 5 is

The page-by-page design audit pass. The remaining marketing pages need the same kind of design conversation Home received in Workstream 3 — chromatic contrast moments, type scale decisions, kinetic moment placement, surface tier rebalancing.

**Pages awaiting design audit:**
- About
- Foundation
- Programs
- Ikigai
- Dance
- Lessons (marketing routes, not portal)
- Blog (index and post detail)
- Contact
- Privacy

The page audits don't need to happen in any particular order, though some have natural pairings (Foundation + Programs are both course-product pages; About + Ikigai both establish narrative).

**Workstream 5 is not refactor work.** Workstream 4 settled the codebase. Workstream 5 is creative — choosing kinetic moments, picking dramatic type scales, deciding chromatic contrast strategies per page. Implementation prompts to Claude Code follow the strategy work, the same way Workstream 3 worked.

## What's also unblocked but not Workstream 5 proper

Four Layer 5 tail items remained when Workstream 4 closed. None gate Workstream 5; all are minor enough to handle ad-hoc:

- **B-ii migration** — refactor the ~12 allowlisted safe-consumer components to accept ReactNode instead of string, eliminating the ESLint allowlist. Estimated 1-2 days. TODO comment lives in `eslint-plugin-jonchalant/rules/headline-needs-render.js`.
- **ESLint rule auto-fixer** — `--fix` support to wrap violations in `renderHeadline()`. Estimated 2-4 hours. TODO in same file.
- **`--bg-dark` legacy token decision** — keep or remove from `variables.css`. No section currently uses it.
- **Mobile nav close X button** — verify whether the persistent visual state on hover/focus is intended or stuck.

These can be picked up between page audits as palate cleansers, or batched into a single small workstream later.

**Also still unblocked:**
- The schema items deferred from Workstream 4 to a future workstream: field-naming consistency cleanup at concept level (`headline` vs `title` vs `heading`), two parallel lesson models (`lesson` vs `courseLesson`) consolidation. Both are larger architectural decisions, not page-design work.

## Suggested entry sequence for Workstream 5

The Workstream 4 pattern was: diagnostic-first, then scope. The Workstream 5 pattern should be different — design audits don't have a single diagnostic shape. Each page is its own conversation.

**Suggested approach for the next thread:**

1. Open the next thread fresh — don't continue this conversation.
2. Pick a starting page. About is a reasonable first candidate (smaller scope than Foundation/Programs, more narrative than Privacy/Contact, similar in spirit to the Home work that established the design language).
3. The page audit conversation has a recognizable shape from Workstream 3:
   - Read the current page (codebase + screenshots)
   - Identify the design problem (where does it feel flat, what's missing rhythm, where's the kinetic moment)
   - Decide: chromatic contrast strategy, dramatic type moment, surface tier balance
   - Produce a sequenced list of changes, ordered by risk and impact
   - Hand off to Claude Code for implementation
4. After implementation, visual verification at desktop and mobile.
5. Close the page, move to the next.

Each page audit is its own claude.ai session. Don't try to scope multiple pages in one session — each page deserves focused attention, and the design language for each may surface its own conventions.

## What Workstream 4 changed about the working environment

A few things worth knowing as Workstream 5 begins:

**CLAUDE.md is now reliable.** Pre-Workstream-4, CLAUDE.md drift was an unacknowledged risk — Claude Code sessions could load it and silently follow obsolete conventions. Post-Workstream-4, CLAUDE.md is verified accurate, structurally coherent, and includes the Authoritative Sources Hierarchy that names the canonical truth for each domain. When CLAUDE.md and a truth (variables.css, canonical-copy.md, the schema) disagree, the truth wins and CLAUDE.md gets corrected — this is now an explicit contract.

**The summary-update contract.** Any workstream that changes a truth is responsible for updating CLAUDE.md to match, in the same workstream. This prevents the drift that Workstream 4 had to clean up. Page audits in Workstream 5 will likely surface new conventions (page-specific kinetic moments, contrast strategies, etc.) — these need to land in CLAUDE.md as they're established, not later.

**The typed-lib-module default.** Editable-but-stable content lives in typed `lib/` modules (`lib/navData.ts`, `lib/footerData.ts`), not Sanity, and not hardcoded JSX. Sanity is reserved for content with active CMS-editing benefit. Page audits should respect this — when introducing new content, ask whether it actually benefits from CMS editing before reaching for a Sanity field.

**Type safety is meaningful.** Pre-Workstream-4, `any` and `eslint-disable` were sprinkled throughout the codebase, hiding real shape mismatches. Post-Workstream-4, the type system is load-bearing. Page audit implementations will fail loudly if they introduce shape mismatches — treat that as a feature, not friction.

**copilot-instructions.md is gone.** Don't reference it. Don't recreate it. CLAUDE.md is the single source.

## Conventions established in Workstream 4 (now codified in CLAUDE.md)

- **Authoritative Sources Hierarchy.** CLAUDE.md is a summary; truths live in `variables.css` (visual tokens), `design-notes/fonts.css` and `design-notes/tokens.css` (typography), `design-notes/design-system.html` (visual reference), `canonical-copy.md` (marketing copy), `sanity/schemas/index.ts` (content shape), actual code (implementation).

- **Summary-update contract.** When a truth changes, CLAUDE.md is updated in the same workstream. Drift is now a regression signal, not deferred cleanup.

- **Typed-lib-module default.** Editable-but-stable content goes into typed `lib/` modules. Sanity is reserved for content with active CMS-editing benefit (frequent change, non-developer editing, editorial workflow). Hardcoded JSX is a last resort.

- **Single reference document.** CLAUDE.md is the only conventions document. copilot-instructions.md is deprecated.

- **Documented class-name retention.** When a component is renamed but its CSS class names retain the prior prefix to avoid coordinated rename across CSS and JSX, this is documented intent. Future similar mismatches follow the same calculus: rename-cost vs. semantic-clarity benefit.

These also apply to Workstream 5's page audits.

## Conventions from Workstream 3 (still active, codified in corrected CLAUDE.md)

All Workstream 3 conventions remain in force:

- **Surface tier system.** Three dark tiers: `--mocha-deep` (page climax, one per page), `--mocha-mid` (subordinate warm-dark), `--bg-tertiary` and below (cream majority). Choose by tier intent, not by current value.

- **SectionWrapper variants.** `primary`, `secondary`, `tertiary`, `dark`, `dark-mid`. Content-styling classes (`.jc-section--dark`, `.jc-section--dark-mid`) are canonical.

- **Italic anchor color tokens.** `--mocha-mousse` on light surfaces, `--anchor-on-dark` on dark surfaces. Never hardcode `#E8C8B0`.

- **Two parallel kinetic typography systems.** `.jc-kinetic` (static dramatic-heading primitive, written as JSX) vs. `KineticHeading` (animated section title with per-word reveal). Not interchangeable. Use `.jc-kinetic` directly for held-breath kinetic moments.

- **`KineticMoment` component.** Wrapper that adds opacity-only scroll-triggered fade-in to a `.jc-kinetic` block. The constraint is its value — don't extend it.

- **Page rhythm convention.** One deepest-dark moment per page, one dramatic kinetic moment per page, ideally as the same gesture.

- **Headline rendering.** Any `.headline` field interpolated into JSX must go through `renderHeadline()` OR be passed as a prop to an allowlisted safe-consumer component. The page-level convention also applies — `renderHeadline()` is called directly in route files when raw `<h1>`/`<h2>` are interpolated, not only inside components.

- **Overflow.** `overflow-x: clip` (not `hidden`) and `overflow: clip` (not `hidden`) on layout-establishing elements. The `hidden` value silently produces implicit `overflow-y: auto`, breaking `position: sticky` for descendants.

- **Mobile nav layering.** Navbar is `position: sticky; top: 0; z-index: 100`. Mobile drawer is `position: fixed; top: var(--nav-height); z-index: 90`. CTA bar inside drawer is `position: sticky; bottom: 0` with safe-area-inset support.

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
- Design flatness comes from uniform section weight + lack of chromatic contrast — fixes introduce hierarchy, not decoration
- One dramatic type moment per page (Fraunces opsz 144, italic anchor) — used sparingly, with generous whitespace earning the moment

## Working pattern that has been productive

- **Verification before fix.** Always verify current state before scoping work. The diagnostic-first discipline that defined Workstream 4 should continue. Even page audits benefit from reading the current page carefully before deciding what to change.

- **One Claude Code prompt at a time.** Combining items into a single prompt has produced cleaner results when items share scope. Combining items that don't share scope produces drift.

- **Diagnostic-only prompts when uncertain.** Pure read-only passes that report current state without changing anything. Used four times in Workstream 4. Saved meaningful rework downstream every time.

- **Specificity discipline in prompts.** Naming what NOT to do is as important as naming what TO do. Explicit negative space prevents Claude Code drift.

- **Lint count delta as a regression signal.** Workstream 5 baseline is 1 (the deliberate `.migration/inspect.cjs` violation), not 152. Every Claude Code prompt should verify the count is unchanged. Delta of 0 against the 1-baseline = no new violations introduced.

- **Visual judgment is yours.** Claude Code can verify code structure, lint, and build. It cannot reliably verify "does this look right at 1280px in the actual browser." That step is yours, post-Claude-Code.

- **The component-vs-inline question.** When introducing reusable patterns, prefer extracting a small component or typed lib module now over inlining-and-extracting-on-second-use.

- **Per-prompt verification of diagnostic claims.** Diagnostics are inputs, not gospel. The CLAUDE.md diagnostic claimed a duplicate `portableTextComponents.tsx` that didn't exist; per-prompt verification caught it. Trust diagnostics enough to scope against, not enough to skip verification.

## What I want from the next conversation

The first page audit conversation. Goal: produce an implementation-ready plan for one page (likely About), executable by Claude Code in subsequent sessions.

Concrete sequence:

1. Open the next thread fresh — don't continue this conversation
2. Pick the starting page
3. Walk through the page's current state — codebase, screenshots, copy
4. Identify the design problem
5. Decide on the design language for the page — chromatic contrast, type scale, kinetic moment, surface tier balance
6. Produce a sequenced list of changes, ordered by risk and impact
7. Hand off to Claude Code

**Don't try to audit multiple pages in one session.** Each page is its own design conversation. Cross-page consistency emerges across audits, not within a single sitting.

**Don't slip refactor work into Workstream 5 page audits.** If an audit surfaces a refactor need that's not directly in service of the page's design changes, log it for separate handling. Workstream 4 settled the codebase; Workstream 5 keeps it settled by not commingling design and structural work.

**Don't pre-design Cowork orchestration.** It was a deferred item from earlier; it remains deferred. The orchestration layer wants a settled codebase to template against, and Workstream 5 will produce more design conventions worth templating once page audits run.

**Don't forget the summary-update contract.** When a page audit establishes a new convention (a specific kinetic moment treatment, a contrast strategy, a type scale decision), that convention lands in CLAUDE.md in the same conversation that establishes it. Not later.
