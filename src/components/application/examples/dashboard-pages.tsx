import type { ReactNode } from "react";
import { cx } from "@/utils/cx";
import {
    Home02,
    BarChart01,
    Users01,
    Settings01,
    File02,
    CreditCard01,
    HelpCircle,
    ChevronDown,
    Bell01,
    SearchMd,
    Plus,
    ArrowUp,
    ArrowDown,
    DotsHorizontal,
    Calendar,
    Download01,
    FilterLines,
} from "@untitledui-pro/icons/line";

// ============================================
// Shared Components
// ============================================

interface SidebarItemProps {
    icon: ReactNode;
    label: string;
    active?: boolean;
    badge?: string;
}

const SidebarItem = ({ icon, label, active, badge }: SidebarItemProps) => (
    <a
        href="#"
        className={cx(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            active
                ? "bg-bg-brand_secondary text-fg-brand-primary"
                : "text-fg-secondary hover:bg-bg-secondary_hover hover:text-fg-primary",
        )}
    >
        <span className="size-5">{icon}</span>
        <span className="flex-1">{label}</span>
        {badge && (
            <span className="rounded-full bg-bg-brand-solid px-2 py-0.5 text-xs text-fg-white">
                {badge}
            </span>
        )}
    </a>
);

interface MetricCardProps {
    title: string;
    value: string;
    change?: string;
    trend?: "up" | "down";
    icon?: ReactNode;
}

const MetricCard = ({ title, value, change, trend, icon }: MetricCardProps) => (
    <div className="rounded-xl border border-border-primary bg-bg-primary p-6">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-fg-tertiary">{title}</p>
                <p className="mt-2 text-3xl font-semibold text-fg-primary">{value}</p>
                {change && (
                    <div className="mt-2 flex items-center gap-1">
                        {trend === "up" && <ArrowUp className="size-4 text-fg-success-primary" />}
                        {trend === "down" && <ArrowDown className="size-4 text-fg-error-primary" />}
                        <span
                            className={cx(
                                "text-sm font-medium",
                                trend === "up" && "text-fg-success-primary",
                                trend === "down" && "text-fg-error-primary",
                            )}
                        >
                            {change}
                        </span>
                        <span className="text-sm text-fg-quaternary">vs last month</span>
                    </div>
                )}
            </div>
            {icon && (
                <div className="flex size-10 items-center justify-center rounded-lg bg-bg-secondary">
                    {icon}
                </div>
            )}
        </div>
    </div>
);

// ============================================
// Analytics Dashboard
// ============================================

export interface AnalyticsDashboardProps {
    userName?: string;
    userAvatar?: ReactNode;
    logo?: ReactNode;
}

export const AnalyticsDashboard = ({
    userName = "Olivia Rhye",
    userAvatar,
    logo,
}: AnalyticsDashboardProps) => {
    return (
        <div className="flex min-h-screen bg-bg-secondary">
            {/* Sidebar */}
            <aside className="flex w-64 flex-col border-r border-border-secondary bg-bg-primary">
                {/* Logo */}
                <div className="flex h-16 items-center gap-3 border-b border-border-secondary px-4">
                    {logo || (
                        <div className="flex size-8 items-center justify-center rounded-lg bg-bg-brand-solid text-fg-white font-bold">
                            U
                        </div>
                    )}
                    <span className="font-semibold text-fg-primary">Untitled UI</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 p-4">
                    <SidebarItem icon={<Home02 className="size-5" />} label="Dashboard" active />
                    <SidebarItem icon={<BarChart01 className="size-5" />} label="Analytics" />
                    <SidebarItem icon={<Users01 className="size-5" />} label="Customers" badge="12" />
                    <SidebarItem icon={<File02 className="size-5" />} label="Reports" />
                    <SidebarItem icon={<CreditCard01 className="size-5" />} label="Billing" />
                    <SidebarItem icon={<Settings01 className="size-5" />} label="Settings" />
                </nav>

                {/* User */}
                <div className="border-t border-border-secondary p-4">
                    <div className="flex items-center gap-3">
                        {userAvatar || (
                            <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-solid text-fg-white font-medium">
                                OR
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <p className="truncate text-sm font-medium text-fg-primary">{userName}</p>
                            <p className="truncate text-sm text-fg-tertiary">olivia@untitledui.com</p>
                        </div>
                        <ChevronDown className="size-5 text-fg-quaternary" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="flex h-16 items-center justify-between border-b border-border-secondary bg-bg-primary px-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SearchMd className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-fg-quaternary" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="h-10 w-80 rounded-lg border border-border-primary bg-bg-primary pl-10 pr-4 text-sm placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex size-10 items-center justify-center rounded-lg hover:bg-bg-secondary_hover">
                            <Bell01 className="size-5 text-fg-quaternary" />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover">
                            <Plus className="size-4" />
                            Add widget
                        </button>
                    </div>
                </header>

                {/* Content */}
                <main className="p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-fg-primary">Dashboard</h1>
                        <p className="mt-1 text-fg-tertiary">Welcome back, {userName.split(" ")[0]}!</p>
                    </div>

                    {/* Metrics */}
                    <div className="mb-6 grid grid-cols-4 gap-6">
                        <MetricCard
                            title="Total Revenue"
                            value="$45,231.89"
                            change="+20.1%"
                            trend="up"
                            icon={<CreditCard01 className="size-5 text-fg-quaternary" />}
                        />
                        <MetricCard
                            title="Active Users"
                            value="2,350"
                            change="+180.1%"
                            trend="up"
                            icon={<Users01 className="size-5 text-fg-quaternary" />}
                        />
                        <MetricCard
                            title="Total Orders"
                            value="12,234"
                            change="+19%"
                            trend="up"
                            icon={<File02 className="size-5 text-fg-quaternary" />}
                        />
                        <MetricCard
                            title="Bounce Rate"
                            value="23.5%"
                            change="-4.3%"
                            trend="down"
                            icon={<BarChart01 className="size-5 text-fg-quaternary" />}
                        />
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Main Chart */}
                        <div className="col-span-2 rounded-xl border border-border-primary bg-bg-primary p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-fg-primary">Revenue Overview</h3>
                                    <p className="text-sm text-fg-tertiary">Monthly revenue data</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-2 rounded-lg border border-border-primary px-3 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                                        <Calendar className="size-4" />
                                        Last 12 months
                                    </button>
                                    <button className="flex items-center gap-2 rounded-lg border border-border-primary px-3 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                                        <Download01 className="size-4" />
                                        Export
                                    </button>
                                </div>
                            </div>
                            {/* Chart placeholder */}
                            <div className="flex h-72 items-center justify-center rounded-lg bg-bg-secondary">
                                <p className="text-fg-quaternary">Revenue Chart Component Here</p>
                            </div>
                        </div>

                        {/* Side Chart */}
                        <div className="rounded-xl border border-border-primary bg-bg-primary p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="font-semibold text-fg-primary">Traffic Sources</h3>
                                <button className="text-fg-quaternary hover:text-fg-tertiary">
                                    <DotsHorizontal className="size-5" />
                                </button>
                            </div>
                            {/* Pie chart placeholder */}
                            <div className="flex h-48 items-center justify-center rounded-lg bg-bg-secondary">
                                <p className="text-fg-quaternary">Pie Chart Here</p>
                            </div>
                            {/* Legend */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-bg-brand-solid" />
                                        <span className="text-sm text-fg-secondary">Direct</span>
                                    </div>
                                    <span className="text-sm font-medium text-fg-primary">45%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-utility-blue-500" />
                                        <span className="text-sm text-fg-secondary">Social</span>
                                    </div>
                                    <span className="text-sm font-medium text-fg-primary">30%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-utility-orange-500" />
                                        <span className="text-sm text-fg-secondary">Referral</span>
                                    </div>
                                    <span className="text-sm font-medium text-fg-primary">25%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="mt-6 rounded-xl border border-border-primary bg-bg-primary p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="font-semibold text-fg-primary">Recent Activity</h3>
                            <button className="text-sm font-medium text-fg-brand-primary hover:text-fg-brand-primary_hover">
                                View all
                            </button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { action: "New order placed", user: "Phoenix Baker", time: "2 hours ago", amount: "$420.00" },
                                { action: "Payment received", user: "Lana Steiner", time: "4 hours ago", amount: "$1,250.00" },
                                { action: "Refund processed", user: "Demi Wilkinson", time: "6 hours ago", amount: "-$89.00" },
                                { action: "Subscription renewed", user: "Candice Wu", time: "12 hours ago", amount: "$99.00" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-4">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-bg-secondary text-sm font-medium text-fg-tertiary">
                                            {item.user.split(" ").map((n) => n[0]).join("")}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-fg-primary">{item.action}</p>
                                            <p className="text-sm text-fg-tertiary">{item.user}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-fg-primary">{item.amount}</p>
                                        <p className="text-sm text-fg-quaternary">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
AnalyticsDashboard.displayName = "AnalyticsDashboard";

// ============================================
// Simple Dashboard (Card Grid)
// ============================================

export interface SimpleDashboardProps {
    userName?: string;
}

export const SimpleDashboard = ({ userName = "Olivia" }: SimpleDashboardProps) => {
    return (
        <div className="min-h-screen bg-bg-secondary p-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-fg-primary">Good morning, {userName}</h1>
                        <p className="mt-1 text-fg-tertiary">Here's what's happening with your projects today.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                            <FilterLines className="size-4" />
                            Filters
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover">
                            <Plus className="size-4" />
                            New Project
                        </button>
                    </div>
                </div>

                {/* Metrics */}
                <div className="mb-8 grid grid-cols-4 gap-6">
                    <MetricCard title="Total Projects" value="24" change="+3" trend="up" />
                    <MetricCard title="Active Tasks" value="142" change="+12" trend="up" />
                    <MetricCard title="Team Members" value="8" />
                    <MetricCard title="Completion Rate" value="87%" change="+5%" trend="up" />
                </div>

                {/* Projects Grid */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-fg-primary">Active Projects</h2>
                    <button className="text-sm font-medium text-fg-brand-primary hover:text-fg-brand-primary_hover">
                        View all
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {[
                        { name: "Website Redesign", progress: 75, tasks: 12, team: 4, color: "bg-utility-blue-500" },
                        { name: "Mobile App", progress: 45, tasks: 24, team: 6, color: "bg-utility-purple-500" },
                        { name: "Marketing Campaign", progress: 90, tasks: 8, team: 3, color: "bg-utility-orange-500" },
                        { name: "Design System", progress: 60, tasks: 18, team: 5, color: "bg-utility-green-500" },
                        { name: "API Integration", progress: 30, tasks: 15, team: 4, color: "bg-utility-pink-500" },
                        { name: "Analytics Dashboard", progress: 85, tasks: 6, team: 2, color: "bg-utility-yellow-500" },
                    ].map((project, i) => (
                        <div key={i} className="rounded-xl border border-border-primary bg-bg-primary p-6 transition-shadow hover:shadow-md">
                            <div className="mb-4 flex items-start justify-between">
                                <div className={cx("size-10 rounded-lg", project.color)} />
                                <button className="text-fg-quaternary hover:text-fg-tertiary">
                                    <DotsHorizontal className="size-5" />
                                </button>
                            </div>
                            <h3 className="mb-1 font-semibold text-fg-primary">{project.name}</h3>
                            <p className="mb-4 text-sm text-fg-tertiary">{project.tasks} tasks · {project.team} team members</p>
                            <div className="mb-2 flex items-center justify-between text-sm">
                                <span className="text-fg-tertiary">Progress</span>
                                <span className="font-medium text-fg-primary">{project.progress}%</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-bg-secondary">
                                <div
                                    className={cx("h-full rounded-full transition-all", project.color)}
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
SimpleDashboard.displayName = "SimpleDashboard";

// ============================================
// E-commerce Dashboard
// ============================================

export interface EcommerceDashboardProps {
    storeName?: string;
}

export const EcommerceDashboard = ({ storeName = "My Store" }: EcommerceDashboardProps) => {
    return (
        <div className="min-h-screen bg-bg-secondary">
            {/* Top Nav */}
            <header className="border-b border-border-secondary bg-bg-primary">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-bg-brand-solid text-fg-white font-bold">
                                S
                            </div>
                            <span className="font-semibold text-fg-primary">{storeName}</span>
                        </div>
                        <nav className="flex items-center gap-6">
                            <a href="#" className="text-sm font-medium text-fg-brand-primary">Dashboard</a>
                            <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">Orders</a>
                            <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">Products</a>
                            <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">Customers</a>
                            <a href="#" className="text-sm font-medium text-fg-secondary hover:text-fg-primary">Analytics</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex size-10 items-center justify-center rounded-lg hover:bg-bg-secondary_hover">
                            <HelpCircle className="size-5 text-fg-quaternary" />
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-lg hover:bg-bg-secondary_hover">
                            <Bell01 className="size-5 text-fg-quaternary" />
                        </button>
                        <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-solid text-fg-white font-medium">
                            OR
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-7xl p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-fg-primary">Dashboard</h1>
                    <p className="mt-1 text-fg-tertiary">Track your store performance and manage orders.</p>
                </div>

                {/* Metrics */}
                <div className="mb-6 grid grid-cols-4 gap-6">
                    <MetricCard title="Total Sales" value="$128,430" change="+32.5%" trend="up" />
                    <MetricCard title="Orders" value="1,453" change="+12.3%" trend="up" />
                    <MetricCard title="Customers" value="892" change="+8.1%" trend="up" />
                    <MetricCard title="Avg Order Value" value="$88.42" change="-2.4%" trend="down" />
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Recent Orders */}
                    <div className="col-span-2 rounded-xl border border-border-primary bg-bg-primary">
                        <div className="flex items-center justify-between border-b border-border-secondary p-6">
                            <h3 className="font-semibold text-fg-primary">Recent Orders</h3>
                            <button className="text-sm font-medium text-fg-brand-primary hover:text-fg-brand-primary_hover">
                                View all
                            </button>
                        </div>
                        <div className="divide-y divide-border-secondary">
                            {[
                                { id: "#3210", customer: "Olivia Martin", email: "olivia@email.com", amount: "$125.00", status: "Delivered" },
                                { id: "#3209", customer: "Ava Williams", email: "ava@email.com", amount: "$89.00", status: "Shipped" },
                                { id: "#3208", customer: "Isabella Jackson", email: "isabella@email.com", amount: "$232.00", status: "Processing" },
                                { id: "#3207", customer: "Mia Davis", email: "mia@email.com", amount: "$67.00", status: "Pending" },
                            ].map((order, i) => (
                                <div key={i} className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-bg-secondary text-sm font-medium text-fg-tertiary">
                                            {order.customer.split(" ").map((n) => n[0]).join("")}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-fg-primary">{order.customer}</p>
                                            <p className="text-sm text-fg-tertiary">{order.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-fg-primary">{order.amount}</p>
                                        <p className="text-sm text-fg-quaternary">{order.id}</p>
                                    </div>
                                    <span
                                        className={cx(
                                            "rounded-full px-2.5 py-1 text-xs font-medium",
                                            order.status === "Delivered" && "bg-utility-green-50 text-utility-green-700",
                                            order.status === "Shipped" && "bg-utility-blue-50 text-utility-blue-700",
                                            order.status === "Processing" && "bg-utility-orange-50 text-utility-orange-700",
                                            order.status === "Pending" && "bg-bg-secondary text-fg-tertiary",
                                        )}
                                    >
                                        {order.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Products */}
                    <div className="rounded-xl border border-border-primary bg-bg-primary">
                        <div className="flex items-center justify-between border-b border-border-secondary p-6">
                            <h3 className="font-semibold text-fg-primary">Top Products</h3>
                            <button className="text-sm font-medium text-fg-brand-primary hover:text-fg-brand-primary_hover">
                                View all
                            </button>
                        </div>
                        <div className="divide-y divide-border-secondary">
                            {[
                                { name: "Basic Tee", sales: 456, revenue: "$12,350" },
                                { name: "Canvas Sneakers", sales: 321, revenue: "$9,450" },
                                { name: "Leather Wallet", sales: 289, revenue: "$8,670" },
                                { name: "Denim Jacket", sales: 234, revenue: "$7,890" },
                            ].map((product, i) => (
                                <div key={i} className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg bg-bg-secondary" />
                                        <div>
                                            <p className="text-sm font-medium text-fg-primary">{product.name}</p>
                                            <p className="text-sm text-fg-tertiary">{product.sales} sales</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-fg-primary">{product.revenue}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
EcommerceDashboard.displayName = "EcommerceDashboard";


