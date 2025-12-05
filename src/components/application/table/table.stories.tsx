
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";
import { Table, TableCard, TableRowActionsDropdown } from "./table";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { PaginationCardDefault } from "@/components/application/pagination/pagination";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { FileIcon } from "@untitledui/file-icons";
import { cx } from "@/utils/cx";

const meta: Meta<typeof Table> = {
    title: "Application/Table",
    component: Table,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        enableResize: {
            control: "boolean",
            description: "Enable column resizing by dragging column edges",
            table: {
                defaultValue: { summary: "true" },
            },
        },
        enableReorder: {
            control: "boolean",
            description: "Enable column reordering by dragging column headers",
            table: {
                defaultValue: { summary: "true" },
            },
        },
        size: {
            control: "radio",
            options: ["sm", "md"],
            description: "Table size (affects row height and padding)",
            table: {
                defaultValue: { summary: "md" },
            },
        },
        selectionMode: {
            control: "radio",
            options: ["none", "single", "multiple"],
            description: "Row selection mode",
            table: {
                defaultValue: { summary: "none" },
            },
        },
    },
    args: {
        enableResize: true,
        enableReorder: true,
        size: "md",
        selectionMode: "none",
    },
};

export default meta;

type Story = StoryObj<typeof Table>;

const users = [
    { id: 1, name: "Olivia Rhye", email: "olivia@untitledui.com", role: "Product Designer", status: "Active", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Phoenix Baker", email: "phoenix@untitledui.com", role: "Product Manager", status: "Active", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Lana Steiner", email: "lana@untitledui.com", role: "Frontend Developer", status: "Active", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Demi Wilkinson", email: "demi@untitledui.com", role: "Backend Developer", status: "Active", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "Candice Wu", email: "candice@untitledui.com", role: "Fullstack Developer", status: "Active", avatar: "https://i.pravatar.cc/150?img=5" },
];

const invoices = [
    { id: "#3066", date: "Jan 6, 2025", status: "paid", customer: "Olivia Rhye", plan: "Monthly subscription" },
    { id: "#3065", date: "Jan 6, 2025", status: "paid", customer: "Phoenix Baker", plan: "Monthly subscription" },
    { id: "#3064", date: "Jan 6, 2025", status: "paid", customer: "Lana Steiner", plan: "Monthly subscription" },
    { id: "#3063", date: "Jan 5, 2025", status: "paid", customer: "Demi Wilkinson", plan: "Monthly subscription" },
    { id: "#3062", date: "Jan 5, 2025", status: "refunded", customer: "Candice Wu", plan: "Monthly subscription" },
    { id: "#3061", date: "Jan 5, 2025", status: "refunded", customer: "Natali Craig", plan: "Monthly subscription" },
    { id: "#3060", date: "Jan 4, 2025", status: "cancelled", customer: "Drew Cano", plan: "Monthly subscription" },
    { id: "#3059", date: "Jan 3, 2025", status: "paid", customer: "Orlando Diggs", plan: "Monthly subscription" },
    { id: "#3058", date: "Jan 3, 2025", status: "paid", customer: "Andi Lane", plan: "Monthly subscription" },
    { id: "#3057", date: "Jan 3, 2025", status: "paid", customer: "Kate Morrison", plan: "Monthly subscription" },
];

const files = [
    { name: "Tech requirements.pdf", size: "200 KB", uploaded: "Jan 4, 2025", updated: "Jan 4, 2025", owner: "Olivia Rhye", icon: "pdf" },
    { name: "Dashboard screenshot.jpg", size: "720 KB", uploaded: "Jan 4, 2025", updated: "Jan 4, 2025", owner: "Phoenix Baker", icon: "image" },
    { name: "Dashboard prototype recording.mp4", size: "16 MB", uploaded: "Jan 2, 2025", updated: "Jan 2, 2025", owner: "Lana Steiner", icon: "video-02" },
    { name: "Dashboard prototype FINAL.fig", size: "4.2 MB", uploaded: "Jan 6, 2025", updated: "Jan 6, 2025", owner: "Demi Wilkinson", icon: "fig" },
    { name: "UX Design Guidelines.docx", size: "400 KB", uploaded: "Jan 8, 2025", updated: "Jan 8, 2025", owner: "Candice Wu", icon: "docx" },
    { name: "Dashboard interaction.aep", size: "12 MB", uploaded: "Jan 6, 2025", updated: "Jan 6, 2025", owner: "Natali Craig", icon: "aep" },
    { name: "Briefing call recording.mp3", size: "18.6 MB", uploaded: "Jan 4, 2025", updated: "Jan 4, 2025", owner: "Drew Cano", icon: "mp3" },
];

const vendorFilters = ["View all", "Monitored", "Unmonitored"];
const purchaseFilters = ["All purchases", "Subscription", "One-time"];

const StatusBadge = ({ status }: { status: string }) => {
    const normalized = status.toLowerCase();
    const color = normalized === "paid" ? "success" : normalized === "refunded" ? "warning" : normalized === "cancelled" ? "error" : "gray";
    return (
        <Badge size="sm" color={color}>
            {status}
        </Badge>
    );
};

const Toolbar = ({
    filters,
    defaultFilter = 0,
    actions,
}: {
    filters?: string[];
    defaultFilter?: number;
    actions?: ReactNode;
}) => {
    const [activeFilter, setActiveFilter] = useState(defaultFilter);
    const hasFilters = Boolean(filters?.length);

    if (!hasFilters && !actions) {
        return null;
    }

    return (
        <div className="flex flex-wrap items-center gap-3 border-b border-secondary px-6 py-4 text-sm">
            {hasFilters ? (
                <div className="flex flex-wrap gap-2">
                    {filters!.map((filter, index) => {
                        const isActive = activeFilter === index;
                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(index)}
                                className={cx(
                                    "rounded-full border px-3 py-1 font-semibold transition-colors",
                                    isActive ? "border-brand-secondary bg-brand-secondary/10 text-brand-secondary" : "border-secondary text-secondary",
                                )}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>
            ) : null}
            <div className="flex flex-1 justify-end gap-2">{actions}</div>
        </div>
    );
};

const AlternatingTable = ({
    highlight = "rows",
    showFooter = true,
}: {
    highlight?: "rows" | "cols";
    showFooter?: boolean;
}) => (
    <TableCard.Root>
        <TableCard.Header title="Invoices" badge="10 results" description="Alternating fills for readability" />
        <Table aria-label="Invoices" enableResize={false} enableReorder={false}>
            <Table.Header>
                <Table.Head>Invoice</Table.Head>
                <Table.Head>Date</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head>Customer</Table.Head>
                <Table.Head>Purchase</Table.Head>
                <Table.Head />
            </Table.Header>
            <Table.Body items={invoices}>
                {(item) => (
                    <Table.Row
                        id={item.id}
                        className={cx(
                            highlight === "rows" &&
                                "odd:bg-primary even:bg-white odd:hover:bg-primary_hover even:hover:bg-primary_hover odd:[&>td]:after:bg-transparent even:[&>td]:after:bg-transparent",
                        )}
                    >
                        <Table.Cell className={cx(highlight === "cols" && "even:bg-primary/40")}>
                            <span className="font-semibold text-secondary">{item.id}</span>
                        </Table.Cell>
                        <Table.Cell className={cx(highlight === "cols" && "even:bg-primary/40")}>{item.date}</Table.Cell>
                        <Table.Cell className={cx(highlight === "cols" && "even:bg-primary/40")}>
                            <StatusBadge status={item.status} />
                        </Table.Cell>
                        <Table.Cell className={cx(highlight === "cols" && "even:bg-primary/40")}>{item.customer}</Table.Cell>
                        <Table.Cell className={cx(highlight === "cols" && "even:bg-primary/40")}>{item.plan}</Table.Cell>
                        <Table.Cell>
                            <div className="flex justify-end">
                                <TableRowActionsDropdown />
                            </div>
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
        {showFooter && <PaginationCardDefault />}
    </TableCard.Root>
);

export const Default: Story = {
    render: (args) => {
        const [columnOrder, setColumnOrder] = useState(["name", "status", "role", "email", "actions"]);

        const handleColumnReorder = (fromId: string, toId: string) => {
            const newOrder = [...columnOrder];
            const fromIndex = newOrder.indexOf(fromId);
            const toIndex = newOrder.indexOf(toId);
            newOrder.splice(fromIndex, 1);
            newOrder.splice(toIndex, 0, fromId);
            setColumnOrder(newOrder);
        };

        return (
            <TableCard.Root size={args.size}>
                <TableCard.Header
                    title="Team members"
                    badge="5 users"
                    description="Manage your team members and their account permissions here. Use controls to toggle features."
                />
                <Table
                    key={columnOrder.join("-")}
                    aria-label="Team members"
                    size={args.size}
                    enableResize={args.enableResize}
                    enableReorder={args.enableReorder}
                    onColumnReorder={handleColumnReorder}
                    selectionMode={args.selectionMode}
                >
                    <Table.Header>
                        {columnOrder.map((colId) => {
                            switch (colId) {
                                case "name":
                                    return <Table.Head key="name" id="name" label="Name" />;
                                case "status":
                                    return <Table.Head key="status" id="status" label="Status" />;
                                case "role":
                                    return <Table.Head key="role" id="role" label="Role" />;
                                case "email":
                                    return <Table.Head key="email" id="email" label="Email" />;
                                case "actions":
                                    return <Table.Head key="actions" id="actions" />;
                                default:
                                    return null;
                            }
                        })}
                    </Table.Header>
                    <Table.Body items={users}>
                        {(item) => (
                            <Table.Row id={item.id}>
                                {columnOrder.map((colId) => {
                                    switch (colId) {
                                        case "name":
                                            return (
                                                <Table.Cell key="name">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar src={item.avatar} alt={item.name} size={args.size === "sm" ? "xs" : "sm"} />
                                                        <span className="font-medium text-secondary">{item.name}</span>
                                                    </div>
                                                </Table.Cell>
                                            );
                                        case "status":
                                            return (
                                                <Table.Cell key="status">
                                                    <Badge size={args.size === "sm" ? "xs" : "sm"} color="success" type="pill-color" dot>
                                                        {item.status}
                                                    </Badge>
                                                </Table.Cell>
                                            );
                                        case "role":
                                            return <Table.Cell key="role">{item.role}</Table.Cell>;
                                        case "email":
                                            return <Table.Cell key="email">{item.email}</Table.Cell>;
                                        case "actions":
                                            return (
                                                <Table.Cell key="actions">
                                                    <div className="flex justify-end">
                                                        <TableRowActionsDropdown />
                                                    </div>
                                                </Table.Cell>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                <PaginationCardDefault />
            </TableCard.Root>
        );
    },
};

export const SmallSize: Story = {
    args: {
        enableResize: false,
        enableReorder: false,
        size: "sm",
    },
    render: () => (
        <TableCard.Root size="sm">
            <TableCard.Header title="Team members" badge="5 users" description="Compact view for dense tables." />
            <Table aria-label="Team members" size="sm">
                <Table.Header>
                    <Table.Head>Name</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Role</Table.Head>
                    <Table.Head>Email</Table.Head>
                    <Table.Head />
                </Table.Header>
                <Table.Body items={users}>
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatar} alt={item.name} size="xs" />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-secondary">{item.name}</span>
                                        <span className="text-xs text-quaternary">{item.role}</span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge size="xs" color="success" type="pill-color" dot>
                                    {item.status}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>{item.role}</Table.Cell>
                            <Table.Cell className="text-xs">{item.email}</Table.Cell>
                            <Table.Cell>
                                <div className="flex justify-end">
                                    <TableRowActionsDropdown />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    ),
};

export const DividerLine01: Story = {
    name: "Divider Line 01",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header title="Invoices" badge="10 results" description="Monitor invoice status across the team." />
            <Table aria-label="Invoices">
                <Table.Header>
                    <Table.Head>Invoice</Table.Head>
                    <Table.Head>Date</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Customer</Table.Head>
                    <Table.Head>Purchase</Table.Head>
                    <Table.Head />
                </Table.Header>
                <Table.Body items={invoices}>
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell className="font-semibold text-secondary">{item.id}</Table.Cell>
                            <Table.Cell>{item.date}</Table.Cell>
                            <Table.Cell>
                                <StatusBadge status={item.status} />
                            </Table.Cell>
                            <Table.Cell>{item.customer}</Table.Cell>
                            <Table.Cell>{item.plan}</Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center justify-end gap-2">
                                    <Button variant="ghost">Delete</Button>
                                    <Button>View</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationCardDefault />
        </TableCard.Root>
    ),
};

export const DividerLine02: Story = {
    name: "Divider Line 02",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header
                title="Files uploaded"
                badge="10/20 seats"
                description="Download all assets or upload new files."
                contentTrailing={
                    <div className="flex gap-2">
                        <Button variant="secondary">Download all</Button>
                        <Button>Upload</Button>
                    </div>
                }
            />
            <Table aria-label="Files">
                <Table.Header>
                    <Table.Head>File name</Table.Head>
                    <Table.Head>File size</Table.Head>
                    <Table.Head>Date uploaded</Table.Head>
                    <Table.Head>Last updated</Table.Head>
                    <Table.Head>Uploaded by</Table.Head>
                    <Table.Head />
                </Table.Header>
                <Table.Body items={files}>
                    {(item) => (
                        <Table.Row id={item.name}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <FileIcon name={item.icon as ComponentProps<typeof FileIcon>["name"]} className="size-6 text-brand-solid" />
                                    <div>
                                        <p className="font-semibold text-secondary">{item.name}</p>
                                        <p className="text-xs text-quaternary">Workspace files</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>{item.size}</Table.Cell>
                            <Table.Cell>{item.uploaded}</Table.Cell>
                            <Table.Cell>{item.updated}</Table.Cell>
                            <Table.Cell>{item.owner}</Table.Cell>
                            <Table.Cell>
                                <div className="flex justify-end gap-2">
                                    <Button variant="ghost">Delete</Button>
                                    <Button variant="secondary">Edit</Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    ),
};

export const DividerLine03: Story = {
    name: "Divider Line 03",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header
                title="Transactions"
                badge="24 invoices"
                description="Track invoices and customer purchases."
                contentTrailing={
                    <div className="flex gap-2">
                        <Dropdown.Root>
                            <Dropdown.Button>Sort</Dropdown.Button>
                            <Dropdown.Popover>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Newest first</Dropdown.Item>
                                    <Dropdown.Item>Oldest first</Dropdown.Item>
                                    <Dropdown.Item>High value</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown.Root>
                        <Button>Export</Button>
                    </div>
                }
            />
            <Toolbar filters={purchaseFilters} />
            <Table aria-label="Transactions">
                <Table.Header>
                    <Table.Head>Invoice</Table.Head>
                    <Table.Head>Date</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Customer</Table.Head>
                    <Table.Head>Purchase</Table.Head>
                    <Table.Head />
                </Table.Header>
                <Table.Body items={invoices}>
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.date}</Table.Cell>
                            <Table.Cell>
                                <StatusBadge status={item.status} />
                            </Table.Cell>
                            <Table.Cell>{item.customer}</Table.Cell>
                            <Table.Cell>{item.plan}</Table.Cell>
                            <Table.Cell>
                                <div className="flex justify-end">
                                    <TableRowActionsDropdown />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationCardDefault />
        </TableCard.Root>
    ),
};

export const DividerLine04: Story = {
    name: "Divider Line 04",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header
                title="Files uploaded"
                badge="Upload"
                description="Keep track of file activity across the organization."
                contentTrailing={
                    <div className="flex gap-2">
                        <Button variant="secondary">Download all</Button>
                        <Button>Upload</Button>
                    </div>
                }
            />
            <Table aria-label="Files">
                <Table.Header>
                    <Table.Head>File name</Table.Head>
                    <Table.Head>File size</Table.Head>
                    <Table.Head>Date uploaded</Table.Head>
                    <Table.Head>Last updated</Table.Head>
                    <Table.Head>Uploaded by</Table.Head>
                </Table.Header>
                <Table.Body items={files}>
                    {(item) => (
                        <Table.Row id={item.name}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <FileIcon name={item.icon as ComponentProps<typeof FileIcon>["name"]} className="size-6 text-brand-solid" />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-secondary">{item.name}</span>
                                        <span className="text-xs text-quaternary">Internal asset</span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>{item.size}</Table.Cell>
                            <Table.Cell>{item.uploaded}</Table.Cell>
                            <Table.Cell>{item.updated}</Table.Cell>
                            <Table.Cell>{item.owner}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    ),
};

export const AlternatingFills01: Story = {
    name: "Alternating Fills 01",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => <AlternatingTable highlight="rows" />,
};

export const AlternatingFills02: Story = {
    name: "Alternating Fills 02",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => <AlternatingTable highlight="cols" />,
};

export const AlternatingFills03: Story = {
    name: "Alternating Fills 03",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => <AlternatingTable highlight="rows" showFooter={false} />,
};

export const AlternatingFills04: Story = {
    name: "Alternating Fills 04",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => <AlternatingTable highlight="cols" showFooter={false} />,
};

export const NoVendorsFound: Story = {
    name: "No vendors found",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header
                title="Vendor movements"
                badge="240 vendors"
                description="Keep track of vendor security ratings."
                contentTrailing={
                    <div className="flex gap-2">
                        <Button variant="secondary">New project</Button>
                        <Button>Add vendor</Button>
                    </div>
                }
            />
            <Toolbar filters={vendorFilters} actions={<Button variant="secondary">Filters</Button>} />
            <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
                <FileIcon name="search" className="size-12 text-tertiary" />
                <div>
                    <h3 className="text-lg font-semibold text-secondary">No vendors found</h3>
                    <p className="text-sm text-tertiary">Your search “Stripe” did not match any vendors. Try again or add a new vendor.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <Button variant="secondary">Clear search</Button>
                    <Button>New vendor</Button>
                </div>
            </div>
        </TableCard.Root>
    ),
};

export const StartByUploadingFile: Story = {
    name: "Start by uploading file",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header
                title="Files uploaded"
                badge="10/20 seats"
                description="Any assets used in projects will live here."
                contentTrailing={<Button>Upload</Button>}
            />
            <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
                <div className="rounded-full border border-dashed border-secondary p-6">
                    <FileIcon name="upload" className="size-8 text-secondary" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-secondary">Start by uploading a file</h3>
                    <p className="text-sm text-tertiary">Any assets used in projects will live here. Start creating by uploading your files.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <Button variant="secondary">New project</Button>
                    <Button>Upload</Button>
                </div>
            </div>
        </TableCard.Root>
    ),
};

export const TableErrorState: Story = {
    name: "Something went wrong",
    args: {
        enableResize: false,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="100 users"
                description="We had trouble loading this page."
                contentTrailing={<Button>Refresh</Button>}
            />
            <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
                <div className="rounded-full border border-error/30 bg-error/5 p-6">
                    <span className="text-3xl">⚠️</span>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-secondary">Something went wrong…</h3>
                    <p className="text-sm text-tertiary">Please refresh the page or contact support if the issue persists.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <Button variant="secondary">Clear search</Button>
                    <Button>New project</Button>
                </div>
            </div>
        </TableCard.Root>
    ),
};

export const ResizableColumns: Story = {
    name: "Resizable Columns",
    args: {
        enableResize: true,
        enableReorder: false,
    },
    render: () => (
        <TableCard.Root>
            <TableCard.Header title="Team members" badge="5 users" description="Drag column edges to resize. Hover over the right edge of each column header to see the resize handle." />
            <Table aria-label="Team members" enableResize>
                <Table.Header>
                    <Table.Head id="name" label="Name" />
                    <Table.Head id="status" label="Status" />
                    <Table.Head id="role" label="Role" />
                    <Table.Head id="email" label="Email" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={users}>
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatar} alt={item.name} size="sm" />
                                    <span className="font-medium text-secondary">{item.name}</span>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge size="sm" color="success" type="pill-color" dot>
                                    {item.status}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>{item.role}</Table.Cell>
                            <Table.Cell>{item.email}</Table.Cell>
                            <Table.Cell>
                                <div className="flex justify-end">
                                    <TableRowActionsDropdown />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    ),
};

export const ReorderableColumns: Story = {
    name: "Reorderable Columns",
    args: {
        enableResize: false,
        enableReorder: true,
    },
    render: () => {
        const [columnOrder, setColumnOrder] = useState(["name", "status", "role", "email", "actions"]);

        const handleColumnReorder = (fromId: string, toId: string) => {
            const newOrder = [...columnOrder];
            const fromIndex = newOrder.indexOf(fromId);
            const toIndex = newOrder.indexOf(toId);
            newOrder.splice(fromIndex, 1);
            newOrder.splice(toIndex, 0, fromId);
            setColumnOrder(newOrder);
        };

        return (
            <TableCard.Root>
                <TableCard.Header title="Team members" badge="5 users" description="Drag column headers with the grip icon to reorder columns." />
                <Table key={columnOrder.join("-")} aria-label="Team members" enableReorder onColumnReorder={handleColumnReorder}>
                    <Table.Header>
                        {columnOrder.map((colId) => {
                            switch (colId) {
                                case "name":
                                    return <Table.Head key="name" id="name" label="Name" />;
                                case "status":
                                    return <Table.Head key="status" id="status" label="Status" />;
                                case "role":
                                    return <Table.Head key="role" id="role" label="Role" />;
                                case "email":
                                    return <Table.Head key="email" id="email" label="Email" />;
                                case "actions":
                                    return <Table.Head key="actions" id="actions" />;
                                default:
                                    return null;
                            }
                        })}
                    </Table.Header>
                    <Table.Body items={users}>
                        {(item) => (
                            <Table.Row id={item.id}>
                                {columnOrder.map((colId) => {
                                    switch (colId) {
                                        case "name":
                                            return (
                                                <Table.Cell key="name">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar src={item.avatar} alt={item.name} size="sm" />
                                                        <span className="font-medium text-secondary">{item.name}</span>
                                                    </div>
                                                </Table.Cell>
                                            );
                                        case "status":
                                            return (
                                                <Table.Cell key="status">
                                                    <Badge size="sm" color="success" type="pill-color" dot>
                                                        {item.status}
                                                    </Badge>
                                                </Table.Cell>
                                            );
                                        case "role":
                                            return <Table.Cell key="role">{item.role}</Table.Cell>;
                                        case "email":
                                            return <Table.Cell key="email">{item.email}</Table.Cell>;
                                        case "actions":
                                            return (
                                                <Table.Cell key="actions">
                                                    <div className="flex justify-end">
                                                        <TableRowActionsDropdown />
                                                    </div>
                                                </Table.Cell>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </TableCard.Root>
        );
    },
};

export const SortableResizableReorderableColumns: Story = {
    name: "All Features Combined",
    args: {
        enableResize: true,
        enableReorder: true,
        selectionMode: "multiple",
    },
    render: () => {
        const [columnOrder, setColumnOrder] = useState(["name", "status", "role", "email", "actions"]);

        const handleColumnReorder = (fromId: string, toId: string) => {
            const newOrder = [...columnOrder];
            const fromIndex = newOrder.indexOf(fromId);
            const toIndex = newOrder.indexOf(toId);
            newOrder.splice(fromIndex, 1);
            newOrder.splice(toIndex, 0, fromId);
            setColumnOrder(newOrder);
        };

        return (
            <TableCard.Root>
                <TableCard.Header
                    title="Team members"
                    badge="5 users"
                    description="Columns are sortable (click header), resizable (drag edges), and reorderable (drag with grip icon)."
                />
                <Table key={columnOrder.join("-")} aria-label="Team members" enableResize enableReorder onColumnReorder={handleColumnReorder} selectionMode="multiple">
                    <Table.Header>
                        {columnOrder.map((colId) => {
                            switch (colId) {
                                case "name":
                                    return <Table.Head key="name" id="name" label="Name" isRowHeader />;
                                case "status":
                                    return <Table.Head key="status" id="status" label="Status" />;
                                case "role":
                                    return <Table.Head key="role" id="role" label="Role" />;
                                case "email":
                                    return <Table.Head key="email" id="email" label="Email" />;
                                case "actions":
                                    return <Table.Head key="actions" id="actions" />;
                                default:
                                    return null;
                            }
                        })}
                    </Table.Header>
                    <Table.Body items={users}>
                        {(item) => (
                            <Table.Row id={item.id}>
                                {columnOrder.map((colId) => {
                                    switch (colId) {
                                        case "name":
                                            return (
                                                <Table.Cell key="name">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar src={item.avatar} alt={item.name} size="sm" />
                                                        <span className="font-medium text-secondary">{item.name}</span>
                                                    </div>
                                                </Table.Cell>
                                            );
                                        case "status":
                                            return (
                                                <Table.Cell key="status">
                                                    <Badge size="sm" color="success" type="pill-color" dot>
                                                        {item.status}
                                                    </Badge>
                                                </Table.Cell>
                                            );
                                        case "role":
                                            return <Table.Cell key="role">{item.role}</Table.Cell>;
                                        case "email":
                                            return <Table.Cell key="email">{item.email}</Table.Cell>;
                                        case "actions":
                                            return (
                                                <Table.Cell key="actions">
                                                    <div className="flex justify-end">
                                                        <TableRowActionsDropdown />
                                                    </div>
                                                </Table.Cell>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                <PaginationCardDefault />
            </TableCard.Root>
        );
    },
};
