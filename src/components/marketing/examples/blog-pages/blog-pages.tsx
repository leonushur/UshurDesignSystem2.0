import { Header } from "@/components/marketing/header-navigation/header";
import { BlogSectionFeatured, BlogSectionCards } from "@/components/marketing/blog-sections";
import { NewsletterCTAInline } from "@/components/marketing/newsletter-cta-sections";
import { SocialProofSectionCards } from "@/components/marketing/social-proof-sections";
import { CTASectionSplit } from "@/components/marketing/cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";
import { ContentSectionStack } from "@/components/marketing/content-rich-text-sections";

const featuredPost = {
    id: "featured-1",
    category: "Design Systems",
    title: "Rolling out a design system without slowing roadmap velocity",
    description: "Learn how Ushur helped 12 teams ship a cohesive product suite by standardizing Storybook and design tokens.",
    author: {
        name: "Maya Fox",
        role: "Principal Designer",
    },
    date: "Nov 12, 2025",
    readingTime: "8 min read",
};

const secondaryPosts = [
    {
        id: "secondary-1",
        category: "Tailwind",
        title: "We shipped Tailwind CSS 4 support",
        description: "A quick primer on the new color system, variable extraction, and how to migrate smoothly.",
        date: "Nov 3, 2025",
        readingTime: "5 min read",
        author: { name: "Alex Chen", role: "Staff Engineer" },
    },
    {
        id: "secondary-2",
        category: "Design Tokens",
        title: "Figma variables to React without breaking a sweat",
        description: "Map design tokens to your codebase with our CLI and keep teams in sync.",
        date: "Oct 27, 2025",
        readingTime: "6 min read",
        author: { name: "Jordan Lee", role: "Design Engineer" },
    },
];

const cardPosts = [
    {
        id: "card-1",
        category: "Guides",
        title: "How to run a component health audit",
        description: "Use Ushur's audit worksheet to prioritize fixes and measure impact.",
        date: "Oct 18, 2025",
        readingTime: "7 min",
        author: { name: "Sam Rivera", role: "DX Engineer" },
    },
    {
        id: "card-2",
        category: "Marketing",
        title: "Marketing sections that convert",
        description: "Break down the formulas powering our favorite landing page layouts.",
        date: "Oct 05, 2025",
        readingTime: "4 min",
        author: { name: "Chris Park", role: "Growth Lead" },
    },
    {
        id: "card-3",
        category: "DevOps",
        title: "The perfect Storybook deployment pipeline",
        description: "Integrate Vercel, Chromatic, and GitHub Actions without fighting config files.",
        date: "Sep 28, 2025",
        readingTime: "9 min",
        author: { name: "Taylor Kim", role: "Platform Engineer" },
    },
    {
        id: "card-4",
        category: "Opinion",
        title: "Ushur vs. rolling your own",
        description: "A transparent comparison of cost, speed, and maintenance tradeoffs.",
        date: "Sep 20, 2025",
        readingTime: "6 min",
        author: { name: "Morgan Chen", role: "Tech Lead" },
    },
];

const proofHighlights = [
    {
        title: "50k+ readers",
        description: "Product designers and frontend teams subscribe to Ushur Dispatch every week.",
        stat: "50k+",
    },
    {
        title: "92% satisfaction",
        description: "Our readers say the content helps them ship higher-quality product experiences.",
        stat: "92%",
    },
];

const contentBlocks = [
    {
        title: "Editorial guidelines",
        body: [
            "We publish actionable case studies, team retrospectives, and deep dives on building modern product experiences.",
            "Every piece is reviewed by our design systems team and engineering leads before it goes live.",
        ],
    },
    {
        title: "Contribute to the blog",
        body: [
            "Have a story about growing a design system, scaling React architecture, or collaborating better? Pitch us at content@untitledui.com.",
        ],
    },
];

export const BlogPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <BlogSectionFeatured
                    eyebrow="Blog"
                    title="Stories from builders shipping great product experiences"
                    description="Insights from Ushur's design systems team, plus tips from the community."
                    featured={featuredPost}
                    posts={secondaryPosts}
                />
                <BlogSectionCards
                    eyebrow="Latest"
                    title="Fresh reads"
                    description="All the articles our team has shipped lately."
                    posts={cardPosts}
                />
                <ContentSectionStack eyebrow="Editorial" title="How we publish" sections={contentBlocks} />
                <SocialProofSectionCards
                    eyebrow="Community"
                    title="We write for teams building ambitious product experiences"
                    description="From fintech to productivity, Ushur's readers span every vertical."
                    cards={proofHighlights}
                />
                <CTASectionSplit
                    eyebrow="Newsletter"
                    title="Get Ushur Dispatch"
                    description="We send a weekly email covering new components, migration tactics, and interviews with design system leaders."
                    bullets={["New components every release", "Case studies and templates", "Framework-agnostic best practices"]}
                    primaryLabel="Subscribe"
                    secondaryLabel="Browse archive"
                />
                <NewsletterCTAInline
                    eyebrow="Subscribe"
                    title="Stay in the loop"
                    description="Actionable guidance, templates, and tactics shared by Ushur."
                    placeholder="you@example.com"
                    buttonLabel="Subscribe"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Design stories, research, and tactical guides for modern product teams."
                columns={[
                    {
                        title: "Topics",
                        links: [
                            { label: "Design systems", href: "/design-systems" },
                            { label: "Engineering", href: "/engineering" },
                            { label: "Growth", href: "/growth" },
                        ],
                    },
                    {
                        title: "Resources",
                        links: [
                            { label: "Docs", href: "/docs" },
                            { label: "Figma kit", href: "/figma" },
                            { label: "Community", href: "/community" },
                        ],
                    },
                ]}
                bottomLinks={[
                    { label: "RSS", href: "/rss" },
                    { label: "Contact", href: "/contact" },
                    { label: "Privacy", href: "/privacy" },
                ]}
                copyright="© 2025 Ushur"
            />
        </div>
    );
};

