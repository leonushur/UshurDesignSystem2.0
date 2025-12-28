import { cx } from "@/utils/cx";
import type { ComponentProps, ReactNode } from "react";

export interface CardProps extends Omit<ComponentProps<"div">, "children"> {
    /** Visual style variant */
    variant?: "default" | "outlined" | "elevated" | "ghost";
    /** Card size affecting padding */
    size?: "sm" | "md" | "lg";
    /** Makes the card interactive with hover effects */
    interactive?: boolean;
    /** Card content */
    children?: ReactNode;
}

export interface CardHeaderProps extends ComponentProps<"div"> {
    children?: ReactNode;
}

export interface CardBodyProps extends ComponentProps<"div"> {
    children?: ReactNode;
}

export interface CardFooterProps extends ComponentProps<"div"> {
    children?: ReactNode;
}

export interface CardMediaProps extends ComponentProps<"div"> {
    /** Image source URL */
    src?: string;
    /** Image alt text */
    alt?: string;
    /** Aspect ratio (e.g., "16/9", "4/3", "1/1") */
    aspectRatio?: string;
    /** Custom media content (overrides src/alt) */
    children?: ReactNode;
}

/**
 * Card component - A versatile container for content grouping
 *
 * @example
 * ```tsx
 * <Card variant="outlined" size="md" interactive>
 *   <Card.Header>
 *     <h3>Card Title</h3>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Card content goes here</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button>Action</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 */
export const Card = ({
    variant = "default",
    size = "md",
    interactive = false,
    className,
    children,
    onClick,
    ...props
}: CardProps) => {
    const isClickable = interactive || !!onClick;

    return (
        <div
            onClick={onClick}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={
                isClickable
                    ? (e) => {
                          if (onClick && (e.key === "Enter" || e.key === " ")) {
                              e.preventDefault();
                              onClick(e as any);
                          }
                      }
                    : undefined
            }
            className={cx(
                // Base styles
                "flex flex-col rounded-xl transition-all duration-200",

                // Variant styles
                variant === "default" && [
                    "bg-bg-primary border border-border-secondary",
                ],
                variant === "outlined" && [
                    "bg-bg-primary border-2 border-border-primary",
                ],
                variant === "elevated" && [
                    "bg-bg-primary border border-border-secondary shadow-lg",
                ],
                variant === "ghost" && [
                    "bg-transparent",
                ],

                // Size styles (affects padding)
                size === "sm" && "p-4",
                size === "md" && "p-6",
                size === "lg" && "p-8",

                // Interactive styles
                isClickable && [
                    "cursor-pointer",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
                    variant === "default" && "hover:shadow-md hover:border-border-primary",
                    variant === "outlined" && "hover:border-border-brand hover:shadow-sm",
                    variant === "elevated" && "hover:shadow-xl hover:-translate-y-0.5",
                    variant === "ghost" && "hover:bg-bg-secondary",
                ],

                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

/**
 * Card.Header - Header section of a card
 */
const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
    return (
        <div
            className={cx(
                "flex flex-col gap-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

/**
 * Card.Body - Main content section of a card
 */
const CardBody = ({ className, children, ...props }: CardBodyProps) => {
    return (
        <div
            className={cx(
                "flex-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

/**
 * Card.Footer - Footer section of a card
 */
const CardFooter = ({ className, children, ...props }: CardFooterProps) => {
    return (
        <div
            className={cx(
                "flex items-center gap-3",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

/**
 * Card.Media - Media/image section of a card
 */
const CardMedia = ({
    src,
    alt = "",
    aspectRatio = "16/9",
    className,
    children,
    ...props
}: CardMediaProps) => {
    return (
        <div
            className={cx(
                "relative overflow-hidden rounded-lg bg-bg-tertiary",
                className
            )}
            style={{ aspectRatio }}
            {...props}
        >
            {children ? (
                children
            ) : src ? (
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover"
                />
            ) : null}
        </div>
    );
};

// Attach subcomponents
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Media = CardMedia;
