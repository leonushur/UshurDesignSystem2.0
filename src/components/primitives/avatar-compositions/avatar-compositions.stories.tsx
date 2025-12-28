import type { Meta, StoryObj } from "@storybook/react";
import { AvatarLabelGroup } from "./avatar-label-group";
import { AvatarStack } from "./avatar-stack";
import { AvatarWithText } from "./avatar-with-text";
import { Badge } from "@/components/base/badges/badges";

/**
 * Avatar compositions are primitive patterns that combine avatars with text and other elements
 * for common use cases like user profiles, team displays, and activity feeds.
 */
const meta: Meta = {
    title: "Components/Primitives/Avatar Compositions",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

// ============================================================================
// AvatarLabelGroup Stories
// ============================================================================

type AvatarLabelGroupStory = StoryObj<typeof AvatarLabelGroup>;

export const LabelGroupBasic: AvatarLabelGroupStory = {
    name: "Label Group - Basic",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    Primary text only
                </h3>
                <AvatarLabelGroup
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    With secondary text (role/title)
                </h3>
                <AvatarLabelGroup
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    With tertiary text (email)
                </h3>
                <AvatarLabelGroup
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                    tertiary="olivia@example.com"
                />
            </div>
        </div>
    ),
};

export const LabelGroupSizes: AvatarLabelGroupStory = {
    name: "Label Group - Sizes",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <AvatarLabelGroup
                    size="sm"
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                    tertiary="olivia@example.com"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium (default)</h3>
                <AvatarLabelGroup
                    size="md"
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                    tertiary="olivia@example.com"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Large</h3>
                <AvatarLabelGroup
                    size="lg"
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                    tertiary="olivia@example.com"
                />
            </div>
        </div>
    ),
};

export const LabelGroupWithStatus: AvatarLabelGroupStory = {
    name: "Label Group - With Status",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Online status</h3>
                <AvatarLabelGroup
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                    status="online"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Offline status</h3>
                <AvatarLabelGroup
                    src="https://i.pravatar.cc/160?img=33"
                    primary="Phoenix Baker"
                    secondary="Engineering Lead"
                    status="offline"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Verified user</h3>
                <AvatarLabelGroup
                    src="https://i.pravatar.cc/160?img=34"
                    primary="Lana Steiner"
                    secondary="UX Researcher"
                    verified
                />
            </div>
        </div>
    ),
};

export const LabelGroupAlignment: AvatarLabelGroupStory = {
    name: "Label Group - Alignment",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Left aligned (default)</h3>
                <AvatarLabelGroup
                    align="left"
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Center aligned</h3>
                <AvatarLabelGroup
                    align="center"
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Right aligned</h3>
                <AvatarLabelGroup
                    align="right"
                    src="https://i.pravatar.cc/160?img=32"
                    primary="Olivia Rhye"
                    secondary="Product Designer"
                />
            </div>
        </div>
    ),
};

export const LabelGroupWithInitials: AvatarLabelGroupStory = {
    name: "Label Group - With Initials",
    render: () => (
        <div className="space-y-4">
            <AvatarLabelGroup
                initials="OR"
                primary="Olivia Rhye"
                secondary="Product Designer"
            />
            <AvatarLabelGroup
                initials="PB"
                primary="Phoenix Baker"
                secondary="Engineering Lead"
                status="online"
            />
            <AvatarLabelGroup
                initials="LS"
                primary="Lana Steiner"
                secondary="UX Researcher"
                verified
            />
        </div>
    ),
};

// ============================================================================
// AvatarStack Stories
// ============================================================================

type AvatarStackStory = StoryObj<typeof AvatarStack>;

export const StackBasic: AvatarStackStory = {
    name: "Stack - Basic",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">2 avatars</h3>
                <AvatarStack
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32", alt: "User 1" },
                        { src: "https://i.pravatar.cc/160?img=33", alt: "User 2" },
                    ]}
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">3 avatars</h3>
                <AvatarStack
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32", alt: "User 1" },
                        { src: "https://i.pravatar.cc/160?img=33", alt: "User 2" },
                        { src: "https://i.pravatar.cc/160?img=34", alt: "User 3" },
                    ]}
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">4 avatars</h3>
                <AvatarStack
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32", alt: "User 1" },
                        { src: "https://i.pravatar.cc/160?img=33", alt: "User 2" },
                        { src: "https://i.pravatar.cc/160?img=34", alt: "User 3" },
                        { src: "https://i.pravatar.cc/160?img=35", alt: "User 4" },
                    ]}
                />
            </div>
        </div>
    ),
};

export const StackWithOverflow: AvatarStackStory = {
    name: "Stack - With Overflow",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    5+ avatars (shows +count)
                </h3>
                <AvatarStack
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32" },
                        { src: "https://i.pravatar.cc/160?img=33" },
                        { src: "https://i.pravatar.cc/160?img=34" },
                        { src: "https://i.pravatar.cc/160?img=35" },
                        { src: "https://i.pravatar.cc/160?img=36" },
                        { src: "https://i.pravatar.cc/160?img=37" },
                        { src: "https://i.pravatar.cc/160?img=38" },
                    ]}
                    max={5}
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    Max 3 visible
                </h3>
                <AvatarStack
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32" },
                        { src: "https://i.pravatar.cc/160?img=33" },
                        { src: "https://i.pravatar.cc/160?img=34" },
                        { src: "https://i.pravatar.cc/160?img=35" },
                        { src: "https://i.pravatar.cc/160?img=36" },
                    ]}
                    max={3}
                />
            </div>
        </div>
    ),
};

export const StackSizes: AvatarStackStory = {
    name: "Stack - Sizes",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <AvatarStack
                    size="sm"
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32" },
                        { src: "https://i.pravatar.cc/160?img=33" },
                        { src: "https://i.pravatar.cc/160?img=34" },
                        { initials: "AB" },
                    ]}
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium (default)</h3>
                <AvatarStack
                    size="md"
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32" },
                        { src: "https://i.pravatar.cc/160?img=33" },
                        { src: "https://i.pravatar.cc/160?img=34" },
                        { initials: "AB" },
                    ]}
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Large</h3>
                <AvatarStack
                    size="lg"
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32" },
                        { src: "https://i.pravatar.cc/160?img=33" },
                        { src: "https://i.pravatar.cc/160?img=34" },
                        { initials: "AB" },
                    ]}
                />
            </div>
        </div>
    ),
};

export const StackWithInitials: AvatarStackStory = {
    name: "Stack - With Initials",
    render: () => (
        <AvatarStack
            avatars={[
                { initials: "OR" },
                { initials: "PB" },
                { initials: "LS" },
                { initials: "DH" },
            ]}
        />
    ),
};

// ============================================================================
// AvatarWithText Stories
// ============================================================================

type AvatarWithTextStory = StoryObj<typeof AvatarWithText>;

export const WithTextBasic: AvatarWithTextStory = {
    name: "With Text - Basic",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    Simple text content
                </h3>
                <AvatarWithText src="https://i.pravatar.cc/160?img=32" initials="OR">
                    <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-fg-primary">Olivia Rhye</p>
                        <p className="text-sm text-fg-tertiary">Product Designer</p>
                    </div>
                </AvatarWithText>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    With custom badge
                </h3>
                <AvatarWithText
                    src="https://i.pravatar.cc/160?img=33"
                    initials="PB"
                    status="online"
                >
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-fg-primary">
                                Phoenix Baker
                            </span>
                            <Badge color="brand" size="sm">
                                Pro
                            </Badge>
                        </div>
                        <p className="text-sm text-fg-tertiary">Engineering Lead</p>
                    </div>
                </AvatarWithText>
            </div>
        </div>
    ),
};

export const WithTextLayouts: AvatarWithTextStory = {
    name: "With Text - Layouts",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">
                    Horizontal (default)
                </h3>
                <AvatarWithText
                    src="https://i.pravatar.cc/160?img=32"
                    initials="OR"
                    direction="horizontal"
                >
                    <div>
                        <p className="text-sm font-semibold text-fg-primary">Olivia Rhye</p>
                        <p className="text-sm text-fg-tertiary">Product Designer</p>
                    </div>
                </AvatarWithText>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Vertical</h3>
                <AvatarWithText
                    src="https://i.pravatar.cc/160?img=32"
                    initials="OR"
                    direction="vertical"
                    align="center"
                >
                    <div className="text-center">
                        <p className="text-sm font-semibold text-fg-primary">Olivia Rhye</p>
                        <p className="text-sm text-fg-tertiary">Product Designer</p>
                    </div>
                </AvatarWithText>
            </div>
        </div>
    ),
};

export const WithTextSizes: AvatarWithTextStory = {
    name: "With Text - Sizes",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <AvatarWithText
                    size="sm"
                    src="https://i.pravatar.cc/160?img=32"
                    initials="OR"
                >
                    <div>
                        <p className="text-sm font-semibold text-fg-primary">Olivia Rhye</p>
                        <p className="text-sm text-fg-tertiary">Product Designer</p>
                    </div>
                </AvatarWithText>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium</h3>
                <AvatarWithText
                    size="md"
                    src="https://i.pravatar.cc/160?img=32"
                    initials="OR"
                >
                    <div>
                        <p className="text-sm font-semibold text-fg-primary">Olivia Rhye</p>
                        <p className="text-sm text-fg-tertiary">Product Designer</p>
                    </div>
                </AvatarWithText>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Large</h3>
                <AvatarWithText
                    size="lg"
                    src="https://i.pravatar.cc/160?img=32"
                    initials="OR"
                >
                    <div>
                        <p className="text-md font-semibold text-fg-primary">Olivia Rhye</p>
                        <p className="text-md text-fg-tertiary">Product Designer</p>
                    </div>
                </AvatarWithText>
            </div>
        </div>
    ),
};

// ============================================================================
// Real-World Examples
// ============================================================================

export const ExampleTeamMemberCard: AvatarLabelGroupStory = {
    name: "Example - Team Member Card",
    render: () => (
        <div className="max-w-xs rounded-xl border border-border-primary bg-bg-primary p-6">
            <AvatarLabelGroup
                size="lg"
                src="https://i.pravatar.cc/160?img=32"
                primary="Olivia Rhye"
                secondary="Product Designer"
                tertiary="olivia@ushur.com"
                status="online"
                align="center"
            />
            <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary">
                    Message
                </button>
                <button className="flex-1 rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-text-primary_on-brand hover:bg-bg-brand-solid_hover">
                    View Profile
                </button>
            </div>
        </div>
    ),
};

export const ExampleUserProfileSnippet: AvatarLabelGroupStory = {
    name: "Example - User Profile Snippet",
    render: () => (
        <div className="flex items-center justify-between rounded-lg border border-border-primary bg-bg-primary p-4">
            <AvatarLabelGroup
                src="https://i.pravatar.cc/160?img=32"
                primary="Olivia Rhye"
                secondary="Product Designer at Ushur"
                verified
            />
            <button className="rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary">
                Follow
            </button>
        </div>
    ),
};

export const ExampleAssigneeDisplay: AvatarStackStory = {
    name: "Example - Assignee Display",
    render: () => (
        <div className="rounded-lg border border-border-primary bg-bg-primary p-4">
            <div className="mb-3 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-fg-primary">Assigned to</h4>
                <button className="text-sm font-medium text-fg-brand-primary hover:text-fg-brand-secondary">
                    Add
                </button>
            </div>
            <div className="flex items-center justify-between">
                <AvatarStack
                    avatars={[
                        { src: "https://i.pravatar.cc/160?img=32" },
                        { src: "https://i.pravatar.cc/160?img=33" },
                        { src: "https://i.pravatar.cc/160?img=34" },
                        { initials: "OR" },
                        { initials: "PB" },
                    ]}
                    max={3}
                />
                <span className="text-sm text-fg-tertiary">+2 more</span>
            </div>
        </div>
    ),
};

export const ExampleCommentAuthor: AvatarWithTextStory = {
    name: "Example - Comment Author",
    render: () => (
        <div className="max-w-2xl rounded-lg border border-border-primary bg-bg-primary p-4">
            <AvatarWithText
                src="https://i.pravatar.cc/160?img=32"
                initials="OR"
                status="online"
            >
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-fg-primary">
                            Olivia Rhye
                        </span>
                        <span className="text-sm text-fg-tertiary">2 hours ago</span>
                    </div>
                    <p className="text-sm text-fg-secondary">
                        This looks great! I especially like the new navigation pattern. One
                        small suggestion - could we increase the padding on mobile?
                    </p>
                </div>
            </AvatarWithText>
        </div>
    ),
};

export const ExampleCollaborationIndicators: AvatarStackStory = {
    name: "Example - Collaboration Indicators",
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-border-primary bg-bg-primary p-4">
                <div>
                    <h4 className="text-sm font-semibold text-fg-primary">
                        Design System Redesign
                    </h4>
                    <p className="text-sm text-fg-tertiary">Last updated 2 hours ago</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-fg-tertiary">4 collaborators</span>
                    <AvatarStack
                        size="sm"
                        avatars={[
                            { src: "https://i.pravatar.cc/160?img=32" },
                            { src: "https://i.pravatar.cc/160?img=33" },
                            { src: "https://i.pravatar.cc/160?img=34" },
                            { src: "https://i.pravatar.cc/160?img=35" },
                        ]}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border-primary bg-bg-primary p-4">
                <div>
                    <h4 className="text-sm font-semibold text-fg-primary">
                        Component Library v2
                    </h4>
                    <p className="text-sm text-fg-tertiary">Last updated 5 hours ago</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-fg-tertiary">7 collaborators</span>
                    <AvatarStack
                        size="sm"
                        avatars={[
                            { src: "https://i.pravatar.cc/160?img=36" },
                            { src: "https://i.pravatar.cc/160?img=37" },
                            { src: "https://i.pravatar.cc/160?img=38" },
                            { src: "https://i.pravatar.cc/160?img=39" },
                            { src: "https://i.pravatar.cc/160?img=40" },
                            { src: "https://i.pravatar.cc/160?img=41" },
                            { src: "https://i.pravatar.cc/160?img=42" },
                        ]}
                        max={4}
                    />
                </div>
            </div>
        </div>
    ),
};

export const ExampleActivityFeedItem: AvatarWithTextStory = {
    name: "Example - Activity Feed Item",
    render: () => (
        <div className="space-y-4">
            <AvatarWithText
                size="sm"
                src="https://i.pravatar.cc/160?img=32"
                initials="OR"
            >
                <div className="space-y-1">
                    <p className="text-sm text-fg-secondary">
                        <span className="font-semibold text-fg-primary">Olivia Rhye</span>{" "}
                        commented on{" "}
                        <span className="font-medium text-fg-primary">
                            Design System Updates
                        </span>
                    </p>
                    <p className="text-sm text-fg-tertiary">2 hours ago</p>
                </div>
            </AvatarWithText>
            <AvatarWithText
                size="sm"
                src="https://i.pravatar.cc/160?img=33"
                initials="PB"
            >
                <div className="space-y-1">
                    <p className="text-sm text-fg-secondary">
                        <span className="font-semibold text-fg-primary">Phoenix Baker</span>{" "}
                        assigned you to{" "}
                        <span className="font-medium text-fg-primary">Button Component</span>
                    </p>
                    <p className="text-sm text-fg-tertiary">5 hours ago</p>
                </div>
            </AvatarWithText>
            <AvatarWithText
                size="sm"
                src="https://i.pravatar.cc/160?img=34"
                initials="LS"
            >
                <div className="space-y-1">
                    <p className="text-sm text-fg-secondary">
                        <span className="font-semibold text-fg-primary">Lana Steiner</span>{" "}
                        uploaded 3 new files to{" "}
                        <span className="font-medium text-fg-primary">Assets Library</span>
                    </p>
                    <p className="text-sm text-fg-tertiary">1 day ago</p>
                </div>
            </AvatarWithText>
        </div>
    ),
};
