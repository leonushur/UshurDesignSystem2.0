import type { Meta, StoryObj } from "@storybook/react";
import { AboutPage } from "./about-pages";

const meta: Meta<typeof AboutPage> = {
    title: "Marketing/Examples/About Pages",
    component: AboutPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {};

