import type { Meta, StoryObj } from "@storybook/react";
import { InfoCircle } from "@untitledui-pro/icons/line";
import { Tooltip, TooltipTrigger } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    args: {
        title: "Payment status",
        description: "Updated 2 minutes ago",
        placement: "top",
        arrow: true,
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: (args) => (
        <Tooltip {...args}>
            <TooltipTrigger className="rounded-lg border border-border-secondary px-4 py-2 text-sm text-foreground-secondary">Hover me</TooltipTrigger>
        </Tooltip>
    ),
};

export const IconTrigger: Story = {
    render: (args) => (
        <Tooltip {...args} placement="right">
            <TooltipTrigger aria-label="Info">
                <InfoCircle className="size-5 text-foreground-tertiary" />
            </TooltipTrigger>
        </Tooltip>
    ),
};

