import type { Meta, StoryObj } from "@storybook/react";
import { SearchLg, Upload01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { EmptyState } from "./empty-state";

const meta: Meta<typeof EmptyState> = {
    title: "Patterns/Empty State",
    component: EmptyState,
    args: {
        size: "lg",
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

type Story = StoryObj<typeof EmptyState>;

export const WithIllustration: Story = {
    render: (args) => (
        <EmptyState {...args}>
            <EmptyState.Header>
                <EmptyState.Illustration type="cloud" color="gray" />
            </EmptyState.Header>
            <EmptyState.Content>
                <EmptyState.Title>No projects found</EmptyState.Title>
                <EmptyState.Description>
                    Get started by creating a new project or uploading existing files.
                </EmptyState.Description>
            </EmptyState.Content>
            <EmptyState.Footer>
                <Button color="secondary">Learn more</Button>
                <Button>Create project</Button>
            </EmptyState.Footer>
        </EmptyState>
    ),
};

export const WithFeaturedIcon: Story = {
    render: (args) => (
        <EmptyState {...args}>
            <EmptyState.Header>
                <EmptyState.FeaturedIcon icon={SearchLg} color="gray" theme="modern" />
            </EmptyState.Header>
            <EmptyState.Content>
                <EmptyState.Title>No results found</EmptyState.Title>
                <EmptyState.Description>
                    Try adjusting your search or filter to find what you&apos;re looking for.
                </EmptyState.Description>
            </EmptyState.Content>
            <EmptyState.Footer>
                <Button color="secondary">Clear filters</Button>
            </EmptyState.Footer>
        </EmptyState>
    ),
};

export const WithFileIcon: Story = {
    render: (args) => (
        <EmptyState {...args}>
            <EmptyState.Header>
                <EmptyState.FileTypeIcon type="folder" theme="solid" />
            </EmptyState.Header>
            <EmptyState.Content>
                <EmptyState.Title>No files uploaded</EmptyState.Title>
                <EmptyState.Description>
                    Upload your first file to get started with this project.
                </EmptyState.Description>
            </EmptyState.Content>
            <EmptyState.Footer>
                <Button iconLeading={Upload01}>Upload file</Button>
            </EmptyState.Footer>
        </EmptyState>
    ),
};

export const Small: Story = {
    render: () => (
        <EmptyState size="sm">
            <EmptyState.Header pattern="none">
                <EmptyState.FeaturedIcon icon={SearchLg} color="gray" theme="light" />
            </EmptyState.Header>
            <EmptyState.Content>
                <EmptyState.Title>No data available</EmptyState.Title>
                <EmptyState.Description>There is no data to display at this time.</EmptyState.Description>
            </EmptyState.Content>
        </EmptyState>
    ),
};

export const Medium: Story = {
    render: () => (
        <EmptyState size="md">
            <EmptyState.Header pattern="grid">
                <EmptyState.Illustration type="box" color="brand" />
            </EmptyState.Header>
            <EmptyState.Content>
                <EmptyState.Title>Your inbox is empty</EmptyState.Title>
                <EmptyState.Description>All caught up! No new messages at this time.</EmptyState.Description>
            </EmptyState.Content>
        </EmptyState>
    ),
};
