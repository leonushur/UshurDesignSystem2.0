import type { ReactNode } from "react";
import { Header } from "@/components/marketing/header-navigation/header";
import { HeaderSectionCentered } from "@/components/marketing/header-sections";
import { FeatureSectionIconGrid } from "@/components/marketing/features-sections";
import { MetricsSectionGrid } from "@/components/marketing/metrics-sections";
import { PricingSectionCards } from "@/components/marketing/pricing-sections";
import { TestimonialSectionQuote } from "@/components/marketing/testimonial-sections";
import { NewsletterCTAInline } from "@/components/marketing/newsletter-cta-sections";
import { FooterSectionNewsletter } from "@/components/marketing/footer-sections";
import { CTASectionBanner } from "@/components/marketing/cta-sections";
import { SocialProofSectionGrid } from "@/components/marketing/social-proof-sections";

type Stat = {
    label: string;
    value: string;
};

const stats: Stat[] = [
    { label: "Customers", value: "8,200+" },
    { label: "Teams migrated", value: "640" },
    { label: "Deploys per day", value: "12k" },
];

const featureItems = [
    {
        icon: "🎯",
        title: "Launch faster",
        description: "Prebuilt layouts and production-ready React components accelerate every sprint.",
    },
    {
        icon: "🧩",
        title: "Composable blocks",
        description: "Mix and match foundations, base elements, and marketing sections for any use case.",
    },
    {
        icon: "💫",
        title: "Polished states",
        description: "Variants for hover, focus, loading, and empty states are ready out of the box.",
    },
    {
        icon: "🛡️",
        title: "Accessible by default",
        description: "React Aria primitives keep every experience usable with keyboard and screen readers.",
    },
];

const metricItems = [
    { label: "Time-to-market", value: "5x faster", trend: "Avg. for enterprise teams" },
    { label: "Accessibility issues", value: "-72%", trend: "After adopting Ushur" },
    { label: "Design debt", value: "-48%", trend: "Measured across 600+ components" },
    { label: "NPS", value: "67 → 83", trend: "Six months after rollout" },
];

const pricingPlans = [
    {
        id: "starter",
        name: "Starter",
        price: "$0",
        description: "Best for solo designers and developers exploring the system.",
        features: ["100 components", "Community support", "MIT license"],
        highlighted: false,
    },
    {
        id: "pro",
        name: "Pro",
        price: "$28",
        description: "Unlock every component, marketing page, and theme preset.",
        features: ["3,000+ components", "Marketing examples", "Theme CLI", "1-year updates"],
        highlighted: true,
        badge: "Most popular",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact",
        description: "For companies rolling out Ushur across multiple products.",
        features: ["Design partner support", "Audit + rollout plan", "Private Slack"],
        highlighted: false,
    },
];

const testimonial = {
    quote: "Ushur is the fastest way we've found to ship consistent product experiences. The component quality is unreal.",
    author: {
        name: "Cam Nguyen",
        role: "VP Product Design",
        company: "LinearFlow",
    },
};

const socialProofItems = [
    { name: "LinearFlow" },
    { name: "Unison" },
    { name: "Glimpse" },
    { name: "Horizon" },
    { name: "Compound" },
    { name: "Northwind" },
];

export interface LandingPageProps {
    headerSlot?: ReactNode;
}

export const LandingPageModern = ({ headerSlot }: LandingPageProps) => {
    return (
        <div className="min-h-screen bg-background-primary text-foreground-primary">
            {headerSlot ?? <Header isFullWidth />}
            <main className="space-y-16 pb-16 pt-6 md:space-y-20 md:pt-10">
                <HeaderSectionCentered
                    eyebrow="Ushur"
                    title={
                        <span>
                            Build production-ready <span className="text-brand-secondary">React interfaces</span> on day one.
                        </span>
                    }
                    description="Composable base components, polished marketing blocks, and full-page examples—all wired up with Tailwind CSS 4, Vite, and React Aria."
                    stats={stats}
                    logos={socialProofItems}
                    primaryActionLabel="Start building"
                    secondaryActionLabel="View docs"
                />

                <SocialProofSectionGrid
                    title="Trusted by teams shipping beautiful experiences"
                    logos={socialProofItems}
                    columns={6}
                    eyebrow="Customers"
                />

                <FeatureSectionIconGrid
                    eyebrow="Why Ushur"
                    title="Everything you need to launch elite product experiences"
                    description="Ship onboarding flows, dashboards, marketing pages, and internal tools with confidence."
                    features={featureItems}
                />

                <MetricsSectionGrid eyebrow="Impact" title="Design systems that move metrics" metrics={metricItems} columns={2} />

                <PricingSectionCards
                    eyebrow="Pricing"
                    title="Simple pricing for every stage"
                    description="Use Ushur free forever, or upgrade for more components, marketing examples, and deployment-ready themes."
                    plans={pricingPlans}
                />

                <TestimonialSectionQuote
                    eyebrow="Testimonials"
                    title="Loved by modern product teams"
                    testimonial={testimonial}
                />

                <CTASectionBanner
                    eyebrow="Get started"
                    title="Spin up a fully themed Storybook in minutes"
                    description="Install via npm, connect your token theme, and deploy to Vercel with built-in Chromatic previews."
                    primaryActionLabel="Install CLI"
                    secondaryActionLabel="View GitHub"
                />

                <NewsletterCTAInline
                    eyebrow="Stay in the loop"
                    title="Releases, templates, tactics"
                    description="Weekly digest of new components, design deep dives, and system-level thinking."
                    placeholder="you@example.com"
                    buttonLabel="Subscribe"
                />
            </main>
            <FooterSectionNewsletter
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Ushur combines Ushur’s design system with production-grade React components."
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
                            { label: "Changelog", href: "/changelog" },
                            { label: "Community", href: "/community" },
                        ],
                    },
                    {
                        title: "Company",
                        links: [
                            { label: "About", href: "/about" },
                            { label: "Careers", href: "/careers" },
                            { label: "Blog", href: "/blog" },
                        ],
                    },
                ]}
                socialLinks={[]}
                bottomLinks={[
                    { label: "Privacy", href: "/privacy" },
                    { label: "Terms", href: "/terms" },
                    { label: "Security", href: "/security" },
                ]}
                eyebrow="Build with us"
                newsletterDescription="No spam. Just the best launches and tactics from the Ushur team."
                inputPlaceholder="Enter your email"
                ctaLabel="Get updates"
            />
        </div>
    );
};

