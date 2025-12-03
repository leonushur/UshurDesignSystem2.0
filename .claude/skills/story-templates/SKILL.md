---
name: Story Templates
description: Provides Storybook story templates and patterns for the Ushur Design System. Includes meta configuration, story patterns, and documentation helpers.
---

# Storybook Story Templates

Use these templates when creating Storybook stories for components.

## Basic Story Template

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./component-name";

type ComponentStory = StoryObj<typeof ComponentName>;
type ComponentMeta = Meta<typeof ComponentName>;

const meta: ComponentMeta = {
    title: "Components/Category/ComponentName",
    component: ComponentName,
    args: {
        children: "Default content",
    },
    parameters: {
        layout: "padded", // "centered" | "fullscreen"
    },
    tags: ["autodocs"],
};

export default meta;

export const Default: ComponentStory = {};

export const WithCustomProps: ComponentStory = {
    args: {
        variant: "secondary",
        size: "lg",
    },
};
```

## Story with Render Function

```tsx
export const AllVariants: ComponentStory = {
    name: "All Variants",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Primary</h3>
                <ComponentName variant="primary">Primary</ComponentName>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Secondary</h3>
                <ComponentName variant="secondary">Secondary</ComponentName>
            </div>
        </div>
    ),
};
```

## Story Grid Helper

Use this pattern to display multiple variants side-by-side:

```tsx
const VARIANTS: ComponentStory["args"][] = [
    { variant: "primary", children: "Primary" },
    { variant: "secondary", children: "Secondary" },
    { variant: "tertiary", children: "Tertiary" },
];

const StoryGrid = ({ stories }: { stories: ComponentStory["args"][] }) => (
    <div className="flex flex-wrap items-center gap-4">
        {stories.map((story, index) => (
            <ComponentName key={index} {...story}>
                {story.children}
            </ComponentName>
        ))}
    </div>
);

export const AllColors: ComponentStory = {
    render: () => <StoryGrid stories={VARIANTS} />,
};
```

## Grouped Stories Pattern

```tsx
const SOLID_COLORS: ComponentStory["args"][] = [
    { color: "primary", children: "Primary" },
    { color: "secondary", children: "Secondary" },
    { color: "tertiary", children: "Tertiary" },
];

const DESTRUCTIVE_COLORS: ComponentStory["args"][] = [
    { color: "primary-destructive", children: "Primary Destructive" },
    { color: "secondary-destructive", children: "Secondary Destructive" },
];

const SIZES: ComponentStory["args"][] = [
    { size: "sm", children: "Small" },
    { size: "md", children: "Medium" },
    { size: "lg", children: "Large" },
    { size: "xl", children: "Extra Large" },
];

export const AllVariants: ComponentStory = {
    name: "All Variants",
    render: () => (
        <div className="space-y-8">
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Solid Colors</h3>
                <StoryGrid stories={SOLID_COLORS} />
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Destructive Colors</h3>
                <StoryGrid stories={DESTRUCTIVE_COLORS} />
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Sizes</h3>
                <StoryGrid stories={SIZES} />
            </section>
        </div>
    ),
};
```

## Interactive Story (Controlled)

```tsx
import { useState } from "react";

export const Controlled: ComponentStory = {
    render: function ControlledStory() {
        const [value, setValue] = useState("");
        
        return (
            <div className="space-y-4">
                <ComponentName 
                    value={value} 
                    onChange={setValue}
                />
                <p className="text-sm text-fg-tertiary">
                    Current value: {value || "(empty)"}
                </p>
            </div>
        );
    },
};
```

## Stories with Icons

```tsx
import { Star01, Lightning01, Check } from "@untitledui-pro/icons/line";

export const WithIcons: ComponentStory = {
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Leading Icon</h3>
                <ComponentName iconLeading={Star01}>With Leading</ComponentName>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Trailing Icon</h3>
                <ComponentName iconTrailing={Lightning01}>With Trailing</ComponentName>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Both Icons</h3>
                <ComponentName iconLeading={Star01} iconTrailing={Check}>Both Icons</ComponentName>
            </div>
        </div>
    ),
};
```

## State Stories

```tsx
export const States: ComponentStory = {
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Default</h3>
                <ComponentName>Default</ComponentName>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Disabled</h3>
                <ComponentName isDisabled>Disabled</ComponentName>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Loading</h3>
                <ComponentName isLoading>Loading</ComponentName>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Error</h3>
                <ComponentName isInvalid>Error State</ComponentName>
            </div>
        </div>
    ),
};
```

## Layout Parameters

```tsx
// Padded layout (default for most components)
parameters: { layout: "padded" }

// Centered layout (for small, isolated components)
parameters: { layout: "centered" }

// Fullscreen layout (for page-level components)
parameters: { layout: "fullscreen" }
```

## Story Title Conventions

Follow this hierarchy:
- `Components/Base/ComponentName` - Primitives
- `Components/Application/ComponentName` - App patterns
- `Components/Marketing/ComponentName` - Marketing sections
- `Foundations/ComponentName` - Icons, logos
- `Pages/PageName` - Full page examples

