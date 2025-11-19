import type { Meta, StoryObj } from "@storybook/react";
import { BlogSectionCards, BlogSectionFeatured } from "./blog-sections";
import { Button } from "@/components/base/buttons/button";
import { UshurLogoMinimal } from "@/components/foundations/logo/ushur-logo-minimal";

const meta: Meta<typeof BlogSectionCards> = {
    title: "Marketing/Blog Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type CardsStory = StoryObj<typeof BlogSectionCards>;

const posts = [
    {
        id: "1",
        category: "Playbook",
        title: "How to launch a product in 30 days",
        description: "Step-by-step templates used by top SaaS teams.",
        readingTime: "8 min read",
        date: "Mar 12, 2025",
        author: { name: "Jessie Liang", role: "Product Marketing Lead" },
    },
    {
        id: "2",
        category: "Experiment",
        title: "Increasing activation with dynamic onboarding",
        description: "Lessons from testing Ushur’s new onboarding pattern.",
        readingTime: "6 min read",
        date: "Mar 5, 2025",
        author: { name: "Miguel Torres", role: "Growth PM" },
    },
    {
        id: "3",
        category: "Insights",
        title: "2025 GTM efficiency benchmarks",
        description: "Where high-growth companies are investing this year.",
        readingTime: "10 min read",
        date: "Feb 26, 2025",
        author: { name: "Akira Shah", role: "Head of RevOps" },
    },
];

export const Cards: CardsStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <BlogSectionCards
                eyebrow="Resources"
                title="Fresh thinking for GTM teams"
                description="Playbooks, experiments, and templates published weekly."
                posts={posts}
            />
        </div>
    ),
};

type FeaturedStory = StoryObj<typeof BlogSectionFeatured>;

const featuredPost = {
    id: "featured",
    category: "Case study",
    title: "How Sisyphus scaled personalization across every touchpoint",
    description: "The exact system they used to boost enterprise pipeline by 4.8x.",
    date: "Mar 1, 2025",
    readingTime: "12 min read",
    author: { name: "Marin Cox", role: "VP of Marketing" },
    image: <div className="h-48 rounded-2xl bg-gradient-to-br from-brand-secondary/20 to-primary" />,
};

const secondaryPosts = posts.slice(0, 2);

export const Featured: FeaturedStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <BlogSectionFeatured
                eyebrow="Blog"
                title="Stories from the Ushur community"
                description="Guides and interviews with the teams building the next generation of SaaS."
                featured={featuredPost}
                posts={secondaryPosts}
                cta={
                    <div className="flex flex-col gap-3 rounded-2xl border border-secondary bg-primary_hover p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                            <UshurLogoMinimal className="h-5" />
                            Ushur Digest
                        </div>
                        <p className="text-sm text-tertiary">Subscribe for the latest patterns, releases, and events.</p>
                        <Button size="lg">Subscribe</Button>
                    </div>
                }
            />
        </div>
    ),
};

