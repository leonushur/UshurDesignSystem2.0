import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./textarea";

const meta: Meta<typeof TextArea> = {
    title: "Components/Textarea",
    component: TextArea,
    args: {
        label: "Message",
        placeholder: "Leave a comment...",
        rows: 4,
        hint: "Markdown supported.",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
        hint: "Please enter at least 25 characters.",
    },
};

