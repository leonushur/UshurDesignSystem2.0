import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedContentProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface ContentBlock {
    title: string;
    body: ReactNode;
}

export interface ContentSectionSplitProps extends SharedContentProps {
    content: ContentBlock[];
    media?: ReactNode;
}

export const ContentSectionSplit = ({ eyebrow, title, description, content, media, className }: ContentSectionSplitProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-10 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg lg:grid-cols-[0.9fr_1.1fr]", className)}>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                <div className="space-y-6">
                    {content.map((block) => (
                        <div key={block.title} className="rounded-2xl border border-secondary bg-primary_hover px-5 py-4">
                            <h3 className="text-md font-semibold text-primary">{block.title}</h3>
                            <div className="mt-2 text-sm text-tertiary">{block.body}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center">{media ?? <DefaultMedia />}</div>
        </section>
    );
};

const DefaultMedia = () => (
    <div className="w-full rounded-2xl border border-secondary bg-gradient-to-br from-brand-secondary/15 to-primary shadow-inner">
        <div className="p-6 text-left text-primary">
            <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">Customer journey</p>
            <p className="mt-2 text-2xl font-semibold">Map every touchpoint with Ushur</p>
            <ul className="mt-4 space-y-3 text-sm text-tertiary">
                <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-brand-secondary" />
                    360° profile syncs across product, marketing, and support.
                </li>
                <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-brand-secondary" />
                    Visual editor composes rich emails, in-app modals, and docs.
                </li>
                <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-brand-secondary" />
                    Embed AI-assisted copy and code blocks anywhere.
                </li>
            </ul>
        </div>
    </div>
);

export interface ContentSectionStackProps extends SharedContentProps {
    sections: ContentBlock[];
}

export const ContentSectionStack = ({ eyebrow, title, description, sections, className }: ContentSectionStackProps) => {
    return (
        <section className={cx("mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg", className)}>
            {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className="space-y-6 text-left">
                {sections.map((section) => (
                    <div key={section.title} className="space-y-3">
                        <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
                        <div className="prose prose-sm max-w-none text-tertiary [&_*]:text-inherit [&_a]:text-brand-secondary">
                            {section.body}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

