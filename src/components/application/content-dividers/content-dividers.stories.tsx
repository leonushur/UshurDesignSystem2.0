import type { Meta, StoryObj } from "@storybook/react";
import { Plus, Star01, Heart } from "@untitledui-pro/icons/line";
import { Divider, DividerWithText, DividerWithButton, DividerWithIcon, Spacer } from "./content-dividers";

const meta: Meta<typeof Divider> = {
    title: "Application/Content Dividers",
    component: Divider,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

export const BasicDivider: StoryObj<typeof Divider> = {
    render: () => (
        <div className="w-full max-w-md">
            <p className="text-sm text-fg-tertiary">Content above the divider</p>
            <Divider className="my-4" />
            <p className="text-sm text-fg-tertiary">Content below the divider</p>
        </div>
    ),
};

export const VerticalDivider: StoryObj<typeof Divider> = {
    render: () => (
        <div className="flex h-16 items-center gap-4">
            <span className="text-sm text-fg-tertiary">Left</span>
            <Divider orientation="vertical" />
            <span className="text-sm text-fg-tertiary">Center</span>
            <Divider orientation="vertical" />
            <span className="text-sm text-fg-tertiary">Right</span>
        </div>
    ),
};

export const WithTextCenter: StoryObj<typeof DividerWithText> = {
    render: () => (
        <div className="w-full max-w-md">
            <DividerWithText>or continue with</DividerWithText>
        </div>
    ),
};

export const WithTextPositions: StoryObj<typeof DividerWithText> = {
    render: () => (
        <div className="flex w-full max-w-md flex-col gap-6">
            <DividerWithText position="left">Left aligned</DividerWithText>
            <DividerWithText position="center">Center aligned</DividerWithText>
            <DividerWithText position="right">Right aligned</DividerWithText>
        </div>
    ),
};

export const WithButton: StoryObj<typeof DividerWithButton> = {
    render: () => (
        <div className="w-full max-w-md">
            <div className="mb-4 rounded-lg bg-bg-secondary p-4">
                <p className="text-sm text-fg-tertiary">Previous content</p>
            </div>
            <DividerWithButton onClick={() => console.log("Load more")}>
                <Plus className="size-4" />
                Load more
            </DividerWithButton>
            <div className="mt-4 rounded-lg bg-bg-secondary p-4">
                <p className="text-sm text-fg-tertiary">More content</p>
            </div>
        </div>
    ),
};

export const WithIcon: StoryObj<typeof DividerWithIcon> = {
    render: () => (
        <div className="flex w-full max-w-md flex-col gap-6">
            <DividerWithIcon icon={<Star01 className="size-4" />} />
            <DividerWithIcon icon={<Heart className="size-4" />} />
            <DividerWithIcon icon={<span className="text-lg">✨</span>} />
        </div>
    ),
};

export const SpacerSizes: StoryObj<typeof Spacer> = {
    render: () => (
        <div className="w-full max-w-md">
            <div className="rounded-lg bg-bg-secondary p-4">
                <p className="text-sm text-fg-tertiary">Content block 1</p>
            </div>
            <Spacer size="xs" />
            <p className="text-xs text-fg-quaternary">xs spacer (8px)</p>
            
            <div className="rounded-lg bg-bg-secondary p-4">
                <p className="text-sm text-fg-tertiary">Content block 2</p>
            </div>
            <Spacer size="sm" />
            <p className="text-xs text-fg-quaternary">sm spacer (16px)</p>
            
            <div className="rounded-lg bg-bg-secondary p-4">
                <p className="text-sm text-fg-tertiary">Content block 3</p>
            </div>
            <Spacer size="md" />
            <p className="text-xs text-fg-quaternary">md spacer (24px)</p>
            
            <div className="rounded-lg bg-bg-secondary p-4">
                <p className="text-sm text-fg-tertiary">Content block 4</p>
            </div>
            <Spacer size="lg" />
            <p className="text-xs text-fg-quaternary">lg spacer (32px)</p>
            
            <div className="rounded-lg bg-bg-secondary p-4">
                <p className="text-sm text-fg-tertiary">Content block 5</p>
            </div>
        </div>
    ),
};

export const AllVariants: StoryObj = {
    render: () => (
        <div className="flex w-full max-w-lg flex-col gap-8">
            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Basic Divider</p>
                <Divider />
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Vertical Dividers</p>
                <div className="flex h-8 items-center gap-4">
                    <span className="text-sm">Item 1</span>
                    <Divider orientation="vertical" />
                    <span className="text-sm">Item 2</span>
                    <Divider orientation="vertical" />
                    <span className="text-sm">Item 3</span>
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">With Text</p>
                <DividerWithText>OR</DividerWithText>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">With Button</p>
                <DividerWithButton>
                    <Plus className="size-4" />
                    Add section
                </DividerWithButton>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">With Icon</p>
                <DividerWithIcon icon={<Star01 className="size-4" />} />
            </div>
        </div>
    ),
};

