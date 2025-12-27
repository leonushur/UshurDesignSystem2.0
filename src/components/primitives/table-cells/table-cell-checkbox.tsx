import { Checkbox } from "@/components/base/checkbox/checkbox";
import { cx } from "@/utils/cx";

export interface TableCellCheckboxProps {
    /** Checkbox checked state */
    isSelected?: boolean;
    /** Indeterminate state (for "select all" scenarios) */
    isIndeterminate?: boolean;
    /** Change handler */
    onChange?: (isSelected: boolean) => void;
    /** Size variant */
    size?: "sm" | "md";
    /** Disabled state */
    isDisabled?: boolean;
    /** Additional className */
    className?: string;
}

/**
 * TableCellCheckbox - A primitive for row selection checkboxes in tables.
 *
 * Supports:
 * - Individual row selection
 * - "Select all" with indeterminate state
 * - Keyboard navigation
 *
 * @example
 * ```tsx
 * // Individual row
 * <TableCellCheckbox
 *   isSelected={row.isSelected}
 *   onChange={(selected) => handleSelect(row.id, selected)}
 * />
 *
 * // Select all header
 * <TableCellCheckbox
 *   isSelected={allSelected}
 *   isIndeterminate={someSelected && !allSelected}
 *   onChange={handleSelectAll}
 * />
 * ```
 */
export const TableCellCheckbox = ({
    isSelected = false,
    isIndeterminate = false,
    onChange,
    size = "md",
    isDisabled = false,
    className,
}: TableCellCheckboxProps) => {
    return (
        <div className={cx("flex items-center", className)}>
            <Checkbox
                size={size}
                isSelected={isSelected}
                isIndeterminate={isIndeterminate}
                isDisabled={isDisabled}
                onChange={onChange}
            />
        </div>
    );
};

TableCellCheckbox.displayName = "TableCellCheckbox";
