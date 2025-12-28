import type { ReactNode } from "react";
import { Avatar, type AvatarProps } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

export interface AvatarWithTextProps {
    /** Avatar image source */
    src?: string;
    /** Avatar alt text */
    alt?: string;
    /** Fallback initials */
    initials?: string;
    /** Avatar size */
    size?: "sm" | "md" | "lg";
    /** Online status indicator */
    status?: "online" | "offline";
    /** Show verified tick */
    verified?: boolean;
    /** Custom content to display next to avatar */
    children: ReactNode;
    /** Layout direction */
    direction?: "horizontal" | "vertical";
    /** Horizontal alignment */
    align?: "start" | "center" | "end";
    /** Additional className */
    className?: string;
}

const sizeStyles = {
    sm: {
        avatar: "sm" as const,
        gap: "gap-2",
    },
    md: {
        avatar: "md" as const,
        gap: "gap-3",
    },
    lg: {
        avatar: "lg" as const,
        gap: "gap-4",
    },
};

/**
 * AvatarWithText - Flexible avatar with custom content.
 *
 * Common use cases:
 * - Custom user displays with badges or actions
 * - Activity feed items
 * - Chat message headers
 * - Complex user cards
 *
 * @example
 * ```tsx
 * <AvatarWithText
 *   src="/avatar.jpg"
 *   initials="OR"
 *   status="online"
 * >
 *   <div>
 *     <div className="flex items-center gap-2">
 *       <span className="font-semibold">Olivia Rhye</span>
 *       <Badge>Pro</Badge>
 *     </div>
 *     <p className="text-sm text-fg-tertiary">2 hours ago</p>
 *   </div>
 * </AvatarWithText>
 * ```
 */
export const AvatarWithText = ({
    src,
    alt,
    initials,
    size = "md",
    status,
    verified,
    children,
    direction = "horizontal",
    align = "start",
    className,
}: AvatarWithTextProps) => {
    const styles = sizeStyles[size];

    return (
        <div
            className={cx(
                "flex",
                styles.gap,
                direction === "vertical" && "flex-col",
                direction === "horizontal" && "items-start",
                align === "center" && "items-center",
                align === "end" && "items-end",
                className
            )}
        >
            <Avatar
                size={styles.avatar}
                src={src}
                alt={alt}
                initials={initials}
                status={status}
                verified={verified}
            />
            <div className="flex-1 min-w-0">{children}</div>
        </div>
    );
};

AvatarWithText.displayName = "AvatarWithText";
