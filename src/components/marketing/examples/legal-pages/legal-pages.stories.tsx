import type { Meta, StoryObj } from "@storybook/react";
import { LegalPage } from "./legal-pages";

const meta: Meta<typeof LegalPage> = {
    title: "Marketing/Examples/Legal Pages",
    component: LegalPage,
    parameters: {
        layout: "fullscreen",
        controls: { disable: true },
    },
};

export default meta;

type Story = StoryObj<typeof LegalPage>;

export const Default: Story = {};

