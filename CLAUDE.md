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

This project has specialized sub-agents. Use `/agents` to list them.

- **storybook-creator** - Create new components and stories
- **storybook-tester** - Test components visually and functionally
- **figma-implementer** - Translate Figma designs to code
- **design-system-auditor** - Audit for consistency and compliance
- **code-reviewer** - Review code quality and best practices
- **codebase-explorer** - Fast search and navigation
- **vercel-deployment-verifier** - Debug Vercel deployment failures

## Automatic Agent Dispatch Rules

**IMPORTANT**: When working on this project, automatically dispatch to the appropriate sub-agent based on the task. Do NOT ask the user - just use the agent.

### 🔔 Agent Dispatch Notification (REQUIRED)

**BEFORE dispatching to ANY sub-agent, you MUST output this notification:**

```
┌─────────────────────────────────────────────────────────────┐
│ 🤖 DISPATCHING TO SUB-AGENT                                 │
│                                                             │
│ Agent: [agent-name]                                         │
│ Task: [brief task description]                              │
│ Reason: [why this agent was chosen]                         │
└─────────────────────────────────────────────────────────────┘
```

This ensures visibility into agent delegation decisions.

### When to Use Each Agent

| Task Pattern | Agent to Use | Auto-Dispatch |
|--------------|--------------|---------------|
| "Create a component", "Add a new component", "Build a [X] component" | `storybook-creator` | ✅ Yes |
| "Create stories for", "Add stories", "Write Storybook stories" | `storybook-creator` | ✅ Yes |
| "Test component", "Verify rendering", "Check if [X] works" | `storybook-tester` | ✅ Yes |
| "Implement from Figma", "Convert Figma design", "Match the Figma" | `figma-implementer` | ✅ Yes |
| "Audit", "Check consistency", "Review design tokens usage" | `design-system-auditor` | ✅ Yes |
| "Review code", "Check code quality", "Suggest improvements" | `code-reviewer` | ✅ Yes |
| "Find where", "Search for", "Explore the codebase" | `codebase-explorer` | ✅ Yes |
| "Vercel failed", "Deployment error", "Build failed on Vercel" | `vercel-deployment-verifier` | ✅ Yes |

### Dispatch Syntax

When you identify a task that matches an agent's specialty, use:

```
Task(agent: "agent-name", prompt: "Detailed task description")
```

### Chaining Agents

For complex tasks, chain multiple agents:

1. **Creating a new component**: 
   - First: `storybook-creator` to build component + stories
   - Then: `design-system-auditor` to verify token usage
   - Finally: `storybook-tester` to verify rendering

2. **Implementing from Figma**:
   - First: `figma-implementer` to create the component
   - Then: `storybook-tester` to compare with design
   - Finally: `code-reviewer` for quality check

3. **Fixing deployment issues**:
   - First: `vercel-deployment-verifier` to diagnose
   - Then: Fix the issue
   - Finally: `storybook-tester` to verify locally

### Example Auto-Dispatch

User says: "Create a new QR code component"

You should automatically:
```
Task(agent: "storybook-creator", prompt: "Create a QR code component with the following requirements:
- Support for different sizes (xs, sm, md, lg, xl)
- Custom colors
- Error correction levels
- Download functionality
Include comprehensive Storybook stories demonstrating all variants.")
```

### Post-Creation Verification

After creating any component, automatically run:
```
Task(agent: "design-system-auditor", prompt: "Audit the newly created [component-name] for:
- Design token usage (no hardcoded colors)
- Accessibility compliance
- Consistent prop naming
- Export from index file")
```

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

## Verifying Sub-Agent Dispatch

### Claude CLI Verbose Mode

To see detailed output about agent dispatch, run:

```bash
claude --verbose
# or
claude -v
```

### Expected Output When Sub-Agent Is Called

When a sub-agent is invoked, you should see:

1. **Dispatch notification** (the box above)
2. **Agent activation header** (from the sub-agent itself):
   ```
   ╔══════════════════════════════════════════════════════════════╗
   ║  📚 STORYBOOK CREATOR ACTIVATED                              ║
   ║  Task: Create Button component with variants                 ║
   ╚══════════════════════════════════════════════════════════════╝
   ```
3. **Sub-agent work output**
4. **Completion notice**

### Testing Agent Dispatch

To verify agents are working, try these prompts:

| Prompt | Expected Agent |
|--------|----------------|
| "Audit the Button component" | design-system-auditor |
| "Create a new Card component" | storybook-creator |
| "Test the Modal stories" | storybook-tester |
| "Implement this Figma design" | figma-implementer |
| "Review the recent code changes" | code-reviewer |
| "Find all usages of cx utility" | codebase-explorer |
| "The Vercel build is failing" | vercel-deployment-verifier |

### Troubleshooting

If sub-agents aren't being called:

1. **Check agent files exist**: `.claude/agents/*.md`
2. **Verify CLAUDE.md is in project root**
3. **Use explicit trigger phrases** from agent descriptions
4. **Try `/agents` command** to list available agents
5. **Run with `--verbose`** to see decision process

