import type { Meta, StoryObj } from "@storybook/react";
import { PaymentInput } from "./input-payment";

const meta: Meta<typeof PaymentInput> = {
    title: "Components/Input/Payment",
    component: PaymentInput,
    args: {
        label: "Card number",
        placeholder: "1234 5678 9012 3456",
        hint: "We accept Visa, Mastercard, Amex, Discover and UnionPay.",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PaymentInput>;

export const Default: Story = {};

export const PreFilled: Story = {
    args: {
        value: "4111111111111111",
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

