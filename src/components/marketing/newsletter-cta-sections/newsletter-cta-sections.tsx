import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedNewsletterCTAProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    badge?: ReactNode;
    className?: string;
}

export interface NewsletterCTAInlineProps extends SharedNewsletterCTAProps {
    formContent: ReactNode;
    supportingText?: ReactNode;
}

export const NewsletterCTAInline = ({ eyebrow, title, description, badge, formContent, supportingText, className }: NewsletterCTAInlineProps) => {
    return (
        <section className={cx("mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-secondary bg-primary px-8 py-10 text-center shadow-lg", className)}>
            {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
                {badge}
            </div>
            <div className="w-full">{formContent}</div>
            {supportingText && <p className="text-sm text-tertiary">{supportingText}</p>}
        </section>
    );
};

export interface NewsletterCTACardProps extends SharedNewsletterCTAProps {
    formContent: ReactNode;
    media?: ReactNode;
    footerNote?: ReactNode;
}

export const NewsletterCTACard = ({ eyebrow, title, description, badge, formContent, media, footerNote, className }: NewsletterCTACardProps) => {
    return (
        <section
            className={cx(
                "mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-3xl border border-secondary bg-gradient-to-br from-primary to-brand-secondary/10 p-8 shadow-lg lg:grid-cols-[1.1fr_0.9fr]",
                className,
            )}
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h3 className="text-3xl font-semibold tracking-tight text-primary">{title}</h3>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                    {badge}
                </div>
                <div>{formContent}</div>
                {footerNote && <p className="text-sm text-tertiary">{footerNote}</p>}
            </div>
            <div className="flex items-center justify-center">
                {media ?? <DefaultMedia />}
            </div>
        </section>
    );
};

const DefaultMedia = () => (
    <div className="w-full rounded-2xl border border-secondary bg-primary shadow-inner">
        <div className="flex flex-col gap-4 p-6 text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">Latest insights</p>
            <div className="space-y-4">
                <article className="rounded-xl border border-secondary px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Playbook</p>
                    <p className="text-md font-semibold text-primary">High-performing lifecycle experiments</p>
                    <p className="text-sm text-tertiary">How GTM teams doubled expansion revenue using Ushur.</p>
                </article>
                <article className="rounded-xl border border-secondary px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Report</p>
                    <p className="text-md font-semibold text-primary">2025 State of Revenue Efficiency</p>
                    <p className="text-sm text-tertiary">Benchmarks from 400+ SaaS GTM leaders.</p>
                </article>
            </div>
        </div>
    </div>
);

