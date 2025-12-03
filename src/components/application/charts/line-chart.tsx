import { CartesianGrid, Line, LineChart as RechartsLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { cx } from "@/utils/cx";
import { ChartActiveDot, ChartLegendContent, ChartTooltipContent, selectEvenlySpacedItems } from "./charts-base";

export interface LineChartDataPoint {
    [key: string]: string | number;
}

export interface LineChartSeries {
    /** The data key for this line series */
    dataKey: string;
    /** Display name for the legend */
    name?: string;
    /** Color for the line (uses brand color by default) */
    color?: string;
    /** Custom class name for styling */
    className?: string;
    /** Whether to show dots on data points */
    showDots?: boolean;
    /** Stroke width */
    strokeWidth?: number;
    /** Line type */
    type?: "linear" | "monotone" | "step" | "natural";
}

export interface LineChartProps {
    /** Chart data array */
    data: LineChartDataPoint[];
    /** Line series configuration */
    series: LineChartSeries[];
    /** Key in data for x-axis values */
    xAxisKey: string;
    /** Chart height */
    height?: number;
    /** Show grid lines */
    showGrid?: boolean;
    /** Show x-axis */
    showXAxis?: boolean;
    /** Show y-axis */
    showYAxis?: boolean;
    /** Show legend */
    showLegend?: boolean;
    /** Show tooltip on hover */
    showTooltip?: boolean;
    /** Number of x-axis ticks to show */
    xAxisTickCount?: number;
    /** Format function for tooltip values */
    tooltipFormatter?: (value: number, name: string) => string;
    /** Format function for y-axis values */
    yAxisFormatter?: (value: number) => string;
    /** Additional class name */
    className?: string;
}

const DEFAULT_COLORS = [
    "text-utility-brand-600",
    "text-utility-success-500",
    "text-utility-warning-500",
    "text-utility-error-500",
    "text-utility-indigo-500",
    "text-utility-purple-500",
];

export const LineChart = ({
    data,
    series,
    xAxisKey,
    height = 300,
    showGrid = true,
    showXAxis = true,
    showYAxis = true,
    showLegend = true,
    showTooltip = true,
    xAxisTickCount = 6,
    tooltipFormatter,
    yAxisFormatter,
    className,
}: LineChartProps) => {
    const xAxisTicks = selectEvenlySpacedItems(
        data.map((d) => d[xAxisKey]),
        xAxisTickCount
    );

    return (
        <div className={cx("w-full", className)}>
            <ResponsiveContainer width="100%" height={height}>
                <RechartsLineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    {showGrid && (
                        <CartesianGrid
                            strokeDasharray="0"
                            vertical={false}
                            className="stroke-border-secondary"
                        />
                    )}
                    {showXAxis && (
                        <XAxis
                            dataKey={xAxisKey}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            className="text-fg-quaternary"
                            ticks={xAxisTicks as string[]}
                            dy={10}
                        />
                    )}
                    {showYAxis && (
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            className="text-fg-quaternary"
                            tickFormatter={yAxisFormatter}
                            dx={-10}
                        />
                    )}
                    {showTooltip && (
                        <Tooltip
                            content={<ChartTooltipContent />}
                            formatter={tooltipFormatter ? (value, name) => tooltipFormatter(value as number, name as string) : undefined}
                            cursor={{ stroke: "var(--color-border-secondary)", strokeDasharray: "4" }}
                        />
                    )}
                    {showLegend && (
                        <Legend
                            content={<ChartLegendContent />}
                            verticalAlign="top"
                            align="left"
                            wrapperStyle={{ paddingBottom: 20 }}
                        />
                    )}
                    {series.map((s, index) => (
                        <Line
                            key={s.dataKey}
                            type={s.type ?? "monotone"}
                            dataKey={s.dataKey}
                            name={s.name ?? s.dataKey}
                            stroke="currentColor"
                            strokeWidth={s.strokeWidth ?? 2}
                            dot={s.showDots ?? false}
                            activeDot={<ChartActiveDot />}
                            className={s.className ?? s.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
                        />
                    ))}
                </RechartsLineChart>
            </ResponsiveContainer>
        </div>
    );
};

