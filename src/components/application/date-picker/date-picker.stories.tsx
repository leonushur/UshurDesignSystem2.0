import type { Meta, StoryObj } from "@storybook/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { DatePicker } from "./date-picker";

const meta: Meta<typeof DatePicker> = {
    title: "Application/Date Picker/Single",
    component: DatePicker,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: today(getLocalTimeZone()),
    },
};

