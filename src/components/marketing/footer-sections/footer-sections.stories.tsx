import type { Meta, StoryObj } from "@storybook/react";
import { FooterSectionSimple, FooterSectionNewsletter } from "./footer-sections";
import { UshurLogo } from "@/components/foundations/logo/ushur-logo";
import { Twitter, LinkedIn, YouTube, Instagram } from "@/components/foundations/social-icons";

const columns = [
    {
        title: "Product",
        links: [
            { label: "Overview", href: "/overview" },
            { label: "API", href: "/api" },
            { label: "Pricing", href: "/pricing" },
            { label: "Security", href: "/security" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Docs", href: "/docs" },
            { label: "Changelog", href: "/changelog" },
            { label: "Community", href: "/community" },
            { label: "Status", href: "/status" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
            { label: "Contact", href: "/contact" },
        ],
    },
];

const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: LinkedIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: YouTube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const bottomLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
];

const meta: Meta<typeof FooterSectionSimple> = {
    title: "Marketing/Footer Sections",
    component: FooterSectionSimple,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type SimpleStory = StoryObj<typeof FooterSectionSimple>;

export const Simple: SimpleStory = {
    args: {
        logo: <UshurLogo className="h-8 w-auto text-primary" />,
        description: "Ushur builds the fastest way to launch modern customer experiences with production-ready UI blocks.",
        columns,
        socialLinks,
        bottomLinks,
        copyright: "© 2025 Ushur UX Inc. All rights reserved.",
    },
};

type NewsletterStory = StoryObj<typeof FooterSectionNewsletter>;

export const Newsletter: NewsletterStory = {
    args: {
        logo: <UshurLogo className="h-8 w-auto text-primary" />,
        eyebrow: "Stay in the loop",
        description: "Weekly dispatches of launches, templates, and practical guides.",
        newsletterDescription: "Join 50,000+ builders who get a behind-the-scenes look at Ushur releases.",
        columns,
        socialLinks,
        bottomLinks,
        copyright: "© 2025 Ushur UX Inc. All rights reserved.",
        inputPlaceholder: "name@email.com",
        ctaLabel: "Get updates",
    },
};

