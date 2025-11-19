import type { Meta, StoryObj } from "@storybook/react";
import { BackgroundPattern } from "./index";

const meta: Meta<typeof BackgroundPattern> = {
    title: "Foundations/Background Patterns",
    component: BackgroundPattern,
    args: {
        size: "md",
        pattern: "circle",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        pattern: {
            control: "select",
            options: ["circle", "square", "grid", "grid-check"],
        },
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BackgroundPattern>;

export const Circle: Story = {
    args: {
        pattern: "circle",
    },
    render: (args) => (
        <div className="relative size-64 rounded-xl bg-secondary ring-1 ring-secondary_alt">
            <BackgroundPattern {...args} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
    ),
};

export const Square: Story = {
    args: {
        pattern: "square",
    },
    render: (args) => (
        <div className="relative size-64 rounded-xl bg-secondary ring-1 ring-secondary_alt">
            <BackgroundPattern {...args} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
    ),
};

export const Grid: Story = {
    args: {
        pattern: "grid",
    },
    render: (args) => (
        <div className="relative size-64 rounded-xl bg-secondary ring-1 ring-secondary_alt">
            <BackgroundPattern {...args} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
    ),
};

export const GridCheck: Story = {
    args: {
        pattern: "grid-check",
    },
    render: (args) => (
        <div className="relative size-64 rounded-xl bg-secondary ring-1 ring-secondary_alt">
            <BackgroundPattern {...args} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
    ),
};

export const AllPatterns: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-4">
            {(["circle", "square", "grid", "grid-check"] as const).map((pattern) => (
                <div key={pattern} className="flex flex-col gap-2">
                    <div className="relative size-32 rounded-lg bg-secondary ring-1 ring-secondary_alt">
                        <BackgroundPattern
                            pattern={pattern}
                            size="sm"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <p className="text-center text-sm font-medium capitalize text-secondary">{pattern}</p>
                </div>
            ))}
        </div>
    ),
};

