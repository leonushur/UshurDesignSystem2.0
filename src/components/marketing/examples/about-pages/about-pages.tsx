import { Header } from "@/components/marketing/header-navigation/header";
import { HeaderSectionSplit } from "@/components/marketing/header-sections";
import { ContentSectionSplit, ContentSectionStack } from "@/components/marketing/content-rich-text-sections";
import { TeamSectionGrid } from "@/components/marketing/team-sections";
import { SocialProofSectionGrid } from "@/components/marketing/social-proof-sections";
import { TestimonialSectionGrid } from "@/components/marketing/testimonial-sections";
import { CTASectionSplit } from "@/components/marketing/cta-sections";
import { FooterSectionSimple } from "@/components/marketing/footer-sections";

const timelineItems = [
    {
        title: "2019 · The design kit",
        body: ["Ushur began as a Figma design kit to help our team standardize internal tooling."],
    },
    {
        title: "2021 · Open-source React",
        body: ["We rebuilt the entire system in React with Tailwind CSS and React Aria to make production handoff instant."],
    },
    {
        title: "2024 · Enterprise rollout",
        body: ["Adopted by 600+ product teams, we added marketing sections, example pages, and CLI tooling."],
    },
];

const missionPoints = [
    {
        title: "Why we exist",
        body: [
            "Modern teams shouldn’t rebuild the same primitives over and over. We ship a unified system for marketing sites and application UI.",
        ],
    },
    {
        title: "How we work",
        body: ["Remote-first, async by default, and obsessive about documentation. We run design reviews in Storybook, not slides."],
    },
];

const people = [
    {
        name: "Sofia Carter",
        role: "Co-founder & CEO",
        description: "Former design systems lead at large SaaS companies.",
        socials: [{ label: "LinkedIn", href: "#" }],
    },
    {
        name: "Elias Romero",
        role: "Co-founder & CTO",
        description: "Built scalable component architectures at multiple unicorns.",
        socials: [{ label: "GitHub", href: "#" }],
    },
    {
        name: "Harper Kim",
        role: "Design Lead",
        description: "Drives the Ushur aesthetic and accessibility program.",
        socials: [{ label: "Twitter", href: "#" }],
    },
    {
        name: "Noah Patel",
        role: "Engineering Lead",
        description: "Owns the CLI, Storybook infra, and QA pipelines.",
        socials: [{ label: "GitHub", href: "#" }],
    },
];

const testimonials = [
    {
        quote: "Ushur’s team treated us like partners. They helped us migrate hundreds of components without disrupting velocity.",
        author: "Dana Liu, VP of Product at Horizon",
    },
    {
        quote: "They truly understand the intersection of craft and scale. We launched a world-class brand in weeks.",
        author: "Jon Reyes, Head of Design at Glimpse",
    },
];

const logos = ["LinearFlow", "Glimpse", "Unison", "Northwind", "Stellar", "Kepler"];

export const AboutPage = () => {
    return (
        <div className="bg-background-primary text-foreground-primary">
            <Header isFullWidth />
            <main className="space-y-16 pb-20 pt-10">
                <HeaderSectionSplit
                    eyebrow="About us"
                    title="We help teams ship beautiful interfaces faster"
                    description="Ushur blends cohesive design language with production-grade React components. We exist so product teams can focus on customer problems."
                    primaryActionLabel="Meet the team"
                    secondaryActionLabel="View open roles"
                    stats={[
                        { label: "Launches", value: "1,200+" },
                        { label: "Global teammates", value: "48" },
                        { label: "Customers", value: "8,200+" },
                    ]}
                />

                <ContentSectionSplit eyebrow="Story" title="From design kit to production system" content={timelineItems} />

                <ContentSectionStack eyebrow="Principles" title="How we operate" sections={missionPoints} />

                <SocialProofSectionGrid eyebrow="Teams we serve" title="Trusted by product orgs worldwide" logos={logos} columns={3} />

                <TeamSectionGrid
                    eyebrow="Leadership"
                    title="Meet the makers"
                    description="A multidisciplinary team of designers, engineers, and educators focused on quality."
                    members={people}
                />

                <TestimonialSectionGrid eyebrow="Community love" title="People love building with Ushur" testimonials={testimonials} />

                <CTASectionSplit
                    eyebrow="Join us"
                    title="We’re hiring across product, design, and devrel"
                    description="Help us create the future of design systems. Remote-first and async-friendly."
                    bullets={["Fully remote", "Quarterly offsites", "Learning stipend"]}
                    primaryLabel="View roles"
                    secondaryLabel="About our culture"
                />
            </main>
            <FooterSectionSimple
                logo={<span className="text-lg font-semibold">Ushur</span>}
                description="A design system studio helping teams ship cohesive product experiences."
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
                    { label: "Security", href: "/security" },
                ]}
                copyright="© 2025 Ushur"
            />
        </div>
    );
};

