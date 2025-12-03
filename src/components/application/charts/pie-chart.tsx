import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { cx } from "@/utils/cx";
import { ChartLegendContent, ChartTooltipContent } from "./charts-base";

export interface PieChartDataPoint {
    /** Name/label for the segment */
    name: string;
    /** Value for the segment */
    value: number;
    /** Optional custom color */
    color?: string;
}

export interface PieChartProps {
    /** Chart data */
    data: PieChartDataPoint[];
    /** Chart height */
    height?: number;
    /** Inner radius for donut chart (0 for pie) */
    innerRadius?: number;
    /** Outer radius */
    outerRadius?: number;
    /** Show labels on segments */
    showLabels?: boolean;
    /** Show legend */
    showLegend?: boolean;
    /** Show tooltip */
    showTooltip?: boolean;
    /** Legend position */
    legendPosition?: "top" | "bottom" | "left" | "right";
    /** Format function for values */
    valueFormatter?: (value: number) => string;
    /** Additional class name */
    className?: string;
}

const DEFAULT_COLORS = [
    "var(--color-utility-brand-600)",
    "var(--color-utility-brand-400)",
    "var(--color-utility-brand-200)",
    "var(--color-utility-success-500)",
    "var(--color-utility-warning-500)",
    "var(--color-utility-error-500)",
    "var(--color-utility-indigo-500)",
    "var(--color-utility-purple-500)",
];

export const PieChart = ({
    data,
    height = 300,
    innerRadius = 0,
    outerRadius = 80,
    showLabels = false,
    showLegend = true,
    showTooltip = true,
    legendPosition = "right",
    valueFormatter,
    className,
}: PieChartProps) => {
    const isDonut = innerRadius > 0;

    return (
        <div className={cx("w-full", className)}>
            <ResponsiveContainer width="100%" height={height}>
                <RechartsPieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        paddingAngle={isDonut ? 2 : 0}
                        dataKey="value"
                        nameKey="name"
                        label={showLabels ? ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%` : undefined}
                        labelLine={showLabels}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
                                className="stroke-bg-primary"
                                strokeWidth={2}
                            />
                        ))}
                    </Pie>
                    {showTooltip && (
                        <Tooltip
                            content={<ChartTooltipContent isPieChart />}
                            formatter={valueFormatter ? (value) => valueFormatter(value as number) : undefined}
                        />
                    )}
                    {showLegend && (
                        <Legend
                            content={<ChartLegendContent />}
                            verticalAlign={legendPosition === "top" || legendPosition === "bottom" ? legendPosition : "middle"}
                            align={legendPosition === "left" || legendPosition === "right" ? legendPosition : "center"}
                            layout={legendPosition === "left" || legendPosition === "right" ? "vertical" : "horizontal"}
                        />
                    )}
                </RechartsPieChart>
            </ResponsiveContainer>
        </div>
    );
};

export interface DonutChartProps extends Omit<PieChartProps, "innerRadius"> {
    /** Center label */
    centerLabel?: string;
    /** Center value */
    centerValue?: string;
}

export const DonutChart = ({
    data,
    height = 300,
    outerRadius = 80,
    centerLabel,
    centerValue,
    showLegend = true,
    showTooltip = true,
    legendPosition = "right",
    valueFormatter,
    className,
}: DonutChartProps) => {
    const innerRadius = outerRadius * 0.6;

    return (
        <div className={cx("relative w-full", className)}>
            <ResponsiveContainer width="100%" height={height}>
                <RechartsPieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
                                className="stroke-bg-primary"
                                strokeWidth={2}
                            />
                        ))}
                    </Pie>
                    {showTooltip && (
                        <Tooltip
                            content={<ChartTooltipContent isPieChart />}
                            formatter={valueFormatter ? (value) => valueFormatter(value as number) : undefined}
                        />
                    )}
                    {showLegend && (
                        <Legend
                            content={<ChartLegendContent />}
                            verticalAlign={legendPosition === "top" || legendPosition === "bottom" ? legendPosition : "middle"}
                            align={legendPosition === "left" || legendPosition === "right" ? legendPosition : "center"}
                            layout={legendPosition === "left" || legendPosition === "right" ? "vertical" : "horizontal"}
                        />
                    )}
                </RechartsPieChart>
            </ResponsiveContainer>

            {(centerLabel || centerValue) && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        {centerValue && (
                            <span className="text-2xl font-semibold text-fg-primary">{centerValue}</span>
                        )}
                        {centerLabel && (
                            <span className="text-sm text-fg-tertiary">{centerLabel}</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

