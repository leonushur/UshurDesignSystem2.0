import { cx } from "@/utils/cx";
import type { ComponentProps, CSSProperties } from "react";

export interface ScrollAreaProps extends Omit<ComponentProps<"div">, "style"> {
    /**
     * Direction of scrolling
     * @default "vertical"
     */
    direction?: "vertical" | "horizontal" | "both";
    /**
     * Auto-hide scrollbars (show only on hover)
     * @default false
     */
    autoHide?: boolean;
    /**
     * Scrollbar color variant
     * @default "default"
     */
    scrollbarColor?: "default" | "brand" | "muted";
    /**
     * Maximum height of scroll area (only applies when direction includes vertical)
     */
    maxHeight?: string | number;
    /**
     * Maximum width of scroll area (only applies when direction includes horizontal)
     */
    maxWidth?: string | number;
    /**
     * Additional class names
     */
    className?: string;
    /**
     * Content to scroll
     */
    children: React.ReactNode;
}

/**
 * ScrollArea component with custom styled scrollbars
 * Uses native scrolling with custom ::-webkit-scrollbar styling
 */
export const ScrollArea = ({
    direction = "vertical",
    autoHide = false,
    scrollbarColor = "default",
    maxHeight,
    maxWidth,
    className,
    children,
    ...props
}: ScrollAreaProps) => {
    const style: CSSProperties = {
        ...(maxHeight && { maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight }),
        ...(maxWidth && { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth }),
    };

    return (
        <div
            className={cx(
                "scroll-area",
                // Base overflow styles
                direction === "vertical" && "overflow-y-auto overflow-x-hidden",
                direction === "horizontal" && "overflow-x-auto overflow-y-hidden",
                direction === "both" && "overflow-auto",
                // Auto-hide variant
                autoHide && "scroll-area--auto-hide",
                // Scrollbar color variants
                scrollbarColor === "default" && "scroll-area--default",
                scrollbarColor === "brand" && "scroll-area--brand",
                scrollbarColor === "muted" && "scroll-area--muted",
                // Custom classes
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
};

// Export CSS styles as a constant for documentation
export const SCROLL_AREA_STYLES = `
/* ScrollArea custom scrollbar styles */
.scroll-area {
    /* Firefox scrollbar */
    scrollbar-width: thin;
}

/* Default scrollbar color */
.scroll-area--default {
    scrollbar-color: rgb(209 213 219) transparent;
}

.scroll-area--brand {
    scrollbar-color: rgb(47 128 237) transparent;
}

.scroll-area--muted {
    scrollbar-color: rgb(229 231 235) transparent;
}

/* Webkit browsers (Chrome, Safari, Edge) */
.scroll-area::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

.scroll-area::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 9999px;
}

.scroll-area::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    border: 3px solid transparent;
    background-clip: padding-box;
}

/* Default color variant */
.scroll-area--default::-webkit-scrollbar-thumb {
    background-color: rgb(209 213 219);
}

.scroll-area--default::-webkit-scrollbar-thumb:hover {
    background-color: rgb(156 163 175);
}

/* Brand color variant */
.scroll-area--brand::-webkit-scrollbar-thumb {
    background-color: rgb(47 128 237);
}

.scroll-area--brand::-webkit-scrollbar-thumb:hover {
    background-color: rgb(25 104 216);
}

/* Muted color variant */
.scroll-area--muted::-webkit-scrollbar-thumb {
    background-color: rgb(229 231 235);
}

.scroll-area--muted::-webkit-scrollbar-thumb:hover {
    background-color: rgb(209 213 219);
}

/* Auto-hide variant */
.scroll-area--auto-hide::-webkit-scrollbar-thumb {
    opacity: 0;
    transition: opacity 0.2s;
}

.scroll-area--auto-hide:hover::-webkit-scrollbar-thumb {
    opacity: 1;
}

.scroll-area--auto-hide {
    scrollbar-color: transparent transparent;
}

.scroll-area--auto-hide:hover.scroll-area--default {
    scrollbar-color: rgb(209 213 219) transparent;
}

.scroll-area--auto-hide:hover.scroll-area--brand {
    scrollbar-color: rgb(47 128 237) transparent;
}

.scroll-area--auto-hide:hover.scroll-area--muted {
    scrollbar-color: rgb(229 231 235) transparent;
}
`;
