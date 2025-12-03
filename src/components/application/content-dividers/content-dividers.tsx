import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface DividerProps {
    /** Orientation */
    orientation?: "horizontal" | "vertical";
    /** Additional class name */
    className?: string;
}

export const Divider = ({ orientation = "horizontal", className }: DividerProps) => {
    return (
        <div
            className={cx(
                "bg-border-secondary",
                orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
                className
            )}
            role="separator"
            aria-orientation={orientation}
        />
    );
};

export interface DividerWithTextProps {
    /** Text content */
    children: ReactNode;
    /** Position of text */
    position?: "left" | "center" | "right";
    /** Additional class name */
    className?: string;
}

export const DividerWithText = ({
    children,
    position = "center",
    className,
}: DividerWithTextProps) => {
    return (
        <div className={cx("flex items-center gap-3", className)} role="separator">
            {position !== "left" && <div className="h-px flex-1 bg-border-secondary" />}
            <span className="text-sm text-fg-tertiary">{children}</span>
            {position !== "right" && <div className="h-px flex-1 bg-border-secondary" />}
        </div>
    );
};

export interface DividerWithButtonProps {
    /** Button content */
    children: ReactNode;
    /** Click handler */
    onClick?: () => void;
    /** Additional class name */
    className?: string;
}

export const DividerWithButton = ({
    children,
    onClick,
    className,
}: DividerWithButtonProps) => {
    return (
        <div className={cx("flex items-center gap-3", className)} role="separator">
            <div className="h-px flex-1 bg-border-secondary" />
            <button
                type="button"
                onClick={onClick}
                className="flex items-center gap-2 rounded-full border border-border-secondary bg-bg-primary px-3 py-1.5 text-sm font-medium text-fg-tertiary transition-colors hover:bg-bg-secondary hover:text-fg-secondary"
            >
                {children}
            </button>
            <div className="h-px flex-1 bg-border-secondary" />
        </div>
    );
};

export interface DividerWithIconProps {
    /** Icon element */
    icon: ReactNode;
    /** Additional class name */
    className?: string;
}

export const DividerWithIcon = ({ icon, className }: DividerWithIconProps) => {
    return (
        <div className={cx("flex items-center gap-3", className)} role="separator">
            <div className="h-px flex-1 bg-border-secondary" />
            <span className="text-fg-quaternary">{icon}</span>
            <div className="h-px flex-1 bg-border-secondary" />
        </div>
    );
};

export interface SpacerProps {
    /** Size of spacer */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /** Additional class name */
    className?: string;
}

const spacerSizes = {
    xs: "h-2",
    sm: "h-4",
    md: "h-6",
    lg: "h-8",
    xl: "h-12",
    "2xl": "h-16",
};

export const Spacer = ({ size = "md", className }: SpacerProps) => {
    return <div className={cx(spacerSizes[size], className)} aria-hidden="true" />;
};

