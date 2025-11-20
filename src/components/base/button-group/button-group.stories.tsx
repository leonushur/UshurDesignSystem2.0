import type { Meta, StoryObj } from "@storybook/react";
import { FilterFunnel01, LayoutGrid01, LayoutLeft, Settings01 } from "@untitledui-pro/icons/line";
import { ButtonGroup, ButtonGroupItem } from "./button-group";

const meta: Meta<typeof ButtonGroup> = {
    title: "Components/Button Group",
    component: ButtonGroup,
    subcomponents: { ButtonGroupItem },
    args: {
        size: "md",
        defaultSelectedValue: "grid",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const renderItems = () => (
    <>
        <ButtonGroupItem id="list" value="list" iconLeading={LayoutLeft}>
            List
        </ButtonGroupItem>
        <ButtonGroupItem id="grid" value="grid" iconLeading={LayoutGrid01}>
            Grid
        </ButtonGroupItem>
        <ButtonGroupItem id="filters" value="filters" iconLeading={FilterFunnel01}>
            Filters
        </ButtonGroupItem>
    </>
);

export const Default: Story = {
    render: (args) => <ButtonGroup {...args}>{renderItems()}</ButtonGroup>,
};

export const Large: Story = {
    render: (args) => (
        <ButtonGroup {...args} size="lg">
            {renderItems()}
        </ButtonGroup>
    ),
};

export const IconOnly: Story = {
    render: (args) => (
        <ButtonGroup {...args}>
            <ButtonGroupItem id="list-icon" value="list-icon" iconLeading={LayoutLeft} aria-label="List view" />
            <ButtonGroupItem id="grid-icon" value="grid-icon" iconLeading={LayoutGrid01} aria-label="Grid view" />
            <ButtonGroupItem id="settings" value="settings" iconLeading={Settings01} aria-label="Settings" />
        </ButtonGroup>
    ),
    args: {
        defaultSelectedValue: "grid-icon",
    },
};

export const Disabled: Story = {
    render: (args) => (
        <ButtonGroup {...args} isDisabled>
            {renderItems()}
        </ButtonGroup>
    ),
};

