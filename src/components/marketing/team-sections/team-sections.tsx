import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SharedTeamProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    bio?: string;
    avatar?: ReactNode;
    socials?: Array<{ label: string; href: string }>;
}

export interface TeamSectionGridProps extends SharedTeamProps {
    members: TeamMember[];
    columns?: 2 | 3 | 4;
}

export const TeamSectionGrid = ({ eyebrow, title, description, members, columns = 3, className }: TeamSectionGridProps) => {
    const colClass =
        columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-8", className)}>
            <div className="flex flex-col gap-3 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className={cx("grid gap-6", colClass)}>
                {members.map((member) => (
                    <article key={member.name} className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 text-center shadow-xs">
                        {member.avatar && <div className="mx-auto size-20 overflow-hidden rounded-full">{member.avatar}</div>}
                        <div>
                            <p className="text-lg font-semibold text-primary">{member.name}</p>
                            <p className="text-sm text-tertiary">{member.role}</p>
                        </div>
                        {member.bio && <p className="text-sm text-tertiary">{member.bio}</p>}
                        {member.socials && (
                            <div className="mt-auto flex flex-wrap justify-center gap-3 text-sm text-brand-secondary">
                                {member.socials.map((social) => (
                                    <a key={social.label} href={social.href} className="hover:text-brand-secondary_hover">
                                        {social.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

export interface TeamSectionListProps extends SharedTeamProps {
    members: TeamMember[];
    highlight?: ReactNode;
}

export const TeamSectionList = ({ eyebrow, title, description, members, highlight, className }: TeamSectionListProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg lg:grid-cols-[0.9fr_1.1fr]", className)}>
            <div className="space-y-5">
                <div className="space-y-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                {highlight}
            </div>
            <div className="space-y-4">
                {members.map((member) => (
                    <article key={member.name} className="flex items-start gap-4 rounded-2xl border border-secondary bg-primary px-5 py-4 shadow-xs">
                        {member.avatar && <div className="size-14 overflow-hidden rounded-full">{member.avatar}</div>}
                        <div className="flex-1 space-y-2">
                            <div>
                                <p className="text-md font-semibold text-primary">{member.name}</p>
                                <p className="text-sm text-tertiary">{member.role}</p>
                            </div>
                            {member.bio && <p className="text-sm text-tertiary">{member.bio}</p>}
                            {member.socials && (
                                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                                    {member.socials.map((social) => (
                                        <a key={social.label} href={social.href} className="hover:text-brand-secondary_hover">
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

