import type { Meta, StoryObj } from "@storybook/react";
import { SocialProofSectionCards, SocialProofSectionGrid } from "./social-proof-sections";
import { Button } from "@/components/base/buttons/button";
import { UshurLogo } from "@/components/foundations/logo/ushur-logo";

const meta: Meta<typeof SocialProofSectionGrid> = {
    title: "Marketing/Social Proof Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type GridStory = StoryObj<typeof SocialProofSectionGrid>;

const logos = [
    { name: "Layer", logo: <UshurLogo className="h-6" />, stat: "Series C" },
    { name: "Sisyphus", stat: "4.8x ROI" },
    { name: "Catalog" },
    { name: "Quotient" },
    { name: "Hourglass" },
    { name: "Feather" },
];

export const Grid: GridStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <SocialProofSectionGrid
                eyebrow="Join 3,000+ teams"
                title="Scaling companies use Ushur"
                description="From seed to IPO, Ushur powers marketing and product experiences for category leaders."
                logos={logos}
                columns={6}
                supportingText="Backed by the fastest-growing product teams in SaaS."
            />
        </div>
    ),
};

type CardsStory = StoryObj<typeof SocialProofSectionCards>;

const cards = [
    { title: "Average time-to-launch", description: "Teams ship new sites and app experiences 68% faster.", stat: "68% faster" },
    { title: "Revenue influenced", description: "Customers reported a median 4.8x ROI after 6 months.", stat: "4.8x ROI" },
    { title: "Support satisfaction", description: "Our success team maintains a 98% CSAT across all tiers.", stat: "98% CSAT" },
];

export const Cards: CardsStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <SocialProofSectionCards
                eyebrow="Proof"
                title="Results you can share with the board"
                description="Skip the guesswork—Ushur drives measurable impact for modern GTM teams."
                cards={cards}
                cta={
                    <div className="flex flex-col gap-3 rounded-2xl border border-secondary bg-primary_hover p-5 text-sm text-tertiary">
                        <p>Ready to showcase the ROI?</p>
                        <Button size="lg">Download executive deck</Button>
                    </div>
                }
            />
        </div>
    ),
};

