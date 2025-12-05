import { useState, useEffect, useRef, useMemo, type ReactNode, type KeyboardEvent } from "react";
import { SearchLg, XClose, ArrowRight } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

export interface CommandItem {
    /** Unique identifier */
    id: string;
    /** Display label */
    label: string;
    /** Optional description */
    description?: string;
    /** Optional icon */
    icon?: ReactNode;
    /** Keyboard shortcut hint */
    shortcut?: string;
    /** Group/category */
    group?: string;
    /** Action handler */
    onSelect?: () => void;
    /** Whether item is disabled */
    disabled?: boolean;
}

export interface CommandMenuProps {
    /** Whether menu is open */
    isOpen: boolean;
    /** Close handler */
    onClose: () => void;
    /** Command items */
    items: CommandItem[];
    /** Placeholder text */
    placeholder?: string;
    /** No results text */
    emptyText?: string;
    /** Additional class name */
    className?: string;
}

export const CommandMenu = ({
    isOpen,
    onClose,
    items,
    placeholder = "SearchMd commands...",
    emptyText = "No results found",
    className,
}: CommandMenuProps) => {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // FilterLines items based on query
    const filteredItems = useMemo(() => {
        if (!query) return items;
        const lowerQuery = query.toLowerCase();
        return items.filter(
            (item) =>
                item.label.toLowerCase().includes(lowerQuery) ||
                item.description?.toLowerCase().includes(lowerQuery) ||
                item.group?.toLowerCase().includes(lowerQuery)
        );
    }, [items, query]);

    // Group items
    const groupedItems = useMemo(() => {
        const groups: Record<string, CommandItem[]> = {};
        filteredItems.forEach((item) => {
            const group = item.group ?? "Commands";
            if (!groups[group]) groups[group] = [];
            groups[group].push(item);
        });
        return groups;
    }, [filteredItems]);

    // Flatten for navigation
    const flatItems = useMemo(() => {
        return Object.values(groupedItems).flat();
    }, [groupedItems]);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    }, [isOpen]);

    // Reset selection when items change
    useEffect(() => {
        setSelectedIndex(0);
    }, [filteredItems]);

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setSelectedIndex((i) => Math.min(i + 1, flatItems.length - 1));
                break;
            case "ArrowUp":
                e.preventDefault();
                setSelectedIndex((i) => Math.max(i - 1, 0));
                break;
            case "Enter":
                e.preventDefault();
                const item = flatItems[selectedIndex];
                if (item && !item.disabled) {
                    item.onSelect?.();
                    onClose();
                }
                break;
            case "Escape":
                e.preventDefault();
                onClose();
                break;
        }
    };

    // Scroll selected item into view
    useEffect(() => {
        const selected = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
        selected?.scrollIntoView({ block: "nearest" });
    }, [selectedIndex]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Command menu */}
            <div
                className={cx(
                    "fixed left-1/2 top-1/4 z-50 w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-border-secondary bg-bg-primary shadow-2xl",
                    className
                )}
                role="dialog"
                aria-modal="true"
            >
                {/* SearchMd input */}
                <div className="flex items-center gap-3 border-b border-border-secondary px-4 py-3">
                    <SearchLg className="size-5 text-fg-quaternary" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="flex-1 bg-transparent text-sm text-fg-primary placeholder:text-fg-quaternary focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded p-1 text-fg-quaternary hover:bg-bg-secondary hover:text-fg-secondary"
                    >
                        <XClose className="size-4" />
                    </button>
                </div>

                {/* Results */}
                <div ref={listRef} className="max-h-80 overflow-y-auto p-2">
                    {flatItems.length === 0 ? (
                        <div className="px-4 py-8 text-center text-sm text-fg-quaternary">
                            {emptyText}
                        </div>
                    ) : (
                        Object.entries(groupedItems).map(([group, groupItems]) => (
                            <div key={group} className="mb-2 last:mb-0">
                                <div className="px-2 py-1.5 text-xs font-medium text-fg-quaternary">
                                    {group}
                                </div>
                                {groupItems.map((item) => {
                                    const index = flatItems.indexOf(item);
                                    const isSelected = index === selectedIndex;

                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            data-index={index}
                                            onClick={() => {
                                                if (!item.disabled) {
                                                    item.onSelect?.();
                                                    onClose();
                                                }
                                            }}
                                            disabled={item.disabled}
                                            className={cx(
                                                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
                                                isSelected && "bg-bg-secondary",
                                                item.disabled
                                                    ? "cursor-not-allowed opacity-50"
                                                    : "hover:bg-bg-secondary"
                                            )}
                                        >
                                            {item.icon && (
                                                <span className="flex-shrink-0 text-fg-quaternary">
                                                    {item.icon}
                                                </span>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-fg-primary">
                                                    {item.label}
                                                </div>
                                                {item.description && (
                                                    <div className="truncate text-xs text-fg-quaternary">
                                                        {item.description}
                                                    </div>
                                                )}
                                            </div>
                                            {item.shortcut && (
                                                <span className="flex-shrink-0 text-xs text-fg-quaternary">
                                                    {item.shortcut}
                                                </span>
                                            )}
                                            {isSelected && (
                                                <ArrowRight className="size-4 flex-shrink-0 text-fg-quaternary" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-border-secondary px-4 py-2 text-xs text-fg-quaternary">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <kbd className="rounded bg-bg-secondary px-1.5 py-0.5 font-mono">↑↓</kbd>
                            <span>Navigate</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="rounded bg-bg-secondary px-1.5 py-0.5 font-mono">↵</kbd>
                            <span>Select</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="rounded bg-bg-secondary px-1.5 py-0.5 font-mono">Esc</kbd>
                            <span>Close</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export interface CommandTriggerProps {
    /** Click handler to open menu */
    onClick: () => void;
    /** Placeholder text */
    placeholder?: string;
    /** Keyboard shortcut text */
    shortcut?: string;
    /** Additional class name */
    className?: string;
}

export const CommandTrigger = ({
    onClick,
    placeholder = "Search...",
    shortcut = "⌘K",
    className,
}: CommandTriggerProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cx(
                "flex items-center gap-2 rounded-lg border border-border-secondary bg-bg-primary px-3 py-2 text-sm text-fg-quaternary transition-colors hover:border-border-primary hover:text-fg-tertiary",
                className
            )}
        >
            <SearchLg className="size-4" />
            <span className="flex-1 text-left">{placeholder}</span>
            <kbd className="rounded bg-bg-secondary px-1.5 py-0.5 text-xs font-medium">
                {shortcut}
            </kbd>
        </button>
    );
};

