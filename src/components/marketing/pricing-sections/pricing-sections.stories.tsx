import type { Meta, StoryObj } from "@storybook/react";
import { PricingSectionCards, PricingSectionTable } from "./pricing-sections";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";

const meta: Meta<typeof PricingSectionCards> = {
    title: "Marketing/Pricing Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type CardsStory = StoryObj<typeof PricingSectionCards>;

const plans = [
    {
        id: "starter",
        name: "Starter",
        price: "$49",
        cadence: "/month",
        description: "Perfect for early-stage teams testing new ideas.",
        features: ["Up to 3 workspaces", "1,000 contacts", "Email + chat support"],
        cta: <Button size="lg">Start for free</Button>,
    },
    {
        id: "growth",
        name: "Growth",
        price: "$149",
        cadence: "/month",
        description: "Advanced automation and reporting for scaling GTM.",
        features: ["Unlimited workspaces", "50,000 contacts", "Marketing automation", "Multi-channel journeys"],
        cta: (
            <Button size="lg" color="secondary">
                Chat with sales
            </Button>
        ),
        popular: true,
        badge: (
            <Badge size="sm" color="success">
                Save 15%
            </Badge>
        ),
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "Custom",
        description: "Security, governance, and services for global orgs.",
        features: ["Dedicated CSM", "SOC2 & HIPAA compliance", "Advanced permissions", "24/7 priority support"],
        cta: (
            <Button size="lg" color="tertiary">
                Contact us
            </Button>
        ),
    },
];

export const Cards: CardsStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <PricingSectionCards
                eyebrow="Pricing"
                title="Flexible plans for every stage"
                description="Choose the plan that fits your growth. Switch or cancel anytime."
                plans={plans}
                footerNote="Need a custom quote? Our sales team can tailor a plan for you."
            />
        </div>
    ),
};

type TableStory = StoryObj<typeof PricingSectionTable>;

const tablePlans = plans.map((plan) => ({
    ...plan,
    cta: undefined,
}));

const featureComparison = [
    {
        label: "Workspaces",
        plans: {
            starter: "3",
            growth: "Unlimited",
            enterprise: "Unlimited",
        },
    },
    {
        label: "Contacts",
        plans: {
            starter: "1,000",
            growth: "50,000",
            enterprise: "Unlimited",
        },
    },
    {
        label: "Automation",
        plans: {
            starter: false,
            growth: true,
            enterprise: true,
        },
    },
    {
        label: "Security & SSO",
        plans: {
            starter: false,
            growth: true,
            enterprise: true,
        },
    },
];

export const Table: TableStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <PricingSectionTable
                eyebrow="Compare plans"
                title="Enterprise-grade features for teams of all sizes"
                description="Every plan includes unlimited viewers, billing profiles, and access to all marketing blocks."
                plans={tablePlans}
                features={featureComparison}
            />
        </div>
    ),
};

