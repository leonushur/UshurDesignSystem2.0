import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedContactProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface ContactField {
    label: string;
    value: string;
    icon?: ReactNode;
    href?: string;
}

export interface ContactSectionCardsProps extends SharedContactProps {
    fields: ContactField[];
    officeLocations?: Array<{ city: string; address: string }>;
}

export const ContactSectionCards = ({ eyebrow, title, description, fields, officeLocations, className }: ContactSectionCardsProps) => {
    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg", className)}>
            <div className="flex flex-col gap-3 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
                {fields.map((field) => (
                    <div key={field.label} className="rounded-2xl border border-secondary bg-primary px-5 py-4 text-left shadow-xs">
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                            {field.icon}
                            {field.label}
                        </div>
                        {field.href ? (
                            <a href={field.href} className="mt-2 text-lg text-brand-secondary hover:text-brand-secondary_hover">
                                {field.value}
                            </a>
                        ) : (
                            <p className="mt-2 text-lg text-primary">{field.value}</p>
                        )}
                    </div>
                ))}
            </div>
            {officeLocations && (
                <div className="rounded-2xl border border-dashed border-secondary px-5 py-4 text-left text-sm text-tertiary">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Offices</p>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        {officeLocations.map((office) => (
                            <div key={office.city}>
                                <p className="font-semibold text-primary">{office.city}</p>
                                <p>{office.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export interface ContactSectionFormProps extends SharedContactProps {
    form: ReactNode;
    details?: ContactField[];
}

export const ContactSectionForm = ({ eyebrow, title, description, form, details, className }: ContactSectionFormProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg lg:grid-cols-[1.1fr_0.9fr]", className)}>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                <div className="rounded-2xl border border-secondary bg-primary_hover p-6">{form}</div>
            </div>
            {details && (
                <div className="rounded-2xl border border-secondary bg-primary_hover p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">Contact details</p>
                    <div className="mt-4 space-y-4">
                        {details.map((detail) => (
                            <div key={detail.label}>
                                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{detail.label}</p>
                                {detail.href ? (
                                    <a href={detail.href} className="text-lg text-primary hover:text-brand-secondary">
                                        {detail.value}
                                    </a>
                                ) : (
                                    <p className="text-lg text-primary">{detail.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

