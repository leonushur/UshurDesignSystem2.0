import type { Meta, StoryObj } from "@storybook/react";
import { CircleProgressBar } from "./simple-circle";

const meta: Meta<typeof CircleProgressBar> = {
    title: "Components/Progress Indicators/Circle (Simple)",
    component: CircleProgressBar,
    args: {
        value: 42,
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CircleProgressBar>;

export const Default: Story = {};

export const HighValue: Story = {
    args: {
        value: 88,
    },
};

