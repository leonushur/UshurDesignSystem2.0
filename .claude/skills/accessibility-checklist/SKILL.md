---
name: Accessibility Checklist
description: WCAG 2.1 AA compliance checklist for Ushur Design System components. Use when creating or reviewing components for accessibility requirements.
---

# Accessibility Checklist

Use this checklist to ensure components meet WCAG 2.1 AA standards.

## Keyboard Navigation

- [ ] **Tab order** - All interactive elements are reachable via Tab key
- [ ] **Focus visible** - Focus indicator is clearly visible on all interactive elements
- [ ] **No keyboard trap** - Users can navigate away from any element
- [ ] **Skip links** - Page-level skip navigation (for page components)
- [ ] **Arrow keys** - Composite widgets support arrow key navigation
- [ ] **Escape** - Overlays/modals close on Escape key

### Implementation

```tsx
// Focus ring utilities
className="focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2"

// Using React Aria (handles keyboard automatically)
import { Button } from "react-aria-components";
<Button onPress={handleClick}>Click me</Button>
```

## Screen Reader Support

- [ ] **Accessible name** - All interactive elements have accessible names
- [ ] **Roles** - Correct ARIA roles for custom widgets
- [ ] **States** - Dynamic states announced (aria-expanded, aria-pressed, etc.)
- [ ] **Live regions** - Status messages use aria-live
- [ ] **Landmarks** - Page sections use appropriate landmarks
- [ ] **Headings** - Proper heading hierarchy (h1-h6)

### Implementation

```tsx
// Icon-only button needs aria-label
<Button aria-label="Close dialog" onPress={onClose}>
    <XIcon />
</Button>

// Live region for status updates
<div aria-live="polite" aria-atomic="true">
    {statusMessage}
</div>

// Expanded state for disclosure
<Button aria-expanded={isOpen} aria-controls="panel-id">
    Toggle
</Button>
```

## Color & Contrast

- [ ] **Text contrast** - 4.5:1 minimum for normal text
- [ ] **Large text contrast** - 3:1 minimum for text 18px+ or 14px+ bold
- [ ] **UI contrast** - 3:1 for UI components and graphical objects
- [ ] **Not color alone** - Information not conveyed by color alone
- [ ] **Focus contrast** - Focus indicator has 3:1 contrast

### Color Contrast Ratios

| Foreground | Background | Ratio | Pass? |
|------------|------------|-------|-------|
| fg-primary (gray-900) | bg-primary (white) | 16:1 | ✅ |
| fg-secondary (gray-700) | bg-primary (white) | 9.5:1 | ✅ |
| fg-tertiary (gray-600) | bg-primary (white) | 5.7:1 | ✅ |
| brand-600 | white | 4.5:1 | ✅ |
| white | brand-600 | 4.5:1 | ✅ |
| error-600 | white | 4.5:1 | ✅ |

## Touch Targets

- [ ] **Size** - Minimum 44x44px touch target
- [ ] **Spacing** - Adequate spacing between targets (at least 8px)

### Implementation

```tsx
// Minimum height for buttons
className="h-10 min-w-[44px] px-4"  // 40px height with padding makes 44px target

// Icon buttons need explicit size
className="size-11"  // 44px
```

## Form Accessibility

- [ ] **Labels** - All inputs have associated labels
- [ ] **Required** - Required fields indicated (aria-required)
- [ ] **Errors** - Errors associated with inputs (aria-describedby)
- [ ] **Instructions** - Help text associated with inputs
- [ ] **Autocomplete** - Appropriate autocomplete attributes

### Implementation

```tsx
import { TextField, Label, Input, Text } from "react-aria-components";

<TextField isRequired isInvalid={hasError}>
    <Label>Email address</Label>
    <Input type="email" autoComplete="email" />
    {hasError && (
        <Text slot="errorMessage">Please enter a valid email</Text>
    )}
    <Text slot="description">We'll never share your email</Text>
</TextField>
```

## Images & Media

- [ ] **Alt text** - Meaningful images have alt text
- [ ] **Decorative** - Decorative images have empty alt=""
- [ ] **Icons** - Icons in buttons have aria-hidden="true" when label present

### Implementation

```tsx
// Meaningful image
<img src="profile.jpg" alt="Jane Doe, Product Designer" />

// Decorative image
<img src="decoration.svg" alt="" aria-hidden="true" />

// Icon with label - icon is decorative
<Button>
    <StarIcon aria-hidden="true" />
    <span>Add to favorites</span>
</Button>

// Icon-only - needs aria-label
<Button aria-label="Add to favorites">
    <StarIcon aria-hidden="true" />
</Button>
```

## Motion & Animation

- [ ] **Reduced motion** - Respect prefers-reduced-motion
- [ ] **No auto-play** - No auto-playing media
- [ ] **Pause controls** - Animations can be paused

### Implementation

```tsx
// Using Motion library with reduced motion
import { motion } from "motion/react";

<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
        duration: 0.2,
        // Motion library respects prefers-reduced-motion by default
    }}
/>

// CSS approach
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

## React Aria Components

React Aria handles most accessibility automatically:

| Component | Built-in A11y |
|-----------|---------------|
| Button | Focus management, keyboard support |
| TextField | Label association, error linking |
| Select | Listbox pattern, arrow keys |
| Modal | Focus trap, Escape to close |
| Tooltip | ID association, timing |
| Menu | Menu pattern, arrow keys |
| Tabs | Tab pattern, arrow keys |

## Testing Tools

1. **Keyboard only** - Navigate without mouse
2. **Screen reader** - Test with VoiceOver (Mac) or NVDA (Windows)
3. **Storybook a11y addon** - Automatic axe-core checks
4. **Color contrast checker** - WebAIM or browser devtools
5. **Zoom test** - 200% zoom without horizontal scroll

