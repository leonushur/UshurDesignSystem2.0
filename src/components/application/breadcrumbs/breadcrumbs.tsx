import { ChevronRight, Home02 } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface BreadcrumbItem {
    /** Label text for the breadcrumb */
    label: string;
    /** URL/href for the breadcrumb link */
    href?: string;
    /** Optional icon to display */
    icon?: IconComponent;
}

export interface BreadcrumbsProps {
    /** Array of breadcrumb items */
    items: BreadcrumbItem[];
    /** Show home icon at the start */
    showHomeIcon?: boolean;
    /** Custom separator between items */
    separator?: "chevron" | "slash" | "dot";
    /** Size variant */
    size?: "sm" | "md";
    /** Additional class name */
    className?: string;
    /** Callback when a breadcrumb is clicked */
    onNavigate?: (item: BreadcrumbItem, index: number) => void;
}

const separatorMap = {
    chevron: ChevronRight,
    slash: () => <span className="text-fg-quaternary">/</span>,
    dot: () => <span className="text-fg-quaternary">•</span>,
};

export const Breadcrumbs = ({
    items,
    showHomeIcon = true,
    separator = "chevron",
    size = "sm",
    className,
    onNavigate,
}: BreadcrumbsProps) => {
    const SeparatorIcon = separatorMap[separator];
    const isSmall = size === "sm";

    const handleClick = (item: BreadcrumbItem, index: number, e: React.MouseEvent) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate(item, index);
        }
    };

    return (
        <nav aria-label="Breadcrumb" className={cx("flex items-center", className)}>
            <ol className={cx("flex items-center", isSmall ? "gap-2" : "gap-3")}>
                {showHomeIcon && (
                    <li className="flex items-center">
                        <a
                            href={items[0]?.href ?? "/"}
                            className="text-fg-quaternary transition-colors hover:text-fg-secondary"
                            aria-label="Home"
                            onClick={(e) => handleClick(items[0], 0, e)}
                        >
                            <Home02 className={cx(isSmall ? "size-4" : "size-5")} />
                        </a>
                    </li>
                )}

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    const showSeparator = showHomeIcon || index > 0;
                    const Icon = item.icon;

                    return (
                        <li key={index} className="flex items-center">
                            {showSeparator && (
                                <span className={cx("flex items-center text-fg-quaternary", isSmall ? "mr-2" : "mr-3")}>
                                    {typeof SeparatorIcon === "function" && SeparatorIcon.prototype?.render ? (
                                        <SeparatorIcon className={cx(isSmall ? "size-4" : "size-5")} />
                                    ) : (
                                        <SeparatorIcon />
                                    )}
                                </span>
                            )}
                            {isLast ? (
                                <span
                                    className={cx(
                                        "flex items-center gap-1.5 font-medium text-fg-brand-secondary",
                                        isSmall ? "text-sm" : "text-sm"
                                    )}
                                    aria-current="page"
                                >
                                    {Icon && <Icon className={cx(isSmall ? "size-4" : "size-5")} />}
                                    {item.label}
                                </span>
                            ) : (
                                <a
                                    href={item.href}
                                    className={cx(
                                        "flex items-center gap-1.5 font-medium text-fg-quaternary transition-colors hover:text-fg-secondary",
                                        isSmall ? "text-sm" : "text-sm"
                                    )}
                                    onClick={(e) => handleClick(item, index, e)}
                                >
                                    {Icon && <Icon className={cx(isSmall ? "size-4" : "size-5")} />}
                                    {item.label}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export interface BreadcrumbsWithDropdownProps extends Omit<BreadcrumbsProps, "items"> {
    /** Items before the collapsed section */
    startItems: BreadcrumbItem[];
    /** Hidden items (shown in dropdown) */
    hiddenItems: BreadcrumbItem[];
    /** Items after the collapsed section */
    endItems: BreadcrumbItem[];
}

export const BreadcrumbsWithDropdown = ({
    startItems,
    hiddenItems,
    endItems,
    showHomeIcon = true,
    separator = "chevron",
    size = "sm",
    className,
    onNavigate,
}: BreadcrumbsWithDropdownProps) => {
    const SeparatorIcon = separatorMap[separator];
    const isSmall = size === "sm";

    const handleClick = (item: BreadcrumbItem, index: number, e: React.MouseEvent) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate(item, index);
        }
    };

    const allItems = [...startItems, ...hiddenItems, ...endItems];

    return (
        <nav aria-label="Breadcrumb" className={cx("flex items-center", className)}>
            <ol className={cx("flex items-center", isSmall ? "gap-2" : "gap-3")}>
                {showHomeIcon && (
                    <li className="flex items-center">
                        <a
                            href={startItems[0]?.href ?? "/"}
                            className="text-fg-quaternary transition-colors hover:text-fg-secondary"
                            aria-label="Home"
                        >
                            <Home02 className={cx(isSmall ? "size-4" : "size-5")} />
                        </a>
                    </li>
                )}

                {/* Start items */}
                {startItems.map((item, index) => (
                    <li key={`start-${index}`} className="flex items-center">
                        <span className={cx("flex items-center text-fg-quaternary", isSmall ? "mr-2" : "mr-3")}>
                            {typeof SeparatorIcon === "function" && SeparatorIcon.prototype?.render ? (
                                <SeparatorIcon className={cx(isSmall ? "size-4" : "size-5")} />
                            ) : (
                                <SeparatorIcon />
                            )}
                        </span>
                        <a
                            href={item.href}
                            className={cx(
                                "font-medium text-fg-quaternary transition-colors hover:text-fg-secondary",
                                isSmall ? "text-sm" : "text-sm"
                            )}
                            onClick={(e) => handleClick(item, index, e)}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}

                {/* Collapsed items indicator */}
                {hiddenItems.length > 0 && (
                    <li className="flex items-center">
                        <span className={cx("flex items-center text-fg-quaternary", isSmall ? "mr-2" : "mr-3")}>
                            {typeof SeparatorIcon === "function" && SeparatorIcon.prototype?.render ? (
                                <SeparatorIcon className={cx(isSmall ? "size-4" : "size-5")} />
                            ) : (
                                <SeparatorIcon />
                            )}
                        </span>
                        <button
                            type="button"
                            className={cx(
                                "rounded-md bg-bg-secondary px-1.5 py-0.5 font-medium text-fg-quaternary transition-colors hover:bg-bg-tertiary hover:text-fg-secondary",
                                isSmall ? "text-sm" : "text-sm"
                            )}
                            aria-label={`${hiddenItems.length} more items`}
                        >
                            ...
                        </button>
                    </li>
                )}

                {/* End items */}
                {endItems.map((item, index) => {
                    const isLast = index === endItems.length - 1;
                    const globalIndex = startItems.length + hiddenItems.length + index;

                    return (
                        <li key={`end-${index}`} className="flex items-center">
                            <span className={cx("flex items-center text-fg-quaternary", isSmall ? "mr-2" : "mr-3")}>
                                {typeof SeparatorIcon === "function" && SeparatorIcon.prototype?.render ? (
                                    <SeparatorIcon className={cx(isSmall ? "size-4" : "size-5")} />
                                ) : (
                                    <SeparatorIcon />
                                )}
                            </span>
                            {isLast ? (
                                <span
                                    className={cx(
                                        "font-medium text-fg-brand-secondary",
                                        isSmall ? "text-sm" : "text-sm"
                                    )}
                                    aria-current="page"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <a
                                    href={item.href}
                                    className={cx(
                                        "font-medium text-fg-quaternary transition-colors hover:text-fg-secondary",
                                        isSmall ? "text-sm" : "text-sm"
                                    )}
                                    onClick={(e) => handleClick(item, globalIndex, e)}
                                >
                                    {item.label}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

