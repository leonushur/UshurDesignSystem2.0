import type { Meta, StoryObj } from "@storybook/react";
import { FeatureSectionCards, FeatureSectionIconGrid } from "./features-sections";
import { Button } from "@/components/base/buttons/button";
import { ShieldTick, Zap, BarChartSquare02 } from "@untitledui-pro/icons/line";
import { Badge } from "@/components/base/badges/badges";

const meta: Meta<typeof FeatureSectionIconGrid> = {
    title: "Marketing/Features Sections",
    component: FeatureSectionIconGrid,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type IconGridStory = StoryObj<typeof FeatureSectionIconGrid>;

const iconGridFeatures = [
    {
        title: "Realtime automation",
        description: "Trigger personalized journeys across channels with unified customer profiles.",
        icon: <Zap className="size-6" />,
    },
    {
        title: "Analytics intelligence",
        description: "Forecast revenue impact per experiment and share insights with GTM teams.",
        icon: <BarChartSquare02 className="size-6" />,
    },
    {
        title: "Enterprise governance",
        description: "SSO, SCIM, granular permissions, and audit logs keep data secure.",
        icon: <ShieldTick className="size-6" />,
        badge: <Badge size="sm">SOC2</Badge>,
    },
];

export const IconGrid: IconGridStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <FeatureSectionIconGrid
                eyebrow="Product capabilities"
                title="Everything modern GTM teams need"
                description="Ushur ships with 40+ feature blocks you can mix and match to tell your story."
                features={iconGridFeatures}
            />
        </div>
    ),
};

type CardsStory = StoryObj<typeof FeatureSectionCards>;

const cardFeatures = [
    {
        title: "Insights workspace",
        description: "An interactive command center that pulls in every KPI, campaign, and experiment.",
        icon: <Zap className="size-5" />,
        stat: "↑124%",
    },
    {
        title: "Customer timeline",
        description: "Track key milestones, deal health, and expansion opportunities in one view.",
        icon: <ShieldTick className="size-5" />,
        badge: <Badge size="sm">New</Badge>,
        stat: "NPS 68",
    },
];

export const Cards: CardsStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <FeatureSectionCards
                eyebrow="Platform overview"
                title="Increase revenue efficiency without increasing headcount"
                description="Our feature cards pair narrative copy with key metrics so stakeholders immediately understand the value."
                supportingText="Loved by RevOps, marketing, and product teams at high-growth startups and global enterprises."
                features={cardFeatures}
                primaryAction={<Button size="lg">Explore features</Button>}
                secondaryAction={
                    <Button size="lg" color="secondary">
                        Talk to sales
                    </Button>
                }
            />
        </div>
    ),
};

