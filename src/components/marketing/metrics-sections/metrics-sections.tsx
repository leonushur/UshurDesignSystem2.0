import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface MetricItem {
    label: string;
    value: string;
    description?: string;
    trend?: {
        value: string;
        direction: "up" | "down";
    };
}

interface SharedMetricsProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface MetricsSectionGridProps extends SharedMetricsProps {
    metrics: MetricItem[];
    columns?: 2 | 3 | 4;
}

export const MetricsSectionGrid = ({ eyebrow, title, description, metrics, columns = 3, className }: MetricsSectionGridProps) => {
    const columnClass =
        columns === 4 ? "md:grid-cols-4 sm:grid-cols-2" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3 sm:grid-cols-2";

    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-10", className)}>
            <div className="flex flex-col gap-4 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className={cx("grid gap-6", columnClass)}>
                {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-secondary bg-primary p-6 text-left shadow-xs">
                        <p className="text-sm font-semibold text-tertiary">{metric.label}</p>
                        <div className="mt-3 flex items-baseline gap-3">
                            <span className="text-4xl font-semibold text-primary">{metric.value}</span>
                            {metric.trend && (
                                <span
                                    className={cx(
                                        "text-sm font-semibold",
                                        metric.trend.direction === "up" ? "text-success-primary" : "text-error-primary",
                                    )}
                                >
                                    {metric.trend.direction === "up" ? "▲" : "▼"} {metric.trend.value}
                                </span>
                            )}
                        </div>
                        {metric.description && <p className="mt-2 text-sm text-tertiary">{metric.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export interface MetricsSectionPanelProps extends SharedMetricsProps {
    metrics: MetricItem[];
    highlights?: Array<{ title: string; description: string }>;
    footer?: ReactNode;
}

export const MetricsSectionPanel = ({ eyebrow, title, description, metrics, highlights, footer, className }: MetricsSectionPanelProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-8 rounded-3xl border border-secondary bg-primary p-10 shadow-lg lg:grid-cols-[1.1fr_0.9fr]", className)}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                <div className="divide-y divide-secondary rounded-2xl border border-secondary">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="flex items-start justify-between gap-4 px-6 py-4">
                            <div>
                                <p className="text-sm font-semibold text-tertiary">{metric.label}</p>
                                {metric.description && <p className="text-sm text-tertiary">{metric.description}</p>}
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-semibold text-primary">{metric.value}</span>
                                {metric.trend && (
                                    <p
                                        className={cx(
                                            "text-sm font-semibold",
                                            metric.trend.direction === "up" ? "text-success-primary" : "text-error-primary",
                                        )}
                                    >
                                        {metric.trend.direction === "up" ? "▲" : "▼"} {metric.trend.value}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                {highlights && (
                    <div className="rounded-2xl border border-secondary bg-primary_hover p-6">
                        <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">Highlights</p>
                        <ul className="mt-4 space-y-4">
                            {highlights.map((highlight) => (
                                <li key={highlight.title} className="rounded-xl border border-secondary bg-primary px-4 py-3">
                                    <p className="text-md font-semibold text-primary">{highlight.title}</p>
                                    <p className="text-sm text-tertiary">{highlight.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {footer && <div className="rounded-2xl border border-dashed border-secondary px-4 py-6 text-sm text-tertiary">{footer}</div>}
            </div>
        </section>
    );
};

