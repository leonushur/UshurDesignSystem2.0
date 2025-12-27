import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface TableCellTextProps {
    /** Primary text content */
    primary: string;
    /** Secondary/supporting text (optional) */
    secondary?: string;
    /** Size variant */
    size?: "sm" | "md";
    /** Additional className */
    className?: string;
}

/**
 * TableCellText - A primitive for displaying text content in table cells.
 *
 * Use this primitive when you need a table cell with:
 * - Primary text (required)
 * - Optional secondary/supporting text below
 *
 * @example
 * ```tsx
 * <TableCellText primary="John Doe" secondary="john@example.com" />
 * ```
 */
export const TableCellText = ({ primary, secondary, size = "md", className }: TableCellTextProps) => {
    return (
        <div className={cx("flex flex-col", className)}>
            <span className={cx(
                "font-medium text-fg-primary",
                size === "sm" ? "text-xs" : "text-sm"
            )}>
                {primary}
            </span>
            {secondary && (
                <span className={cx(
                    "text-fg-tertiary",
                    size === "sm" ? "text-xs" : "text-sm"
                )}>
                    {secondary}
                </span>
            )}
        </div>
    );
};

TableCellText.displayName = "TableCellText";
