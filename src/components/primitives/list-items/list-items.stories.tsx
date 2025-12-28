import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
    Home01,
    BarChart01,
    Users01,
    Settings01,
    FolderClosed,
    Mail01,
    Calendar,
    MessageCircle01,
    File01,
    HelpCircle,
    Star01,
    Heart,
    Copy01,
    Edit05,
    Trash01,
    Share07,
    Download01,
    Archive,
    Flag06,
    CheckCircle,
} from "@untitledui-pro/icons/line";
import { ListItemBase, NavItem, SelectableItem, ActionItem } from "./index";
import { Avatar } from "@/components/base/avatar/avatar";

type ListItemsStory = StoryObj<typeof ListItemBase>;

const meta: Meta = {
    title: "Components/Primitives/List Items",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

// Helper component for grid display
const StoryGrid = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-md space-y-1">{children}</div>
);

// ============================================================================
// ListItemBase Stories
// ============================================================================

export const BaseDefault: ListItemsStory = {
    name: "ListItemBase - Basic",
    render: () => (
        <StoryGrid>
            <ListItemBase primary="Simple list item" />
            <ListItemBase primary="With description" description="Additional details about this item" />
            <ListItemBase
                leading={<Home01 className="size-5 text-fg-tertiary" />}
                primary="With leading icon"
            />
            <ListItemBase
                primary="With trailing icon"
                trailing={<Star01 className="size-5 text-fg-tertiary" />}
            />
        </StoryGrid>
    ),
};

export const BaseInteractive: ListItemsStory = {
    name: "ListItemBase - Interactive",
    render: () => {
        const [clicked, setClicked] = useState<string | null>(null);

        return (
            <div className="space-y-6">
                <div>
                    <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Clickable Items</h3>
                    <StoryGrid>
                        <ListItemBase
                            leading={<Users01 className="size-5 text-fg-tertiary" />}
                            primary="Team Members"
                            description="View and manage team"
                            interactive
                            onClick={() => setClicked("team")}
                        />
                        <ListItemBase
                            leading={<Settings01 className="size-5 text-fg-tertiary" />}
                            primary="Settings"
                            description="Configure your preferences"
                            interactive
                            onClick={() => setClicked("settings")}
                        />
                        <ListItemBase
                            leading={<HelpCircle className="size-5 text-fg-tertiary" />}
                            primary="Help & Support"
                            interactive
                            onClick={() => setClicked("help")}
                        />
                    </StoryGrid>
                    {clicked && (
                        <p className="mt-3 text-sm text-fg-tertiary">Last clicked: {clicked}</p>
                    )}
                </div>
            </div>
        );
    },
};

export const BaseSizes: ListItemsStory = {
    name: "ListItemBase - Sizes",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <StoryGrid>
                    <ListItemBase
                        size="sm"
                        leading={<File01 className="size-4 text-fg-tertiary" />}
                        primary="Small item"
                        description="Compact description"
                    />
                </StoryGrid>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium (Default)</h3>
                <StoryGrid>
                    <ListItemBase
                        size="md"
                        leading={<File01 className="size-5 text-fg-tertiary" />}
                        primary="Medium item"
                        description="Standard description"
                    />
                </StoryGrid>
            </div>
        </div>
    ),
};

export const BaseStates: ListItemsStory = {
    name: "ListItemBase - States",
    render: () => (
        <StoryGrid>
            <ListItemBase
                leading={<Home01 className="size-5 text-fg-tertiary" />}
                primary="Default state"
                interactive
            />
            <ListItemBase
                leading={<Settings01 className="size-5 text-fg-tertiary" />}
                primary="Disabled state"
                interactive
                disabled
            />
        </StoryGrid>
    ),
};

// ============================================================================
// NavItem Stories
// ============================================================================

export const NavigationBasic: ListItemsStory = {
    name: "NavItem - Basic",
    render: () => {
        const [active, setActive] = useState("dashboard");

        return (
            <StoryGrid>
                <NavItem
                    icon={Home01}
                    label="Dashboard"
                    active={active === "dashboard"}
                    onClick={() => setActive("dashboard")}
                />
                <NavItem
                    icon={BarChart01}
                    label="Analytics"
                    active={active === "analytics"}
                    onClick={() => setActive("analytics")}
                />
                <NavItem
                    icon={Users01}
                    label="Team"
                    active={active === "team"}
                    onClick={() => setActive("team")}
                />
                <NavItem
                    icon={FolderClosed}
                    label="Projects"
                    active={active === "projects"}
                    onClick={() => setActive("projects")}
                />
                <NavItem
                    icon={Settings01}
                    label="Settings"
                    active={active === "settings"}
                    onClick={() => setActive("settings")}
                />
            </StoryGrid>
        );
    },
};

export const NavigationWithBadges: ListItemsStory = {
    name: "NavItem - With Badges",
    render: () => {
        const [active, setActive] = useState("inbox");

        return (
            <StoryGrid>
                <NavItem
                    icon={Mail01}
                    label="Inbox"
                    badge="12"
                    active={active === "inbox"}
                    onClick={() => setActive("inbox")}
                />
                <NavItem
                    icon={MessageCircle01}
                    label="Messages"
                    badge="3"
                    active={active === "messages"}
                    onClick={() => setActive("messages")}
                />
                <NavItem
                    icon={Calendar}
                    label="Calendar"
                    badge="New"
                    active={active === "calendar"}
                    onClick={() => setActive("calendar")}
                />
                <NavItem
                    icon={File01}
                    label="Documents"
                    active={active === "documents"}
                    onClick={() => setActive("documents")}
                />
            </StoryGrid>
        );
    },
};

export const NavigationWithSubmenu: ListItemsStory = {
    name: "NavItem - With Submenu",
    render: () => {
        const [active, setActive] = useState("overview");

        return (
            <StoryGrid>
                <NavItem
                    icon={Home01}
                    label="Overview"
                    active={active === "overview"}
                    onClick={() => setActive("overview")}
                />
                <NavItem
                    icon={Users01}
                    label="Team"
                    hasSubmenu
                    active={active === "team"}
                    onClick={() => setActive("team")}
                />
                <NavItem
                    icon={FolderClosed}
                    label="Projects"
                    hasSubmenu
                    badge="5"
                    active={active === "projects"}
                    onClick={() => setActive("projects")}
                />
                <NavItem
                    icon={Settings01}
                    label="Settings"
                    hasSubmenu
                    active={active === "settings"}
                    onClick={() => setActive("settings")}
                />
            </StoryGrid>
        );
    },
};

export const NavigationSizes: ListItemsStory = {
    name: "NavItem - Sizes",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <StoryGrid>
                    <NavItem size="sm" icon={Home01} label="Dashboard" />
                    <NavItem size="sm" icon={Users01} label="Team" badge="5" />
                    <NavItem size="sm" icon={Settings01} label="Settings" hasSubmenu />
                </StoryGrid>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium (Default)</h3>
                <StoryGrid>
                    <NavItem size="md" icon={Home01} label="Dashboard" />
                    <NavItem size="md" icon={Users01} label="Team" badge="5" />
                    <NavItem size="md" icon={Settings01} label="Settings" hasSubmenu />
                </StoryGrid>
            </div>
        </div>
    ),
};

export const NavigationStates: ListItemsStory = {
    name: "NavItem - States",
    render: () => (
        <StoryGrid>
            <NavItem icon={Home01} label="Default" />
            <NavItem icon={BarChart01} label="Active" active />
            <NavItem icon={Settings01} label="Disabled" disabled />
        </StoryGrid>
    ),
};

// ============================================================================
// SelectableItem Stories
// ============================================================================

export const SelectableCheckMode: ListItemsStory = {
    name: "SelectableItem - Check Mode (Dropdown)",
    render: () => {
        const [selected, setSelected] = useState("option2");

        return (
            <StoryGrid>
                <SelectableItem
                    label="Option 1"
                    description="First option"
                    mode="check"
                    selected={selected === "option1"}
                    onSelect={() => setSelected("option1")}
                />
                <SelectableItem
                    label="Option 2"
                    description="Second option"
                    mode="check"
                    selected={selected === "option2"}
                    onSelect={() => setSelected("option2")}
                />
                <SelectableItem
                    label="Option 3"
                    description="Third option"
                    mode="check"
                    selected={selected === "option3"}
                    onSelect={() => setSelected("option3")}
                />
                <SelectableItem
                    label="Option 4 (Disabled)"
                    mode="check"
                    disabled
                />
            </StoryGrid>
        );
    },
};

export const SelectableCheckboxMode: ListItemsStory = {
    name: "SelectableItem - Checkbox Mode (Multi-select)",
    render: () => {
        const [selected, setSelected] = useState<string[]>(["feature1", "feature3"]);

        const toggleSelection = (id: string) => {
            setSelected((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            );
        };

        return (
            <div className="space-y-4">
                <StoryGrid>
                    <SelectableItem
                        label="Email Notifications"
                        description="Receive updates via email"
                        mode="checkbox"
                        selected={selected.includes("feature1")}
                        onSelect={() => toggleSelection("feature1")}
                    />
                    <SelectableItem
                        label="Push Notifications"
                        description="Get alerts on your device"
                        mode="checkbox"
                        selected={selected.includes("feature2")}
                        onSelect={() => toggleSelection("feature2")}
                    />
                    <SelectableItem
                        label="SMS Notifications"
                        description="Text message updates"
                        mode="checkbox"
                        selected={selected.includes("feature3")}
                        onSelect={() => toggleSelection("feature3")}
                    />
                    <SelectableItem
                        label="Marketing Emails (Disabled)"
                        mode="checkbox"
                        disabled
                    />
                </StoryGrid>
                <p className="text-sm text-fg-tertiary">
                    Selected: {selected.length > 0 ? selected.join(", ") : "none"}
                </p>
            </div>
        );
    },
};

export const SelectableRadioMode: ListItemsStory = {
    name: "SelectableItem - Radio Mode",
    render: () => {
        const [plan, setPlan] = useState("pro");

        return (
            <StoryGrid>
                <SelectableItem
                    label="Free Plan"
                    description="Basic features for individuals"
                    mode="radio"
                    selected={plan === "free"}
                    onSelect={() => setPlan("free")}
                />
                <SelectableItem
                    label="Pro Plan"
                    description="Advanced features for teams"
                    mode="radio"
                    selected={plan === "pro"}
                    onSelect={() => setPlan("pro")}
                />
                <SelectableItem
                    label="Enterprise Plan"
                    description="Full features for organizations"
                    mode="radio"
                    selected={plan === "enterprise"}
                    onSelect={() => setPlan("enterprise")}
                />
            </StoryGrid>
        );
    },
};

export const SelectableWithAvatar: ListItemsStory = {
    name: "SelectableItem - With Avatar",
    render: () => {
        const [selected, setSelected] = useState<string[]>(["user1"]);

        const toggleSelection = (id: string) => {
            setSelected((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            );
        };

        return (
            <StoryGrid>
                <SelectableItem
                    leading={<Avatar size="sm" initials="OR" />}
                    label="Olivia Rhye"
                    description="olivia@example.com"
                    mode="checkbox"
                    selected={selected.includes("user1")}
                    onSelect={() => toggleSelection("user1")}
                />
                <SelectableItem
                    leading={<Avatar size="sm" initials="PH" />}
                    label="Phoenix Baker"
                    description="phoenix@example.com"
                    mode="checkbox"
                    selected={selected.includes("user2")}
                    onSelect={() => toggleSelection("user2")}
                />
                <SelectableItem
                    leading={<Avatar size="sm" initials="LS" />}
                    label="Lana Steiner"
                    description="lana@example.com"
                    mode="checkbox"
                    selected={selected.includes("user3")}
                    onSelect={() => toggleSelection("user3")}
                />
            </StoryGrid>
        );
    },
};

export const SelectableSizes: ListItemsStory = {
    name: "SelectableItem - Sizes",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <StoryGrid>
                    <SelectableItem
                        size="sm"
                        label="Small option"
                        description="Compact description"
                        mode="check"
                        selected
                    />
                </StoryGrid>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium (Default)</h3>
                <StoryGrid>
                    <SelectableItem
                        size="md"
                        label="Medium option"
                        description="Standard description"
                        mode="check"
                        selected
                    />
                </StoryGrid>
            </div>
        </div>
    ),
};

// ============================================================================
// ActionItem Stories
// ============================================================================

export const ActionsBasic: ListItemsStory = {
    name: "ActionItem - Basic",
    render: () => {
        const [lastAction, setLastAction] = useState<string | null>(null);

        return (
            <div className="space-y-4">
                <StoryGrid>
                    <ActionItem
                        icon={Copy01}
                        label="Copy"
                        onClick={() => setLastAction("copy")}
                    />
                    <ActionItem
                        icon={Edit05}
                        label="Edit"
                        onClick={() => setLastAction("edit")}
                    />
                    <ActionItem
                        icon={Share07}
                        label="Share"
                        onClick={() => setLastAction("share")}
                    />
                    <ActionItem
                        icon={Download01}
                        label="Download"
                        onClick={() => setLastAction("download")}
                    />
                </StoryGrid>
                {lastAction && (
                    <p className="text-sm text-fg-tertiary">Last action: {lastAction}</p>
                )}
            </div>
        );
    },
};

export const ActionsWithShortcuts: ListItemsStory = {
    name: "ActionItem - With Shortcuts",
    render: () => (
        <StoryGrid>
            <ActionItem icon={Copy01} label="Copy" shortcut="⌘C" />
            <ActionItem icon={Edit05} label="Edit" shortcut="⌘E" />
            <ActionItem icon={Share07} label="Share" shortcut="⌘S" />
            <ActionItem icon={Trash01} label="Delete" shortcut="⌘⌫" destructive />
        </StoryGrid>
    ),
};

export const ActionsWithDescriptions: ListItemsStory = {
    name: "ActionItem - With Descriptions",
    render: () => (
        <StoryGrid>
            <ActionItem
                icon={Archive}
                label="Archive"
                description="Move to archive folder"
            />
            <ActionItem
                icon={Flag06}
                label="Flag"
                description="Mark as important"
            />
            <ActionItem
                icon={Trash01}
                label="Delete"
                description="This action cannot be undone"
                destructive
            />
        </StoryGrid>
    ),
};

export const ActionsDestructive: ListItemsStory = {
    name: "ActionItem - Destructive",
    render: () => (
        <StoryGrid>
            <ActionItem icon={Copy01} label="Copy" />
            <ActionItem icon={Archive} label="Archive" />
            <ActionItem icon={Trash01} label="Delete" destructive />
            <ActionItem icon={Trash01} label="Delete permanently" destructive shortcut="⌘⌫" />
        </StoryGrid>
    ),
};

export const ActionsSizes: ListItemsStory = {
    name: "ActionItem - Sizes",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <StoryGrid>
                    <ActionItem
                        size="sm"
                        icon={Copy01}
                        label="Copy"
                        shortcut="⌘C"
                    />
                    <ActionItem
                        size="sm"
                        icon={Edit05}
                        label="Edit"
                        description="Quick edit"
                    />
                </StoryGrid>
            </div>
            <div>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium (Default)</h3>
                <StoryGrid>
                    <ActionItem
                        size="md"
                        icon={Copy01}
                        label="Copy"
                        shortcut="⌘C"
                    />
                    <ActionItem
                        size="md"
                        icon={Edit05}
                        label="Edit"
                        description="Quick edit"
                    />
                </StoryGrid>
            </div>
        </div>
    ),
};

export const ActionsStates: ListItemsStory = {
    name: "ActionItem - States",
    render: () => (
        <StoryGrid>
            <ActionItem icon={Copy01} label="Default" />
            <ActionItem icon={Trash01} label="Destructive" destructive />
            <ActionItem icon={Edit05} label="Disabled" disabled />
        </StoryGrid>
    ),
};

// ============================================================================
// Real-World Examples
// ============================================================================

export const ExampleSidebar: ListItemsStory = {
    name: "Example - Sidebar Navigation",
    render: () => {
        const [active, setActive] = useState("home");

        return (
            <div className="max-w-xs space-y-6">
                <div>
                    <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-fg-quaternary">
                        Main
                    </div>
                    <StoryGrid>
                        <NavItem
                            icon={Home01}
                            label="Home"
                            active={active === "home"}
                            onClick={() => setActive("home")}
                        />
                        <NavItem
                            icon={BarChart01}
                            label="Analytics"
                            active={active === "analytics"}
                            onClick={() => setActive("analytics")}
                        />
                        <NavItem
                            icon={Users01}
                            label="Team"
                            badge="3"
                            active={active === "team"}
                            onClick={() => setActive("team")}
                        />
                    </StoryGrid>
                </div>
                <div>
                    <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-fg-quaternary">
                        Settings
                    </div>
                    <StoryGrid>
                        <NavItem
                            icon={Settings01}
                            label="General"
                            active={active === "general"}
                            onClick={() => setActive("general")}
                        />
                        <NavItem
                            icon={Mail01}
                            label="Notifications"
                            badge="New"
                            active={active === "notifications"}
                            onClick={() => setActive("notifications")}
                        />
                    </StoryGrid>
                </div>
            </div>
        );
    },
};

export const ExampleSettingsMenu: ListItemsStory = {
    name: "Example - Settings Menu",
    render: () => (
        <div className="max-w-md space-y-4">
            <h3 className="text-sm font-semibold text-fg-primary">Account Settings</h3>
            <StoryGrid>
                <ListItemBase
                    leading={<Users01 className="size-5 text-fg-tertiary" />}
                    primary="Profile"
                    description="Update your photo and personal details"
                    interactive
                />
                <ListItemBase
                    leading={<Settings01 className="size-5 text-fg-tertiary" />}
                    primary="Preferences"
                    description="Manage your account preferences"
                    interactive
                />
                <ListItemBase
                    leading={<Mail01 className="size-5 text-fg-tertiary" />}
                    primary="Email Settings"
                    description="Configure email notifications"
                    trailing={<CheckCircle className="size-5 text-fg-success-primary" />}
                    interactive
                />
            </StoryGrid>
        </div>
    ),
};

export const ExampleUserSelection: ListItemsStory = {
    name: "Example - User Selection List",
    render: () => {
        const [selected, setSelected] = useState<string[]>(["user1", "user2"]);

        const toggleSelection = (id: string) => {
            setSelected((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            );
        };

        return (
            <div className="max-w-md space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-fg-primary">Team Members</h3>
                    <span className="text-sm text-fg-tertiary">{selected.length} selected</span>
                </div>
                <StoryGrid>
                    <SelectableItem
                        leading={<Avatar size="sm" initials="OR" status="online" />}
                        label="Olivia Rhye"
                        description="Product Designer"
                        mode="checkbox"
                        selected={selected.includes("user1")}
                        onSelect={() => toggleSelection("user1")}
                    />
                    <SelectableItem
                        leading={<Avatar size="sm" initials="PH" status="online" />}
                        label="Phoenix Baker"
                        description="Engineering Lead"
                        mode="checkbox"
                        selected={selected.includes("user2")}
                        onSelect={() => toggleSelection("user2")}
                    />
                    <SelectableItem
                        leading={<Avatar size="sm" initials="LS" />}
                        label="Lana Steiner"
                        description="Marketing Manager"
                        mode="checkbox"
                        selected={selected.includes("user3")}
                        onSelect={() => toggleSelection("user3")}
                    />
                    <SelectableItem
                        leading={<Avatar size="sm" initials="DM" />}
                        label="Demi Wilkinson"
                        description="Frontend Developer"
                        mode="checkbox"
                        selected={selected.includes("user4")}
                        onSelect={() => toggleSelection("user4")}
                    />
                </StoryGrid>
            </div>
        );
    },
};

export const ExampleCommandPalette: ListItemsStory = {
    name: "Example - Command Palette",
    render: () => {
        const [lastCommand, setLastCommand] = useState<string | null>(null);

        return (
            <div className="max-w-md space-y-4">
                <div>
                    <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-fg-quaternary">
                        Actions
                    </div>
                    <StoryGrid>
                        <ActionItem
                            icon={Copy01}
                            label="Copy"
                            shortcut="⌘C"
                            onClick={() => setLastCommand("copy")}
                        />
                        <ActionItem
                            icon={Edit05}
                            label="Edit"
                            shortcut="⌘E"
                            onClick={() => setLastCommand("edit")}
                        />
                        <ActionItem
                            icon={Share07}
                            label="Share"
                            shortcut="⌘S"
                            onClick={() => setLastCommand("share")}
                        />
                    </StoryGrid>
                </div>
                <div>
                    <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-fg-quaternary">
                        Danger Zone
                    </div>
                    <StoryGrid>
                        <ActionItem
                            icon={Archive}
                            label="Archive"
                            description="Move to archive"
                            onClick={() => setLastCommand("archive")}
                        />
                        <ActionItem
                            icon={Trash01}
                            label="Delete"
                            description="Permanently delete this item"
                            shortcut="⌘⌫"
                            destructive
                            onClick={() => setLastCommand("delete")}
                        />
                    </StoryGrid>
                </div>
                {lastCommand && (
                    <p className="px-3 text-sm text-fg-tertiary">Last command: {lastCommand}</p>
                )}
            </div>
        );
    },
};

export const ExampleContextMenu: ListItemsStory = {
    name: "Example - Context Menu",
    render: () => (
        <div className="max-w-xs rounded-lg border border-border-primary bg-bg-primary p-1 shadow-lg">
            <StoryGrid>
                <ActionItem icon={Copy01} label="Copy" shortcut="⌘C" />
                <ActionItem icon={Edit05} label="Rename" shortcut="⌘R" />
                <ActionItem icon={Star01} label="Add to favorites" />
                <div className="my-1 h-px bg-border-secondary" />
                <ActionItem icon={Download01} label="Download" />
                <ActionItem icon={Share07} label="Share" />
                <div className="my-1 h-px bg-border-secondary" />
                <ActionItem icon={Trash01} label="Delete" shortcut="⌘⌫" destructive />
            </StoryGrid>
        </div>
    ),
};

export const ExampleMultiSelectDropdown: ListItemsStory = {
    name: "Example - Multi-select Dropdown",
    render: () => {
        const [categories, setCategories] = useState<string[]>(["design", "frontend"]);

        const toggleCategory = (id: string) => {
            setCategories((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            );
        };

        return (
            <div className="max-w-xs rounded-lg border border-border-primary bg-bg-primary p-1 shadow-lg">
                <div className="mb-2 px-3 pt-2 text-xs font-semibold text-fg-tertiary">
                    Select categories ({categories.length})
                </div>
                <StoryGrid>
                    <SelectableItem
                        label="Design"
                        mode="checkbox"
                        selected={categories.includes("design")}
                        onSelect={() => toggleCategory("design")}
                    />
                    <SelectableItem
                        label="Frontend"
                        mode="checkbox"
                        selected={categories.includes("frontend")}
                        onSelect={() => toggleCategory("frontend")}
                    />
                    <SelectableItem
                        label="Backend"
                        mode="checkbox"
                        selected={categories.includes("backend")}
                        onSelect={() => toggleCategory("backend")}
                    />
                    <SelectableItem
                        label="Marketing"
                        mode="checkbox"
                        selected={categories.includes("marketing")}
                        onSelect={() => toggleCategory("marketing")}
                    />
                    <SelectableItem
                        label="Sales"
                        mode="checkbox"
                        selected={categories.includes("sales")}
                        onSelect={() => toggleCategory("sales")}
                    />
                </StoryGrid>
            </div>
        );
    },
};
