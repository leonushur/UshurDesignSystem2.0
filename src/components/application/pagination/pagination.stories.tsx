import type { Meta, StoryObj } from "@storybook/react";
import {
    PaginationButtonGroup,
    PaginationCardDefault,
    PaginationCardMinimal,
    PaginationPageDefault,
    PaginationPageMinimalCenter,
} from "./pagination";

const meta: Meta<typeof PaginationPageDefault> = {
    title: "Application/Pagination",
    component: PaginationPageDefault,
    args: {
        page: 3,
        total: 10,
        rounded: false,
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PaginationPageDefault>;

export const Default: Story = {};

export const Rounded: Story = {
    args: {
        rounded: true,
    },
};

export const MinimalCenter: Story = {
    render: (args) => <PaginationPageMinimalCenter {...args} />,
};

export const Card: Story = {
    render: (args) => <PaginationCardDefault {...args} />,
};

export const CardMinimal: Story = {
    render: () => <PaginationCardMinimal page={4} total={12} align="center" />,
};

export const ButtonGroupVariant: Story = {
    render: () => <PaginationButtonGroup page={5} total={20} align="center" />,
};

