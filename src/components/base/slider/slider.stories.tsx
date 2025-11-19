import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
    title: "Components/Slider",
    component: Slider,
    args: {
        minValue: 0,
        maxValue: 100,
        labelPosition: "default",
        defaultValue: 40,
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

export const FloatingLabel: Story = {
    args: {
        labelPosition: "top-floating",
        defaultValue: 65,
    },
};

export const Range: Story = {
    args: {
        labelPosition: "bottom",
        defaultValue: [20, 80],
    },
};

