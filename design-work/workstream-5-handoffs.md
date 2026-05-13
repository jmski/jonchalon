# Workstream 5 — Handoff Docs

This document contains the close-of-workstream handoff notes for Workstream 5.1 (Foundation page audit) and Workstream 5.2 (Programs page audit). Each section is the artifact passed forward to the strategy thread opening the next workstream.

---

# Part 1 — Workstream 5.1 → 5.2 | Foundation Audit Closing → Programs Audit Opening

## Project context

Jonchalant — coaching platform helping corporate professionals find purpose via the ikigai framework, embodied through dance-taught presence practice. Brand: Japanese Zen-inspired, Mocha Mousse warm system, editorial Fraunces typography, light mode only.

Stack: Next.js 16 / TypeScript, Sanity CMS, Tailwind for utilities, custom CSS (9 system + 10 page-scoped). Workflow: strategy in claude.ai, implementation in VS Code via Claude Code. CLAUDE.md is the single conventions document. canonical-copy.md is source of truth for marketing copy.

## What just closed — Workstream 5.1, Foundation audit

The first page audit of Workstream 5 closed cleanly. Three implementation prompts, lint baseline of 1 preserved throughout, no scope creep.

### Foundation outcomes

- Surface tier rhythm rebalanced — primary, secondary, primary, dark, secondary, primary, secondary, secondary, secondary — replacing the prior cream-only stack
- Dark kinetic frame inserted between Curriculum and How It Works, holding the page's argument line *Eight weeks. One week at a {{time}}.*
- `lib/foundationCopy.ts` created as the typed-lib home for stable page-argument copy
- Hero italic anchor opsz stepped down (`.foundation-hero-headline em` rule lost its `font-variation-settings: "opsz" 144` declaration); kinetic frame is now the singular opsz 144 moment per the new convention
- Sanity Studio edit completed: `pageFoundation.curriculumHeader.headline` downgraded from argument-claim to label-style header
- Three conventions codified in CLAUDE.md (additive insertions, no restructuring): page-specific stable copy in `lib/{page}Copy.ts`; singular opsz 144 per page; kinetic frame placement on long product pages

### Working pattern that earned its keep

The strategy thread in claude.ai opened with a visual diagnostic only (page.tsx, screenshots, design system docs); the code diagnostic was delegated to Claude Code as Prompt 1, a pure read-only pass that reported current state without changing anything. This split saved real context in the strategy thread and produced sharper implementation prompts because the code structure was confirmed before any design decisions had to commit to it. Recommend continuing this split for future audits.

Other patterns that held:

- One Claude Code prompt at a time when implementation begins
- Specificity discipline — naming negative space ("do not do these things") carries as much weight as positive instructions, often more
- Bundle cohesively-scoped work in one prompt; split non-cohesive work across prompts
- Visual judgment is the user's; verification of code structure, lint, and build is Claude Code's

## What Workstream 5.2 is

The second page audit. Programs page (`app/(marketing)/programs/page.tsx`).

The handoff suggested Foundation and Programs as a natural pairing — both course-product pages. Now that Foundation has established conventions for long product pages (kinetic frame placement, surface tier rhythm, hero-italic restraint), Programs is the natural second audit because it can either inherit those conventions or deliberately diverge. Either is a valid outcome; what matters is that the divergence is named and reasoned, not accidental.

### What's known about Programs from prior visual inspection (Workstream 5.0 thread)

- Page hero with focus-areas block ("This is where it gets physical")
- Three case-study cards in a row (Mowood / Michael Rodrigues / Speaking Up)
- Three pricing/program cards in a row (Foundation card + Foundation+Weekly Check-Ins + Custom 1-on-1 starting $3,500)
- FAQ accordion
- "Not sure which one is right?" comparison block
- Foundation Starter Guide form (same lead magnet that closes Foundation)
- Newsletter band → footer

### Likely design problems (to be confirmed by diagnostic)

- Same surface tier flatness as pre-audit Foundation — cream all the way down, no dark moment, no kinetic frame
- Three-card-row repetition (case studies row, then programs row) without a chromatic break between them
- Pricing card competition — three cards rather than Foundation's two, with the middle "+ Weekly Check-Ins" card carrying a MOST POPULAR style badge in the screenshot. Card hierarchy may be the page's biggest open design question.
- Hero feels small for a page that has to do a lot of orienting work (it's the explainer for the entire coaching offer surface)

Likely candidates for the kinetic line: TBD. The design system's phrase library doesn't currently name a Programs-specific line. Either canonical-copy.md has one, or this audit will need to surface one. Worth flagging as the first design judgment to make in the strategy phase.

## Conventions in force from prior workstreams

All Workstream 3 + 5.1 conventions remain active and codified in CLAUDE.md. Highlights relevant to Programs:

- **Surface tier system.** primary | secondary | tertiary | dark | dark-mid SectionWrapper variants. Choose by tier intent, not current value.
- **Page rhythm.** One deepest-dark moment per page, one dramatic kinetic moment per page, ideally same gesture.
- **Kinetic frame placement (long product pages).** Roughly 40–50% scroll depth, after substance has landed, before commercial ask. Dark SectionWrapper containing only a KineticMoment-wrapped `<p className="jc-kinetic">`. No eyebrow, no subhead.
- **Singular opsz 144 per page.** Italic anchors elsewhere are formatting-only.
- **Page-specific stable copy.** Lives in `lib/{page}Copy.ts`. Foundation precedent: `lib/foundationCopy.ts`.
- **Italic anchor color tokens.** `--mocha-mousse` on light surfaces, `--anchor-on-dark` on dark surfaces.
- **KineticMoment component.** Wrapper that adds opacity-only scroll-triggered fade-in. Constraint is the value; don't extend.
- **Headline rendering.** `renderHeadline()` for any .headline field interpolated into JSX.
- **Lint baseline of 1.** The deliberate `.migration/inspect.cjs` violation. Every Claude Code prompt verifies this is unchanged. Delta of 0 = no new violations introduced.

## Working pattern for Workstream 5.2

Same shape as 5.1:

1. Open fresh thread
2. Visual diagnostic in claude.ai — page.tsx + screenshots + design references
3. Code diagnostic delegated to Claude Code as Prompt 1 (read-only)
4. Design language decisions: chromatic contrast, kinetic moment, type scale, surface tier balance
5. Sequenced implementation prompts, ordered by risk and impact
6. Visual verification (the user's call)
7. CLAUDE.md summary-update for any new convention this audit establishes

## What's also unblocked but out of scope

The four Layer 5 tail items from Workstream 4 remain ad-hoc:

- B-ii migration (allowlisted safe-consumer components → ReactNode)
- ESLint rule auto-fixer
- `--bg-dark` legacy token decision
- Mobile nav close X verification

The deferred schema items (field-naming consistency, lesson model consolidation) remain deferred.

Don't slip refactor work into the Programs audit. Don't pre-design Cowork orchestration. Don't try to audit multiple pages.

---

# Part 2 — Workstream 5.2 → 5.3 | Programs Audit Closing → Next Workstream Opening

## Project context

Jonchalant — coaching platform helping corporate professionals find purpose via the ikigai framework, embodied through dance-taught presence practice. Brand: Japanese Zen-inspired, Mocha Mousse warm system, editorial Fraunces typography, light mode only.

Stack: Next.js 16 / TypeScript, Sanity CMS, Tailwind for utilities, custom CSS (9 system + 10 page-scoped — though Programs CSS has drifted, see Layer 5). Workflow: strategy in claude.ai, implementation in VS Code via Claude Code. CLAUDE.md is the single conventions document. canonical-copy.md is source of truth for marketing copy.

## What just closed — Workstream 5.2, Programs audit

The second page audit of Workstream 5 closed. Four implementation prompts (1 read-only diagnostic, 2 implementation, 1 visual verification), plus a mid-audit Prompt 2.5 reconciliation when a lint baseline mismatch surfaced uncommitted Workstream 5.1 work. Lint delta of 0 across every prompt boundary. Build pass at every gate.

**All Workstream 5.1 and 5.2 work is committed at SHA `e44c85604236d3868e3a2a73a74292070f6a0a4d` on branch `workstream-5`.**

### Programs outcomes

- **Hero rebalanced.** Headline scale lifted to `clamp(2.75rem, 6vw, 4.25rem)` scoped via `.programs-hero` wrapper. Aside ("Who this is built for") de-emphasized — card chrome removed, heading reduced to label scale, list items stepped down one size. The hero now reads as the orienting surface it needs to be for a page explaining the entire coaching offer.
- **Pricing card hierarchy restructured** from a flat three-card row with a `MOST POPULAR` badge to a 2-up binary (Foundation + Foundation+Check-Ins) with a horizontal off-ramp panel below (Custom 1-on-1 at $3,500+). The badge now does meaningful comparative work in a 2-card context rather than acting as a sticker on a flat field of three. New CSS modifier: `.program-track-card--offramp`. New wrapper class: `.programs-tracks-offramp`.
- **Dark kinetic frame inserted** between Curriculum Bento and Program Cards, holding the page's pivot line: *Three doors. One {{practice}}.* This is the page's singular opsz 144 moment, marking the transition from orienting work to commercial ask.
- **`lib/programsCopy.ts` created** matching the Foundation precedent. Exports `programsKineticLine` and `curriculumBentoHeadline`. The bento headline string moved from a raw string literal at the call site into the lib file.
- **Closing CTA section removed.** The "Not sure which one is right?" section was a third routing attempt competing with the program cards and the starter guide. With it gone, the page argues cleanly: orient → orient → orient → pivot → ask → clarify → soft close.
- **Starter Guide form retained** as the soft close. The strategy decision was: Programs is the *consideration* page where users are shopping; if they bounce, they're not ready to choose, and the starter guide catches that gap. Foundation, by contrast, is the *commitment* page — the starter guide there is a different role (alternative when the eight-week course is wrong, not when they're shopping).
- **CSS hygiene:** dead rules (`.program-track-card-includes-item`, `.program-track-card-includes-check`) removed. Grid breakpoints flipped from `max-width` to `min-width` (mobile-first, consistent with the rest of the design system).

### Conventions codified in CLAUDE.md (additive)

- `{{double-braces}}` is the italic-anchor markup convention for `lib/{page}Copy.ts` strings interpreted by `renderHeadline()`. Existed in practice from Workstream 5.1 (Foundation); now written down.
- Pricing-card hierarchy pattern: 2-up + horizontal off-ramp is the documented alternative to flat-three-cards-with-badge when one offer is meaningfully different in tier.
- `KineticHeading` and `KineticMoment` may co-occur on the same long product page (bento + kinetic frame). Both Foundation and Programs ship this combination; the gestures do not compete if the dark frame's `SectionWrapper` provides adequate top whitespace.
- Lint baseline updated from 1 to 7. The 6 new violations are pre-existing React 19 / React Compiler ESLint rules that surfaced after Workstream 4 closed. Delta-of-0 check at every prompt boundary remains the working convention.
- Lint command convention: `npm run lint` is canonical. Earlier workstream docs referenced `pnpm lint`; environment standardized on `npm` during 5.2.

### Working pattern that earned its keep

The Foundation audit's split (visual diagnostic in claude.ai, code diagnostic delegated to Claude Code as Prompt 1) held up for Programs and saved real context. The diagnostic surfaced four findings that materially shaped Prompt 2's scope — including the CSS drift, the max-width breakpoints, the orphaned CSS classes, and the hardcoded bento headline string. None of those would have been visible from screenshots alone.

The mid-audit reconciliation (Prompt 2.5) when the lint baseline mismatched surfaced a deeper process problem: Workstream 5.1 was never committed to the branch despite the handoff doc declaring it "closed cleanly." All 5.1 work was sitting in the working tree as uncommitted changes. The reconciliation prompt was small, safe, and read-only — and it caught the drift before Prompt 3 layered more uncommitted work on top of it. Lesson: every workstream-close handoff doc should explicitly state "and the work is committed at SHA X," not just "the work is done." That discipline is now in force.

## What Workstream 5.3 could be

The handoff doc that opened 5.2 didn't pre-commit to a third page audit, and the same restraint applies here. Candidate workstreams in rough order:

### Candidate A — Third page audit (continue the pattern)

The natural continuation of the Workstream 5 page-audit cadence. Highest-leverage candidates by visual inspection:

- **About** — the page where the Origin section already had cinematic scrollytelling planned in the Stillness & Motion concept but never landed as an audit. Editorial-heavy, hero-heavy, and the user's first deep read of who Jon is.
- **Ikigai** — top-of-funnel CTA target. If the funnel argument is "ikigai entry → consideration → commitment," ikigai's the doormat and probably hasn't been audited against the conventions Foundation and Programs now both follow.
- **Home** — the highest-stakes surface and probably the most resistant to a clean single audit. Multiple sections, multiple jobs, hero is the singular page argument for the whole brand.

About would be the safest next audit (singular argument, clear scrollytelling already planned). Home would be the most valuable but riskiest. Ikigai is somewhere in between.

**Important caveat for whoever picks About:** Foundation and Programs were both *long product pages with commercial offers*. About is structurally different — editorial, narrative, no commercial offer, no pricing cards, no FAQ-to-soft-close arc. The conventions transferred cleanly between Foundation and Programs because the pages had similar shapes. About might need a *different* shape of audit, not the same shape applied to a different page. The pricing-card hierarchy pattern is irrelevant. The orient-to-ask kinetic frame placement may be irrelevant. Whether About *needs* a kinetic frame at all is an open question. Don't rubber-stamp the precedent.

### Candidate B — Layer 5 tail consolidation

Pull together the accumulated tail items from Workstreams 4 + 5.1 + 5.2 into a single cleanup workstream. Current contents:

- B-ii migration (allowlisted safe-consumer components → ReactNode)
- ESLint rule auto-fixer
- `--bg-dark` legacy token decision
- Mobile nav close X verification
- React 19 / Compiler lint violations (the 6 new ones — set-state-in-effect, immutability, preserve-manual-memoization)
- `pages-programs.css` extraction (the CSS drift discovered in 5.2)
- `foundation-kinetic` dead class on Foundation
- `programs-offers-eyebrow` misnamed on the Programs case studies header
- `faqHeader` as raw string instead of `sectionHeader` object (Sanity schema inconsistency on Programs)
- pnpm vs npm tooling drift + the untracked `pnpm-lock.yaml` / `pnpm-workspace.yaml`

This is now a substantial list. None individually critical, but the 6 React-hooks violations especially could compound if more are introduced before they're addressed (and the delta-of-0 check protects against new ones but does nothing for the existing). The pnpm-vs-npm thing is the only Layer 5 item that's load-bearing — it's why Prompt 2.5 had to exist, and untracked lockfiles still sit in the working tree.

### Candidate C — Image asset generation push

The user-memory thread noted Workstream 5 was running on placeholder image assets pending AI-generation using Jon's own photos as reference, with real photography to be scheduled afterward. If page audits have outpaced image work, this may be the gating dependency for any further visual polish.

## Recommendation

The strategy thread closing 5.2 recommended Candidate A (About audit) but flagged that the recommendation needs scrutiny in a fresh thread rather than rubber-stamping. Three reasons to slow down on About specifically:

1. Two data points (Foundation + Programs) isn't a cadence — it's a pattern that happens to fit two structurally similar pages. About isn't structurally similar.
2. Not all the newly codified conventions apply to About. Pricing-card hierarchy is irrelevant. KineticHeading/KineticMoment co-occurrence depends on About having both, which is unconfirmed.
3. The fresh-thread value of opening 5.3 cold is precisely the chance to interrogate whether About is the right pick at all, or whether the Layer 5 tail (especially the pnpm/lockfile drift) deserves to come forward.

The fresh strategy thread should look at About's screenshots, name its actual problems, and decide whether the audit's *target* is real before committing to the audit's *form*. If About's problems aren't yet legible from a fresh look at the page, that's a signal to pick a different workstream — not to fall back on cadence.

## Files that will be needed to start (whichever workstream 5.3 becomes)

If 5.3 is a page audit:

- The `page.tsx` for whichever page is being audited (e.g., `app/(marketing)/about/page.tsx`)

Useful but not blocking:

- The Sanity schema for the page
- `canonical-copy.md` if it contains a kinetic line or argument phrase for the page
- Current screenshots if not already in project knowledge

If 5.3 is Layer 5 tail consolidation:

- The Layer 5 list above as a starting backlog
- A scoping conversation about which items to bundle and which to defer

## Conventions in force from prior workstreams

All Workstream 3 + 4 + 5.1 + 5.2 conventions remain active in CLAUDE.md. The conventions list relevant to long product pages now includes the pricing-card hierarchy pattern and the `KineticHeading`/`KineticMoment` co-occurrence note from 5.2. The page-stable copy convention (`lib/{page}Copy.ts` + `{{double-braces}}` markup + `renderHeadline()`) is the documented pattern for any audit that introduces new stable copy.

The split-diagnostic working pattern (visual judgment in claude.ai, code diagnostic delegated to Claude Code as a read-only Prompt 1) is the recommended opener for any page audit.

The lint baseline is 7. The expected file:rule list is documented in CLAUDE.md. Delta of 0 at every prompt boundary is the working convention.

The lint command is `npm run lint`. Not `pnpm lint`. The pnpm-vs-npm drift is tracked as a Layer 5 item.

Every workstream-close handoff doc states the SHA the work is committed at. This is the discipline that prevents the kind of drift Prompt 2.5 had to clean up.

## What's out of scope for the next workstream

- Don't slip refactor work into a page audit (the original 5.0 → 5.1 instruction continues to apply)
- Don't pre-design Cowork orchestration
- Don't try to audit multiple pages
- Don't pull Layer 5 tail items into a page-audit workstream; they get their own consolidation workstream

## Final state of the repo at this handoff

Branch: `workstream-5`. All Workstream 5.1 and 5.2 work committed at SHA `e44c85604236d3868e3a2a73a74292070f6a0a4d`. Lint baseline 7, file:rule list documented in CLAUDE.md. Build passes. `/programs` and `/foundation` render correctly as audited.
