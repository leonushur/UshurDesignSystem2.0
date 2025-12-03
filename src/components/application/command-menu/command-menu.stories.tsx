import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
    Home02,
    Settings01,
    User01,
    CreditCard01,
    Mail01,
    Calendar,
    File01,
    FolderClosed,
    Plus,
    Trash01,
    Edit03
} from "@untitledui-pro/icons/line";
import { CommandMenu, CommandTrigger, type CommandItem } from "./command-menu";

const meta: Meta<typeof CommandMenu> = {
    title: "Application/Command Menu",
    component: CommandMenu,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;

const sampleItems: CommandItem[] = [
    {
        id: "home",
        label: "Go to Home",
        description: "Navigate to dashboard",
        icon: <Home02 className="size-4" />,
        shortcut: "⌘H",
        group: "Navigation",
        onSelect: () => console.log("Home"),
    },
    {
        id: "settings",
        label: "Open Settings",
        description: "Manage your preferences",
        icon: <Settings01 className="size-4" />,
        shortcut: "⌘,",
        group: "Navigation",
        onSelect: () => console.log("Settings"),
    },
    {
        id: "profile",
        label: "View Profile",
        description: "See your profile details",
        icon: <User01 className="size-4" />,
        group: "Navigation",
        onSelect: () => console.log("Profile"),
    },
    {
        id: "billing",
        label: "Billing",
        description: "Manage billing and subscriptions",
        icon: <CreditCard01 className="size-4" />,
        group: "Navigation",
        onSelect: () => console.log("Billing"),
    },
    {
        id: "new-file",
        label: "New File",
        description: "Create a new file",
        icon: <Plus className="size-4" />,
        shortcut: "⌘N",
        group: "Actions",
        onSelect: () => console.log("New file"),
    },
    {
        id: "new-folder",
        label: "New Folder",
        description: "Create a new folder",
        icon: <FolderClosed className="size-4" />,
        group: "Actions",
        onSelect: () => console.log("New folder"),
    },
    {
        id: "edit",
        label: "Edit",
        description: "Edit selected item",
        icon: <Edit03 className="size-4" />,
        shortcut: "⌘E",
        group: "Actions",
        onSelect: () => console.log("Edit"),
    },
    {
        id: "delete",
        label: "Delete",
        description: "Delete selected item",
        icon: <Trash01 className="size-4" />,
        shortcut: "⌘⌫",
        group: "Actions",
        onSelect: () => console.log("Delete"),
    },
    {
        id: "compose",
        label: "Compose Email",
        icon: <Mail01 className="size-4" />,
        group: "Quick Actions",
        onSelect: () => console.log("Compose"),
    },
    {
        id: "schedule",
        label: "Schedule Meeting",
        icon: <Calendar className="size-4" />,
        group: "Quick Actions",
        onSelect: () => console.log("Schedule"),
    },
    {
        id: "docs",
        label: "View Documentation",
        icon: <File01 className="size-4" />,
        group: "Quick Actions",
        onSelect: () => console.log("Docs"),
    },
];

export const Default: StoryObj<typeof CommandMenu> = {
    render: function DefaultStory() {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="flex min-h-[500px] items-center justify-center bg-bg-primary p-8">
                <div className="w-full max-w-md">
                    <CommandTrigger
                        onClick={() => setIsOpen(true)}
                        placeholder="Search commands..."
                        className="w-full"
                    />
                </div>

                <CommandMenu
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    items={sampleItems}
                />
            </div>
        );
    },
};

export const InitiallyOpen: StoryObj<typeof CommandMenu> = {
    render: function InitiallyOpenStory() {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <div className="flex min-h-[500px] items-center justify-center bg-bg-primary p-8">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-white"
                >
                    Open Command Menu
                </button>

                <CommandMenu
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    items={sampleItems}
                    placeholder="Type a command or search..."
                />
            </div>
        );
    },
};

export const WithKeyboardShortcut: StoryObj<typeof CommandMenu> = {
    render: function KeyboardShortcutStory() {
        const [isOpen, setIsOpen] = useState(false);

        // Listen for ⌘K or Ctrl+K
        useState(() => {
            const handleKeyDown = (e: globalThis.KeyboardEvent) => {
                if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                    e.preventDefault();
                    setIsOpen((prev) => !prev);
                }
            };

            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        });

        return (
            <div className="flex min-h-[500px] flex-col items-center justify-center gap-4 bg-bg-primary p-8">
                <p className="text-sm text-fg-tertiary">
                    Press <kbd className="rounded bg-bg-secondary px-2 py-0.5 font-mono">⌘K</kbd> or{" "}
                    <kbd className="rounded bg-bg-secondary px-2 py-0.5 font-mono">Ctrl+K</kbd> to open
                </p>

                <CommandTrigger
                    onClick={() => setIsOpen(true)}
                    placeholder="Search or press ⌘K..."
                    className="w-72"
                />

                <CommandMenu
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    items={sampleItems}
                />
            </div>
        );
    },
};

export const CustomItems: StoryObj<typeof CommandMenu> = {
    render: function CustomItemsStory() {
        const [isOpen, setIsOpen] = useState(true);

        const customItems: CommandItem[] = [
            {
                id: "theme-light",
                label: "Switch to Light Mode",
                icon: <span className="text-lg">☀️</span>,
                group: "Theme",
                onSelect: () => console.log("Light mode"),
            },
            {
                id: "theme-dark",
                label: "Switch to Dark Mode",
                icon: <span className="text-lg">🌙</span>,
                group: "Theme",
                onSelect: () => console.log("Dark mode"),
            },
            {
                id: "disabled-item",
                label: "Disabled Action",
                description: "This action is currently unavailable",
                group: "Other",
                disabled: true,
            },
        ];

        return (
            <div className="flex min-h-[500px] items-center justify-center bg-bg-primary p-8">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="rounded-lg border border-border-secondary px-4 py-2 text-sm"
                >
                    Open Custom Menu
                </button>

                <CommandMenu
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    items={customItems}
                    placeholder="What do you want to do?"
                    emptyText="No matching commands"
                />
            </div>
        );
    },
};

export const TriggerVariants: StoryObj<typeof CommandTrigger> = {
    render: () => (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 bg-bg-primary p-8">
            <CommandTrigger
                onClick={() => {}}
                placeholder="Search..."
                shortcut="⌘K"
                className="w-64"
            />
            <CommandTrigger
                onClick={() => {}}
                placeholder="Type to search commands..."
                shortcut="Ctrl+K"
                className="w-80"
            />
            <CommandTrigger
                onClick={() => {}}
                placeholder="Quick search"
                shortcut="/"
                className="w-48"
            />
        </div>
    ),
};

