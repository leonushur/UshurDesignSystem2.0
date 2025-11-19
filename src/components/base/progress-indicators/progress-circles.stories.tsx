import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBarCircle, ProgressBarHalfCircle } from "./progress-circles";

const meta: Meta<typeof ProgressBarCircle> = {
    title: "Components/Progress Indicators/Circular",
    component: ProgressBarCircle,
    args: {
        value: 64,
        size: "md",
        label: "Completed",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressBarCircle>;

export const Circle: Story = {};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-wrap gap-6">
            {(["xxs", "xs", "sm", "md", "lg"] as const).map((size) => (
                <ProgressBarCircle key={size} size={size} value={55} label={size.toUpperCase()} />
            ))}
        </div>
    ),
};

export const HalfCircle: Story = {
    render: () => (
        <div className="flex flex-wrap gap-6">
            <ProgressBarHalfCircle size="md" value={75} label="Usage" />
            <ProgressBarHalfCircle size="sm" value={40} label="Upload" />
        </div>
    ),
};

