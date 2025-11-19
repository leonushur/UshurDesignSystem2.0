import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedCareersProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface JobOpening {
    id: string;
    title: string;
    team: string;
    location: string;
    type: string;
    description?: string;
    href?: string;
}

export interface CareerSectionCardsProps extends SharedCareersProps {
    openings: JobOpening[];
    benefits?: string[];
}

export const CareerSectionCards = ({ eyebrow, title, description, openings, benefits, className }: CareerSectionCardsProps) => {
    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg", className)}>
            <div className="text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="mt-3 text-lg text-tertiary">{description}</p>}
            </div>
            <div className="grid gap-4">
                {openings.map((opening) => (
                    <article key={opening.id} className="flex flex-col gap-2 rounded-2xl border border-secondary bg-primary px-5 py-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-lg font-semibold text-primary">{opening.title}</p>
                            <p className="text-sm text-tertiary">
                                {opening.team} · {opening.location} · {opening.type}
                            </p>
                            {opening.description && <p className="text-sm text-tertiary">{opening.description}</p>}
                        </div>
                        <div className="mt-3 sm:mt-0">
                            {opening.href ? (
                                <a href={opening.href} className="text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover">
                                    View role →
                                </a>
                            ) : (
                                <span className="text-sm text-tertiary">Open soon</span>
                            )}
                        </div>
                    </article>
                ))}
            </div>
            {benefits && (
                <div className="rounded-2xl border border-dashed border-secondary px-4 py-5 text-sm text-tertiary">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Benefits</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export interface CareerSectionSplitProps extends SharedCareersProps {
    openings: JobOpening[];
    sidebarContent: ReactNode;
}

export const CareerSectionSplit = ({ eyebrow, title, description, openings, sidebarContent, className }: CareerSectionSplitProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg lg:grid-cols-[0.9fr_1.1fr]", className)}>
            <div className="flex flex-col gap-5">
                <div className="space-y-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                <div className="rounded-2xl border border-secondary bg-primary_hover p-6">{sidebarContent}</div>
            </div>
            <div className="space-y-4">
                {openings.map((opening) => (
                    <article key={opening.id} className="rounded-2xl border border-secondary bg-primary px-5 py-4 shadow-xs">
                        <p className="text-md font-semibold text-primary">{opening.title}</p>
                        <p className="text-sm text-tertiary">
                            {opening.team} · {opening.location} · {opening.type}
                        </p>
                        {opening.description && <p className="text-sm text-tertiary">{opening.description}</p>}
                        {opening.href && (
                            <a href={opening.href} className="mt-2 inline-flex text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover">
                                Apply now →
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

