import type { ComponentType, SVGProps } from "react";
import { cx } from "@/utils/cx";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface ActionItemProps {
    /** Item label */
    label: string;
    /** Secondary description */
    description?: string;
    /** Leading icon */
    icon?: IconComponent;
    /** Keyboard shortcut display */
    shortcut?: string;
    /** Destructive action (delete, remove, etc.) */
    destructive?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Size variant */
    size?: "sm" | "md";
    /** Additional className */
    className?: string;
}

const sizeStyles = {
    sm: {
        root: "py-2 px-3 gap-2",
        label: "text-sm",
        description: "text-xs",
        icon: "size-4",
        shortcut: "text-xs",
    },
    md: {
        root: "py-2.5 px-3 gap-3",
        label: "text-sm",
        description: "text-sm",
        icon: "size-5",
        shortcut: "text-sm",
    },
};

/**
 * ActionItem - Action list item for command palettes and context menus.
 *
 * Features:
 * - Keyboard shortcuts
 * - Destructive variant
 * - Description text
 * - Icon support
 *
 * @example
 * ```tsx
 * <ActionItem
 *   icon={CopyIcon}
 *   label="Copy"
 *   shortcut="⌘C"
 *   onClick={handleCopy}
 * />
 * <ActionItem
 *   icon={TrashIcon}
 *   label="Delete"
 *   description="This action cannot be undone"
 *   destructive
 *   onClick={handleDelete}
 * />
 * ```
 */
export const ActionItem = ({
    label,
    description,
    icon: Icon,
    shortcut,
    destructive = false,
    disabled = false,
    onClick,
    size = "md",
    className,
}: ActionItemProps) => {
    const styles = sizeStyles[size];

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cx(
                "flex w-full items-center rounded-md transition-colors duration-150",
                styles.root,
                // Color variants
                destructive
                    ? "text-fg-error-primary hover:bg-bg-error-primary"
                    : "text-fg-primary hover:bg-bg-secondary",
                // Disabled
                disabled && "opacity-50 cursor-not-allowed",
                !disabled && "cursor-pointer",
                // Focus
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-inset",
                className
            )}
        >
            {Icon && (
                <Icon
                    className={cx(
                        styles.icon,
                        destructive ? "text-fg-error-primary" : "text-fg-tertiary"
                    )}
                    aria-hidden="true"
                />
            )}
            <div className="flex-1 min-w-0 text-left">
                <div className={cx("font-medium truncate", styles.label)}>
                    {label}
                </div>
                {description && (
                    <div className={cx("text-fg-tertiary truncate", styles.description)}>
                        {description}
                    </div>
                )}
            </div>
            {shortcut && (
                <kbd
                    className={cx(
                        "flex-shrink-0 px-2 py-0.5 rounded font-mono font-medium border",
                        styles.shortcut,
                        destructive
                            ? "bg-bg-error-primary border-border-error text-fg-error-primary"
                            : "bg-bg-tertiary border-border-secondary text-fg-quaternary"
                    )}
                >
                    {shortcut}
                </kbd>
            )}
        </button>
    );
};

ActionItem.displayName = "ActionItem";
