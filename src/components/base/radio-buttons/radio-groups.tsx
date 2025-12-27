import { type ReactNode, createContext, useContext } from "react";
import {
    Radio as AriaRadio,
    RadioGroup as AriaRadioGroup,
    type RadioGroupProps as AriaRadioGroupProps,
    type RadioProps as AriaRadioProps,
} from "react-aria-components";
import { cx } from "@/utils/cx";
import { Check } from "@untitledui-pro/icons/line";

// Context for card radio groups
interface RadioCardGroupContextType {
    size?: "sm" | "md" | "lg";
    variant?: "outlined" | "filled";
}

const RadioCardGroupContext = createContext<RadioCardGroupContextType | null>(null);

// ============================================
// Radio Card - Individual selectable card
// ============================================

export interface RadioCardProps extends AriaRadioProps {
    /** Card title */
    title: ReactNode;
    /** Card description */
    description?: ReactNode;
    /** Icon or image to display */
    icon?: ReactNode;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Visual variant */
    variant?: "outlined" | "filled";
    /** Additional class name */
    className?: string;
}

export const RadioCard = ({
    title,
    description,
    icon,
    size = "md",
    variant = "outlined",
    className,
    ...props
}: RadioCardProps) => {
    const context = useContext(RadioCardGroupContext);
    const resolvedSize = context?.size ?? size;
    const resolvedVariant = context?.variant ?? variant;

    const sizeStyles = {
        sm: {
            card: "p-3 gap-3",
            icon: "size-8",
            title: "text-sm font-medium",
            description: "text-xs",
            checkIcon: "size-4",
        },
        md: {
            card: "p-4 gap-4",
            icon: "size-10",
            title: "text-md font-medium",
            description: "text-sm",
            checkIcon: "size-5",
        },
        lg: {
            card: "p-5 gap-5",
            icon: "size-12",
            title: "text-lg font-semibold",
            description: "text-md",
            checkIcon: "size-6",
        },
    };

    return (
        <AriaRadio
            {...props}
            className={(renderProps) =>
                cx(
                    "group relative cursor-pointer rounded-xl border-2 transition-all duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
                    sizeStyles[resolvedSize].card,
                    // Outlined variant
                    resolvedVariant === "outlined" && [
                        "border-border-primary bg-bg-primary",
                        "hover:border-border-brand hover:bg-bg-primary_hover",
                        renderProps.isSelected && "border-border-brand bg-bg-brand_secondary",
                    ],
                    // Filled variant
                    resolvedVariant === "filled" && [
                        "border-transparent bg-bg-secondary",
                        "hover:bg-bg-tertiary",
                        renderProps.isSelected && "border-border-brand bg-bg-brand_secondary",
                    ],
                    // Disabled state
                    renderProps.isDisabled && "cursor-not-allowed opacity-50",
                    className,
                )
            }
        >
            {({ isSelected, isDisabled }) => (
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    {icon && (
                        <div
                            className={cx(
                                "flex items-center justify-center rounded-lg bg-bg-secondary text-fg-quaternary",
                                sizeStyles[resolvedSize].icon,
                                isSelected && "bg-bg-brand-solid text-fg-white",
                            )}
                        >
                            {icon}
                        </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className={cx("text-fg-primary", sizeStyles[resolvedSize].title)}>
                            {title}
                        </div>
                        {description && (
                            <div className={cx("mt-1 text-fg-tertiary", sizeStyles[resolvedSize].description)}>
                                {description}
                            </div>
                        )}
                    </div>

                    {/* Selection indicator */}
                    <div
                        className={cx(
                            "flex items-center justify-center rounded-full border-2 transition-all",
                            sizeStyles[resolvedSize].checkIcon,
                            isSelected
                                ? "border-border-brand bg-bg-brand-solid text-fg-white"
                                : "border-border-primary bg-bg-primary",
                        )}
                    >
                        {isSelected && <Check className="size-3" strokeWidth={3} />}
                    </div>
                </div>
            )}
        </AriaRadio>
    );
};
RadioCard.displayName = "RadioCard";

// ============================================
// Radio Card Group - Container for radio cards
// ============================================

export interface RadioCardGroupProps extends AriaRadioGroupProps {
    /** Radio card children */
    children: ReactNode;
    /** Size variant for all cards */
    size?: "sm" | "md" | "lg";
    /** Visual variant for all cards */
    variant?: "outlined" | "filled";
    /** Layout direction */
    orientation?: "horizontal" | "vertical";
    /** Number of columns (for grid layout) */
    columns?: 1 | 2 | 3 | 4;
    /** Additional class name */
    className?: string;
}

export const RadioCardGroup = ({
    children,
    size = "md",
    variant = "outlined",
    orientation = "vertical",
    columns,
    className,
    ...props
}: RadioCardGroupProps) => {
    const layoutStyles = columns
        ? {
              1: "grid-cols-1",
              2: "grid-cols-1 sm:grid-cols-2",
              3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          }[columns]
        : orientation === "horizontal"
          ? "flex flex-row flex-wrap"
          : "flex flex-col";

    return (
        <RadioCardGroupContext.Provider value={{ size, variant }}>
            <AriaRadioGroup
                {...props}
                className={cx(
                    columns ? "grid gap-4" : "gap-4",
                    layoutStyles,
                    className,
                )}
            >
                {children}
            </AriaRadioGroup>
        </RadioCardGroupContext.Provider>
    );
};
RadioCardGroup.displayName = "RadioCardGroup";

// ============================================
// Radio Tile - Simpler card variant (icon-focused)
// ============================================

export interface RadioTileProps extends AriaRadioProps {
    /** Tile label */
    label: ReactNode;
    /** Icon to display */
    icon: ReactNode;
    /** Additional class name */
    className?: string;
}

export const RadioTile = ({ label, icon, className, ...props }: RadioTileProps) => {
    return (
        <AriaRadio
            {...props}
            className={(renderProps) =>
                cx(
                    "group flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 cursor-pointer transition-all duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
                    "border-border-primary bg-bg-primary",
                    "hover:border-border-brand hover:bg-bg-primary_hover",
                    renderProps.isSelected && "border-border-brand bg-bg-brand_secondary",
                    renderProps.isDisabled && "cursor-not-allowed opacity-50",
                    className,
                )
            }
        >
            {({ isSelected }) => (
                <>
                    <div
                        className={cx(
                            "flex size-12 items-center justify-center rounded-lg bg-bg-secondary text-fg-quaternary transition-colors",
                            isSelected && "bg-bg-brand-solid text-fg-white",
                        )}
                    >
                        {icon}
                    </div>
                    <span className="text-sm font-medium text-fg-primary">{label}</span>
                </>
            )}
        </AriaRadio>
    );
};
RadioTile.displayName = "RadioTile";

// ============================================
// Radio List Item - Minimal list-style option
// ============================================

export interface RadioListItemProps extends AriaRadioProps {
    /** Item label */
    label: ReactNode;
    /** Item description */
    description?: ReactNode;
    /** Trailing content (e.g., price, badge) */
    trailing?: ReactNode;
    /** Additional class name */
    className?: string;
}

export const RadioListItem = ({ label, description, trailing, className, ...props }: RadioListItemProps) => {
    return (
        <AriaRadio
            {...props}
            className={(renderProps) =>
                cx(
                    "group flex items-center justify-between gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
                    "hover:bg-bg-secondary",
                    renderProps.isSelected && "bg-bg-brand_secondary",
                    renderProps.isDisabled && "cursor-not-allowed opacity-50",
                    className,
                )
            }
        >
            {({ isSelected }) => (
                <>
                    {/* Radio circle */}
                    <div
                        className={cx(
                            "flex size-5 items-center justify-center rounded-full border-2 transition-all",
                            isSelected
                                ? "border-border-brand bg-bg-brand-solid"
                                : "border-border-primary bg-bg-primary",
                        )}
                    >
                        {isSelected && <div className="size-2 rounded-full bg-fg-white" />}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-fg-primary">{label}</div>
                        {description && (
                            <div className="mt-0.5 text-sm text-fg-tertiary">{description}</div>
                        )}
                    </div>

                    {/* Trailing */}
                    {trailing && <div className="text-sm text-fg-tertiary">{trailing}</div>}
                </>
            )}
        </AriaRadio>
    );
};
RadioListItem.displayName = "RadioListItem";


