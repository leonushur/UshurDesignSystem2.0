import type { Meta, StoryObj } from "@storybook/react";
import { TeamPage } from "./team-pages";

const meta: Meta<typeof TeamPage> = {
    title: "Marketing/Examples/Team Pages",
    component: TeamPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof TeamPage>;

export const Default: Story = {};

