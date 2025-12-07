import type { ReactNode, JSX } from "react";
import { cx } from "@/utils/cx";
import { Input } from "@/components/base/input/input";
import { Button } from "@/components/base/buttons/button";

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export type SocialIconComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

export interface SocialLink {
    icon: SocialIconComponent;
    href: string;
    label: string;
}

interface SharedFooterProps {
    logo?: ReactNode;
    description?: ReactNode;
    columns: FooterColumn[];
    socialLinks?: SocialLink[];
    bottomLinks?: FooterLink[];
    copyright?: string;
    className?: string;
}

export interface FooterSectionSimpleProps extends SharedFooterProps {}

export const FooterSectionSimple = ({ logo, description, columns, socialLinks, bottomLinks, copyright, className }: FooterSectionSimpleProps) => {
    return (
        <footer className={cx("mx-auto max-w-6xl rounded-3xl border border-secondary bg-primary px-8 py-12 shadow-lg", className)}>
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                    {logo}
                    {description && <p className="text-sm text-tertiary">{description}</p>}
                    {socialLinks && socialLinks.length > 0 && (
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary text-secondary hover:text-primary"
                                >
                                    <social.icon className="h-4 w-4" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{column.title}</p>
                            <ul className="mt-4 space-y-2 text-sm text-tertiary">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="hover:text-primary">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 border-t border-secondary pt-6 text-sm text-tertiary">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-4">
                        {bottomLinks?.map((link) => (
                            <a key={link.label} href={link.href} className="hover:text-primary">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    {copyright && <p>{copyright}</p>}
                </div>
            </div>
        </footer>
    );
};

export interface FooterSectionNewsletterProps extends SharedFooterProps {
    eyebrow?: string;
    newsletterDescription?: ReactNode;
    inputPlaceholder?: string;
    ctaLabel?: string;
}

export const FooterSectionNewsletter = ({
    logo,
    eyebrow,
    description,
    newsletterDescription,
    inputPlaceholder = "Enter your email",
    ctaLabel = "Subscribe",
    columns,
    socialLinks,
    bottomLinks,
    copyright,
    className,
}: FooterSectionNewsletterProps) => {
    return (
        <footer className={cx("mx-auto max-w-6xl rounded-3xl border border-secondary bg-primary px-8 py-12 shadow-lg", className)}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4 rounded-2xl border border-secondary bg-primary_hover p-6">
                    {eyebrow && <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</p>}
                    {logo}
                    {description && <p className="text-sm text-tertiary">{description}</p>}
                    {newsletterDescription && <p className="text-sm text-tertiary">{newsletterDescription}</p>}
                    <form className="flex flex-col gap-3 sm:flex-row">
                        <Input placeholder={inputPlaceholder} type="email" aria-label="Email address" />
                        <Button type="submit" className="shrink-0">
                            {ctaLabel}
                        </Button>
                    </form>
                    {socialLinks && socialLinks.length > 0 && (
                        <div className="flex gap-2 pt-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary text-secondary hover:text-primary"
                                >
                                    <social.icon className="h-4 w-4" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{column.title}</p>
                            <ul className="mt-4 space-y-2 text-sm text-tertiary">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="hover:text-primary">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 border-t border-secondary pt-6 text-sm text-tertiary">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-4">
                        {bottomLinks?.map((link) => (
                            <a key={link.label} href={link.href} className="hover:text-primary">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    {copyright && <p>{copyright}</p>}
                </div>
            </div>
        </footer>
    );
};

