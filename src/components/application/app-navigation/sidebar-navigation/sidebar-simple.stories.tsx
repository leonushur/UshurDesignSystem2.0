import type { Meta, StoryObj } from "@storybook/react";
import { SidebarNavigationSimple } from "./sidebar-simple";
import type { NavItemType } from "../config";
import { Home02, Calendar, CreditCard02, Settings02 } from "@untitledui/icons";

const items: NavItemType[] = [
    { label: "Home", href: "#home", icon: Home02 },
    { label: "Calendar", href: "#calendar", icon: Calendar },
    { label: "Billing", href: "#billing", icon: CreditCard02 },
    { label: "Settings", href: "#settings", icon: Settings02 },
];

const meta: Meta<typeof SidebarNavigationSimple> = {
    title: "Patterns/Navigation/SidebarSimple",
    component: SidebarNavigationSimple,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof SidebarNavigationSimple>;

export const Default: Story = {
    args: {
        items,
        activeUrl: "#home",
    },
};
