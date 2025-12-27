import type { Meta, StoryObj } from "@storybook/react";
import {
    WelcomeEmail,
    PasswordResetEmail,
    InvoiceEmail,
    NewsletterEmail,
    OrderConfirmationEmail,
} from "./email-templates";

const meta: Meta = {
    title: "Marketing/Email Templates",
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;

// ============================================
// Welcome Email
// ============================================

export const Welcome: StoryObj = {
    name: "Welcome Email",
    render: () => <WelcomeEmail userName="Olivia" companyName="Untitled UI" />,
};

export const WelcomeCustomized: StoryObj = {
    name: "Welcome Email - Customized",
    render: () => (
        <WelcomeEmail
            userName="John"
            companyName="Acme Corp"
            primaryColor="#2563eb"
            ctaText="Start Building"
            ctaUrl="https://example.com/onboarding"
        />
    ),
};

// ============================================
// Password Reset Email
// ============================================

export const PasswordReset: StoryObj = {
    name: "Password Reset Email",
    render: () => <PasswordResetEmail userName="Olivia" />,
};

export const PasswordResetUrgent: StoryObj = {
    name: "Password Reset - Short Expiry",
    render: () => (
        <PasswordResetEmail
            userName="John"
            expiryTime="1 hour"
            primaryColor="#dc2626"
        />
    ),
};

// ============================================
// Invoice Email
// ============================================

export const Invoice: StoryObj = {
    name: "Invoice Email",
    render: () => <InvoiceEmail />,
};

export const InvoiceCustom: StoryObj = {
    name: "Invoice - Custom Items",
    render: () => (
        <InvoiceEmail
            invoiceNumber="INV-2024-089"
            customerName="Acme Corporation"
            items={[
                { description: "Enterprise Plan - Annual", quantity: 1, price: 2400.0 },
                { description: "Priority Support", quantity: 1, price: 600.0 },
                { description: "API Access - 1M calls", quantity: 2, price: 200.0 },
            ]}
            subtotal={3400.0}
            tax={272.0}
            total={3672.0}
            primaryColor="#059669"
        />
    ),
};

// ============================================
// Newsletter Email
// ============================================

export const Newsletter: StoryObj = {
    name: "Newsletter Email",
    render: () => <NewsletterEmail />,
};

export const NewsletterTech: StoryObj = {
    name: "Newsletter - Tech Focus",
    render: () => (
        <NewsletterEmail
            companyName="Tech Weekly"
            headline="This Week in Tech"
            preheader="The latest from the world of technology"
            primaryColor="#0891b2"
            articles={[
                {
                    title: "AI Revolution in Software Development",
                    excerpt: "How artificial intelligence is transforming the way we write and review code.",
                    url: "#",
                },
                {
                    title: "The Rise of Edge Computing",
                    excerpt: "Why more companies are moving their processing closer to the data source.",
                    url: "#",
                },
                {
                    title: "Sustainable Tech Practices",
                    excerpt: "Green coding and eco-friendly infrastructure are becoming industry standards.",
                    url: "#",
                },
                {
                    title: "Quantum Computing Update",
                    excerpt: "Recent breakthroughs bringing quantum computing closer to practical applications.",
                    url: "#",
                },
            ]}
        />
    ),
};

// ============================================
// Order Confirmation Email
// ============================================

export const OrderConfirmation: StoryObj = {
    name: "Order Confirmation Email",
    render: () => <OrderConfirmationEmail />,
};

export const OrderConfirmationLarge: StoryObj = {
    name: "Order Confirmation - Large Order",
    render: () => (
        <OrderConfirmationEmail
            companyName="Fashion Store"
            orderNumber="ORD-2024-5678"
            customerName="Jane Smith"
            shippingAddress="456 Oak Avenue, Apt 12B, New York, NY 10001"
            items={[
                { name: "Silk Blouse (White, S)", quantity: 1, price: 129.0 },
                { name: "Tailored Pants (Navy, 28)", quantity: 2, price: 89.0 },
                { name: "Leather Belt (Brown)", quantity: 1, price: 59.0 },
                { name: "Cashmere Scarf (Gray)", quantity: 1, price: 149.0 },
            ]}
            subtotal={515.0}
            shipping={0}
            total={515.0}
            primaryColor="#be185d"
        />
    ),
};

// ============================================
// All Templates Overview
// ============================================

export const AllTemplates: StoryObj = {
    name: "All Templates Overview",
    render: () => (
        <div className="space-y-8 bg-bg-secondary p-8">
            <div>
                <h2 className="mb-4 text-lg font-semibold text-fg-primary">Welcome Email</h2>
                <WelcomeEmail />
            </div>
            <div>
                <h2 className="mb-4 text-lg font-semibold text-fg-primary">Password Reset Email</h2>
                <PasswordResetEmail />
            </div>
            <div>
                <h2 className="mb-4 text-lg font-semibold text-fg-primary">Invoice Email</h2>
                <InvoiceEmail />
            </div>
            <div>
                <h2 className="mb-4 text-lg font-semibold text-fg-primary">Newsletter Email</h2>
                <NewsletterEmail />
            </div>
            <div>
                <h2 className="mb-4 text-lg font-semibold text-fg-primary">Order Confirmation Email</h2>
                <OrderConfirmationEmail />
            </div>
        </div>
    ),
};


