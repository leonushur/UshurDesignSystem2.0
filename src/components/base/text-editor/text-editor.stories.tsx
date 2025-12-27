import type { Meta, StoryObj } from "@storybook/react";
import { TextEditor, SimpleTextEditor } from "./text-editor";
import { useState } from "react";

type TextEditorStory = StoryObj<typeof TextEditor>;

const meta: Meta<typeof TextEditor> = {
    title: "Base/Text Editor",
    component: TextEditor,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

// ============================================
// Default Story
// ============================================

export const Default: TextEditorStory = {
    render: () => (
        <div className="max-w-2xl">
            <TextEditor placeholder="Start writing your content..." />
        </div>
    ),
};

// ============================================
// With Initial Content
// ============================================

export const WithContent: TextEditorStory = {
    name: "With Initial Content",
    render: () => (
        <div className="max-w-2xl">
            <TextEditor
                content={`
                    <h1>Welcome to the Text Editor</h1>
                    <p>This is a <strong>rich text editor</strong> built with <em>Tiptap</em>.</p>
                    <h2>Features</h2>
                    <ul>
                        <li>Bold, italic, underline, strikethrough</li>
                        <li>Headings (H1, H2)</li>
                        <li>Bullet and numbered lists</li>
                        <li>Blockquotes</li>
                        <li>Links and inline code</li>
                        <li>Text alignment</li>
                        <li>Highlight text</li>
                        <li>Undo/redo history</li>
                    </ul>
                    <blockquote>
                        This is a blockquote for emphasis.
                    </blockquote>
                    <p>You can also add <code>inline code</code> like this.</p>
                `}
            />
        </div>
    ),
};

// ============================================
// Size Variants
// ============================================

export const Sizes: TextEditorStory = {
    name: "Size Variants",
    render: () => (
        <div className="space-y-8 max-w-2xl">
            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Small</h3>
                <TextEditor
                    size="sm"
                    placeholder="Small editor..."
                    minHeight="150px"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Medium (Default)</h3>
                <TextEditor
                    size="md"
                    placeholder="Medium editor..."
                    minHeight="200px"
                />
            </div>
            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Large</h3>
                <TextEditor
                    size="lg"
                    placeholder="Large editor..."
                    minHeight="250px"
                />
            </div>
        </div>
    ),
};

// ============================================
// Minimal Toolbar
// ============================================

export const MinimalToolbar: TextEditorStory = {
    name: "Minimal Toolbar",
    render: () => (
        <div className="max-w-2xl">
            <TextEditor
                placeholder="Basic formatting only..."
                toolbarOptions={{
                    showHeadings: false,
                    showAlignment: false,
                    showHighlight: false,
                    showCode: false,
                    showBlockquote: false,
                }}
            />
        </div>
    ),
};

// ============================================
// No Toolbar
// ============================================

export const NoToolbar: TextEditorStory = {
    name: "No Toolbar",
    render: () => (
        <div className="max-w-2xl">
            <TextEditor
                showToolbar={false}
                placeholder="Use keyboard shortcuts for formatting..."
                content="<p>Use <strong>Ctrl/Cmd+B</strong> for bold, <em>Ctrl/Cmd+I</em> for italic, etc.</p>"
            />
        </div>
    ),
};

// ============================================
// Disabled State
// ============================================

export const Disabled: TextEditorStory = {
    name: "Disabled",
    render: () => (
        <div className="max-w-2xl">
            <TextEditor
                disabled
                content="<p>This editor is <strong>disabled</strong> and cannot be edited.</p>"
            />
        </div>
    ),
};

// ============================================
// Simple Text Editor
// ============================================

export const Simple: TextEditorStory = {
    name: "Simple (No Toolbar)",
    render: () => (
        <div className="max-w-md">
            <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Simple Text Editor</h3>
            <SimpleTextEditor placeholder="Write a quick note..." />
        </div>
    ),
};

// ============================================
// Controlled Component
// ============================================

const ControlledExample = () => {
    const [html, setHtml] = useState("<p>Edit this content...</p>");

    return (
        <div className="space-y-4 max-w-2xl">
            <TextEditor
                content={html}
                onUpdate={setHtml}
                placeholder="Start typing..."
            />
            <div className="rounded-lg bg-bg-secondary p-4">
                <h4 className="mb-2 text-sm font-medium text-fg-tertiary">HTML Output:</h4>
                <pre className="text-xs text-fg-secondary whitespace-pre-wrap break-all font-mono">
                    {html}
                </pre>
            </div>
        </div>
    );
};

export const Controlled: TextEditorStory = {
    name: "Controlled with HTML Output",
    render: () => <ControlledExample />,
};

// ============================================
// Blog Post Example
// ============================================

export const BlogPostExample: TextEditorStory = {
    name: "Example - Blog Post",
    render: () => (
        <div className="max-w-3xl mx-auto">
            <div className="mb-6">
                <label className="block text-sm font-medium text-fg-secondary mb-2">
                    Post Title
                </label>
                <input
                    type="text"
                    placeholder="Enter your post title..."
                    className="w-full rounded-lg border border-border-primary bg-bg-primary px-4 py-3 text-lg font-semibold text-fg-primary placeholder:text-fg-placeholder focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring"
                    defaultValue="Getting Started with Design Systems"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-fg-secondary mb-2">
                    Content
                </label>
                <TextEditor
                    minHeight="400px"
                    content={`
                        <h2>Introduction</h2>
                        <p>Design systems are a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.</p>
                        <h2>Why Design Systems Matter</h2>
                        <p>A well-implemented design system can help teams:</p>
                        <ul>
                            <li>Build products faster</li>
                            <li>Maintain consistency across platforms</li>
                            <li>Improve collaboration between designers and developers</li>
                            <li>Scale design decisions efficiently</li>
                        </ul>
                        <blockquote>
                            "A design system is not a project. It's a product serving products."
                        </blockquote>
                        <h2>Getting Started</h2>
                        <p>The first step is to audit your existing designs and identify common patterns...</p>
                    `}
                />
            </div>
        </div>
    ),
};

// ============================================
// Comment Box Example
// ============================================

export const CommentBoxExample: TextEditorStory = {
    name: "Example - Comment Box",
    render: () => (
        <div className="max-w-lg">
            <div className="rounded-xl border border-border-primary p-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-bg-brand-solid flex items-center justify-center text-fg-white font-semibold">
                        JD
                    </div>
                    <div>
                        <p className="font-medium text-fg-primary">John Doe</p>
                        <p className="text-sm text-fg-tertiary">Replying to thread</p>
                    </div>
                </div>
                <TextEditor
                    size="sm"
                    minHeight="100px"
                    placeholder="Write your reply..."
                    toolbarOptions={{
                        showHeadings: false,
                        showAlignment: false,
                        showHighlight: false,
                        showBlockquote: false,
                        showHistory: false,
                    }}
                />
                <div className="flex justify-end mt-3">
                    <button className="rounded-lg bg-bg-brand-solid px-4 py-2 text-sm font-medium text-fg-white hover:bg-bg-brand-solid_hover transition-colors">
                        Post Reply
                    </button>
                </div>
            </div>
        </div>
    ),
};


