import type { Meta } from "@storybook/react";

const meta: Meta = {
    title: "Welcome/Introduction",
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Welcome to the Ushur Design System - A production-ready collection of React components built with Tailwind CSS.",
            },
        },
    },
};

export default meta;

export const Intro = () => {
    return (
        <div className="w-full max-w-4xl px-8 py-12">
            <h1 className="text-display-lg font-semibold text-primary mb-4">Welcome to the Ushur Design System</h1>
            <p className="text-xl text-secondary mb-8">
                Production-ready React + Tailwind CSS components and patterns.
            </p>

            <div className="space-y-6 text-secondary">
                <section>
                    <h2 className="text-display-xs font-semibold text-primary mb-3">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-md">
                        <li>Unified themes: tokens, typography, and Tailwind utilities wired to Ushur's brand</li>
                        <li>Foundations: icons, logos, color primitives, and shared assets</li>
                        <li>Base components: inputs, select menus, buttons, tags, sliders, and more</li>
                        <li>Application UI: navigation, modals, pagination, tables, loading states</li>
                        <li>Marketing library: headers, features, pricing, testimonials, social proof, complete landing pages</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-display-xs font-semibold text-primary mb-3">Getting Started</h2>
                    <ol className="list-decimal list-inside space-y-2 text-md">
                        <li><code className="bg-secondary px-2 py-0.5 rounded font-mono text-sm">npm install</code></li>
                        <li><code className="bg-secondary px-2 py-0.5 rounded font-mono text-sm">npm run storybook</code></li>
                        <li>Toggle light/dark with the toolbar switch</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-display-xs font-semibold text-primary mb-3">Development Workflow</h2>
                    <ul className="list-disc list-inside space-y-2 text-md">
                        <li>Use <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm">.storybook/preview.tsx</code> to register decorators, global parameters, and the theme toggle</li>
                        <li>Write stories in <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm">*.stories.tsx</code> or <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm">*.stories.mdx</code>. Prefer stories collocated with components</li>
                        <li>Reference existing marketing examples under <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm">src/components/marketing/examples</code> for layout composition patterns</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-display-xs font-semibold text-primary mb-3">Documentation Template</h2>
                    <div className="bg-secondary p-4 rounded-lg">
                        <pre className="text-sm font-mono overflow-x-auto">{`import { Meta, Title, Subtitle, Description, Primary, ArgsTable, Stories } from "@storybook/blocks";
import { ComponentName } from "./component-name";

<Meta title="Category/Component Name" component={ComponentName} parameters={{ layout: "padded" }} />

<Title>Component Name</Title>
<Subtitle>One sentence on the purpose.</Subtitle>
<Description>
- Key capabilities bullet list
- Usage guidelines
- Accessibility considerations (keyboard, ARIA, contrast)
</Description>

## Usage

<Primary />

<ArgsTable story="Primary" />

## Variants

<Stories />

## Implementation Notes

1. State management or data requirements.
2. Responsive behavior.
3. Theming knobs (tokens, CSS vars).`}</pre>
                    </div>
                </section>

                <section>
                    <h2 className="text-display-xs font-semibold text-primary mb-3">Testing & Deployment</h2>
                    <ul className="list-disc list-inside space-y-2 text-md">
                        <li>Run <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm">npm run test</code> for unit tests (when available)</li>
                        <li>Run <code className="bg-secondary px-1.5 py-0.5 rounded font-mono text-sm">npm run build-storybook</code> before pushing to GitHub</li>
                        <li>Vercel builds automatically from main branch</li>
                        <li>Chromatic snapshots ensure visual consistency</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};
