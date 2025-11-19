import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar/Avatar",
    component: Avatar,
    args: {
        size: "md",
        initials: "US",
        alt: "Ushur Sample",
    },
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
    args: {
        contrastBorder: true,
        initials: "US",
    },
};

export const Photo: Story = {
    args: {
        src: "https://i.pravatar.cc/160?img=32",
        alt: "Sample user",
    },
};

export const StatusOnline: Story = {
    args: {
        initials: "US",
        status: "online",
    },
};

export const Verified: Story = {
    args: {
        initials: "US",
        verified: true,
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-4">
            {(["xxs", "xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
                <Avatar key={size} {...args} size={size} />
            ))}
        </div>
    ),
    args: {
        initials: "US",
    },
};


