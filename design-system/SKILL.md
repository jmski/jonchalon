# SKILL.md — Designing in the Jonchalant system

Use these rules for any page, component, or artifact.

> **Status (2026-08-19).** The coaching business was retired. The positioning
> section, the voice checklist, and the coaching-specific recipes (pillar card,
> Four Circles lesson row, the ikigai-first CTA rules) were removed from this file
> along with the product they described — see
> `coaching-archive/design-system/canonical-copy.md`. What remains is the visual
> and structural system, which was deliberately preserved.
>
> The site is being rebuilt as a personal creative portfolio. There is currently
> no canonical copy source or voice guide; the redesign needs to write one.
> Until then, do not invent coaching-adjacent language to fill the gap.

## Visual non-negotiables

- **Light mode only.** No dark-mode variants.
- **Cream page background** (`--bg-primary #F4EBE0`). `#FFFFFF` is card-surface only.
- **Mocha accent only.** Every accent comes from the Mocha Mousse family. Sage is
  the rare second voice. Warm amber is reserved (status/highlight).
- **Fraunces + DM Sans.** Never Inter, Roboto, system sans.
- **No emoji as UI.** No emoji in buttons, badges, nav, CTAs, card icons.
- **No gradient hero bodies.** Hero gets soft radial mocha orbs instead.
- **No utility-class walls.** Only `text-*`, `font-*`, `leading-*`, and
  `sm:/md:/lg:` responsive prefixes. Complex styling → named BEM class in the
  right CSS layer.
- **Standard breakpoints only:** 640 · 768 · 1024. No 480/560/960.

## Recipes

### Marketing hero
```
Eyebrow (DM Sans, uppercase, mocha-deep)
  ↓
Headline (Fraunces 400, opsz 144, one italic anchor word in Mocha)
  ↓
One-to-two-sentence subhead (DM Sans, 1.0625rem, text-secondary)
  ↓
Primary CTA (solid mocha)  ·  Secondary CTA (transparent + hairline)
```

### Kinetic typography moment
One per page, max. It's an argument line, not decoration — the held-breath moment
where stillness is the point. Use `KineticMoment` wrapping a `.jc-kinetic` block;
do not extend the component with new motion variants.

### Card anatomy
- 1.75rem padding (2rem on wider cards).
- 1px `--border-color` or `--border-subtle`.
- Radius 0.5rem (0.75rem for larger feature panels only).
- Hover: +2px lift, mocha shadow `0 4px 16px rgba(164, 120, 100, 0.1)`.

### Buttons
- Primary: solid mocha, white text, uppercase, letter-spacing 0.06em.
- Secondary: transparent, 1px border, primary text. Hover → faint mocha tint.
- Tertiary: inline text link with underline-on-hover. No "button" chrome.

### Forms
- 1.5px border `--border-color`, cream-secondary fill.
- Focus: mocha border + 3px halo at 12% mocha.
- Minimum 44px hit area. `font-size: 16px` on mobile inputs (prevents iOS zoom).

## When inventing new things

- Design to match existing primitives first. Look for the closest analog in
  `sections.css` / `cards.css` / `components.css`.
- New colors come from `color-mix()` of existing tokens — never fresh hex.
- If mocha doesn't work, reach for sage — never teal, indigo, or any bright hue.
- New motion uses the four-step bezier timing.

## CSS rules (from repo)

- No `!important`. Fix specificity/cascade instead.
- No new CSS files — **12 files exist (9 system + 3 page-scoped)**. Add to the
  right one. (Six page-scoped files were deleted with the coaching routes.)
- No inline styles except truly dynamic values.
- Always use CSS variables for colors — never hardcode hex in page-scoped CSS.
- BEM-inspired kebab-case naming: `.section-name`, `.section-name-header`,
  `.section-name-title`.
- Component name rule: no "Section" suffix (`Hero` not `HeroSection`).
- The system CSS files still contain rules for deleted coaching sections. Dead
  selectors there are not live patterns — don't copy them.

## Content guardrails

- One message per section. Don't stack two competing CTAs.
- CTAs name the commitment, not the mechanic: *Read the essay* beats *Learn more*.
- Specific over general — named situations, concrete numbers, sensory detail.
- Honest about tradeoffs — name what something *isn't* as clearly as what it *is*.

## Last check before shipping

1. Any hexes not in `tokens.css`? Fix or add tokens intentionally.
2. Hero anchor word italic + mocha (or `--anchor-on-dark` on dark)? It should be.
3. One kinetic typography line per page, max? Good.
4. Every card padded ≥1.5rem with a 2px hover lift? Good.
5. Any retired coaching language crept in? Cut it.
6. Can the user breathe? If the section feels crowded, delete something.
