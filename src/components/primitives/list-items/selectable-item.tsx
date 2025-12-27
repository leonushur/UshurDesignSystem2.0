import type { ReactNode } from "react";
import { Check } from "@untitledui-pro/icons/line";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { cx } from "@/utils/cx";

export interface SelectableItemProps {
    /** Item label */
    label: string;
    /** Secondary description */
    description?: string;
    /** Selected state */
    selected?: boolean;
    /** Selection mode determines visual indicator */
    mode?: "check" | "checkbox" | "radio";
    /** Disabled state */
    disabled?: boolean;
    /** Selection handler */
    onSelect?: (selected: boolean) => void;
    /** Leading element (avatar, icon) */
    leading?: ReactNode;
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
    },
    md: {
        root: "py-2.5 px-3 gap-3",
        label: "text-sm",
        description: "text-sm",
    },
};

/**
 * SelectableItem - List item with selection indicator.
 *
 * Three selection modes:
 * - check: Checkmark icon when selected (dropdown style)
 * - checkbox: Checkbox input (multi-select)
 * - radio: Radio-style single select
 *
 * @example
 * ```tsx
 * // Dropdown option
 * <SelectableItem
 *   label="Option 1"
 *   selected={value === "option1"}
 *   mode="check"
 *   onSelect={() => setValue("option1")}
 * />
 *
 * // Multi-select
 * <SelectableItem
 *   label="Feature A"
 *   selected={features.includes("a")}
 *   mode="checkbox"
 *   onSelect={(s) => toggleFeature("a", s)}
 * />
 * ```
 */
export const SelectableItem = ({
    label,
    description,
    selected = false,
    mode = "check",
    disabled = false,
    onSelect,
    leading,
    size = "md",
    className,
}: SelectableItemProps) => {
    const styles = sizeStyles[size];

    const handleClick = () => {
        if (!disabled && onSelect) {
            onSelect(!selected);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className={cx(
                "flex w-full items-center rounded-md transition-colors duration-150",
                styles.root,
                !disabled && "cursor-pointer hover:bg-secondary",
                selected && mode === "check" && "bg-secondary",
                disabled && "opacity-50 cursor-not-allowed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-inset",
                className
            )}
        >
            {mode === "checkbox" && (
                <Checkbox
                    isSelected={selected}
                    isDisabled={disabled}
                    onChange={onSelect}
                    size={size}
                />
            )}
            {mode === "radio" && (
                <div
                    className={cx(
                        "size-4 rounded-full border-2 flex items-center justify-center transition-colors",
                        selected ? "border-border-brand bg-bg-brand-solid" : "border-border-primary bg-bg-primary"
                    )}
                >
                    {selected && <div className="size-1.5 rounded-full bg-white" />}
                </div>
            )}
            {leading && (
                <div className="flex-shrink-0">{leading}</div>
            )}
            <div className="flex-1 min-w-0 text-left">
                <div className={cx("font-medium text-fg-primary truncate", styles.label)}>
                    {label}
                </div>
                {description && (
                    <div className={cx("text-fg-tertiary truncate", styles.description)}>
                        {description}
                    </div>
                )}
            </div>
            {mode === "check" && selected && (
                <Check className="size-4 text-fg-brand-secondary flex-shrink-0" />
            )}
        </button>
    );
};

SelectableItem.displayName = "SelectableItem";
