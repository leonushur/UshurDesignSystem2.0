import type { Meta, StoryObj } from "@storybook/react";
import { BlogPage } from "./blog-pages";

const meta: Meta<typeof BlogPage> = {
    title: "Marketing/Examples/Blog Pages",
    component: BlogPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof BlogPage>;

export const Default: Story = {};

