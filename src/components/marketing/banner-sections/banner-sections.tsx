import type { ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface SharedBannerProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    className?: string;
}

export interface BannerSectionAnnouncementProps extends SharedBannerProps {
    highlight?: ReactNode;
    supportingText?: ReactNode;
}

export const BannerSectionAnnouncement = ({ eyebrow, title, description, highlight, supportingText, actions, className }: BannerSectionAnnouncementProps) => {
    return (
        <section className={cx("mx-auto max-w-4xl rounded-2xl border border-secondary bg-primary px-6 py-5 shadow-md", className)}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        {eyebrow && <span className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                        {highlight && <span className="inline-flex items-center rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-medium text-brand-secondary">{highlight}</span>}
                    </div>
                    <p className="text-lg font-semibold text-primary">{title}</p>
                    {description && <p className="text-sm text-tertiary">{description}</p>}
                    {supportingText && <p className="text-xs text-secondary">{supportingText}</p>}
                </div>
                <div className="flex shrink-0 items-center gap-2">{actions ?? <Button size="sm">View changelog</Button>}</div>
            </div>
        </section>
    );
};

export interface BannerStat {
    label: string;
    value: string;
    trend?: string;
}

export interface BannerSectionCardProps extends SharedBannerProps {
    stats?: BannerStat[];
    background?: "slate" | "purple";
}

const backgroundClasses: Record<NonNullable<BannerSectionCardProps["background"]>, string> = {
    slate: "from-[#111322] via-[#181B2B] to-[#111322]",
    purple: "from-[#4B2FE2] via-[#6235D0] to-[#8E3FFC]",
};

export const BannerSectionCard = ({ eyebrow, title, description, actions, stats, background = "slate", className }: BannerSectionCardProps) => {
    return (
        <section className={cx("mx-auto max-w-5xl", className)}>
            <div className={cx("rounded-3xl border border-white/10 bg-gradient-to-br px-8 py-10 text-white shadow-xl", backgroundClasses[background])}>
                {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-white/80">{eyebrow}</p>}
                <div className="mt-2 space-y-4 md:flex md:items-end md:justify-between md:space-y-0">
                    <div>
                        <p className="text-3xl font-semibold tracking-tight">{title}</p>
                        {description && <p className="mt-3 text-base text-white/80">{description}</p>}
                    </div>
                    <div className="flex gap-3">{actions ?? <Button size="lg">Start free trial</Button>}</div>
                </div>
                {stats && stats.length > 0 && (
                    <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-sm text-white/70">{stat.label}</p>
                                <p className="text-2xl font-semibold">{stat.value}</p>
                                {stat.trend && <p className="text-sm text-emerald-200">{stat.trend}</p>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

