import type { Meta, StoryObj } from "@storybook/react";
import { useListData } from "react-stately";
import { MultiSelect } from "./multi-select";
import type { SelectItemType } from "./select";
import { Select } from "./select";

const people: SelectItemType[] = [
    { id: "1", label: "Elena Walls", supportingText: "Design", avatarUrl: "https://i.pravatar.cc/48?img=12" },
    { id: "2", label: "Trevor Harmon", supportingText: "Product", avatarUrl: "https://i.pravatar.cc/48?img=45" },
    { id: "3", label: "Lena Fox", supportingText: "Engineering", avatarUrl: "https://i.pravatar.cc/48?img=8" },
    { id: "4", label: "Alex Morgan", supportingText: "Research", avatarUrl: "https://i.pravatar.cc/48?img=16" },
    { id: "5", label: "Maya Patel", supportingText: "Marketing", avatarUrl: "https://i.pravatar.cc/48?img=32" },
];

const meta: Meta<typeof MultiSelect> = {
    title: "Components/Select/MultiSelect",
    component: MultiSelect,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

const Template = (args: Story["args"]) => {
    const selectedItems = useListData<SelectItemType>({
        initialItems: [],
    });

    return (
        <MultiSelect
            {...args}
            selectedItems={selectedItems}
            items={people}
            shortcut
            label="Collaborators"
            placeholder="SearchMd teammates"
        >
            {(item) => (
                <MultiSelect.Item key={item.id} id={item.id} textValue={item.label} supportingText={item.supportingText}>
                    {item.label}
                </MultiSelect.Item>
            )}
        </MultiSelect>
    );
};

export const Default: Story = {
    render: Template,
};

export const Small: Story = {
    render: (args) => <Template {...args} size="sm" />,
};

export const WithoutShortcut: Story = {
    render: (args) => <Template {...args} shortcut={false} />,
};

