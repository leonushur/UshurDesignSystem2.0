import type { ComponentPropsWithRef, HTMLAttributes, ReactNode, Ref, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { createContext, isValidElement, useContext, useId, useRef, useState } from "react";
import { ArrowDown, ChevronSelectorVertical, Copy01, Edit01, HelpCircle, Trash01, DotsVertical } from "@untitledui-pro/icons/line";
import type {
    CellProps as AriaCellProps,
    ColumnProps as AriaColumnProps,
    RowProps as AriaRowProps,
    TableHeaderProps as AriaTableHeaderProps,
    TableProps as AriaTableProps,
} from "react-aria-components";
import {
    Cell as AriaCell,
    Collection as AriaCollection,
    Column as AriaColumn,
    Group as AriaGroup,
    Row as AriaRow,
    Table as AriaTable,
    TableBody as AriaTableBody,
    TableHeader as AriaTableHeader,
    useTableOptions,
} from "react-aria-components";
import { Badge } from "@/components/base/badges/badges";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

export const TableRowActionsDropdown = () => (
    <Dropdown.Root>
        <Dropdown.DotsButton />

        <Dropdown.Popover className="w-min">
            <Dropdown.Menu>
                <Dropdown.Item icon={Edit01}>
                    <span className="pr-4">Edit</span>
                </Dropdown.Item>
                <Dropdown.Item icon={Copy01}>
                    <span className="pr-4">Copy link</span>
                </Dropdown.Item>
                <Dropdown.Item icon={Trash01}>
                    <span className="pr-4">Delete</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);

interface TableContextValue {
    size: "sm" | "md";
    columnWidths: Record<string, number>;
    setColumnWidth: (columnId: string, width: number) => void;
    draggedColumn: string | null;
    setDraggedColumn: (columnId: string | null) => void;
    dragOverColumn: string | null;
    setDragOverColumn: (columnId: string | null) => void;
    enableResize?: boolean;
    enableReorder?: boolean;
    onColumnReorder?: (fromId: string, toId: string) => void;
}

const TableContext = createContext<TableContextValue>({
    size: "md",
    columnWidths: {},
    setColumnWidth: () => {},
    draggedColumn: null,
    setDraggedColumn: () => {},
    dragOverColumn: null,
    setDragOverColumn: () => {},
    enableResize: false,
    enableReorder: false,
});

const TableCardRoot = ({ children, className, size = "md", ...props }: HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" }) => {
    return (
        <div {...props} className={cx("overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary", className)}>
            <TableContext.Provider
                value={{
                    size,
                    columnWidths: {},
                    setColumnWidth: () => {},
                    draggedColumn: null,
                    setDraggedColumn: () => {},
                    dragOverColumn: null,
                    setDragOverColumn: () => {},
                    enableResize: false,
                    enableReorder: false,
                }}
            >
                {children}
            </TableContext.Provider>
        </div>
    );
};

export interface TableCardHeaderProps {
    /** The title of the table card header. */
    title: string;
    /** The badge displayed next to the title. */
    badge?: ReactNode;
    /** The description of the table card header. */
    description?: string;
    /** The content displayed after the title and badge. */
    contentTrailing?: ReactNode;
    /** The class name of the table card header. */
    className?: string;
}

const TableCardHeader = ({ title, badge, description, contentTrailing, className }: TableCardHeaderProps) => {
    const { size } = useContext(TableContext);

    return (
        <div
            className={cx(
                "relative flex flex-col items-start gap-4 border-b border-secondary bg-primary px-4 md:flex-row",
                size === "sm" ? "py-4 md:px-5" : "py-5 md:px-6",
                className,
            )}
        >
            <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-center gap-2">
                    <h2 className={cx("font-semibold text-primary", size === "sm" ? "text-md" : "text-lg")}>{title}</h2>
                    {badge ? (
                        isValidElement(badge) ? (
                            badge
                        ) : (
                            <Badge color="brand" size="sm">
                                {badge}
                            </Badge>
                        )
                    ) : null}
                </div>
                {description && <p className="text-sm text-tertiary">{description}</p>}
            </div>
            {contentTrailing}
        </div>
    );
};

export interface TableRootProps extends AriaTableProps, Omit<ComponentPropsWithRef<"table">, "className" | "slot" | "style"> {
    size?: "sm" | "md";
    enableResize?: boolean;
    enableReorder?: boolean;
    onColumnReorder?: (fromId: string, toId: string) => void;
}

const TableRoot = ({ className, size = "md", enableResize = false, enableReorder = false, onColumnReorder, ...props }: TableRootProps) => {
    const context = useContext(TableContext);
    const [columnWidths, setColumnWidthsState] = useState<Record<string, number>>(context.columnWidths || {});
    const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
    const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

    const setColumnWidth = (columnId: string, width: number) => {
        setColumnWidthsState((prev) => ({ ...prev, [columnId]: width }));
    };

    return (
        <TableContext.Provider
            value={{
                size: context?.size ?? size,
                columnWidths,
                setColumnWidth,
                draggedColumn,
                setDraggedColumn,
                dragOverColumn,
                setDragOverColumn,
                enableResize,
                enableReorder,
                onColumnReorder,
            }}
        >
            <div className="overflow-x-auto">
                <AriaTable className={(state) => cx("w-full overflow-x-hidden", typeof className === "function" ? className(state) : className)} {...props} />
            </div>
        </TableContext.Provider>
    );
};
TableRoot.displayName = "Table";

export interface TableHeaderProps<T extends object>
    extends AriaTableHeaderProps<T>,
        Omit<ComponentPropsWithRef<"thead">, "children" | "className" | "slot" | "style"> {
    bordered?: boolean;
}

const TableHeader = <T extends object>({ columns, children, bordered = true, className, ...props }: TableHeaderProps<T>) => {
    const { size } = useContext(TableContext);
    const { selectionBehavior, selectionMode } = useTableOptions();

    return (
        <AriaTableHeader
            {...props}
            className={(state) =>
                cx(
                    "relative bg-secondary",
                    size === "sm" ? "h-9" : "h-11",

                    // Row border—using an "after" pseudo-element to avoid the border taking up space.
                    bordered &&
                        "[&>tr>th]:after:pointer-events-none [&>tr>th]:after:absolute [&>tr>th]:after:inset-x-0 [&>tr>th]:after:bottom-0 [&>tr>th]:after:h-px [&>tr>th]:after:bg-border-secondary [&>tr>th]:focus-visible:after:bg-transparent",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {selectionBehavior === "toggle" && (
                <AriaColumn className={cx("relative py-2 pr-0 pl-4", size === "sm" ? "w-9 md:pl-5" : "w-11 md:pl-6")}>
                    {selectionMode === "multiple" && (
                        <div className="flex items-start">
                            <Checkbox slot="selection" size={size} />
                        </div>
                    )}
                </AriaColumn>
            )}
            <AriaCollection items={columns}>{children}</AriaCollection>
        </AriaTableHeader>
    );
};

TableHeader.displayName = "TableHeader";

export interface TableHeadProps extends AriaColumnProps, Omit<ThHTMLAttributes<HTMLTableCellElement>, "children" | "className" | "style" | "id"> {
    label?: string;
    tooltip?: string;
}

const ResizeHandle = ({ columnId }: { columnId: string }) => {
    const { setColumnWidth } = useContext(TableContext);
    const startXRef = useRef<number>(0);
    const startWidthRef = useRef<number>(0);
    const columnRef = useRef<HTMLElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const column = (e.target as HTMLElement).closest("th");
        if (!column) return;

        columnRef.current = column;
        startXRef.current = e.clientX;
        startWidthRef.current = column.offsetWidth;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!columnRef.current) return;
            const diff = moveEvent.clientX - startXRef.current;
            const newWidth = Math.max(50, startWidthRef.current + diff);
            setColumnWidth(columnId, newWidth);
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            columnRef.current = null;
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-border-brand active:bg-border-brand"
            onClick={(e) => e.stopPropagation()}
        />
    );
};

const TableHead = ({ className, tooltip, label, children, id, ...props }: TableHeadProps) => {
    const { selectionBehavior } = useTableOptions();
    const { enableResize, enableReorder, columnWidths, draggedColumn, setDraggedColumn, dragOverColumn, setDragOverColumn, onColumnReorder } =
        useContext(TableContext);
    const generatedId = useId();
    const columnId = id?.toString() || label || generatedId;

    const handleDragStart = (e: React.DragEvent) => {
        if (!enableReorder) return;
        e.dataTransfer.effectAllowed = "move";
        setDraggedColumn(columnId);
    };

    const handleDragOver = (e: React.DragEvent) => {
        if (!enableReorder || !draggedColumn || draggedColumn === columnId) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        setDragOverColumn(columnId);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        if (!enableReorder) return;
        // Only clear if we're actually leaving the column element
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX >= rect.right || e.clientY < rect.top || e.clientY >= rect.bottom) {
            setDragOverColumn(null);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        if (!enableReorder || !draggedColumn || draggedColumn === columnId) return;
        e.preventDefault();
        if (onColumnReorder) {
            onColumnReorder(draggedColumn, columnId);
        }
        setDraggedColumn(null);
        setDragOverColumn(null);
    };

    const handleDragEnd = () => {
        setDraggedColumn(null);
        setDragOverColumn(null);
    };

    const columnWidth = columnWidths[columnId];

    return (
        <AriaColumn
            {...props}
            id={id}
            style={columnWidth ? { width: `${columnWidth}px`, minWidth: `${columnWidth}px`, maxWidth: `${columnWidth}px` } : undefined}
            className={(state) =>
                cx(
                    "relative p-0 px-6 py-2 outline-hidden transition-all duration-200 ease-in-out focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-bg-primary focus-visible:ring-inset",
                    selectionBehavior === "toggle" && "nth-2:pl-3",
                    state.allowsSorting && "cursor-pointer",
                    enableReorder && "cursor-move",
                    draggedColumn === columnId && "opacity-40",
                    dragOverColumn === columnId && "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-brand-solid before:shadow-lg",
                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {(state) => (
                <div
                    draggable={enableReorder}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onDragEnd={handleDragEnd}
                >
                    <AriaGroup className="flex items-center gap-1">
                        {enableReorder && <DotsVertical className="size-3 text-fg-quaternary" />}
                        <div className="flex items-center gap-1">
                            {label && <span className="text-xs font-semibold whitespace-nowrap text-quaternary">{label}</span>}
                            {typeof children === "function" ? children(state) : children}
                        </div>

                        {tooltip && (
                            <Tooltip title={tooltip} placement="top">
                                <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                                    <HelpCircle className="size-4" />
                                </TooltipTrigger>
                            </Tooltip>
                        )}

                        {state.allowsSorting &&
                            (state.sortDirection ? (
                                <ArrowDown className={cx("size-3 stroke-[3px] text-fg-quaternary", state.sortDirection === "ascending" && "rotate-180")} />
                            ) : (
                                <ChevronSelectorVertical size={12} strokeWidth={3} className="text-fg-quaternary" />
                            ))}
                    </AriaGroup>
                    {enableResize && <ResizeHandle columnId={columnId} />}
                </div>
            )}
        </AriaColumn>
    );
};
TableHead.displayName = "TableHead";

export interface TableRowProps<T extends object>
    extends AriaRowProps<T>,
        Omit<ComponentPropsWithRef<"tr">, "children" | "className" | "onClick" | "slot" | "style" | "id"> {
    highlightSelectedRow?: boolean;
}

const TableRow = <T extends object>({ columns, children, className, highlightSelectedRow = true, ...props }: TableRowProps<T>) => {
    const { size } = useContext(TableContext);
    const { selectionBehavior } = useTableOptions();

    return (
        <AriaRow
            {...props}
            className={(state) =>
                cx(
                    "relative outline-focus-ring transition-all duration-200 ease-in-out after:pointer-events-none hover:bg-secondary focus-visible:outline-2 focus-visible:-outline-offset-2",
                    size === "sm" ? "h-10" : "h-18",
                    highlightSelectedRow && "selected:bg-secondary",

                    // Row border—using an "after" pseudo-element to avoid the border taking up space.
                    "[&>td]:after:absolute [&>td]:after:inset-x-0 [&>td]:after:bottom-0 [&>td]:after:h-px [&>td]:after:w-full [&>td]:after:bg-border-secondary last:[&>td]:after:hidden [&>td]:focus-visible:after:opacity-0 focus-visible:[&>td]:after:opacity-0",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {selectionBehavior === "toggle" && (
                <AriaCell className={cx("relative py-2 pr-0 pl-4", size === "sm" ? "md:pl-5" : "md:pl-6")}>
                    <div className="flex items-end">
                        <Checkbox slot="selection" size={size} />
                    </div>
                </AriaCell>
            )}
            <AriaCollection items={columns}>{children}</AriaCollection>
        </AriaRow>
    );
};

TableRow.displayName = "TableRow";

export interface TableCellProps extends AriaCellProps, Omit<TdHTMLAttributes<HTMLTableCellElement>, "children" | "className" | "style" | "id"> {
    ref?: Ref<HTMLTableCellElement>;
}

const TableCell = ({ className, children, ...props }: TableCellProps) => {
    const { size } = useContext(TableContext);
    const { selectionBehavior } = useTableOptions();

    return (
        <AriaCell
            {...props}
            className={(state) =>
                cx(
                    "relative text-sm text-tertiary outline-focus-ring transition-all duration-200 ease-in-out focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-2",
                    size === "sm" && "px-5 py-2",
                    size === "md" && "px-6 py-4",

                    selectionBehavior === "toggle" && "nth-2:pl-3",

                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {children}
        </AriaCell>
    );
};
TableCell.displayName = "TableCell";

const TableCard = {
    Root: TableCardRoot,
    Header: TableCardHeader,
};

const Table = TableRoot as typeof TableRoot & {
    Body: typeof AriaTableBody;
    Cell: typeof TableCell;
    Head: typeof TableHead;
    Header: typeof TableHeader;
    Row: typeof TableRow;
};
Table.Body = AriaTableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;

export { Table, TableCard };
