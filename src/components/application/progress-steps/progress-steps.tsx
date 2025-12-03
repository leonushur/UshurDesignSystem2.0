import { Check } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

export interface Step {
    /** Step label */
    label: string;
    /** Step description */
    description?: string;
}

export interface ProgressStepsProps {
    /** Array of steps */
    steps: Step[];
    /** Current active step (0-indexed) */
    currentStep: number;
    /** Orientation of steps */
    orientation?: "horizontal" | "vertical";
    /** Size variant */
    size?: "sm" | "md";
    /** Callback when step is clicked */
    onStepClick?: (step: number) => void;
    /** Additional class name */
    className?: string;
}

export const ProgressSteps = ({
    steps,
    currentStep,
    orientation = "horizontal",
    size = "md",
    onStepClick,
    className,
}: ProgressStepsProps) => {
    const isHorizontal = orientation === "horizontal";
    const isSmall = size === "sm";

    return (
        <nav aria-label="Progress" className={className}>
            <ol
                className={cx(
                    "flex",
                    isHorizontal ? "items-center" : "flex-col"
                )}
            >
                {steps.map((step, index) => {
                    const isCompleted = index < currentStep;
                    const isCurrent = index === currentStep;
                    const isClickable = onStepClick && (isCompleted || isCurrent);

                    return (
                        <li
                            key={index}
                            className={cx(
                                "relative flex",
                                isHorizontal
                                    ? index < steps.length - 1 ? "flex-1" : ""
                                    : "pb-8 last:pb-0"
                            )}
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div
                                    className={cx(
                                        "absolute",
                                        isHorizontal
                                            ? cx(
                                                "top-1/2 left-0 right-0 -translate-y-1/2",
                                                isSmall ? "ml-6 mr-2 h-0.5" : "ml-8 mr-3 h-0.5"
                                              )
                                            : cx(
                                                "left-3 top-6 w-0.5",
                                                isSmall ? "bottom-2" : "bottom-2"
                                              ),
                                        isCompleted ? "bg-bg-brand-solid" : "bg-border-secondary"
                                    )}
                                />
                            )}

                            {/* Step indicator */}
                            <button
                                type="button"
                                onClick={() => isClickable && onStepClick?.(index)}
                                disabled={!isClickable}
                                className={cx(
                                    "relative z-10 flex items-center gap-3",
                                    isClickable && "cursor-pointer"
                                )}
                            >
                                <div
                                    className={cx(
                                        "flex items-center justify-center rounded-full border-2 transition-colors",
                                        isSmall ? "size-6 text-xs" : "size-8 text-sm",
                                        isCompleted
                                            ? "border-bg-brand-solid bg-bg-brand-solid text-white"
                                            : isCurrent
                                            ? "border-border-brand bg-bg-primary text-fg-brand-primary"
                                            : "border-border-secondary bg-bg-primary text-fg-quaternary"
                                    )}
                                >
                                    {isCompleted ? (
                                        <Check className={isSmall ? "size-3" : "size-4"} />
                                    ) : (
                                        <span className="font-medium">{index + 1}</span>
                                    )}
                                </div>

                                <div
                                    className={cx(
                                        "flex flex-col",
                                        isHorizontal && "hidden sm:flex"
                                    )}
                                >
                                    <span
                                        className={cx(
                                            "font-medium",
                                            isSmall ? "text-xs" : "text-sm",
                                            isCurrent ? "text-fg-brand-secondary" : "text-fg-primary"
                                        )}
                                    >
                                        {step.label}
                                    </span>
                                    {step.description && (
                                        <span
                                            className={cx(
                                                "text-fg-tertiary",
                                                isSmall ? "text-xs" : "text-sm"
                                            )}
                                        >
                                            {step.description}
                                        </span>
                                    )}
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export interface ProgressStepsSimpleProps {
    /** Total number of steps */
    totalSteps: number;
    /** Current step (1-indexed for display) */
    currentStep: number;
    /** Additional class name */
    className?: string;
}

export const ProgressStepsSimple = ({
    totalSteps,
    currentStep,
    className,
}: ProgressStepsSimpleProps) => {
    return (
        <div className={cx("flex items-center gap-2", className)}>
            {Array.from({ length: totalSteps }, (_, index) => {
                const stepNumber = index + 1;
                const isCompleted = stepNumber < currentStep;
                const isCurrent = stepNumber === currentStep;

                return (
                    <div
                        key={index}
                        className={cx(
                            "h-2 flex-1 rounded-full transition-colors",
                            isCompleted
                                ? "bg-bg-brand-solid"
                                : isCurrent
                                ? "bg-bg-brand-solid"
                                : "bg-border-secondary"
                        )}
                    />
                );
            })}
        </div>
    );
};

export interface ProgressStepsDotProps {
    /** Total number of steps */
    totalSteps: number;
    /** Current step (1-indexed) */
    currentStep: number;
    /** Callback when dot is clicked */
    onStepClick?: (step: number) => void;
    /** Additional class name */
    className?: string;
}

export const ProgressStepsDot = ({
    totalSteps,
    currentStep,
    onStepClick,
    className,
}: ProgressStepsDotProps) => {
    return (
        <div className={cx("flex items-center justify-center gap-2", className)}>
            {Array.from({ length: totalSteps }, (_, index) => {
                const stepNumber = index + 1;
                const isCompleted = stepNumber < currentStep;
                const isCurrent = stepNumber === currentStep;

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => onStepClick?.(stepNumber)}
                        disabled={!onStepClick}
                        className={cx(
                            "rounded-full transition-all",
                            isCurrent
                                ? "size-2.5 bg-bg-brand-solid"
                                : isCompleted
                                ? "size-2 bg-bg-brand-solid"
                                : "size-2 bg-border-secondary",
                            onStepClick && "cursor-pointer hover:bg-bg-brand-solid_hover"
                        )}
                        aria-label={`Step ${stepNumber}`}
                        aria-current={isCurrent ? "step" : undefined}
                    />
                );
            })}
        </div>
    );
};

