import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./tabs";

const items = [
    { id: "overview", label: "Overview", badge: 6 },
    { id: "analytics", label: "Analytics" },
    { id: "activity", label: "Activity" },
    { id: "settings", label: "Settings" },
];

const meta: Meta<typeof Tabs> = {
    title: "Application/Tabs",
    component: Tabs,
    args: {
        defaultSelectedKey: "overview",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const Panels = () => (
    <Tabs.Panel className="mt-6 rounded-lg border border-border-secondary p-6 text-sm text-foreground-secondary">
        Tab content placeholder — swap with product data.
    </Tabs.Panel>
);

export const ButtonBrand: Story = {
    render: (args) => (
        <Tabs {...args}>
            <Tabs.List items={items} size="md" type="button-brand">
                {(item) => (
                    <Tabs.Item key={item.id} id={item.id} badge={item.badge}>
                        {item.label}
                    </Tabs.Item>
                )}
            </Tabs.List>
            <Panels />
        </Tabs>
    ),
};

export const UnderlineFullWidth: Story = {
    render: (args) => (
        <Tabs {...args}>
            <Tabs.List items={items} size="md" type="underline" fullWidth>
                {(item) => (
                    <Tabs.Item key={item.id} id={item.id}>
                        {item.label}
                    </Tabs.Item>
                )}
            </Tabs.List>
            <Panels />
        </Tabs>
    ),
};

export const VerticalLine: Story = {
    render: (args) => (
        <Tabs {...args} orientation="vertical" className="md:flex-row md:gap-8">
            <Tabs.List items={items} size="sm" type="line" orientation="vertical">
                {(item) => (
                    <Tabs.Item key={item.id} id={item.id}>
                        {item.label}
                    </Tabs.Item>
                )}
            </Tabs.List>
            <Panels />
        </Tabs>
    ),
};

