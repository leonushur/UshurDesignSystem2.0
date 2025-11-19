import type { Meta, StoryObj } from "@storybook/react";
import { UshurLogoMinimal } from "./ushur-logo-minimal";

const meta: Meta<typeof UshurLogoMinimal> = {
    title: "Foundations/Logos/Minimal",
    component: UshurLogoMinimal,
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

type Story = StoryObj<typeof UshurLogoMinimal>;

export const Default: Story = {};

export const Large: Story = {
    args: {
        className: "size-12",
    },
};

export const Inverse: Story = {
    render: (args) => (
        <div className="rounded-xl bg-secondary-solid p-4">
            <UshurLogoMinimal {...args} className="text-white" />
        </div>
    ),
};

