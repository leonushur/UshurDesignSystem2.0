import type { ReactNode, ComponentType, SVGProps } from "react";
import { cx } from "@/utils/cx";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface FieldHintProps {
    /** Hint text content */
    children: ReactNode;
    /** Optional leading icon */
    icon?: IconComponent;
    /** Size variant */
    size?: "sm" | "md";
    /** Additional className */
    className?: string;
}

const sizeStyles = {
    sm: "text-xs",
    md: "text-sm",
};

/**
 * FieldHint - Hint text primitive for form fields.
 *
 * Features:
 * - Optional leading icon
 * - Semantic text color
 * - Size variants
 *
 * @example
 * ```tsx
 * <FieldHint>This is your public display name.</FieldHint>
 * <FieldHint icon={InfoCircle}>Markdown formatting is supported.</FieldHint>
 * ```
 */
export const FieldHint = ({
    children,
    icon: Icon,
    size = "md",
    className,
}: FieldHintProps) => {
    return (
        <div
            className={cx(
                "flex items-start gap-1.5 text-fg-tertiary",
                sizeStyles[size],
                className
            )}
        >
            {Icon && (
                <Icon
                    className="size-4 shrink-0 mt-0.5"
                    aria-hidden="true"
                />
            )}
            <span>{children}</span>
        </div>
    );
};

FieldHint.displayName = "FieldHint";
