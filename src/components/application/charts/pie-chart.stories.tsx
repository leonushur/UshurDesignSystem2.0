import type { Meta, StoryObj } from "@storybook/react";
import { PieChart, DonutChart } from "./pie-chart";
import { ActivityGauge, ActivityGaugeGroup, SemiCircleGauge } from "./activity-gauge";

const pieChartMeta: Meta<typeof PieChart> = {
    title: "Application/Charts/Pie Chart",
    component: PieChart,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default pieChartMeta;

const sampleData = [
    { name: "Desktop", value: 400 },
    { name: "Mobile", value: 300 },
    { name: "Tablet", value: 200 },
    { name: "Other", value: 100 },
];

const revenueData = [
    { name: "Product Sales", value: 45000 },
    { name: "Services", value: 28000 },
    { name: "Subscriptions", value: 18000 },
    { name: "Other", value: 9000 },
];

export const BasicPieChart: StoryObj<typeof PieChart> = {
    args: {
        data: sampleData,
        height: 300,
    },
};

export const PieChartWithLabels: StoryObj<typeof PieChart> = {
    args: {
        data: sampleData,
        height: 350,
        showLabels: true,
        showLegend: false,
    },
};

export const PieChartBottomLegend: StoryObj<typeof PieChart> = {
    args: {
        data: sampleData,
        height: 350,
        legendPosition: "bottom",
    },
};

export const BasicDonutChart: StoryObj<typeof DonutChart> = {
    render: () => (
        <DonutChart
            data={sampleData}
            height={300}
            centerValue="1,000"
            centerLabel="Total visits"
        />
    ),
};

export const DonutChartWithValue: StoryObj<typeof DonutChart> = {
    render: () => (
        <DonutChart
            data={revenueData}
            height={300}
            centerValue="$100K"
            centerLabel="Revenue"
            valueFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
        />
    ),
};

export const ActivityGaugeDefault: StoryObj<typeof ActivityGauge> = {
    render: () => <ActivityGauge value={75} label="Progress" />,
};

export const ActivityGaugeSizes: StoryObj<typeof ActivityGauge> = {
    render: () => (
        <div className="flex items-end gap-8">
            <ActivityGauge value={65} size="sm" label="Small" />
            <ActivityGauge value={75} size="md" label="Medium" />
            <ActivityGauge value={85} size="lg" label="Large" />
        </div>
    ),
};

export const ActivityGaugeColors: StoryObj<typeof ActivityGauge> = {
    render: () => (
        <div className="flex items-end gap-8">
            <ActivityGauge value={75} color="brand" label="Brand" />
            <ActivityGauge value={90} color="success" label="Success" />
            <ActivityGauge value={45} color="warning" label="Warning" />
            <ActivityGauge value={25} color="error" label="Error" />
        </div>
    ),
};

export const ActivityGaugeGroupExample: StoryObj<typeof ActivityGaugeGroup> = {
    render: () => (
        <ActivityGaugeGroup
            gauges={[
                { value: 85, label: "CPU Usage", color: "brand" },
                { value: 62, label: "Memory", color: "success" },
                { value: 91, label: "Storage", color: "warning" },
                { value: 45, label: "Network", color: "brand" },
            ]}
            size="sm"
        />
    ),
};

export const SemiCircleGaugeExample: StoryObj<typeof SemiCircleGauge> = {
    render: () => (
        <div className="flex gap-8">
            <SemiCircleGauge value={75} label="Performance" color="brand" />
            <SemiCircleGauge value={90} label="Health" color="success" />
            <SemiCircleGauge value={45} label="Risk" color="warning" />
        </div>
    ),
};

export const AllChartVariants: StoryObj = {
    render: () => (
        <div className="space-y-12">
            <div>
                <h3 className="mb-4 text-lg font-semibold text-fg-primary">Pie Charts</h3>
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-xl border border-border-secondary bg-bg-primary p-6">
                        <h4 className="mb-4 text-sm font-medium text-fg-tertiary">Basic Pie Chart</h4>
                        <PieChart data={sampleData} height={250} />
                    </div>
                    <div className="rounded-xl border border-border-secondary bg-bg-primary p-6">
                        <h4 className="mb-4 text-sm font-medium text-fg-tertiary">Donut Chart</h4>
                        <DonutChart
                            data={sampleData}
                            height={250}
                            centerValue="1,000"
                            centerLabel="Total"
                        />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mb-4 text-lg font-semibold text-fg-primary">Activity Gauges</h3>
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-6">
                    <div className="flex flex-wrap items-end justify-center gap-8">
                        <ActivityGauge value={85} size="lg" label="Overall Score" color="brand" />
                        <ActivityGauge value={92} size="md" label="Performance" color="success" />
                        <ActivityGauge value={67} size="md" label="Efficiency" color="warning" />
                        <ActivityGauge value={45} size="md" label="Risk Level" color="error" />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mb-4 text-lg font-semibold text-fg-primary">Semi-Circle Gauges</h3>
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-6">
                    <div className="flex flex-wrap items-end justify-center gap-8">
                        <SemiCircleGauge value={78} label="CPU" color="brand" />
                        <SemiCircleGauge value={45} label="Memory" color="success" />
                        <SemiCircleGauge value={92} label="Disk" color="warning" />
                    </div>
                </div>
            </div>
        </div>
    ),
};

