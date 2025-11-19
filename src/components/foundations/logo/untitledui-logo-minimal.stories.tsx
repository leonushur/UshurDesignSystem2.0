import type { Meta, StoryObj } from "@storybook/react";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal";

const meta: Meta<typeof UntitledLogoMinimal> = {
    title: "Foundations/Logos/Minimal",
    component: UntitledLogoMinimal,
    argTypes: {
        className: {
            control: "text",
        },
    },
    args: {
        className: "text-fg-primary",
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UntitledLogoMinimal>;

export const Default: Story = {};

export const Large: Story = {
    args: {
        className: "size-12",
    },
};

export const Inverse: Story = {
    render: (args) => (
        <div className="rounded-xl bg-secondary-solid p-4">
            <UntitledLogoMinimal {...args} className="text-white" />
        </div>
    ),
};

