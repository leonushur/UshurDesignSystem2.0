import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedCTAProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
    className?: string;
}

export interface CTASectionCenteredProps extends SharedCTAProps {
    badge?: ReactNode;
    supportingText?: ReactNode;
}

export const CTASectionCentered = ({
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    badge,
    supportingText,
    className,
}: CTASectionCenteredProps) => {
    return (
        <section
            className={cx(
                "relative isolate overflow-hidden rounded-3xl border border-secondary bg-gradient-to-br from-primary to-brand-secondary/10 px-8 py-12 text-center shadow-lg",
                className,
            )}
        >
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                {badge}
                {(primaryAction || secondaryAction) && (
                    <div className="flex flex-col gap-3 sm:flex-row">
                        {primaryAction}
                        {secondaryAction}
                    </div>
                )}
                {supportingText && <p className="text-sm text-tertiary">{supportingText}</p>}
            </div>
        </section>
    );
};

export interface CTASectionSplitProps extends SharedCTAProps {
    bulletPoints?: string[];
    media?: ReactNode;
}

export const CTASectionSplit = ({
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    bulletPoints,
    media,
    className,
}: CTASectionSplitProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-10 rounded-3xl border border-secondary bg-primary p-10 shadow-lg md:grid-cols-2", className)}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    {eyebrow && <span className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                {bulletPoints && (
                    <ul className="grid gap-3 text-sm text-tertiary">
                        {bulletPoints.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                                <span className="mt-1 size-1.5 rounded-full bg-brand-secondary" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {(primaryAction || secondaryAction) && (
                    <div className="flex flex-col gap-3 sm:flex-row">
                        {primaryAction}
                        {secondaryAction}
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center">{media ?? <DefaultMedia />}</div>
        </section>
    );
};

const DefaultMedia = () => (
    <div className="w-full rounded-2xl border border-secondary bg-gradient-to-br from-brand-secondary/15 to-primary shadow-inner">
        <div className="p-6 text-left text-primary">
            <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">Launch plan</p>
            <p className="mt-2 text-2xl font-semibold">Activate your entire revenue engine</p>
            <div className="mt-6 grid gap-4 text-sm text-tertiary">
                <div className="rounded-xl border border-secondary px-4 py-3">
                    <p className="font-semibold text-primary">Week 1</p>
                    <p>Audit campaigns & align teams on common KPIs.</p>
                </div>
                <div className="rounded-xl border border-secondary px-4 py-3">
                    <p className="font-semibold text-primary">Week 2</p>
                    <p>Ship new journeys and connect your stack.</p>
                </div>
                <div className="rounded-xl border border-secondary px-4 py-3">
                    <p className="font-semibold text-primary">Week 3</p>
                    <p>Measure impact and unlock automation insights.</p>
                </div>
            </div>
        </div>
    </div>
);

export interface CTASectionBannerProps extends SharedCTAProps {
    accentColor?: "brand" | "neutral";
}

export const CTASectionBanner = ({
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    accentColor = "brand",
    className,
}: CTASectionBannerProps) => {
    return (
        <section
            className={cx(
                "rounded-3xl border border-secondary px-6 py-8 shadow-xs sm:flex sm:items-center sm:justify-between sm:gap-6",
                accentColor === "brand" ? "bg-brand-secondary text-white" : "bg-primary",
                className,
            )}
        >
            <div className="flex flex-col gap-3">
                {eyebrow && (
                    <span className={cx("text-sm font-semibold uppercase tracking-wide", accentColor === "brand" ? "text-white/70" : "text-brand-secondary")}>
                        {eyebrow}
                    </span>
                )}
                <h3 className={cx("text-2xl font-semibold", accentColor === "brand" ? "text-white" : "text-primary")}>{title}</h3>
                {description && <p className={cx("text-sm", accentColor === "brand" ? "text-white/80" : "text-tertiary")}>{description}</p>}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:mt-0 sm:flex-row">
                {primaryAction}
                {secondaryAction}
            </div>
        </section>
    );
};

