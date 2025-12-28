import { type ReactNode, type ComponentType, type SVGProps } from "react";
import {
    Menu as AriaMenu,
    MenuItem as AriaMenuItem,
    MenuTrigger as AriaMenuTrigger,
    Popover as AriaPopover,
    Button as AriaButton,
    Separator as AriaSeparator,
    SubmenuTrigger as AriaSubmenuTrigger,
    type MenuProps as AriaMenuProps,
    type MenuItemProps as AriaMenuItemProps,
    type MenuTriggerProps as AriaMenuTriggerProps,
} from "react-aria-components";
import { cx } from "@/utils/cx";
import { ChevronRight } from "@untitledui-pro/icons/line";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// ============================================================================
// Context Menu Trigger
// ============================================================================

export interface ContextMenuTriggerProps extends Omit<AriaMenuTriggerProps, "children"> {
    /** Trigger element (right-click target) and menu content */
    children: [ReactNode, ReactNode];
    /** Additional class name for trigger button */
    className?: string;
}

export const ContextMenuTrigger = ({ children, className, ...props }: ContextMenuTriggerProps) => {
    const [trigger, menu] = children;
    return (
        <AriaMenuTrigger {...props}>
            <AriaButton className={cx("focus:outline-none", className)}>{trigger}</AriaButton>
            {menu}
        </AriaMenuTrigger>
    );
};

// ============================================================================
// Context Menu
// ============================================================================

export interface ContextMenuProps extends Omit<AriaMenuProps<object>, "children"> {
    /** Menu items */
    children: ReactNode;
    /** Additional class name */
    className?: string;
}

const ContextMenu = ({ children, className, ...props }: ContextMenuProps) => {
    return (
        <AriaPopover
            placement="bottom start"
            className={({ isEntering, isExiting }) =>
                cx(
                    "min-w-[200px] max-w-[320px] rounded-lg border border-border-secondary bg-bg-primary shadow-lg",
                    "origin-top-left",
                    isEntering && "animate-in fade-in zoom-in-95 duration-200",
                    isExiting && "animate-out fade-out zoom-out-95 duration-150"
                )
            }
        >
            <AriaMenu
                className={cx(
                    "max-h-[400px] overflow-y-auto p-1 outline-none",
                    className
                )}
                {...props}
            >
                {children}
            </AriaMenu>
        </AriaPopover>
    );
};

// ============================================================================
// Context Menu Item
// ============================================================================

export interface ContextMenuItemProps extends AriaMenuItemProps {
    /** Item label */
    children: ReactNode;
    /** Leading icon */
    icon?: IconComponent;
    /** Keyboard shortcut display */
    shortcut?: string;
    /** Item description */
    description?: string;
    /** Danger/destructive variant */
    variant?: "default" | "danger";
    /** Additional class name */
    className?: string;
}

export const ContextMenuItem = ({
    children,
    icon: Icon,
    shortcut,
    description,
    variant = "default",
    className,
    ...props
}: ContextMenuItemProps) => {
    return (
        <AriaMenuItem
            className={({ isFocused, isDisabled }) =>
                cx(
                    "group relative flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors",
                    // Default variant
                    variant === "default" && [
                        "text-fg-secondary",
                        isFocused && "bg-bg-secondary text-fg-primary",
                    ],
                    // Danger variant
                    variant === "danger" && [
                        "text-text-error-primary",
                        isFocused && "bg-bg-error-primary text-text-error-primary",
                    ],
                    // Disabled state
                    isDisabled && "cursor-not-allowed opacity-50",
                    className
                )
            }
            {...props}
        >
            {({ hasSubmenu }) => (
                <>
                    {Icon && (
                        <Icon
                            aria-hidden="true"
                            className={cx(
                                "size-4 shrink-0",
                                variant === "default" && "text-fg-quaternary group-data-[focused]:text-fg-secondary",
                                variant === "danger" && "text-text-error-primary"
                            )}
                        />
                    )}
                    <span className="flex-1 truncate font-medium">{children}</span>
                    {description && (
                        <span className="truncate text-xs text-fg-quaternary">{description}</span>
                    )}
                    {shortcut && (
                        <kbd
                            className={cx(
                                "ml-auto shrink-0 rounded bg-bg-secondary px-1.5 py-0.5 text-xs font-medium tabular-nums",
                                variant === "default" && "text-fg-quaternary",
                                variant === "danger" && "bg-bg-error-primary text-text-error-primary"
                            )}
                        >
                            {shortcut}
                        </kbd>
                    )}
                    {hasSubmenu && (
                        <ChevronRight
                            aria-hidden="true"
                            className={cx(
                                "ml-auto size-4 shrink-0",
                                variant === "default" && "text-fg-quaternary",
                                variant === "danger" && "text-text-error-primary"
                            )}
                        />
                    )}
                </>
            )}
        </AriaMenuItem>
    );
};

// ============================================================================
// Context Menu Separator
// ============================================================================

export interface ContextMenuSeparatorProps {
    /** Additional class name */
    className?: string;
}

export const ContextMenuSeparator = ({ className }: ContextMenuSeparatorProps) => {
    return <AriaSeparator className={cx("my-1 h-px bg-border-secondary", className)} />;
};

// ============================================================================
// Context Menu Submenu
// ============================================================================

export interface ContextMenuSubmenuProps {
    /** Submenu trigger item */
    trigger: ReactNode;
    /** Submenu items */
    children: ReactNode;
}

export const ContextMenuSubmenu = ({ trigger, children }: ContextMenuSubmenuProps) => {
    return (
        <AriaSubmenuTrigger>
            {trigger}
            <AriaPopover
                placement="right top"
                className={({ isEntering, isExiting }) =>
                    cx(
                        "min-w-[200px] max-w-[320px] rounded-lg border border-border-secondary bg-bg-primary shadow-lg",
                        "origin-top-left",
                        isEntering && "animate-in fade-in zoom-in-95 duration-200",
                        isExiting && "animate-out fade-out zoom-out-95 duration-150"
                    )
                }
            >
                <AriaMenu className="max-h-[400px] overflow-y-auto p-1 outline-none">
                    {children}
                </AriaMenu>
            </AriaPopover>
        </AriaSubmenuTrigger>
    );
};

// ============================================================================
// Compound Export
// ============================================================================

const _ContextMenu = ContextMenu as typeof ContextMenu & {
    Trigger: typeof ContextMenuTrigger;
    Item: typeof ContextMenuItem;
    Separator: typeof ContextMenuSeparator;
    Submenu: typeof ContextMenuSubmenu;
};

_ContextMenu.Trigger = ContextMenuTrigger;
_ContextMenu.Item = ContextMenuItem;
_ContextMenu.Separator = ContextMenuSeparator;
_ContextMenu.Submenu = ContextMenuSubmenu;

export { _ContextMenu as ContextMenu };
