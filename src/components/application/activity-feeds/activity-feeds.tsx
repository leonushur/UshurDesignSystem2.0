import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface ActivityItem {
    /** Unique identifier */
    id: string;
    /** User or actor name */
    actor: string;
    /** Actor avatar URL */
    avatarSrc?: string;
    /** Actor initials (fallback) */
    avatarInitials?: string;
    /** Activity description */
    action: string;
    /** Target of the action */
    target?: string;
    /** Additional details */
    details?: ReactNode;
    /** Timestamp */
    timestamp: string;
    /** Icon to show instead of avatar */
    icon?: ReactNode;
    /** Icon background color */
    iconColor?: "brand" | "success" | "warning" | "error" | "gray";
}

export interface ActivityFeedProps {
    /** Array of activity items */
    items: ActivityItem[];
    /** Show connecting line between items */
    showLine?: boolean;
    /** Additional class name */
    className?: string;
}

const iconColorMap = {
    brand: "bg-bg-brand-primary text-fg-brand-primary",
    success: "bg-bg-success-primary text-fg-success-primary",
    warning: "bg-bg-warning-primary text-fg-warning-primary",
    error: "bg-bg-error-primary text-fg-error-primary",
    gray: "bg-bg-secondary text-fg-quaternary",
};

export const ActivityFeed = ({
    items,
    showLine = true,
    className,
}: ActivityFeedProps) => {
    return (
        <div className={cx("flow-root", className)}>
            <ul className="-mb-8">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.id}>
                            <div className="relative pb-8">
                                {/* Connecting line */}
                                {showLine && !isLast && (
                                    <span
                                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border-secondary"
                                        aria-hidden="true"
                                    />
                                )}

                                <div className="relative flex items-start gap-3">
                                    {/* Avatar/Icon */}
                                    {item.icon ? (
                                        <div
                                            className={cx(
                                                "flex size-8 items-center justify-center rounded-full",
                                                iconColorMap[item.iconColor ?? "gray"]
                                            )}
                                        >
                                            {item.icon}
                                        </div>
                                    ) : item.avatarSrc ? (
                                        <img
                                            src={item.avatarSrc}
                                            alt={item.actor}
                                            className="size-8 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex size-8 items-center justify-center rounded-full bg-bg-brand-primary text-xs font-semibold text-fg-brand-primary">
                                            {item.avatarInitials ?? item.actor.charAt(0)}
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">
                                        <div className="text-sm">
                                            <span className="font-medium text-fg-primary">
                                                {item.actor}
                                            </span>{" "}
                                            <span className="text-fg-tertiary">{item.action}</span>
                                            {item.target && (
                                                <>
                                                    {" "}
                                                    <span className="font-medium text-fg-primary">
                                                        {item.target}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        {item.details && (
                                            <div className="mt-1 text-sm text-fg-tertiary">
                                                {item.details}
                                            </div>
                                        )}
                                        <p className="mt-0.5 text-xs text-fg-quaternary">
                                            {item.timestamp}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export interface ActivityFeedCompactProps {
    /** Array of activity items */
    items: ActivityItem[];
    /** Maximum items to show */
    maxItems?: number;
    /** Show "view all" link */
    showViewAll?: boolean;
    /** View all callback */
    onViewAll?: () => void;
    /** Additional class name */
    className?: string;
}

export const ActivityFeedCompact = ({
    items,
    maxItems = 5,
    showViewAll = true,
    onViewAll,
    className,
}: ActivityFeedCompactProps) => {
    const visibleItems = items.slice(0, maxItems);
    const hasMore = items.length > maxItems;

    return (
        <div className={className}>
            <ul className="divide-y divide-border-secondary">
                {visibleItems.map((item) => (
                    <li key={item.id} className="py-3 first:pt-0 last:pb-0">
                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            {item.avatarSrc ? (
                                <img
                                    src={item.avatarSrc}
                                    alt={item.actor}
                                    className="size-8 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex size-8 items-center justify-center rounded-full bg-bg-brand-primary text-xs font-semibold text-fg-brand-primary">
                                    {item.avatarInitials ?? item.actor.charAt(0)}
                                </div>
                            )}

                            {/* Content */}
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm text-fg-primary">
                                    <span className="font-medium">{item.actor}</span>{" "}
                                    <span className="text-fg-tertiary">{item.action}</span>
                                    {item.target && (
                                        <span className="font-medium"> {item.target}</span>
                                    )}
                                </p>
                                <p className="text-xs text-fg-quaternary">{item.timestamp}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {showViewAll && hasMore && (
                <button
                    type="button"
                    onClick={onViewAll}
                    className="mt-4 text-sm font-medium text-fg-brand-secondary hover:text-fg-brand-secondary_hover"
                >
                    View all activity
                </button>
            )}
        </div>
    );
};

