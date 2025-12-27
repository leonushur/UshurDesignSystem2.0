import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export type StatusType = "success" | "warning" | "error" | "info" | "neutral";

export interface TableCellStatusProps {
    /** Status text */
    label: string;
    /** Status type for coloring */
    status: StatusType;
    /** Show dot indicator */
    dot?: boolean;
    /** Size variant */
    size?: "sm" | "md";
    /** Additional className */
    className?: string;
}

const statusStyles: Record<StatusType, { dot: string; text: string }> = {
    success: {
        dot: "bg-fg-success-secondary",
        text: "text-fg-success-primary",
    },
    warning: {
        dot: "bg-fg-warning-secondary",
        text: "text-fg-warning-primary",
    },
    error: {
        dot: "bg-fg-error-secondary",
        text: "text-fg-error-primary",
    },
    info: {
        dot: "bg-fg-brand-secondary",
        text: "text-fg-brand-primary",
    },
    neutral: {
        dot: "bg-fg-quaternary",
        text: "text-fg-tertiary",
    },
};

/**
 * TableCellStatus - A primitive for displaying status with color-coded indicator.
 *
 * Simpler than TableCellBadge - just text with optional dot, no background.
 *
 * Common use cases:
 * - Connection status (Connected, Disconnected)
 * - Availability (Available, Unavailable)
 * - Simple state indicators
 *
 * @example
 * ```tsx
 * <TableCellStatus label="Connected" status="success" dot />
 * <TableCellStatus label="Pending Review" status="warning" />
 * ```
 */
export const TableCellStatus = ({
    label,
    status,
    dot = true,
    size = "md",
    className,
}: TableCellStatusProps) => {
    const styles = statusStyles[status];

    return (
        <div className={cx("flex items-center gap-2", className)}>
            {dot && (
                <span className={cx(
                    "rounded-full flex-shrink-0",
                    size === "sm" ? "size-1.5" : "size-2",
                    styles.dot
                )} />
            )}
            <span className={cx(
                "font-medium",
                size === "sm" ? "text-xs" : "text-sm",
                styles.text
            )}>
                {label}
            </span>
        </div>
    );
};

TableCellStatus.displayName = "TableCellStatus";
