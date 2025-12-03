import type { Meta, StoryObj } from "@storybook/react";
import { Plus, Settings01, Download01, Upload01 } from "@untitledui-pro/icons/line";
import { PageHeader, PageHeaderWithTabs, CardHeader, SectionHeader, SectionFooter } from "./headers";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof PageHeader> = {
    title: "Application/Headers",
    component: PageHeader,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type PageHeaderStory = StoryObj<typeof PageHeader>;

export const DefaultPageHeader: PageHeaderStory = {
    args: {
        title: "Projects",
        description: "Create and manage your projects",
        primaryAction: "Add project",
        secondaryAction: "Import",
        primaryActionIcon: Plus,
    },
};

export const PageHeaderWithBreadcrumb: PageHeaderStory = {
    render: () => (
        <PageHeader
            title="Campaign Details"
            description="View and edit your campaign settings"
            breadcrumb={
                <Breadcrumbs
                    items={[
                        { label: "Projects", href: "/projects" },
                        { label: "Marketing", href: "/marketing" },
                        { label: "Campaign Details" },
                    ]}
                />
            }
            primaryAction="Save changes"
            secondaryAction="Cancel"
        />
    ),
};

export const SimplePageHeader: PageHeaderStory = {
    args: {
        title: "Settings",
    },
};

export const WithTabs: StoryObj<typeof PageHeaderWithTabs> = {
    render: () => (
        <PageHeaderWithTabs
            title="Team Settings"
            breadcrumb={
                <Breadcrumbs
                    items={[
                        { label: "Settings", href: "/settings" },
                        { label: "Team" },
                    ]}
                />
            }
            primaryAction="Invite member"
            primaryActionIcon={Plus}
            tabs={
                <div className="flex gap-4">
                    <button className="border-b-2 border-border-brand px-1 pb-3 text-sm font-semibold text-fg-brand-secondary">
                        Members
                    </button>
                    <button className="border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-fg-tertiary hover:text-fg-secondary">
                        Roles
                    </button>
                    <button className="border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-fg-tertiary hover:text-fg-secondary">
                        Permissions
                    </button>
                </div>
            }
        />
    ),
};

export const CardHeaderDefault: StoryObj<typeof CardHeader> = {
    render: () => (
        <div className="max-w-md rounded-xl border border-border-secondary bg-bg-primary p-5">
            <CardHeader
                title="Account settings"
                description="Manage your account details and preferences"
            />
        </div>
    ),
};

export const CardHeaderWithIcon: StoryObj<typeof CardHeader> = {
    render: () => (
        <div className="max-w-md rounded-xl border border-border-secondary bg-bg-primary p-5">
            <CardHeader
                title="General settings"
                description="Configure your workspace preferences"
                icon={Settings01}
                action={<Button color="tertiary" size="sm">Edit</Button>}
            />
        </div>
    ),
};

export const CardHeaderWithDivider: StoryObj<typeof CardHeader> = {
    render: () => (
        <div className="max-w-md rounded-xl border border-border-secondary bg-bg-primary p-5">
            <CardHeader
                title="Export data"
                description="Download your data in various formats"
                icon={Download01}
                action={<Button color="primary" size="sm" iconLeading={Download01}>Export</Button>}
                divider
            />
            <div className="pt-4 text-sm text-fg-tertiary">
                Select the data you want to export and choose your preferred format.
            </div>
        </div>
    ),
};

export const SectionHeaderDefault: StoryObj<typeof SectionHeader> = {
    render: () => (
        <SectionHeader
            title="Personal information"
            description="Update your personal details here"
        />
    ),
};

export const SectionHeaderWithAction: StoryObj<typeof SectionHeader> = {
    render: () => (
        <SectionHeader
            title="Team members"
            description="Manage your team and their permissions"
            action={<Button color="primary" size="sm" iconLeading={Plus}>Add member</Button>}
        />
    ),
};

export const SectionHeaderSizes: StoryObj<typeof SectionHeader> = {
    render: () => (
        <div className="flex flex-col gap-8">
            <SectionHeader title="Small Header" description="This is a small section header" size="sm" />
            <SectionHeader title="Medium Header" description="This is a medium section header" size="md" />
            <SectionHeader title="Large Header" description="This is a large section header" size="lg" />
        </div>
    ),
};

export const SectionFooterDefault: StoryObj<typeof SectionFooter> = {
    render: () => (
        <div className="max-w-xl">
            <SectionFooter
                helpText="Learn more about managing your settings"
                primaryAction="Save changes"
                secondaryAction="Cancel"
            />
        </div>
    ),
};

export const SectionFooterWithoutHelp: StoryObj<typeof SectionFooter> = {
    render: () => (
        <div className="max-w-xl">
            <SectionFooter primaryAction="Continue" secondaryAction="Back" />
        </div>
    ),
};

export const AllVariants: PageHeaderStory = {
    render: () => (
        <div className="flex flex-col gap-12">
            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Page Header</p>
                <PageHeader
                    title="Dashboard"
                    description="Welcome back! Here's what's happening."
                    primaryAction="Create new"
                    primaryActionIcon={Plus}
                />
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Page Header with Breadcrumb</p>
                <PageHeader
                    title="Project Settings"
                    breadcrumb={
                        <Breadcrumbs
                            items={[
                                { label: "Projects", href: "#" },
                                { label: "Marketing", href: "#" },
                                { label: "Settings" },
                            ]}
                        />
                    }
                    primaryAction="Save"
                    secondaryAction="Discard"
                />
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Card Headers</p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border-secondary bg-bg-primary p-5">
                        <CardHeader title="Simple Card" description="A basic card header" />
                    </div>
                    <div className="rounded-xl border border-border-secondary bg-bg-primary p-5">
                        <CardHeader
                            title="With Icon"
                            description="Card header with an icon"
                            icon={Upload01}
                            action={<Button color="tertiary" size="sm">Action</Button>}
                        />
                    </div>
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Section Header & Footer</p>
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-5">
                    <SectionHeader
                        title="Notification preferences"
                        description="Choose how you want to be notified"
                    />
                    <div className="py-6 text-sm text-fg-tertiary">
                        [Section content goes here]
                    </div>
                    <SectionFooter
                        helpText="Changes will take effect immediately"
                        primaryAction="Save preferences"
                        secondaryAction="Reset to default"
                    />
                </div>
            </div>
        </div>
    ),
};

