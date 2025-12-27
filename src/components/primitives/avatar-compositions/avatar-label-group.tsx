import type { ReactNode } from "react";
import { Avatar, type AvatarProps } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

export interface AvatarLabelGroupProps {
    /** Avatar image source */
    src?: string;
    /** Avatar alt text */
    alt?: string;
    /** Fallback initials */
    initials?: string;
    /** Primary text (name) */
    primary: string;
    /** Secondary text (role, email, etc.) */
    secondary?: string;
    /** Tertiary text (additional info) */
    tertiary?: string;
    /** Avatar size */
    size?: "sm" | "md" | "lg";
    /** Online status indicator */
    status?: "online" | "offline";
    /** Show verified tick */
    verified?: boolean;
    /** Text alignment */
    align?: "left" | "center" | "right";
    /** Additional className */
    className?: string;
}

const sizeStyles = {
    sm: {
        avatar: "sm" as const,
        primary: "text-sm font-semibold",
        secondary: "text-sm",
        tertiary: "text-xs",
        gap: "gap-2",
    },
    md: {
        avatar: "md" as const,
        primary: "text-sm font-semibold",
        secondary: "text-sm",
        tertiary: "text-sm",
        gap: "gap-3",
    },
    lg: {
        avatar: "lg" as const,
        primary: "text-md font-semibold",
        secondary: "text-md",
        tertiary: "text-sm",
        gap: "gap-4",
    },
};

/**
 * AvatarLabelGroup - Avatar with text labels for user identification.
 *
 * Common use cases:
 * - User profile headers
 * - Comment author displays
 * - Team member cards
 * - Sidebar user info
 *
 * @example
 * ```tsx
 * <AvatarLabelGroup
 *   src="/avatar.jpg"
 *   primary="Olivia Rhye"
 *   secondary="Product Designer"
 *   tertiary="olivia@example.com"
 *   status="online"
 * />
 * ```
 */
export const AvatarLabelGroup = ({
    src,
    alt,
    initials,
    primary,
    secondary,
    tertiary,
    size = "md",
    status,
    verified,
    align = "left",
    className,
}: AvatarLabelGroupProps) => {
    const styles = sizeStyles[size];

    return (
        <div
            className={cx(
                "flex items-center",
                styles.gap,
                align === "center" && "flex-col text-center",
                align === "right" && "flex-row-reverse text-right",
                className
            )}
        >
            <Avatar
                size={styles.avatar}
                src={src}
                alt={alt || primary}
                initials={initials}
                status={status}
                verified={verified}
            />
            <div className="flex flex-col min-w-0">
                <span className={cx("text-fg-primary truncate", styles.primary)}>
                    {primary}
                </span>
                {secondary && (
                    <span className={cx("text-fg-tertiary truncate", styles.secondary)}>
                        {secondary}
                    </span>
                )}
                {tertiary && (
                    <span className={cx("text-fg-quaternary truncate", styles.tertiary)}>
                        {tertiary}
                    </span>
                )}
            </div>
        </div>
    );
};

AvatarLabelGroup.displayName = "AvatarLabelGroup";
