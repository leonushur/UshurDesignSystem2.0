import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./input-group";
import { Input } from "./input";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof InputGroup> = {
    title: "Components/Input/Group",
    component: InputGroup,
    args: {
        label: "URL",
        size: "md",
        prefix: "https://",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const WithButton: Story = {
    render: (args) => (
        <InputGroup
            {...args}
            trailingAddon={
                <Button size="sm" className="rounded-l-none">
                    Copy
                </Button>
            }
        >
            <Input placeholder="ushur.com" size={args.size} label={undefined} hint={undefined} />
        </InputGroup>
    ),
};

export const WithSelect: Story = {
    render: (args) => (
        <InputGroup
            {...args}
            prefix="USD"
            leadingAddon={<div className="rounded-l-lg border border-border-primary px-3 py-2 text-sm font-medium text-foreground-secondary">Monthly</div>}
        >
            <select className="w-full rounded-lg border border-border-secondary px-3 py-2 text-sm text-foreground-primary outline-none">
                <option>Stripe</option>
                <option>PayPal</option>
                <option>Square</option>
            </select>
        </InputGroup>
    ),
};

export const WithPrefixOnly: Story = {
    render: (args) => (
        <InputGroup {...args} trailingAddon={undefined}>
            <Input placeholder="workspace" size={args.size} label={undefined} hint={undefined} />
        </InputGroup>
    ),
};

