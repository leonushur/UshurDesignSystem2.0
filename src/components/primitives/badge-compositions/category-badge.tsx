import type { FC } from "react";
import { Badge, BadgeWithIcon } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";

export type CategoryColor = "gray" | "brand" | "blue" | "purple" | "pink" | "orange" | "indigo";

export interface CategoryBadgeProps {
    /** Category label */
    label: string;
    /** Color variant */
    color?: CategoryColor;
    /** Leading icon */
    icon?: FC<{ className?: string; strokeWidth?: string | number }>;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Badge type (pill or square) */
    type?: "pill-color" | "badge-color";
    /** Additional className */
    className?: string;
}

/**
 * CategoryBadge - Badge for categorization and tagging.
 *
 * Use for non-status labels like departments, types, or tags.
 *
 * @example
 * ```tsx
 * <CategoryBadge label="Design" color="purple" />
 * <CategoryBadge label="Engineering" color="blue" icon={Code} />
 * <CategoryBadge label="Marketing" color="pink" type="badge-color" />
 * ```
 */
export const CategoryBadge = ({
    label,
    color = "gray",
    icon,
    size = "sm",
    type = "pill-color",
    className,
}: CategoryBadgeProps) => {
    if (icon) {
        return (
            <BadgeWithIcon
                color={color}
                size={size}
                type={type}
                iconLeading={icon}
                className={className}
            >
                {label}
            </BadgeWithIcon>
        );
    }

    return (
        <Badge color={color} size={size} type={type} className={className}>
            {label}
        </Badge>
    );
};

CategoryBadge.displayName = "CategoryBadge";
