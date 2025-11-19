import type { Meta, StoryObj } from "@storybook/react";
import { FileTrigger } from "./file-upload-trigger";

const meta: Meta<typeof FileTrigger> = {
    title: "Components/File Upload Trigger",
    component: FileTrigger,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FileTrigger>;

export const Default: Story = {
    render: () => (
        <FileTrigger onSelect={(files) => console.log(files)}>
            <button className="rounded-lg border border-border-primary px-4 py-2 text-sm font-semibold text-foreground-secondary outline-focus-ring">
                Upload files
            </button>
        </FileTrigger>
    ),
};

export const MultipleFiles: Story = {
    render: () => (
        <FileTrigger allowsMultiple>
            <button className="rounded-lg border border-dashed border-border-secondary px-4 py-2 text-sm text-foreground-tertiary">
                Select multiple files
            </button>
        </FileTrigger>
    ),
};

