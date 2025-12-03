import { cx } from "@/utils/cx";

export interface ActivityGaugeProps {
    /** Current value (0-100) */
    value: number;
    /** Maximum value */
    max?: number;
    /** Size of the gauge */
    size?: "sm" | "md" | "lg";
    /** Color variant */
    color?: "brand" | "success" | "warning" | "error";
    /** Show value text */
    showValue?: boolean;
    /** Label text */
    label?: string;
    /** Format function for value display */
    valueFormatter?: (value: number, max: number) => string;
    /** Additional class name */
    className?: string;
}

const sizeMap = {
    sm: { size: 80, strokeWidth: 6, fontSize: "text-lg" },
    md: { size: 120, strokeWidth: 8, fontSize: "text-2xl" },
    lg: { size: 160, strokeWidth: 10, fontSize: "text-3xl" },
};

const colorMap = {
    brand: "stroke-utility-brand-600",
    success: "stroke-utility-success-500",
    warning: "stroke-utility-warning-500",
    error: "stroke-utility-error-500",
};

export const ActivityGauge = ({
    value,
    max = 100,
    size = "md",
    color = "brand",
    showValue = true,
    label,
    valueFormatter,
    className,
}: ActivityGaugeProps) => {
    const { size: svgSize, strokeWidth, fontSize } = sizeMap[size];
    const radius = (svgSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(Math.max(value / max, 0), 1);
    const strokeDashoffset = circumference * (1 - percentage);

    const displayValue = valueFormatter
        ? valueFormatter(value, max)
        : `${Math.round(percentage * 100)}%`;

    return (
        <div className={cx("inline-flex flex-col items-center gap-2", className)}>
            <div className="relative" style={{ width: svgSize, height: svgSize }}>
                <svg
                    width={svgSize}
                    height={svgSize}
                    viewBox={`0 0 ${svgSize} ${svgSize}`}
                    className="-rotate-90"
                >
                    {/* Background circle */}
                    <circle
                        cx={svgSize / 2}
                        cy={svgSize / 2}
                        r={radius}
                        fill="none"
                        className="stroke-border-secondary"
                        strokeWidth={strokeWidth}
                    />
                    {/* Progress circle */}
                    <circle
                        cx={svgSize / 2}
                        cy={svgSize / 2}
                        r={radius}
                        fill="none"
                        className={colorMap[color]}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
                    />
                </svg>

                {showValue && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={cx("font-semibold text-fg-primary", fontSize)}>
                            {displayValue}
                        </span>
                    </div>
                )}
            </div>

            {label && <span className="text-sm text-fg-tertiary">{label}</span>}
        </div>
    );
};

export interface ActivityGaugeGroupProps {
    /** Array of gauge configurations */
    gauges: Array<{
        value: number;
        max?: number;
        label: string;
        color?: ActivityGaugeProps["color"];
    }>;
    /** Size for all gauges */
    size?: ActivityGaugeProps["size"];
    /** Additional class name */
    className?: string;
}

export const ActivityGaugeGroup = ({
    gauges,
    size = "sm",
    className,
}: ActivityGaugeGroupProps) => {
    return (
        <div className={cx("flex flex-wrap items-end justify-center gap-6", className)}>
            {gauges.map((gauge, index) => (
                <ActivityGauge
                    key={index}
                    value={gauge.value}
                    max={gauge.max}
                    label={gauge.label}
                    color={gauge.color}
                    size={size}
                />
            ))}
        </div>
    );
};

export interface SemiCircleGaugeProps {
    /** Current value (0-100) */
    value: number;
    /** Maximum value */
    max?: number;
    /** Label text */
    label?: string;
    /** Color variant */
    color?: "brand" | "success" | "warning" | "error";
    /** Additional class name */
    className?: string;
}

export const SemiCircleGauge = ({
    value,
    max = 100,
    label,
    color = "brand",
    className,
}: SemiCircleGaugeProps) => {
    const percentage = Math.min(Math.max(value / max, 0), 1);
    const angle = percentage * 180;

    return (
        <div className={cx("inline-flex flex-col items-center", className)}>
            <div className="relative" style={{ width: 160, height: 80 }}>
                <svg width="160" height="80" viewBox="0 0 160 80" className="overflow-visible">
                    {/* Background arc */}
                    <path
                        d="M 10 80 A 70 70 0 0 1 150 80"
                        fill="none"
                        className="stroke-border-secondary"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                    {/* Progress arc */}
                    <path
                        d="M 10 80 A 70 70 0 0 1 150 80"
                        fill="none"
                        className={colorMap[color]}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={`${(angle / 180) * 220} 220`}
                        style={{ transition: "stroke-dasharray 0.5s ease-in-out" }}
                    />
                </svg>

                <div className="absolute inset-0 flex items-end justify-center pb-1">
                    <span className="text-2xl font-semibold text-fg-primary">
                        {Math.round(percentage * 100)}%
                    </span>
                </div>
            </div>

            {label && <span className="mt-2 text-sm text-fg-tertiary">{label}</span>}
        </div>
    );
};

