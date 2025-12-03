import { Bar, BarChart as RechartsBarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Cell } from "recharts";
import { cx } from "@/utils/cx";
import { ChartLegendContent, ChartTooltipContent, selectEvenlySpacedItems } from "./charts-base";

export interface BarChartDataPoint {
    [key: string]: string | number;
}

export interface BarChartSeries {
    /** The data key for this bar series */
    dataKey: string;
    /** Display name for the legend */
    name?: string;
    /** Color for the bars (uses brand color by default) */
    color?: string;
    /** Custom class name for styling */
    className?: string;
    /** Stack ID for stacked bars */
    stackId?: string;
    /** Border radius for bars */
    radius?: number | [number, number, number, number];
}

export interface BarChartProps {
    /** Chart data array */
    data: BarChartDataPoint[];
    /** Bar series configuration */
    series: BarChartSeries[];
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
    /** Bar size (width) */
    barSize?: number;
    /** Gap between bar groups */
    barGap?: number;
    /** Bar layout direction */
    layout?: "horizontal" | "vertical";
    /** Additional class name */
    className?: string;
}

const DEFAULT_COLORS = [
    "var(--color-utility-brand-600)",
    "var(--color-utility-brand-200)",
    "var(--color-utility-success-500)",
    "var(--color-utility-warning-500)",
    "var(--color-utility-error-500)",
    "var(--color-utility-indigo-500)",
];

export const BarChart = ({
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
    barSize,
    barGap = 4,
    layout = "horizontal",
    className,
}: BarChartProps) => {
    const xAxisTicks = selectEvenlySpacedItems(
        data.map((d) => d[xAxisKey]),
        xAxisTickCount
    );

    const isVertical = layout === "vertical";

    return (
        <div className={cx("w-full", className)}>
            <ResponsiveContainer width="100%" height={height}>
                <RechartsBarChart
                    data={data}
                    layout={layout}
                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    barGap={barGap}
                >
                    {showGrid && (
                        <CartesianGrid
                            strokeDasharray="0"
                            vertical={isVertical}
                            horizontal={!isVertical}
                            className="stroke-border-secondary"
                        />
                    )}
                    {showXAxis && (
                        <XAxis
                            dataKey={isVertical ? undefined : xAxisKey}
                            type={isVertical ? "number" : "category"}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            className="text-fg-quaternary"
                            ticks={isVertical ? undefined : (xAxisTicks as string[])}
                            dy={10}
                            tickFormatter={isVertical ? yAxisFormatter : undefined}
                        />
                    )}
                    {showYAxis && (
                        <YAxis
                            dataKey={isVertical ? xAxisKey : undefined}
                            type={isVertical ? "category" : "number"}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            className="text-fg-quaternary"
                            tickFormatter={isVertical ? undefined : yAxisFormatter}
                            dx={-10}
                            width={isVertical ? 80 : 60}
                        />
                    )}
                    {showTooltip && (
                        <Tooltip
                            content={<ChartTooltipContent />}
                            formatter={tooltipFormatter ? (value, name) => tooltipFormatter(value as number, name as string) : undefined}
                            cursor={{ fill: "var(--color-bg-secondary)", opacity: 0.5 }}
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
                        <Bar
                            key={s.dataKey}
                            dataKey={s.dataKey}
                            name={s.name ?? s.dataKey}
                            stackId={s.stackId}
                            barSize={barSize}
                            radius={s.radius ?? [4, 4, 0, 0]}
                            className={s.className}
                        >
                            {data.map((_, dataIndex) => (
                                <Cell
                                    key={dataIndex}
                                    fill={s.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
                                />
                            ))}
                        </Bar>
                    ))}
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    );
};

