---
name: Figma to Code Workflow
description: Step-by-step process for implementing Figma designs as React components. Includes property mapping, token conversion, and quality validation.
---

# Figma to Code Workflow

Follow this process when implementing designs from Figma.

## Step 1: Extract Design Information

Use Figma MCP tools to gather design context:

```
1. get_design_context(nodeId) - Get component structure
2. get_screenshot(nodeId) - Visual reference
3. get_variable_defs(nodeId) - Design token mappings
4. get_metadata(nodeId) - Layer structure
```

### Getting the Node ID

From a Figma URL like:
```
https://figma.com/design/abc123/FileName?node-id=123-456
```

The nodeId is `123:456` (replace `-` with `:`)

## Step 2: Analyze Design Properties

### Layout Properties

| Figma | Tailwind |
|-------|----------|
| Auto layout horizontal | `flex flex-row` |
| Auto layout vertical | `flex flex-col` |
| Gap: 16 | `gap-4` |
| Padding: 16 | `p-4` |
| Padding: 16, 24 | `py-4 px-6` |
| Alignment: center | `items-center justify-center` |

### Sizing

| Figma | Tailwind |
|-------|----------|
| Fixed width: 200px | `w-[200px]` or `w-50` |
| Fill container | `flex-1` or `w-full` |
| Hug contents | `w-fit` |
| Min width: 100px | `min-w-[100px]` |
| Max width: 400px | `max-w-[400px]` |

### Typography

| Figma Property | Tailwind |
|----------------|----------|
| Font size: 14px | `text-sm` |
| Font size: 16px | `text-md` |
| Font weight: 400 | `font-normal` |
| Font weight: 500 | `font-medium` |
| Font weight: 600 | `font-semibold` |
| Line height: 20px | `leading-5` |
| Letter spacing: -0.5px | `tracking-tight` |

### Colors (Ushur Tokens)

| Figma Style | CSS Token | Tailwind |
|-------------|-----------|----------|
| text-900 | --color-text-primary | `text-fg-primary` |
| text-700 | --color-text-secondary | `text-fg-secondary` |
| text-500 | --color-text-tertiary | `text-fg-tertiary` |
| bg-white | --color-bg-primary | `bg-bg-primary` |
| bg-1 | --color-bg-secondary | `bg-bg-secondary` |
| royal blue-600 | --color-brand-600 | `bg-bg-brand-solid` |
| outline-default | --color-border-primary | `border-border-primary` |

### Effects

| Figma Effect | Tailwind |
|--------------|----------|
| Drop shadow (sm) | `shadow-sm` |
| Drop shadow (md) | `shadow-md` |
| Border radius: 8px | `rounded-lg` |
| Border radius: 12px | `rounded-xl` |
| Border: 1px | `border` |
| Opacity: 50% | `opacity-50` |

## Step 3: Create Component Structure

```tsx
// 1. Define the props interface based on Figma variants
interface ComponentProps {
    variant?: "primary" | "secondary";  // From Figma variants
    size?: "sm" | "md" | "lg";          // From Figma size options
    state?: "default" | "hover" | "disabled";
}

// 2. Map Figma structure to JSX
export const Component = ({ variant, size }: ComponentProps) => (
    <div className={cx(
        // Base styles (from Figma auto layout)
        "flex items-center gap-2 px-4 py-2",
        
        // Variant styles (from Figma variants)
        variant === "primary" && "bg-bg-brand-solid text-text-primary_on-brand",
        variant === "secondary" && "bg-bg-primary border border-border-primary",
        
        // Size styles (from Figma size variants)
        size === "sm" && "h-9 text-sm",
        size === "md" && "h-10 text-sm",
        size === "lg" && "h-11 text-md",
    )}>
        {/* Children based on Figma layer structure */}
    </div>
);
```

## Step 4: Handle Interactive States

Map Figma component states to React/Tailwind:

```tsx
// Hover state
className="hover:bg-bg-secondary_hover"

// Focus state
className="focus-visible:ring-2 focus-visible:ring-focus-ring"

// Active/Pressed state
className="active:bg-bg-tertiary"

// Disabled state
className="disabled:opacity-50 disabled:cursor-not-allowed"

// Selected state (for toggles, tabs)
className="data-[selected]:bg-bg-brand-solid"
```

## Step 5: Implement Responsiveness

If Figma has responsive variants:

```tsx
className={cx(
    // Mobile first (default)
    "flex-col gap-4 p-4",
    
    // Tablet and up
    "md:flex-row md:gap-6 md:p-6",
    
    // Desktop and up
    "lg:gap-8 lg:p-8"
)}
```

## Step 6: Quality Validation

### Visual Checklist

- [ ] Spacing matches Figma (within 1-2px)
- [ ] Typography matches (font, size, weight, color)
- [ ] Colors use correct semantic tokens
- [ ] Border radius matches
- [ ] Shadows match
- [ ] Icons are correct size and color

### Functional Checklist

- [ ] All interactive states work
- [ ] Keyboard navigation functional
- [ ] Accessibility requirements met
- [ ] Component is responsive

### Token Compliance

- [ ] No hardcoded colors
- [ ] No hardcoded spacing (use Tailwind scale)
- [ ] Uses semantic tokens not utility colors

## Common Figma → Tailwind Patterns

### Card Pattern
```
Figma: Rectangle with auto-layout, padding 24, radius 12, shadow
Tailwind: "bg-bg-primary rounded-xl p-6 shadow-md"
```

### Button Pattern
```
Figma: Frame with horizontal auto-layout, gap 8, padding 12 20, radius 8
Tailwind: "flex items-center gap-2 px-5 py-3 rounded-lg"
```

### Input Pattern
```
Figma: Frame with border 1px, radius 8, padding 10 14, height 40
Tailwind: "h-10 px-3.5 py-2.5 rounded-lg border border-border-primary"
```

### Icon + Text Pattern
```
Figma: Frame horizontal, gap 8, items center
Tailwind: "flex items-center gap-2"
```

