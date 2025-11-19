import type { Meta, StoryObj } from "@storybook/react";
import { ContactPage } from "./contact-pages";

const meta: Meta<typeof ContactPage> = {
    title: "Marketing/Examples/Contact Pages",
    component: ContactPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof ContactPage>;

export const Default: Story = {};

