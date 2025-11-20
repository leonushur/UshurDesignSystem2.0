import type { Meta, StoryObj } from "@storybook/react";
import { HeaderSectionCentered, HeaderSectionSplit } from "./header-sections";
import { Button } from "@/components/base/buttons/button";
import { PlayCircle } from "@untitledui-pro/icons/line";

const meta: Meta<typeof HeaderSectionCentered> = {
    title: "Marketing/Header Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type CenteredStory = StoryObj<typeof HeaderSectionCentered>;

const logos = [
    { name: "Layer" },
    { name: "Sisyphus" },
    { name: "Catalog" },
    { name: "Quotient" },
    { name: "Hourglass" },
];

export const Centered: CenteredStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <HeaderSectionCentered
                eyebrow="New feature"
                title="A modular design system for ambitious teams"
                description="Ushur helps you move fast with a comprehensive library of marketing and product sections."
                primaryAction={<Button size="lg">Get started</Button>}
                secondaryAction={
                    <Button size="lg" color="secondary" iconLeading={PlayCircle}>
                        Watch demo
                    </Button>
                }
                stats={[
                    { label: "Avg. ROI", value: "4.8x" },
                    { label: "Customer NPS", value: "68" },
                    { label: "Time saved / wk", value: "12 hrs" },
                ]}
                logos={logos}
                backgroundElement={<div className="h-full w-full bg-gradient-to-b from-brand-secondary/10 to-transparent blur-3xl" />}
            />
        </div>
    ),
};

type SplitStory = StoryObj<typeof HeaderSectionSplit>;

export const Split: SplitStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <HeaderSectionSplit
                eyebrow="Customer success"
                title="Campaign intelligence for modern marketing teams"
                description="Measure every touchpoint, forecast performance, and launch iterative experiments from a single dashboard."
                primaryAction={<Button size="lg">Start free trial</Button>}
                secondaryAction={
                    <Button size="lg" color="tertiary">
                        Talk to sales
                    </Button>
                }
                bulletPoints={[
                    { title: "Predictive insights", description: "Model pipeline and revenue per campaign with AI." },
                    { title: "Faster decisions", description: "Sync automations with GTM tools to act immediately." },
                    { title: "Enterprise ready", description: "SOC2 Type II, SSO, and advanced permissions included." },
                ]}
            />
        </div>
    ),
};

