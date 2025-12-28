import type { ReactNode, ComponentProps } from "react";
import { cx } from "@/utils/cx";

export interface ListItemBaseProps extends ComponentProps<"div"> {
    /** Leading content (icon, avatar, etc.) */
    leading?: ReactNode;
    /** Trailing content (icon, badge, etc.) */
    trailing?: ReactNode;
    /** Primary text */
    primary: string;
    /** Secondary description text */
    description?: string;
    /** Interactive (clickable) */
    interactive?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Size variant */
    size?: "sm" | "md";
    /** Additional className */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}

const sizeStyles = {
    sm: {
        root: "py-2 px-3 gap-2",
        primary: "text-sm",
        description: "text-xs",
    },
    md: {
        root: "py-2.5 px-3 gap-3",
        primary: "text-sm",
        description: "text-sm",
    },
};

/**
 * ListItemBase - Flexible base component for custom list items.
 *
 * Use this as a foundation for creating custom list item patterns.
 * For specific patterns, consider using NavItem, SelectableItem, or ActionItem.
 *
 * @example
 * ```tsx
 * <ListItemBase
 *   leading={<UserIcon />}
 *   primary="John Doe"
 *   description="Product Designer"
 *   trailing={<ChevronRightIcon />}
 *   interactive
 *   onClick={handleClick}
 * />
 * ```
 */
export const ListItemBase = ({
    leading,
    trailing,
    primary,
    description,
    interactive = false,
    disabled = false,
    size = "md",
    className,
    onClick,
    ...props
}: ListItemBaseProps) => {
    const styles = sizeStyles[size];
    const Component = interactive ? "button" : "div";

    return (
        <Component
            type={interactive ? "button" : undefined}
            onClick={interactive && !disabled ? onClick : undefined}
            disabled={interactive && disabled}
            className={cx(
                "flex w-full items-center rounded-md",
                styles.root,
                interactive && !disabled && "cursor-pointer hover:bg-bg-secondary transition-colors duration-150",
                interactive && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-inset",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            {...props}
        >
            {leading && <div className="flex-shrink-0">{leading}</div>}
            <div className="flex-1 min-w-0 text-left">
                <div className={cx("font-medium text-fg-primary truncate", styles.primary)}>
                    {primary}
                </div>
                {description && (
                    <div className={cx("text-fg-tertiary truncate", styles.description)}>
                        {description}
                    </div>
                )}
            </div>
            {trailing && <div className="flex-shrink-0">{trailing}</div>}
        </Component>
    );
};

ListItemBase.displayName = "ListItemBase";
