import type { Meta, StoryObj } from "@storybook/react";
import { SidebarNavigationSimple } from "./sidebar-simple";
import { SidebarNavigationDualTier } from "./sidebar-dual-tier";
import { SidebarNavigationSlim } from "./sidebar-slim";
import { SidebarNavigationSectionDividers } from "./sidebar-section-dividers";
import { SidebarNavigationSectionsSubheadings } from "./sidebar-sections-subheadings";
import type { NavItemDividerType, NavItemType } from "../config";
import {
    BarChart02,
    BarChartSquare02,
    Bell01,
    BookOpen01,
    Building07,
    Calendar,
    CreditCard02,
    File02,
    Folder,
    Grid01,
    Home02,
    Inbox01,
    LayoutGrid01,
    LifeBuoy01,
    LinkExternal01,
    LockUnlocked01,
    LogOut03,
    PieChart01,
    Settings02,
    Shield01,
    TrendUp01,
    Users01,
} from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";

const UsedSpaceCard = () => (
    <div className="rounded-2xl border border-dashed border-secondary bg-primary p-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-wide text-tertiary">Used space</p>
        <p className="mt-2 text-3xl font-semibold text-primary">80%</p>
        <p className="mt-1 text-sm text-tertiary">Your team has used 80% of your allocated space.</p>
        <div className="mt-4 flex gap-2">
            <button className="rounded-lg border border-secondary px-3 py-1.5 text-sm font-semibold text-secondary hover:bg-primary_hover">Upgrade plan</button>
            <button className="rounded-lg px-3 py-1.5 text-sm font-semibold text-tertiary hover:bg-primary_hover">Dismiss</button>
        </div>
    </div>
);

const WorkshopCard = () => (
    <div className="rounded-2xl bg-brand-secondary/10 px-4 py-5 text-left shadow-xs ring-1 ring-transparent">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-brand-secondary">
            Live workshop
            <span className="rounded-full bg-brand-secondary/20 px-2 py-0.5 text-[11px] font-semibold text-brand-secondary">Live</span>
        </div>
        <p className="mt-2 text-lg font-semibold text-primary">New features available!</p>
        <p className="mt-1 text-sm text-tertiary">Join us on Friday to see what’s new in the dashboard view.</p>
        <div className="mt-4 flex gap-2">
            <button className="rounded-lg border border-secondary px-3 py-1.5 text-sm font-semibold text-secondary hover:bg-primary_hover">Dismiss</button>
            <button className="rounded-lg bg-brand-secondary px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-secondary/90">Join now</button>
        </div>
    </div>
);

const SIMPLE_ITEMS: NavItemType[] = [
    { label: "Home", href: "/home", icon: Home02 },
    { label: "Projects", href: "/projects", icon: Folder, badge: <Badge size="sm">24</Badge> },
    { label: "Analytics", href: "/analytics", icon: BarChartSquare02 },
    { label: "Automations", href: "/automations", icon: TrendUp01 },
    { label: "Billing", href: "/billing", icon: CreditCard02 },
];

const FOOTER_ITEMS: NavItemType[] = [
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Settings", href: "/settings", icon: Settings02 },
];

const DUAL_TIER_ITEMS: NavItemType[] = [
    { label: "Home", href: "/home", icon: Home02 },
    {
        label: "Projects",
        href: "/projects",
        icon: Folder,
        items: [
            { label: "Overview", href: "/projects/overview" },
            { label: "Roadmap", href: "/projects/roadmap" },
            { label: "Automation", href: "/projects/automation" },
        ],
    },
    {
        label: "Reporting",
        href: "/reporting",
        icon: BarChart02,
        items: [
            { label: "Revenue", href: "/reporting/revenue" },
            { label: "Engagement", href: "/reporting/engagement" },
            { label: "Targets", href: "/reporting/targets" },
        ],
    },
    { label: "Billing", href: "/billing", icon: CreditCard02 },
    { label: "Integrations", href: "/integrations", icon: Grid01 },
];

const DUAL_TIER_FOOTER: NavItemType[] = [
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Notifications", href: "/notifications", icon: Bell01, badge: <Badge size="sm">4</Badge> },
];

const SLIM_PRIMARY: (NavItemType & { icon: typeof Home02 })[] = [
    {
        label: "Home",
        href: "/home",
        icon: Home02,
        items: [
            { label: "Overview", href: "/home/overview" },
            { label: "Activity", href: "/home/activity" },
        ],
    },
    {
        label: "Projects",
        href: "/projects",
        icon: Folder,
        items: [
            { label: "Automation", href: "/projects/automation" },
            { label: "CMS", href: "/projects/cms" },
            { label: "iOS app", href: "/projects/ios" },
        ],
    },
    {
        label: "Analytics",
        href: "/analytics",
        icon: BarChart02,
        items: [
            { label: "Revenue", href: "/analytics/revenue" },
            { label: "Team velocity", href: "/analytics/velocity" },
        ],
    },
];

const SLIM_FOOTER: (NavItemType & { icon: typeof Home02 })[] = [
    { label: "Support", href: "/support", icon: LifeBuoy01, items: [] },
    { label: "Settings", href: "/settings", icon: Settings02, items: [] },
];

const DIVIDER_ITEMS: (NavItemType | NavItemDividerType)[] = [
    { divider: true, label: "Workspace" },
    { label: "Overview", href: "/overview", icon: Home02 },
    { label: "Incoming work", href: "/inbox", icon: Inbox01 },
    { divider: true, label: "Projects" },
    { label: "Phoenix launch", href: "/projects/phoenix", icon: Folder },
    { label: "Sales automation", href: "/projects/automation", icon: TrendUp01 },
    { label: "Beta program", href: "/projects/beta", icon: Shield01 },
];

const SECTION_GROUPS: Array<{ label: string; items: NavItemType[] }> = [
    {
        label: "Workspace",
        items: [
            { label: "Home", href: "/home", icon: Home02 },
            { label: "Activity", href: "/activity", icon: Bell01 },
            { label: "Calendar", href: "/calendar", icon: Calendar },
        ],
    },
    {
        label: "Libraries",
        items: [
            { label: "Guides", href: "/guides", icon: BookOpen01 },
            { label: "Templates", href: "/templates", icon: File02 },
            { label: "Integrations", href: "/integrations", icon: Grid01 },
        ],
    },
    {
        label: "Organization",
        items: [
            { label: "Team", href: "/team", icon: Users01 },
            { label: "Departments", href: "/departments", icon: Building07 },
            { label: "Security", href: "/security", icon: Shield01 },
        ],
    },
];

const meta = {
    title: "Patterns/Navigation/Sidebar",
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof SidebarNavigationSimple>;

export default meta;

type SimpleStory = StoryObj<typeof SidebarNavigationSimple>;

export const Simple: SimpleStory = {
    args: {
        items: SIMPLE_ITEMS,
        footerItems: FOOTER_ITEMS,
        featureCard: <UsedSpaceCard />,
        activeUrl: "/automations",
    },
};

export const DualTier: StoryObj = {
    render: () => (
        <SidebarNavigationDualTier
            items={DUAL_TIER_ITEMS}
            footerItems={DUAL_TIER_FOOTER}
            activeUrl="/reporting/revenue"
            featureCard={<WorkshopCard />}
        />
    ),
};

export const Slim: StoryObj = {
    render: () => <SidebarNavigationSlim items={SLIM_PRIMARY} footerItems={SLIM_FOOTER} activeUrl="/projects/automation" />,
};

export const SectionsWithDividers: StoryObj = {
    render: () => <SidebarNavigationSectionDividers items={DIVIDER_ITEMS} activeUrl="/projects/automation" />,
};

export const SectionsWithSubheadings: StoryObj = {
    render: () => <SidebarNavigationSectionsSubheadings items={SECTION_GROUPS} activeUrl="/team" />,
};
