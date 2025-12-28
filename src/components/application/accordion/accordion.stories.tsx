import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem } from "./accordion";
import {
    Settings01,
    User01,
    Bell01,
    Lock01,
    CreditCard01,
    HelpCircle,
    FileCheck02,
    Users01,
} from "@untitledui-pro/icons/line";
import { useState } from "react";

type AccordionStory = StoryObj<typeof Accordion>;
type AccordionMeta = Meta<typeof Accordion>;

const meta: AccordionMeta = {
    title: "Components/Application/Accordion",
    component: Accordion,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

/**
 * Default accordion with single expansion mode
 */
export const Default: AccordionStory = {
    render: () => (
        <Accordion>
            <AccordionItem id="item-1" title="What is the refund policy?">
                <p>
                    We offer a 30-day money-back guarantee. If you're not satisfied with your
                    purchase, contact our support team within 30 days for a full refund.
                </p>
            </AccordionItem>
            <AccordionItem id="item-2" title="How do I update my billing information?">
                <p>
                    Navigate to Settings → Billing and click "Update payment method". You can update
                    your credit card details or switch to a different payment method.
                </p>
            </AccordionItem>
            <AccordionItem id="item-3" title="Can I upgrade or downgrade my plan?">
                <p>
                    Yes! You can change your plan at any time from the Billing section. Upgrades
                    take effect immediately, while downgrades apply at the end of your billing cycle.
                </p>
            </AccordionItem>
            <AccordionItem id="item-4" title="Is my data secure?">
                <p>
                    We use industry-standard encryption and security practices. All data is encrypted
                    in transit and at rest, and we regularly undergo security audits.
                </p>
            </AccordionItem>
        </Accordion>
    ),
};

/**
 * Bordered variant with a container border
 */
export const Bordered: AccordionStory = {
    render: () => (
        <Accordion variant="bordered">
            <AccordionItem id="item-1" title="Account Settings">
                <p className="mb-3">
                    Manage your account preferences, notification settings, and personal information.
                </p>
                <ul className="list-inside list-disc space-y-1 text-fg-tertiary">
                    <li>Update profile details</li>
                    <li>Change password</li>
                    <li>Configure email preferences</li>
                </ul>
            </AccordionItem>
            <AccordionItem id="item-2" title="Privacy & Security">
                <p className="mb-3">
                    Control your privacy settings and security options to keep your account safe.
                </p>
                <ul className="list-inside list-disc space-y-1 text-fg-tertiary">
                    <li>Two-factor authentication</li>
                    <li>Active sessions</li>
                    <li>Privacy controls</li>
                </ul>
            </AccordionItem>
            <AccordionItem id="item-3" title="Billing Information">
                <p className="mb-3">
                    View your subscription details, payment methods, and billing history.
                </p>
                <ul className="list-inside list-disc space-y-1 text-fg-tertiary">
                    <li>Current plan details</li>
                    <li>Payment methods</li>
                    <li>Invoice history</li>
                </ul>
            </AccordionItem>
        </Accordion>
    ),
};

/**
 * Separated variant with card-style items
 */
export const Separated: AccordionStory = {
    render: () => (
        <Accordion variant="separated">
            <AccordionItem id="item-1" title="Getting Started" className="rounded-xl border border-border-primary bg-bg-primary shadow-xs">
                <div className="space-y-3">
                    <p>
                        Welcome! Follow these steps to get up and running quickly.
                    </p>
                    <ol className="list-inside list-decimal space-y-2 text-fg-tertiary">
                        <li>Create your account and verify your email</li>
                        <li>Set up your workspace and invite team members</li>
                        <li>Configure your preferences and notification settings</li>
                        <li>Start your first project</li>
                    </ol>
                </div>
            </AccordionItem>
            <AccordionItem id="item-2" title="Advanced Features" className="rounded-xl border border-border-primary bg-bg-primary shadow-xs">
                <div className="space-y-3">
                    <p>
                        Unlock the full potential of the platform with these advanced capabilities.
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-fg-tertiary">
                        <li>API access and webhooks</li>
                        <li>Custom integrations</li>
                        <li>Advanced analytics</li>
                        <li>Automation workflows</li>
                    </ul>
                </div>
            </AccordionItem>
            <AccordionItem id="item-3" title="Best Practices" className="rounded-xl border border-border-primary bg-bg-primary shadow-xs">
                <div className="space-y-3">
                    <p>
                        Optimize your workflow with these recommended practices.
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-fg-tertiary">
                        <li>Regular backups and data exports</li>
                        <li>Role-based access control</li>
                        <li>Performance monitoring</li>
                        <li>Security audits</li>
                    </ul>
                </div>
            </AccordionItem>
        </Accordion>
    ),
};

/**
 * Multiple expansion mode allows several items open simultaneously
 */
export const MultipleExpansion: AccordionStory = {
    render: () => (
        <Accordion allowMultiple defaultExpandedKeys={["item-1", "item-2"]}>
            <AccordionItem id="item-1" title="Product Features">
                <p>
                    Explore our comprehensive suite of features designed to streamline your workflow
                    and boost productivity.
                </p>
            </AccordionItem>
            <AccordionItem id="item-2" title="Pricing Plans">
                <p>
                    Choose from flexible pricing options that scale with your needs. All plans include
                    a 14-day free trial.
                </p>
            </AccordionItem>
            <AccordionItem id="item-3" title="Support Options">
                <p>
                    Get help when you need it with 24/7 email support, live chat, and comprehensive
                    documentation.
                </p>
            </AccordionItem>
            <AccordionItem id="item-4" title="Integrations">
                <p>
                    Connect with your favorite tools and services. We support 100+ integrations with
                    popular platforms.
                </p>
            </AccordionItem>
        </Accordion>
    ),
};

/**
 * Accordion items with leading icons
 */
export const WithIcons: AccordionStory = {
    render: () => (
        <Accordion variant="bordered">
            <AccordionItem id="item-1" title="Profile Settings" icon={User01}>
                <p>
                    Update your profile photo, display name, bio, and other personal information
                    visible to your team.
                </p>
            </AccordionItem>
            <AccordionItem id="item-2" title="Notifications" icon={Bell01}>
                <p>
                    Configure how and when you receive notifications for messages, mentions, and
                    important updates.
                </p>
            </AccordionItem>
            <AccordionItem id="item-3" title="Security" icon={Lock01}>
                <p>
                    Manage your password, two-factor authentication, and review active login sessions
                    on your account.
                </p>
            </AccordionItem>
            <AccordionItem id="item-4" title="Billing" icon={CreditCard01}>
                <p>
                    View your current subscription, update payment methods, and download invoices for
                    your records.
                </p>
            </AccordionItem>
        </Accordion>
    ),
};

/**
 * Disabled items prevent interaction
 */
export const DisabledItems: AccordionStory = {
    render: () => (
        <Accordion variant="default">
            <AccordionItem id="item-1" title="Available Feature">
                <p>This feature is available and ready to use.</p>
            </AccordionItem>
            <AccordionItem id="item-2" title="Coming Soon (Disabled)" isDisabled>
                <p>This content cannot be accessed because the feature is disabled.</p>
            </AccordionItem>
            <AccordionItem id="item-3" title="Another Available Feature">
                <p>This feature is also available for use.</p>
            </AccordionItem>
            <AccordionItem id="item-4" title="Premium Only (Disabled)" isDisabled>
                <p>This content is only available to premium subscribers.</p>
            </AccordionItem>
        </Accordion>
    ),
};

/**
 * Nested accordions for hierarchical content
 */
export const NestedAccordions: AccordionStory = {
    render: () => (
        <Accordion variant="bordered">
            <AccordionItem id="parent-1" title="General Settings" icon={Settings01}>
                <div className="space-y-4">
                    <p>Configure general application settings and preferences.</p>
                    <Accordion variant="separated" className="ml-4">
                        <AccordionItem id="child-1-1" title="Language & Region" className="rounded-lg border border-border-secondary bg-bg-secondary">
                            <p>Choose your preferred language and regional settings.</p>
                        </AccordionItem>
                        <AccordionItem id="child-1-2" title="Appearance" className="rounded-lg border border-border-secondary bg-bg-secondary">
                            <p>Customize the look and feel of the application.</p>
                        </AccordionItem>
                    </Accordion>
                </div>
            </AccordionItem>
            <AccordionItem id="parent-2" title="Team Settings" icon={Users01}>
                <div className="space-y-4">
                    <p>Manage team members, roles, and permissions.</p>
                    <Accordion variant="separated" className="ml-4">
                        <AccordionItem id="child-2-1" title="Members" className="rounded-lg border border-border-secondary bg-bg-secondary">
                            <p>Add, remove, and manage team member access.</p>
                        </AccordionItem>
                        <AccordionItem id="child-2-2" title="Roles & Permissions" className="rounded-lg border border-border-secondary bg-bg-secondary">
                            <p>Define custom roles and permission sets for your team.</p>
                        </AccordionItem>
                    </Accordion>
                </div>
            </AccordionItem>
        </Accordion>
    ),
};

/**
 * FAQ example with commonly asked questions
 */
export const FAQExample: AccordionStory = {
    render: () => (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-display-sm font-bold text-fg-primary mb-3">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-fg-secondary">
                    Everything you need to know about the product and billing.
                </p>
            </div>

            <Accordion variant="default">
                <AccordionItem id="faq-1" title="Is there a free trial available?">
                    <p className="mb-3">
                        Yes, you can try us for free for 30 days. Our friendly team will work with
                        you to get you up and running as soon as possible.
                    </p>
                </AccordionItem>

                <AccordionItem id="faq-2" title="Can I change my plan later?">
                    <p className="mb-3">
                        Of course. Our pricing scales with your company. Chat to our friendly team
                        to find a solution that works for you.
                    </p>
                </AccordionItem>

                <AccordionItem id="faq-3" title="What is your cancellation policy?">
                    <p className="mb-3">
                        We understand that things change. You can cancel your plan at any time and
                        we'll refund you the difference already paid.
                    </p>
                </AccordionItem>

                <AccordionItem id="faq-4" title="Can other info be added to an invoice?">
                    <p className="mb-3">
                        Yes, you can add any information you need to your invoices, including your
                        company name, VAT number, and billing address.
                    </p>
                </AccordionItem>

                <AccordionItem id="faq-5" title="How does billing work?">
                    <p className="mb-3">
                        Plans are per workspace, not per account. You can upgrade one workspace,
                        and still have any number of free workspaces.
                    </p>
                </AccordionItem>

                <AccordionItem id="faq-6" title="How do I change my account email?">
                    <p className="mb-3">
                        You can change the email address associated with your account by going to
                        Settings → Account → Email. We'll send a verification email to confirm the
                        change.
                    </p>
                </AccordionItem>
            </Accordion>

            <div className="mt-12 rounded-xl bg-bg-secondary p-8 text-center">
                <div className="inline-flex items-center justify-center size-14 rounded-full bg-bg-brand-primary mb-5">
                    <HelpCircle className="size-7 text-fg-brand-primary" />
                </div>
                <h3 className="text-lg font-semibold text-fg-primary mb-2">
                    Still have questions?
                </h3>
                <p className="text-md text-fg-secondary mb-6">
                    Can't find the answer you're looking for? Please chat to our friendly team.
                </p>
                <button className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-bg-brand-solid text-text-primary_on-brand font-semibold hover:bg-bg-brand-solid_hover transition-colors">
                    Get in touch
                </button>
            </div>
        </div>
    ),
};

/**
 * Controlled accordion for programmatic state management
 */
export const Controlled: AccordionStory = {
    render: function ControlledStory() {
        const [expandedKeys, setExpandedKeys] = useState<string[]>(["item-1"]);

        const handleExpandAll = () => {
            setExpandedKeys(["item-1", "item-2", "item-3", "item-4"]);
        };

        const handleCollapseAll = () => {
            setExpandedKeys([]);
        };

        return (
            <div className="space-y-4">
                <div className="flex gap-3">
                    <button
                        onClick={handleExpandAll}
                        className="px-4 py-2 rounded-lg bg-bg-brand-solid text-text-primary_on-brand text-sm font-medium hover:bg-bg-brand-solid_hover transition-colors"
                    >
                        Expand All
                    </button>
                    <button
                        onClick={handleCollapseAll}
                        className="px-4 py-2 rounded-lg bg-bg-secondary text-fg-secondary text-sm font-medium border border-border-primary hover:bg-bg-tertiary transition-colors"
                    >
                        Collapse All
                    </button>
                    <span className="flex items-center text-sm text-fg-tertiary">
                        {expandedKeys.length} of 4 expanded
                    </span>
                </div>

                <Accordion
                    variant="bordered"
                    allowMultiple
                    expandedKeys={expandedKeys}
                    onExpandedChange={setExpandedKeys}
                >
                    <AccordionItem id="item-1" title="Section 1" icon={FileCheck02}>
                        <p>Content for the first section.</p>
                    </AccordionItem>
                    <AccordionItem id="item-2" title="Section 2" icon={FileCheck02}>
                        <p>Content for the second section.</p>
                    </AccordionItem>
                    <AccordionItem id="item-3" title="Section 3" icon={FileCheck02}>
                        <p>Content for the third section.</p>
                    </AccordionItem>
                    <AccordionItem id="item-4" title="Section 4" icon={FileCheck02}>
                        <p>Content for the fourth section.</p>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    },
};

/**
 * All variants side by side for comparison
 */
export const AllVariants: AccordionStory = {
    render: () => (
        <div className="space-y-12">
            <section>
                <h3 className="mb-4 text-md font-semibold text-fg-tertiary">Default Variant</h3>
                <Accordion variant="default">
                    <AccordionItem id="default-1" title="Item 1">
                        Content for item 1
                    </AccordionItem>
                    <AccordionItem id="default-2" title="Item 2">
                        Content for item 2
                    </AccordionItem>
                    <AccordionItem id="default-3" title="Item 3">
                        Content for item 3
                    </AccordionItem>
                </Accordion>
            </section>

            <section>
                <h3 className="mb-4 text-md font-semibold text-fg-tertiary">Bordered Variant</h3>
                <Accordion variant="bordered">
                    <AccordionItem id="bordered-1" title="Item 1">
                        Content for item 1
                    </AccordionItem>
                    <AccordionItem id="bordered-2" title="Item 2">
                        Content for item 2
                    </AccordionItem>
                    <AccordionItem id="bordered-3" title="Item 3">
                        Content for item 3
                    </AccordionItem>
                </Accordion>
            </section>

            <section>
                <h3 className="mb-4 text-md font-semibold text-fg-tertiary">Separated Variant</h3>
                <Accordion variant="separated">
                    <AccordionItem id="separated-1" title="Item 1" className="rounded-xl border border-border-primary bg-bg-primary shadow-xs">
                        Content for item 1
                    </AccordionItem>
                    <AccordionItem id="separated-2" title="Item 2" className="rounded-xl border border-border-primary bg-bg-primary shadow-xs">
                        Content for item 2
                    </AccordionItem>
                    <AccordionItem id="separated-3" title="Item 3" className="rounded-xl border border-border-primary bg-bg-primary shadow-xs">
                        Content for item 3
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    ),
};
