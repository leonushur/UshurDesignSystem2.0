import type { ReactNode, ComponentType, SVGProps } from "react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface InlineCTAProps {
    /** Title text */
    title: string;
    /** Description text */
    description?: string;
    /** Primary action button label */
    primaryAction: string;
    /** Secondary action button label */
    secondaryAction?: string;
    /** Primary action callback */
    onPrimaryAction?: () => void;
    /** Secondary action callback */
    onSecondaryAction?: () => void;
    /** Icon to display */
    icon?: IconComponent;
    /** Color variant */
    variant?: "default" | "brand" | "gray";
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Additional class name */
    className?: string;
}

const variantStyles = {
    default: "border-border-secondary bg-bg-primary",
    brand: "border-border-brand bg-bg-brand-primary",
    gray: "border-border-secondary bg-bg-secondary",
};

export const InlineCTA = ({
    title,
    description,
    primaryAction,
    secondaryAction,
    onPrimaryAction,
    onSecondaryAction,
    icon: Icon,
    variant = "default",
    size = "md",
    className,
}: InlineCTAProps) => {
    return (
        <div
            className={cx(
                "flex flex-col gap-4 rounded-xl border sm:flex-row sm:items-center sm:justify-between",
                size === "sm" && "p-4",
                size === "md" && "p-5",
                size === "lg" && "p-6",
                variantStyles[variant],
                className
            )}
        >
            <div className="flex items-start gap-3">
                {Icon && (
                    <div
                        className={cx(
                            "flex-shrink-0 rounded-lg border p-2",
                            variant === "brand"
                                ? "border-border-brand bg-bg-brand-secondary"
                                : "border-border-secondary bg-bg-primary shadow-xs"
                        )}
                    >
                        <Icon
                            className={cx(
                                "size-5",
                                variant === "brand" ? "text-fg-brand-primary" : "text-fg-quaternary"
                            )}
                        />
                    </div>
                )}
                <div>
                    <h3
                        className={cx(
                            "font-semibold",
                            size === "sm" && "text-sm",
                            size === "md" && "text-md",
                            size === "lg" && "text-lg",
                            variant === "brand" ? "text-fg-brand-primary" : "text-fg-primary"
                        )}
                    >
                        {title}
                    </h3>
                    {description && (
                        <p
                            className={cx(
                                "mt-0.5 text-sm",
                                variant === "brand" ? "text-fg-brand-secondary" : "text-fg-tertiary"
                            )}
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3">
                {secondaryAction && (
                    <Button
                        color={variant === "brand" ? "link-color" : "secondary"}
                        size="sm"
                        onPress={onSecondaryAction}
                    >
                        {secondaryAction}
                    </Button>
                )}
                <Button color="primary" size="sm" onPress={onPrimaryAction}>
                    {primaryAction}
                </Button>
            </div>
        </div>
    );
};

export interface InlineCTABannerProps {
    /** Text content */
    children: ReactNode;
    /** Action button label */
    actionLabel?: string;
    /** Action callback */
    onAction?: () => void;
    /** Dismiss callback */
    onDismiss?: () => void;
    /** Color variant */
    variant?: "brand" | "gray" | "success" | "warning" | "error";
    /** Additional class name */
    className?: string;
}

const bannerVariantStyles = {
    brand: "bg-bg-brand-solid text-white",
    gray: "bg-bg-secondary text-fg-primary",
    success: "bg-bg-success-solid text-white",
    warning: "bg-bg-warning-solid text-fg-primary",
    error: "bg-bg-error-solid text-white",
};

export const InlineCTABanner = ({
    children,
    actionLabel,
    onAction,
    onDismiss,
    variant = "brand",
    className,
}: InlineCTABannerProps) => {
    return (
        <div
            className={cx(
                "flex items-center justify-between gap-4 px-4 py-3",
                bannerVariantStyles[variant],
                className
            )}
        >
            <p className="text-sm font-medium">{children}</p>

            <div className="flex items-center gap-3">
                {actionLabel && (
                    <button
                        type="button"
                        onClick={onAction}
                        className={cx(
                            "text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-80",
                            variant === "gray" && "text-fg-brand-secondary"
                        )}
                    >
                        {actionLabel}
                    </button>
                )}
                {onDismiss && (
                    <button
                        type="button"
                        onClick={onDismiss}
                        className="text-sm font-medium transition-opacity hover:opacity-80"
                        aria-label="Dismiss"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

