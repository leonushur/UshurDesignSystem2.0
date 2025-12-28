import type { ReactNode, ComponentType, SVGProps } from "react";
import { ChevronRight } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItemProps {
    /** Item label */
    label: string;
    /** Leading icon */
    icon?: IconComponent;
    /** Active state */
    active?: boolean;
    /** Badge content (number or text) */
    badge?: ReactNode;
    /** Show submenu indicator */
    hasSubmenu?: boolean;
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
        icon: "size-4",
        badge: "text-xs",
    },
    md: {
        root: "py-2.5 px-3 gap-3",
        label: "text-sm",
        icon: "size-5",
        badge: "text-sm",
    },
};

/**
 * NavItem - Navigation list item for sidebars and menus.
 *
 * Designed for navigation menus with:
 * - Active state highlighting
 * - Optional icons
 * - Badge counters
 * - Submenu indicators
 *
 * @example
 * ```tsx
 * <NavItem
 *   icon={HomeIcon}
 *   label="Dashboard"
 *   active
 *   badge="5"
 * />
 * <NavItem
 *   icon={SettingsIcon}
 *   label="Settings"
 *   hasSubmenu
 * />
 * ```
 */
export const NavItem = ({
    label,
    icon: Icon,
    active = false,
    badge,
    hasSubmenu = false,
    disabled = false,
    onClick,
    size = "md",
    className,
}: NavItemProps) => {
    const styles = sizeStyles[size];

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cx(
                "flex w-full items-center rounded-md font-medium transition-colors duration-150",
                styles.root,
                // Active state
                active && "bg-bg-secondary text-fg-brand-primary",
                // Inactive state
                !active && "text-fg-secondary hover:bg-bg-secondary hover:text-fg-primary",
                // Disabled state
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
                        active ? "text-fg-brand-primary" : "text-fg-tertiary"
                    )}
                    aria-hidden="true"
                />
            )}
            <span className={cx("flex-1 text-left truncate", styles.label)}>
                {label}
            </span>
            {badge && (
                <span
                    className={cx(
                        "flex-shrink-0 px-2 py-0.5 rounded-full font-semibold",
                        styles.badge,
                        active
                            ? "bg-bg-brand-secondary text-fg-brand-primary"
                            : "bg-bg-tertiary text-fg-secondary"
                    )}
                >
                    {badge}
                </span>
            )}
            {hasSubmenu && (
                <ChevronRight
                    className={cx(
                        "size-4 flex-shrink-0",
                        active ? "text-fg-brand-primary" : "text-fg-tertiary"
                    )}
                    aria-hidden="true"
                />
            )}
        </button>
    );
};

NavItem.displayName = "NavItem";
