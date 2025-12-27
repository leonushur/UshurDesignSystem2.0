import { BadgeWithButton } from "@/components/base/badges/badges";
import { X } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

export interface DismissibleBadgeProps {
    /** Badge label */
    label: string;
    /** Color variant */
    color?: "gray" | "brand" | "blue" | "purple" | "pink" | "orange" | "error" | "warning" | "success";
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Dismiss handler */
    onDismiss?: () => void;
    /** Accessible label for dismiss button */
    dismissLabel?: string;
    /** Badge type */
    type?: "pill-color" | "badge-color";
    /** Additional className */
    className?: string;
}

/**
 * DismissibleBadge - Badge with close/dismiss button.
 *
 * Use for removable tags, filters, or selections.
 *
 * @example
 * ```tsx
 * <DismissibleBadge
 *   label="React"
 *   color="brand"
 *   onDismiss={() => removeTag("react")}
 * />
 * ```
 */
export const DismissibleBadge = ({
    label,
    color = "gray",
    size = "sm",
    onDismiss,
    dismissLabel = "Remove",
    type = "pill-color",
    className,
}: DismissibleBadgeProps) => {
    const badge = (
        <BadgeWithButton
            color={color}
            size={size}
            type={type}
            icon={X}
            buttonLabel={dismissLabel}
            onButtonClick={onDismiss}
        >
            {label}
        </BadgeWithButton>
    );

    if (className) {
        return <span className={className}>{badge}</span>;
    }
    return badge;
};

DismissibleBadge.displayName = "DismissibleBadge";
