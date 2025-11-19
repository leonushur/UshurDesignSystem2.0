import type { Meta, StoryObj } from "@storybook/react";
import { Dot } from "./dot-icon";

const meta: Meta<typeof Dot> = {
    title: "Foundations/Dot Icon",
    component: Dot,
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md"],
        },
        className: {
            control: "text",
        },
    },
    args: {
        size: "md",
        className: "text-brand-solid",
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dot>;

export const Medium: Story = {};

export const Small: Story = {
    args: {
        size: "sm",
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4 text-brand-solid">
            <Dot size="sm" />
            <Dot size="md" />
        </div>
    ),
};

export const InlineExample: Story = {
    render: (args) => (
        <p className="text-sm text-secondary">
            Status
            <Dot {...args} className="mx-1 inline text-success-500" />
            Online
        </p>
    ),
    args: {
        size: "sm",
        className: "text-success-500",
    },
};

