import type { Meta, StoryObj } from "@storybook/react";
import { Folder, Settings01 } from "@untitledui-pro/icons/line";
import { Breadcrumbs, BreadcrumbsWithDropdown } from "./breadcrumbs";

type BreadcrumbsStory = StoryObj<typeof Breadcrumbs>;

const meta: Meta<typeof Breadcrumbs> = {
    title: "Application/Breadcrumbs",
    component: Breadcrumbs,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

export const Default: BreadcrumbsStory = {
    args: {
        items: [
            { label: "Projects", href: "/projects" },
            { label: "Marketing", href: "/projects/marketing" },
            { label: "Campaign Details", href: "/projects/marketing/campaign" },
        ],
    },
};

export const WithChevronSeparator: BreadcrumbsStory = {
    args: {
        items: [
            { label: "Settings", href: "/settings" },
            { label: "Team", href: "/settings/team" },
            { label: "Members", href: "/settings/team/members" },
        ],
        separator: "chevron",
    },
};

export const WithSlashSeparator: BreadcrumbsStory = {
    args: {
        items: [
            { label: "Dashboard", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "New Project" },
        ],
        separator: "slash",
    },
};

export const WithDotSeparator: BreadcrumbsStory = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Electronics", href: "/products/electronics" },
            { label: "Phones" },
        ],
        separator: "dot",
    },
};

export const WithoutHomeIcon: BreadcrumbsStory = {
    args: {
        items: [
            { label: "Dashboard", href: "/" },
            { label: "Settings", href: "/settings" },
            { label: "Profile" },
        ],
        showHomeIcon: false,
    },
};

export const WithIcons: BreadcrumbsStory = {
    args: {
        items: [
            { label: "Projects", href: "/projects", icon: Folder },
            { label: "Settings", href: "/settings", icon: Settings01 },
            { label: "General" },
        ],
    },
};

export const MediumSize: BreadcrumbsStory = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Library", href: "/library" },
            { label: "Data" },
        ],
        size: "md",
    },
};

export const WithDropdown: StoryObj<typeof BreadcrumbsWithDropdown> = {
    render: () => (
        <BreadcrumbsWithDropdown
            startItems={[{ label: "Projects", href: "/projects" }]}
            hiddenItems={[
                { label: "Marketing", href: "/marketing" },
                { label: "Campaigns", href: "/campaigns" },
                { label: "Q4 2024", href: "/q4-2024" },
            ]}
            endItems={[
                { label: "Analytics", href: "/analytics" },
                { label: "Overview" },
            ]}
        />
    ),
};

export const AllVariants: BreadcrumbsStory = {
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Chevron Separator</p>
                <Breadcrumbs
                    items={[
                        { label: "Settings", href: "/settings" },
                        { label: "Team", href: "/settings/team" },
                        { label: "Members" },
                    ]}
                    separator="chevron"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Slash Separator</p>
                <Breadcrumbs
                    items={[
                        { label: "Settings", href: "/settings" },
                        { label: "Team", href: "/settings/team" },
                        { label: "Members" },
                    ]}
                    separator="slash"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Dot Separator</p>
                <Breadcrumbs
                    items={[
                        { label: "Settings", href: "/settings" },
                        { label: "Team", href: "/settings/team" },
                        { label: "Members" },
                    ]}
                    separator="dot"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Without Home Icon</p>
                <Breadcrumbs
                    items={[
                        { label: "Settings", href: "/settings" },
                        { label: "Team", href: "/settings/team" },
                        { label: "Members" },
                    ]}
                    showHomeIcon={false}
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">With Collapsed Items</p>
                <BreadcrumbsWithDropdown
                    startItems={[{ label: "Home", href: "/" }]}
                    hiddenItems={[
                        { label: "Level 1", href: "/1" },
                        { label: "Level 2", href: "/2" },
                    ]}
                    endItems={[
                        { label: "Level 3", href: "/3" },
                        { label: "Current Page" },
                    ]}
                />
            </div>
        </div>
    ),
};

