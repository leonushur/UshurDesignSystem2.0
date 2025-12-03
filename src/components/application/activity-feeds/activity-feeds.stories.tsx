import type { Meta, StoryObj } from "@storybook/react";
import { Check, Edit03, MessageSquare01, Plus, Trash01, Upload01 } from "@untitledui-pro/icons/line";
import { ActivityFeed, ActivityFeedCompact, type ActivityItem } from "./activity-feeds";

const meta: Meta<typeof ActivityFeed> = {
    title: "Application/Activity Feeds",
    component: ActivityFeed,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

const sampleActivities: ActivityItem[] = [
    {
        id: "1",
        actor: "Olivia Rhye",
        avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        action: "created a new project",
        target: "Marketing Campaign Q4",
        timestamp: "2 hours ago",
    },
    {
        id: "2",
        actor: "Phoenix Baker",
        avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        action: "commented on",
        target: "Design System Update",
        details: '"Great work on the new button styles! The hover states look much better now."',
        timestamp: "4 hours ago",
    },
    {
        id: "3",
        actor: "Lana Steiner",
        avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        action: "uploaded 3 files to",
        target: "Assets folder",
        timestamp: "Yesterday at 2:30 PM",
    },
    {
        id: "4",
        actor: "Demi Wilkinson",
        avatarInitials: "DW",
        action: "completed task",
        target: "Update documentation",
        timestamp: "Yesterday at 11:00 AM",
    },
    {
        id: "5",
        actor: "Candice Wu",
        avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        action: "invited",
        target: "3 new team members",
        timestamp: "2 days ago",
    },
];

const iconActivities: ActivityItem[] = [
    {
        id: "1",
        actor: "System",
        action: "Project created",
        target: "Marketing Campaign",
        icon: <Plus className="size-4" />,
        iconColor: "brand",
        timestamp: "2 hours ago",
    },
    {
        id: "2",
        actor: "Olivia Rhye",
        action: "edited",
        target: "Homepage design",
        icon: <Edit03 className="size-4" />,
        iconColor: "gray",
        timestamp: "4 hours ago",
    },
    {
        id: "3",
        actor: "Phoenix Baker",
        action: "commented on the project",
        icon: <MessageSquare01 className="size-4" />,
        iconColor: "gray",
        timestamp: "5 hours ago",
    },
    {
        id: "4",
        actor: "System",
        action: "Task completed",
        target: "Design review",
        icon: <Check className="size-4" />,
        iconColor: "success",
        timestamp: "Yesterday",
    },
    {
        id: "5",
        actor: "Lana Steiner",
        action: "uploaded files",
        icon: <Upload01 className="size-4" />,
        iconColor: "brand",
        timestamp: "2 days ago",
    },
    {
        id: "6",
        actor: "Admin",
        action: "removed",
        target: "Unused assets",
        icon: <Trash01 className="size-4" />,
        iconColor: "error",
        timestamp: "3 days ago",
    },
];

export const Default: StoryObj<typeof ActivityFeed> = {
    args: {
        items: sampleActivities,
    },
};

export const WithIcons: StoryObj<typeof ActivityFeed> = {
    args: {
        items: iconActivities,
    },
};

export const WithoutLine: StoryObj<typeof ActivityFeed> = {
    args: {
        items: sampleActivities.slice(0, 3),
        showLine: false,
    },
};

export const Compact: StoryObj<typeof ActivityFeedCompact> = {
    render: () => (
        <div className="max-w-md">
            <ActivityFeedCompact
                items={sampleActivities}
                maxItems={3}
                onViewAll={() => console.log("View all")}
            />
        </div>
    ),
};

export const CompactFull: StoryObj<typeof ActivityFeedCompact> = {
    render: () => (
        <div className="max-w-md">
            <ActivityFeedCompact
                items={sampleActivities}
                maxItems={10}
                showViewAll={false}
            />
        </div>
    ),
};

export const InCard: StoryObj<typeof ActivityFeed> = {
    render: () => (
        <div className="max-w-md rounded-xl border border-border-secondary bg-bg-primary p-5">
            <h3 className="mb-4 text-lg font-semibold text-fg-primary">Recent Activity</h3>
            <ActivityFeed items={sampleActivities.slice(0, 4)} />
        </div>
    ),
};

export const AllVariants: StoryObj = {
    render: () => (
        <div className="grid gap-8 lg:grid-cols-2">
            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Timeline Style</p>
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-5">
                    <ActivityFeed items={sampleActivities.slice(0, 4)} />
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">With Icons</p>
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-5">
                    <ActivityFeed items={iconActivities.slice(0, 4)} />
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Compact List</p>
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-5">
                    <ActivityFeedCompact
                        items={sampleActivities}
                        maxItems={4}
                        onViewAll={() => {}}
                    />
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">No Connecting Line</p>
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-5">
                    <ActivityFeed items={sampleActivities.slice(0, 3)} showLine={false} />
                </div>
            </div>
        </div>
    ),
};

