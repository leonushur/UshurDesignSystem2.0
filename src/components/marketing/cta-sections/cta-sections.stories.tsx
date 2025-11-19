import type { Meta, StoryObj } from "@storybook/react";
import { CTASectionBanner, CTASectionCentered, CTASectionSplit } from "./cta-sections";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";

const meta: Meta<typeof CTASectionCentered> = {
    title: "Marketing/CTA Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type CenteredStory = StoryObj<typeof CTASectionCentered>;

export const Centered: CenteredStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <CTASectionCentered
                eyebrow="Ready to get started?"
                title="See Ushur in action"
                description="Launch highly-polished marketing sites, product pages, and app UIs in days with the most complete React kit available."
                primaryAction={<Button size="lg">Start free trial</Button>}
                secondaryAction={
                    <Button size="lg" color="secondary">
                        Book demo
                    </Button>
                }
                badge={
                    <Badge size="md" color="success">
                        New AI-assisted blocks
                    </Badge>
                }
                supportingText="No credit card required. Cancel anytime."
            />
        </div>
    ),
};

type SplitStory = StoryObj<typeof CTASectionSplit>;

export const Split: SplitStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <CTASectionSplit
                eyebrow="Done-for-you onboarding"
                title="Partner with our customer team to ship faster"
                description="We help your team migrate assets, customize the design system, and automate workflows in as little as three weeks."
                bulletPoints={["Migration planning & design system setup", "Custom training for your team", "Quarterly optimization sessions"]}
                primaryAction={<Button size="lg">Talk to an expert</Button>}
                secondaryAction={
                    <Button size="lg" color="tertiary">
                        View services
                    </Button>
                }
            />
        </div>
    ),
};

type BannerStory = StoryObj<typeof CTASectionBanner>;

export const Banner: BannerStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <CTASectionBanner
                eyebrow="Limited offer"
                title="Scale your marketing in half the time"
                description="Annual plans now include free design reviews and premium support."
                primaryAction={
                    <Button size="lg" color="secondary">
                        Upgrade now
                    </Button>
                }
                secondaryAction={
                    <Button size="lg" color="tertiary">
                        Contact sales
                    </Button>
                }
            />
        </div>
    ),
};

