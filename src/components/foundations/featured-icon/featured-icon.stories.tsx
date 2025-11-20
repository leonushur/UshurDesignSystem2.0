import type { Meta, StoryObj } from "@storybook/react";
import { Bell01, ShieldTick, Zap } from "@untitledui-pro/icons/line";
import { FeaturedIcon } from "./featured-icon";

const meta: Meta<typeof FeaturedIcon> = {
    title: "Foundations/Featured Icon",
    component: FeaturedIcon,
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
        },
        color: {
            control: "select",
            options: ["brand", "gray", "success", "warning", "error"],
        },
        theme: {
            control: "select",
            options: ["light", "gradient", "dark", "modern", "modern-neue", "outline"],
        },
    },
    args: {
        icon: ShieldTick,
        color: "brand",
        size: "md",
        theme: "light",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeaturedIcon>;

export const Light: Story = {};

export const Gradient: Story = {
    args: {
        theme: "gradient",
        icon: Zap,
    },
};

export const Dark: Story = {
    args: {
        theme: "dark",
    },
};

export const Modern: Story = {
    args: {
        theme: "modern",
        icon: Bell01,
    },
};

export const Outline: Story = {
    args: {
        theme: "outline",
        size: "sm",
    },
};

export const ModernNeue: Story = {
    args: {
        theme: "modern-neue",
        size: "lg",
    },
};

export const AllVariants: Story = {
    render: (args) => {
        const themes = ["light", "gradient", "dark", "modern", "modern-neue", "outline"] as const;
        return (
            <div className="grid gap-6 md:grid-cols-3">
                {themes.map((theme) => (
                    <div key={theme} className="space-y-2 rounded-lg border border-border-primary p-4">
                        <p className="text-sm font-medium capitalize">{theme.replace("-", " ")}</p>
                        <FeaturedIcon {...args} theme={theme} />
                    </div>
                ))}
            </div>
        );
    },
};

