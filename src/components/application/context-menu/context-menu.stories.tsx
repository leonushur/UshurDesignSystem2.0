import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "./context-menu";
import {
    Copy01,
    Scissors01,
    Clipboard,
    Trash01,
    Edit05,
    Download01,
    Share07,
    Eye,
    FolderPlus,
    File06,
    Settings01,
    LogOut01,
    User01,
    FileCheck02,
    Star01,
    Archive,
    Send01,
    ArrowsRight,
    TextInput,
    Bold01,
    Italic01,
    Underline01,
} from "@untitledui-pro/icons/line";

type ContextMenuStory = StoryObj<typeof ContextMenu>;
type ContextMenuMeta = Meta<typeof ContextMenu>;

const meta: ContextMenuMeta = {
    title: "Components/Application/ContextMenu",
    component: ContextMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

// ============================================================================
// Basic Context Menu
// ============================================================================

export const Basic: ContextMenuStory = {
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 items-center justify-center rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary text-sm text-fg-tertiary transition-colors hover:border-border-primary hover:bg-bg-tertiary">
                        Right-click me
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Copy01}>Copy</ContextMenu.Item>
                        <ContextMenu.Item icon={Scissors01}>Cut</ContextMenu.Item>
                        <ContextMenu.Item icon={Clipboard}>Paste</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Trash01} variant="danger">
                            Delete
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// With Icons
// ============================================================================

export const WithIcons: ContextMenuStory = {
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 items-center justify-center rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary text-sm text-fg-tertiary transition-colors hover:border-border-primary hover:bg-bg-tertiary">
                        Right-click for actions
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Eye}>View</ContextMenu.Item>
                        <ContextMenu.Item icon={Edit05}>Edit</ContextMenu.Item>
                        <ContextMenu.Item icon={Download01}>Download</ContextMenu.Item>
                        <ContextMenu.Item icon={Share07}>Share</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Archive}>Archive</ContextMenu.Item>
                        <ContextMenu.Item icon={Trash01} variant="danger">
                            Delete
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// With Keyboard Shortcuts
// ============================================================================

export const WithKeyboardShortcuts: ContextMenuStory = {
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 items-center justify-center rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary text-sm text-fg-tertiary transition-colors hover:border-border-primary hover:bg-bg-tertiary">
                        Right-click to see shortcuts
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Copy01} shortcut="⌘C">
                            Copy
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Scissors01} shortcut="⌘X">
                            Cut
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Clipboard} shortcut="⌘V">
                            Paste
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Edit05} shortcut="⌘E">
                            Edit
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Share07} shortcut="⌘⇧S">
                            Share
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Trash01} shortcut="⌘⌫" variant="danger">
                            Delete
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// With Submenus
// ============================================================================

export const WithSubmenus: ContextMenuStory = {
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 items-center justify-center rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary text-sm text-fg-tertiary transition-colors hover:border-border-primary hover:bg-bg-tertiary">
                        Right-click for nested menu
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Copy01} shortcut="⌘C">
                            Copy
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Scissors01} shortcut="⌘X">
                            Cut
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Clipboard} shortcut="⌘V">
                            Paste
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Submenu
                            trigger={
                                <ContextMenu.Item icon={FolderPlus}>New</ContextMenu.Item>
                            }
                        >
                            <ContextMenu.Item icon={File06}>File</ContextMenu.Item>
                            <ContextMenu.Item icon={FolderPlus}>Folder</ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item icon={TextInput}>Text File</ContextMenu.Item>
                            <ContextMenu.Item icon={FileCheck02}>Document</ContextMenu.Item>
                        </ContextMenu.Submenu>
                        <ContextMenu.Submenu
                            trigger={
                                <ContextMenu.Item icon={Share07}>Share</ContextMenu.Item>
                            }
                        >
                            <ContextMenu.Item icon={Copy01}>Copy Link</ContextMenu.Item>
                            <ContextMenu.Item icon={Send01}>Send via Email</ContextMenu.Item>
                            <ContextMenu.Item icon={ArrowsRight}>Share to Workspace</ContextMenu.Item>
                        </ContextMenu.Submenu>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Trash01} variant="danger">
                            Delete
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// With Separators
// ============================================================================

export const WithSeparators: ContextMenuStory = {
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 items-center justify-center rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary text-sm text-fg-tertiary transition-colors hover:border-border-primary hover:bg-bg-tertiary">
                        Organized menu groups
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Eye}>View</ContextMenu.Item>
                        <ContextMenu.Item icon={Edit05}>Edit</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Copy01}>Copy</ContextMenu.Item>
                        <ContextMenu.Item icon={Scissors01}>Cut</ContextMenu.Item>
                        <ContextMenu.Item icon={Clipboard}>Paste</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Download01}>Download</ContextMenu.Item>
                        <ContextMenu.Item icon={Share07}>Share</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Archive}>Archive</ContextMenu.Item>
                        <ContextMenu.Item icon={Trash01} variant="danger">
                            Delete
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// With Disabled Items
// ============================================================================

export const WithDisabledItems: ContextMenuStory = {
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 items-center justify-center rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary text-sm text-fg-tertiary transition-colors hover:border-border-primary hover:bg-bg-tertiary">
                        Some actions disabled
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Copy01} shortcut="⌘C">
                            Copy
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Scissors01} shortcut="⌘X" isDisabled>
                            Cut (disabled)
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Clipboard} shortcut="⌘V" isDisabled>
                            Paste (disabled)
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Edit05}>Edit</ContextMenu.Item>
                        <ContextMenu.Item icon={Download01} isDisabled>
                            Download (disabled)
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Trash01} variant="danger">
                            Delete
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// With Danger Items
// ============================================================================

export const WithDangerItems: ContextMenuStory = {
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 items-center justify-center rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary text-sm text-fg-tertiary transition-colors hover:border-border-primary hover:bg-bg-tertiary">
                        Destructive actions
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Eye}>View</ContextMenu.Item>
                        <ContextMenu.Item icon={Edit05}>Edit</ContextMenu.Item>
                        <ContextMenu.Item icon={Download01}>Download</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Archive} variant="danger">
                            Archive
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Star01} variant="danger">
                            Remove Access
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Trash01} variant="danger" shortcut="⌘⌫">
                            Delete
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// File Browser Example
// ============================================================================

export const FileBrowserExample: ContextMenuStory = {
    name: "Example: File Browser",
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex h-40 w-60 flex-col items-center justify-center gap-3 rounded-lg border border-border-primary bg-bg-primary p-6 shadow-sm transition-colors hover:border-border-brand hover:bg-bg-secondary">
                        <File06 className="size-10 text-fg-quaternary" />
                        <div className="text-center">
                            <div className="text-sm font-medium text-fg-primary">Document.pdf</div>
                            <div className="text-xs text-fg-tertiary">2.4 MB</div>
                        </div>
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Eye} shortcut="Space">
                            Quick Look
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Edit05}>Rename</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Copy01} shortcut="⌘C">
                            Copy
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Scissors01} shortcut="⌘X">
                            Cut
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Clipboard} shortcut="⌘V" isDisabled>
                            Paste
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Download01}>Download</ContextMenu.Item>
                        <ContextMenu.Submenu
                            trigger={
                                <ContextMenu.Item icon={Share07}>Share</ContextMenu.Item>
                            }
                        >
                            <ContextMenu.Item icon={Copy01}>Copy Link</ContextMenu.Item>
                            <ContextMenu.Item icon={Send01}>Send via Email</ContextMenu.Item>
                            <ContextMenu.Item icon={ArrowsRight}>Add to Shared Folder</ContextMenu.Item>
                        </ContextMenu.Submenu>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Star01}>Add to Favorites</ContextMenu.Item>
                        <ContextMenu.Item icon={Archive}>Move to Archive</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Trash01} variant="danger" shortcut="⌘⌫">
                            Move to Trash
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// Text Editor Example
// ============================================================================

export const TextEditorExample: ContextMenuStory = {
    name: "Example: Text Editor",
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="w-[400px] rounded-lg border border-border-primary bg-bg-primary p-4 shadow-sm">
                        <div className="text-sm text-fg-secondary">
                            <p className="mb-2">
                                <strong>Right-click this text</strong> to see formatting options.
                            </p>
                            <p className="text-fg-tertiary">
                                This context menu provides common text editing and formatting actions
                                similar to what you'd find in a word processor or rich text editor.
                            </p>
                        </div>
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={Copy01} shortcut="⌘C">
                            Copy
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Scissors01} shortcut="⌘X">
                            Cut
                        </ContextMenu.Item>
                        <ContextMenu.Item icon={Clipboard} shortcut="⌘V">
                            Paste
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Submenu
                            trigger={
                                <ContextMenu.Item icon={TextInput}>Format</ContextMenu.Item>
                            }
                        >
                            <ContextMenu.Item icon={Bold01} shortcut="⌘B">
                                Bold
                            </ContextMenu.Item>
                            <ContextMenu.Item icon={Italic01} shortcut="⌘I">
                                Italic
                            </ContextMenu.Item>
                            <ContextMenu.Item icon={Underline01} shortcut="⌘U">
                                Underline
                            </ContextMenu.Item>
                        </ContextMenu.Submenu>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Edit05}>Find and Replace</ContextMenu.Item>
                        <ContextMenu.Item icon={Settings01}>Preferences</ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// User Profile Example
// ============================================================================

export const UserProfileExample: ContextMenuStory = {
    name: "Example: User Profile",
    render: () => (
        <div className="flex items-center justify-center p-20">
            <ContextMenu.Trigger>
                {[
                    <div key="trigger" className="flex w-64 items-center gap-3 rounded-lg border border-border-primary bg-bg-primary p-4 shadow-sm transition-colors hover:border-border-brand hover:bg-bg-secondary">
                        <div className="flex size-12 items-center justify-center rounded-full bg-bg-brand-solid text-lg font-semibold text-text-primary_on-brand">
                            JD
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-semibold text-fg-primary">Jane Doe</div>
                            <div className="text-xs text-fg-tertiary">jane@example.com</div>
                        </div>
                    </div>,
                    <ContextMenu key="menu">
                        <ContextMenu.Item icon={User01}>View Profile</ContextMenu.Item>
                        <ContextMenu.Item icon={Edit05}>Edit Profile</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={Settings01}>Account Settings</ContextMenu.Item>
                        <ContextMenu.Item icon={Star01}>Manage Favorites</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item icon={LogOut01} variant="danger">
                            Sign Out
                        </ContextMenu.Item>
                    </ContextMenu>,
                ]}
            </ContextMenu.Trigger>
        </div>
    ),
};

// ============================================================================
// All Variants Showcase
// ============================================================================

export const AllVariants: ContextMenuStory = {
    name: "All Variants",
    render: () => (
        <div className="space-y-8 p-8">
            <div>
                <h3 className="mb-4 text-sm font-semibold text-fg-secondary">Basic Menu</h3>
                <ContextMenu.Trigger>
                    {[
                        <button
                            key="trigger"
                            type="button"
                            className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:bg-bg-secondary"
                        >
                            Right-click: Basic
                        </button>,
                        <ContextMenu key="menu">
                            <ContextMenu.Item>Action 1</ContextMenu.Item>
                            <ContextMenu.Item>Action 2</ContextMenu.Item>
                            <ContextMenu.Item>Action 3</ContextMenu.Item>
                        </ContextMenu>,
                    ]}
                </ContextMenu.Trigger>
            </div>

            <div>
                <h3 className="mb-4 text-sm font-semibold text-fg-secondary">With Icons & Shortcuts</h3>
                <ContextMenu.Trigger>
                    {[
                        <button
                            key="trigger"
                            type="button"
                            className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:bg-bg-secondary"
                        >
                            Right-click: Icons & Shortcuts
                        </button>,
                        <ContextMenu key="menu">
                            <ContextMenu.Item icon={Copy01} shortcut="⌘C">
                                Copy
                            </ContextMenu.Item>
                            <ContextMenu.Item icon={Scissors01} shortcut="⌘X">
                                Cut
                            </ContextMenu.Item>
                            <ContextMenu.Item icon={Clipboard} shortcut="⌘V">
                                Paste
                            </ContextMenu.Item>
                        </ContextMenu>,
                    ]}
                </ContextMenu.Trigger>
            </div>

            <div>
                <h3 className="mb-4 text-sm font-semibold text-fg-secondary">With Submenus</h3>
                <ContextMenu.Trigger>
                    {[
                        <button
                            key="trigger"
                            type="button"
                            className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:bg-bg-secondary"
                        >
                            Right-click: Submenus
                        </button>,
                        <ContextMenu key="menu">
                            <ContextMenu.Item icon={Eye}>View</ContextMenu.Item>
                            <ContextMenu.Submenu
                                trigger={
                                    <ContextMenu.Item icon={FolderPlus}>New</ContextMenu.Item>
                                }
                            >
                                <ContextMenu.Item icon={File06}>File</ContextMenu.Item>
                                <ContextMenu.Item icon={FolderPlus}>Folder</ContextMenu.Item>
                            </ContextMenu.Submenu>
                        </ContextMenu>,
                    ]}
                </ContextMenu.Trigger>
            </div>

            <div>
                <h3 className="mb-4 text-sm font-semibold text-fg-secondary">With Danger Items</h3>
                <ContextMenu.Trigger>
                    {[
                        <button
                            key="trigger"
                            type="button"
                            className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:bg-bg-secondary"
                        >
                            Right-click: Danger Actions
                        </button>,
                        <ContextMenu key="menu">
                            <ContextMenu.Item icon={Eye}>View</ContextMenu.Item>
                            <ContextMenu.Item icon={Edit05}>Edit</ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item icon={Trash01} variant="danger" shortcut="⌘⌫">
                                Delete
                            </ContextMenu.Item>
                        </ContextMenu>,
                    ]}
                </ContextMenu.Trigger>
            </div>
        </div>
    ),
};
