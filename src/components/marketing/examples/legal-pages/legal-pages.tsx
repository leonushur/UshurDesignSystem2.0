import { Header } from "@/components/marketing/header-navigation/header";
import { HeaderSectionCentered } from "@/components/marketing/header-sections";
import { ContentSectionSplit, ContentSectionStack } from "@/components/marketing/content-rich-text-sections";
import { FAQSectionAccordion } from "@/components/marketing/faq-sections";
import { CTASectionBanner } from "@/components/marketing/cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";

const policySections = [
    {
        title: "Security",
        body: [
            "We maintain SOC 2 Type II compliance, require MFA for internal tools, and run continuous penetration testing.",
            "Customer data is encrypted at rest with AES-256 and in transit with TLS 1.2+.",
        ],
    },
    {
        title: "Data processing",
        body: [
            "Ushur acts as a processor for customer assets. We only use data to provide and improve the product.",
            "Subprocessors are listed in our trust center and notified via email before changes go live.",
        ],
    },
];

const docLinks = [
    {
        title: "Terms of service",
        body: ["Defines the relationship between Ushur and customers using the platform."],
    },
    {
        title: "Privacy policy",
        body: ["Details what information we collect, how we use it, and your rights as a customer."],
    },
    {
        title: "DPA",
        body: ["Available for Pro and Enterprise customers. Includes SCCs and region-specific clauses."],
    },
];

const faqItems = [
    { id: "legal-faq-1", question: "Do you support custom terms?", answer: "Enterprise contracts can include custom riders, SLAs, and security requirements." },
    {
        id: "legal-faq-2",
        question: "Where is your data hosted?",
        answer: "We host in Vercel’s US and EU regions with failover. Enterprise can request dedicated regions.",
    },
    {
        id: "legal-faq-3",
        question: "Can we run Ushur on-premise?",
        answer: "Yes. Our enterprise deployment package supports private cloud and on-prem installations.",
    },
];

export const LegalPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <HeaderSectionCentered
                    eyebrow="Legal"
                    title="Policies, compliance, and trust"
                    description="Get the details you need to evaluate Ushur for your organization. We keep every policy transparent and up to date."
                    stats={[
                        { label: "Last updated", value: "Nov 14, 2025" },
                        { label: "Availability", value: "99.99%" },
                        { label: "Certifications", value: "SOC 2 Type II" },
                    ]}
                />

                <ContentSectionSplit eyebrow="Overview" title="Our commitment to trust" items={policySections} />

                <ContentSectionStack eyebrow="Documents" title="Download policy documents" items={docLinks} />

                <FAQSectionAccordion eyebrow="FAQ" title="Legal questions" items={faqItems} />

                <CTASectionBanner
                    eyebrow="Need something custom?"
                    title="Work with our legal & security team"
                    description="We’ll partner with your legal, procurement, and security stakeholders to deliver the documentation you need."
                    primaryActionLabel="Contact legal"
                    secondaryActionLabel="Visit trust center"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Modern design systems, built with enterprise-grade security."
                columns={[
                    {
                        title: "Resources",
                        links: [
                            { label: "Trust center", href: "/trust" },
                            { label: "Status", href: "/status" },
                            { label: "Security whitepaper", href: "/security" },
                        ],
                    },
                    {
                        title: "Policies",
                        links: [
                            { label: "Terms of service", href: "/terms" },
                            { label: "Privacy policy", href: "/privacy" },
                            { label: "DPA", href: "/dpa" },
                        ],
                    },
                ]}
                bottomLinks={[
                    { label: "Cookie settings", href: "/cookies" },
                    { label: "Responsible disclosure", href: "/security#disclosure" },
                ]}
                copyright="© 2025 Ushur"
            />
        </div>
    );
};

