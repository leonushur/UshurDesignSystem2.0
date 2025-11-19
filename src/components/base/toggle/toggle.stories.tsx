import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = {
    title: "Components/Toggle",
    component: Toggle,
    args: {
        label: "Enable notifications",
        hint: "Alerts and weekly summary.",
        size: "md",
        defaultSelected: true,
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

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const Slim: Story = {
    args: {
        slim: true,
        label: "Slim control",
        hint: undefined,
        defaultSelected: false,
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

