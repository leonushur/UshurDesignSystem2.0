import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "./charts-base";
import type { Props as RadarProps } from "recharts/types/polar/Radar";

export interface RadarChartDataPoint {
    /** The category/subject name */
    subject: string;
    /** The value for this category */
    value: number;
    /** Full mark (optional, for percentage calculations) */
    fullMark?: number;
}

export interface RadarChartSeries {
    /** Unique identifier for the series */
    dataKey: string;
    /** Display name for the series */
    name: string;
    /** Color for this series (CSS color or Tailwind class) */
    stroke?: string;
    /** Fill color for this series */
    fill?: string;
    /** Opacity of the fill */
    fillOpacity?: number;
}

export interface RadarChartProps {
    /** Data array for the radar chart */
    data: RadarChartDataPoint[];
    /** Series to display (can have multiple series for comparison) */
    series?: RadarChartSeries[];
    /** Single data key (for simple single-series charts) */
    dataKey?: string;
    /** Whether to show the legend */
    showLegend?: boolean;
    /** Whether to show the tooltip */
    showTooltip?: boolean;
    /** Whether to show the grid */
    showGrid?: boolean;
    /** Height of the chart */
    height?: number;
    /** Custom className */
    className?: string;
    /** Custom stroke color for single series */
    stroke?: string;
    /** Custom fill color for single series */
    fill?: string;
    /** Fill opacity */
    fillOpacity?: number;
}

const defaultColors = [
    "hsl(var(--color-utility-brand-600))",
    "hsl(var(--color-utility-purple-600))",
    "hsl(var(--color-utility-pink-600))",
    "hsl(var(--color-utility-orange-600))",
    "hsl(var(--color-utility-cyan-600))",
];

export const RadarChartComponent = ({
    data,
    series,
    dataKey = "value",
    showLegend = true,
    showTooltip = true,
    showGrid = true,
    height = 400,
    className,
    stroke = defaultColors[0],
    fill = defaultColors[0],
    fillOpacity = 0.25,
}: RadarChartProps) => {
    // If series are provided, use them; otherwise create a single series from dataKey
    const chartSeries: RadarChartSeries[] = series || [
        {
            dataKey,
            name: dataKey,
            stroke,
            fill,
            fillOpacity,
        },
    ];

    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height={height}>
                <RechartsRadarChart data={data}>
                    {showGrid && (
                        <PolarGrid
                            stroke="hsl(var(--color-border-secondary))"
                            strokeDasharray="3 3"
                        />
                    )}
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                            fill: "hsl(var(--color-fg-tertiary))",
                            fontSize: 12,
                        }}
                    />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, "auto"]}
                        tick={{
                            fill: "hsl(var(--color-fg-quaternary))",
                            fontSize: 11,
                        }}
                    />
                    {chartSeries.map((s, index) => {
                        const seriesStroke = s.stroke || defaultColors[index % defaultColors.length];
                        const seriesFill = s.fill || defaultColors[index % defaultColors.length];

                        return (
                            <Radar
                                key={s.dataKey}
                                name={s.name}
                                dataKey={s.dataKey}
                                stroke={seriesStroke}
                                fill={seriesFill}
                                fillOpacity={s.fillOpacity ?? 0.25}
                                strokeWidth={2}
                            />
                        );
                    })}
                    {showTooltip && (
                        <Tooltip
                            content={(props) => <ChartTooltipContent {...props} />}
                            cursor={{ strokeDasharray: "3 3" }}
                        />
                    )}
                    {showLegend && chartSeries.length > 1 && (
                        <Legend
                            content={(props) => <ChartLegendContent {...props} />}
                            verticalAlign="bottom"
                            height={36}
                        />
                    )}
                </RechartsRadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export { RadarChartComponent as RadarChart };
