import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./form";

const meta: Meta<typeof Form> = {
    title: "Components/Form",
    component: Form,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
    render: () => (
        <Form className="space-y-4 rounded-xl border border-border-secondary p-6">
            <label className="block text-sm font-medium text-foreground-secondary">
                Name
                <input className="mt-1 block w-full rounded-lg border border-border-primary px-3 py-2 text-sm" placeholder="Jane Doe" />
            </label>
            <label className="block text-sm font-medium text-foreground-secondary">
                Email
                <input className="mt-1 block w-full rounded-lg border border-border-primary px-3 py-2 text-sm" placeholder="jane@company.com" />
            </label>
            <button className="rounded-lg bg-brand-solid px-4 py-2 text-sm font-semibold text-white">Submit</button>
        </Form>
    ),
};

