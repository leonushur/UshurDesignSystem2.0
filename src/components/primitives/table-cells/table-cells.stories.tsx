import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Table } from "@/components/application/table/table";
import { TableCellText } from "./table-cell-text";
import { TableCellAvatar } from "./table-cell-avatar";
import { TableCellBadge } from "./table-cell-badge";
import { TableCellStatus } from "./table-cell-status";
import { TableCellActions } from "./table-cell-actions";
import { TableCellCheckbox } from "./table-cell-checkbox";
import { Edit01, Trash01, Copy01, Star01 } from "@untitledui-pro/icons/line";

type Story = StoryObj<typeof meta>;

const meta: Meta = {
    title: "Components/Primitives/Table Cells",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

// ========================================
// TableCellText Stories
// ========================================

export const TextPrimary: Story = {
    name: "Text - Primary Only",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Medium (default)</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText primary="Simple text content" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Small</h3>
                <Table size="sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText primary="Simple text content" size="sm" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const TextWithSecondary: Story = {
    name: "Text - With Secondary",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Contact Info</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText
                                    primary="Olivia Rhye"
                                    secondary="olivia@example.com"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText
                                    primary="Phoenix Baker"
                                    secondary="phoenix@example.com"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Project Info</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText
                                    primary="Design System"
                                    secondary="Updated 2 hours ago"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const TextTruncated: Story = {
    name: "Text - Truncated Content",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Long text in constrained width</h3>
                <div className="max-w-md">
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <TableCellText
                                        primary="This is a very long primary text that should demonstrate text wrapping behavior"
                                        secondary="This is also a very long secondary text that provides additional context"
                                    />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    ),
};

// ========================================
// TableCellAvatar Stories
// ========================================

export const AvatarBasic: Story = {
    name: "Avatar - Basic",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">With Image</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia"
                                    primary="Olivia Rhye"
                                    secondary="olivia@example.com"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">With Initials</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    initials="PB"
                                    primary="Phoenix Baker"
                                    secondary="phoenix@example.com"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const AvatarWithStatus: Story = {
    name: "Avatar - With Status Indicators",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">All Status States</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia"
                                    primary="Olivia Rhye"
                                    secondary="Online"
                                    showStatus
                                    status="online"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Phoenix"
                                    primary="Phoenix Baker"
                                    secondary="Away"
                                    showStatus
                                    status="away"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lana"
                                    primary="Lana Steiner"
                                    secondary="Busy"
                                    showStatus
                                    status="busy"
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Demi"
                                    primary="Demi Wilkinson"
                                    secondary="Offline"
                                    showStatus
                                    status="offline"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const AvatarSizes: Story = {
    name: "Avatar - All Sizes",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Extra Small</h3>
                <Table size="sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia"
                                    primary="Olivia Rhye"
                                    secondary="olivia@example.com"
                                    size="xs"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Small</h3>
                <Table size="sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Phoenix"
                                    primary="Phoenix Baker"
                                    secondary="phoenix@example.com"
                                    size="sm"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Medium (default)</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lana"
                                    primary="Lana Steiner"
                                    secondary="lana@example.com"
                                    size="md"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

// ========================================
// TableCellBadge Stories
// ========================================

export const BadgeColors: Story = {
    name: "Badge - All Colors",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Status Colors</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Success" color="success" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Warning" color="warning" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Error" color="error" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Brand" color="brand" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Gray" color="gray" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const BadgeWithDot: Story = {
    name: "Badge - With Dot Indicator",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Status Badges with Dots</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Active" color="success" dot />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Pending" color="warning" dot />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Failed" color="error" dot />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="In Progress" color="brand" dot />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const BadgeWithIcon: Story = {
    name: "Badge - With Icons",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Badges with Leading Icons</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Featured" color="brand" icon={Star01} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Design" color="success" icon={Edit01} />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const BadgeSizes: Story = {
    name: "Badge - Sizes",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Small</h3>
                <Table size="sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Small" color="brand" size="sm" dot />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Medium</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellBadge label="Medium" color="brand" size="md" dot />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

// ========================================
// TableCellStatus Stories
// ========================================

export const StatusTypes: Story = {
    name: "Status - All Types",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">All Status Types</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Connected" status="success" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Pending Review" status="warning" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Failed" status="error" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Processing" status="info" />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Inactive" status="neutral" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const StatusWithoutDot: Story = {
    name: "Status - Without Dot",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Text Only (no dot)</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Completed" status="success" dot={false} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="In Review" status="warning" dot={false} />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const StatusSizes: Story = {
    name: "Status - Sizes",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Small</h3>
                <Table size="sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Active" status="success" size="sm" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Medium (default)</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellStatus label="Active" status="success" size="md" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

// ========================================
// TableCellActions Stories
// ========================================

export const ActionsDropdown: Story = {
    name: "Actions - Dropdown Menu (default)",
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Default Actions</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText primary="Row with actions" />
                            </Table.Cell>
                            <Table.Cell className="w-16">
                                <TableCellActions />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};

export const ActionsCustom: Story = {
    name: "Actions - Custom Actions",
    render: () => {
        const customActions = [
            {
                label: "Edit",
                icon: Edit01,
                onAction: () => alert("Edit clicked")
            },
            {
                label: "Copy link",
                icon: Copy01,
                onAction: () => alert("Copy clicked")
            },
            {
                label: "Delete",
                icon: Trash01,
                destructive: true,
                onAction: () => alert("Delete clicked")
            },
        ];

        return (
            <div className="space-y-4">
                <div>
                    <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Custom Actions with Handlers</h3>
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <TableCellText primary="Click the menu to test actions" />
                                </Table.Cell>
                                <Table.Cell className="w-16">
                                    <TableCellActions actions={customActions} />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    },
};

export const ActionsInline: Story = {
    name: "Actions - Inline Buttons",
    render: () => {
        const inlineActions = [
            {
                label: "Edit",
                icon: Edit01,
                onAction: () => alert("Edit clicked")
            },
            {
                label: "Delete",
                icon: Trash01,
                destructive: true,
                onAction: () => alert("Delete clicked")
            },
        ];

        return (
            <div className="space-y-4">
                <div>
                    <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Inline Action Buttons</h3>
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <TableCellText primary="Hover to see inline actions" />
                                </Table.Cell>
                                <Table.Cell className="w-24">
                                    <TableCellActions actions={inlineActions} inline />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    },
};

// ========================================
// TableCellCheckbox Stories
// ========================================

export const CheckboxStates: Story = {
    name: "Checkbox - All States",
    render: () => {
        const [checked1, setChecked1] = useState(false);
        const [checked2, setChecked2] = useState(true);
        const [indeterminate, setIndeterminate] = useState(true);

        return (
            <div className="space-y-4">
                <div>
                    <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Interactive States</h3>
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell className="w-12">
                                    <TableCellCheckbox
                                        isSelected={checked1}
                                        onChange={setChecked1}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Unchecked (clickable)" />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="w-12">
                                    <TableCellCheckbox
                                        isSelected={checked2}
                                        onChange={setChecked2}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Checked (clickable)" />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="w-12">
                                    <TableCellCheckbox
                                        isSelected={false}
                                        isIndeterminate={indeterminate}
                                        onChange={() => setIndeterminate(!indeterminate)}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Indeterminate (clickable)" />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="w-12">
                                    <TableCellCheckbox
                                        isSelected={false}
                                        isDisabled
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Disabled unchecked" />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="w-12">
                                    <TableCellCheckbox
                                        isSelected={true}
                                        isDisabled
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Disabled checked" />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    },
};

export const CheckboxSizes: Story = {
    name: "Checkbox - Sizes",
    render: () => {
        const [checked, setChecked] = useState(true);

        return (
            <div className="space-y-4">
                <div>
                    <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Small</h3>
                    <Table size="sm">
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell className="w-12">
                                    <TableCellCheckbox
                                        isSelected={checked}
                                        onChange={setChecked}
                                        size="sm"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Small checkbox" size="sm" />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div>
                    <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Medium (default)</h3>
                    <Table>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell className="w-12">
                                    <TableCellCheckbox
                                        isSelected={checked}
                                        onChange={setChecked}
                                        size="md"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Medium checkbox" />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    },
};

// ========================================
// Composition Examples
// ========================================

export const CompositionFullRow: Story = {
    name: "Composition - Full Table Row",
    render: () => {
        const [selected, setSelected] = useState<Record<string, boolean>>({
            row1: false,
            row2: true,
            row3: false,
        });

        const handleSelect = (id: string, isSelected: boolean) => {
            setSelected(prev => ({ ...prev, [id]: isSelected }));
        };

        const actions = [
            { label: "Edit", icon: Edit01, onAction: () => alert("Edit") },
            { label: "Copy link", icon: Copy01, onAction: () => alert("Copy") },
            { label: "Delete", icon: Trash01, destructive: true, onAction: () => alert("Delete") },
        ];

        return (
            <div className="space-y-4">
                <div>
                    <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Complete Table Example</h3>
                    <p className="mb-4 text-sm text-fg-tertiary">
                        All primitives working together in a realistic table layout
                    </p>
                    <Table>
                        <Table.Header>
                            <Table.Column className="w-12">
                                <TableCellCheckbox
                                    isSelected={Object.values(selected).every(Boolean)}
                                    isIndeterminate={Object.values(selected).some(Boolean) && !Object.values(selected).every(Boolean)}
                                    onChange={(isSelected) => {
                                        setSelected({ row1: isSelected, row2: isSelected, row3: isSelected });
                                    }}
                                />
                            </Table.Column>
                            <Table.Column>User</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Role</Table.Column>
                            <Table.Column className="w-16">Actions</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <TableCellCheckbox
                                        isSelected={selected.row1}
                                        onChange={(isSelected) => handleSelect("row1", isSelected)}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellAvatar
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia"
                                        primary="Olivia Rhye"
                                        secondary="olivia@example.com"
                                        showStatus
                                        status="online"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellBadge label="Active" color="success" dot />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Admin" secondary="Full access" />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellActions actions={actions} />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <TableCellCheckbox
                                        isSelected={selected.row2}
                                        onChange={(isSelected) => handleSelect("row2", isSelected)}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellAvatar
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Phoenix"
                                        primary="Phoenix Baker"
                                        secondary="phoenix@example.com"
                                        showStatus
                                        status="away"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellStatus label="Pending Review" status="warning" />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Editor" secondary="Edit access" />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellActions actions={actions} />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <TableCellCheckbox
                                        isSelected={selected.row3}
                                        onChange={(isSelected) => handleSelect("row3", isSelected)}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellAvatar
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lana"
                                        primary="Lana Steiner"
                                        secondary="lana@example.com"
                                        showStatus
                                        status="offline"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellStatus label="Inactive" status="neutral" />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellText primary="Viewer" secondary="Read only" />
                                </Table.Cell>
                                <Table.Cell>
                                    <TableCellActions actions={actions} />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    },
};

export const CompositionVariants: Story = {
    name: "Composition - Different Patterns",
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">User Directory Pattern</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellAvatar
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Drew"
                                    primary="Drew Cano"
                                    secondary="Product Designer"
                                    showStatus
                                    status="online"
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TableCellText primary="San Francisco" secondary="PST (UTC-8)" />
                            </Table.Cell>
                            <Table.Cell>
                                <TableCellBadge label="Design Team" color="brand" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>

            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Project Status Pattern</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText
                                    primary="Design System Redesign"
                                    secondary="Updated 2 hours ago"
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TableCellStatus label="In Progress" status="info" />
                            </Table.Cell>
                            <Table.Cell>
                                <TableCellBadge label="High Priority" color="error" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>

            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Transaction History Pattern</h3>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <TableCellText
                                    primary="Payment Received"
                                    secondary="Invoice #1234"
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TableCellStatus label="Completed" status="success" />
                            </Table.Cell>
                            <Table.Cell>
                                <TableCellText primary="$1,250.00" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    ),
};
