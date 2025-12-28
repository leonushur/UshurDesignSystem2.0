import type { ReactNode, ComponentType, SVGProps } from "react";
import { AlertCircle } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface FieldErrorProps {
    /** Error message(s) */
    children: ReactNode;
    /** Optional custom icon (defaults to AlertCircle) */
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
 * FieldError - Error message primitive for form fields.
 *
 * Features:
 * - Default error icon
 * - Semantic error color
 * - Supports single or multiple errors
 *
 * @example
 * ```tsx
 * <FieldError>Password must be at least 8 characters.</FieldError>
 * <FieldError icon={XCircle}>
 *   <ul className="list-disc list-inside space-y-0.5">
 *     <li>Must contain uppercase letter</li>
 *     <li>Must contain number</li>
 *   </ul>
 * </FieldError>
 * ```
 */
export const FieldError = ({
    children,
    icon: Icon = AlertCircle,
    size = "md",
    className,
}: FieldErrorProps) => {
    return (
        <div
            className={cx(
                "flex items-start gap-1.5 text-text-error-primary",
                sizeStyles[size],
                className
            )}
            role="alert"
        >
            {Icon && (
                <Icon
                    className="size-4 shrink-0 mt-0.5"
                    aria-hidden="true"
                />
            )}
            <div>{children}</div>
        </div>
    );
};

FieldError.displayName = "FieldError";
