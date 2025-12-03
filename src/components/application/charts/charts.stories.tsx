import type { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "./line-chart";
import { BarChart } from "./bar-chart";

// Sample data for charts
const monthlyData = [
    { month: "Jan", revenue: 4000, expenses: 2400, profit: 1600 },
    { month: "Feb", revenue: 3000, expenses: 1398, profit: 1602 },
    { month: "Mar", revenue: 2000, expenses: 9800, profit: -7800 },
    { month: "Apr", revenue: 2780, expenses: 3908, profit: -1128 },
    { month: "May", revenue: 1890, expenses: 4800, profit: -2910 },
    { month: "Jun", revenue: 2390, expenses: 3800, profit: -1410 },
    { month: "Jul", revenue: 3490, expenses: 4300, profit: -810 },
    { month: "Aug", revenue: 4200, expenses: 2100, profit: 2100 },
    { month: "Sep", revenue: 5100, expenses: 2900, profit: 2200 },
    { month: "Oct", revenue: 4800, expenses: 3200, profit: 1600 },
    { month: "Nov", revenue: 5200, expenses: 3100, profit: 2100 },
    { month: "Dec", revenue: 6100, expenses: 3500, profit: 2600 },
];

const weeklyData = [
    { day: "Mon", users: 120, sessions: 340 },
    { day: "Tue", users: 150, sessions: 420 },
    { day: "Wed", users: 180, sessions: 510 },
    { day: "Thu", users: 165, sessions: 480 },
    { day: "Fri", users: 140, sessions: 390 },
    { day: "Sat", users: 90, sessions: 220 },
    { day: "Sun", users: 85, sessions: 200 },
];

const quarterlyData = [
    { quarter: "Q1", sales: 12000 },
    { quarter: "Q2", sales: 15000 },
    { quarter: "Q3", sales: 18000 },
    { quarter: "Q4", sales: 22000 },
];

const categoryData = [
    { category: "Electronics", value: 4500 },
    { category: "Clothing", value: 3200 },
    { category: "Food", value: 2800 },
    { category: "Books", value: 1200 },
    { category: "Other", value: 800 },
];

const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
const formatNumber = (value: number) => value.toLocaleString();

// Line Chart Stories
const lineChartMeta: Meta<typeof LineChart> = {
    title: "Application/Charts/Line Chart",
    component: LineChart,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default lineChartMeta;

type LineChartStory = StoryObj<typeof LineChart>;

export const LineChart01: LineChartStory = {
    name: "Line Chart 01 - Basic",
    args: {
        data: monthlyData,
        xAxisKey: "month",
        series: [{ dataKey: "revenue", name: "Revenue" }],
        height: 300,
    },
};

export const LineChart02: LineChartStory = {
    name: "Line Chart 02 - Multiple Lines",
    args: {
        data: monthlyData,
        xAxisKey: "month",
        series: [
            { dataKey: "revenue", name: "Revenue", className: "text-utility-brand-600" },
            { dataKey: "expenses", name: "Expenses", className: "text-utility-error-500" },
        ],
        height: 300,
        yAxisFormatter: formatCurrency,
        tooltipFormatter: formatCurrency,
    },
};

export const LineChart03: LineChartStory = {
    name: "Line Chart 03 - With Dots",
    args: {
        data: weeklyData,
        xAxisKey: "day",
        series: [
            { dataKey: "users", name: "Active Users", showDots: true, className: "text-utility-brand-600" },
            { dataKey: "sessions", name: "Sessions", showDots: true, className: "text-utility-success-500" },
        ],
        height: 300,
    },
};

export const LineChart04: LineChartStory = {
    name: "Line Chart 04 - Minimal",
    args: {
        data: monthlyData,
        xAxisKey: "month",
        series: [{ dataKey: "profit", name: "Profit", type: "natural" }],
        height: 250,
        showGrid: false,
        showYAxis: false,
        showLegend: false,
    },
};

export const LineChartStepType: LineChartStory = {
    name: "Line Chart - Step Type",
    args: {
        data: weeklyData,
        xAxisKey: "day",
        series: [{ dataKey: "users", name: "Users", type: "step" }],
        height: 300,
    },
};

// Bar Chart Stories - need separate meta for Storybook to recognize
export const BarChart01: StoryObj<typeof BarChart> = {
    name: "Bar Chart 01 - Basic",
    render: () => (
        <BarChart
            data={quarterlyData}
            xAxisKey="quarter"
            series={[{ dataKey: "sales", name: "Sales" }]}
            height={300}
            yAxisFormatter={formatCurrency}
            tooltipFormatter={formatCurrency}
        />
    ),
};

export const BarChart02: StoryObj<typeof BarChart> = {
    name: "Bar Chart 02 - Grouped Bars",
    render: () => (
        <BarChart
            data={monthlyData.slice(0, 6)}
            xAxisKey="month"
            series={[
                { dataKey: "revenue", name: "Revenue", color: "var(--color-utility-brand-600)" },
                { dataKey: "expenses", name: "Expenses", color: "var(--color-utility-brand-200)" },
            ]}
            height={300}
            yAxisFormatter={formatCurrency}
            tooltipFormatter={formatCurrency}
        />
    ),
};

export const BarChart03: StoryObj<typeof BarChart> = {
    name: "Bar Chart 03 - Stacked Bars",
    render: () => (
        <BarChart
            data={monthlyData.slice(0, 6)}
            xAxisKey="month"
            series={[
                { dataKey: "revenue", name: "Revenue", stackId: "a", color: "var(--color-utility-brand-600)" },
                { dataKey: "expenses", name: "Expenses", stackId: "a", color: "var(--color-utility-brand-200)" },
            ]}
            height={300}
            yAxisFormatter={formatCurrency}
            tooltipFormatter={formatCurrency}
        />
    ),
};

export const BarChartHorizontal: StoryObj<typeof BarChart> = {
    name: "Bar Chart - Horizontal",
    render: () => (
        <BarChart
            data={categoryData}
            xAxisKey="category"
            series={[{ dataKey: "value", name: "Value", radius: [0, 4, 4, 0] }]}
            height={300}
            layout="vertical"
            yAxisFormatter={formatCurrency}
            tooltipFormatter={formatCurrency}
        />
    ),
};

export const BarChartMinimal: StoryObj<typeof BarChart> = {
    name: "Bar Chart - Minimal",
    render: () => (
        <BarChart
            data={quarterlyData}
            xAxisKey="quarter"
            series={[{ dataKey: "sales", name: "Sales" }]}
            height={200}
            showGrid={false}
            showYAxis={false}
            showLegend={false}
        />
    ),
};

// Combined chart examples
export const DashboardCharts: StoryObj = {
    name: "Dashboard Example",
    render: () => (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border-secondary bg-bg-primary p-6">
                <h3 className="mb-4 text-lg font-semibold text-fg-primary">Revenue Trend</h3>
                <LineChart
                    data={monthlyData}
                    xAxisKey="month"
                    series={[
                        { dataKey: "revenue", name: "Revenue", className: "text-utility-brand-600" },
                    ]}
                    height={250}
                    yAxisFormatter={formatCurrency}
                    tooltipFormatter={formatCurrency}
                    showLegend={false}
                />
            </div>
            <div className="rounded-xl border border-border-secondary bg-bg-primary p-6">
                <h3 className="mb-4 text-lg font-semibold text-fg-primary">Quarterly Sales</h3>
                <BarChart
                    data={quarterlyData}
                    xAxisKey="quarter"
                    series={[{ dataKey: "sales", name: "Sales" }]}
                    height={250}
                    yAxisFormatter={formatCurrency}
                    tooltipFormatter={formatCurrency}
                    showLegend={false}
                />
            </div>
        </div>
    ),
};

