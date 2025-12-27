# Ushur Design System

A comprehensive React component library built with modern web technologies for building beautiful, accessible user interfaces. This repository hosts the Ushur Design System component library, powered by the Ushur UI React kit and wired into a Vite + Storybook workflow.

**Repository:** [github.com/leonushur/UshurDesignSystem2.0](https://github.com/leonushur/UshurDesignSystem2.0)

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Import Patterns](#import-patterns)
- [Primitives for Rapid UI Building](#primitives-for-rapid-ui-building)
- [Design Tokens](#design-tokens)
- [Example: Building a User Table](#example-building-a-user-table)
- [Example: Building a Form](#example-building-a-form)
- [Development Setup](#development-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Resources](#resources)
- [License](#license)

---

## Installation

```bash
npm install @ushur/design-system
# or
yarn add @ushur/design-system
# or
pnpm add @ushur/design-system
# or
bun add @ushur/design-system
```

### Peer Dependencies

This package requires React 18+ or React 19:

```bash
npm install react react-dom
```

### Import Styles

Add the design system styles to your app's entry point:

```tsx
// In your main.tsx or App.tsx
import "@ushur/design-system/styles";
```

---

## Quick Start

```tsx
import { Button, Input, Modal, Table } from "@ushur/design-system";
import "@ushur/design-system/styles";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-display-sm text-fg-primary mb-4">
        Welcome to Ushur
      </h1>
      <Button color="primary" size="lg">
        Get Started
      </Button>
    </div>
  );
}
```

---

## Import Patterns

### Full Import (Kitchen Sink)

Import everything from the main entry point:

```tsx
import {
  Button,
  Input,
  Modal,
  Table,
  TableCellAvatar,
  StatusBadge,
  useBreakpoint,
  cx,
} from "@ushur/design-system";
```

### Granular Imports (Recommended for Production)

Import from specific modules for better tree-shaking:

```tsx
// Base UI components
import { Button, Input, Select, Checkbox } from "@ushur/design-system/base";

// Application-level patterns
import { Modal, Table, Pagination, CommandMenu } from "@ushur/design-system/application";

// Ready-to-use primitives
import {
  TableCellAvatar,
  TableCellBadge,
  StatusBadge,
  AvatarLabelGroup
} from "@ushur/design-system/primitives";

// Visual elements
import { Logo, SocialIcons, PaymentIcons } from "@ushur/design-system/foundations";

// Marketing components
import { Header, Footer, FeatureSection } from "@ushur/design-system/marketing";

// Hooks
import { useBreakpoint, useClipboard } from "@ushur/design-system/hooks";

// Utilities
import { cx } from "@ushur/design-system/utils";
```

---

## Primitives for Rapid UI Building

Primitives are pre-built, composable blocks that eliminate UI finagling. Just wire up your data and you're done.

### Table Cell Primitives

Build tables in minutes, not hours:

```tsx
import { Table } from "@ushur/design-system/application";
import {
  TableCellAvatar,
  TableCellBadge,
  TableCellStatus,
  TableCellActions,
  TableCellCheckbox,
} from "@ushur/design-system/primitives";

// Your data - this is all you need to provide
const users = [
  { id: 1, name: "Olivia Rhye", email: "olivia@ushur.com", status: "Active", role: "Admin" },
  { id: 2, name: "Phoenix Baker", email: "phoenix@ushur.com", status: "Pending", role: "Member" },
];

// The UI writes itself
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell><TableCellCheckbox /></Table.HeaderCell>
      <Table.HeaderCell>User</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>Role</Table.HeaderCell>
      <Table.HeaderCell></Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {users.map(user => (
      <Table.Row key={user.id}>
        <Table.Cell><TableCellCheckbox /></Table.Cell>
        <Table.Cell>
          <TableCellAvatar
            primary={user.name}
            secondary={user.email}
            showStatus
            status="online"
          />
        </Table.Cell>
        <Table.Cell>
          <TableCellBadge label={user.status} color="success" dot />
        </Table.Cell>
        <Table.Cell>
          <TableCellBadge label={user.role} color="gray" />
        </Table.Cell>
        <Table.Cell>
          <TableCellActions actions={[
            { label: "Edit", onAction: () => editUser(user.id) },
            { label: "Delete", destructive: true, onAction: () => deleteUser(user.id) },
          ]} />
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
```

### Avatar Compositions

Display users with consistent styling:

```tsx
import { AvatarLabelGroup, AvatarStack } from "@ushur/design-system/primitives";

// Single user with details
<AvatarLabelGroup
  src="/avatars/olivia.jpg"
  name="Olivia Rhye"
  role="Product Designer"
  email="olivia@ushur.com"
  size="lg"
/>

// Multiple users (e.g., team members, assignees)
<AvatarStack
  avatars={[
    { src: "/avatar1.jpg", name: "Olivia" },
    { src: "/avatar2.jpg", name: "Phoenix" },
    { src: "/avatar3.jpg", name: "Lana" },
  ]}
  max={3}
/>
```

### Status & Category Badges

Semantic status indicators:

```tsx
import { StatusBadge, CategoryBadge, DismissibleBadge } from "@ushur/design-system/primitives";

// Status indicators - just pass the status, styling is automatic
<StatusBadge status="active" />      // Green with dot
<StatusBadge status="pending" />     // Yellow with dot
<StatusBadge status="inactive" />    // Gray with dot
<StatusBadge status="error" />       // Red with dot

// Category tags
<CategoryBadge label="Design" color="purple" />
<CategoryBadge label="Engineering" color="blue" icon={CodeIcon} />

// Removable tags (for filters, selections)
<DismissibleBadge label="React" onDismiss={() => removeTag("react")} />
```

### Form Field Primitives

Consistent form layouts:

```tsx
import { FieldWrapper, FieldLabel, FieldHint, FieldError } from "@ushur/design-system/primitives";
import { Input } from "@ushur/design-system/base";

// Complete field with label, hint, and validation
<FieldWrapper>
  <FieldLabel required tooltip="Your company email address">
    Email
  </FieldLabel>
  <Input type="email" placeholder="you@company.com" />
  <FieldHint>We'll never share your email.</FieldHint>
  <FieldError>Please enter a valid email address.</FieldError>
</FieldWrapper>
```

### Navigation Items

Build sidebars and menus:

```tsx
import { NavItem, ActionItem, SelectableItem } from "@ushur/design-system/primitives";

// Sidebar navigation
<nav>
  <NavItem icon={HomeIcon} active>Dashboard</NavItem>
  <NavItem icon={UsersIcon}>Team</NavItem>
  <NavItem icon={SettingsIcon}>Settings</NavItem>
</nav>

// Command palette / context menu items
<ActionItem icon={CopyIcon} shortcut="Cmd+C">Copy</ActionItem>
<ActionItem icon={TrashIcon} destructive>Delete</ActionItem>

// Selectable items (for dropdowns)
<SelectableItem selected>Option 1</SelectableItem>
<SelectableItem>Option 2</SelectableItem>
```

---

## Design Tokens

Always use semantic tokens for consistent theming:

### Text Colors

```tsx
<p className="text-fg-primary">Primary text</p>
<p className="text-fg-secondary">Secondary text</p>
<p className="text-fg-tertiary">Tertiary text</p>
<p className="text-fg-disabled">Disabled text</p>
<p className="text-fg-brand-primary">Brand text</p>
<p className="text-fg-error-primary">Error text</p>
<p className="text-fg-success-primary">Success text</p>
```

### Background Colors

```tsx
<div className="bg-bg-primary">Primary background</div>
<div className="bg-bg-secondary">Secondary background</div>
<div className="bg-bg-tertiary">Tertiary background</div>
<div className="bg-bg-brand-primary">Brand background</div>
<div className="bg-bg-error-primary">Error background</div>
```

### Border Colors

```tsx
<div className="border border-border-primary">Default border</div>
<div className="border border-border-brand">Brand border</div>
<div className="border border-border-error">Error border</div>
```

### Typography Scale

```tsx
// Display headings
<h1 className="text-display-2xl">Display 2XL</h1>
<h1 className="text-display-xl">Display XL</h1>
<h2 className="text-display-lg">Display LG</h2>
<h2 className="text-display-md">Display MD</h2>
<h3 className="text-display-sm">Display SM</h3>
<h4 className="text-display-xs">Display XS</h4>

// Body text
<p className="text-xl">Text XL</p>
<p className="text-lg">Text LG</p>
<p className="text-md">Text MD (default)</p>
<p className="text-sm">Text SM</p>
<p className="text-xs">Text XS</p>
```

---

## Example: Building a User Table

Here's a complete example of a user management table:

```tsx
import { useState } from "react";
import { Table, Pagination, Modal } from "@ushur/design-system/application";
import { Button, Input } from "@ushur/design-system/base";
import {
  TableCellAvatar,
  TableCellBadge,
  TableCellActions,
  TableCellCheckbox,
  StatusBadge,
} from "@ushur/design-system/primitives";

interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "pending" | "inactive";
  role: string;
  avatar?: string;
}

export function UserTable({ users }: { users: User[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleEdit = (user: User) => setEditingUser(user);
  const handleDelete = (id: string) => {
    // Your delete API call here
  };

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="w-12">
              <TableCellCheckbox
                checked={selected.length === users.length}
                onCheckedChange={(checked) =>
                  setSelected(checked ? users.map(u => u.id) : [])
                }
              />
            </Table.HeaderCell>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell className="w-20"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <TableCellCheckbox
                  checked={selected.includes(user.id)}
                  onCheckedChange={(checked) =>
                    setSelected(prev =>
                      checked
                        ? [...prev, user.id]
                        : prev.filter(id => id !== user.id)
                    )
                  }
                />
              </Table.Cell>
              <Table.Cell>
                <TableCellAvatar
                  src={user.avatar}
                  primary={user.name}
                  secondary={user.email}
                />
              </Table.Cell>
              <Table.Cell>
                <StatusBadge status={user.status} />
              </Table.Cell>
              <Table.Cell>
                <TableCellBadge label={user.role} color="gray" />
              </Table.Cell>
              <Table.Cell>
                <TableCellActions
                  actions={[
                    { label: "Edit", onAction: () => handleEdit(user) },
                    { label: "Delete", destructive: true, onAction: () => handleDelete(user.id) },
                  ]}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Modal.Root isOpen={!!editingUser} onOpenChange={() => setEditingUser(null)}>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Your form here - just wire up to your API */}
            <Input defaultValue={editingUser?.name} />
          </Modal.Body>
          <Modal.Footer>
            <Button color="secondary" onPress={() => setEditingUser(null)}>
              Cancel
            </Button>
            <Button color="primary" onPress={() => { /* save */ }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
```

---

## Example: Building a Form

Complete form with validation:

```tsx
import { Button, Input, Select, Checkbox } from "@ushur/design-system/base";
import { FieldWrapper, FieldLabel, FieldError } from "@ushur/design-system/primitives";

export function ContactForm({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FieldWrapper>
        <FieldLabel required>Full Name</FieldLabel>
        <Input name="name" placeholder="John Doe" />
        {errors.name && <FieldError>{errors.name}</FieldError>}
      </FieldWrapper>

      <FieldWrapper>
        <FieldLabel required>Email</FieldLabel>
        <Input name="email" type="email" placeholder="john@company.com" />
        {errors.email && <FieldError>{errors.email}</FieldError>}
      </FieldWrapper>

      <FieldWrapper>
        <FieldLabel>Department</FieldLabel>
        <Select.Root>
          <Select.Trigger placeholder="Select department" />
          <Select.Content>
            <Select.Item value="engineering">Engineering</Select.Item>
            <Select.Item value="design">Design</Select.Item>
            <Select.Item value="marketing">Marketing</Select.Item>
          </Select.Content>
        </Select.Root>
      </FieldWrapper>

      <Checkbox name="terms">
        I agree to the terms and conditions
      </Checkbox>

      <Button type="submit" color="primary" className="w-full">
        Submit
      </Button>
    </form>
  );
}
```

---

## Development Setup

This section is for contributors developing the design system itself.

### Prerequisites

Before you begin, make sure you have the following installed on your computer:

### Required Software

1. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - To check if installed, open Terminal/Command Prompt and type:
     ```bash
     node --version
     ```
   - Should show something like `v18.0.0` or higher

2. **npm** (comes with Node.js)
   - To check version:
     ```bash
     npm --version
     ```
   - Should show version 9.0.0 or higher

### Optional (but recommended)

- **Bun** - faster package manager
  - Install from [bun.sh](https://bun.sh/)
  - To check if installed: `bun --version`
- **Git** - for version control
  - Download from [git-scm.com](https://git-scm.com/)
- **VS Code** - recommended code editor
  - Download from [code.visualstudio.com](https://code.visualstudio.com/)

## Quick Start (For Beginners)

**Never used a design system before? Follow these simple steps:**

### Step 1: Open Terminal

- **Mac:** Press `Cmd + Space`, type "Terminal", press Enter
- **Windows:** Press `Win + R`, type "cmd", press Enter
- **VS Code:** Open Terminal from the top menu (Terminal → New Terminal)

### Step 2: Navigate to Project Folder

```bash
cd path/to/Ushur\ Design\ System
```

> **Tip:** You can drag the folder from Finder/Explorer into Terminal to auto-fill the path!

### Step 3: Install Dependencies

This downloads all the packages the project needs:

```bash
npm install
```

**What you'll see:**
- A progress bar
- Lots of text scrolling by (this is normal!)
- Takes 2-5 minutes depending on internet speed

**When it's done:**
- You'll see "added X packages"
- No red error messages
- A new `node_modules` folder appears

### Step 4: Start Storybook

```bash
npm run storybook
```

**What happens:**
1. Storybook builds (takes ~30 seconds)
2. Opens your browser automatically
3. Shows the component library at `http://localhost:6006`

**If browser doesn't open automatically:**
- Manually open your browser
- Go to `http://localhost:6006`

### Step 5: Explore Components

You should now see the Ushur Design System interface with:
- A sidebar listing all components
- Interactive examples you can click
- Documentation and code samples

**To stop Storybook:**
- Go back to Terminal
- Press `Ctrl + C`
- Type `Y` if asked to confirm

## Getting Started

First, install dependencies (pnpm, yarn, bun, and npm all work):

```bash
npm install
```

Then run either the Vite app or the Storybook catalog:

```bash
npm run dev          # Vite playground
npm run storybook    # Storybook component explorer
```

The Vite app lives at [http://localhost:5173](http://localhost:5173); Storybook defaults to [http://localhost:6006](http://localhost:6006) (or the next open port).

## Available Scripts

Run these commands in Terminal from the project folder:

| Command | What It Does | When to Use |
|---------|-------------|-------------|
| `npm install` | Installs all dependencies | First time setup, or after pulling updates |
| `npm run dev` | Starts Vite development server (port 5173) | Testing components in a full app environment |
| `npm run build` | Type-check + production build | Preparing for deployment |
| `npm run preview` | Preview production build | Testing the built output locally |
| `npm run storybook` | Launches Storybook (port 6006) | Viewing/developing components |
| `npm run build-storybook` | Generates static Storybook site | Creating deployable documentation |

## Project Structure

```
Ushur Design System/
├── src/
│   ├── components/
│   │   ├── foundations/    # Colors, typography, logos, icons, tokens
│   │   ├── base/          # Primitive controls (buttons, inputs, form controls)
│   │   ├── application/   # Complex components (tables, navigation, modals)
│   │   └── marketing/     # Marketing components and shared assets
│   ├── hooks/             # Reusable React hooks (useBreakpoint, useClipboard, etc.)
│   ├── styles/            # Tailwind + CSS variables defining design tokens
│   │   ├── theme.css      # All design tokens and CSS variables
│   │   ├── globals.css    # Global styles
│   │   └── typography.css # Typography definitions
│   └── utils/             # Helper functions (cx for class merging, etc.)
├── .storybook/            # Storybook configuration files
├── node_modules/          # Installed packages (don't modify!)
├── package.json           # Project configuration and dependencies
└── README.md             # This file
```

## Storybook Structure

All stories live next to their source files under `src/**`. The Storybook sidebar organizes components into logical categories:

### Organization

- **Foundations** — Color, typography, spacing, icons
  - Located in `src/components/foundations/`

- **Components/Base** — Primitive UI elements
  - Buttons, inputs, checkboxes, badges, tooltips
  - Located in `src/components/base/`

- **Components/Application** — Higher-order patterns
  - Tables, navigation, pagination, modals, alerts
  - Located in `src/components/application/`

- **Components/Marketing** — Marketing-specific components
  - Located in `src/components/marketing/`

### Key Folders Explained

- **`src/styles/`** — Contains all design tokens
  - `theme.css` - Design tokens (colors, spacing, shadows, etc.)
  - Uses Tailwind CSS 4 with custom design tokens

- **`src/components/foundations/`** — Visual elements
  - Icons, logos, color swatches, typography examples

- **`src/components/base/`** — Building blocks
  - Basic interactive elements used to build larger components

- **`src/components/application/`** — Complex patterns
  - Full-featured components for applications
  - Tables with sorting, pagination, filtering
  - Navigation menus, modals, alerts

- **`src/components/marketing/`** — Marketing pages
  - Headers, footers, CTAs, testimonials

## Technologies Used

This design system is built with modern web technologies:

### Core Framework
- **React 19** - UI framework with latest features
- **TypeScript** - Type-safe JavaScript for better developer experience
- **Vite 7** - Fast build tool and development server

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **CSS Variables** - For dynamic theming
- **React Aria Components** - Accessible component primitives

### Development Tools
- **Storybook 10** - Component development and documentation
- **Vitest + Playwright** - Testing framework
- **ESLint + Prettier** - Code quality and formatting

### UI Libraries
- **React Aria** - Accessible component primitives
- **Untitled UI Icons** - Icon library
- **Motion** - Animation library
- **Recharts** - Charting library
- **Tiptap** - Rich text editor

## Troubleshooting

### Common Issues and Solutions

#### "Command not found: npm"

**Problem:** Node.js is not installed or not in your PATH

**Solution:**
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Restart your Terminal/Command Prompt
3. Verify installation: `node --version`

#### "Port 6006 is already in use"

**Problem:** Another process is using port 6006, or Storybook is already running

**Solutions:**
1. Check if you have another Terminal window with Storybook running
   - Close it with `Ctrl + C`
2. Or use a different port:
   ```bash
   npm run storybook -- -p 6007
   ```
3. Or kill the process using the port (Mac/Linux):
   ```bash
   lsof -ti:6006 | xargs kill -9
   ```

#### "Module not found" or "Cannot find module" errors

**Problem:** Dependencies not properly installed or corrupted

**Solution - Full reinstall:**
```bash
# Delete node_modules and package lock file
rm -rf node_modules package-lock.json

# Reinstall all dependencies
npm install
```

#### Storybook won't start or shows blank page

**Problem:** Build cache or dependencies issue

**Solution - Clear everything and start fresh:**
```bash
# Stop any running processes (Ctrl + C)

# Clear cache and build files
rm -rf node_modules .cache storybook-static dist

# Reinstall dependencies
npm install

# Start Storybook again
npm run storybook
```

#### "Permission denied" errors (Mac/Linux)

**Problem:** Insufficient file permissions

**Solution:**
```bash
# Fix node_modules ownership
sudo chown -R $USER node_modules

# Or run with sudo (not recommended)
sudo npm install
```

#### "Permission denied" errors (Windows)

**Problem:** Insufficient permissions or file lock

**Solution:**
1. Close all Terminal/Command Prompt windows
2. Run Command Prompt as Administrator:
   - Press Windows key
   - Type "cmd"
   - Right-click "Command Prompt"
   - Select "Run as administrator"
3. Navigate to project folder
4. Run `npm install` again

#### TypeScript errors when running build

**Problem:** Type checking failures

**Solution:**
```bash
# Run type check to see all errors
npx tsc --noEmit

# If errors are in dependencies, try:
npm install --legacy-peer-deps
```

#### Slow installation on Windows

**Problem:** Windows Defender scanning node_modules

**Solution:**
1. Add project folder to Windows Defender exclusions
2. Or use `npm install --prefer-offline`

### Still Having Issues?

If you're still stuck:

1. **Check Node version:** Make sure you have Node.js 18+
   ```bash
   node --version
   npm --version
   ```

2. **Update npm to latest:**
   ```bash
   npm install -g npm@latest
   ```

3. **Clear all caches:**
   ```bash
   npm cache clean --force
   ```

4. **Try a fresh install:**
   ```bash
   rm -rf node_modules package-lock.json .cache dist storybook-static
   npm install
   ```

5. **Check for system-specific issues:**
   - Mac: Ensure Xcode Command Line Tools are installed
   - Windows: Ensure you have build tools installed

## Resources

### Ushur Design System

Ushur Design System leverages the Ushur UI React open-source kit:

- [Ushur UI React documentation](https://www.untitledui.com/react/docs/introduction)
- [Ushur UI Figma library](https://www.untitledui.com/figma)
- [Ushur UI Icons](https://www.untitledui.com/react/resources/icons)

### Learning Resources

- **Storybook:** [storybook.js.org](https://storybook.js.org/)
- **React:** [react.dev](https://react.dev/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com/)
- **React Aria:** [react-spectrum.adobe.com/react-aria](https://react-spectrum.adobe.com/react-aria/)
- **TypeScript:** [typescriptlang.org](https://typescriptlang.org/)

### Tips for Beginners

1. **Start with Storybook** - Don't modify code until you've explored existing components
2. **Read the stories** - Each component has `.stories.tsx` files with usage examples
3. **Use browser inspector** - Right-click components and select "Inspect"
4. **Make small changes** - Test one thing at a time
5. **Check the console** - Browser DevTools console shows helpful error messages

### Glossary

**Common terms you'll encounter:**

- **Component** - A reusable piece of UI (button, input, card, etc.)
- **Story** - An example showing how to use a component
- **Props** - Settings/options you pass to customize a component
- **Node modules** - Folder with all installed packages
- **Port** - A number identifying where a web server runs (6006, 5173)
- **Localhost** - Your own computer acting as a web server
- **Terminal** - Text interface for running commands
- **Build** - Process of converting source code to production-ready files
- **Hot reload** - Automatic page refresh when you save changes

## License

Ushur Design System builds on Ushur UI React components, which are licensed under the MIT license. You may use the components freely in commercial projects; see the [Ushur UI license](https://www.untitledui.com/license) for details.

---

## Getting Help

Need assistance? Here's what to do:

1. **Check this README** - Most common questions are answered here
2. **Browse existing components** - See how similar components are built
3. **Read component documentation** - Each component has detailed docs in Storybook
4. **Check the troubleshooting section** - Common issues and solutions
5. **Ask the team** - Reach out to other developers on the project

**Welcome to the Ushur Design System!** 🎉
