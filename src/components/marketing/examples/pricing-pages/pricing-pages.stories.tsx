import type { Meta, StoryObj } from "@storybook/react";
import { PricingPage } from "./pricing-pages";

const meta: Meta<typeof PricingPage> = {
    title: "Marketing/Examples/Pricing Pages",
    component: PricingPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof PricingPage>;

export const Default: Story = {};

