import type { ReactNode } from "react";
import { Avatar, type AvatarProps } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

export interface TableCellAvatarProps {
    /** Avatar source URL */
    src?: string;
    /** Alt text for the avatar */
    alt?: string;
    /** Fallback initials when no image */
    initials?: string;
    /** Primary text (name) */
    primary: string;
    /** Secondary text (email, role, etc.) */
    secondary?: string;
    /** Avatar size */
    size?: "xs" | "sm" | "md";
    /** Show online status indicator */
    showStatus?: boolean;
    /** Online status */
    status?: "online" | "offline" | "busy" | "away";
    /** Additional className */
    className?: string;
}

/**
 * TableCellAvatar - A primitive for displaying user/entity info with avatar in table cells.
 *
 * Commonly used for:
 * - User rows in tables
 * - Team member lists
 * - Contact directories
 *
 * @example
 * ```tsx
 * <TableCellAvatar
 *   src="/avatar.jpg"
 *   primary="Olivia Rhye"
 *   secondary="olivia@example.com"
 *   showStatus
 *   status="online"
 * />
 * ```
 */
export const TableCellAvatar = ({
    src,
    alt,
    initials,
    primary,
    secondary,
    size = "md",
    showStatus = false,
    status = "offline",
    className,
}: TableCellAvatarProps) => {
    const avatarSize = size === "xs" ? "xs" : size === "sm" ? "sm" : "md";

    return (
        <div className={cx("flex items-center gap-3", className)}>
            <div className="relative flex-shrink-0">
                <Avatar
                    size={avatarSize}
                    src={src}
                    alt={alt || primary}
                    initials={initials || primary.slice(0, 2).toUpperCase()}
                />
                {showStatus && (
                    <span
                        className={cx(
                            "absolute bottom-0 right-0 block rounded-full ring-2 ring-bg-primary",
                            size === "xs" ? "size-2" : size === "sm" ? "size-2.5" : "size-3",
                            status === "online" && "bg-fg-success-secondary",
                            status === "offline" && "bg-fg-disabled",
                            status === "busy" && "bg-fg-error-secondary",
                            status === "away" && "bg-fg-warning-secondary",
                        )}
                    />
                )}
            </div>
            <div className="flex flex-col min-w-0">
                <span className={cx(
                    "font-medium text-fg-primary truncate",
                    size === "xs" ? "text-xs" : "text-sm"
                )}>
                    {primary}
                </span>
                {secondary && (
                    <span className={cx(
                        "text-fg-tertiary truncate",
                        size === "xs" ? "text-xs" : "text-sm"
                    )}>
                        {secondary}
                    </span>
                )}
            </div>
        </div>
    );
};

TableCellAvatar.displayName = "TableCellAvatar";
