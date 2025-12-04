import type { Meta, StoryObj } from "@storybook/react";
import { RadarChart } from "./radar-chart";

const meta: Meta<typeof RadarChart> = {
    title: "Application/Charts/Radar Chart",
    component: RadarChart,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadarChart>;

const skillsData = [
    { subject: "Communication", value: 85, fullMark: 100 },
    { subject: "Problem Solving", value: 92, fullMark: 100 },
    { subject: "Teamwork", value: 78, fullMark: 100 },
    { subject: "Leadership", value: 88, fullMark: 100 },
    { subject: "Technical Skills", value: 95, fullMark: 100 },
    { subject: "Creativity", value: 82, fullMark: 100 },
];

const performanceData = [
    { subject: "Speed", value: 75, fullMark: 100 },
    { subject: "Accuracy", value: 92, fullMark: 100 },
    { subject: "Efficiency", value: 88, fullMark: 100 },
    { subject: "Quality", value: 95, fullMark: 100 },
    { subject: "Consistency", value: 85, fullMark: 100 },
];

const comparisonData = [
    { subject: "Marketing", team1: 85, team2: 70 },
    { subject: "Sales", team1: 90, team2: 85 },
    { subject: "Development", team1: 95, team2: 92 },
    { subject: "Design", team1: 80, team2: 88 },
    { subject: "Support", team1: 88, team2: 82 },
    { subject: "Operations", team1: 82, team2: 90 },
];

export const Default: Story = {
    args: {
        data: skillsData,
        dataKey: "value",
        showLegend: false,
        showTooltip: true,
        showGrid: true,
        height: 400,
    },
};

export const Performance: Story = {
    args: {
        data: performanceData,
        dataKey: "value",
        stroke: "hsl(var(--color-utility-purple-600))",
        fill: "hsl(var(--color-utility-purple-600))",
        fillOpacity: 0.3,
        showLegend: false,
        height: 350,
    },
};

export const Comparison: Story = {
    args: {
        data: comparisonData,
        series: [
            {
                dataKey: "team1",
                name: "Team A",
                stroke: "hsl(var(--color-utility-brand-600))",
                fill: "hsl(var(--color-utility-brand-600))",
                fillOpacity: 0.25,
            },
            {
                dataKey: "team2",
                name: "Team B",
                stroke: "hsl(var(--color-utility-purple-600))",
                fill: "hsl(var(--color-utility-purple-600))",
                fillOpacity: 0.25,
            },
        ],
        showLegend: true,
        showTooltip: true,
        height: 400,
    },
};

export const WithoutGrid: Story = {
    args: {
        data: skillsData,
        dataKey: "value",
        showGrid: false,
        showLegend: false,
        height: 350,
    },
};

export const SmallSize: Story = {
    args: {
        data: performanceData,
        dataKey: "value",
        height: 250,
        showLegend: false,
    },
};

const productFeaturesData = [
    { subject: "Usability", product1: 88, product2: 75, product3: 82 },
    { subject: "Performance", product1: 92, product2: 88, product3: 90 },
    { subject: "Features", product1: 85, product2: 92, product3: 78 },
    { subject: "Price", product1: 70, product2: 85, product3: 95 },
    { subject: "Support", product1: 90, product2: 80, product3: 88 },
    { subject: "Reliability", product1: 95, product2: 90, product3: 85 },
];

export const MultipleProducts: Story = {
    args: {
        data: productFeaturesData,
        series: [
            {
                dataKey: "product1",
                name: "Product A",
                stroke: "hsl(var(--color-utility-brand-600))",
                fill: "hsl(var(--color-utility-brand-600))",
                fillOpacity: 0.2,
            },
            {
                dataKey: "product2",
                name: "Product B",
                stroke: "hsl(var(--color-utility-purple-600))",
                fill: "hsl(var(--color-utility-purple-600))",
                fillOpacity: 0.2,
            },
            {
                dataKey: "product3",
                name: "Product C",
                stroke: "hsl(var(--color-utility-orange-600))",
                fill: "hsl(var(--color-utility-orange-600))",
                fillOpacity: 0.2,
            },
        ],
        showLegend: true,
        height: 450,
    },
};
