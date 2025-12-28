import type { ReactNode } from "react";
import { cx } from "@/utils/cx";
import { FieldLabel, type FieldLabelProps } from "./field-label";
import { FieldHint, type FieldHintProps } from "./field-hint";
import { FieldError, type FieldErrorProps } from "./field-error";

export interface FieldWrapperProps {
    /** Field input element */
    children: ReactNode;
    /** Label configuration */
    label?: string | FieldLabelProps;
    /** Hint text configuration */
    hint?: ReactNode | FieldHintProps;
    /** Error message configuration */
    error?: ReactNode | FieldErrorProps;
    /** Layout direction */
    layout?: "vertical" | "horizontal";
    /** Size variant for all sub-components */
    size?: "sm" | "md";
    /** Additional className for wrapper */
    className?: string;
    /** Input ID for label association */
    htmlFor?: string;
}

/**
 * FieldWrapper - Complete field container with label, input, hint, and error.
 *
 * Features:
 * - Vertical or horizontal layout
 * - Automatic label association
 * - Consistent spacing and sizing
 * - Flexible configuration
 *
 * @example
 * ```tsx
 * <FieldWrapper
 *   label="Email address"
 *   hint="We'll never share your email."
 *   error="Please enter a valid email."
 * >
 *   <input type="email" />
 * </FieldWrapper>
 *
 * <FieldWrapper
 *   label={{ label: "Password", required: true, tooltip: "Choose a strong password" }}
 *   layout="horizontal"
 * >
 *   <input type="password" />
 * </FieldWrapper>
 * ```
 */
export const FieldWrapper = ({
    children,
    label,
    hint,
    error,
    layout = "vertical",
    size = "md",
    className,
    htmlFor,
}: FieldWrapperProps) => {
    // Determine if label is a string or object with props
    const labelProps: FieldLabelProps | null = label
        ? typeof label === "string"
            ? { label, htmlFor, size }
            : { ...label, htmlFor: htmlFor || label.htmlFor, size: label.size || size }
        : null;

    // Determine if hint is a node or object with props
    const hintProps: FieldHintProps | null =
        hint && typeof hint === "object" && "children" in hint
            ? { ...hint, size: hint.size || size }
            : null;

    // Determine if error is a node or object with props
    const errorProps: FieldErrorProps | null =
        error && typeof error === "object" && "children" in error
            ? { ...error, size: error.size || size }
            : null;

    if (layout === "horizontal") {
        return (
            <div
                className={cx(
                    "flex items-start gap-4",
                    className
                )}
            >
                {labelProps && (
                    <div className="min-w-[120px] pt-2">
                        <FieldLabel {...labelProps} />
                    </div>
                )}
                <div className="flex-1 flex flex-col gap-1.5">
                    {children}
                    {!error && (hintProps ? <FieldHint {...hintProps} /> : hint)}
                    {error && (errorProps ? <FieldError {...errorProps} /> : <FieldError size={size}>{error}</FieldError>)}
                </div>
            </div>
        );
    }

    return (
        <div
            className={cx(
                "flex flex-col gap-1.5",
                className
            )}
        >
            {labelProps && <FieldLabel {...labelProps} />}
            {children}
            {!error && (hintProps ? <FieldHint {...hintProps} /> : hint && <FieldHint size={size}>{hint}</FieldHint>)}
            {error && (errorProps ? <FieldError {...errorProps} /> : <FieldError size={size}>{error}</FieldError>)}
        </div>
    );
};

FieldWrapper.displayName = "FieldWrapper";
