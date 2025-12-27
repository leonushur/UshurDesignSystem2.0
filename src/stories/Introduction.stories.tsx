import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: "Welcome/Introduction",
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "Start here! Everything you need to use the Ushur Design System in your project.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Welcome: Story = {
    render: () => (
        <div className="min-h-screen bg-bg-primary p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Hero */}
                <div className="text-center space-y-4 pb-8 border-b border-border-secondary">
                    <h1 className="text-display-lg font-bold text-fg-primary">Ushur Design System</h1>
                    <p className="text-xl text-fg-secondary max-w-2xl mx-auto">
                        Production-ready React components. Just import, customize props, and ship.
                    </p>
                </div>

                {/* Quick Start - THE MOST IMPORTANT SECTION */}
                <div className="rounded-xl border-2 border-border-brand bg-bg-brand_secondary p-6 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🚀</span>
                        <h2 className="text-display-sm font-bold text-fg-brand-primary">Quick Start (2 minutes)</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-bg-primary rounded-lg p-4 border border-border-primary">
                            <h3 className="font-semibold text-fg-primary mb-2">Step 1: Install the package</h3>
                            <code className="block bg-bg-primary-solid text-fg-white p-3 rounded font-mono text-sm">
                                npm install @ushur/design-system
                            </code>
                        </div>

                        <div className="bg-bg-primary rounded-lg p-4 border border-border-primary">
                            <h3 className="font-semibold text-fg-primary mb-2">Step 2: Import the CSS (once in your app)</h3>
                            <code className="block bg-bg-primary-solid text-fg-white p-3 rounded font-mono text-sm">
                                import "@ushur/design-system/styles";
                            </code>
                        </div>

                        <div className="bg-bg-primary rounded-lg p-4 border border-border-primary">
                            <h3 className="font-semibold text-fg-primary mb-2">Step 3: Use components</h3>
                            <pre className="bg-bg-primary-solid text-fg-white p-3 rounded font-mono text-sm overflow-x-auto">
{`import { Button, Input, Table } from "@ushur/design-system";

function MyPage() {
  return (
    <div>
      <Input label="Email" placeholder="you@example.com" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="pt-2">
                        <p className="text-sm text-fg-tertiary">
                            <strong>That's it!</strong> All styling, theming, and accessibility is built-in.
                        </p>
                    </div>
                </div>

                {/* Granular Imports */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">📦 Granular Imports (Optional)</h2>
                    <p className="text-fg-secondary">
                        For smaller bundle sizes, import only what you need:
                    </p>
                    <pre className="bg-bg-secondary p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`// Import specific categories
import { Button, Input } from "@ushur/design-system/base";
import { Table, Modal } from "@ushur/design-system/application";
import { TableCellAvatar } from "@ushur/design-system/primitives";

// Available subpaths:
// @ushur/design-system/base         - Buttons, inputs, selects, badges
// @ushur/design-system/application  - Tables, modals, navigation
// @ushur/design-system/primitives   - Table cells, avatar groups
// @ushur/design-system/foundations  - Icons, logos
// @ushur/design-system/marketing    - Landing page sections
// @ushur/design-system/hooks        - useBreakpoint, useClipboard
// @ushur/design-system/utils        - cx (class merger)`}
                    </pre>
                </div>

                {/* How to Find Components */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">🔍 How to Find What You Need</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-secondary">Browse the Sidebar →</h3>
                            <ul className="text-sm text-fg-tertiary space-y-1 list-disc list-inside">
                                <li><strong>Components/Base</strong> - Buttons, inputs, checkboxes</li>
                                <li><strong>Components/Application</strong> - Tables, modals, nav</li>
                                <li><strong>Components/Primitives</strong> - Building blocks</li>
                                <li><strong>Marketing</strong> - Landing page sections</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-secondary">Use Each Story Page</h3>
                            <ul className="text-sm text-fg-tertiary space-y-1 list-disc list-inside">
                                <li><strong>Canvas</strong> - See the live component</li>
                                <li><strong>Controls</strong> - Change props interactively</li>
                                <li><strong>Docs</strong> - Full API documentation</li>
                                <li><strong>Show code</strong> - Copy the exact import</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Common Patterns */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">📋 Common Patterns</h2>

                    <div className="space-y-4">
                        <div className="bg-bg-secondary p-4 rounded-lg">
                            <h3 className="font-medium text-fg-primary mb-2">Building a Data Table</h3>
                            <pre className="font-mono text-xs overflow-x-auto">
{`import { Table } from "@ushur/design-system/application";
import { TableCellAvatar, TableCellBadge } from "@ushur/design-system/primitives";

<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>User</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>
        <TableCellAvatar src="/avatar.jpg" primary="Jane Doe" secondary="jane@co.com" />
      </Table.Cell>
      <Table.Cell>
        <TableCellBadge label="Active" color="success" />
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`}
                            </pre>
                        </div>

                        <div className="bg-bg-secondary p-4 rounded-lg">
                            <h3 className="font-medium text-fg-primary mb-2">Form with Validation</h3>
                            <pre className="font-mono text-xs overflow-x-auto">
{`import { Input, Button } from "@ushur/design-system/base";

<form onSubmit={handleSubmit}>
  <Input
    label="Email"
    type="email"
    required
    error={errors.email}
    hint="We'll never share your email"
  />
  <Button type="submit" variant="primary">
    Subscribe
  </Button>
</form>`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* What's Included */}
                <div className="rounded-lg border border-border-primary p-6 space-y-4">
                    <h2 className="text-display-xs font-semibold text-fg-primary">✅ What's Included</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-brand-primary">Styling</h3>
                            <ul className="text-fg-tertiary space-y-1">
                                <li>✓ Tailwind CSS 4</li>
                                <li>✓ Design tokens</li>
                                <li>✓ Dark mode ready</li>
                                <li>✓ Responsive</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-brand-primary">Accessibility</h3>
                            <ul className="text-fg-tertiary space-y-1">
                                <li>✓ React Aria</li>
                                <li>✓ Keyboard nav</li>
                                <li>✓ Screen readers</li>
                                <li>✓ Focus visible</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-brand-primary">TypeScript</h3>
                            <ul className="text-fg-tertiary space-y-1">
                                <li>✓ Full types</li>
                                <li>✓ IntelliSense</li>
                                <li>✓ Prop validation</li>
                                <li>✓ Auto-complete</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-fg-brand-primary">Features</h3>
                            <ul className="text-fg-tertiary space-y-1">
                                <li>✓ 100+ components</li>
                                <li>✓ Icons included</li>
                                <li>✓ Animations</li>
                                <li>✓ Tree-shakable</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Need Help */}
                <div className="rounded-lg bg-bg-secondary p-6 space-y-3">
                    <h2 className="text-display-xs font-semibold text-fg-primary">💡 Need Help?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                            <span>📖</span>
                            <div>
                                <strong className="text-fg-secondary">Browse Components</strong>
                                <p className="text-fg-tertiary">Use the sidebar to explore</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <span>🎮</span>
                            <div>
                                <strong className="text-fg-secondary">Try Controls</strong>
                                <p className="text-fg-tertiary">Interactive prop editing</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <span>📝</span>
                            <div>
                                <strong className="text-fg-secondary">Copy Code</strong>
                                <p className="text-fg-tertiary">Show code → copy → paste</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center pt-6 border-t border-border-secondary">
                    <p className="text-sm text-fg-quaternary">
                        Built with React 19 • TypeScript • Tailwind CSS 4 • React Aria • Storybook 10
                    </p>
                </div>
            </div>
        </div>
    ),
};
