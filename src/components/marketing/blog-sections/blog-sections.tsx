import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface BlogAuthor {
    name: string;
    role?: string;
    avatar?: ReactNode;
}

export interface BlogPostCard {
    id: string;
    category: string;
    title: string;
    description: string;
    readingTime?: string;
    date: string;
    author: BlogAuthor;
    image?: ReactNode;
    href?: string;
}

interface SharedBlogSectionProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export interface BlogSectionCardsProps extends SharedBlogSectionProps {
    posts: BlogPostCard[];
}

export const BlogSectionCards = ({ eyebrow, title, description, posts, className }: BlogSectionCardsProps) => {
    return (
        <section className={cx("mx-auto flex max-w-6xl flex-col gap-8", className)}>
            <div className="flex flex-col gap-3 text-center">
                {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>
                {description && <p className="text-lg text-tertiary">{description}</p>}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.id} className="flex flex-col gap-4 rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                        <div className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{post.category}</div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold text-primary">{post.title}</h3>
                            <p className="text-sm text-tertiary">{post.description}</p>
                        </div>
                        <div className="mt-auto flex items-center justify-between text-xs text-tertiary">
                            <span>{post.date}</span>
                            {post.readingTime && <span>{post.readingTime}</span>}
                        </div>
                        <div className="flex items-center gap-3">
                            {post.author.avatar && <div className="size-10 overflow-hidden rounded-full">{post.author.avatar}</div>}
                            <div className="text-sm text-tertiary">
                                <p className="font-semibold text-primary">{post.author.name}</p>
                                {post.author.role && <p>{post.author.role}</p>}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export interface BlogSectionFeaturedProps extends SharedBlogSectionProps {
    featured: BlogPostCard;
    posts: BlogPostCard[];
    cta?: ReactNode;
}

export const BlogSectionFeatured = ({ eyebrow, title, description, featured, posts, cta, className }: BlogSectionFeaturedProps) => {
    return (
        <section className={cx("mx-auto grid max-w-6xl gap-8 rounded-3xl border border-secondary bg-primary px-8 py-10 shadow-lg lg:grid-cols-[1.2fr_0.8fr]", className)}>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    {eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</span>}
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">{title}</h2>
                    {description && <p className="text-lg text-tertiary">{description}</p>}
                </div>
                <article className="flex flex-col gap-4 rounded-3xl border border-secondary bg-primary_hover p-6">
                    {featured.image && <div className="overflow-hidden rounded-2xl">{featured.image}</div>}
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{featured.category}</span>
                    <h3 className="text-2xl font-semibold text-primary">{featured.title}</h3>
                    <p className="text-sm text-tertiary">{featured.description}</p>
                    <div className="flex items-center gap-3 text-sm text-tertiary">
                        {featured.author.avatar && <div className="size-10 overflow-hidden rounded-full">{featured.author.avatar}</div>}
                        <div>
                            <p className="font-semibold text-primary">{featured.author.name}</p>
                            {featured.author.role && <p>{featured.author.role}</p>}
                        </div>
                        <span className="ml-auto text-xs">{featured.date}</span>
                        {featured.readingTime && <span className="text-xs">{featured.readingTime}</span>}
                    </div>
                </article>
                {cta}
            </div>
            <div className="flex flex-col gap-4">
                {posts.map((post) => (
                    <article key={post.id} className="rounded-2xl border border-secondary bg-primary px-5 py-4 shadow-xs">
                        <div className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{post.category}</div>
                        <h4 className="mt-2 text-md font-semibold text-primary">{post.title}</h4>
                        <p className="text-sm text-tertiary">{post.description}</p>
                        <div className="mt-3 flex items-center justify-between text-xs text-tertiary">
                            <span>{post.date}</span>
                            {post.readingTime && <span>{post.readingTime}</span>}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

