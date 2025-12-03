---
name: Design Tokens Reference
description: Complete reference for Ushur Design System tokens including colors, typography, spacing, shadows, and radii. Use when implementing designs or auditing token usage.
---

# Ushur Design System - Design Tokens

## Color Tokens

### Semantic Text Colors (Foreground)

| Token | Light Mode | Usage |
|-------|------------|-------|
| `text-fg-primary` | gray-900 | Primary text, headings |
| `text-fg-secondary` | gray-700 | Secondary text, labels |
| `text-fg-tertiary` | gray-600 | Muted text, captions |
| `text-fg-quaternary` | gray-500 | Very muted text |
| `text-fg-disabled` | gray-500 | Disabled text |
| `text-fg-placeholder` | gray-500 | Input placeholders |
| `text-fg-brand-primary` | brand-900 | Brand accent text |
| `text-fg-brand-secondary` | brand-700 | Brand secondary text |
| `text-fg-error-primary` | error-600 | Error messages |
| `text-fg-warning-primary` | warning-600 | Warning messages |
| `text-fg-success-primary` | success-600 | Success messages |
| `text-text-primary_on-brand` | white | Text on brand backgrounds |

### Semantic Background Colors

| Token | Light Mode | Usage |
|-------|------------|-------|
| `bg-bg-primary` | white | Main background |
| `bg-bg-secondary` | gray-50 | Secondary/subtle background |
| `bg-bg-tertiary` | gray-100 | Tertiary background |
| `bg-bg-quaternary` | gray-200 | Heavy background |
| `bg-bg-disabled` | gray-100 | Disabled element background |
| `bg-bg-brand-solid` | brand-600 | Solid brand fill (buttons) |
| `bg-bg-brand-solid_hover` | brand-700 | Brand fill hover |
| `bg-bg-brand-primary` | brand-50 | Light brand background |
| `bg-bg-brand-secondary` | brand-100 | Secondary brand background |
| `bg-bg-error-primary` | error-50 | Error background |
| `bg-bg-error-solid` | error-600 | Solid error fill |
| `bg-bg-warning-primary` | warning-50 | Warning background |
| `bg-bg-success-primary` | success-50 | Success background |

### Semantic Border Colors

| Token | Light Mode | Usage |
|-------|------------|-------|
| `border-border-primary` | gray-300 | Default borders |
| `border-border-secondary` | gray-200 | Subtle borders |
| `border-border-tertiary` | gray-100 | Very subtle borders |
| `border-border-brand` | brand-500 | Brand accent borders |
| `border-border-error` | error-500 | Error state borders |
| `border-border-disabled` | gray-300 | Disabled borders |

### Brand Colors (Royal Blue)

| Token | Value |
|-------|-------|
| `brand-25` | #f5f9ff |
| `brand-50` | #ebf3ff |
| `brand-100` | #dbeefe |
| `brand-200` | #bfe2fe |
| `brand-300` | #92d1fe |
| `brand-400` | #5fb7fb |
| `brand-500` | #3a97f7 |
| `brand-600` | #2f80ed ⭐ Primary |
| `brand-700` | #1968d8 |
| `brand-800` | #1251b3 |
| `brand-900` | #0f3d8a |
| `brand-950` | #0a2754 |

## Typography

### Font Family

```css
--font-body: "Proxima Nova", -apple-system, "Segoe UI", "Inter", Roboto, Arial, sans-serif;
--font-display: "Proxima Nova", -apple-system, "Segoe UI", "Inter", Roboto, Arial, sans-serif;
--font-mono: ui-monospace, "Roboto Mono", SFMono-Regular, Menlo, Monaco, monospace;
```

### Text Sizes (Body)

| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 12px | 18px | Small labels, captions |
| `text-sm` | 14px | 20px | Body text, inputs |
| `text-md` | 16px | 24px | Default body |
| `text-lg` | 18px | 28px | Large body |
| `text-xl` | 20px | 30px | Emphasized text |

### Display Sizes (Headings)

| Class | Size | Line Height | Letter Spacing |
|-------|------|-------------|----------------|
| `text-display-xs` | 24px | 32px | 0 |
| `text-display-sm` | 30px | 38px | 0 |
| `text-display-md` | 36px | 44px | -0.72px |
| `text-display-lg` | 48px | 60px | -0.96px |
| `text-display-xl` | 60px | 72px | -1.2px |
| `text-display-2xl` | 72px | 90px | -1.44px |

### Font Weights

| Class | Weight |
|-------|--------|
| `font-light` | 300 |
| `font-normal` | 400 |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |

## Spacing (4px Grid)

| Class | Value |
|-------|-------|
| `p-0.5` / `gap-0.5` | 2px |
| `p-1` / `gap-1` | 4px |
| `p-1.5` / `gap-1.5` | 6px |
| `p-2` / `gap-2` | 8px |
| `p-2.5` / `gap-2.5` | 10px |
| `p-3` / `gap-3` | 12px |
| `p-3.5` / `gap-3.5` | 14px |
| `p-4` / `gap-4` | 16px |
| `p-5` / `gap-5` | 20px |
| `p-6` / `gap-6` | 24px |
| `p-8` / `gap-8` | 32px |
| `p-10` / `gap-10` | 40px |
| `p-12` / `gap-12` | 48px |
| `p-16` / `gap-16` | 64px |

## Border Radius

| Class | Value | Usage |
|-------|-------|-------|
| `rounded-none` | 0 | No radius |
| `rounded-xs` | 2px | Tiny elements |
| `rounded-sm` | 4px | Small elements |
| `rounded` | 4px | Default |
| `rounded-md` | 6px | Medium elements |
| `rounded-lg` | 8px | Buttons, inputs |
| `rounded-xl` | 12px | Cards, containers |
| `rounded-2xl` | 16px | Large containers |
| `rounded-3xl` | 24px | Hero sections |
| `rounded-full` | 9999px | Pills, avatars |

## Shadows

| Class | Usage |
|-------|-------|
| `shadow-xs` | Subtle elevation |
| `shadow-sm` | Light cards |
| `shadow-md` | Default cards |
| `shadow-lg` | Floating elements |
| `shadow-xl` | Modals |
| `shadow-2xl` | Popovers |
| `shadow-3xl` | Heavy elevation |

## Focus Ring

```css
focus:ring-2 focus:ring-focus-ring focus:ring-offset-2
```

The focus ring uses `--color-focus-ring: var(--color-brand-500)`.

## Dark Mode

All semantic tokens automatically switch in dark mode via the `.dark-mode` class. Components using semantic tokens will work without changes.

