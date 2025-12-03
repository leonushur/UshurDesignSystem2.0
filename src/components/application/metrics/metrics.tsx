import type { ReactNode, ComponentType, SVGProps } from "react";
import { ArrowUp, ArrowDown, TrendUp01, TrendDown01 } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface MetricCardProps {
    /** Metric label/title */
    label: string;
    /** Main value to display */
    value: string | number;
    /** Change value (e.g., "+12%") */
    change?: string;
    /** Whether change is positive */
    changeType?: "positive" | "negative" | "neutral";
    /** Description text below value */
    description?: string;
    /** Optional icon */
    icon?: IconComponent;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Additional class name */
    className?: string;
}

export const MetricCard = ({
    label,
    value,
    change,
    changeType = "neutral",
    description,
    icon: Icon,
    size = "md",
    className,
}: MetricCardProps) => {
    const ChangeIcon = changeType === "positive" ? ArrowUp : changeType === "negative" ? ArrowDown : null;

    return (
        <div
            className={cx(
                "flex flex-col rounded-xl border border-border-secondary bg-bg-primary",
                size === "sm" && "gap-1 p-4",
                size === "md" && "gap-2 p-5",
                size === "lg" && "gap-3 p-6",
                className
            )}
        >
            <div className="flex items-center justify-between">
                <span
                    className={cx(
                        "font-medium text-fg-tertiary",
                        size === "sm" && "text-xs",
                        size === "md" && "text-sm",
                        size === "lg" && "text-sm"
                    )}
                >
                    {label}
                </span>
                {Icon && (
                    <Icon
                        className={cx(
                            "text-fg-quaternary",
                            size === "sm" && "size-4",
                            size === "md" && "size-5",
                            size === "lg" && "size-6"
                        )}
                    />
                )}
            </div>

            <div className="flex items-end gap-2">
                <span
                    className={cx(
                        "font-semibold text-fg-primary",
                        size === "sm" && "text-xl",
                        size === "md" && "text-2xl",
                        size === "lg" && "text-3xl"
                    )}
                >
                    {value}
                </span>

                {change && (
                    <span
                        className={cx(
                            "flex items-center gap-0.5 text-sm font-medium",
                            changeType === "positive" && "text-fg-success-primary",
                            changeType === "negative" && "text-fg-error-primary",
                            changeType === "neutral" && "text-fg-tertiary"
                        )}
                    >
                        {ChangeIcon && <ChangeIcon className="size-4" />}
                        {change}
                    </span>
                )}
            </div>

            {description && (
                <span
                    className={cx(
                        "text-fg-tertiary",
                        size === "sm" && "text-xs",
                        size === "md" && "text-sm",
                        size === "lg" && "text-sm"
                    )}
                >
                    {description}
                </span>
            )}
        </div>
    );
};

export interface MetricInlineProps {
    /** Metric label */
    label: string;
    /** Main value */
    value: string | number;
    /** Change value */
    change?: string;
    /** Change type */
    changeType?: "positive" | "negative" | "neutral";
    /** Additional class name */
    className?: string;
}

export const MetricInline = ({
    label,
    value,
    change,
    changeType = "neutral",
    className,
}: MetricInlineProps) => {
    const TrendIcon = changeType === "positive" ? TrendUp01 : changeType === "negative" ? TrendDown01 : null;

    return (
        <div className={cx("flex items-center gap-4", className)}>
            <span className="text-sm font-medium text-fg-tertiary">{label}</span>
            <span className="text-lg font-semibold text-fg-primary">{value}</span>
            {change && (
                <span
                    className={cx(
                        "flex items-center gap-1 text-sm font-medium",
                        changeType === "positive" && "text-fg-success-primary",
                        changeType === "negative" && "text-fg-error-primary",
                        changeType === "neutral" && "text-fg-tertiary"
                    )}
                >
                    {TrendIcon && <TrendIcon className="size-4" />}
                    {change}
                </span>
            )}
        </div>
    );
};

export interface MetricWithChartProps {
    /** Metric label */
    label: string;
    /** Main value */
    value: string | number;
    /** Change value */
    change?: string;
    /** Change type */
    changeType?: "positive" | "negative" | "neutral";
    /** Chart element to render */
    chart?: ReactNode;
    /** Additional class name */
    className?: string;
}

export const MetricWithChart = ({
    label,
    value,
    change,
    changeType = "neutral",
    chart,
    className,
}: MetricWithChartProps) => {
    return (
        <div
            className={cx(
                "flex flex-col gap-4 rounded-xl border border-border-secondary bg-bg-primary p-5",
                className
            )}
        >
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-fg-tertiary">{label}</span>
                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-semibold text-fg-primary">{value}</span>
                        {change && (
                            <span
                                className={cx(
                                    "flex items-center gap-0.5 text-sm font-medium",
                                    changeType === "positive" && "text-fg-success-primary",
                                    changeType === "negative" && "text-fg-error-primary",
                                    changeType === "neutral" && "text-fg-tertiary"
                                )}
                            >
                                {changeType === "positive" && <ArrowUp className="size-4" />}
                                {changeType === "negative" && <ArrowDown className="size-4" />}
                                {change}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {chart && <div className="h-16">{chart}</div>}
        </div>
    );
};

export interface MetricGroupProps {
    /** Array of metrics */
    metrics: MetricCardProps[];
    /** Number of columns */
    columns?: 2 | 3 | 4;
    /** Additional class name */
    className?: string;
}

export const MetricGroup = ({ metrics, columns = 4, className }: MetricGroupProps) => {
    return (
        <div
            className={cx(
                "grid gap-4",
                columns === 2 && "grid-cols-1 sm:grid-cols-2",
                columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                className
            )}
        >
            {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
            ))}
        </div>
    );
};

