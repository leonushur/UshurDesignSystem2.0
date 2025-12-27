import { Header } from "@/components/marketing/header-navigation/header";
import { HeaderSectionCentered } from "@/components/marketing/header-sections";
import { ContentSectionStack } from "@/components/marketing/content-rich-text-sections";
import { NewsletterCTAInline } from "@/components/marketing/newsletter-cta-sections";
import { CTASectionBanner } from "@/components/marketing/cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";
import { SocialProofSectionCards } from "@/components/marketing/social-proof-sections";

const articleBlocks = [
    {
        title: "Why design systems keep breaking",
        body: [
            "Teams usually treat design systems as one-off projects. Tokens drift out of sync, Storybook examples go stale, and new marketing pages require bespoke work.",
            "Ushur fixes this by combining application UI and marketing systems in a single repo, with automated documentation powered by Storybook.",
        ],
    },
    {
        title: "How to ship faster with composable sections",
        body: [
            "Instead of hand-coding every marketing hero, CTA, and testimonial, you can import sections that already match your base components.",
            "Refine them with Tailwind tokens, wire up CMS data, and deploy via Vercel. No context switching between code styles.",
        ],
    },
    {
        title: "Rollout playbook",
        body: [
            "1. Audit current components and tokens.",
            "2. Install Ushur via npm and connect your design tokens.",
            "3. Mirror your navigation, layout, and marketing sections in Storybook.",
            "4. Launch with Chromatic snapshots + Vercel previews.",
        ],
    },
];

const highlights = [
    {
        title: "Backed by metrics",
        description: "92% of readers say these playbooks helped them launch faster.",
        stat: "92%",
    },
    {
        title: "Extensible system",
        description: "Use the CLI to scaffold pages, tokens, and data fixtures.",
        stat: "CLI",
    },
];

export const BlogPostPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <HeaderSectionCentered
                    eyebrow="Blog · Playbooks"
                    title="How we launch cohesive marketing + product experiences"
                    description="A behind-the-scenes look at the tactics Ushur uses to keep design, engineering, and marketing in sync."
                    stats={[
                        { label: "Published", value: "Nov 18, 2025" },
                        { label: "Reading time", value: "12 min" },
                        { label: "Author", value: "Cam Nguyen" },
                    ]}
                    primaryActionLabel="Share article"
                    secondaryActionLabel="More stories"
                />

                <SocialProofSectionCards
                    eyebrow="Highlights"
                    title="Why this playbook matters"
                    description="These strategies are based on dozens of successful enterprise rollouts."
                    cards={highlights}
                />

                <article className="mx-auto max-w-3xl space-y-10 rounded-3xl border border-secondary bg-primary p-8 shadow-lg">
                    <ContentSectionStack eyebrow="Article" title="Read the full story" sections={articleBlocks} />
                </article>

                <CTASectionBanner
                    eyebrow="Want more like this?"
                    title="Get the Ushur Dispatch"
                    description="A weekly note about design systems, DX, and launching consistent experiences."
                    primaryActionLabel="Subscribe"
                    secondaryActionLabel="Browse archive"
                />

                <NewsletterCTAInline
                    eyebrow="Stay in touch"
                    title="Get new articles in your inbox"
                    description="We promise thoughtful content and zero spam."
                    placeholder="you@example.com"
                    buttonLabel="Subscribe"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Stories from the team building the most complete open-source React design system."
                columns={[
                    {
                        title: "Blog",
                        links: [
                            { label: "All posts", href: "/blog" },
                            { label: "Guides", href: "/blog/guides" },
                            { label: "Case studies", href: "/blog/case-studies" },
                        ],
                    },
                    {
                        title: "Company",
                        links: [
                            { label: "About", href: "/about" },
                            { label: "Careers", href: "/careers" },
                        ],
                    },
                ]}
                bottomLinks={[
                    { label: "RSS", href: "/rss" },
                    { label: "Privacy", href: "/privacy" },
                ]}
                copyright="© 2025 Ushur"
            />
        </div>
    );
};

