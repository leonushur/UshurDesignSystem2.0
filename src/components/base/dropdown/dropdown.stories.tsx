import type { Meta, StoryObj } from "@storybook/react";
import { Check, Copy, Edit02, Trash02 } from "@untitledui/icons";
import { Dropdown } from "./dropdown";

const meta: Meta = {
    title: "Components/Dropdown",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

const menuContent = (
    <>
        <Dropdown.Section>
            <Dropdown.SectionHeader className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
                Actions
            </Dropdown.SectionHeader>
            <Dropdown.Item id="rename" label="Rename" icon={Edit02} />
            <Dropdown.Item id="duplicate" label="Duplicate" icon={Copy} addon="⌘D" />
            <Dropdown.Item id="archive" label="Archive" icon={Trash02} />
        </Dropdown.Section>
        <Dropdown.Separator />
        <Dropdown.Section>
            <Dropdown.Item id="mark-complete" label="Mark as complete" icon={Check} />
        </Dropdown.Section>
    </>
);

export const Default: Story = {
    render: () => (
        <Dropdown.Root>
            <Dropdown.DotsButton />
            <Dropdown.Popover>
                <Dropdown.Menu>{menuContent}</Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    ),
};

export const CustomTrigger: Story = {
    render: () => (
        <Dropdown.Root>
            <button className="rounded-lg border border-border-primary px-4 py-2 text-sm font-semibold text-foreground-secondary outline-focus-ring">
                Open menu
            </button>
            <Dropdown.Popover>
                <Dropdown.Menu>{menuContent}</Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    ),
};

