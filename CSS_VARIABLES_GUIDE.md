# CSS Variables System Guide

## Overview

All colors, spacing, shadows, and typography are now centralized in CSS custom properties (`globals.css`). This enables **one-place theme management** — change a variable once and it propagates across the entire application.

## Text Color Variables

Use these variables for all text elements:

- `--text-heading`: Primary headings and large text (currently `#f5f1ed` light off-white)
- `--text-body`: Body paragraphs and main content (currently `#f5f1ed`)
- `--text-secondary`: Secondary text, descriptions (currently `#d4a574` warm gold)
- `--text-accent`: Primary accent text (currently `#ff6b35` vibrant orange)
- `--text-accent-bright`: Highlighted/important text (currently `#fde047` bright yellow)
- `--text-accent-secondary`: Secondary accent for variety (currently `#fb923c` burnt orange)
- `--text-light`: Light text on dark backgrounds (currently `#f5f1ed`)
- `--text-muted`: Subtle text, hints, captions (currently `#a8978f` muted warm)
- `--text-white`: Pure white text (currently `#ffffff`)
- `--text-error`: Error messages (currently `#ef4444` red)

### Usage Examples

```tsx
// In TypeScript/TSX components:
<p style={{ color: 'var(--text-secondary)' }}>Secondary text</p>
<h3 style={{ color: 'var(--text-accent-bright)' }}>Important heading</h3>

// In CSS:
.my-class {
  color: var(--text-body);
}
```

## Background Color Variables

Use these for all background/section colors:

- `--bg-primary`: Main background (currently `#0a0e27` dark navy)
- `--bg-secondary`: Secondary/accent sections (currently `#1a1f3a` lighter navy)
- `--card-bg`: Card/container backgrounds (currently `#1a1f3a`)
- `--bg-muted`: Subtle backgrounds, hover states (currently `#0f172a` deepest navy)
- `--bg-light`: Light mode fallback (currently `#f5f1ed` off-white)
- `--bg-hover`: Hover state backgrounds (currently `rgba(212, 165, 116, 0.1)`)

### Usage Examples

```tsx
<section style={{ backgroundColor: 'var(--bg-primary)' }}>
  <div style={{ backgroundColor: 'var(--card-bg)' }}>
    Content
  </div>
</section>

// Light mode CSS query:
@media (prefers-color-scheme: light) {
  :root {
    --bg-primary: #f5f1ed;
    --bg-secondary: #fdfbf8;
  }
}
```

## Border & Shadow Variables

For consistent borders and depth:

- `--border-color`: Default borders (currently `#334155` muted slate)
- `--border-subtle`: Subtle divider borders (currently `#1e293b` dark slate)
- `--border-muted`: Very subtle borders (currently `#0f172a`)
- `--border-accent`: Accent-colored borders (currently `#d4a574` warm gold)
- `--border-secondary`: Secondary accent borders (currently `#ff6b35` orange)

Shadows:

- `--shadow-sm`: Small subtle shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--shadow-accent-sm`: Small shadow with accent glow
- `--shadow-accent-lg`: Large shadow with accent glow

### Usage Examples

```tsx
<div
  style={{
    borderColor: 'var(--border-accent)',
    boxShadow: 'var(--shadow-accent-lg)',
  }}
>
  Accent border with glow
</div>
```

## Button & Form Variables

Pre-styled button and form input colors:

**Primary Button:**
- `--btn-primary-bg`: Background (currently `linear-gradient(135deg, #d4a574, #ff6b35)`)
- `--btn-primary-text`: Text color (currently `#ffffff`)
- `--btn-primary-hover`: Hover state background

**Secondary Button:**
- `--btn-secondary-bg`: Background (currently transparent)
- `--btn-secondary-text`: Text color (currently `#d4a574`)
- `--btn-secondary-border`: Border color
- `--btn-secondary-hover-text`: Hover text color (currently `#ff6b35`)
- `--btn-secondary-hover-border`: Hover border color

**Form Inputs:**
- `--form-input-bg`: Input background (currently `#1a1f3a`)
- `--form-input-border`: Input border (currently `#334155`)
- `--form-input-text`: Input text color (currently `#f5f1ed`)
- `--form-input-placeholder`: Placeholder text (currently `#a8978f`)
- `--form-input-focus-border`: Focus border (currently `#d4a574`)

### Usage Examples

```tsx
<button className="btn-primary-base">Save</button>
<button className="btn-secondary-base">Cancel</button>

<input
  style={{
    backgroundColor: 'var(--form-input-bg)',
    borderColor: 'var(--form-input-border)',
    color: 'var(--form-input-text)',
  }}
/>
```

## Pre-built Utility Classes

Ready-to-use classes combining multiple variables:

```tsx
// Text utilities
<p className="text-heading">Heading text</p>
<p className="text-body">Body text</p>
<p className="text-secondary">Secondary text</p>
<span className="text-accent">Accent text</span>

// Background utilities
<section className="bg-primary">Primary bg</section>
<div className="bg-secondary">Secondary bg</div>
<div className="bg-card">Card background</div>

// Border utilities
<div className="border-subtle">Subtle border</div>
<div className="border-accent">Accent border</div>

// Gradient text (for headings)
<h1 className="text-gradient-heading">Gradient heading</h1>

// Buttons
<button className="btn-primary-base">Primary Button</button>
<button className="btn-secondary-base">Secondary Button</button>

// Badge/tag styling
<span className="badge">Badge label</span>
```

## Color Palette Reference

**Dark Theme (Default):**
- Primary: `#0a0e27` (dark navy)
- Secondary: `#1a1f3a` (lighter navy)
- Accent Primary: `#d4a574` (warm gold)
- Accent Secondary: `#ff6b35` (vibrant orange)
- Text Light: `#f5f1ed` (off-white)
- Border: `#334155` (muted slate)

**Light Theme (Fallback):**
- Primary: `#f5f1ed` (off-white)
- Secondary: `#fdfbf8` (lighter off-white)
- Accent: `#2563eb` (professional blue - can be customized)
- Text: `#0a0e27` (dark navy)

## Changing the Theme

To change the color scheme globally:

1. Open `app/globals.css`
2. Find the `:root` block at the top
3. Modify the CSS custom properties, e.g.:

```css
:root {
  --bg-primary: #your-new-color;
  --text-accent: #your-accent-color;
  /* ... etc ... */
}
```

4. All components automatically use the new colors!

### Example: Switch to a Purple + Cyan Theme

```css
:root {
  /* ... keep other variables ... */
  --text-accent: #06b6d4; /* cyan */
  --text-accent-bright: #a78bfa; /* light purple */
  --border-accent: #7c3aed; /* purple */
  --btn-primary-bg: linear-gradient(135deg, #7c3aed, #06b6d4);
}
```

## Component Integration

All major components now use CSS variables:

- **Hero.tsx** - Headline, subheadline, CTA button colors
- **Navbar.tsx** - Navigation links, logo gradient
- **PortfolioCard.tsx** - Card title, description text colors
- **CTASection.tsx** - Border and text colors
- **StatsSection.tsx** - Platform stats text colors
- **FloatingElements.tsx** - Gradient overlays
- **All 7 pages** - Section backgrounds, heading colors

## Best Practices

1. **Always use variables for colors** - Never hardcode hex values or Tailwind color classes for semantic colors
2. **Use semantic names** - `var(--text-body)` is clearer than `var(--color-gray-200)`
3. **Group related variables** - Text colors, backgrounds, buttons each have their section
4. **Test both themes** - Check light mode fallback by enabling `prefers-color-scheme: light` in DevTools
5. **Maintain contrast** - Ensure text meets WCAG AA standards (4.5:1 for small text)

## Troubleshooting

### Color not updating?
- Check that you're using the CSS variable (e.g., `style={{ color: 'var(--text-body)' }}`)
- Verify the variable name is correct in `globals.css`
- Clear browser cache or do a hard refresh (Ctrl+Shift+R)

### Variable undefined error?
- Make sure `globals.css` is imported in `app/layout.tsx`
- Check that `:root` block has the variable defined before `@media (prefers-color-scheme: light)`

### Custom color not appearing?
- Variables are case-sensitive: `--text-Body` ≠ `--text-body`
- Ensure `var()` syntax is used: `style={{ color: 'var(--text-body)' }}`
- Rebuild the app: `npm run build`

## Resources

- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) 
- [Tailwind CSS Custom Properties](https://tailwindcss.com/docs/customizing-colors)
- [WCAG Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Last Updated:** Current session  
**Maintained By:** Design System Team
