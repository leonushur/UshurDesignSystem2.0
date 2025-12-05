import { type ReactNode, useState } from "react";
import { cx } from "@/utils/cx";
import {
    User01,
    Bell01,
    Lock01,
    CreditCard01,
    Globe01,
    Palette,
    Key01,
    Shield01,
    Mail01,
    Phone01,
    Building01,
    Camera01,
    Check,
    ChevronRight,
    AlertCircle,
} from "@untitledui-pro/icons/line";

// ============================================
// Shared Components
// ============================================

interface SettingsSidebarItemProps {
    icon: ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const SettingsSidebarItem = ({ icon, label, active, onClick }: SettingsSidebarItemProps) => (
    <button
        onClick={onClick}
        className={cx(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left",
            active
                ? "bg-bg-brand_secondary text-fg-brand-primary"
                : "text-fg-secondary hover:bg-bg-secondary_hover hover:text-fg-primary",
        )}
    >
        <span className="size-5">{icon}</span>
        {label}
    </button>
);

interface ToggleSwitchProps {
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    disabled?: boolean;
}

const ToggleSwitch = ({ enabled, onChange, disabled }: ToggleSwitchProps) => (
    <button
        type="button"
        onClick={() => !disabled && onChange(!enabled)}
        className={cx(
            "relative h-6 w-11 rounded-full transition-colors",
            enabled ? "bg-bg-brand-solid" : "bg-bg-quaternary",
            disabled && "cursor-not-allowed opacity-50",
        )}
    >
        <span
            className={cx(
                "absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow-sm transition-transform",
                enabled && "translate-x-5",
            )}
        />
    </button>
);

interface SettingsCardProps {
    title: string;
    description?: string;
    children: ReactNode;
}

const SettingsCard = ({ title, description, children }: SettingsCardProps) => (
    <div className="rounded-xl border border-border-primary bg-bg-primary p-6">
        <div className="mb-6">
            <h3 className="font-semibold text-fg-primary">{title}</h3>
            {description && <p className="mt-1 text-sm text-fg-tertiary">{description}</p>}
        </div>
        {children}
    </div>
);

// ============================================
// Account Settings Page
// ============================================

export interface AccountSettingsPageProps {
    userName?: string;
    userEmail?: string;
    userAvatar?: ReactNode;
}

export const AccountSettingsPage = ({
    userName = "Olivia Rhye",
    userEmail = "olivia@untitledui.com",
    userAvatar,
}: AccountSettingsPageProps) => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="min-h-screen bg-bg-secondary">
            {/* Header */}
            <header className="border-b border-border-secondary bg-bg-primary">
                <div className="mx-auto max-w-6xl px-6 py-6">
                    <h1 className="text-2xl font-semibold text-fg-primary">Settings</h1>
                    <p className="mt-1 text-fg-tertiary">Manage your account settings and preferences.</p>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-6 py-8">
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <aside className="w-56 flex-shrink-0">
                        <nav className="space-y-1">
                            <SettingsSidebarItem
                                icon={<User01 className="size-5" />}
                                label="Profile"
                                active={activeTab === "profile"}
                                onClick={() => setActiveTab("profile")}
                            />
                            <SettingsSidebarItem
                                icon={<Bell01 className="size-5" />}
                                label="Notifications"
                                active={activeTab === "notifications"}
                                onClick={() => setActiveTab("notifications")}
                            />
                            <SettingsSidebarItem
                                icon={<Lock01 className="size-5" />}
                                label="Security"
                                active={activeTab === "security"}
                                onClick={() => setActiveTab("security")}
                            />
                            <SettingsSidebarItem
                                icon={<CreditCard01 className="size-5" />}
                                label="Billing"
                                active={activeTab === "billing"}
                                onClick={() => setActiveTab("billing")}
                            />
                            <SettingsSidebarItem
                                icon={<Globe01 className="size-5" />}
                                label="Language & Region"
                                active={activeTab === "language"}
                                onClick={() => setActiveTab("language")}
                            />
                            <SettingsSidebarItem
                                icon={<Palette className="size-5" />}
                                label="Appearance"
                                active={activeTab === "appearance"}
                                onClick={() => setActiveTab("appearance")}
                            />
                        </nav>
                    </aside>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                        {/* Profile Section */}
                        <SettingsCard
                            title="Profile Information"
                            description="Update your photo and personal details."
                        >
                            <div className="space-y-6">
                                {/* Avatar */}
                                <div className="flex items-center gap-4">
                                    {userAvatar || (
                                        <div className="flex size-20 items-center justify-center rounded-full bg-bg-brand-solid text-2xl font-semibold text-fg-white">
                                            OR
                                        </div>
                                    )}
                                    <div>
                                        <button className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                                            Change photo
                                        </button>
                                        <p className="mt-2 text-sm text-fg-tertiary">JPG, GIF or PNG. Max 2MB.</p>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Olivia"
                                            className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Rhye"
                                            className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <Mail01 className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-fg-quaternary" />
                                        <input
                                            type="email"
                                            defaultValue={userEmail}
                                            className="w-full rounded-lg border border-border-primary bg-bg-primary py-2.5 pl-11 pr-3.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                        Bio
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Write a short bio..."
                                        className="w-full resize-none rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                    />
                                    <p className="mt-1.5 text-sm text-fg-tertiary">
                                        Brief description for your profile. URLs are hyperlinked.
                                    </p>
                                </div>
                            </div>
                        </SettingsCard>

                        {/* Contact Info */}
                        <SettingsCard title="Contact Information">
                            <div className="space-y-4">
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                        Phone number
                                    </label>
                                    <div className="relative">
                                        <Phone01 className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-fg-quaternary" />
                                        <input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full rounded-lg border border-border-primary bg-bg-primary py-2.5 pl-11 pr-3.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                        Company
                                    </label>
                                    <div className="relative">
                                        <Building01 className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-fg-quaternary" />
                                        <input
                                            type="text"
                                            placeholder="Company name"
                                            className="w-full rounded-lg border border-border-primary bg-bg-primary py-2.5 pl-11 pr-3.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SettingsCard>

                        {/* Save Button */}
                        <div className="flex justify-end gap-3">
                            <button className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2.5 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                                Cancel
                            </button>
                            <button className="rounded-lg bg-bg-brand-solid px-4 py-2.5 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
AccountSettingsPage.displayName = "AccountSettingsPage";

// ============================================
// Notification Settings Page
// ============================================

export interface NotificationSettingsPageProps {}

export const NotificationSettingsPage = ({}: NotificationSettingsPageProps) => {
    const [emailNotifs, setEmailNotifs] = useState({
        marketing: true,
        security: true,
        updates: false,
        newFeatures: true,
    });
    const [pushNotifs, setPushNotifs] = useState({
        messages: true,
        mentions: true,
        reminders: false,
    });

    return (
        <div className="min-h-screen bg-bg-secondary p-8">
            <div className="mx-auto max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-fg-primary">Notifications</h1>
                    <p className="mt-1 text-fg-tertiary">Configure how you receive notifications.</p>
                </div>

                <div className="space-y-6">
                    {/* Email Notifications */}
                    <SettingsCard
                        title="Email Notifications"
                        description="Manage email notifications you receive."
                    >
                        <div className="space-y-4">
                            {[
                                { key: "marketing", label: "Marketing emails", desc: "Receive emails about new products and features." },
                                { key: "security", label: "Security alerts", desc: "Receive alerts about your account security." },
                                { key: "updates", label: "Product updates", desc: "Receive updates about product changes." },
                                { key: "newFeatures", label: "New features", desc: "Be the first to know about new features." },
                            ].map((item) => (
                                <div key={item.key} className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="text-sm font-medium text-fg-primary">{item.label}</p>
                                        <p className="text-sm text-fg-tertiary">{item.desc}</p>
                                    </div>
                                    <ToggleSwitch
                                        enabled={emailNotifs[item.key as keyof typeof emailNotifs]}
                                        onChange={(v) => setEmailNotifs((prev) => ({ ...prev, [item.key]: v }))}
                                    />
                                </div>
                            ))}
                        </div>
                    </SettingsCard>

                    {/* Push Notifications */}
                    <SettingsCard
                        title="Push Notifications"
                        description="Configure push notifications on your devices."
                    >
                        <div className="space-y-4">
                            {[
                                { key: "messages", label: "Direct messages", desc: "Get notified when someone sends you a message." },
                                { key: "mentions", label: "Mentions", desc: "Get notified when someone mentions you." },
                                { key: "reminders", label: "Reminders", desc: "Get notified about upcoming reminders." },
                            ].map((item) => (
                                <div key={item.key} className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="text-sm font-medium text-fg-primary">{item.label}</p>
                                        <p className="text-sm text-fg-tertiary">{item.desc}</p>
                                    </div>
                                    <ToggleSwitch
                                        enabled={pushNotifs[item.key as keyof typeof pushNotifs]}
                                        onChange={(v) => setPushNotifs((prev) => ({ ...prev, [item.key]: v }))}
                                    />
                                </div>
                            ))}
                        </div>
                    </SettingsCard>

                    {/* Save Button */}
                    <div className="flex justify-end gap-3">
                        <button className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2.5 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                            Cancel
                        </button>
                        <button className="rounded-lg bg-bg-brand-solid px-4 py-2.5 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover">
                            Save preferences
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
NotificationSettingsPage.displayName = "NotificationSettingsPage";

// ============================================
// Security Settings Page
// ============================================

export interface SecuritySettingsPageProps {
    email?: string;
    twoFactorEnabled?: boolean;
}

export const SecuritySettingsPage = ({
    email = "olivia@untitledui.com",
    twoFactorEnabled = false,
}: SecuritySettingsPageProps) => {
    const [is2FAEnabled, setIs2FAEnabled] = useState(twoFactorEnabled);

    return (
        <div className="min-h-screen bg-bg-secondary p-8">
            <div className="mx-auto max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-fg-primary">Security</h1>
                    <p className="mt-1 text-fg-tertiary">Manage your account security settings.</p>
                </div>

                <div className="space-y-6">
                    {/* Password */}
                    <SettingsCard title="Password" description="Update your password regularly to keep your account secure.">
                        <div className="space-y-4">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                    Current password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                    className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                    New password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                                    Confirm new password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    className="w-full rounded-lg border border-border-primary bg-bg-primary px-3.5 py-2.5 text-sm text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                                />
                            </div>
                            <button className="rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover">
                                Update password
                            </button>
                        </div>
                    </SettingsCard>

                    {/* Two-Factor Authentication */}
                    <SettingsCard title="Two-Factor Authentication">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-bg-secondary">
                                    <Shield01 className="size-5 text-fg-quaternary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-fg-primary">
                                        Two-factor authentication
                                    </p>
                                    <p className="mt-1 text-sm text-fg-tertiary">
                                        Add an extra layer of security to your account by requiring a verification code.
                                    </p>
                                </div>
                            </div>
                            <ToggleSwitch enabled={is2FAEnabled} onChange={setIs2FAEnabled} />
                        </div>
                    </SettingsCard>

                    {/* Active Sessions */}
                    <SettingsCard title="Active Sessions" description="Manage devices where you're logged in.">
                        <div className="space-y-4">
                            {[
                                { device: "MacBook Pro", location: "San Francisco, CA", current: true, time: "Now" },
                                { device: "iPhone 14", location: "San Francisco, CA", current: false, time: "2 hours ago" },
                                { device: "Chrome on Windows", location: "New York, NY", current: false, time: "3 days ago" },
                            ].map((session, i) => (
                                <div key={i} className="flex items-center justify-between rounded-lg border border-border-primary p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-bg-secondary">
                                            <Globe01 className="size-5 text-fg-quaternary" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-medium text-fg-primary">{session.device}</p>
                                                {session.current && (
                                                    <span className="rounded-full bg-utility-green-50 px-2 py-0.5 text-xs font-medium text-utility-green-700">
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-fg-tertiary">
                                                {session.location} · {session.time}
                                            </p>
                                        </div>
                                    </div>
                                    {!session.current && (
                                        <button className="text-sm font-medium text-fg-error-primary hover:text-fg-error-primary">
                                            Revoke
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </SettingsCard>

                    {/* Danger Zone */}
                    <div className="rounded-xl border border-border-error bg-bg-primary p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-bg-error-secondary">
                                <AlertCircle className="size-5 text-fg-error-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-fg-error-primary">Delete account</h3>
                                <p className="mt-1 text-sm text-fg-tertiary">
                                    Once you delete your account, there is no going back. Please be certain.
                                </p>
                                <button className="mt-4 rounded-lg border border-border-error bg-bg-primary px-4 py-2 text-sm font-medium text-fg-error-primary hover:bg-bg-error-secondary">
                                    Delete account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
SecuritySettingsPage.displayName = "SecuritySettingsPage";

// ============================================
// Billing Settings Page
// ============================================

export interface BillingSettingsPageProps {
    currentPlan?: string;
    nextBillingDate?: string;
}

export const BillingSettingsPage = ({
    currentPlan = "Pro",
    nextBillingDate = "January 15, 2025",
}: BillingSettingsPageProps) => {
    return (
        <div className="min-h-screen bg-bg-secondary p-8">
            <div className="mx-auto max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-fg-primary">Billing</h1>
                    <p className="mt-1 text-fg-tertiary">Manage your subscription and payment methods.</p>
                </div>

                <div className="space-y-6">
                    {/* Current Plan */}
                    <div className="rounded-xl border border-border-brand bg-bg-brand_secondary p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-fg-primary">{currentPlan} Plan</h3>
                                    <span className="rounded-full bg-bg-brand-solid px-2 py-0.5 text-xs font-medium text-fg-white">
                                        Current
                                    </span>
                                </div>
                                <p className="mt-1 text-sm text-fg-tertiary">
                                    Your next billing date is {nextBillingDate}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-semibold text-fg-primary">$29</p>
                                <p className="text-sm text-fg-tertiary">per month</p>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <button className="rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover">
                                Upgrade plan
                            </button>
                            <button className="rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm font-medium text-fg-secondary hover:bg-bg-secondary_hover">
                                Cancel subscription
                            </button>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <SettingsCard title="Payment Method" description="Manage your payment methods.">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border border-border-brand bg-bg-brand_secondary p-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-bg-primary">
                                        <CreditCard01 className="size-5 text-fg-quaternary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-fg-primary">Visa ending in 4242</p>
                                        <p className="text-sm text-fg-tertiary">Expires 12/2025</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="rounded-full bg-bg-brand-solid px-2 py-0.5 text-xs font-medium text-fg-white">
                                        Default
                                    </span>
                                    <Check className="size-5 text-fg-brand-primary" />
                                </div>
                            </div>
                            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border-primary py-3 text-sm font-medium text-fg-secondary hover:border-border-brand hover:text-fg-brand-primary">
                                <CreditCard01 className="size-4" />
                                Add payment method
                            </button>
                        </div>
                    </SettingsCard>

                    {/* Billing History */}
                    <SettingsCard title="Billing History" description="View and download past invoices.">
                        <div className="divide-y divide-border-secondary">
                            {[
                                { date: "Dec 1, 2024", amount: "$29.00", status: "Paid" },
                                { date: "Nov 1, 2024", amount: "$29.00", status: "Paid" },
                                { date: "Oct 1, 2024", amount: "$29.00", status: "Paid" },
                                { date: "Sep 1, 2024", amount: "$29.00", status: "Paid" },
                            ].map((invoice, i) => (
                                <div key={i} className="flex items-center justify-between py-3">
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-fg-primary">{invoice.date}</p>
                                            <p className="text-sm text-fg-tertiary">{invoice.amount}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-utility-green-50 px-2 py-0.5 text-xs font-medium text-utility-green-700">
                                            {invoice.status}
                                        </span>
                                        <button className="text-sm font-medium text-fg-brand-primary hover:text-fg-brand-primary_hover">
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SettingsCard>
                </div>
            </div>
        </div>
    );
};
BillingSettingsPage.displayName = "BillingSettingsPage";

