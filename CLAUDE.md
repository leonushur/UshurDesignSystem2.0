# Ushur Design System - Project Rules

This file provides context and rules for AI assistants working on the Ushur Design System.

## Project Overview

The Ushur Design System is a comprehensive React component library built with:
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Storybook 10** - Component documentation and development
- **Tailwind CSS 4** - Utility-first styling with custom design tokens
- **React Aria Components** - Accessible component primitives
- **Vite 7** - Build tool
- **Vitest + Playwright** - Testing framework

## Quick Start

```bash
# Install dependencies
bun install

# Start Storybook development
npm run storybook

# Build Storybook
npm run build-storybook

# Start Vite dev server
npm run dev
```

**Storybook runs on port 6006**: http://localhost:6006

## Directory Structure

```
src/
├── components/
│   ├── application/     # App-level patterns (nav, modals, tables, pagination)
│   ├── base/           # Primitives (buttons, inputs, forms, selects)
│   ├── foundations/    # Visual elements (icons, logos, rating stars)
│   ├── marketing/      # Marketing sections (headers, CTAs, testimonials)
│   └── shared-assets/  # Backgrounds, illustrations
├── hooks/              # useBreakpoint, useClipboard, useResizeObserver
├── styles/             # theme.css, globals.css, typography.css
└── utils/              # cx (class merger), isReactComponent
```

## Design System Rules

### 1. Always Use Semantic Tokens

**DO:**
```tsx
<div className="text-fg-primary bg-bg-secondary border-border-primary">
```

**DON'T:**
```tsx
<div className="text-gray-900 bg-gray-50 border-gray-300">
<div style={{ color: '#191919' }}>
```

### 2. Token Reference

**Text Colors:** `text-fg-{primary|secondary|tertiary|disabled|brand-*|error-*}`
**Backgrounds:** `bg-bg-{primary|secondary|tertiary|brand-*|error-*|success-*}`
**Borders:** `border-border-{primary|secondary|brand|error|disabled}`
**Foregrounds:** `text-{fg-*}` for icons and interactive elements

### 3. Typography Scale

Use Tailwind text sizes:
- Body: `text-xs`, `text-sm`, `text-md`, `text-lg`, `text-xl`
- Display: `text-display-xs` through `text-display-2xl`

### 4. Spacing

Follow the 4px grid using Tailwind spacing:
- `p-1` = 4px, `p-2` = 8px, `p-3` = 12px, `p-4` = 16px, etc.
- Use `gap-*` for flex/grid spacing

### 5. Shadows

Use semantic shadows: `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`

### 6. Border Radius

- Default: `rounded-md` (6px)
- Buttons: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px)
- Pills/Avatars: `rounded-full`

## Component Patterns

### Creating a New Component

1. Create component file: `src/components/{category}/{name}/{name}.tsx`
2. Create stories file: `src/components/{category}/{name}/{name}.stories.tsx`
3. Export from index: `src/components/{category}/{name}/index.ts`

### Story File Template

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./component-name";

type ComponentStory = StoryObj<typeof ComponentName>;

const meta: Meta<typeof ComponentName> = {
    title: "Components/Category/ComponentName",
    component: ComponentName,
    tags: ["autodocs"],
    parameters: { layout: "padded" },
};

export default meta;

export const Default: ComponentStory = {
    args: { /* default props */ },
};
```

### Using the cx Utility

```tsx
import { cx } from "@/utils/cx";

const Button = ({ variant, className }) => (
    <button className={cx(
        "base-classes",
        variant === "primary" && "primary-classes",
        className
    )} />
);
```

## React Aria Components

This project uses React Aria for accessible components. When creating interactive elements:

```tsx
import { Button } from "react-aria-components";

// Use onPress instead of onClick
<Button onPress={handleClick}>Click me</Button>
```

## Accessibility Requirements

- All interactive elements must be keyboard accessible
- Use semantic HTML elements
- Provide aria-labels for icon-only buttons
- Ensure 4.5:1 color contrast ratio for text
- Focus states must be visible (using `ring-*` utilities)

## Available Agents

Use `/agents` in Claude Code to access specialized agents:

- **storybook-creator** - Create new components and stories
- **storybook-tester** - Test components visually and functionally
- **figma-implementer** - Translate Figma designs to code
- **design-system-auditor** - Audit for consistency and compliance
- **code-reviewer** - Review code quality and best practices
- **codebase-explorer** - Fast search and navigation

## Key Configuration Files

- `src/styles/theme.css` - All design tokens and CSS variables
- `design-tokens.tokens.json` - Figma-exported design tokens
- `figma-export.json` - Full Figma component data
- `vite.config.ts` - Vite and Storybook configuration

## Testing

```bash
# Run Vitest tests
npm test

# Run with UI
npm test -- --ui

# Run Storybook visual tests (requires Storybook running)
npm run test-storybook
```

## Common Commands

```bash
npm run storybook      # Start Storybook on :6006
npm run dev            # Start Vite on :5173
npm run build          # Production build
npm run build-storybook # Build static Storybook
```

