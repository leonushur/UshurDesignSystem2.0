import type { Meta, StoryObj } from "@storybook/react";
import { HeaderNavigationBase } from "./header-navigation";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import {
    Bell01,
    BookOpen01,
    Building07,
    Calendar,
    CreditCard02,
    Folder,
    Home02,
    LifeBuoy01,
    Settings02,
    ShieldTick,
    Users01,
} from "@untitledui/icons";

const primaryItems = [
    { label: "Home", href: "/home", current: true, icon: Home02 },
    { label: "Projects", href: "/projects", icon: Folder },
    {
        label: "Billing",
        href: "/billing",
        icon: CreditCard02,
        badge: (
            <BadgeWithDot size="sm" color="warning" type="pill-color">
                Due
            </BadgeWithDot>
        ),
    },
    { label: "Team", href: "/team", icon: Users01 },
    { label: "Docs", href: "/docs", icon: BookOpen01 },
];

const financeSubItems = [
    { label: "Overview", href: "/billing/overview", current: true },
    { label: "Subscriptions", href: "/billing/subscriptions" },
    { label: "Reports", href: "/billing/reports" },
    { label: "Integrations", href: "/billing/integrations" },
    { label: "Settings", href: "/billing/settings" },
];

const trailingActions = (
    <div className="hidden items-center gap-2 lg:flex">
        <Input size="sm" placeholder="Search" icon={Calendar} aria-label="Search" className="w-48" />
        <Button size="sm">New project</Button>
    </div>
);

const meta: Meta<typeof HeaderNavigationBase> = {
    title: "Patterns/Navigation/Header",
    component: HeaderNavigationBase,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof HeaderNavigationBase>;

export const Default: Story = {
    args: {
        items: primaryItems,
        trailingContent: trailingActions,
        showAvatarDropdown: true,
        subItems: financeSubItems,
        activeUrl: "/billing",
    },
};

export const Minimal: Story = {
    args: {
        items: [
            { label: "Overview", href: "/overview", current: true, icon: Home02 },
            { label: "Activity", href: "/activity", icon: Calendar },
            { label: "Departments", href: "/departments", icon: Building07 },
            { label: "Security", href: "/security", icon: ShieldTick },
        ],
        trailingContent: (
            <div className="hidden items-center gap-3 lg:flex">
                <Button size="sm" color="secondary" iconLeading={LifeBuoy01}>
                    Support
                </Button>
                <Button size="sm" color="tertiary" iconLeading={Settings02}>
                    Settings
                </Button>
            </div>
        ),
        showAvatarDropdown: false,
        hideBorder: true,
    },
};

