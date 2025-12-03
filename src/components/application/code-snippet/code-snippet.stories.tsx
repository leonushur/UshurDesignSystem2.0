import type { Meta, StoryObj } from "@storybook/react";
import { CodeSnippet, CodeSnippetInline, CodeSnippetTabs } from "./code-snippet";

const meta: Meta<typeof CodeSnippet> = {
    title: "Application/Code Snippets",
    component: CodeSnippet,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

const jsCode = `import { Button } from '@/components/ui/button';

export function MyComponent() {
  return (
    <Button onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}`;

const cssCode = `.button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-brand-600);
  color: white;
  font-weight: 500;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: var(--color-brand-700);
}`;

const bashCode = `# Install dependencies
npm install @untitledui/react

# Or with yarn
yarn add @untitledui/react

# Or with pnpm
pnpm add @untitledui/react`;

export const Default: StoryObj<typeof CodeSnippet> = {
    args: {
        code: jsCode,
        language: "tsx",
        title: "MyComponent.tsx",
    },
};

export const WithLineNumbers: StoryObj<typeof CodeSnippet> = {
    args: {
        code: jsCode,
        language: "tsx",
        title: "MyComponent.tsx",
        showLineNumbers: true,
    },
};

export const WithoutHeader: StoryObj<typeof CodeSnippet> = {
    args: {
        code: bashCode,
        showCopyButton: false,
    },
};

export const CSS: StoryObj<typeof CodeSnippet> = {
    args: {
        code: cssCode,
        language: "css",
        title: "styles.css",
        showLineNumbers: true,
    },
};

export const BashCommands: StoryObj<typeof CodeSnippet> = {
    args: {
        code: bashCode,
        language: "bash",
        title: "Terminal",
    },
};

export const WithMaxHeight: StoryObj<typeof CodeSnippet> = {
    args: {
        code: `${jsCode}\n\n// More code...\n${jsCode}`,
        language: "tsx",
        title: "LongFile.tsx",
        showLineNumbers: true,
        maxHeight: 200,
    },
};

export const Inline: StoryObj<typeof CodeSnippetInline> = {
    render: () => (
        <p className="text-sm text-fg-secondary">
            To install, run <CodeSnippetInline>npm install @untitledui/react</CodeSnippetInline> in
            your terminal. Then import the component using{" "}
            <CodeSnippetInline>{"import { Button } from '@untitledui/react'"}</CodeSnippetInline>.
        </p>
    ),
};

export const WithTabs: StoryObj<typeof CodeSnippetTabs> = {
    render: () => (
        <CodeSnippetTabs
            tabs={[
                {
                    label: "React",
                    code: jsCode,
                    language: "tsx",
                },
                {
                    label: "CSS",
                    code: cssCode,
                    language: "css",
                },
                {
                    label: "Install",
                    code: bashCode,
                    language: "bash",
                },
            ]}
        />
    ),
};

export const TabsWithLineNumbers: StoryObj<typeof CodeSnippetTabs> = {
    render: () => (
        <CodeSnippetTabs
            tabs={[
                {
                    label: "index.tsx",
                    code: jsCode,
                },
                {
                    label: "styles.css",
                    code: cssCode,
                },
            ]}
            showLineNumbers
        />
    ),
};

export const AllVariants: StoryObj = {
    render: () => (
        <div className="flex flex-col gap-8">
            <div>
                <p className="mb-3 text-sm font-medium text-fg-tertiary">Basic Code Block</p>
                <CodeSnippet code={jsCode} language="tsx" title="Component.tsx" />
            </div>

            <div>
                <p className="mb-3 text-sm font-medium text-fg-tertiary">With Line Numbers</p>
                <CodeSnippet
                    code={cssCode}
                    language="css"
                    title="styles.css"
                    showLineNumbers
                />
            </div>

            <div>
                <p className="mb-3 text-sm font-medium text-fg-tertiary">Terminal Commands</p>
                <CodeSnippet code={bashCode} language="bash" title="Terminal" />
            </div>

            <div>
                <p className="mb-3 text-sm font-medium text-fg-tertiary">Inline Code</p>
                <p className="text-sm text-fg-secondary">
                    Use the <CodeSnippetInline>Button</CodeSnippetInline> component from{" "}
                    <CodeSnippetInline>@untitledui/react</CodeSnippetInline> package.
                </p>
            </div>

            <div>
                <p className="mb-3 text-sm font-medium text-fg-tertiary">Tabbed Code</p>
                <CodeSnippetTabs
                    tabs={[
                        { label: "npm", code: "npm install @untitledui/react" },
                        { label: "yarn", code: "yarn add @untitledui/react" },
                        { label: "pnpm", code: "pnpm add @untitledui/react" },
                    ]}
                />
            </div>
        </div>
    ),
};

