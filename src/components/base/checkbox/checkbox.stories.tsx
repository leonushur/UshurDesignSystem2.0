import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        size: "md",
        defaultSelected: true,
        label: "Subscribe to updates",
        hint: "We’ll send weekly product news.",
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        size: "sm",
    },
};

export const Indeterminate: Story = {
    args: {
        isSelected: true,
        isIndeterminate: true,
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

export const Group: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox value="email" label="Email notifications" defaultSelected />
            <Checkbox value="sms" label="SMS notifications" />
            <Checkbox value="push" label="Push notifications" />
        </div>
    ),
};

