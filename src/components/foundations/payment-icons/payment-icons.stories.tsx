import type { Meta, StoryObj } from "@storybook/react";
import {
    AmexIcon,
    ApplePayIcon,
    DiscoverIcon,
    MastercardIcon,
    PayPalIcon,
    StripeIcon,
    UnionPayIcon,
    VisaIcon,
} from "./index";

const paymentIcons = [
    { name: "Visa", component: VisaIcon },
    { name: "Mastercard", component: MastercardIcon },
    { name: "American Express", component: AmexIcon },
    { name: "Discover", component: DiscoverIcon },
    { name: "Stripe", component: StripeIcon },
    { name: "PayPal", component: PayPalIcon },
    { name: "Apple Pay", component: ApplePayIcon },
    { name: "UnionPay", component: UnionPayIcon },
];

const meta: Meta<typeof VisaIcon> = {
    title: "Foundations/Icons/Payment",
    component: VisaIcon,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VisaIcon>;

export const Gallery: Story = {
    render: () => (
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {paymentIcons.map(({ name, component: Component }) => (
                <div key={name} className="flex items-center gap-3 rounded-xl border border-border-primary p-4">
                    <Component className="h-10 w-auto" />
                    <div>
                        <p className="text-sm font-medium text-foreground-primary">{name}</p>
                        <p className="text-xs text-foreground-secondary">Payment icon</p>
                    </div>
                </div>
            ))}
        </div>
    ),
};

export const SingleIcon: Story = {
    args: {
        className: "h-10 w-auto",
    },
};

