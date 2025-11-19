import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedTestimonialProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface Testimonial {
    quote: string;
    author: {
        name: string;
        role: string;
        company?: string;
        avatar?: ReactNode;
    };
    logo?: ReactNode;
    highlight?: string;
}

export interface TestimonialSectionQuoteProps extends SharedTestimonialProps {
    testimonial: Testimonial;
}

export const TestimonialSectionQuote = ({ eyebrow, title, description, testimonial, className }: TestimonialSectionQuoteProps) => {
    return (
        <section className={cx("mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-secondary bg-primary px-8 py-10 text-center shadow-lg", className)}>
            {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            {testimonial.logo && <div className="flex justify-center">{testimonial.logo}</div>}
            <blockquote className="text-left text-xl font-medium leading-relaxed text-primary sm:text-2xl">
                “{testimonial.quote}”
            </blockquote>
            <div className="flex flex-col items-center gap-2 text-sm text-tertiary">
                {testimonial.author.avatar && <div className="size-12 overflow-hidden rounded-full">{testimonial.author.avatar}</div>}
                <p className="text-primary font-semibold">{testimonial.author.name}</p>
                <p>
                    {testimonial.author.role}
                    {testimonial.author.company && ` · ${testimonial.author.company}`}
                </p>
                {testimonial.highlight && <span className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{testimonial.highlight}</span>}
            </div>
        </section>
    );
};

export interface TestimonialSectionGridProps extends SharedTestimonialProps {
    testimonials: Testimonial[];
    columns?: 2 | 3;
}

export const TestimonialSectionGrid = ({ eyebrow, title, description, testimonials, columns = 3, className }: TestimonialSectionGridProps) => {
    const colClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-8", className)}>
            <div className="flex flex-col gap-4 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className={cx("grid gap-6", colClass)}>
                {testimonials.map((testimonial) => (
                    <article key={testimonial.author.name} className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                        <div className="flex items-center gap-3">
                            {testimonial.logo && <div className="text-sm text-tertiary">{testimonial.logo}</div>}
                            {testimonial.highlight && (
                                <span className="rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                                    {testimonial.highlight}
                                </span>
                            )}
                        </div>
                        <blockquote className="text-md leading-relaxed text-primary">“{testimonial.quote}”</blockquote>
                        <div className="flex items-center gap-3">
                            {testimonial.author.avatar && <div className="size-10 overflow-hidden rounded-full">{testimonial.author.avatar}</div>}
                            <div className="text-sm text-tertiary">
                                <p className="font-semibold text-primary">{testimonial.author.name}</p>
                                <p>
                                    {testimonial.author.role}
                                    {testimonial.author.company && ` · ${testimonial.author.company}`}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

