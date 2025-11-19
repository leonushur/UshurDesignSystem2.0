import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    cadence?: string;
    description?: string;
    features: string[];
    cta?: ReactNode;
    popular?: boolean;
    badge?: ReactNode;
}

interface SharedPricingProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface PricingSectionCardsProps extends SharedPricingProps {
    plans: PricingPlan[];
    footerNote?: ReactNode;
}

export const PricingSectionCards = ({ eyebrow, title, description, plans, footerNote, className }: PricingSectionCardsProps) => {
    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-10", className)}>
            <div className="flex flex-col gap-4 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={cx(
                            "relative flex flex-col gap-6 rounded-3xl border border-secondary bg-primary p-8 shadow-xs",
                            plan.popular && "border-brand-secondary ring-2 ring-brand-secondary/30",
                        )}
                    >
                        {plan.popular && (
                            <span className="absolute -top-3 right-6 rounded-full bg-brand-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                                Most popular
                            </span>
                        )}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-semibold text-primary">{plan.name}</h3>
                                {plan.badge}
                            </div>
                            {plan.description && <p className="text-sm text-tertiary">{plan.description}</p>}
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-semibold text-primary">{plan.price}</span>
                            {plan.cadence && <span className="text-sm text-tertiary">{plan.cadence}</span>}
                        </div>
                        <ul className="flex flex-1 flex-col gap-3 text-sm text-tertiary">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2">
                                    <span className="mt-1 size-1.5 rounded-full bg-brand-secondary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        {plan.cta}
                    </div>
                ))}
            </div>
            {footerNote && <div className="text-center text-sm text-tertiary">{footerNote}</div>}
        </section>
    );
};

export interface PricingSectionTableProps extends SharedPricingProps {
    features: Array<{
        label: string;
        plans: Record<string, boolean | string>;
    }>;
    plans: PricingPlan[];
}

export const PricingSectionTable = ({ eyebrow, title, description, features, plans, className }: PricingSectionTableProps) => {
    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-10", className)}>
            <div className="flex flex-col gap-4 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className="overflow-hidden rounded-3xl border border-secondary bg-primary shadow-xs">
                <table className="w-full text-left text-sm">
                    <thead className="bg-primary_hover text-xs font-semibold uppercase tracking-wide text-tertiary">
                        <tr>
                            <th className="px-6 py-4">Features</th>
                            {plans.map((plan) => (
                                <th key={plan.id} className="px-6 py-4 text-center">
                                    {plan.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary">
                        {features.map((feature) => (
                            <tr key={feature.label}>
                                <td className="px-6 py-4 text-primary">{feature.label}</td>
                                {plans.map((plan) => {
                                    const value = feature.plans[plan.id];
                                    return (
                                        <td key={plan.id} className="px-6 py-4 text-center">
                                            {typeof value === "boolean" ? (
                                                value ? (
                                                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">✓</span>
                                                ) : (
                                                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-secondary text-secondary">—</span>
                                                )
                                            ) : (
                                                <span className="text-primary">{value}</span>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

