import { Header } from "@/components/marketing/header-navigation/header";
import { HeaderSectionCentered } from "@/components/marketing/header-sections";
import { FAQSectionAccordion, FAQSectionSplit } from "@/components/marketing/faq-sections";
import { CTASectionCentered } from "@/components/marketing/cta-sections";
import { ContactSectionCards } from "@/components/marketing/contact-sections";
import { NewsletterCTAInline } from "@/components/marketing/newsletter-cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";

const accordionItems = [
    {
        id: "faq-1",
        question: "What’s included in the free plan?",
        answer: "Start with 100 base components, light/dark themes, and the full Ushur design tokens.",
        category: "Pricing",
    },
    {
        id: "faq-2",
        question: "Can I use Ushur for client work?",
        answer: "Yes. The license covers unlimited commercial projects. Enterprise teams can add custom clauses.",
        category: "License",
    },
    {
        id: "faq-3",
        question: "How do updates work?",
        answer: "We ship monthly releases. Pro and Enterprise plans receive CLI update scripts and release notes.",
        category: "Product",
    },
    {
        id: "faq-4",
        question: "Do you support custom themes?",
        answer: "Absolutely. Map your tailwind.config tokens or use our CLI to import Figma variables.",
        category: "Design",
    },
];

const splitItems = [
    {
        id: "split-1",
        question: "Which frameworks do you support?",
        answer: "Ushur ships React components with Tailwind CSS 4 and React Aria. We’re working on Vue and Svelte starters.",
    },
    {
        id: "split-2",
        question: "How do you handle accessibility?",
        answer: "All interactive components use React Aria hooks, have keyboard focus states, and meet WCAG AA contrast.",
    },
    {
        id: "split-3",
        question: "Can we self-host Storybook?",
        answer: "Yes. Deploy with Vercel, Chromatic, Netlify, or your own infra. Enterprise packages include private builds.",
    },
    {
        id: "split-4",
        question: "What support options exist?",
        answer: "Pro customers get priority email. Enterprise has Slack Connect, pairing sessions, and dedicated success.",
    },
];

const contactCards = [
    {
        title: "Talk to sales",
        description: "For pricing, licensing, and implementation questions.",
        channels: [{ label: "sales@untitledui.com", value: "Email", href: "mailto:sales@untitledui.com" }],
    },
    {
        title: "Get product support",
        description: "Send us links to your Storybook build and we’ll help you debug.",
        channels: [{ label: "support@untitledui.com", value: "Email", href: "mailto:support@untitledui.com" }],
    },
];

export const FAQPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <HeaderSectionCentered
                    eyebrow="Help center"
                    title="Frequently asked questions"
                    description="Answers for product designers, engineers, and ops teams getting started with Ushur."
                    primaryActionLabel="Contact support"
                    secondaryActionLabel="View docs"
                />

                <FAQSectionAccordion
                    eyebrow="General"
                    title="Top questions"
                    description="Billing, licensing, and rollout logistics."
                    items={accordionItems}
                    cta={<span>Email us anytime at support@untitledui.com</span>}
                />

                <FAQSectionSplit
                    eyebrow="Product & support"
                    title="Technical details"
                    description="How we approach accessibility, frameworks, CI, and enterprise support."
                    items={splitItems}
                    supportCard={
                        <div className="space-y-3 text-sm text-tertiary">
                            <p className="text-lg font-semibold text-primary">Need a custom answer?</p>
                            <p>Drop links to your Storybook build and we’ll help you debug in real time.</p>
                            <a className="text-brand-secondary" href="mailto:solutions@untitledui.com">
                                solutions@untitledui.com
                            </a>
                        </div>
                    }
                />

                <ContactSectionCards eyebrow="Still need help?" title="Talk to a human" cards={contactCards} />

                <CTASectionCentered
                    eyebrow="Ready to start?"
                    title="Install Ushur today"
                    description="npm install @untitledui/react — configure tokens — deploy. Done."
                    primaryActionLabel="Get started"
                    secondaryActionLabel="Book demo"
                />

                <NewsletterCTAInline
                    eyebrow="Releases"
                    title="Get notified about new components"
                    description="Weekly digest of product updates and best practices."
                    placeholder="you@example.com"
                    buttonLabel="Subscribe"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="A complete React design system for marketing sites and application UI."
                columns={[
                    {
                        title: "Resources",
                        links: [
                            { label: "Docs", href: "/docs" },
                            { label: "API", href: "/api" },
                            { label: "Status", href: "/status" },
                        ],
                    },
                    {
                        title: "Company",
                        links: [
                            { label: "About", href: "/about" },
                            { label: "Careers", href: "/careers" },
                            { label: "Contact", href: "/contact" },
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

