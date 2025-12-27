import type { ReactNode } from "react";
import { HelpCircle } from "@untitledui-pro/icons/line";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

export interface FieldLabelProps {
    /** Label text */
    label: string;
    /** Associated input ID */
    htmlFor?: string;
    /** Required field indicator */
    required?: boolean;
    /** Optional field indicator */
    optional?: boolean;
    /** Tooltip help text */
    tooltip?: string;
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
 * FieldLabel - Label primitive for form fields.
 *
 * Features:
 * - Required/optional indicators
 * - Tooltip help
 * - Proper accessibility (htmlFor)
 *
 * @example
 * ```tsx
 * <FieldLabel label="Email" htmlFor="email" required />
 * <FieldLabel label="Bio" htmlFor="bio" optional tooltip="Markdown supported" />
 * ```
 */
export const FieldLabel = ({
    label,
    htmlFor,
    required = false,
    optional = false,
    tooltip,
    size = "md",
    className,
}: FieldLabelProps) => {
    return (
        <div className={cx("flex items-center gap-1", className)}>
            <label
                htmlFor={htmlFor}
                className={cx(
                    "font-medium text-fg-secondary",
                    sizeStyles[size]
                )}
            >
                {label}
                {required && <span className="text-fg-error-secondary ml-0.5">*</span>}
            </label>
            {optional && (
                <span className={cx("text-fg-quaternary", sizeStyles[size])}>
                    (optional)
                </span>
            )}
            {tooltip && (
                <Tooltip title={tooltip} placement="top">
                    <TooltipTrigger className="cursor-pointer text-fg-quaternary hover:text-fg-tertiary">
                        <HelpCircle className="size-4" />
                    </TooltipTrigger>
                </Tooltip>
            )}
        </div>
    );
};

FieldLabel.displayName = "FieldLabel";
