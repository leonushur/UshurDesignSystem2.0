import type { Meta, StoryObj } from "@storybook/react";
import { Bell01, CheckCircle, Heart } from "@untitledui-pro/icons/line";
import {
    Badge,
    BadgeIcon,
    BadgeWithButton,
    BadgeWithDot,
    BadgeWithFlag,
    BadgeWithIcon,
    BadgeWithImage,
} from "./badges";

const badgeColors = [
    "gray",
    "brand",
    "error",
    "warning",
    "success",
    "gray-blue",
    "blue-light",
    "blue",
    "indigo",
    "purple",
    "pink",
    "orange",
] as const;

const meta: Meta<typeof Badge> = {
    title: "Components/Badges",
    component: Badge,
    subcomponents: {
        BadgeWithDot,
        BadgeWithIcon,
        BadgeWithFlag,
        BadgeWithImage,
        BadgeWithButton,
        BadgeIcon,
    },
    argTypes: {
        color: {
            control: "select",
            options: badgeColors,
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        type: {
            control: "select",
            options: ["pill-color", "color", "modern"],
        },
    },
    args: {
        color: "gray",
        size: "md",
        children: "Badge",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Pill: Story = {
    args: {
        type: "pill-color",
    },
};

export const Standard: Story = {
    args: {
        type: "color",
    },
};

export const Modern: Story = {
    args: {
        type: "modern",
    },
};

export const AllColors: Story = {
    render: (args) => (
        <div className="flex flex-wrap gap-3">
            {badgeColors.map((color) => (
                <Badge key={color} {...args} color={color}>
                    {color}
                </Badge>
            ))}
        </div>
    ),
    args: {
        type: "pill-color",
    },
};

export const WithDot: Story = {
    render: (args) => (
        <BadgeWithDot type={args.type} size={args.size} color={args.color}>
            New update
        </BadgeWithDot>
    ),
};

export const WithIconLeading: Story = {
    render: (args) => (
        <BadgeWithIcon type={args.type} size={args.size} color={args.color} iconLeading={CheckCircle}>
            Verified
        </BadgeWithIcon>
    ),
};

export const WithIconTrailing: Story = {
    render: (args) => (
        <BadgeWithIcon type={args.type} size={args.size} color={args.color} iconTrailing={Bell01}>
            Alert
        </BadgeWithIcon>
    ),
};

export const WithFlag: Story = {
    render: (args) => (
        <BadgeWithFlag type={args.type} size={args.size} color={args.color} flag="US">
            United States
        </BadgeWithFlag>
    ),
};

export const WithImage: Story = {
    render: (args) => (
        <BadgeWithImage
            type={args.type}
            size={args.size}
            color={args.color}
            imgSrc="https://i.pravatar.cc/48?img=5"
        >
            Maria Soto
        </BadgeWithImage>
    ),
};

export const WithButton: Story = {
    render: (args) => (
        <BadgeWithButton type={args.type} size={args.size} color={args.color} buttonLabel="Dismiss">
            Notification
        </BadgeWithButton>
    ),
};

export const IconOnly: Story = {
    render: (args) => <BadgeIcon type={args.type} size={args.size} color={args.color} icon={Heart} />,
};

