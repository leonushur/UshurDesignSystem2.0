import type { Meta, StoryObj } from "@storybook/react";
import { Illustration } from "./index";

const meta: Meta<typeof Illustration> = {
    title: "Foundations/Illustrations",
    component: Illustration,
    args: {
        size: "lg",
        type: "cloud",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        type: {
            control: "select",
            options: ["box", "cloud", "documents", "credit-card"],
        },
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Illustration>;

export const Cloud: Story = {
    args: {
        type: "cloud",
    },
};

export const Box: Story = {
    args: {
        type: "box",
    },
};

export const Documents: Story = {
    args: {
        type: "documents",
    },
};

export const CreditCard: Story = {
    args: {
        type: "credit-card",
    },
};

export const AllIllustrations: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-8">
            {(["cloud", "box", "documents", "credit-card"] as const).map((type) => (
                <div key={type} className="flex flex-col items-center gap-3">
                    <Illustration type={type} size="md" />
                    <p className="text-center text-sm font-medium capitalize text-secondary">{type}</p>
                </div>
            ))}
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-end gap-8">
            <div className="flex flex-col items-center gap-2">
                <Illustration type="cloud" size="sm" />
                <p className="text-xs text-tertiary">Small</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Illustration type="cloud" size="md" />
                <p className="text-xs text-tertiary">Medium</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Illustration type="cloud" size="lg" />
                <p className="text-xs text-tertiary">Large</p>
            </div>
        </div>
    ),
};

