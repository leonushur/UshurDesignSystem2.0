import type { Meta, StoryObj } from "@storybook/react";
import { FAQPage } from "./faq-pages";

const meta: Meta<typeof FAQPage> = {
    title: "Marketing/Examples/FAQ Pages",
    component: FAQPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof FAQPage>;

export const Default: Story = {};

