import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton, RadioGroup } from "./radio-buttons";

const meta: Meta<typeof RadioGroup> = {
    title: "Components/Radio Buttons",
    component: RadioGroup,
    subcomponents: { RadioButton },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md"],
        },
        orientation: {
            control: "select",
            options: ["vertical", "horizontal"],
        },
    },
    args: {
        size: "md",
        orientation: "vertical",
        value: "basic-1",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const sampleOptions = [
    {
        value: "basic-1",
        label: "Basic plan",
        hint: "Essential features",
    },
    {
        value: "basic-2",
        label: "Growth plan",
        hint: "Collaboration tools",
    },
    {
        value: "basic-3",
        label: "Enterprise",
        hint: "Custom controls",
    },
];

export const Default: Story = {
    render: (args) => (
        <RadioGroup {...args}>
            {sampleOptions.map((option) => (
                <RadioButton key={option.value} value={option.value} label={option.label} hint={option.hint} />
            ))}
        </RadioGroup>
    ),
};

export const Horizontal: Story = {
    render: (args) => (
        <RadioGroup {...args} className="flex-row gap-6">
            {sampleOptions.slice(0, 2).map((option) => (
                <RadioButton key={option.value} value={option.value} label={option.label} hint={option.hint} />
            ))}
        </RadioGroup>
    ),
    args: {
        orientation: "horizontal",
    },
};

export const Small: Story = {
    render: (args) => (
        <RadioGroup {...args} size="sm">
            {sampleOptions.map((option) => (
                <RadioButton key={option.value} value={option.value} label={option.label} hint={option.hint} />
            ))}
        </RadioGroup>
    ),
};

export const DisabledOption: Story = {
    render: (args) => (
        <RadioGroup {...args}>
            {sampleOptions.map((option, index) => (
                <RadioButton
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    hint={option.hint}
                    isDisabled={index === 2}
                />
            ))}
        </RadioGroup>
    ),
};

