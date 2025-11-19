import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface HeaderSectionStat {
    label: string;
    value: string;
}

export interface HeaderSectionLogo {
    name: string;
    logo?: ReactNode;
}

interface SharedHeaderSectionProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
    className?: string;
}

export interface HeaderSectionCenteredProps extends SharedHeaderSectionProps {
    stats?: HeaderSectionStat[];
    logos?: HeaderSectionLogo[];
    tagline?: string;
    backgroundElement?: ReactNode;
}

export const HeaderSectionCentered = ({
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    stats,
    logos,
    tagline = "Trusted by modern teams",
    backgroundElement,
    className,
}: HeaderSectionCenteredProps) => {
    return (
        <section className={cx("relative isolate mx-auto flex max-w-5xl flex-col items-center gap-6 text-center", className)}>
            {backgroundElement && <div className="pointer-events-none absolute inset-0 -z-10">{backgroundElement}</div>}
            {eyebrow && (
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary bg-primary px-3 py-1 text-sm font-semibold text-secondary shadow-xs">
                    {eyebrow}
                </span>
            )}

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                    <h1 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{title}</h1>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>

                {(primaryAction || secondaryAction) && (
                    <div className="flex flex-col gap-3 sm:flex-row">
                        {primaryAction}
                        {secondaryAction}
                    </div>
                )}
            </div>

            {stats && stats.length > 0 && (
                <dl className="mt-2 grid w-full gap-6 text-left sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-secondary bg-primary px-4 py-5 shadow-xs">
                            <dt className="text-sm font-semibold text-tertiary">{stat.label}</dt>
                            <dd className="mt-2 text-3xl font-semibold text-primary">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            )}

            {logos && logos.length > 0 && (
                <div className="w-full border-t border-secondary pt-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">{tagline}</p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        {logos.map((logo) => (
                            <span key={logo.name} className="text-base font-semibold text-secondary">
                                {logo.logo ?? logo.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export interface HeaderSectionSplitProps extends SharedHeaderSectionProps {
    bulletPoints?: Array<{ title: string; description?: string }>;
    media?: ReactNode;
}

export const HeaderSectionSplit = ({
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    bulletPoints,
    media,
    className,
}: HeaderSectionSplitProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]", className)}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-4xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>

                {(primaryAction || secondaryAction) && (
                    <div className="flex flex-col gap-3 sm:flex-row">
                        {primaryAction}
                        {secondaryAction}
                    </div>
                )}

                {bulletPoints && bulletPoints.length > 0 && (
                    <ul className="grid gap-4">
                        {bulletPoints.map((point) => (
                            <li key={point.title} className="rounded-xl border border-secondary bg-primary px-4 py-3 shadow-xs">
                                <p className="text-md font-semibold text-primary">{point.title}</p>
                                {point.description && <p className="text-sm text-tertiary">{point.description}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="relative">
                {media ?? <DefaultMediaMock />}
            </div>
        </section>
    );
};

const DefaultMediaMock = () => (
    <div className="relative isolate overflow-hidden rounded-3xl border border-secondary bg-gradient-to-br from-brand-secondary/10 via-primary to-primary shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_55%)]" />
        <div className="relative flex flex-col gap-4 px-8 py-10 text-white">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/80">Live dashboard</span>
            <p className="text-2xl font-semibold leading-tight">Monitor growth across every marketing channel</p>
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center justify-between text-sm font-semibold">
                    <span>Monthly ARR</span>
                    <span>+$42.3k</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/20">
                    <div className="h-full rounded-full bg-white" style={{ width: "68%" }} />
                </div>
                <p className="mt-4 text-sm text-white/80">Growing steadily over the last quarter.</p>
            </div>
        </div>
    </div>
);

