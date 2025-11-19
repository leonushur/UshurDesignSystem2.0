import { Header } from "@/components/marketing/header-navigation/header";
import { ContactSectionForm, ContactSectionCards } from "@/components/marketing/contact-sections";
import { FAQSectionSplit } from "@/components/marketing/faq-sections";
import { CTASectionCentered } from "@/components/marketing/cta-sections";
import { NewsletterCTACard } from "@/components/marketing/newsletter-cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";

const contactCards = [
    {
        title: "Sales inquiry",
        description: "Talk with product specialists about pricing, implementation, and rollout plans.",
        channels: [
            { label: "sales@ushur.com", value: "Email", href: "mailto:sales@ushur.com" },
            { label: "+1 (415) 555-0123", value: "Phone" },
        ],
    },
    {
        title: "Support",
        description: "24/7 support for Ushur customers with dedicated SLA response times.",
        channels: [
            { label: "support@ushur.com", value: "Email", href: "mailto:support@ushur.com" },
            { label: "@UshurSupport", value: "Slack Connect" },
        ],
    },
    {
        title: "Media & partnerships",
        description: "Speaking invitations, sponsorships, and media kits.",
        channels: [
            { label: "press@ushur.com", value: "Email", href: "mailto:press@ushur.com" },
            { label: "View media kit", value: "Deck", href: "/media-kit" },
        ],
    },
];

const faqItems = [
    {
        id: "contact-faq-1",
        question: "Where is your team located?",
        answer: "We’re a fully remote company across North America, Europe, and APAC with quarterly in-person offsites.",
    },
    {
        id: "contact-faq-2",
        question: "How quickly do you respond?",
        answer: "Sales responds within 1 business day. Pro and Enterprise support plans include two-hour SLA during weekdays.",
    },
    {
        id: "contact-faq-3",
        question: "Do you offer implementation help?",
        answer: "Yes. Our solutions team provides migration audits, pairing, and playbooks for enterprise customers.",
    },
    {
        id: "contact-faq-4",
        question: "Can we schedule a workshop?",
        answer: "Absolutely—email partnerships@ushur.com and we’ll co-create a session for your team.",
    },
];

export const ContactPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <ContactSectionCards
                    eyebrow="Contact"
                    title="Talk with Ushur"
                    description="We’re here to help with product questions, pricing, implementation, or anything else."
                    cards={contactCards}
                />

                <ContactSectionForm
                    eyebrow="Send a message"
                    title="Tell us about your project"
                    description="Fill out the form and our team will get back to you within a business day."
                    highlights={[
                        { label: "Avg. response", value: "4 hours" },
                        { label: "Team members", value: "48 global" },
                        { label: "Customers", value: "8,200+" },
                    ]}
                />

                <FAQSectionSplit
                    eyebrow="FAQ"
                    title="Need answers fast?"
                    description="Browse our most common questions or chat with us directly."
                    items={faqItems}
                    supportCard={
                        <div className="space-y-3">
                            <p className="text-lg font-semibold text-primary">Live chat</p>
                            <p className="text-sm text-tertiary">Weekdays 7am–7pm PT. Enterprise accounts get dedicated Slack channels.</p>
                            <a className="text-sm font-semibold text-brand-secondary" href="/support">
                                Open chat →
                            </a>
                        </div>
                    }
                />

                <CTASectionCentered
                    eyebrow="Ready when you are"
                    title="Schedule a walkthrough"
                    description="See how Ushur powers marketing sites, dashboards, and internal tools in a single Storybook."
                    primaryActionLabel="Book demo"
                    secondaryActionLabel="Explore docs"
                />

                <NewsletterCTACard
                    eyebrow="Newsletter"
                    title="Ushur Dispatch"
                    description="Design systems case studies, release notes, and community spotlights."
                    placeholder="you@example.com"
                    buttonLabel="Subscribe"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Connect with the team building the most complete React design system."
                columns={[
                    {
                        title: "Contact",
                        links: [
                            { label: "Sales", href: "mailto:sales@untitledui.com" },
                            { label: "Support", href: "mailto:support@untitledui.com" },
                            { label: "Partnerships", href: "mailto:press@untitledui.com" },
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
                    { label: "Security", href: "/security" },
                ]}
                copyright="© 2025 Ushur"
            />
        </div>
    );
};

