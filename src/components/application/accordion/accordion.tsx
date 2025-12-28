import { useState } from "react";
import type { ComponentProps, ReactNode } from "react";
import { Button, DisclosureGroup, Disclosure, DisclosurePanel } from "react-aria-components";
import { ChevronDown } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

export interface AccordionItemProps extends Omit<ComponentProps<"div">, "id"> {
    /**
     * Unique identifier for the accordion item
     */
    id: string;
    /**
     * The title/header of the accordion item
     */
    title: ReactNode;
    /**
     * The content of the accordion item
     */
    children: ReactNode;
    /**
     * Leading icon component
     */
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    /**
     * Whether the item is disabled
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Additional classes for the root element
     */
    className?: string;
}

export interface AccordionProps extends ComponentProps<"div"> {
    /**
     * Accordion items as children
     */
    children: ReactNode;
    /**
     * Visual variant
     * @default "default"
     */
    variant?: "default" | "bordered" | "separated";
    /**
     * Allow multiple items to be expanded at once
     * @default false
     */
    allowMultiple?: boolean;
    /**
     * Default expanded item IDs
     */
    defaultExpandedKeys?: string[];
    /**
     * Controlled expanded item IDs
     */
    expandedKeys?: string[];
    /**
     * Callback when expanded items change
     */
    onExpandedChange?: (keys: string[]) => void;
    /**
     * Additional classes for the root element
     */
    className?: string;
}

/**
 * Accordion Item Component
 * Use within Accordion to create collapsible sections
 */
export const AccordionItem = ({
    id,
    title,
    children,
    icon: Icon,
    isDisabled = false,
    className,
    ...props
}: AccordionItemProps) => {
    return (
        <Disclosure id={id} isDisabled={isDisabled} className={cx("group", className)} {...props}>
            {({ isExpanded }) => (
                <>
                    <Button
                        slot="trigger"
                        className={cx(
                            "flex w-full items-center justify-between gap-3 text-left transition-colors",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
                            "group-data-[variant=default]:py-4",
                            "group-data-[variant=bordered]:p-4",
                            "group-data-[variant=separated]:p-5",
                            isDisabled
                                ? "cursor-not-allowed opacity-50"
                                : "hover:bg-bg-secondary/50 active:bg-bg-secondary"
                        )}
                    >
                        <span className="flex flex-1 items-center gap-3">
                            {Icon && (
                                <Icon
                                    className="size-5 shrink-0 text-fg-tertiary"
                                    aria-hidden="true"
                                />
                            )}
                            <span className="text-md font-semibold text-fg-primary">
                                {title}
                            </span>
                        </span>
                        <ChevronDown
                            className={cx(
                                "size-5 shrink-0 text-fg-tertiary transition-transform duration-200",
                                isExpanded && "rotate-180"
                            )}
                            aria-hidden="true"
                        />
                    </Button>
                    <DisclosurePanel
                        className={cx(
                            "overflow-hidden text-sm text-fg-secondary transition-all duration-200",
                            "group-data-[variant=default]:pb-4",
                            "group-data-[variant=bordered]:px-4 group-data-[variant=bordered]:pb-4",
                            "group-data-[variant=separated]:px-5 group-data-[variant=separated]:pb-5"
                        )}
                    >
                        {children}
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};

/**
 * Accordion Component
 * A vertically stacked set of collapsible sections with accessible keyboard navigation
 *
 * @example
 * ```tsx
 * <Accordion variant="default">
 *   <AccordionItem id="1" title="Section 1">
 *     Content for section 1
 *   </AccordionItem>
 *   <AccordionItem id="2" title="Section 2">
 *     Content for section 2
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export const Accordion = ({
    children,
    variant = "default",
    allowMultiple = false,
    defaultExpandedKeys,
    expandedKeys,
    onExpandedChange,
    className,
    ...props
}: AccordionProps) => {
    const [internalExpandedKeys, setInternalExpandedKeys] = useState<Set<string>>(
        new Set(defaultExpandedKeys)
    );

    const isControlled = expandedKeys !== undefined;
    const currentExpandedKeys = isControlled
        ? new Set(expandedKeys)
        : internalExpandedKeys;

    const handleExpandedChange = (keys: Set<string>) => {
        if (!isControlled) {
            setInternalExpandedKeys(keys);
        }
        onExpandedChange?.(Array.from(keys));
    };

    return (
        <DisclosureGroup
            data-variant={variant}
            allowsMultipleExpanded={allowMultiple}
            expandedKeys={currentExpandedKeys}
            onExpandedChange={handleExpandedChange}
            className={cx(
                "flex flex-col",
                variant === "default" && "divide-y divide-border-secondary",
                variant === "bordered" && "rounded-xl border border-border-primary divide-y divide-border-secondary",
                variant === "separated" && "gap-3",
                className
            )}
            {...props}
        >
            {children}
        </DisclosureGroup>
    );
};
