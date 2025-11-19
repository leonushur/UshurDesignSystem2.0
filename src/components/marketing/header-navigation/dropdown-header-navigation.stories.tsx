import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenuSimple } from "./dropdown-header-navigation";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { Button } from "@/components/base/buttons/button";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { BookClosed, FileCode01, LifeBuoy01, PlayCircle, Stars02 } from "@untitledui/icons";

const meta: Meta<typeof DropdownMenuSimple> = {
    title: "Marketing/Header Navigation/Dropdown Menu",
    component: DropdownMenuSimple,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof DropdownMenuSimple>;

export const Default: Story = {};

export const FeaturedContent: Story = {
    render: () => (
        <div className="rounded-2xl bg-primary p-4 shadow-lg ring-1 ring-secondary_alt">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold text-secondary">What’s new</p>
                    <p className="text-lg font-semibold text-primary">The Ushur customer marketing kit</p>
                    <p className="text-sm text-tertiary">Campaign templates, customer survey questions, and timeline.</p>
                </div>
                <Button size="sm">Download kit</Button>
            </div>
            <div className="grid gap-1 border-t border-secondary pt-1">
                <NavMenuItemLink
                    href="/blog"
                    icon={BookClosed}
                    title="Blog"
                    subtitle="The latest industry news and guides curated by our team."
                    badge={<BadgeWithDot size="sm">New</BadgeWithDot>}
                />
                <NavMenuItemLink
                    href="/customer-stories"
                    icon={Stars02}
                    title="Customer stories"
                    subtitle="Learn how customers scale with Ushur’s platform."
                />
                <NavMenuItemLink href="/tutorials" icon={PlayCircle} title="Tutorials" subtitle="Get up to speed on new features and deep dives." />
                <NavMenuItemLink href="/docs" icon={FileCode01} title="Developer docs" subtitle="In-depth API and component documentation." />
                <NavMenuItemLink href="/support" icon={LifeBuoy01} title="Support" subtitle="Need help? Our team is here for you 24/7." />
            </div>
        </div>
    ),
};

