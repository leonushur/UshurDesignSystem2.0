import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Star01 } from "@untitledui/icons";

const meta: Meta<typeof Button> = {
    title: "Components/Buttons/Primary",
    component: Button,
    args: {
        children: "Primary Button",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
    args: {
        color: "primary",
    },
};

export const Secondary: Story = {
    args: {
        color: "secondary",
    },
};

export const WithIcon: Story = {
    args: {
        iconLeading: Star01,
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const Sizes: Story = {
    render: () => {
        const sizes = ["sm", "md", "lg", "xl"] as const;
        return (
            <div className="flex flex-wrap gap-4">
                {sizes.map((size) => (
                    <Button key={size} size={size}>
                        {size.toUpperCase()}
                    </Button>
                ))}
            </div>
        );
    },
};
