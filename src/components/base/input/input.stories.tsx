import type { Meta, StoryObj } from "@storybook/react";
import { SearchLg } from "@untitledui/icons";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
    title: "Components/Input/Text",
    component: Input,
    args: {
        label: "Email address",
        placeholder: "name@company.com",
        hint: "We’ll never share your email.",
        size: "md",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md"],
        },
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithIcon: Story = {
    args: {
        label: "Search",
        placeholder: "Search documentation",
        icon: SearchLg,
    },
};

export const WithShortcutAndTooltip: Story = {
    args: {
        label: "Command bar",
        placeholder: "Press ⌘K",
        shortcut: true,
        tooltip: "Quick actions and settings",
    },
};

export const Invalid: Story = {
    args: {
        label: "Email address",
        placeholder: "name@company.com",
        isInvalid: true,
        errorMessage: "Please enter a valid email",
    },
};

