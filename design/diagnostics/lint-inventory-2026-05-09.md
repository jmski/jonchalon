# Lint Inventory — 2026-05-09

Read-only diagnostic for Workstream 4 Layer 5 cleanup scoping. No code modified. Generated from `npx eslint . --format json`.

---

## 1. Summary

| Metric | Value |
|---|---|
| Total violations | **152** |
| Errors | 120 |
| Warnings | 32 |
| Baseline match (152) | ✅ confirmed |
| Unique rule IDs triggered | **12** |
| Files with at least one violation | **51** |

---

## 2. Violations by Rule

| Rule | Severity | Count | Files | Description |
|---|---|---:|---:|---|
| `@typescript-eslint/no-explicit-any` | error | 99 | 23 | Disallows `any` type; prefer `unknown` or specific types |
| `@typescript-eslint/no-unused-vars` | warning | 19 | 14 | Flags declared identifiers/parameters never read |
| `react-hooks/exhaustive-deps` | warning | 11 | 10 | Effect/callback dep array missing referenced values |
| `react-hooks/set-state-in-effect` | error | 8 | 7 | Calling setState directly in effect body causes render loops / stale renders |
| `react/no-unescaped-entities` | error | 5 | 3 | Apostrophes/quotes in JSX text must be HTML-escaped |
| `prefer-const` | error | 3 | 2 | Variables never reassigned should be `const` |
| `@next/next/no-html-link-for-pages` | error | 2 | 1 | Internal navigation must use `next/link`, not `<a href="/...">` |
| `@typescript-eslint/no-require-imports` | error | 1 | 1 | `require()` not allowed; use ES imports |
| `react-hooks/purity` | error | 1 | 1 | Render-phase code must be pure (no side effects) |
| `react-hooks/refs` | error | 1 | 1 | Refs accessed/mutated in disallowed phase |
| `import/no-anonymous-default-export` | warning | 1 | 1 | Anonymous default export hurts debuggability |
| `(unused eslint-disable directive)` | warning | 1 | 1 | `eslint-disable-next-line` comment with no underlying violation |

---

## 3. Violations by File (top 30)

| File | Violations | Distinct rules | Notes |
|---|---:|---:|---|
| [app/(portal)/portal/page.tsx](app/(portal)/portal/page.tsx) | 13 | 3 | mixed: `no-explicit-any`, `no-html-link-for-pages`, `react-hooks/purity` |
| [components/sections/lessons/LessonContent.tsx](components/sections/lessons/LessonContent.tsx) | 12 | 1 | all `no-explicit-any` |
| [app/(portal)/portal/[courseSlug]/[lessonSlug]/page.tsx](<app/(portal)/portal/[courseSlug]/[lessonSlug]/page.tsx>) | 11 | 1 | all `no-explicit-any` |
| [app/(portal)/layout.tsx](<app/(portal)/layout.tsx>) | 9 | 1 | all `no-explicit-any` |
| [app/(portal)/portal/[courseSlug]/page.tsx](<app/(portal)/portal/[courseSlug]/page.tsx>) | 8 | 1 | all `no-explicit-any` |
| [sanity/schemas/course.ts](sanity/schemas/course.ts) | 7 | 1 | all `no-explicit-any` |
| [app/(marketing)/lessons/page.tsx](<app/(marketing)/lessons/page.tsx>) | 6 | 2 | `no-explicit-any` + `prefer-const` |
| [sanity/schemas/module.ts](sanity/schemas/module.ts) | 6 | 1 | all `no-explicit-any` |
| [app/(marketing)/lessons/[courseSlug]/[lessonSlug]/page.tsx](<app/(marketing)/lessons/[courseSlug]/[lessonSlug]/page.tsx>) | 4 | 1 | all `no-explicit-any` |
| [app/admin/page.tsx](app/admin/page.tsx) | 4 | 2 | `no-unused-vars` + `exhaustive-deps` |
| [components/animations/ScrollStagger.tsx](components/animations/ScrollStagger.tsx) | 4 | 2 | `no-explicit-any` + `no-unused-vars` |
| [lib/hooks/useFormValidation.ts](lib/hooks/useFormValidation.ts) | 4 | 1 | all `no-explicit-any` |
| [lib/hooks/useScrollAnimation.ts](lib/hooks/useScrollAnimation.ts) | 4 | 2 | `no-unused-vars` + `exhaustive-deps` |
| [app/admin/auth/callback/AuthCallbackContent.tsx](app/admin/auth/callback/AuthCallbackContent.tsx) | 3 | 2 | `no-unused-vars` + `exhaustive-deps` |
| [app/admin/login/page.tsx](app/admin/login/page.tsx) | 3 | 3 | `set-state-in-effect`, `exhaustive-deps`, `no-unescaped-entities` |
| [lib/hooks/usePointerPosition.ts](lib/hooks/usePointerPosition.ts) | 3 | 3 | `no-unused-vars`, `set-state-in-effect`, `exhaustive-deps` |
| [sanity/sanity.config.ts](sanity/sanity.config.ts) | 3 | 1 | all `no-explicit-any` |
| [scripts/migrate-content.ts](scripts/migrate-content.ts) | 3 | 2 | `no-unused-vars` + `prefer-const` |
| [.migration/inspect.cjs](.migration/inspect.cjs) | 2 | 2 | `no-require-imports` + `no-unused-vars` |
| [app/(marketing)/blog/[slug]/headings.ts](<app/(marketing)/blog/[slug]/headings.ts>) | 2 | 1 | all `no-explicit-any` |
| [app/(marketing)/blog/[slug]/page.tsx](<app/(marketing)/blog/[slug]/page.tsx>) | 2 | 1 | all `no-explicit-any` |
| [app/admin/reset-password/page.tsx](app/admin/reset-password/page.tsx) | 2 | 2 | `no-unused-vars` + `exhaustive-deps` |
| [components/forms/PresenceAuditFlow.tsx](components/forms/PresenceAuditFlow.tsx) | 2 | 1 | all `no-unescaped-entities` |
| [components/forms/SegmentedInquiryForm.tsx](components/forms/SegmentedInquiryForm.tsx) | 2 | 1 | all `no-unescaped-entities` |
| [components/portal/PortalShell.tsx](components/portal/PortalShell.tsx) | 2 | 1 | all `set-state-in-effect` |
| [lib/hooks/useFocusTrap.ts](lib/hooks/useFocusTrap.ts) | 2 | 1 | all `exhaustive-deps` |
| [lib/imageConfig.ts](lib/imageConfig.ts) | 2 | 1 | all `no-explicit-any` |
| [sanity/schemas/courseLesson.ts](sanity/schemas/courseLesson.ts) | 2 | 1 | all `no-explicit-any` |
| [sanity/schemas/lesson.ts](sanity/schemas/lesson.ts) | 2 | 1 | all `no-explicit-any` |
| [sanity/schemas/testimonial.ts](sanity/schemas/testimonial.ts) | 2 | 1 | all `no-explicit-any` |
| **Remaining 21 files** | **21** | — | 1 violation each (single-rule); see detail in `.lint-report.json` |

---

## 4. Cleanup Profile per Rule

| Rule | Class | `--fix`? | Could surface bug? | Effort/violation |
|---|---|---|---|---|
| `@typescript-eslint/no-explicit-any` | SEMI-MECHANICAL | no | yes (real type may reveal mismatch) | SMALL–MEDIUM |
| `@typescript-eslint/no-unused-vars` | MECHANICAL | partial (with `argsIgnorePattern`) | rarely (unused import that hides intended call) | SMALL |
| `react-hooks/exhaustive-deps` | JUDGMENT-HEAVY | no | yes (adding deps may change effect semantics; suppression may be intentional) | MEDIUM |
| `react-hooks/set-state-in-effect` | JUDGMENT-HEAVY → sometimes STRUCTURAL | no | yes (the violation often signals a real render-loop / wrong-pattern issue) | MEDIUM–LARGE |
| `react/no-unescaped-entities` | MECHANICAL | yes | no | SMALL |
| `prefer-const` | MECHANICAL | yes | no | SMALL |
| `@next/next/no-html-link-for-pages` | MECHANICAL | no | unlikely (semantic same after `<Link>` swap) | SMALL |
| `@typescript-eslint/no-require-imports` | MECHANICAL | no | no (file is a `.cjs` migration script — may justify config exclusion or keep as-is) | SMALL |
| `react-hooks/purity` | JUDGMENT-HEAVY | no | yes (render-phase side effect) | MEDIUM |
| `react-hooks/refs` | JUDGMENT-HEAVY | no | yes (ref usage outside expected phase) | SMALL–MEDIUM |
| `import/no-anonymous-default-export` | MECHANICAL | no | no | SMALL |
| unused eslint-disable | MECHANICAL | yes (`--report-unused-disable-directives` autofix) | no | SMALL |

---

## 5. File Clustering Patterns

Violations cluster cleanly along three axes:

| Cluster | Files | Violations | Dominant rule |
|---|---:|---:|---|
| **Portal routes** (`app/(portal)/portal/**`) | 5 | 43 | `no-explicit-any` (plus 1 `no-html-link-for-pages` + 1 `react-hooks/purity` in dashboard) |
| **Marketing lessons routes** (`app/(marketing)/lessons/**`) | 3 | 12 | `no-explicit-any` + 1 `prefer-const` |
| **Sanity schemas** (`sanity/schemas/*.ts` + `sanity/sanity.config.ts`) | 7 | 21 | `no-explicit-any` (single concern) |
| **lib/hooks/** | 5 | 14 | mix: `exhaustive-deps`, `no-unused-vars`, `set-state-in-effect`, `no-explicit-any` |
| **app/admin/** | 4 | 10 | mix: `exhaustive-deps`, `no-unused-vars`, `set-state-in-effect`, `no-unescaped-entities` |
| **Forms** (`components/forms/*`) | 3 | 5 | `no-unescaped-entities` + `set-state-in-effect` |

Sanity schema files alone account for ≈14% of all violations. `no-explicit-any` alone accounts for 65% of all violations.

Concentration is high: ~66 of 152 violations live in 5 portal routes + 7 Sanity schema files + 1 LessonContent component (12 files = 8%, ~43% of violations). Hook-rule violations are spread thinly across `lib/hooks/`, `app/admin/`, and `components/`.

---

## 6. Files with Cross-Rule Concentration (≥3 violations across ≥3 rules)

| File | Violations | Rules |
|---|---:|---|
| [app/(portal)/portal/page.tsx](app/(portal)/portal/page.tsx) | 13 | `no-explicit-any`, `no-html-link-for-pages`, `react-hooks/purity` |
| [app/admin/login/page.tsx](app/admin/login/page.tsx) | 3 | `set-state-in-effect`, `exhaustive-deps`, `no-unescaped-entities` |
| [lib/hooks/usePointerPosition.ts](lib/hooks/usePointerPosition.ts) | 3 | `no-unused-vars`, `set-state-in-effect`, `exhaustive-deps` |

These are candidates for per-file passes rather than rule-by-rule sweeps.

---

## 7. Recommendations for Cleanup Prompt Structure

The data shape suggests **5 cleanup prompts**, mixing rule-based and area-based splits:

| # | Prompt | Scope | Rationale |
|---|---|---|---|
| **L5-P1** | MECHANICAL sweep | All violations of: `react/no-unescaped-entities`, `prefer-const`, `import/no-anonymous-default-export`, unused-disable directive, `@next/next/no-html-link-for-pages`, `@typescript-eslint/no-require-imports` | ≈12 violations, all rote, mostly `--fix`-able. Single batch. Low risk. |
| **L5-P2** | `no-unused-vars` sweep | All 19 violations across 14 files | Mechanical, mostly delete-only. Single rule, broad surface area, minimal cross-talk with other rules. |
| **L5-P3** | `no-explicit-any` — Sanity + scripts | `sanity/schemas/*.ts`, `sanity/sanity.config.ts`, `lib/sanity.ts`, `lib/imageConfig.ts`, `scripts/migrate-content.ts` (~25 violations across ≈10 files) | Sanity types are well-defined; `any` here is almost always lazy and can be replaced with Sanity client / schema types. Lower judgment risk than route handlers. |
| **L5-P4** | `no-explicit-any` — app routes + components | Portal routes, marketing lessons routes, `LessonContent`, blog `[slug]`, `app/api/checkout`, `lib/hooks/useFormValidation`, `components/animations/ScrollStagger`, `lib/ikigai-results` (~74 violations across 13 files) | Largest cluster. Higher judgment cost — `any` in route data flow may shadow real shape mismatches. Worth its own prompt with explicit instruction to widen to `unknown` + narrowing where the real type isn't trivially recoverable. |
| **L5-P5** | React hooks judgment-heavy | All 21 violations of `react-hooks/exhaustive-deps`, `react-hooks/set-state-in-effect`, `react-hooks/purity`, `react-hooks/refs` across `lib/hooks/`, `app/admin/`, `components/portal/`, `components/forms/`, `components/layout/`, `components/sections/about/origin/`, `components/shared/InstagramEmbed`, `app/(marketing)/blog/[slug]/BlogToC`, `app/(portal)/portal/page.tsx` | These violations frequently signal real bugs or non-trivial restructuring. Not mechanical. Keep separate so the prompt can authorize per-violation investigation, not bulk auto-fix. |

The 3 cross-rule files in §6 should be flagged inside whichever prompt covers them so the agent knows to do a single pass per file rather than three drive-bys.

Suggested ordering: **L5-P1 → L5-P2 → L5-P3 → L5-P4 → L5-P5**, lowest-risk first so the baseline shrinks before judgment-heavy work begins. Each prompt should re-confirm the new baseline.

---

## 8. Risk Flags

| Flag | Detail |
|---|---|
| **Auth/admin path concentration** | `app/admin/login/page.tsx`, `app/admin/auth/callback/AuthCallbackContent.tsx`, `app/admin/reset-password/page.tsx` carry `react-hooks/set-state-in-effect` + `exhaustive-deps` violations. Hook-rule fixes here have the highest blast-radius potential — the violation often *is* the bug, so cleanup may surface real auth-flow issues. Treat as fix-carefully, not fix-in-bulk. |
| **Payment path** | `app/api/checkout/route.ts` has 1 `no-explicit-any`. Single violation, but in a payment-critical path — replacing `any` with the actual Stripe / request type may surface a downstream type mismatch. Worth manual verification. |
| **Portal data loading** | `app/(portal)/portal/page.tsx` has both `react-hooks/purity` and `no-html-link-for-pages` alongside 11 `no-explicit-any`. The `purity` violation in particular is unusual — render-phase side effect — and may indicate a structural issue, not a typing one. |
| **`set-state-in-effect` cluster in `lib/hooks/`** | `usePointerPosition`, `PortalShell`, `BlogOptIn`, `CookieConsent`, `InstagramEmbed`, `BlogToC` all flag `set-state-in-effect`. These are reusable primitives — fixing them carries higher leverage but also higher regression surface. Verify each consumer after fix. |
| **`.migration/inspect.cjs`** | The lone `no-require-imports` is in a one-off migration script. Fixing means converting to ESM (`.mjs`) or accepting the violation as deliberate (script tooling). Not a typical product-code fix; surface as a config-vs-conversion judgment, not a typing fix. |
| **No explicit `eslint-disable` TODO suppressions detected** | The single unused-disable directive (`CurriculumBento.tsx:35`) is a leftover, not an intentional TODO. Safe to remove. |
| **`react-hooks/purity` and `react-hooks/refs`** | Each appears once. The rule names and counts suggest these are recent React 19 / React Compiler-era rules — the fix may require understanding compiler implications, not just rewriting the access. |

---

## 9. Lint Baseline Confirmation

| Metric | Value |
|---|---|
| Total problems | **152** |
| Errors | 120 |
| Warnings | 32 |
| Delta vs. workstream baseline | **0** |

Baseline preserved. No code modified by this report.
