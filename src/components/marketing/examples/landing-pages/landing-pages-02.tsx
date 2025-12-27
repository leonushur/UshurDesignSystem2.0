import { Header } from "@/components/marketing/header-navigation/header";
import { HeaderSectionSplit } from "@/components/marketing/header-sections";
import { FeatureSectionCards } from "@/components/marketing/features-sections";
import { PricingSectionCards } from "@/components/marketing/pricing-sections";
import { TestimonialSectionGrid } from "@/components/marketing/testimonial-sections";
import { CTASectionCentered } from "@/components/marketing/cta-sections";
import { FooterSectionNewsletter } from "@/components/marketing/footer-sections";

const featureCards = [
    {
        title: "Polished tokens",
        description: "Adaptive typography, spacing, and color tokens ready for Tailwind CSS 4.",
        badge: "Design",
    },
    {
        title: "Dev friendly",
        description: "React, TypeScript, Vite, and React Aria under the hood for fast builds.",
        badge: "Engineering",
    },
    {
        title: "Marketing + product",
        description: "Application UI, marketing sections, and full pages in one system.",
        badge: "Operations",
    },
];

const testimonialCards = [
    {
        quote: "Ushur let us consolidate three design systems into one Storybook in under two months.",
        author: { name: "Emma Tan", role: "Design Ops Lead, Nimbus" },
    },
    {
        quote: "Our marketing, product, and internal tools now feel like one cohesive brand.",
        author: { name: "Chad Miller", role: "VP Engineering, Finch" },
    },
];

const pricing = [
    {
        id: "starter",
        name: "Starter",
        price: "$0",
        description: "100 components, light/dark, single product use.",
        features: ["MIT license", "Tailwind 4 tokens", "Community support"],
    },
    {
        id: "growth",
        name: "Growth",
        price: "$68",
        description: "All components, marketing sections, and CLI workflows.",
        features: ["3,000+ components", "Storybook theming CLI", "Chromatic setup", "1 year updates"],
        highlighted: true,
    },
];

export const LandingPageProduct = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-20 pb-20 pt-10">
                <HeaderSectionSplit
                    eyebrow="Product"
                    title="Design systems that scale from brand to build"
                    description="Ushur combines the beauty of Ushur’s design kit with production-ready React components."
                    primaryActionLabel="Start for free"
                    secondaryActionLabel="View docsite"
                    stats={[
                        { label: "Components", value: "3,000+" },
                        { label: "Marketing sections", value: "150+" },
                        { label: "Customers", value: "8,200+" },
                    ]}
                />

                <FeatureSectionCards
                    eyebrow="Highlights"
                    title="Built for ambitious teams"
                    description="Skip the internal design system backlog. Focus on features that matter."
                    features={featureCards}
                />

                <PricingSectionCards
                    eyebrow="Pricing"
                    title="Simple pricing"
                    description="Start free and upgrade when you need more power. No upsells."
                    plans={pricing}
                />

                <TestimonialSectionGrid
                    eyebrow="Testimonials"
                    title="Loved by design ops teams"
                    testimonials={testimonialCards}
                />

                <CTASectionCentered
                    eyebrow="Ready to try it?"
                    title="Launch Ushur in your Storybook today"
                    description="Install via npm, run the CLI to configure themes, and deploy to Vercel."
                    primaryActionLabel="Install"
                    secondaryActionLabel="Talk to sales"
                />
            </main>
            <FooterSectionNewsletter
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Production-ready React components for marketing sites and application UIs."
                columns={[
                    {
                        title: "Product",
                        links: [
                            { label: "Overview", href: "/overview" },
                            { label: "Components", href: "/components" },
                            { label: "Roadmap", href: "/roadmap" },
                        ],
                    },
                    {
                        title: "Resources",
                        links: [
                            { label: "Docs", href: "/docs" },
                            { label: "Tutorials", href: "/tutorials" },
                            { label: "Community", href: "/community" },
                        ],
                    },
                ]}
                bottomLinks={[
                    { label: "Privacy", href: "/privacy" },
                    { label: "Terms", href: "/terms" },
                ]}
                newsletterDescription="Join 50,000+ builders learning how to ship with Ushur."
                inputPlaceholder="you@example.com"
                ctaLabel="Subscribe"
            />
        </div>
    );
};

