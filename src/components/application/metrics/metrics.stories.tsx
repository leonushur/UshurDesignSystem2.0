import type { Meta, StoryObj } from "@storybook/react";
import { Users01, CurrencyDollar, ShoppingCart01, Eye } from "@untitledui-pro/icons/line";
import { MetricCard, MetricInline, MetricWithChart, MetricGroup } from "./metrics";

const meta: Meta<typeof MetricCard> = {
    title: "Application/Metrics",
    component: MetricCard,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type MetricCardStory = StoryObj<typeof MetricCard>;

export const Default: MetricCardStory = {
    args: {
        label: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1%",
        changeType: "positive",
        description: "from last month",
    },
};

export const WithIcon: MetricCardStory = {
    args: {
        label: "Total Users",
        value: "2,350",
        change: "+180",
        changeType: "positive",
        description: "vs last week",
        icon: Users01,
    },
};

export const NegativeChange: MetricCardStory = {
    args: {
        label: "Bounce Rate",
        value: "42.5%",
        change: "-8.2%",
        changeType: "negative",
        description: "from last month",
    },
};

export const SmallSize: MetricCardStory = {
    args: {
        label: "Active Users",
        value: "1,234",
        change: "+5%",
        changeType: "positive",
        size: "sm",
    },
};

export const LargeSize: MetricCardStory = {
    args: {
        label: "Total Sales",
        value: "$892,120",
        change: "+32%",
        changeType: "positive",
        description: "Year to date",
        size: "lg",
        icon: CurrencyDollar,
    },
};

export const Inline: StoryObj<typeof MetricInline> = {
    render: () => (
        <div className="flex flex-col gap-4">
            <MetricInline label="Revenue" value="$45,231" change="+20.1%" changeType="positive" />
            <MetricInline label="Users" value="2,350" change="-5%" changeType="negative" />
            <MetricInline label="Sessions" value="12,543" change="0%" changeType="neutral" />
        </div>
    ),
};

export const WithChart: StoryObj<typeof MetricWithChart> = {
    render: () => (
        <div className="max-w-sm">
            <MetricWithChart
                label="Total Revenue"
                value="$45,231.89"
                change="+20.1%"
                changeType="positive"
                chart={
                    <svg viewBox="0 0 200 60" className="h-full w-full">
                        <polyline
                            fill="none"
                            stroke="var(--color-utility-brand-500)"
                            strokeWidth="2"
                            points="0,50 20,45 40,35 60,40 80,25 100,30 120,20 140,15 160,25 180,10 200,5"
                        />
                    </svg>
                }
            />
        </div>
    ),
};

export const Group: StoryObj<typeof MetricGroup> = {
    render: () => (
        <MetricGroup
            columns={4}
            metrics={[
                {
                    label: "Total Revenue",
                    value: "$45,231.89",
                    change: "+20.1%",
                    changeType: "positive",
                    description: "from last month",
                    icon: CurrencyDollar,
                },
                {
                    label: "Subscriptions",
                    value: "+2,350",
                    change: "+180.1%",
                    changeType: "positive",
                    description: "from last month",
                    icon: Users01,
                },
                {
                    label: "Sales",
                    value: "+12,234",
                    change: "+19%",
                    changeType: "positive",
                    description: "from last month",
                    icon: ShoppingCart01,
                },
                {
                    label: "Active Now",
                    value: "+573",
                    change: "-2%",
                    changeType: "negative",
                    description: "since last hour",
                    icon: Eye,
                },
            ]}
        />
    ),
};

export const GroupThreeColumns: StoryObj<typeof MetricGroup> = {
    render: () => (
        <MetricGroup
            columns={3}
            metrics={[
                {
                    label: "Total Views",
                    value: "1.2M",
                    change: "+15%",
                    changeType: "positive",
                },
                {
                    label: "Engagement Rate",
                    value: "4.5%",
                    change: "+0.5%",
                    changeType: "positive",
                },
                {
                    label: "Avg. Session",
                    value: "2m 34s",
                    change: "-12s",
                    changeType: "negative",
                },
            ]}
        />
    ),
};

export const AllVariants: MetricCardStory = {
    render: () => (
        <div className="flex flex-col gap-8">
            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Card Variants</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <MetricCard
                        label="Small"
                        value="$12,345"
                        change="+5%"
                        changeType="positive"
                        size="sm"
                    />
                    <MetricCard
                        label="Medium"
                        value="$45,678"
                        change="+12%"
                        changeType="positive"
                        size="md"
                    />
                    <MetricCard
                        label="Large"
                        value="$89,012"
                        change="+25%"
                        changeType="positive"
                        size="lg"
                    />
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Change Types</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <MetricCard
                        label="Positive"
                        value="2,450"
                        change="+20%"
                        changeType="positive"
                    />
                    <MetricCard
                        label="Negative"
                        value="1,230"
                        change="-15%"
                        changeType="negative"
                    />
                    <MetricCard
                        label="Neutral"
                        value="3,100"
                        change="0%"
                        changeType="neutral"
                    />
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Inline Metrics</p>
                <div className="flex flex-wrap gap-8">
                    <MetricInline label="Users" value="12,543" change="+8%" changeType="positive" />
                    <MetricInline label="Revenue" value="$892K" change="-3%" changeType="negative" />
                    <MetricInline label="Orders" value="1,234" />
                </div>
            </div>
        </div>
    ),
};

