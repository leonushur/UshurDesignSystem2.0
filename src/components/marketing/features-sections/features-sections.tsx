import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface FeatureItem {
    title: string;
    description?: string;
    icon?: FC<{ className?: string }> | ReactNode;
    badge?: ReactNode;
}

interface SharedFeatureSectionProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface FeatureSectionIconGridProps extends SharedFeatureSectionProps {
    features: FeatureItem[];
    columns?: 2 | 3 | 4;
}

export const FeatureSectionIconGrid = ({
    eyebrow,
    title,
    description,
    features,
    columns = 3,
    className,
}: FeatureSectionIconGridProps) => {
    const gridClass =
        columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-10", className)}>
            <div className="flex flex-col gap-4 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className={cx("grid gap-6", gridClass)}>
                {features.map((feature) => (
                    <div key={feature.title} className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                        {feature.icon && (
                            <div className="flex size-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                                {typeof feature.icon === "function" ? <feature.icon className="size-6" /> : feature.icon}
                            </div>
                        )}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-semibold text-primary">{feature.title}</p>
                                {feature.badge}
                            </div>
                            {feature.description && <p className="text-sm text-tertiary">{feature.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export interface FeatureSectionCardsProps extends SharedFeatureSectionProps {
    features: Array<FeatureItem & { stat?: string }>;
    supportingText?: ReactNode;
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
}

export const FeatureSectionCards = ({
    eyebrow,
    title,
    description,
    features,
    supportingText,
    primaryAction,
    secondaryAction,
    className,
}: FeatureSectionCardsProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]", className)}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                {supportingText && <div className="rounded-2xl border border-secondary bg-primary p-5 text-md text-tertiary">{supportingText}</div>}
                {(primaryAction || secondaryAction) && (
                    <div className="flex flex-col gap-3 sm:flex-row">
                        {primaryAction}
                        {secondaryAction}
                    </div>
                )}
            </div>
            <div className="grid gap-5">
                {features.map((feature) => (
                    <div key={feature.title} className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                        <div className="flex items-center gap-3">
                            {feature.icon && (
                                <div className="flex size-11 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
                                    {typeof feature.icon === "function" ? <feature.icon className="size-5" /> : feature.icon}
                                </div>
                            )}
                            <div className="flex flex-col">
                                <span className="text-md font-semibold text-primary">{feature.title}</span>
                                {feature.badge}
                            </div>
                            {feature.stat && <span className="ml-auto text-sm font-semibold text-brand-secondary">{feature.stat}</span>}
                        </div>
                        {feature.description && <p className="text-sm text-tertiary">{feature.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

