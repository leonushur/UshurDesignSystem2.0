import type { Meta, StoryObj } from "@storybook/react";
import { LandingPageModern } from "./landing-pages";
import { LandingPageProduct } from "./landing-pages-02";

const meta: Meta<typeof LandingPageModern> = {
    title: "Marketing/Examples/Landing Pages",
    component: LandingPageModern,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof LandingPageModern>;

export const Modern: Story = {};

export const Product: Story = {
    render: () => <LandingPageProduct />,
};

