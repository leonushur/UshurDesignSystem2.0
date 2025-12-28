import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: "Welcome/Data Binding Guide",
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "How to connect components to your backend, APIs, and databases.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
    render: () => (
        <div className="min-h-screen bg-bg-primary p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-4 pb-6 border-b border-border-secondary">
                    <h1 className="text-display-lg font-bold text-fg-primary">Data Binding & Backend Integration</h1>
                    <p className="text-xl text-fg-secondary">
                        Connect Ushur Design System components to your backend services, databases, and APIs.
                    </p>
                </div>

                {/* Quick Reference Table */}
                <div className="rounded-xl border border-border-primary overflow-hidden">
                    <div className="bg-bg-secondary px-4 py-3 border-b border-border-secondary">
                        <h2 className="text-lg font-semibold text-fg-primary">Quick Reference</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium text-fg-secondary">Component</th>
                                    <th className="px-4 py-3 text-left font-medium text-fg-secondary">Data Source</th>
                                    <th className="px-4 py-3 text-left font-medium text-fg-secondary">Key Props</th>
                                    <th className="px-4 py-3 text-left font-medium text-fg-secondary">Output</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-secondary">
                                <tr>
                                    <td className="px-4 py-3 font-mono text-fg-primary">Table</td>
                                    <td className="px-4 py-3 text-fg-tertiary">API/Database array</td>
                                    <td className="px-4 py-3 font-mono text-xs text-fg-secondary">items, columns, children</td>
                                    <td className="px-4 py-3 text-fg-tertiary">Row selection, sort state</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-fg-primary">Select</td>
                                    <td className="px-4 py-3 text-fg-tertiary">Options array</td>
                                    <td className="px-4 py-3 font-mono text-xs text-fg-secondary">items, selectedKey</td>
                                    <td className="px-4 py-3 text-fg-tertiary">Selected item via callback</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-fg-primary">Form Fields</td>
                                    <td className="px-4 py-3 text-fg-tertiary">State/Form library</td>
                                    <td className="px-4 py-3 font-mono text-xs text-fg-secondary">value, onChange</td>
                                    <td className="px-4 py-3 text-fg-tertiary">User input values</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-fg-primary">Modal</td>
                                    <td className="px-4 py-3 text-fg-tertiary">State boolean</td>
                                    <td className="px-4 py-3 font-mono text-xs text-fg-secondary">isOpen, onOpenChange</td>
                                    <td className="px-4 py-3 text-fg-tertiary">Open/close state</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Core Concept */}
                <div className="rounded-xl border-2 border-border-brand bg-bg-brand_secondary p-6 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">💡</span>
                        <h2 className="text-display-sm font-bold text-fg-brand-primary">Core Concept: Components are Presentational</h2>
                    </div>
                    <p className="text-fg-secondary">
                        Design system components are <strong>presentational only</strong>. They render UI based on props and emit events when users interact.
                        They do NOT fetch data or manage global state.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="bg-bg-primary p-4 rounded-lg border border-border-primary">
                            <h3 className="font-semibold text-fg-success-primary mb-2">Components Handle</h3>
                            <ul className="text-sm text-fg-tertiary space-y-1 list-disc list-inside">
                                <li>Rendering UI based on props</li>
                                <li>Emitting events (onClick, onChange)</li>
                                <li>Accessibility & keyboard navigation</li>
                                <li>Styling & animations</li>
                            </ul>
                        </div>
                        <div className="bg-bg-primary p-4 rounded-lg border border-border-primary">
                            <h3 className="font-semibold text-fg-brand-primary mb-2">Your App Handles</h3>
                            <ul className="text-sm text-fg-tertiary space-y-1 list-disc list-inside">
                                <li>Data fetching (REST, GraphQL)</li>
                                <li>State management (React, Zustand)</li>
                                <li>Database connections (MongoDB, etc.)</li>
                                <li>Business logic & validation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Data Flow Diagram */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">Data Flow Pattern</h2>
                    <div className="bg-bg-secondary p-6 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre className="text-fg-secondary">{`┌─────────────────────────────────────────────────────────────┐
│                     YOUR APPLICATION                        │
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐ │
│  │   Backend   │───▶│   State     │───▶│  DS Components  │ │
│  │   (API)     │    │  (React)    │    │    (Props)      │ │
│  └─────────────┘    └─────────────┘    └─────────────────┘ │
│         ▲                                      │            │
│         │                                      │            │
│         └──────────────callbacks───────────────┘            │
└─────────────────────────────────────────────────────────────┘`}</pre>
                    </div>
                </div>

                {/* Pattern 1: REST API */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">Pattern 1: REST API + Table</h2>
                    <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs overflow-x-auto text-fg-secondary">
{`import { Table } from "@ushur/design-system/application";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

export function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from your Ushur backend
  useEffect(() => {
    fetch("https://api.ushur.com/v1/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Table aria-label="Users table">
      <Table.Header>
        <Table.Head id="name" label="Name" />
        <Table.Head id="email" label="Email" />
      </Table.Header>
      <Table.Body items={users}>
        {(user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}`}
                    </pre>
                </div>

                {/* Pattern 2: MongoDB */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">Pattern 2: MongoDB Connection</h2>
                    <div className="bg-bg-warning_subtle border border-border-warning rounded-lg p-4 mb-4">
                        <p className="text-sm text-fg-warning-primary">
                            <strong>Important:</strong> Database connections should stay server-side. Use API routes to connect to MongoDB.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-fg-secondary mb-2">Backend API Route (Next.js)</h3>
                            <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs overflow-x-auto text-fg-secondary">
{`// app/api/documents/route.ts
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function GET() {
  const db = client.db("ushur");
  const documents = await db.collection("documents").find().toArray();
  return Response.json(documents);
}`}
                            </pre>
                        </div>

                        <div>
                            <h3 className="font-medium text-fg-secondary mb-2">Frontend Component</h3>
                            <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs overflow-x-auto text-fg-secondary">
{`// Uses the API route, NOT direct DB connection
const { data } = useQuery({
  queryKey: ["documents"],
  queryFn: () => fetch("/api/documents").then((r) => r.json()),
});

return (
  <Table aria-label="Documents">
    <Table.Body items={data}>
      {(doc) => <Table.Row key={doc._id}>...</Table.Row>}
    </Table.Body>
  </Table>
);`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Pattern 3: Form Submission */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">Pattern 3: Form with Backend Submission</h2>
                    <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs overflow-x-auto text-fg-secondary">
{`import { Input, Select, Button } from "@ushur/design-system/base";
import { useState } from "react";

export function CreateUserForm({ onSuccess }) {
  const [formData, setFormData] = useState({ name: "", department: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) onSuccess();
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        isRequired
      />

      <Select
        label="Department"
        selectedKey={formData.department}
        onSelectionChange={(key) => setFormData({ ...formData, department: key })}
      >
        <Select.Item id="engineering">Engineering</Select.Item>
        <Select.Item id="sales">Sales</Select.Item>
      </Select>

      <Button type="submit" isDisabled={submitting}>
        {submitting ? "Creating..." : "Create User"}
      </Button>
    </form>
  );
}`}
                    </pre>
                </div>

                {/* State Management */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">State Management Integration</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-secondary">With Zustand</h3>
                            <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs overflow-x-auto text-fg-secondary">
{`const useStore = create((set) => ({
  users: [],
  fetchUsers: async () => {
    const res = await fetch("/api/users");
    set({ users: await res.json() });
  },
}));

function UsersPage() {
  const { users, fetchUsers } = useStore();
  useEffect(() => { fetchUsers(); }, []);
  return <Table items={users}>...</Table>;
}`}
                            </pre>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-secondary">With React Query</h3>
                            <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-xs overflow-x-auto text-fg-secondary">
{`const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: () =>
    fetch("/api/users").then(r => r.json()),
});

if (isLoading) return <Skeleton />;
return <Table items={data}>...</Table>;`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Props Reference */}
                <div className="rounded-lg border border-border-primary overflow-hidden">
                    <div className="bg-bg-secondary px-4 py-3 border-b border-border-secondary">
                        <h2 className="text-lg font-semibold text-fg-primary">Component Props Reference</h2>
                    </div>
                    <div className="p-4 space-y-6">
                        {/* Table Props */}
                        <div>
                            <h3 className="font-semibold text-fg-primary mb-2">Table Component</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-bg-secondary">
                                        <tr>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Prop</th>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Type</th>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-secondary">
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">selectionMode</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">"none" | "single" | "multiple"</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Row selection mode</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">selectedKeys</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">{`Set<Key>`}</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Currently selected row keys</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">onSelectionChange</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">{`(keys: Set<Key>) => void`}</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Selection change callback</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">onSortChange</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">{`(descriptor) => void`}</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Sort change callback</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Select Props */}
                        <div>
                            <h3 className="font-semibold text-fg-primary mb-2">Select Component</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-bg-secondary">
                                        <tr>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Prop</th>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Type</th>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-secondary">
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">items</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">SelectItemType[]</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Array of options</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">selectedKey</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">Key</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Currently selected item key</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">onSelectionChange</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">{`(key: Key) => void`}</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Selection change callback</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Input Props */}
                        <div>
                            <h3 className="font-semibold text-fg-primary mb-2">Input Component</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-bg-secondary">
                                        <tr>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Prop</th>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Type</th>
                                            <th className="px-3 py-2 text-left font-medium text-fg-secondary">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-secondary">
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">value</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">string</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Controlled input value</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">onChange</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">{`(e: ChangeEvent) => void`}</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Value change handler</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">isInvalid</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">boolean</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Show error state</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-primary">errorMessage</td>
                                            <td className="px-3 py-2 font-mono text-xs text-fg-tertiary">string</td>
                                            <td className="px-3 py-2 text-fg-tertiary">Error message to display</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="rounded-xl border-2 border-border-success bg-bg-success_subtle p-6 space-y-4">
                    <h2 className="text-display-xs font-bold text-fg-success-primary">Summary</h2>
                    <ol className="text-fg-secondary space-y-2 list-decimal list-inside">
                        <li><strong>Components accept data via props</strong> — pass your fetched data as props</li>
                        <li><strong>Components emit events via callbacks</strong> — handle onSelectionChange, onChange, etc.</li>
                        <li><strong>You manage state</strong> — use React state, Zustand, Redux, or any state library</li>
                        <li><strong>You connect to backends</strong> — fetch data in your app, not in components</li>
                        <li><strong>Database connections stay server-side</strong> — use API routes for MongoDB/PostgreSQL</li>
                    </ol>
                    <p className="text-sm text-fg-tertiary pt-2">
                        The design system provides the UI building blocks. Your application provides the data and business logic.
                    </p>
                </div>

                {/* Footer */}
                <div className="text-center pt-6 border-t border-border-secondary">
                    <p className="text-sm text-fg-quaternary">
                        See also: <a href="?path=/story/welcome-introduction--welcome" className="text-fg-brand-primary hover:underline">Introduction</a> • <a href="?path=/story/welcome-design-tokens--tokens" className="text-fg-brand-primary hover:underline">Design Tokens</a>
                    </p>
                </div>
            </div>
        </div>
    ),
};
