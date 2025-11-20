import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";
import { DropdownMenuSimple } from "./dropdown-header-navigation";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { Button } from "@/components/base/buttons/button";
import { BookClosed, LifeBuoy01, PlayCircle, Stars02 } from "@untitledui-pro/icons/line";

const marketingMenu = (
    <div className="grid gap-3 rounded-2xl bg-primary p-3 shadow-lg ring-1 ring-secondary_alt md:max-w-96">
        <NavMenuItemLink
            href="/blog"
            icon={BookClosed}
            title="Blog"
            subtitle="The latest guides and industry news curated by our team."
            actionsContent={
                <div className="flex gap-2">
                    <Button size="sm" color="primary">
                        Read blog
                    </Button>
                    <Button size="sm" color="secondary">
                        RSS
                    </Button>
                </div>
            }
        />
        <NavMenuItemLink
            href="/customer-stories"
            icon={Stars02}
            title="Customer stories"
            subtitle="Learn how customers use Ushur to 10x their growth."
        />
        <NavMenuItemLink href="/tutorials" icon={PlayCircle} title="Tutorials" subtitle="Get up to speed on our newest features." />
        <NavMenuItemLink href="/support" icon={LifeBuoy01} title="Support" subtitle="Need help with something? We’re here 24/7." />
    </div>
);

const meta: Meta<typeof Header> = {
    title: "Marketing/Header Navigation",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        isFullWidth: true,
    },
    parameters: {
        backgrounds: { default: "light" },
    },
};

export const Floating: Story = {
    args: {
        isFullWidth: true,
        isFloating: true,
        items: [
            { label: "Products", href: "/products", menu: <DropdownMenuSimple /> },
            { label: "Solutions", href: "/solutions", menu: marketingMenu },
            { label: "Pricing", href: "/pricing" },
            { label: "Resources", href: "/resources", menu: marketingMenu },
            { label: "About", href: "/about" },
        ],
    },
    parameters: {
        backgrounds: { default: "dark" },
    },
};

