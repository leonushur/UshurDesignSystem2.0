import type { Meta, StoryObj } from "@storybook/react";
import { BlogPostPage } from "./blog-post-pages";

const meta: Meta<typeof BlogPostPage> = {
    title: "Marketing/Examples/Blog Post Pages",
    component: BlogPostPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof BlogPostPage>;

export const Default: Story = {};

