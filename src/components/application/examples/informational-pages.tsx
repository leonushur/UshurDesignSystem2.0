import { type ReactNode, useState } from "react";
import { cx } from "@/utils/cx";
import {
    SearchMd,
    BookClosed,
    HelpCircle,
    File02,
    VideoRecorder,
    MessageCircle02,
    ChevronRight,
    ChevronDown,
    Home02,
    Zap,
    Settings01,
    CreditCard01,
    Users01,
    Shield01,
    Globe01,
    Mail01,
    Phone01,
    Clock,
    Check,
    ArrowRight,
    BookOpen01,
    Lightbulb01,
    Play,
    ExternalLink01,
} from "@untitledui-pro/icons/line";

// ============================================
// Shared Components
// ============================================

interface SidebarCategoryProps {
    title: string;
    icon: ReactNode;
    items: { label: string; href: string; active?: boolean }[];
    defaultExpanded?: boolean;
}

const SidebarCategory = ({ title, icon, items, defaultExpanded = false }: SidebarCategoryProps) => {
    const [expanded, setExpanded] = useState(defaultExpanded);

    return (
        <div className="mb-2">
            <button
                onClick={() => setExpanded(!expanded)}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover hover:text-fg-primary"
            >
                <span className="size-5">{icon}</span>
                <span className="flex-1 text-left">{title}</span>
                {expanded ? (
                    <ChevronDown className="size-4 text-fg-quaternary" />
                ) : (
                    <ChevronRight className="size-4 text-fg-quaternary" />
                )}
            </button>
            {expanded && (
                <div className="ml-7 mt-1 space-y-1 border-l border-border-secondary pl-3">
                    {items.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className={cx(
                                "block rounded-md px-3 py-1.5 text-sm transition-colors",
                                item.active
                                    ? "bg-bg-brand_secondary text-fg-brand-primary font-medium"
                                    : "text-fg-tertiary hover:text-fg-primary hover:bg-bg-secondary_hover",
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

interface ArticleCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    category?: string;
}

const ArticleCard = ({ title, description, icon, href, category }: ArticleCardProps) => (
    <a
        href={href}
        className="group block rounded-xl border border-border-primary bg-bg-primary p-6 transition-all hover:border-border-brand hover:shadow-md"
    >
        <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-bg-secondary text-fg-quaternary group-hover:bg-bg-brand_secondary group-hover:text-fg-brand-primary">
            {icon}
        </div>
        {category && (
            <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-fg-brand-primary">
                {category}
            </span>
        )}
        <h3 className="mb-2 font-semibold text-fg-primary group-hover:text-fg-brand-primary">{title}</h3>
        <p className="text-sm text-fg-tertiary">{description}</p>
    </a>
);

// ============================================
// Help Center / Knowledge Base Page
// ============================================

export interface HelpCenterPageProps {
    companyName?: string;
    logo?: ReactNode;
}

export const HelpCenterPage = ({ companyName = "Untitled UI", logo }: HelpCenterPageProps) => {
    return (
        <div className="min-h-screen bg-bg-secondary">
            {/* Header */}
            <header className="border-b border-border-secondary bg-bg-primary">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        {logo || (
                            <div className="flex size-8 items-center justify-center rounded-lg bg-bg-brand-solid text-fg-white font-bold">
                                U
                            </div>
                        )}
                        <span className="font-semibold text-fg-primary">{companyName}</span>
                        <span className="text-fg-quaternary">/</span>
                        <span className="text-fg-tertiary">Help Center</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">
                            Contact Support
                        </a>
                        <a
                            href="#"
                            className="rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover"
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero SearchMd */}
            <div className="bg-bg-primary py-16">
                <div className="mx-auto max-w-2xl px-6 text-center">
                    <h1 className="mb-4 text-3xl font-semibold text-fg-primary">How can we help you?</h1>
                    <p className="mb-8 text-fg-tertiary">
                        SearchMd our knowledge base or browse categories below
                    </p>
                    <div className="relative">
                        <SearchMd className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-fg-quaternary" />
                        <input
                            type="text"
                            placeholder="SearchMd for articles..."
                            className="w-full rounded-xl border border-border-primary bg-bg-primary py-4 pl-12 pr-4 text-fg-primary shadow-sm placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                        />
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <h2 className="mb-8 text-xl font-semibold text-fg-primary">Browse by category</h2>
                <div className="grid grid-cols-3 gap-6">
                    <ArticleCard
                        icon={<Zap className="size-5" />}
                        title="Getting Started"
                        description="Learn the basics and get up and running quickly with our platform."
                        href="#"
                        category="Beginner"
                    />
                    <ArticleCard
                        icon={<Settings01 className="size-5" />}
                        title="Account Settings"
                        description="Manage your account, profile, and preferences."
                        href="#"
                    />
                    <ArticleCard
                        icon={<CreditCard01 className="size-5" />}
                        title="Billing & Payments"
                        description="Invoices, subscriptions, and payment methods."
                        href="#"
                    />
                    <ArticleCard
                        icon={<Users01 className="size-5" />}
                        title="Team Management"
                        description="Add members, manage roles, and collaborate effectively."
                        href="#"
                    />
                    <ArticleCard
                        icon={<Shield01 className="size-5" />}
                        title="Security & Privacy"
                        description="Two-factor authentication, data protection, and compliance."
                        href="#"
                    />
                    <ArticleCard
                        icon={<Globe01 className="size-5" />}
                        title="API & Integrations"
                        description="Connect with third-party services and build custom integrations."
                        href="#"
                    />
                </div>
            </div>

            {/* Popular Articles */}
            <div className="border-t border-border-secondary bg-bg-primary py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="mb-8 text-xl font-semibold text-fg-primary">Popular articles</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { title: "How to reset your password", views: "12,345 views" },
                            { title: "Understanding your invoice", views: "8,234 views" },
                            { title: "Setting up two-factor authentication", views: "7,891 views" },
                            { title: "Inviting team members", views: "6,543 views" },
                            { title: "Connecting your first integration", views: "5,432 views" },
                            { title: "Exporting your data", views: "4,321 views" },
                        ].map((article, i) => (
                            <a
                                key={i}
                                href="#"
                                className="flex items-center justify-between rounded-lg border border-border-primary bg-bg-primary p-4 transition-colors hover:border-border-brand hover:bg-bg-secondary_hover"
                            >
                                <div className="flex items-center gap-3">
                                    <File02 className="size-5 text-fg-quaternary" />
                                    <span className="font-medium text-fg-primary">{article.title}</span>
                                </div>
                                <span className="text-sm text-fg-quaternary">{article.views}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="rounded-2xl bg-bg-brand_secondary p-8 text-center">
                    <h2 className="mb-2 text-xl font-semibold text-fg-primary">Still need help?</h2>
                    <p className="mb-6 text-fg-tertiary">
                        Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover"
                        >
                            <MessageCircle02 className="size-4" />
                            Start a chat
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover"
                        >
                            <Mail01 className="size-4" />
                            Email support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
HelpCenterPage.displayName = "HelpCenterPage";

// ============================================
// Documentation Page with Sidebar
// ============================================

export interface DocumentationPageProps {
    companyName?: string;
    logo?: ReactNode;
}

export const DocumentationPage = ({ companyName = "Untitled UI", logo }: DocumentationPageProps) => {
    return (
        <div className="min-h-screen bg-bg-primary">
            {/* Header */}
            <header className="sticky top-0 z-10 border-b border-border-secondary bg-bg-primary">
                <div className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            {logo || (
                                <div className="flex size-8 items-center justify-center rounded-lg bg-bg-brand-solid text-fg-white font-bold">
                                    U
                                </div>
                            )}
                            <span className="font-semibold text-fg-primary">Docs</span>
                        </div>
                        <nav className="flex items-center gap-4">
                            <a href="#" className="text-sm font-medium text-fg-brand-primary">
                                Guides
                            </a>
                            <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">
                                API Reference
                            </a>
                            <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">
                                Examples
                            </a>
                            <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">
                                Changelog
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SearchMd className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-quaternary" />
                            <input
                                type="text"
                                placeholder="SearchMd docs..."
                                className="h-9 w-64 rounded-lg border border-border-primary bg-bg-secondary pl-9 pr-3 text-sm placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                            />
                            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border-secondary bg-bg-primary px-1.5 text-xs text-fg-quaternary">
                                ⌘K
                            </kbd>
                        </div>
                        <a
                            href="#"
                            className="rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 flex-shrink-0 overflow-y-auto border-r border-border-secondary p-4">
                    <SidebarCategory
                        title="Getting Started"
                        icon={<Zap className="size-4" />}
                        defaultExpanded
                        items={[
                            { label: "Introduction", href: "#", active: true },
                            { label: "Installation", href: "#" },
                            { label: "Quick Start", href: "#" },
                            { label: "Project Structure", href: "#" },
                        ]}
                    />
                    <SidebarCategory
                        title="Core Concepts"
                        icon={<BookOpen01 className="size-4" />}
                        items={[
                            { label: "Authentication", href: "#" },
                            { label: "Authorization", href: "#" },
                            { label: "Data Fetching", href: "#" },
                            { label: "State Management", href: "#" },
                        ]}
                    />
                    <SidebarCategory
                        title="Components"
                        icon={<BookClosed className="size-4" />}
                        items={[
                            { label: "Buttons", href: "#" },
                            { label: "Forms", href: "#" },
                            { label: "Tables", href: "#" },
                            { label: "Modals", href: "#" },
                        ]}
                    />
                    <SidebarCategory
                        title="API Reference"
                        icon={<File02 className="size-4" />}
                        items={[
                            { label: "REST API", href: "#" },
                            { label: "GraphQL", href: "#" },
                            { label: "Webhooks", href: "#" },
                            { label: "SDKs", href: "#" },
                        ]}
                    />
                </aside>

                {/* Main Content */}
                <main className="flex-1 px-12 py-8">
                    <div className="mx-auto max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="mb-6 flex items-center gap-2 text-sm">
                            <a href="#" className="text-fg-tertiary hover:text-fg-primary">
                                Docs
                            </a>
                            <ChevronRight className="size-4 text-fg-quaternary" />
                            <a href="#" className="text-fg-tertiary hover:text-fg-primary">
                                Getting Started
                            </a>
                            <ChevronRight className="size-4 text-fg-quaternary" />
                            <span className="text-fg-primary">Introduction</span>
                        </nav>

                        {/* Article */}
                        <article>
                            <h1 className="mb-4 text-3xl font-bold text-fg-primary">Introduction</h1>
                            <p className="mb-6 text-lg text-fg-tertiary">
                                Welcome to {companyName}! This guide will help you get started with our platform and
                                understand the core concepts.
                            </p>

                            <div className="mb-8 rounded-xl border border-border-brand bg-bg-brand_secondary p-4">
                                <div className="flex items-start gap-3">
                                    <Lightbulb01 className="mt-0.5 size-5 text-fg-brand-primary" />
                                    <div>
                                        <p className="font-medium text-fg-primary">Pro tip</p>
                                        <p className="text-sm text-fg-tertiary">
                                            Use keyboard shortcut <kbd className="rounded bg-bg-primary px-1.5 py-0.5 text-xs">⌘K</kbd> to
                                            quickly search the documentation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="mb-4 mt-8 text-xl font-semibold text-fg-primary">What is {companyName}?</h2>
                            <p className="mb-4 text-fg-secondary leading-relaxed">
                                {companyName} is a powerful platform that helps you build modern applications faster.
                                Our comprehensive suite of tools and components allows you to focus on what matters most
                                - creating great user experiences.
                            </p>
                            <p className="mb-4 text-fg-secondary leading-relaxed">
                                Whether you're building a simple website or a complex enterprise application, our
                                platform provides the foundation you need to succeed.
                            </p>

                            <h2 className="mb-4 mt-8 text-xl font-semibold text-fg-primary">Key Features</h2>
                            <ul className="mb-6 space-y-3">
                                {[
                                    "Pre-built components that follow best practices",
                                    "Comprehensive theming system with dark mode support",
                                    "Fully accessible components built with React Aria",
                                    "TypeScript support out of the box",
                                    "Detailed documentation and examples",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="mt-1 size-4 text-fg-success-primary" />
                                        <span className="text-fg-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="mb-4 mt-8 text-xl font-semibold text-fg-primary">Next Steps</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="#"
                                    className="group flex items-center gap-3 rounded-xl border border-border-primary p-4 transition-colors hover:border-border-brand hover:bg-bg-secondary_hover"
                                >
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-bg-secondary group-hover:bg-bg-brand_secondary">
                                        <Zap className="size-5 text-fg-quaternary group-hover:text-fg-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-fg-primary">Installation</p>
                                        <p className="text-sm text-fg-tertiary">Get set up in minutes</p>
                                    </div>
                                    <ArrowRight className="ml-auto size-4 text-fg-quaternary group-hover:text-fg-brand-primary" />
                                </a>
                                <a
                                    href="#"
                                    className="group flex items-center gap-3 rounded-xl border border-border-primary p-4 transition-colors hover:border-border-brand hover:bg-bg-secondary_hover"
                                >
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-bg-secondary group-hover:bg-bg-brand_secondary">
                                        <Play className="size-5 text-fg-quaternary group-hover:text-fg-brand-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-fg-primary">Quick Start</p>
                                        <p className="text-sm text-fg-tertiary">Build your first app</p>
                                    </div>
                                    <ArrowRight className="ml-auto size-4 text-fg-quaternary group-hover:text-fg-brand-primary" />
                                </a>
                            </div>
                        </article>

                        {/* Article Footer */}
                        <div className="mt-12 border-t border-border-secondary pt-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-fg-tertiary">
                                    <Clock className="size-4" />
                                    Last updated: December 1, 2024
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-fg-tertiary">Was this helpful?</span>
                                    <button className="rounded-lg border border-border-primary px-3 py-1.5 text-sm text-fg-secondary hover:bg-bg-secondary_hover">
                                        Yes
                                    </button>
                                    <button className="rounded-lg border border-border-primary px-3 py-1.5 text-sm text-fg-secondary hover:bg-bg-secondary_hover">
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex items-center justify-between">
                            <div />
                            <a
                                href="#"
                                className="group flex items-center gap-2 text-fg-brand-primary hover:text-fg-brand-primary_hover"
                            >
                                Installation
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </main>

                {/* Table of Contents */}
                <aside className="sticky top-16 h-[calc(100vh-4rem)] w-56 flex-shrink-0 overflow-y-auto border-l border-border-secondary p-4">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-fg-quaternary">
                        On this page
                    </p>
                    <nav className="space-y-2">
                        <a href="#" className="block text-sm font-medium text-fg-brand-primary">
                            Introduction
                        </a>
                        <a href="#" className="block text-sm text-fg-tertiary hover:text-fg-primary">
                            What is {companyName}?
                        </a>
                        <a href="#" className="block text-sm text-fg-tertiary hover:text-fg-primary">
                            Key Features
                        </a>
                        <a href="#" className="block text-sm text-fg-tertiary hover:text-fg-primary">
                            Next Steps
                        </a>
                    </nav>
                </aside>
            </div>
        </div>
    );
};
DocumentationPage.displayName = "DocumentationPage";

// ============================================
// Support Ticket / Contact Page
// ============================================

export interface SupportPageProps {
    companyName?: string;
}

export const SupportPage = ({ companyName = "Untitled UI" }: SupportPageProps) => {
    return (
        <div className="min-h-screen bg-bg-secondary p-8">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-2xl font-semibold text-fg-primary">Contact Support</h1>
                    <p className="text-fg-tertiary">
                        We're here to help. Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="rounded-xl border border-border-primary bg-bg-primary p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                Subject
                            </label>
                            <select className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring">
                                <option>Select a topic</option>
                                <option>Account Issues</option>
                                <option>Billing Question</option>
                                <option>Technical Support</option>
                                <option>Feature Request</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                Priority
                            </label>
                            <div className="flex gap-4">
                                {["Low", "Medium", "High", "Urgent"].map((priority) => (
                                    <label key={priority} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="priority"
                                            className="size-4 accent-bg-brand-solid"
                                            defaultChecked={priority === "Medium"}
                                        />
                                        <span className="text-sm text-fg-secondary">{priority}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Describe your issue in detail..."
                                className="w-full resize-none rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                Attachments (optional)
                            </label>
                            <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border-primary py-8 hover:border-border-brand">
                                <div className="text-center">
                                    <File02 className="mx-auto mb-2 size-8 text-fg-quaternary" />
                                    <p className="text-sm text-fg-secondary">
                                        <span className="font-medium text-fg-brand-primary">Click to upload</span> or
                                        drag and drop
                                    </p>
                                    <p className="text-xs text-fg-quaternary">PNG, JPG, PDF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-bg-brand-solid py-3 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover"
                        >
                            Submit ticket
                        </button>
                    </form>
                </div>

                {/* Quick Help */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-xl border border-border-primary bg-bg-primary p-4 transition-colors hover:border-border-brand"
                    >
                        <BookClosed className="size-5 text-fg-quaternary" />
                        <div>
                            <p className="font-medium text-fg-primary">Knowledge Base</p>
                            <p className="text-sm text-fg-tertiary">Browse articles</p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-xl border border-border-primary bg-bg-primary p-4 transition-colors hover:border-border-brand"
                    >
                        <MessageCircle02 className="size-5 text-fg-quaternary" />
                        <div>
                            <p className="font-medium text-fg-primary">Live Chat</p>
                            <p className="text-sm text-fg-tertiary">Talk to us now</p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-xl border border-border-primary bg-bg-primary p-4 transition-colors hover:border-border-brand"
                    >
                        <Phone01 className="size-5 text-fg-quaternary" />
                        <div>
                            <p className="font-medium text-fg-primary">Phone Support</p>
                            <p className="text-sm text-fg-tertiary">Call 1-800-123-4567</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
SupportPage.displayName = "SupportPage";

// ============================================
// Video Tutorials Page
// ============================================

export interface TutorialsPageProps {
    companyName?: string;
}

export const TutorialsPage = ({ companyName = "Untitled UI" }: TutorialsPageProps) => {
    return (
        <div className="min-h-screen bg-bg-secondary">
            {/* Header */}
            <header className="border-b border-border-secondary bg-bg-primary">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    <h1 className="mb-2 text-2xl font-semibold text-fg-primary">Video Tutorials</h1>
                    <p className="text-fg-tertiary">
                        Learn how to use {companyName} with step-by-step video guides.
                    </p>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-6 py-8">
                {/* Featured */}
                <div className="mb-12">
                    <h2 className="mb-6 text-lg font-semibold text-fg-primary">Featured Tutorial</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="relative aspect-video overflow-hidden rounded-xl bg-bg-quaternary">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="flex size-16 items-center justify-center rounded-full bg-bg-brand-solid text-fg-white shadow-lg transition-transform hover:scale-110">
                                    <Play className="size-6 ml-1" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="mb-2 text-sm font-medium text-fg-brand-primary">Getting Started</span>
                            <h3 className="mb-3 text-xl font-semibold text-fg-primary">
                                Complete Platform Walkthrough
                            </h3>
                            <p className="mb-4 text-fg-tertiary">
                                A comprehensive introduction to all the features and capabilities of {companyName}.
                                Perfect for new users.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-fg-quaternary">
                                <span className="flex items-center gap-1">
                                    <Clock className="size-4" />
                                    15 min
                                </span>
                                <span>•</span>
                                <span>Beginner</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-8 flex items-center gap-2">
                    <button className="rounded-full bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white">
                        All
                    </button>
                    <button className="rounded-full border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                        Getting Started
                    </button>
                    <button className="rounded-full border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                        Features
                    </button>
                    <button className="rounded-full border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                        Advanced
                    </button>
                    <button className="rounded-full border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                        Integrations
                    </button>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {[
                        { title: "Setting Up Your Account", duration: "5 min", level: "Beginner" },
                        { title: "Creating Your First Project", duration: "8 min", level: "Beginner" },
                        { title: "Team Collaboration Features", duration: "12 min", level: "Intermediate" },
                        { title: "Advanced Data Analytics", duration: "18 min", level: "Advanced" },
                        { title: "API Integration Guide", duration: "22 min", level: "Advanced" },
                        { title: "Customizing Your Dashboard", duration: "10 min", level: "Intermediate" },
                        { title: "Security Best Practices", duration: "15 min", level: "Intermediate" },
                        { title: "Automating Workflows", duration: "20 min", level: "Advanced" },
                        { title: "Export & Reporting", duration: "7 min", level: "Beginner" },
                    ].map((video, i) => (
                        <a
                            key={i}
                            href="#"
                            className="group overflow-hidden rounded-xl border border-border-primary bg-bg-primary transition-all hover:border-border-brand hover:shadow-md"
                        >
                            <div className="relative aspect-video bg-bg-quaternary">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="flex size-12 items-center justify-center rounded-full bg-bg-brand-solid text-fg-white">
                                        <Play className="size-5 ml-0.5" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="mb-2 font-medium text-fg-primary group-hover:text-fg-brand-primary">
                                    {video.title}
                                </h3>
                                <span
                                    className={cx(
                                        "inline-block rounded-full px-2 py-0.5 text-xs font-medium",
                                        video.level === "Beginner" && "bg-utility-green-50 text-utility-green-700",
                                        video.level === "Intermediate" && "bg-utility-blue-50 text-utility-blue-700",
                                        video.level === "Advanced" && "bg-utility-purple-50 text-utility-purple-700",
                                    )}
                                >
                                    {video.level}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
TutorialsPage.displayName = "TutorialsPage";

// ============================================
// Changelog / Release Notes Page
// ============================================

export interface ChangelogPageProps {
    companyName?: string;
}

export const ChangelogPage = ({ companyName = "Untitled UI" }: ChangelogPageProps) => {
    return (
        <div className="min-h-screen bg-bg-primary">
            <div className="mx-auto max-w-3xl px-6 py-16">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-fg-primary">Changelog</h1>
                    <p className="text-fg-tertiary">
                        All the latest updates, improvements, and fixes to {companyName}.
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-12">
                    {[
                        {
                            version: "2.5.0",
                            date: "December 1, 2024",
                            title: "Dashboard 2.0 & Performance Improvements",
                            features: [
                                "Completely redesigned dashboard with new widgets",
                                "50% faster page load times",
                                "New chart types: radar and activity gauges",
                                "Improved mobile responsiveness",
                            ],
                            fixes: [
                                "Fixed date picker timezone issues",
                                "Resolved memory leak in real-time updates",
                                "Fixed export functionality for large datasets",
                            ],
                        },
                        {
                            version: "2.4.0",
                            date: "November 15, 2024",
                            title: "Team Collaboration Features",
                            features: [
                                "Real-time collaboration on documents",
                                "New team inbox and notifications",
                                "Improved permissions system",
                                "Slack and Teams integrations",
                            ],
                            fixes: [
                                "Fixed notification delivery delays",
                                "Resolved duplicate email issues",
                            ],
                        },
                        {
                            version: "2.3.0",
                            date: "October 20, 2024",
                            title: "API v2 & Developer Tools",
                            features: [
                                "New REST API v2 with improved rate limits",
                                "GraphQL API beta",
                                "API playground and documentation",
                                "Webhook retry mechanism",
                            ],
                            fixes: [
                                "Fixed API authentication edge cases",
                                "Improved error messages",
                            ],
                        },
                    ].map((release, i) => (
                        <div key={i} className="relative pl-8">
                            <div className="absolute left-0 top-0 flex size-6 items-center justify-center rounded-full bg-bg-brand-solid text-fg-white">
                                <Check className="size-3" />
                            </div>
                            {i < 2 && (
                                <div className="absolute left-3 top-6 h-full w-px bg-border-secondary" />
                            )}
                            <div className="mb-2 flex items-center gap-3">
                                <span className="rounded-full bg-bg-brand_secondary px-2.5 py-0.5 text-sm font-semibold text-fg-brand-primary">
                                    v{release.version}
                                </span>
                                <span className="text-sm text-fg-quaternary">{release.date}</span>
                            </div>
                            <h2 className="mb-4 text-xl font-semibold text-fg-primary">{release.title}</h2>

                            <div className="mb-4">
                                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-fg-success-primary">
                                    ✨ New Features
                                </h3>
                                <ul className="space-y-2">
                                    {release.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-fg-secondary">
                                            <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-fg-quaternary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-fg-tertiary">
                                    🐛 Bug Fixes
                                </h3>
                                <ul className="space-y-2">
                                    {release.fixes.map((fix, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-fg-tertiary">
                                            <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-fg-quaternary" />
                                            {fix}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-12 text-center">
                    <button className="rounded-lg border border-border-primary bg-bg-primary px-6 py-2.5 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                        Load older releases
                    </button>
                </div>
            </div>
        </div>
    );
};
ChangelogPage.displayName = "ChangelogPage";

// ============================================
// Status Page
// ============================================

export interface StatusPageProps {
    companyName?: string;
}

export const StatusPage = ({ companyName = "Untitled UI" }: StatusPageProps) => {
    return (
        <div className="min-h-screen bg-bg-secondary">
            {/* Header */}
            <header className="bg-utility-green-600 py-12 text-center text-white">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="size-3 animate-pulse rounded-full bg-white" />
                        <span className="text-lg font-medium">All Systems Operational</span>
                    </div>
                    <h1 className="text-3xl font-bold">{companyName} Status</h1>
                </div>
            </header>

            <div className="mx-auto max-w-3xl px-6 py-12">
                {/* Current Status */}
                <div className="mb-12 rounded-xl border border-border-primary bg-bg-primary p-6">
                    <h2 className="mb-6 text-lg font-semibold text-fg-primary">Current Status</h2>
                    <div className="space-y-4">
                        {[
                            { name: "API", status: "Operational", uptime: "99.99%" },
                            { name: "Web Application", status: "Operational", uptime: "99.98%" },
                            { name: "Database", status: "Operational", uptime: "100%" },
                            { name: "CDN", status: "Operational", uptime: "99.99%" },
                            { name: "Email Services", status: "Degraded", uptime: "98.5%" },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between rounded-lg border border-border-secondary p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={cx(
                                            "size-3 rounded-full",
                                            service.status === "Operational"
                                                ? "bg-utility-green-500"
                                                : "bg-utility-yellow-500",
                                        )}
                                    />
                                    <span className="font-medium text-fg-primary">{service.name}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-fg-quaternary">{service.uptime} uptime</span>
                                    <span
                                        className={cx(
                                            "rounded-full px-2 py-0.5 text-xs font-medium",
                                            service.status === "Operational"
                                                ? "bg-utility-green-50 text-utility-green-700"
                                                : "bg-utility-yellow-50 text-utility-yellow-700",
                                        )}
                                    >
                                        {service.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Incident History */}
                <div className="rounded-xl border border-border-primary bg-bg-primary p-6">
                    <h2 className="mb-6 text-lg font-semibold text-fg-primary">Incident History</h2>
                    <div className="space-y-6">
                        {[
                            {
                                date: "December 3, 2024",
                                title: "Email Delivery Delays",
                                status: "Investigating",
                                updates: [
                                    { time: "2:30 PM", text: "We are investigating reports of delayed email delivery." },
                                    { time: "2:45 PM", text: "Issue identified with third-party email provider." },
                                ],
                            },
                            {
                                date: "November 28, 2024",
                                title: "API Latency Issues",
                                status: "Resolved",
                                updates: [
                                    { time: "10:00 AM", text: "Increased API response times detected." },
                                    { time: "10:30 AM", text: "Root cause identified - database query optimization issue." },
                                    { time: "11:15 AM", text: "Fix deployed. Monitoring for stability." },
                                    { time: "12:00 PM", text: "Issue fully resolved. API latency back to normal." },
                                ],
                            },
                        ].map((incident, i) => (
                            <div key={i} className="border-b border-border-secondary pb-6 last:border-0 last:pb-0">
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-sm text-fg-quaternary">{incident.date}</span>
                                    <span
                                        className={cx(
                                            "rounded-full px-2 py-0.5 text-xs font-medium",
                                            incident.status === "Resolved"
                                                ? "bg-utility-green-50 text-utility-green-700"
                                                : "bg-utility-yellow-50 text-utility-yellow-700",
                                        )}
                                    >
                                        {incident.status}
                                    </span>
                                </div>
                                <h3 className="mb-3 font-medium text-fg-primary">{incident.title}</h3>
                                <div className="space-y-2">
                                    {incident.updates.map((update, j) => (
                                        <div key={j} className="flex gap-3 text-sm">
                                            <span className="text-fg-quaternary">{update.time}</span>
                                            <span className="text-fg-secondary">{update.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscribe */}
                <div className="mt-8 rounded-xl border border-border-primary bg-bg-primary p-6 text-center">
                    <h3 className="mb-2 font-medium text-fg-primary">Subscribe to Updates</h3>
                    <p className="mb-4 text-sm text-fg-tertiary">Get notified when there's an incident or maintenance.</p>
                    <div className="flex justify-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-64 rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2 text-sm placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                        />
                        <button className="rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
StatusPage.displayName = "StatusPage";

