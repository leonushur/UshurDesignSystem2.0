---
name: Component Templates
description: Provides boilerplate templates for creating new React components in the Ushur Design System. Includes TypeScript interfaces, component structure, and export patterns.
---

# Component Templates

Use these templates when creating new components for the Ushur Design System.

## Basic Component Template

```tsx
import { cx } from "@/utils/cx";
import type { ComponentProps } from "react";

export interface ComponentNameProps extends ComponentProps<"div"> {
    /** Primary variant style */
    variant?: "primary" | "secondary" | "tertiary";
    /** Component size */
    size?: "sm" | "md" | "lg";
    /** Additional class names */
    className?: string;
}

export const ComponentName = ({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ComponentNameProps) => {
    return (
        <div
            className={cx(
                // Base styles
                "inline-flex items-center justify-center",
                // Variant styles
                variant === "primary" && "bg-bg-brand-solid text-text-primary_on-brand",
                variant === "secondary" && "bg-bg-secondary text-fg-secondary border border-border-primary",
                variant === "tertiary" && "bg-transparent text-fg-tertiary",
                // Size styles
                size === "sm" && "px-3 py-1.5 text-sm gap-1.5",
                size === "md" && "px-4 py-2 text-sm gap-2",
                size === "lg" && "px-5 py-2.5 text-md gap-2.5",
                // Custom classes
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
```

## Interactive Component (with React Aria)

```tsx
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import { cx } from "@/utils/cx";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface ButtonProps extends Omit<AriaButtonProps, "className"> {
    /** Button color variant */
    color?: "primary" | "secondary" | "tertiary" | "primary-destructive" | "secondary-destructive";
    /** Button size */
    size?: "sm" | "md" | "lg" | "xl";
    /** Leading icon component */
    iconLeading?: IconComponent;
    /** Trailing icon component */
    iconTrailing?: IconComponent;
    /** Show loading state */
    isLoading?: boolean;
    /** Additional class names */
    className?: string;
}

export const Button = ({
    color = "primary",
    size = "md",
    iconLeading: IconLeading,
    iconTrailing: IconTrailing,
    isLoading,
    isDisabled,
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <AriaButton
            isDisabled={isDisabled || isLoading}
            className={cx(
                // Base
                "inline-flex items-center justify-center font-medium transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                // Color variants
                color === "primary" && "bg-bg-brand-solid text-text-primary_on-brand hover:bg-bg-brand-solid_hover",
                color === "secondary" && "bg-bg-primary text-fg-secondary border border-border-primary hover:bg-bg-secondary",
                // Size variants
                size === "sm" && "h-9 px-3.5 text-sm gap-1.5 rounded-lg",
                size === "md" && "h-10 px-4 text-sm gap-2 rounded-lg",
                size === "lg" && "h-11 px-4.5 text-md gap-2 rounded-lg",
                // Custom
                className
            )}
            {...props}
        >
            {isLoading && <LoadingSpinner className="size-4" />}
            {!isLoading && IconLeading && <IconLeading className="size-5" />}
            {children}
            {IconTrailing && <IconTrailing className="size-5" />}
        </AriaButton>
    );
};
```

## Form Component (with React Aria)

```tsx
import {
    TextField as AriaTextField,
    Label,
    Input,
    Text,
    type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";
import { cx } from "@/utils/cx";

export interface InputProps extends Omit<AriaTextFieldProps, "className"> {
    /** Input label */
    label?: string;
    /** Helper text below input */
    description?: string;
    /** Error message */
    errorMessage?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Additional class names */
    className?: string;
}

export const TextInput = ({
    label,
    description,
    errorMessage,
    placeholder,
    className,
    ...props
}: InputProps) => {
    return (
        <AriaTextField className={cx("flex flex-col gap-1.5", className)} {...props}>
            {label && (
                <Label className="text-sm font-medium text-fg-secondary">
                    {label}
                </Label>
            )}
            <Input
                placeholder={placeholder}
                className={cx(
                    "h-10 px-3.5 rounded-lg border text-sm",
                    "bg-bg-primary text-fg-primary placeholder:text-text-placeholder",
                    "border-border-primary focus:border-border-brand focus:ring-2 focus:ring-focus-ring",
                    "disabled:bg-bg-disabled disabled:cursor-not-allowed"
                )}
            />
            {description && !errorMessage && (
                <Text slot="description" className="text-sm text-fg-tertiary">
                    {description}
                </Text>
            )}
            {errorMessage && (
                <Text slot="errorMessage" className="text-sm text-text-error-primary">
                    {errorMessage}
                </Text>
            )}
        </AriaTextField>
    );
};
```

## Index Export Pattern

```tsx
// index.ts
export { ComponentName } from "./component-name";
export type { ComponentNameProps } from "./component-name";
```

## Directory Structure

```
src/components/{category}/{component-name}/
├── component-name.tsx        # Main component
├── component-name.stories.tsx # Storybook stories
├── index.ts                  # Exports
└── (optional) utils.ts       # Helper functions
```

