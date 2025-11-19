import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar, ProgressBarBase } from "./progress-indicators";

const meta: Meta<typeof ProgressBar> = {
    title: "Components/Progress Indicators/Linear",
    component: ProgressBar,
    args: {
        value: 45,
        labelPosition: "right",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const FloatingLabel: Story = {
    args: {
        labelPosition: "top-floating",
        value: 72,
    },
};

export const BottomLabel: Story = {
    args: {
        labelPosition: "bottom",
        value: 30,
    },
};

export const RangeExample: Story = {
    render: () => (
        <div className="space-y-4">
            <ProgressBarBase value={25} className="bg-border-secondary" />
            <ProgressBar value={55} labelPosition="right" />
            <ProgressBar value={85} labelPosition="bottom-floating" />
        </div>
    ),
};

