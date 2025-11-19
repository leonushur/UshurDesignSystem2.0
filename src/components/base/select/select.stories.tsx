import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const people = [
    { id: "1", label: "Elena Walls", supportingText: "Design", avatarUrl: "https://i.pravatar.cc/48?img=12" },
    { id: "2", label: "Trevor Harmon", supportingText: "Product", avatarUrl: "https://i.pravatar.cc/48?img=45" },
    { id: "3", label: "Lena Fox", supportingText: "Engineering", avatarUrl: "https://i.pravatar.cc/48?img=8" },
    { id: "4", label: "Alex Morgan", supportingText: "Research", avatarUrl: "https://i.pravatar.cc/48?img=16", isDisabled: true },
];

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
    args: {
        label: "Assignee",
        placeholder: "Select a teammate",
        size: "md",
        items: people,
        children: (item: (typeof people)[number]) => (
            <Select.Item key={item.id} id={item.id} textValue={item.label}>
                {item.label}
            </Select.Item>
        ),
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md"],
        },
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithSupportingText: Story = {
    args: {
        children: (item) => (
            <Select.Item key={item.id} id={item.id} textValue={item.label} supportingText={item.supportingText}>
                {item.label}
            </Select.Item>
        ),
    },
};

export const Small: Story = {
    args: {
        size: "sm",
    },
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

