import type { ReactNode } from "react";
import { Badge } from "@/components/base/badges/badges";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { cx } from "@/utils/cx";

export interface TableCellBadgeProps {
    /** Badge text content */
    label: string;
    /** Badge color variant */
    color?: BadgeColors;
    /** Badge size */
    size?: "sm" | "md";
    /** Show dot indicator */
    dot?: boolean;
    /** Icon to display (leading) */
    icon?: React.ComponentType<{ className?: string }>;
    /** Additional className for wrapper */
    className?: string;
}

/**
 * TableCellBadge - A primitive for displaying status/category badges in table cells.
 *
 * Common use cases:
 * - Status indicators (Active, Pending, Completed)
 * - Category tags (Design, Development, Marketing)
 * - Priority levels (High, Medium, Low)
 *
 * @example
 * ```tsx
 * <TableCellBadge label="Active" color="success" dot />
 * <TableCellBadge label="Design" color="brand" icon={Palette} />
 * ```
 */
export const TableCellBadge = ({
    label,
    color = "gray",
    size = "sm",
    dot = false,
    icon: Icon,
    className,
}: TableCellBadgeProps) => {
    return (
        <div className={cx("flex items-center", className)}>
            <Badge color={color} size={size}>
                {dot && (
                    <span className={cx(
                        "rounded-full",
                        size === "sm" ? "size-1.5" : "size-2",
                        color === "success" && "bg-fg-success-secondary",
                        color === "error" && "bg-fg-error-secondary",
                        color === "warning" && "bg-fg-warning-secondary",
                        color === "brand" && "bg-fg-brand-secondary",
                        color === "gray" && "bg-fg-quaternary",
                    )} />
                )}
                {Icon && <Icon className={size === "sm" ? "size-3" : "size-4"} />}
                {label}
            </Badge>
        </div>
    );
};

TableCellBadge.displayName = "TableCellBadge";
