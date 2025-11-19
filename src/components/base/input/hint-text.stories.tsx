import type { Meta, StoryObj } from "@storybook/react";
import { HintText } from "./hint-text";

const meta: Meta<typeof HintText> = {
    title: "Components/Input/HintText",
    component: HintText,
    args: {
        children: "We’ll never share your information.",
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HintText>;

export const Default: Story = {};

export const Error: Story = {
    args: {
        isInvalid: true,
        children: "Please enter a valid value.",
    },
};

