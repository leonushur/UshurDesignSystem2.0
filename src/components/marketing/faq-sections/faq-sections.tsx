import { useState, type ReactNode } from "react";
import { ChevronDown } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface SharedFAQProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: ReactNode;
    category?: string;
}

export interface FAQSectionAccordionProps extends SharedFAQProps {
    items: FAQItem[];
    cta?: ReactNode;
}

export const FAQSectionAccordion = ({ eyebrow, title, description, items, cta, className }: FAQSectionAccordionProps) => {
    const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

    return (
        <section className={cx("mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-secondary bg-primary px-6 py-10 shadow-lg", className)}>
            <div className="text-center">
                {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</p>}
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                {description && <p className="mt-3 text-lg text-tertiary">{description}</p>}
            </div>
            <div className="space-y-3">
                {items.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                        <article key={item.id} className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xs">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                aria-expanded={isOpen}
                                onClick={() => setOpenId(isOpen ? null : item.id)}
                            >
                                <div>
                                    <p className="text-lg font-semibold text-primary">{item.question}</p>
                                    {item.category && <p className="text-sm font-medium text-tertiary">{item.category}</p>}
                                </div>
                                <ChevronDown className={cx("h-5 w-5 text-secondary transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                            </button>
                            {isOpen && <div className="border-t border-secondary px-5 pb-5 text-sm text-tertiary">{item.answer}</div>}
                        </article>
                    );
                })}
            </div>
            {cta && <div className="rounded-2xl border border-dashed border-secondary bg-primary_hover px-5 py-4 text-center text-sm text-tertiary">{cta}</div>}
        </section>
    );
};

export interface FAQSectionSplitProps extends SharedFAQProps {
    items: FAQItem[];
    supportCard?: ReactNode;
}

const splitItems = (items: FAQItem[]) => {
    const left: FAQItem[] = [];
    const right: FAQItem[] = [];
    items.forEach((item, index) => {
        if (index % 2 === 0) {
            left.push(item);
        } else {
            right.push(item);
        }
    });
    return [left, right];
};

export const FAQSectionSplit = ({ eyebrow, title, description, items, supportCard, className }: FAQSectionSplitProps) => {
    const [left, right] = splitItems(items);

    return (
        <section className={cx("mx-auto max-w-6xl rounded-3xl border border-secondary bg-primary px-8 py-12 shadow-lg", className)}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div className="space-y-4">
                    {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</p>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                    {supportCard && <div className="rounded-2xl border border-secondary bg-primary_hover p-6">{supportCard}</div>}
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {[left, right].map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-6">
                            {column.map((item) => (
                                <article key={item.id} className="space-y-2">
                                    <p className="text-base font-semibold text-primary">{item.question}</p>
                                    <div className="text-sm text-tertiary">{item.answer}</div>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

