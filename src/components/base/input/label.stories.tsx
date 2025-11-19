import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
    title: "Components/Input/Label",
    component: Label,
    args: {
        children: "Email address",
        isRequired: true,
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithTooltip: Story = {
    args: {
        tooltip: "Used for account notifications",
        tooltipDescription: "We’ll never share your email",
    },
};

export const Optional: Story = {
    args: {
        isRequired: false,
        children: "Company website",
    },
};

