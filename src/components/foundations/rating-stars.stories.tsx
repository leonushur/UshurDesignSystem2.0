import type { Meta, StoryObj } from "@storybook/react";
import { RatingStars } from "./rating-stars";

const meta: Meta<typeof RatingStars> = {
    title: "Foundations/Rating Stars",
    component: RatingStars,
    argTypes: {
        rating: {
            control: { type: "number", min: 0, max: 5, step: 0.1 },
        },
        stars: {
            control: { type: "number", min: 1, max: 10, step: 1 },
        },
    },
    args: {
        rating: 4.5,
        stars: 5,
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RatingStars>;

export const Default: Story = {};

export const PreciseRating: Story = {
    args: {
        rating: 3.2,
    },
};

export const TenStars: Story = {
    args: {
        stars: 10,
        rating: 7.5,
    },
};

export const LargeStars: Story = {
    args: {
        starClassName: "size-8 text-warning-500",
        rating: 4.8,
    },
};

export const CustomColor: Story = {
    args: {
        starClassName: "text-success-500",
        rating: 3.5,
    },
};

