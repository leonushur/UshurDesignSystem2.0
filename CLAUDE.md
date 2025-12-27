# Ushur Design System

> A comprehensive React component library with 106 stories, 9 AI agents, and full Storybook documentation.

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook on http://localhost:6006 |
| `npm run build-storybook` | Build static Storybook |
| `npm run dev` | Start Vite dev server on :5173 |
| `npx tsc --noEmit` | Type check without building |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI Framework |
| TypeScript | 5.x | Type Safety |
| Storybook | 10 | Component Documentation |
| Tailwind CSS | 4 | Styling with Design Tokens |
| React Aria | Latest | Accessible Primitives |
| Vite | 7 | Build Tool |
| Playwright | 1.57 | Browser Testing |

---

## Project Structure

```
src/
├── components/
│   ├── primitives/      # Atomic building blocks
│   ├── application/     # App patterns (nav, modals, tables)
│   ├── base/            # Core components (buttons, inputs)
│   ├── foundations/     # Icons, logos, visual elements
│   ├── marketing/       # Marketing sections
│   └── shared-assets/   # Backgrounds, illustrations
├── hooks/               # Custom React hooks
├── styles/              # Theme, globals, typography
└── utils/               # Utilities (cx, isReactComponent)
```

---

## AI Agents

This project uses 9 specialized AI agents for autonomous development.

### Agent Roster

| Agent | Model | Trigger Phrases |
|-------|-------|-----------------|
| `storybook-creator` | Sonnet | "create component", "add stories" |
| `storybook-tester` | Sonnet | "test component", "verify stories" |
| `storybook-monitor` | Haiku | "storybook status", "start storybook" |
| `figma-implementer` | Sonnet | "implement Figma", "convert design" |
| `design-system-auditor` | Sonnet | "audit tokens", "check compliance" |
| `code-reviewer` | Sonnet | "review code", "check quality" |
| `codebase-explorer` | Haiku | "find", "search", "where is" |
| `browser-debugger` | Sonnet | "console error", "debug browser" |
| `vercel-deployment-verifier` | Sonnet | "deployment failed", "build error" |

### Workflow Chains

```
Component Creation:
  storybook-creator → design-system-auditor → storybook-tester → code-reviewer

Figma Implementation:
  figma-implementer → storybook-creator → design-system-auditor → storybook-tester

Debugging:
  browser-debugger → storybook-creator → storybook-tester

Deployment:
  vercel-deployment-verifier → [fix agent] → storybook-monitor
```

---

## Design Tokens

### Text Colors

| Token | Usage |
|-------|-------|
| `text-fg-primary` | Primary text |
| `text-fg-secondary` | Secondary text |
| `text-fg-tertiary` | Muted text |
| `text-fg-disabled` | Disabled states |
| `text-fg-brand-primary` | Brand accent |
| `text-fg-error-primary` | Error messages |

### Background Colors

| Token | Usage |
|-------|-------|
| `bg-bg-primary` | Main background |
| `bg-bg-secondary` | Subtle background |
| `bg-bg-tertiary` | Cards, panels |
| `bg-bg-brand-solid` | Primary buttons |

### Border Colors

| Token | Usage |
|-------|-------|
| `border-border-primary` | Default borders |
| `border-border-secondary` | Subtle borders |
| `border-border-brand` | Brand accent |
| `border-border-error` | Error states |

### Usage Rules

```tsx
// Correct - Use semantic tokens
<div className="text-fg-primary bg-bg-secondary border-border-primary" />

// Wrong - Hardcoded values
<div className="text-gray-900 bg-gray-50" />
<div style={{ color: '#191919' }} />
```

---

## Component Primitives

Reusable building blocks for consistent patterns.

### Table Cells

```tsx
import {
  TableCellAvatar,
  TableCellBadge,
  TableCellActions,
  TableCellText,
  TableCellStatus,
  TableCellCheckbox
} from "@/components/primitives/table-cells";
```

### Avatar Compositions

```tsx
import {
  AvatarLabelGroup,
  AvatarStack,
  AvatarWithText
} from "@/components/primitives/avatar-compositions";
```

### Badge Compositions

```tsx
import {
  StatusBadge,
  CategoryBadge,
  CountBadge,
  DismissibleBadge
} from "@/components/primitives/badge-compositions";
```

### Form Fields

```tsx
import {
  FieldLabel,
  FieldHint,
  FieldError,
  FieldWrapper
} from "@/components/primitives/form-fields";
```

---

## Component Patterns

### Creating a New Component

```bash
src/components/{category}/{name}/
├── {name}.tsx           # Component implementation
├── {name}.stories.tsx   # Storybook stories
└── index.ts             # Exports
```

### Story Template

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./component-name";

const meta: Meta<typeof ComponentName> = {
  title: "Components/Category/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {},
};
```

### Using the cx Utility

```tsx
import { cx } from "@/utils/cx";

<button className={cx(
  "base-classes",
  variant === "primary" && "primary-classes",
  className
)} />
```

---

## Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Keyboard Navigation | All interactive elements |
| Focus States | `ring-*` utilities |
| Color Contrast | 4.5:1 minimum |
| Screen Readers | `aria-label`, `aria-describedby` |
| Touch Targets | 44x44px minimum |

### React Aria Pattern

```tsx
import { Button } from "react-aria-components";

// Use onPress instead of onClick
<Button onPress={handleAction}>Click me</Button>
```

---

## Spacing & Layout

### 4px Grid System

| Class | Value |
|-------|-------|
| `p-1` / `m-1` | 4px |
| `p-2` / `m-2` | 8px |
| `p-3` / `m-3` | 12px |
| `p-4` / `m-4` | 16px |
| `gap-*` | Flex/grid spacing |

### Border Radius

| Class | Value | Usage |
|-------|-------|-------|
| `rounded-md` | 6px | Default |
| `rounded-lg` | 8px | Buttons, inputs |
| `rounded-xl` | 12px | Cards |
| `rounded-full` | 9999px | Pills, avatars |

### Shadows

```
shadow-xs → shadow-sm → shadow-md → shadow-lg → shadow-xl
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/styles/theme.css` | Design tokens & CSS variables |
| `design-tokens.tokens.json` | Figma-exported tokens |
| `figma-export.json` | Full Figma export data |
| `.claude/agents/*.md` | AI agent configurations |
| `.claude/settings.json` | Claude Code settings |

---

## Agent Dispatch

Agents are automatically dispatched based on task patterns. No manual invocation needed.

### Dispatch Rules

| Task | Agent |
|------|-------|
| Create/modify components | `storybook-creator` |
| Test/verify components | `storybook-tester` |
| Check Storybook status | `storybook-monitor` |
| Implement Figma designs | `figma-implementer` |
| Audit token compliance | `design-system-auditor` |
| Review code quality | `code-reviewer` |
| Search codebase | `codebase-explorer` |
| Debug console errors | `browser-debugger` |
| Fix deployment issues | `vercel-deployment-verifier` |

### Post-Creation Workflow

After any component is created:
1. `design-system-auditor` verifies token usage
2. `storybook-tester` validates rendering
3. `code-reviewer` checks quality

---

## Testing

```bash
# TypeScript check
npx tsc --noEmit

# Build Storybook (catches all component errors)
npm run build-storybook

# Run visual tests
npm run test-storybook
```

---

## MCP Integrations

| Server | Port | Tools |
|--------|------|-------|
| Figma Desktop | 3845 | `get_design_context`, `get_screenshot`, `get_variable_defs` |

---

## Troubleshooting

### Storybook Won't Start

```bash
# Kill existing process
pkill -f storybook

# Clean restart
rm -rf node_modules
npm install
npm run storybook
```

### TypeScript Errors

```bash
npx tsc --noEmit 2>&1 | head -50
```

### Console Errors

Invoke the `browser-debugger` agent or check the browser console directly.
