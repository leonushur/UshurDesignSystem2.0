import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const people = [
    { id: "1", label: "Elena Walls", supportingText: "Design" },
    { id: "2", label: "Trevor Harmon", supportingText: "Product" },
    { id: "3", label: "Lena Fox", supportingText: "Engineering" },
    { id: "4", label: "Alex Morgan", supportingText: "Research" },
];

const meta: Meta<typeof Select.ComboBox> = {
    title: "Components/Select/ComboBox",
    component: Select.ComboBox,
    args: {
        label: "SearchMd team",
        placeholder: "Type a name",
        items: people,
        children: (item: (typeof people)[number]) => (
            <Select.Item key={item.id} id={item.id} textValue={item.label} supportingText={item.supportingText}>
                {item.label}
            </Select.Item>
        ),
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select.ComboBox>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        size: "sm",
    },
};

export const WithoutShortcut: Story = {
    args: {
        shortcut: false,
    },
};

