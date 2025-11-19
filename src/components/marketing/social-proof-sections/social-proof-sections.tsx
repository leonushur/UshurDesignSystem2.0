import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedSocialProofProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface SocialProofLogo {
    name: string;
    logo?: ReactNode;
    stat?: string;
}

export interface SocialProofSectionGridProps extends SharedSocialProofProps {
    logos: SocialProofLogo[];
    columns?: 3 | 4 | 5 | 6;
    supportingText?: ReactNode;
}

export const SocialProofSectionGrid = ({ eyebrow, title, description, logos, columns = 5, supportingText, className }: SocialProofSectionGridProps) => {
    const colClass =
        columns === 6
            ? "sm:grid-cols-3 lg:grid-cols-6"
            : columns === 5
              ? "sm:grid-cols-3 lg:grid-cols-5"
              : columns === 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : "sm:grid-cols-2 lg:grid-cols-3";

    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg", className)}>
            <div className="text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="mt-3 text-lg text-tertiary">{description}</p>}
            </div>
            <div className={cx("grid gap-6 text-center", colClass)}>
                {logos.map((logo) => (
                    <div key={logo.name} className="flex flex-col items-center gap-2 text-sm text-tertiary">
                        <div className="text-primary">{logo.logo ?? logo.name}</div>
                        {logo.stat && <span className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{logo.stat}</span>}
                    </div>
                ))}
            </div>
            {supportingText && <p className="text-center text-sm text-tertiary">{supportingText}</p>}
        </section>
    );
};

export interface SocialProofSectionCardsProps extends SharedSocialProofProps {
    cards: Array<{ title: string; description: string; stat: string }>;
    cta?: ReactNode;
}

export const SocialProofSectionCards = ({ eyebrow, title, description, cards, cta, className }: SocialProofSectionCardsProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg lg:grid-cols-[1.1fr_0.9fr]", className)}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                {cta}
            </div>
            <div className="grid gap-4">
                {cards.map((card) => (
                    <article key={card.title} className="rounded-2xl border border-secondary bg-primary px-5 py-4 shadow-xs">
                        <p className="text-xs font-semibold uppercase tracking-wide text-tertiary">{card.stat}</p>
                        <p className="mt-2 text-lg font-semibold text-primary">{card.title}</p>
                        <p className="text-sm text-tertiary">{card.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

