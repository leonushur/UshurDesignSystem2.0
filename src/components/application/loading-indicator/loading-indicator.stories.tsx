import type { Meta, StoryObj } from "@storybook/react";
import { LoadingIndicator } from "./loading-indicator";

const meta: Meta<typeof LoadingIndicator> = {
    title: "Patterns/Loading Indicator",
    component: LoadingIndicator,
    args: {
        type: "line-simple",
        size: "md",
    },
    argTypes: {
        type: {
            control: "select",
            options: ["line-simple", "line-spinner", "dot-circle"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
        },
        label: {
            control: "text",
        },
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoadingIndicator>;

export const LineSimple: Story = {
    args: {
        type: "line-simple",
    },
};

export const LineSpinner: Story = {
    args: {
        type: "line-spinner",
    },
};

export const DotCircle: Story = {
    args: {
        type: "dot-circle",
    },
};

export const WithLabel: Story = {
    args: {
        type: "line-simple",
        label: "Loading...",
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-end gap-8">
            <LoadingIndicator type="line-simple" size="sm" label="Small" />
            <LoadingIndicator type="line-simple" size="md" label="Medium" />
            <LoadingIndicator type="line-simple" size="lg" label="Large" />
            <LoadingIndicator type="line-simple" size="xl" label="Extra Large" />
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div className="flex items-center gap-8">
            <LoadingIndicator type="line-simple" size="md" label="Line Simple" />
            <LoadingIndicator type="line-spinner" size="md" label="Line Spinner" />
            <LoadingIndicator type="dot-circle" size="md" label="Dot Circle" />
        </div>
    ),
};

