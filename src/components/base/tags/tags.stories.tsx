import type { Meta, StoryObj } from "@storybook/react";
import { TagGroup, TagList, Tag } from "./tags";

const meta: Meta<typeof TagGroup> = {
    title: "Components/Tags",
    component: TagGroup,
    args: {
        label: "Project labels",
        selectionMode: "none",
        size: "md",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TagGroup>;

const tags = [
    { id: "design", label: "Design" },
    { id: "research", label: "Research" },
    { id: "marketing", label: "Marketing", count: 12 },
    { id: "dev", label: "Development", avatarSrc: "https://i.pravatar.cc/48?img=16" },
];

export const Default: Story = {
    render: (args) => (
        <TagGroup {...args}>
            <TagList items={tags}>
                {(item) => (
                    <Tag key={item.id} id={item.id} count={item.count} avatarSrc={item.avatarSrc}>
                        {item.label}
                    </Tag>
                )}
            </TagList>
        </TagGroup>
    ),
};

export const WithSelection: Story = {
    render: (args) => (
        <TagGroup {...args} selectionMode="multiple" defaultSelectedKeys={["design", "dev"]}>
            <TagList items={tags}>
                {(item) => (
                    <Tag key={item.id} id={item.id} count={item.count} avatarSrc={item.avatarSrc}>
                        {item.label}
                    </Tag>
                )}
            </TagList>
        </TagGroup>
    ),
};

export const Small: Story = {
    render: (args) => (
        <TagGroup {...args} size="sm">
            <TagList items={tags}>
                {(item) => (
                    <Tag key={item.id} id={item.id} dot dotClassName="text-success-500">
                        {item.label}
                    </Tag>
                )}
            </TagList>
        </TagGroup>
    ),
};

