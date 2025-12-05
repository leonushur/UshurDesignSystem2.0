import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: "Welcome/Introduction",
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Welcome to the Ushur Design System! This guide will help you get started.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Welcome: Story = {
    render: () => (
        <div className="max-w-4xl p-8 space-y-6">
            <div className="space-y-2">
                <h1 className="text-display-lg font-bold text-fg-primary">Welcome to Ushur Design System</h1>
                <p className="text-lg text-fg-secondary">
                    A comprehensive React component library built with modern web technologies for building beautiful, accessible user interfaces.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-display-sm font-semibold text-fg-primary">Quick Start</h2>
                <div className="space-y-3">
                    <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
                        <h3 className="text-md font-semibold text-fg-secondary mb-2">1. Install Dependencies</h3>
                        <code className="block bg-bg-primary p-3 rounded text-sm font-mono text-fg-brand-primary">npm install</code>
                    </div>

                    <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
                        <h3 className="text-md font-semibold text-fg-secondary mb-2">2. Start Storybook</h3>
                        <code className="block bg-bg-primary p-3 rounded text-sm font-mono text-fg-brand-primary">npm run storybook</code>
                        <p className="text-sm text-fg-tertiary mt-2">Opens at http://localhost:6006</p>
                    </div>

                    <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
                        <h3 className="text-md font-semibold text-fg-secondary mb-2">3. Explore Components</h3>
                        <p className="text-sm text-fg-tertiary">
                            Browse the sidebar to see all available components, from basic buttons to complex tables. Each component includes:
                        </p>
                        <ul className="list-disc list-inside text-sm text-fg-tertiary mt-2 space-y-1">
                            <li>Interactive examples</li>
                            <li>Usage documentation</li>
                            <li>Props and controls</li>
                            <li>Code samples</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-display-sm font-semibold text-fg-primary">Component Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border-primary p-4 hover:border-border-brand transition-colors">
                        <h3 className="text-md font-semibold text-fg-brand-primary mb-2">Foundations</h3>
                        <p className="text-sm text-fg-tertiary">
                            Colors, typography, spacing, shadows, and icons. The building blocks of the design system.
                        </p>
                    </div>

                    <div className="rounded-lg border border-border-primary p-4 hover:border-border-brand transition-colors">
                        <h3 className="text-md font-semibold text-fg-brand-primary mb-2">Base Components</h3>
                        <p className="text-sm text-fg-tertiary">
                            Buttons, inputs, checkboxes, badges, tooltips. Essential UI elements for any interface.
                        </p>
                    </div>

                    <div className="rounded-lg border border-border-primary p-4 hover:border-border-brand transition-colors">
                        <h3 className="text-md font-semibold text-fg-brand-primary mb-2">Application Components</h3>
                        <p className="text-sm text-fg-tertiary">
                            Tables, navigation, modals, alerts, pagination. Complex components for building applications.
                        </p>
                    </div>

                    <div className="rounded-lg border border-border-primary p-4 hover:border-border-brand transition-colors">
                        <h3 className="text-md font-semibold text-fg-brand-primary mb-2">Marketing Components</h3>
                        <p className="text-sm text-fg-tertiary">
                            Headers, footers, CTAs, testimonials. Components designed for marketing pages.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-display-sm font-semibold text-fg-primary">Key Features</h2>
                <div className="space-y-2">
                    <div className="flex items-start gap-3">
                        <span className="text-fg-brand-primary text-lg">✓</span>
                        <div>
                            <strong className="text-fg-secondary">Fully Accessible</strong>
                            <p className="text-sm text-fg-tertiary">Built with React Aria for WCAG compliance</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-fg-brand-primary text-lg">✓</span>
                        <div>
                            <strong className="text-fg-secondary">Type-Safe</strong>
                            <p className="text-sm text-fg-tertiary">Full TypeScript support with detailed prop types</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-fg-brand-primary text-lg">✓</span>
                        <div>
                            <strong className="text-fg-secondary">Modern Styling</strong>
                            <p className="text-sm text-fg-tertiary">Tailwind CSS 4 with custom design tokens</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-fg-brand-primary text-lg">✓</span>
                        <div>
                            <strong className="text-fg-secondary">Interactive Controls</strong>
                            <p className="text-sm text-fg-tertiary">Tables with sorting, resizing, and reordering</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-display-sm font-semibold text-fg-primary">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-bg-brand_secondary text-fg-brand-primary text-sm font-medium">React 19</span>
                    <span className="px-3 py-1 rounded-full bg-bg-brand_secondary text-fg-brand-primary text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 rounded-full bg-bg-brand_secondary text-fg-brand-primary text-sm font-medium">Tailwind CSS 4</span>
                    <span className="px-3 py-1 rounded-full bg-bg-brand_secondary text-fg-brand-primary text-sm font-medium">Storybook 10</span>
                    <span className="px-3 py-1 rounded-full bg-bg-brand_secondary text-fg-brand-primary text-sm font-medium">React Aria</span>
                    <span className="px-3 py-1 rounded-full bg-bg-brand_secondary text-fg-brand-primary text-sm font-medium">Vite 7</span>
                </div>
            </div>

            <div className="rounded-lg border border-border-brand bg-bg-brand_secondary p-4">
                <h3 className="text-md font-semibold text-fg-brand-primary mb-2">Need Help?</h3>
                <p className="text-sm text-fg-secondary mb-3">
                    Check the README.md file in the project root for detailed installation instructions, troubleshooting, and more.
                </p>
                <div className="space-y-1 text-sm text-fg-tertiary">
                    <p>📖 Browse components in the sidebar</p>
                    <p>🎮 Use the Controls panel to interact with components</p>
                    <p>📝 Check the Docs tab for detailed documentation</p>
                    <p>🔍 View the code by toggling the "Show code" option</p>
                </div>
            </div>

            <div className="pt-6 border-t border-border-secondary text-center">
                <p className="text-sm text-fg-tertiary">
                    Welcome to the Ushur Design System! Start exploring components in the sidebar. →
                </p>
            </div>
        </div>
    ),
};
