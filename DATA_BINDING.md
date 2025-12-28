# Data Binding & Backend Integration Guide

This guide explains how to connect Ushur Design System components to your backend services, databases, and APIs.

---

## Quick Reference

| Component Type | Data Source | Key Props | Output |
|---------------|-------------|-----------|--------|
| Table | API/Database array | `items`, `columns`, `children` | Row selection, sort state |
| Select | Options array | `items`, `children`, `selectedKey` | Selected item via `onSelectionChange` |
| Form Fields | State/Form library | `value`, `onChange` | User input values |
| Modal | State boolean | `isOpen`, `onOpenChange` | Open/close state |

---

## Core Concepts

### 1. Components are Presentational

Design system components are **presentational only**. They:
- Render UI based on props
- Emit events when users interact
- Do NOT fetch data or manage global state

Your application handles:
- Data fetching (REST, GraphQL, etc.)
- State management (React state, Zustand, Redux, etc.)
- Database connections (MongoDB, PostgreSQL, etc.)

### 2. Data Flow Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                     YOUR APPLICATION                        │
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐ │
│  │   Backend   │───▶│   State     │───▶│  DS Components  │ │
│  │   (API)     │    │  (React)    │    │    (Props)      │ │
│  └─────────────┘    └─────────────┘    └─────────────────┘ │
│         ▲                                      │            │
│         │                                      │            │
│         └──────────────callbacks───────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

---

## Integration Patterns

### Pattern 1: REST API + Table Component

```tsx
import { Table } from "@/components/application/table";
import { useEffect, useState } from "react";

// Define your data type
interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

export function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from your Ushur backend
  useEffect(() => {
    fetch("https://api.ushur.com/v1/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <TableSkeleton />;
  if (error) return <ErrorState message={error} />;

  return (
    <Table aria-label="Users table">
      <Table.Header>
        <Table.Head id="name" label="Name" />
        <Table.Head id="email" label="Email" />
        <Table.Head id="status" label="Status" />
      </Table.Header>
      <Table.Body items={users}>
        {(user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>
              <StatusBadge status={user.status} />
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
```

### Pattern 2: MongoDB with React Query

```tsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Table } from "@/components/application/table";
import { Modal } from "@/components/application/modal";

// MongoDB API wrapper (you provide this)
import { mongoClient } from "@/lib/mongodb";

interface Document {
  _id: string;
  title: string;
  createdAt: Date;
}

export function DocumentsTable() {
  const queryClient = useQueryClient();

  // Fetch documents from MongoDB via your API
  const { data: documents, isLoading } = useQuery({
    queryKey: ["documents"],
    queryFn: () => mongoClient.collection("documents").find().toArray(),
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      mongoClient.collection("documents").deleteOne({ _id: id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
  });

  return (
    <Table aria-label="Documents">
      <Table.Header>
        <Table.Head id="title" label="Title" />
        <Table.Head id="created" label="Created" />
        <Table.Head id="actions" label="Actions" />
      </Table.Header>
      <Table.Body items={documents ?? []}>
        {(doc) => (
          <Table.Row key={doc._id}>
            <Table.Cell>{doc.title}</Table.Cell>
            <Table.Cell>{formatDate(doc.createdAt)}</Table.Cell>
            <Table.Cell>
              <Button onPress={() => deleteMutation.mutate(doc._id)}>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
```

### Pattern 3: Form with Backend Submission

```tsx
import { Input } from "@/components/base/input";
import { Select } from "@/components/base/select";
import { Button } from "@/components/base/button";
import { useState } from "react";

interface FormData {
  name: string;
  department: string;
}

export function CreateUserForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    department: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSuccess();
      }
    } finally {
      setSubmitting(false);
    }
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
        onSelectionChange={(key) =>
          setFormData({ ...formData, department: key as string })
        }
      >
        <Select.Item id="engineering">Engineering</Select.Item>
        <Select.Item id="sales">Sales</Select.Item>
        <Select.Item id="support">Support</Select.Item>
      </Select>

      <Button type="submit" isDisabled={submitting}>
        {submitting ? "Creating..." : "Create User"}
      </Button>
    </form>
  );
}
```

---

## Component Props Reference

### Table Component

| Prop | Type | Description |
|------|------|-------------|
| `aria-label` | `string` | Required accessibility label |
| `selectionMode` | `"none" \| "single" \| "multiple"` | Row selection mode |
| `selectedKeys` | `Set<Key>` | Currently selected row keys |
| `onSelectionChange` | `(keys: Set<Key>) => void` | Selection change callback |
| `sortDescriptor` | `SortDescriptor` | Current sort state |
| `onSortChange` | `(descriptor: SortDescriptor) => void` | Sort change callback |

### Select Component

| Prop | Type | Description |
|------|------|-------------|
| `items` | `SelectItemType[]` | Array of options |
| `selectedKey` | `Key` | Currently selected item key |
| `onSelectionChange` | `(key: Key) => void` | Selection change callback |
| `isDisabled` | `boolean` | Disable the select |
| `isRequired` | `boolean` | Mark as required |
| `placeholder` | `string` | Placeholder text |

### Input Component

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Controlled input value |
| `onChange` | `(e: ChangeEvent) => void` | Value change handler |
| `defaultValue` | `string` | Uncontrolled default value |
| `isDisabled` | `boolean` | Disable the input |
| `isInvalid` | `boolean` | Show error state |
| `errorMessage` | `string` | Error message to display |

---

## State Management Integration

### With Zustand

```tsx
import { create } from "zustand";
import { Table } from "@/components/application/table";

interface UserStore {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}

const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  loading: false,
  fetchUsers: async () => {
    set({ loading: true });
    const res = await fetch("/api/users");
    const users = await res.json();
    set({ users, loading: false });
  },
  deleteUser: async (id) => {
    await fetch(`/api/users/${id}`, { method: "DELETE" });
    set({ users: get().users.filter((u) => u.id !== id) });
  },
}));

function UsersPage() {
  const { users, loading, fetchUsers, deleteUser } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Table aria-label="Users">
      <Table.Body items={users}>
        {(user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>
              <Button onPress={() => deleteUser(user.id)}>Delete</Button>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
```

### With React Hook Form

```tsx
import { useForm } from "react-hook-form";
import { Input } from "@/components/base/input";
import { Checkbox } from "@/components/base/checkbox";
import { Button } from "@/components/base/button";

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        {...register("email", { required: "Email is required" })}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        {...register("password", { required: "Password is required" })}
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
      />

      <Checkbox {...register("rememberMe")}>
        Remember me
      </Checkbox>

      <Button type="submit">Log In</Button>
    </form>
  );
}
```

---

## MongoDB Connection Example

The design system doesn't connect to databases directly. Here's how your app should handle it:

### Backend API Route (Next.js Example)

```ts
// app/api/documents/route.ts
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function GET() {
  const db = client.db("ushur");
  const documents = await db.collection("documents").find().toArray();
  return Response.json(documents);
}

export async function POST(request: Request) {
  const body = await request.json();
  const db = client.db("ushur");
  const result = await db.collection("documents").insertOne(body);
  return Response.json({ id: result.insertedId });
}
```

### Frontend Component

```tsx
// Uses the API route, not direct DB connection
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
);
```

---

## Summary

1. **Components accept data via props** - pass your fetched data as props
2. **Components emit events via callbacks** - handle `onSelectionChange`, `onChange`, etc.
3. **You manage state** - use React state, Zustand, Redux, or any state library
4. **You connect to backends** - fetch data in your app, not in components
5. **Database connections stay server-side** - use API routes for MongoDB/PostgreSQL

The design system provides the UI building blocks. Your application provides the data and business logic.
