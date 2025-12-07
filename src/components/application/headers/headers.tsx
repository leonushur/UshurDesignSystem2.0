import type { ReactNode, ComponentType, SVGProps, FC } from "react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type ButtonIconType = FC<{ className?: string }> | ReactNode;

export interface PageHeaderProps {
    /** Page title */
    title: string;
    /** Page description */
    description?: string;
    /** Breadcrumb element */
    breadcrumb?: ReactNode;
    /** Primary action button label */
    primaryAction?: string;
    /** Secondary action button label */
    secondaryAction?: string;
    /** Primary action callback */
    onPrimaryAction?: () => void;
    /** Secondary action callback */
    onSecondaryAction?: () => void;
    /** Primary action icon */
    primaryActionIcon?: IconComponent;
    /** Additional actions */
    actions?: ReactNode;
    /** Additional class name */
    className?: string;
}

export const PageHeader = ({
    title,
    description,
    breadcrumb,
    primaryAction,
    secondaryAction,
    onPrimaryAction,
    onSecondaryAction,
    primaryActionIcon,
    actions,
    className,
}: PageHeaderProps) => {
    return (
        <div className={cx("flex flex-col gap-4 pb-5", className)}>
            {breadcrumb && <div>{breadcrumb}</div>}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-display-sm font-semibold text-fg-primary">{title}</h1>
                    {description && <p className="text-md text-fg-tertiary">{description}</p>}
                </div>

                <div className="flex items-center gap-3">
                    {secondaryAction && (
                        <Button color="secondary" onPress={onSecondaryAction}>
                            {secondaryAction}
                        </Button>
                    )}
                    {primaryAction && (
                        <Button color="primary" onPress={onPrimaryAction} iconLeading={primaryActionIcon as ButtonIconType}>
                            {primaryAction}
                        </Button>
                    )}
                    {actions}
                </div>
            </div>
        </div>
    );
};

export interface PageHeaderWithTabsProps extends Omit<PageHeaderProps, "description"> {
    /** Tabs element */
    tabs: ReactNode;
}

export const PageHeaderWithTabs = ({
    title,
    breadcrumb,
    primaryAction,
    secondaryAction,
    onPrimaryAction,
    onSecondaryAction,
    primaryActionIcon,
    actions,
    tabs,
    className,
}: PageHeaderWithTabsProps) => {
    return (
        <div className={cx("flex flex-col", className)}>
            {breadcrumb && <div className="pb-4">{breadcrumb}</div>}

            <div className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-display-sm font-semibold text-fg-primary">{title}</h1>

                <div className="flex items-center gap-3">
                    {secondaryAction && (
                        <Button color="secondary" onPress={onSecondaryAction}>
                            {secondaryAction}
                        </Button>
                    )}
                    {primaryAction && (
                        <Button color="primary" onPress={onPrimaryAction} iconLeading={primaryActionIcon as ButtonIconType}>
                            {primaryAction}
                        </Button>
                    )}
                    {actions}
                </div>
            </div>

            <div className="-mb-px border-b border-border-secondary">{tabs}</div>
        </div>
    );
};

export interface CardHeaderProps {
    /** Card title */
    title: string;
    /** Card description */
    description?: string;
    /** Icon to display */
    icon?: IconComponent;
    /** Action element */
    action?: ReactNode;
    /** Divider below header */
    divider?: boolean;
    /** Additional class name */
    className?: string;
}

export const CardHeader = ({
    title,
    description,
    icon: Icon,
    action,
    divider = false,
    className,
}: CardHeaderProps) => {
    return (
        <div
            className={cx(
                "flex items-start justify-between gap-4",
                divider && "border-b border-border-secondary pb-4",
                className
            )}
        >
            <div className="flex items-start gap-3">
                {Icon && (
                    <div className="flex size-10 items-center justify-center rounded-lg border border-border-secondary bg-bg-primary shadow-xs">
                        <Icon className="size-5 text-fg-quaternary" />
                    </div>
                )}
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg font-semibold text-fg-primary">{title}</h3>
                    {description && <p className="text-sm text-fg-tertiary">{description}</p>}
                </div>
            </div>

            {action && <div className="flex-shrink-0">{action}</div>}
        </div>
    );
};

export interface SectionHeaderProps {
    /** Section title */
    title: string;
    /** Section description */
    description?: string;
    /** Action element */
    action?: ReactNode;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Additional class name */
    className?: string;
}

export const SectionHeader = ({
    title,
    description,
    action,
    size = "md",
    className,
}: SectionHeaderProps) => {
    return (
        <div className={cx("flex items-start justify-between gap-4", className)}>
            <div className="flex flex-col gap-1">
                <h2
                    className={cx(
                        "font-semibold text-fg-primary",
                        size === "sm" && "text-md",
                        size === "md" && "text-lg",
                        size === "lg" && "text-xl"
                    )}
                >
                    {title}
                </h2>
                {description && (
                    <p className={cx("text-fg-tertiary", size === "sm" ? "text-sm" : "text-sm")}>
                        {description}
                    </p>
                )}
            </div>

            {action && <div className="flex-shrink-0">{action}</div>}
        </div>
    );
};

export interface SectionFooterProps {
    /** Help text */
    helpText?: string;
    /** Primary action button label */
    primaryAction?: string;
    /** Secondary action button label */
    secondaryAction?: string;
    /** Primary action callback */
    onPrimaryAction?: () => void;
    /** Secondary action callback */
    onSecondaryAction?: () => void;
    /** Divider above footer */
    divider?: boolean;
    /** Additional class name */
    className?: string;
}

export const SectionFooter = ({
    helpText,
    primaryAction,
    secondaryAction,
    onPrimaryAction,
    onSecondaryAction,
    divider = true,
    className,
}: SectionFooterProps) => {
    return (
        <div
            className={cx(
                "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                divider && "border-t border-border-secondary pt-4",
                className
            )}
        >
            {helpText && <p className="text-sm text-fg-tertiary">{helpText}</p>}

            <div className="flex items-center gap-3">
                {secondaryAction && (
                    <Button color="secondary" size="md" onPress={onSecondaryAction}>
                        {secondaryAction}
                    </Button>
                )}
                {primaryAction && (
                    <Button color="primary" size="md" onPress={onPrimaryAction}>
                        {primaryAction}
                    </Button>
                )}
            </div>
        </div>
    );
};

