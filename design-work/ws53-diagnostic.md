# Workstream 5.3 Diagnostic

## Tier 1 — Tooling

### T1.1 pnpm vs npm drift

- `package-lock.json`
  - Exists: yes
  - Tracked: yes (`git ls-files`)
  - Last modified in git history: `f3e2329` on `2026-04-29 16:49:45 -0400` (`sentry config`)
- `pnpm-lock.yaml`
  - Exists: yes
  - Tracked: yes (`git ls-files`)
  - Last modified in git history: `aa081ee` on `2026-05-10 18:40:41 -0400`
- `pnpm-workspace.yaml`
  - Exists: yes
  - Tracked: yes (`git ls-files`)
  - Last modified in git history: `aa081ee` on `2026-05-10 18:40:41 -0400`
- `.npmrc` / `.pnpmrc`
  - `.npmrc`: exists and tracked. Contents:
    - `legacy-peer-deps=true`
    - `optional=true`
    - `unsafe-perm=true`
  - `.pnpmrc`: does not exist
- `package.json` `packageManager` field
  - Present: no
- `package.json` scripts referencing package managers explicitly
  - Root scripts use plain commands except:
    - `sanity:dev`: `cd sanity && npm run dev`
    - `sanity:deploy`: `cd sanity && npm run deploy`
  - No scripts reference `pnpm`
- CI / deployment config tool usage
  - `.github/workflows/ci.yml`: `cache: 'npm'`, `npm ci`, `npm run lint`, `npm run build`
  - `netlify.toml`: `command = "npm run build"`, build env includes `NPM_VERSION`
  - `.github/workflows/supabase-heartbeat.yml`: no package manager involved (curl only)

## Tier 2 — Lint baseline

### T2.1 Current state

Command run: `npm run lint`

Full output:

```text
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
npm warn Unknown project config "unsafe-perm". This will stop working in the next major version of npm.

> jonchalant@0.1.0 lint
> eslint


C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\.migration\inspect.cjs
  1:12  error  A `require()` style import is forbidden  @typescript-eslint/no-require-imports

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(marketing)\ikigai\IkigaiClient.tsx
  339:7  error  Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:
* Update external systems with the latest state from React.
* Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(marketing)\ikigai\IkigaiClient.tsx:339:7
  337 |   useEffect(() => {
  338 |     if (typeof window !== 'undefined' && localStorage.getItem('jonchalant_subscribed') === 'true') {
> 339 |       setCaptureAlreadySubscribed(true);
      |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect
  340 |     }
  341 |   }, []);
  342 |  react-hooks/set-state-in-effect

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(marketing)\mfa\MfaClient.tsx
   58:15  error  Error: Cannot access variable before it is declared

`startEnrollment` is accessed before it is declared, which prevents the earlier access from updating when this value changes over time.

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(marketing)\mfa\MfaClient.tsx:58:15
  56 |       } else {
  57 |         // No factor — need to enroll
> 58 |         await startEnrollment()
     |               ^^^^^^^^^^^^^^^ `startEnrollment` accessed before it is declared
  59 |       }
  60 |     } catch (err) {
  61 |       console.error('MFA status check failed:', err)

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(marketing)\mfa\MfaClient.tsx:67:3
  65 |   }, []) // eslint-disable-line react-hooks/exhaustive-deps
  66 |
> 67 |   const startEnrollment = async () => {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 68 |     setError(null)
     | ^^^^^^^^^^^^^^^^^^
> 69 |     const { data, error: enrollError } = await supabase.auth.mfa.enroll({
     …
     | ^^^^^^^^^^^^^^^^^^
> 83 |     setStep('enroll')
     | ^^^^^^^^^^^^^^^^^^
> 84 |   }
     | ^^^^ `startEnrollment` is declared here
  85 |
  86 |   // Verify the TOTP code (works for both enroll and subsequent logins)
  87 |   const handleVerify = async (e: React.FormEvent) => {  react-hooks/immutability
  128:5   error  Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:
* Update external systems with the latest state from React.
* Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(marketing)\mfa\MfaClient.tsx:128:5
  126 |
  127 |   useEffect(() => {
> 128 |     checkMfaStatus()
      |     ^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect
  129 |   }, [checkMfaStatus])
  130 |
  131 |   if (step === 'loading') {                                                                                                                                                                                                                                                                        react-hooks/set-state-in-effect

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(portal)\portal\settings\SettingsClient.tsx
  270:5  error  Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:
* Update external systems with the latest state from React.
* Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(portal)\portal\settings\SettingsClient.tsx:270:5
  268 |
  269 |   useEffect(() => {
> 270 |     refresh()
      |     ^^^^^^^ Avoid calling setState() directly within an effect
  271 |     // eslint-disable-next-line react-hooks/exhaustive-deps
  272 |   }, [])
  273 |  react-hooks/set-state-in-effect

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(portal)\portal\tonality\TonalityClient.tsx
  154:5  error  Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:
* Update external systems with the latest state from React.
* Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\app\(portal)\portal\tonality\TonalityClient.tsx:154:5
  152 |
  153 |   useEffect(() => {
> 154 |     setSpeechSupported(getSpeechRecognitionCtor() !== null)
      |     ^^^^^^^^^^^^^^^^^^ Avoid calling setState() directly within an effect
  155 |   }, [])
  156 |
  157 |   const activeText = tab === 'text' ? textValue : transcript  react-hooks/set-state-in-effect

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\components\portal\PresenceCoach.tsx
  67:36  error  Compilation Skipped: Existing memoization could not be preserved

React Compiler has skipped optimizing this component because the existing manual memoization could not be preserved. This value was memoized in source but not in compilation output.

C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\components\portal\PresenceCoach.tsx:67:36
   65 |   }
   66 |
>  67 |   const handleSubmit = useCallback(async () => {
      |                                    ^^^^^^^^^^^^^
>  68 |     const trimmed = input.trim()
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
>  69 |     if (!trimmed || isStreaming || isLimited) return
      …
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 188 |     }
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 189 |   }, [input, isStreaming, isLimited, messages, userId])
      | ^^^^ Could not preserve existing memoization
  190 |
  191 |   return (
  192 |     <div className="presence-coach">  react-hooks/preserve-manual-memoization

✖ 7 problems (7 errors, 0 warnings)
```

Count: 7 violations.

Exact file:rule list in current state:
- `.migration/inspect.cjs` — `@typescript-eslint/no-require-imports`
- `app/(marketing)/ikigai/IkigaiClient.tsx` — `react-hooks/set-state-in-effect`
- `app/(marketing)/mfa/MfaClient.tsx` — `react-hooks/immutability`
- `app/(marketing)/mfa/MfaClient.tsx` — `react-hooks/set-state-in-effect`
- `app/(portal)/portal/settings/SettingsClient.tsx` — `react-hooks/set-state-in-effect`
- `app/(portal)/portal/tonality/TonalityClient.tsx` — `react-hooks/set-state-in-effect`
- `components/portal/PresenceCoach.tsx` — `react-hooks/preserve-manual-memoization`

Drift vs CLAUDE.md baseline:
- Violation count drift: none (still 7)
- File:rule drift: none

### T2.2 Categorization

Excluding `.migration/inspect.cjs` deliberate violation, React 19 / Compiler-family breakdown is:

- `react-hooks/set-state-in-effect`
  - Count: 4
  - Files:
    - `app/(marketing)/ikigai/IkigaiClient.tsx`
    - `app/(marketing)/mfa/MfaClient.tsx`
    - `app/(portal)/portal/settings/SettingsClient.tsx`
    - `app/(portal)/portal/tonality/TonalityClient.tsx`
- `react-hooks/immutability`
  - Count: 1
  - Files:
    - `app/(marketing)/mfa/MfaClient.tsx`
- `react-hooks/preserve-manual-memoization`
  - Count: 1
  - Files:
    - `components/portal/PresenceCoach.tsx`
- Any other React 19 / Compiler rules
  - Count: 0
  - Files: none

## Tier 3 — CSS and schema hygiene

### T3.1 pages-programs.css

- Separate programs page CSS file under `app/(marketing)/programs/` does not exist.
- Programs page styles currently live in shared `app/css/pages-portal-tools.css` under section comment:
  - `Programs page (drifted from page-scoped file convention)`
  - Includes rules such as `.programs-hero`, `.programs-offers-*`, `.programs-tracks-*`, `.programs-faq-*`, `.programs-case-studies-*`.
- `app/globals.css` imports `./css/pages-portal-tools.css` and does not import any standalone programs CSS file.

### T3.2 foundation-kinetic

- `.foundation-kinetic` definition location:
  - No CSS definition found under `app/css/**`.
- TSX usage:
  - `app/(marketing)/foundation/page.tsx` contains `<p className="jc-kinetic foundation-kinetic">...`.
- Current state conclusion:
  - The class is not dead in markup (it is used in Foundation page TSX).
  - It appears to be an unimplemented/stranded class name (used but not defined in CSS).

### T3.3 programs-offers-eyebrow

- Definition:
  - `app/css/pages-portal-tools.css` defines `.programs-offers-eyebrow`.
- Usage:
  - `app/(marketing)/programs/page.tsx` on Case Studies header eyebrow (`page.caseStudiesHeader.eyebrow`).
  - `app/(marketing)/programs/page.tsx` on Program Cards header eyebrow (`page.programCardsHeader.eyebrow`).
- What it actually styles:
  - It styles two separate blocks: Case Studies section header eyebrow and Program Cards section header eyebrow.
- Correct naming per BEM-inspired convention:
  - If split by block ownership:
    - `.programs-case-studies-eyebrow`
    - `.programs-offers-eyebrow` (keep for offers/program cards)
  - If intentionally shared across both section headers, a neutral shared name would be clearer than offers-specific naming (for example `.programs-section-eyebrow`).

### T3.4 faqHeader

- Programs schema (`sanity/schemas/documents/pages/pagePrograms.ts`):
  - `faqHeader` is defined as raw `string`.
- Programs page consumption (`app/(marketing)/programs/page.tsx`):
  - Rendered directly as `<h2 className="programs-faq-title">{page?.faqHeader ?? 'Common questions'}</h2>`.
- Foundation convention reference:
  - Foundation schema (`sanity/schemas/documents/pages/pageFoundation.ts`) also defines `faqHeader` as raw `string`.
  - Foundation page consumes it similarly as raw text in `<h2 className="foundation-section-title">{content?.faqHeader ?? 'Common questions'}</h2>`.
- Conclusion:
  - Programs and Foundation are consistent with each other (both string-based).
  - They differ from sections that use `sectionHeader` objects elsewhere in the page schemas.

## Tier 4 — Reporting only (deferred from 5.3)

### T4.1 B-ii migration

- Current state: allowlist model is still active.
- Evidence:
  - `eslint-plugin-jonchalant/rules/headline-needs-render.js` contains `DEFAULT_SAFE_CONSUMERS` allowlist and TODO note for future B-ii migration to ReactNode contract.
  - `eslint.config.mjs` enables the rule but does not provide an override `safeConsumers` option block, so default allowlist is in effect.
- Partial migration status:
  - No concrete partial migration implementation found in lint rule/config; B-ii appears deferred/not started in code.

### T4.2 ESLint rule auto-fixer

- Current state: not implemented.
- Evidence:
  - Rule file TODO explicitly lists auto-fixer as future enhancement.
  - Rule `meta` does not include `fixable` and `context.report` does not provide a fixer callback.

### T4.3 --bg-dark token

- Where defined:
  - `app/css/variables.css`: `--bg-dark: #0a0a0a;`
- Where used:
  - `app/css/pages-portal.css` in `.portal-lesson-video-section { background: var(--bg-dark); }`
- What it currently resolves to:
  - `#0a0a0a`

### T4.4 Mobile nav close X

- Current state:
  - No separate close button exists inside mobile menu panel.
  - `components/navigation/Navbar.tsx` uses one toggle button (`aria-label="Toggle navigation menu"`) for open/close.
  - Visual close-X behavior is implemented by CSS transform on `.jc-nav-hamburger.is-open` bars in `app/css/components.css`.

## Disagreements with the handoff

- Handoff path discrepancy:
  - Requested file path in this prompt says `design-notes/workstream-5-handoffs.md`, but the actual handoff file present is `design/workstream-5-handoffs.md`.
- pnpm lockfile tracking discrepancy:
  - Handoff tail item references untracked `pnpm-lock.yaml` / `pnpm-workspace.yaml` drift.
  - Current tree shows both files exist and are tracked.
- `foundation-kinetic` discrepancy:
  - Handoff lists it as dead class.
  - Current tree shows class is used in Foundation TSX; not dead in markup.
- `--bg-dark` usage discrepancy:
  - CLAUDE summary/handoff framing says legacy token is unused.
  - Current tree has at least one active use in `app/css/pages-portal.css`.
- Commit-SHA closure discrepancy in handoff text:
  - Handoff still contains placeholder `<INSERT-SHA-HERE>` and repo is not fully clean (`git status --short` shows untracked `design/workstream-5-handoffs.md`).

## Recommended ordering for implementation prompts

1. Tier 1 tooling decision first (`npm` vs `pnpm`, lockfile authority, `packageManager` field) because it is workflow-load-bearing and affects reproducibility.
2. Tier 2 React-hooks lint remediation next, once package-manager direction is stable.
3. Tier 3 CSS/schema hygiene after Tier 2 (independent from lint-rule families, low coupling).
4. Tier 4 remains reporting/deferred unless reprioritized.

Dependency read:
- Tier 1 does not technically block Tier 2/Tier 3 code edits, but resolving Tier 1 first reduces process churn in follow-up prompts.
- Tier 2 and Tier 3 do not block each other functionally.

## Visual regression baseline

Requested baseline targets:
- `/foundation` at 1280 and 375
- `/programs` at 1280 and 375
- save under `design-notes/ws53-baseline/`

Current environment result:
- Baseline directory was created: `design-notes/ws53-baseline/`
- Screenshot capture was blocked in this session:
  - `http://localhost:3000/foundation` returned `ERR_CONNECTION_REFUSED`
  - `https://jonchalant.com/foundation` returned `ERR_NAME_NOT_RESOLVED`
- Therefore, no page screenshots were generated in this run.

## Surprises

- Root `git status --short` includes untracked `design/workstream-5-handoffs.md` while the handoff text itself states all 5.1/5.2 work is committed and includes a placeholder SHA token.
- Running `npm run lint` emits npm config warnings from `.npmrc` (`optional`, `unsafe-perm`), which are not lint violations but are present in command output and may affect future npm behavior.
