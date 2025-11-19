import type { Meta, StoryObj } from "@storybook/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { DateRangePicker } from "./date-range-picker";

const meta: Meta<typeof DateRangePicker> = {
    title: "Application/Date Picker/Range",
    component: DateRangePicker,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: {
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ weeks: 1 }),
        },
    },
};

