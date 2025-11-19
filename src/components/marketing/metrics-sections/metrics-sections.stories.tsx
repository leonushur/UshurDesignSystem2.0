import type { Meta, StoryObj } from "@storybook/react";
import { MetricsSectionGrid, MetricsSectionPanel } from "./metrics-sections";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof MetricsSectionGrid> = {
    title: "Marketing/Metrics Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type GridStory = StoryObj<typeof MetricsSectionGrid>;

const metrics = [
    { label: "Marketing source ROI", value: "4.8x", description: "Blended across paid & lifecycle channels", trend: { value: "+42%", direction: "up" } },
    { label: "Pipeline influenced", value: "$8.4M", description: "Last 90 days across enterprise segment" },
    { label: "Sales velocity", value: "21 days", description: "Median time from demo to signed contract", trend: { value: "-5 days", direction: "down" } },
];

export const Grid: GridStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <MetricsSectionGrid
                eyebrow="Outcomes"
                title="Track every KPI in one dashboard"
                description="Prebuilt reporting tiles plug into your existing warehouse and GTM tools."
                metrics={metrics}
            />
        </div>
    ),
};

type PanelStory = StoryObj<typeof MetricsSectionPanel>;

export const Panel: PanelStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <MetricsSectionPanel
                eyebrow="Executive summary"
                title="Share live metrics with leadership"
                description="Automated PDF and slide exports keep investors and execs aligned."
                metrics={[
                    { label: "Net revenue retention", value: "134%", description: "Cohort: enterprise customers", trend: { value: "+6 pts", direction: "up" } },
                    { label: "Qualified demos per rep", value: "18 / wk", description: "All inbound + outbound channels" },
                    { label: "Customer NPS", value: "68", description: "High-touch onboarding program", trend: { value: "+5 pts", direction: "up" } },
                ]}
                highlights={[
                    { title: "Fintech launch", description: "Exceeded MQL goals by 124% with the new AI workflow." },
                    { title: "Churn pilot", description: "Triggered save journeys cut churn risk by 32%." },
                ]}
                footer={
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span>Need a deeper look? Export full dashboards to Slides in one click.</span>
                        <Button size="sm" color="secondary">
                            Export report
                        </Button>
                    </div>
                }
            />
        </div>
    ),
};

