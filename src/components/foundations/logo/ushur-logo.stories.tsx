import type { Meta, StoryObj } from "@storybook/react";
import { UshurLogo } from "./ushur-logo";
import { UshurLogoMinimal } from "./ushur-logo-minimal";

const meta: Meta<typeof UshurLogo> = {
    title: "Foundations/Logos/Full",
    component: UshurLogo,
    args: {
        className: "text-fg-primary",
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UshurLogo>;

export const Default: Story = {};

export const Inverted: Story = {
    render: (args) => (
        <div className="rounded-lg bg-secondary-solid p-4">
            <UshurLogo {...args} className="text-white" />
        </div>
    ),
};

export const Minimal: StoryObj<typeof UshurLogoMinimal> = {
    render: () => <UshurLogoMinimal />,
    name: "Minimal Mark",
};

