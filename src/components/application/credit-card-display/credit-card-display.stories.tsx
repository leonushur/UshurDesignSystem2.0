import type { Meta, StoryObj } from "@storybook/react";
import { CreditCardDisplay } from "./credit-card-display";

const meta: Meta<typeof CreditCardDisplay> = {
    title: "Application/Credit Card Display",
    component: CreditCardDisplay,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CreditCardDisplay>;

export const Default: Story = {
    args: {
        cardNumber: "4532123456789012",
        cardholderName: "John Doe",
        expiryDate: "12/25",
        brand: "visa",
        masked: true,
    },
};

export const Mastercard: Story = {
    args: {
        cardNumber: "5425123456789012",
        cardholderName: "Jane Smith",
        expiryDate: "08/26",
        brand: "mastercard",
        masked: true,
    },
};

export const AmericanExpress: Story = {
    args: {
        cardNumber: "378282246310005",
        cardholderName: "Alex Johnson",
        expiryDate: "03/27",
        brand: "amex",
        masked: true,
    },
};

export const Discover: Story = {
    args: {
        cardNumber: "6011123456789012",
        cardholderName: "Sarah Williams",
        expiryDate: "11/25",
        brand: "discover",
        masked: true,
    },
};

export const Unmasked: Story = {
    args: {
        cardNumber: "4532123456789012",
        cardholderName: "John Doe",
        expiryDate: "12/25",
        brand: "visa",
        masked: false,
    },
};

export const PremiumVariant: Story = {
    args: {
        cardNumber: "5425123456789012",
        cardholderName: "Premium Member",
        expiryDate: "08/26",
        brand: "mastercard",
        variant: "premium",
        masked: true,
    },
};

export const DarkVariant: Story = {
    args: {
        cardNumber: "378282246310005",
        cardholderName: "Dark Card",
        expiryDate: "03/27",
        brand: "amex",
        variant: "dark",
        masked: true,
    },
};

export const GenericCard: Story = {
    args: {
        cardNumber: "1234567890123456",
        cardholderName: "Generic User",
        expiryDate: "01/28",
        brand: "generic",
        masked: true,
    },
};
