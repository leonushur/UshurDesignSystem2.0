import type { Meta, StoryObj } from "@storybook/react";
import { UntitledLogo } from "./untitledui-logo";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal";

const meta: Meta<typeof UntitledLogo> = {
    title: "Foundations/Logos/Full",
    component: UntitledLogo,
    args: {
        className: "text-fg-primary",
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UntitledLogo>;

export const Default: Story = {};

export const Inverted: Story = {
    render: (args) => (
        <div className="rounded-lg bg-secondary-solid p-4">
            <UntitledLogo {...args} className="text-white" />
        </div>
    ),
};

export const Minimal: StoryObj<typeof UntitledLogoMinimal> = {
    render: () => <UntitledLogoMinimal />,
    name: "Minimal Mark",
};

