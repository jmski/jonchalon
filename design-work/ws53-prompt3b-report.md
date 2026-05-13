# Workstream 5.3 Prompt 3b Report

## A1 File analysis
At line 67 in `components/portal/PresenceCoach.tsx`, `handleSubmit` was defined as:

```tsx
const handleSubmit = useCallback(async () => {
  ...
}, [input, isStreaming, isLimited, messages, userId])
```

What it memoized:
- An async submit handler that validates input, appends user/assistant messages, starts streaming from `/api/presence-coach`, appends SSE tokens into the assistant message, updates rate-limit state, and handles error/limit cases.

Declared dependency array:
- `[input, isStreaming, isLimited, messages, userId]`

External references inside the callback:
- Reactive values in dep array: `input`, `isStreaming`, `isLimited`, `messages`, `userId`
- Stable setters/refs/values from component scope: `setError`, `setInput`, `textareaRef`, `setMessages`, `setIsStreaming`, `abortRef`, `setIsLimited`, `setRemaining`
- Platform/module globals: `fetch`, `crypto.randomUUID`, `TextDecoder`

Where consumed:
- Called from keyboard handler (`handleKeyDown`) on Enter-without-Shift.
- Called from send button click handler: `onClick={() => void handleSubmit()}`.
- Not passed to child props, not used in any dependency array, not stored in refs/state.

## A2 Cause categorization
Cause selected: **Cause 2 (untraceable/unsupported preservation path for manual memoization)**.

Evidence:
- Dependency array was already honest for reactive values used (`input`, `isStreaming`, `isLimited`, `messages`, `userId`), so this is not Cause 1.
- `handleSubmit` identity is not used as load-bearing behavior (not a dependency of effect/memo, not passed for referential-equality semantics), so this is not Cause 3.
- The callback body is an imperative async workflow (AbortController ref mutation, fetch/SSE streaming, tokenized message updates). The React Compiler flagged that existing manual memoization could not be preserved, and the manual `useCallback` was not behaviorally required.

## B Fix applied
Path used: **B2**.

Before:
- `handleSubmit` wrapped in `useCallback(..., [input, isStreaming, isLimited, messages, userId])`.

After:
- `handleSubmit` is a plain async function expression (`const handleSubmit = async () => { ... }`).
- No other logic or control flow changes.

Diff summary:
- Removed `useCallback` wrapper for `handleSubmit`.
- Removed its dependency array.

## B4 Lint verification
Count after fix: **1 violation**.

Full output:

```text
C:\Users\jonch\OneDrive\Documents\GitHub\jonchalant\.migration\inspect.cjs
  1:12  error  A `require()` style import is forbidden  @typescript-eslint/no-require-imports

✖ 1 problem (1 error, 0 warnings)
```

## C1 Route mapping
`PresenceCoach` is rendered through `PresenceCoachWidget` in `PortalShell`.

Mapping:
- `components/portal/PortalShell.tsx` mounts `<PresenceCoachWidget userId={userId} firstName={firstName} />`.
- `app/(portal)/layout.tsx` wraps portal pages in `<PortalShell ...>`.

Implication:
- PresenceCoach is available on authenticated portal pages under `/portal/*` (dashboard, tools, settings, lesson routes, four-circles routes) when `userId` and `firstName` are present.

## C2 Screenshot capture
Attempted route captures at 1280 and 375 widths for portal routes where the widget would appear when authenticated.

Routes attempted:
- `/portal`
- `/portal/settings`
- `/portal/presence-score`
- `/portal/tonality`
- `/portal/movement-plan`
- `/portal/four-circles`

Result:
- All unauthenticated visits redirected to login (`/login?redirect=...`).
- Captures saved successfully:
  - `design-work/ws53-baseline/presence-coach-portal-1280-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-375-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-settings-1280-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-settings-375-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-presence-score-1280-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-presence-score-375-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-tonality-1280-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-tonality-375-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-movement-plan-1280-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-movement-plan-375-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-four-circles-1280-unauthed.png`
  - `design-work/ws53-baseline/presence-coach-portal-four-circles-375-unauthed.png`

## C3 Manual verification spec
Authenticated verification required (user-side):

1. Sign in and open a portal route that renders the widget (for example `/portal/presence-score`).
2. Open PresenceCoach and test both submit paths that call `handleSubmit`:
   - Press Enter (without Shift) from textarea.
   - Click send button.
3. Confirm unchanged submit behavior:
   - User message appears immediately.
   - Assistant placeholder appears and streams token-by-token into a final assistant response.
   - Streaming state disables input/send while active.
   - Remaining-message counter updates from response header.
4. Confirm interaction edge cases remain intact:
   - Shift+Enter inserts newline (does not submit).
   - Empty/whitespace input does not submit.
   - On transient API error, assistant empty placeholder is removed and error row appears; Dismiss clears error.
   - If rate-limited (429), daily limit message appears and empty assistant placeholder is removed.

## D Final verification
- Lint: `npm run lint` -> **1 violation** (`.migration/inspect.cjs` only).
- Build: `npm run build` -> **PASS**.
- Typecheck: **PASS** (via Next build TypeScript step).

## Surprises
- No additional compiler-hook violations surfaced after removing manual memoization.
- Portal route captures consistently redirected to login in unauthenticated context, as expected for auth-gated pages.

## Git status at end
- Staged/unstaged/untracked status captured immediately before final staging:
  - `M components/portal/PresenceCoach.tsx`
  - `?? design-work/ws53-prompt3b-report.md`
  - `?? design-work/ws53-baseline/presence-coach-*-unauthed.png` (12 new files)
