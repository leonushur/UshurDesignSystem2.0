import type { Meta, StoryObj } from "@storybook/react";
import * as SocialIcons from "./index";

const socialIconEntries = Object.entries(SocialIcons).sort(([a], [b]) => a.localeCompare(b));

const meta: Meta = {
    title: "Foundations/Icons/Social",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Gallery: Story = {
    render: () => (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {socialIconEntries.map(([name, Icon]) => (
                <div key={name} className="flex items-center gap-3 rounded-xl border border-border-primary p-4">
                    <Icon className="size-6 text-foreground-secondary" />
                    <span className="text-sm font-medium text-foreground-primary">{name}</span>
                </div>
            ))}
        </div>
    ),
};

export const IconSizes: Story = {
    render: () => {
        const Icon = SocialIcons.LinkedIn;

        return (
            <div className="flex items-end gap-6">
                <div className="text-center">
                    <Icon className="size-4" />
                    <p className="mt-2 text-xs text-foreground-secondary">16px</p>
                </div>
                <div className="text-center">
                    <Icon className="size-6" />
                    <p className="mt-2 text-xs text-foreground-secondary">24px</p>
                </div>
                <div className="text-center">
                    <Icon className="size-10" />
                    <p className="mt-2 text-xs text-foreground-secondary">40px</p>
                </div>
            </div>
        );
    },
};

