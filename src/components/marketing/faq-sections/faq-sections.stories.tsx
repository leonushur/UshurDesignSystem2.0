import type { Meta, StoryObj } from "@storybook/react";
import { FAQSectionAccordion, FAQSectionSplit } from "./faq-sections";
import { Button } from "@/components/base/buttons/button";

const baseItems = [
    {
        id: "faq-1",
        question: "Do you offer discounts for early-stage startups?",
        answer: "Yes. We have a dedicated startup plan that includes all core features, onboarding support, and growth credits. Reach out to our team to see if you qualify.",
        category: "Billing",
    },
    {
        id: "faq-2",
        question: "Is there an on-premise version available?",
        answer: "We offer an enterprise deployment package with private cloud and on-prem options, including SOC 2 reporting and custom SSO.",
        category: "Security",
    },
    {
        id: "faq-3",
        question: "Can I migrate my existing components?",
        answer: "Our team provides white-glove migration tooling with CLI helpers, pairing sessions, and a migration checklist to keep quality high.",
        category: "Product",
    },
    {
        id: "faq-4",
        question: "How does the support SLA work?",
        answer: "Pro plans include 2-hour response times and guided incident retros. Enterprise customers receive a dedicated Slack channel.",
        category: "Support",
    },
    {
        id: "faq-5",
        question: "What’s included in the analytics suite?",
        answer: "Teams can monitor component usage, accessibility regressions, and performance budgets across all products in real time.",
        category: "Analytics",
    },
    {
        id: "faq-6",
        question: "Do you help with re-brand launches?",
        answer: "Yes. We partner with your brand team to roll out new tokens, typography, and templates inside your Storybook catalog.",
        category: "Services",
    },
];

const meta: Meta<typeof FAQSectionAccordion> = {
    title: "Marketing/FAQ Sections",
    component: FAQSectionAccordion,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type AccordionStory = StoryObj<typeof FAQSectionAccordion>;

export const Accordion: AccordionStory = {
    args: {
        eyebrow: "FAQ",
        title: "Answers to common questions",
        description: "Everything from billing to implementation details, straight from our team.",
        items: baseItems,
        cta: (
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
                <div>
                    Still can’t find what you’re looking for? Our team is available 24/7.
                </div>
                <Button size="sm">Contact support</Button>
            </div>
        ),
    },
};

type SplitStory = StoryObj<typeof FAQSectionSplit>;

export const Split: SplitStory = {
    args: {
        eyebrow: "Support",
        title: "We’re here to help",
        description: "Product specialists partner with your team from the moment you go live.",
        items: baseItems,
        supportCard: (
            <div className="space-y-4 text-sm text-tertiary">
                <p className="text-lg font-semibold text-primary">Need to talk to us?</p>
                <ul className="space-y-2">
                    <li>Live chat from 7am–7pm PT</li>
                    <li>Priority support for Pro customers</li>
                    <li>Quarterly roadmap reviews</li>
                </ul>
                <Button size="sm" color="secondary">
                    Book a call
                </Button>
            </div>
        ),
    },
};

