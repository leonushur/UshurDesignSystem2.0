import { Avatar, type AvatarProps } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

export interface AvatarStackProps {
    /** Array of avatar data */
    avatars: Array<{
        src?: string;
        alt?: string;
        initials?: string;
    }>;
    /** Maximum number of avatars to display before showing overflow count */
    max?: number;
    /** Avatar size */
    size?: "sm" | "md" | "lg";
    /** Additional className */
    className?: string;
}

const sizeStyles = {
    sm: {
        avatarSize: "sm" as const,
        overlap: "-space-x-2",
        overflowText: "text-xs",
        overflowSize: "size-8",
    },
    md: {
        avatarSize: "md" as const,
        overlap: "-space-x-3",
        overflowText: "text-sm",
        overflowSize: "size-10",
    },
    lg: {
        avatarSize: "lg" as const,
        overlap: "-space-x-4",
        overflowText: "text-md",
        overflowSize: "size-12",
    },
};

/**
 * AvatarStack - Overlapping avatars for groups.
 *
 * Common use cases:
 * - Team member displays
 * - Document collaborators
 * - Assignee lists
 * - Shared project indicators
 *
 * @example
 * ```tsx
 * <AvatarStack
 *   avatars={[
 *     { src: "/user1.jpg", alt: "User 1" },
 *     { src: "/user2.jpg", alt: "User 2" },
 *     { initials: "AB" },
 *   ]}
 *   max={3}
 * />
 * ```
 */
export const AvatarStack = ({
    avatars,
    max = 5,
    size = "md",
    className,
}: AvatarStackProps) => {
    const styles = sizeStyles[size];
    const visibleAvatars = avatars.slice(0, max);
    const remainingCount = Math.max(0, avatars.length - max);

    return (
        <div className={cx("flex items-center", styles.overlap, className)}>
            {visibleAvatars.map((avatar, index) => (
                <Avatar
                    key={index}
                    size={styles.avatarSize}
                    src={avatar.src}
                    alt={avatar.alt}
                    initials={avatar.initials}
                    contrastBorder={true}
                    className="ring-2 ring-bg-primary"
                />
            ))}
            {remainingCount > 0 && (
                <div
                    className={cx(
                        "inline-flex items-center justify-center rounded-full ring-2 ring-bg-primary",
                        "bg-bg-tertiary text-fg-secondary font-medium",
                        styles.overflowSize,
                        styles.overflowText
                    )}
                >
                    +{remainingCount}
                </div>
            )}
        </div>
    );
};

AvatarStack.displayName = "AvatarStack";
