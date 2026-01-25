# Design System Reference

## CSS Custom Properties

Located in `app/globals.css`:

```css
:root {
  --background: #e8f4f8;
  --foreground: #2c3e50;
  --pokemon-red: #ff2d2a;
  --pokemon-yellow: #ffde00;
  --pokemon-blue: #0071be;
}
```

## Reusable Classes

### `.pokemon-card`

**Use:** All content cards, modals

```css
border: 3px solid var(--pokemon-red);
border-radius: 12px;
box-shadow:
  0 4px 0 var(--pokemon-red),
  0 6px 8px rgba(0, 0, 0, 0.2);
transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
```

**Hover Effect:**

```css
transform: scale(1.05) translateY(-4px);
box-shadow:
  0 6px 0 var(--pokemon-red),
  0 12px 16px rgba(0, 0, 0, 0.3);
```

### `.pokemon-button`

**Use:** Primary CTAs

```css
background: linear-gradient(to bottom, var(--pokemon-yellow), #ffcc00);
color: #000;
border: 3px solid var(--pokemon-red);
border-radius: 8px;
box-shadow: 0 4px 0 var(--pokemon-red);
```

**Active State:**

```css
transform: translateY(2px);
box-shadow: 0 2px 0 var(--pokemon-red);
```

### `.pokemon-badge`

**Use:** Tech stack, tags

```css
background: var(--pokemon-red);
color: white;
padding: 4px 12px;
border-radius: 20px;
border: 2px solid #000;
```

## Component Variations

### Color Gradients

```tsx
// Red (Hero)
from-red-400 to-red-500 dark:from-red-700 dark:to-red-800

// Purple/Pink (Featured)
from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700

// Blue (Cards)
from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800

// Yellow (Header)
from-yellow-300 to-yellow-400 dark:from-yellow-700 dark:to-yellow-800

// Navigation
from-red-500 to-blue-500 dark:from-red-700 dark:to-blue-700
```

### Text Effects

**Drop Shadow Effect:**

```tsx
drop-shadow-lg
style={{ textShadow: '2px 2px 0px #000' }}
```

**Outline Text (for contrast):**

```tsx
style={{ textShadow: '2px 2px 0px #fff' }}
```

### Size Scale

| Element       | Size        | Font Weight  |
| ------------- | ----------- | ------------ |
| Page Title    | `text-5xl`  | `font-black` |
| Section Title | `text-3xl`  | `font-black` |
| Card Title    | `text-lg`   | `font-black` |
| Body Text     | `text-base` | `font-bold`  |
| Small Text    | `text-sm`   | `font-bold`  |
| Tiny Text     | `text-xs`   | `font-bold`  |

## Spacing System

```tsx
// Cards
p - 6; // Internal padding
p - 8; // Large cards

// Gap between elements
gap - 4; // Default spacing
gap - 6; // Larger spacing
gap - 8; // Maximum spacing

// Margin
mb - 3; // Spacing below headings
mb - 4; // Spacing below sections
mb - 6; // Large spacing
mt - 2; // Top margin for text
mt - 4; // Top margin for blocks
```

## Animation Timings

| Element         | Timing | Easing                            |
| --------------- | ------ | --------------------------------- |
| Card Hover      | 0.3s   | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Button Press    | 0.1s   | instant                           |
| Scale Transform | 1.05x  | spring-like                       |
| Opacity         | 0.3s   | ease-in-out                       |

## Dark Mode Implementation

All components support dark mode using Tailwind's `dark:` prefix:

```tsx
// Light mode text
text-black dark:text-white

// Light mode background
bg-blue-100 dark:bg-blue-900

// Light mode borders
border-gray-900 dark:border-white

// Light mode shadows
shadow-lg dark:shadow-xl
```

## Responsive Breakpoints

```tsx
// Mobile first
grid-cols-1        // Mobile (1 column)
sm:grid-cols-2     // Small (2 columns)
lg:grid-cols-3     // Large (3 columns)

// Text sizes
text-lg            // Mobile
lg:text-3xl        // Large screens
```

## Component Usage Examples

### Card with Expand

```tsx
import Card from "@/components/Card";

<Card
  title="Design"
  description="Beautiful UI/UX"
  expandedContent="Detailed information here..."
/>;
```

### Button

```tsx
<button className="pokemon-button">CLICK ME ▶</button>
```

### Badge/Tag

```tsx
<span className="pokemon-badge">React</span>
<span className="pokemon-badge">TypeScript</span>
```

### Hero Section

```tsx
<div className="pokemon-card bg-gradient-to-br from-red-400 to-red-500 p-8 text-white">
  <h1 className="text-4xl font-black drop-shadow-lg">⭐ TITLE ⭐</h1>
</div>
```

## Best Practices

1. **Always use `pokemon-card` class** for consistent styling
2. **Text should be `font-bold` minimum** for readability
3. **Use drop shadows** on text over images for contrast
4. **Include emojis** (⭐, 🎮, etc.) for visual interest
5. **Use gradients** for large sections and cards
6. **Maintain 3px borders** on interactive elements
7. **Ensure sufficient color contrast** for accessibility
8. **Test dark mode** on all new components

## Color Combinations (Recommended)

| Card Type | Background        | Text Color | Border |
| --------- | ----------------- | ---------- | ------ |
| Info      | Blue-100          | Blue-900   | Red    |
| Feature   | Purple/Pink       | White      | Red    |
| Hero      | Red gradient      | White      | Red    |
| CTA       | Yellow gradient   | Black      | Red    |
| Nav       | Red→Blue gradient | White      | Black  |
| Success   | Green-100         | Green-900  | Green  |
| Alert     | Red-100           | Red-900    | Red    |

---

Use this guide when creating new components or pages! 🎮✨
