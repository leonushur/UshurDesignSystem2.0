import type { FC, ReactNode } from "react";
import { Copy01, Edit01, Trash01, DotsVertical } from "@untitledui-pro/icons/line";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export interface TableCellAction {
    /** Action label */
    label: string;
    /** Icon component */
    icon?: FC<{ className?: string }>;
    /** Click handler */
    onAction?: () => void;
    /** Destructive action styling */
    destructive?: boolean;
    /** Disabled state */
    disabled?: boolean;
}

export interface TableCellActionsProps {
    /** Array of actions to display */
    actions?: TableCellAction[];
    /** Show as inline buttons instead of dropdown */
    inline?: boolean;
    /** Size variant */
    size?: "sm" | "md";
    /** Additional className */
    className?: string;
}

const defaultActions: TableCellAction[] = [
    { label: "Edit", icon: Edit01 },
    { label: "Copy link", icon: Copy01 },
    { label: "Delete", icon: Trash01, destructive: true },
];

/**
 * TableCellActions - A primitive for row action buttons/dropdown in table cells.
 *
 * Two display modes:
 * - Dropdown (default): Three-dot menu with action items
 * - Inline: Visible icon buttons
 *
 * @example
 * ```tsx
 * // Dropdown mode (default)
 * <TableCellActions actions={[
 *   { label: "Edit", icon: Edit01, onAction: handleEdit },
 *   { label: "Delete", icon: Trash01, destructive: true, onAction: handleDelete },
 * ]} />
 *
 * // Inline mode
 * <TableCellActions inline actions={[...]} />
 * ```
 */
export const TableCellActions = ({
    actions = defaultActions,
    inline = false,
    size = "md",
    className,
}: TableCellActionsProps) => {
    if (inline) {
        return (
            <div className={cx("flex items-center gap-1", className)}>
                {actions.map((action, index) => (
                    <Button
                        key={index}
                        color="tertiary"
                        size="sm"
                        onPress={action.onAction}
                        isDisabled={action.disabled}
                        className={cx(
                            action.destructive && "text-fg-error-secondary hover:text-fg-error-primary"
                        )}
                    >
                        {action.icon && <action.icon className="size-4" />}
                    </Button>
                ))}
            </div>
        );
    }

    return (
        <div className={cx("flex items-center justify-end", className)}>
            <Dropdown.Root>
                <Dropdown.DotsButton />
                <Dropdown.Popover className="w-min">
                    <Dropdown.Menu>
                        {actions.map((action, index) => (
                            <Dropdown.Item
                                key={index}
                                icon={action.icon}
                                onAction={action.onAction}
                                isDisabled={action.disabled}
                                className={cx(
                                    action.destructive && "text-fg-error-secondary"
                                )}
                            >
                                <span className="pr-4">{action.label}</span>
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown.Root>
        </div>
    );
};

TableCellActions.displayName = "TableCellActions";
