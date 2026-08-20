# Jonchalant Design System

**Source:** [jmski/jonchalant@main](https://github.com/jmski/jonchalant) · Next.js 16 + React 19, CSS-first.

> **Status (2026-08-19).** The coaching business this system was originally built
> for has been retired, and the site is being rebuilt as a personal creative
> portfolio. The *visual* system below — color, type, shape, motion, layout,
> iconography — was deliberately kept and is still current. The *positioning,
> voice, and content* rules that used to live in this file went with the business
> and are archived in `coaching-archive/design-system/canonical-copy.md`.
>
> There is currently **no canonical copy source**. The redesign needs to
> establish one. Until then, treat this file as a visual reference only.
>
> Note that `design-system.html` and `design-system.png` still render coaching-era
> specimens (the four-pillar grid, old voice examples). Their swatches, type
> scale, and component anatomy remain accurate; their content examples do not.

---

## Index

- **`design-system.html`** — the full visual specimen (principles, color, type, shape, icons, components, patterns).
- **`tokens.css`** · **`fonts.css`** — drop-in CSS variables matching `app/css/variables.css`, and Fraunces + DM Sans.
- **`SKILL.md`** — rules and recipes for future work in this system.

---

## Four design principles

1. **Ikigai** — purpose-driven; every element earns its place. *(The word here is
   the Japanese design principle of purposeful placement — retained because it
   describes the visual discipline. It is unrelated to the retired ikigai
   assessment product.)*
2. **Kaizen** — subtlety over spectacle; polish shows on second look.
3. **Ma** — generous whitespace; sections use the upper half of the 4.5rem–11rem scale.
4. **Wabi-sabi** — a little warmth, never slick. Fraunces WONK italic, cream not bone.

---

## Visual foundations

**Color — one warm family, one cool whisper.**
Everything accentable pulls from the Mocha Mousse system (`--mocha-mousse #A47864`,
`--mocha-deep #6B4F3F`, `--mocha-mid #8C7264`, `--mocha-soft #D4B8A3`). Sage
(`#8A9A85`) is the only cool color, used sparingly for contrast. Warm amber
(`#B89A5F`) is reserved for status and highlight.

**Type.** Fraunces (variable `opsz` + `SOFT` + `WONK`) for headlines, DM Sans for
body, Monaco for code. Never Inter/Roboto/system sans. One italic anchor word per
headline, in Mocha — on dark surfaces, `--anchor-on-dark #E8C8B0` instead.

**Shape.** Small radii (0.375rem buttons/inputs, 0.5rem cards, 0.75rem reserved for
larger feature panels). Hairline borders. Shadows ceiling at
`0 4px 12px rgba(0,0,0,.06)` for standard cards.

**Motion.** All transitions `cubic-bezier(0.4, 0, 0.2, 1)` · 150/200/300/500ms
scale. Hover lifts 2px + soft mocha shadow. No bounces, no pulses, no scale >1.04×.

**Layout.** `SectionWrapper` variants `primary | secondary | tertiary | dark |
dark-mid`. Alternate cream and mocha — never stack three cream sections without a
break. One deepest-dark moment per page.

---

## Iconography

Lucide-style: 24×24 viewBox, **1.5px strokes**, round caps, round joins,
`currentColor`. Default stroke `--mocha-deep` on cream, `--text-white` on dark.
No emoji as UI. No filled glyphs.

---

## Sources

- Repo: `github.com/jmski/jonchalant` · `CLAUDE.md`
- Canonical tokens: `app/css/variables.css`
- Retired coaching copy and positioning: `coaching-archive/`
