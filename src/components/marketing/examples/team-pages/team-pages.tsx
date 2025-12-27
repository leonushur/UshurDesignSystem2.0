import { Header } from "@/components/marketing/header-navigation/header";
import { HeaderSectionCentered } from "@/components/marketing/header-sections";
import { TeamSectionGrid, TeamSectionList } from "@/components/marketing/team-sections";
import { SocialProofSectionGrid } from "@/components/marketing/social-proof-sections";
import { CTASectionSplit } from "@/components/marketing/cta-sections";
import { NewsletterCTAInline } from "@/components/marketing/newsletter-cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";

const leadership = [
    {
        name: "Sofia Carter",
        role: "CEO",
        description: "Drives product vision, customer partnerships, and culture.",
        socials: [{ label: "LinkedIn", href: "#" }],
    },
    {
        name: "Elias Romero",
        role: "CTO",
        description: "Architects the component library, CLI, and build tooling.",
        socials: [{ label: "GitHub", href: "#" }],
    },
    {
        name: "Harper Kim",
        role: "Head of Design",
        description: "Owns the Ushur aesthetic, tokens, and accessibility standards.",
        socials: [{ label: "Dribbble", href: "#" }],
    },
    {
        name: "Noah Patel",
        role: "Head of Engineering",
        description: "Leads frontend infrastructure, QA, and devrel programs.",
        socials: [{ label: "GitHub", href: "#" }],
    },
];

const teamMembers = [
    { name: "Ava Singh", role: "Staff Product Designer" },
    { name: "Leo Adams", role: "Design Systems PM" },
    { name: "Ivy Flores", role: "Content Strategist" },
    { name: "Marcus Lee", role: "Lead Frontend Engineer" },
    { name: "Hannah Ray", role: "DX Engineer" },
    { name: "Julian Ortiz", role: "QA Engineer" },
    { name: "Priya Desai", role: "Head of Customer Success" },
    { name: "Chris Nolan", role: "Solutions Architect" },
    { name: "Emily Ford", role: "Implementation Manager" },
];

const logos = ["LinearFlow", "Northwind", "Glimpse", "Unison", "Drift", "Contour"];

export const TeamPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <HeaderSectionCentered
                    eyebrow="Team"
                    title="A distributed team of designers, engineers, and educators"
                    description="We’re building the world’s most complete open-source design system. Meet the people behind Ushur."
                    stats={[
                        { label: "Team members", value: "48" },
                        { label: "Countries", value: "10" },
                        { label: "Customers", value: "8,200+" },
                    ]}
                />

                <SocialProofSectionGrid eyebrow="Trusted by" title="We work with ambitious teams everywhere" logos={logos} columns={3} />

                <TeamSectionGrid
                    eyebrow="Leadership"
                    title="Guided by builders"
                    description="Design systems experts, DX leaders, and product obsessives."
                    members={leadership}
                />

                <TeamSectionList
                    eyebrow="Departments"
                    title="Meet the rest of Ushur"
                    description="Every department collaborates closely through Storybook-driven workflows."
                    members={teamMembers}
                />

                <CTASectionSplit
                    eyebrow="Join us"
                    title="Help us build the future of design systems"
                    description="We hire globally across design, engineering, operations, and devrel."
                    bullets={["Remote-first", "Async culture", "Learning stipend", "Quarterly offsites"]}
                    primaryLabel="View open roles"
                    secondaryLabel="About our culture"
                />

                <NewsletterCTAInline
                    eyebrow="Newsletter"
                    title="Follow our journey"
                    description="Stories from the team, release notes, and behind-the-scenes retros."
                    placeholder="you@example.com"
                    buttonLabel="Subscribe"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="Modern design systems studio powering marketing and application UI."
                columns={[
                    {
                        title: "Company",
                        links: [
                            { label: "About", href: "/about" },
                            { label: "Careers", href: "/careers" },
                            { label: "Press", href: "/press" },
                        ],
                    },
                    {
                        title: "Resources",
                        links: [
                            { label: "Docs", href: "/docs" },
                            { label: "Blog", href: "/blog" },
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

