import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableCard, TableRowActionsDropdown } from "./table";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { PaginationCardDefault } from "@/components/application/pagination/pagination";

const meta: Meta<typeof Table> = {
    title: "Application/Table",
    component: Table,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
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

export const Default: Story = {
    render: () => (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="5 users"
                description="Manage your team members and their account permissions here."
            />
            <Table aria-label="Team members" selectionMode="multiple">
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
            <PaginationCardDefault />
        </TableCard.Root>
    ),
};

