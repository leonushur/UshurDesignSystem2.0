import { Header } from "@/components/marketing/header-navigation/header";
import { PricingSectionTable, PricingSectionCards } from "@/components/marketing/pricing-sections";
import { FAQSectionAccordion } from "@/components/marketing/faq-sections";
import { CTASectionCentered } from "@/components/marketing/cta-sections";
import { NewsletterCTACard } from "@/components/marketing/newsletter-cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";

const plans = [
    {
        id: "starter",
        name: "Starter",
        price: "$0",
        description: "Perfect for individual builders exploring the system.",
        features: ["100 components", "Light/dark themes", "Community support"],
    },
    {
        id: "pro",
        name: "Pro",
        price: "$28/mo",
        description: "Ship production-ready experiences with marketing pages and patterns.",
        features: ["3,000+ components", "All marketing sections", "Access to CLI", "1 year updates"],
        highlighted: true,
        badge: "Most popular",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact",
        description: "Rollover plans, training, and custom tokens for large teams.",
        features: ["Dedicated success partner", "Private NPM", "Security review", "Custom training"],
    },
];

const comparisonRows = [
    { feature: "Components", starter: "100", pro: "3,000+", enterprise: "Unlimited" },
    { feature: "Marketing examples", starter: "—", pro: "12 pages", enterprise: "Custom" },
    { feature: "Support", starter: "Community", pro: "Priority email", enterprise: "Slack + dedicated PM" },
    { feature: "Theming CLI", starter: "—", pro: "Included", enterprise: "Included + training" },
    { feature: "License", starter: "MIT", pro: "Commercial", enterprise: "Commercial" },
];

const faqItems = [
    {
        id: "pricing-faq-1",
        question: "Is there a free trial?",
        answer: "Yes, the Starter plan is free forever. Upgrade whenever you need more components or dedicated support.",
    },
    {
        id: "pricing-faq-2",
        question: "How does the licensing work?",
        answer: "You can use Ushur in unlimited commercial and personal projects. Enterprise customers receive a custom license rider.",
    },
    {
        id: "pricing-faq-3",
        question: "Do you offer refunds?",
        answer: "We offer a 30-day refund window if the system doesn’t meet your needs.",
    },
    {
        id: "pricing-faq-4",
        question: "Can I upgrade later?",
        answer: "Of course. You can upgrade anytime and your billing will be prorated.",
    },
];

export const PricingPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <PricingSectionCards
                    eyebrow="Plans"
                    title="Transparent pricing for every team size"
                    description="Scale from an individual side project to multi-product teams without switching systems."
                    plans={plans}
                />
                <PricingSectionTable
                    eyebrow="Compare plans"
                    title="Find the right plan for your team"
                    description="Every plan includes access to the same design system foundations. Higher tiers add marketing examples, CLI tooling, and dedicated support."
                    rows={comparisonRows}
                />
                <FAQSectionAccordion
                    eyebrow="Pricing FAQ"
                    title="Answers to common questions"
                    items={faqItems}
                    cta={<div>Need more info? Reach us anytime at support@untitledui.com.</div>}
                />
                <CTASectionCentered
                    title="Ready to build your dream interface?"
                    description="Install Ushur with npm, configure your theme tokens, and deploy Storybook with Chromatic in minutes."
                    primaryActionLabel="Start building"
                    secondaryActionLabel="Talk to sales"
                />
                <NewsletterCTACard
                    eyebrow="Newsletter"
                    title="Ushur Dispatch"
                    description="Weekly lessons on design systems, collaboration, and shipping excellent software."
                    placeholder="you@example.com"
                    buttonLabel="Subscribe"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Design system foundations and production-ready React components for modern teams."
                columns={[
                    {
                        title: "Product",
                        links: [
                            { label: "Components", href: "/components" },
                            { label: "Pricing", href: "/pricing" },
                            { label: "CLI", href: "/cli" },
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
                bottomLinks={[
                    { label: "Privacy", href: "/privacy" },
                    { label: "Terms", href: "/terms" },
                ]}
                copyright="© 2025 Ushur"
            />
        </div>
    );
};

