import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { type ReactNode, useCallback } from "react";
import { cx } from "@/utils/cx";
import {
    Bold01,
    Italic01,
    Underline01,
    Strikethrough01,
    List,
    ListNumbered01,
    Quote,
    LinkExternal01,
    AlignLeft01,
    AlignCenter01,
    AlignRight01,
    Undo,
    Redo,
    Code02,
    Highlighter,
    Minus,
    Type01,
} from "@untitledui-pro/icons/line";

// ============================================
// Toolbar Button
// ============================================

interface ToolbarButtonProps {
    icon: ReactNode;
    isActive?: boolean;
    disabled?: boolean;
    onClick: () => void;
    title?: string;
}

const ToolbarButton = ({ icon, isActive, disabled, onClick, title }: ToolbarButtonProps) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        title={title}
        className={cx(
            "flex size-8 items-center justify-center rounded-md transition-colors",
            "hover:bg-bg-secondary_hover focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
            isActive && "bg-bg-brand_secondary text-fg-brand-primary",
            disabled && "cursor-not-allowed opacity-40",
        )}
    >
        {icon}
    </button>
);

// ============================================
// Toolbar Separator
// ============================================

const ToolbarSeparator = () => (
    <div className="mx-1 h-6 w-px bg-border-secondary" />
);

// ============================================
// Editor Toolbar
// ============================================

interface EditorToolbarProps {
    editor: Editor | null;
    showHeadings?: boolean;
    showAlignment?: boolean;
    showHighlight?: boolean;
    showLink?: boolean;
    showCode?: boolean;
    showLists?: boolean;
    showBlockquote?: boolean;
    showHistory?: boolean;
}

const EditorToolbar = ({
    editor,
    showHeadings = true,
    showAlignment = true,
    showHighlight = true,
    showLink = true,
    showCode = true,
    showLists = true,
    showBlockquote = true,
    showHistory = true,
}: EditorToolbarProps) => {
    if (!editor) return null;

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("Enter URL", previousUrl);

        if (url === null) return;

        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }, [editor]);

    return (
        <div className="flex flex-wrap items-center gap-1 border-b border-border-secondary p-2">
            {/* Text formatting */}
            <ToolbarButton
                icon={<Bold01 className="size-4" />}
                isActive={editor.isActive("bold")}
                onClick={() => editor.chain().focus().toggleBold().run()}
                title="Bold"
            />
            <ToolbarButton
                icon={<Italic01 className="size-4" />}
                isActive={editor.isActive("italic")}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                title="Italic"
            />
            <ToolbarButton
                icon={<Underline01 className="size-4" />}
                isActive={editor.isActive("underline")}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                title="Underline"
            />
            <ToolbarButton
                icon={<Strikethrough01 className="size-4" />}
                isActive={editor.isActive("strike")}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                title="Strikethrough"
            />

            {showHighlight && (
                <ToolbarButton
                    icon={<Highlighter className="size-4" />}
                    isActive={editor.isActive("highlight")}
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    title="Highlight"
                />
            )}

            {showCode && (
                <ToolbarButton
                    icon={<Code02 className="size-4" />}
                    isActive={editor.isActive("code")}
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    title="Inline code"
                />
            )}

            <ToolbarSeparator />

            {/* Headings */}
            {showHeadings && (
                <>
                    <ToolbarButton
                        icon={<Type01 className="size-4" />}
                        isActive={editor.isActive("heading", { level: 1 })}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        title="Heading 1"
                    />
                    <ToolbarButton
                        icon={<Type01 className="size-3.5" />}
                        isActive={editor.isActive("heading", { level: 2 })}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        title="Heading 2"
                    />
                    <ToolbarSeparator />
                </>
            )}

            {/* Alignment */}
            {showAlignment && (
                <>
                    <ToolbarButton
                        icon={<AlignLeft01 className="size-4" />}
                        isActive={editor.isActive({ textAlign: "left" })}
                        onClick={() => editor.chain().focus().setTextAlign("left").run()}
                        title="Align left"
                    />
                    <ToolbarButton
                        icon={<AlignCenter01 className="size-4" />}
                        isActive={editor.isActive({ textAlign: "center" })}
                        onClick={() => editor.chain().focus().setTextAlign("center").run()}
                        title="Align center"
                    />
                    <ToolbarButton
                        icon={<AlignRight01 className="size-4" />}
                        isActive={editor.isActive({ textAlign: "right" })}
                        onClick={() => editor.chain().focus().setTextAlign("right").run()}
                        title="Align right"
                    />
                    <ToolbarSeparator />
                </>
            )}

            {/* Lists */}
            {showLists && (
                <>
                    <ToolbarButton
                        icon={<List className="size-4" />}
                        isActive={editor.isActive("bulletList")}
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        title="Bullet list"
                    />
                    <ToolbarButton
                        icon={<ListNumbered01 className="size-4" />}
                        isActive={editor.isActive("orderedList")}
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        title="Numbered list"
                    />
                </>
            )}

            {showBlockquote && (
                <ToolbarButton
                    icon={<Quote className="size-4" />}
                    isActive={editor.isActive("blockquote")}
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    title="Blockquote"
                />
            )}

            {showLink && (
                <ToolbarButton
                    icon={<LinkExternal01 className="size-4" />}
                    isActive={editor.isActive("link")}
                    onClick={setLink}
                    title="Add link"
                />
            )}

            <ToolbarButton
                icon={<Minus className="size-4" />}
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                title="Horizontal rule"
            />

            <ToolbarSeparator />

            {/* History */}
            {showHistory && (
                <>
                    <ToolbarButton
                        icon={<Undo className="size-4" />}
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().undo()}
                        title="Undo"
                    />
                    <ToolbarButton
                        icon={<Redo className="size-4" />}
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().redo()}
                        title="Redo"
                    />
                </>
            )}
        </div>
    );
};

// ============================================
// Text Editor Component
// ============================================

export interface TextEditorProps {
    /** Initial HTML content */
    content?: string;
    /** Placeholder text when editor is empty */
    placeholder?: string;
    /** Callback when content changes */
    onUpdate?: (html: string) => void;
    /** Editor size variant */
    size?: "sm" | "md" | "lg";
    /** Show toolbar */
    showToolbar?: boolean;
    /** Toolbar options */
    toolbarOptions?: Omit<EditorToolbarProps, "editor">;
    /** Whether editor is disabled */
    disabled?: boolean;
    /** Additional class names */
    className?: string;
    /** Minimum height of editor content area */
    minHeight?: string;
}

export const TextEditor = ({
    content = "",
    placeholder = "Start typing...",
    onUpdate,
    size = "md",
    showToolbar = true,
    toolbarOptions,
    disabled = false,
    className,
    minHeight = "200px",
}: TextEditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Highlight.configure({ multicolor: true }),
            Typography,
            Placeholder.configure({ placeholder }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-fg-brand-primary underline",
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],
        content,
        editable: !disabled,
        onUpdate: ({ editor }) => {
            onUpdate?.(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: cx(
                    "prose prose-sm max-w-none focus:outline-none",
                    size === "sm" && "text-sm",
                    size === "md" && "text-md",
                    size === "lg" && "text-lg",
                ),
            },
        },
    });

    const sizeStyles = {
        sm: "p-3",
        md: "p-4",
        lg: "p-5",
    };

    return (
        <div
            className={cx(
                "overflow-hidden rounded-xl border border-border-primary bg-bg-primary",
                disabled && "cursor-not-allowed opacity-60",
                className,
            )}
        >
            {showToolbar && <EditorToolbar editor={editor} {...toolbarOptions} />}
            <div
                className={cx(sizeStyles[size], "overflow-auto")}
                style={{ minHeight }}
            >
                <EditorContent
                    editor={editor}
                    className={cx(
                        "[&_.ProseMirror]:outline-none",
                        "[&_.ProseMirror_p.is-editor-empty:first-child::before]:text-fg-placeholder [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0 [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none",
                        "[&_.ProseMirror_h1]:text-2xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h1]:mb-4",
                        "[&_.ProseMirror_h2]:text-xl [&_.ProseMirror_h2]:font-semibold [&_.ProseMirror_h2]:mb-3",
                        "[&_.ProseMirror_h3]:text-lg [&_.ProseMirror_h3]:font-semibold [&_.ProseMirror_h3]:mb-2",
                        "[&_.ProseMirror_p]:mb-3",
                        "[&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-6 [&_.ProseMirror_ul]:mb-3",
                        "[&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-6 [&_.ProseMirror_ol]:mb-3",
                        "[&_.ProseMirror_li]:mb-1",
                        "[&_.ProseMirror_blockquote]:border-l-4 [&_.ProseMirror_blockquote]:border-border-brand [&_.ProseMirror_blockquote]:pl-4 [&_.ProseMirror_blockquote]:italic [&_.ProseMirror_blockquote]:text-fg-tertiary",
                        "[&_.ProseMirror_code]:bg-bg-secondary [&_.ProseMirror_code]:px-1.5 [&_.ProseMirror_code]:py-0.5 [&_.ProseMirror_code]:rounded [&_.ProseMirror_code]:text-sm [&_.ProseMirror_code]:font-mono",
                        "[&_.ProseMirror_hr]:border-border-secondary [&_.ProseMirror_hr]:my-6",
                        "[&_.ProseMirror_mark]:bg-utility-yellow-100 [&_.ProseMirror_mark]:px-0.5",
                    )}
                />
            </div>
        </div>
    );
};
TextEditor.displayName = "TextEditor";

// ============================================
// Simple Text Editor (no toolbar)
// ============================================

export interface SimpleTextEditorProps {
    /** Initial HTML content */
    content?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Callback when content changes */
    onUpdate?: (html: string) => void;
    /** Whether editor is disabled */
    disabled?: boolean;
    /** Additional class names */
    className?: string;
    /** Minimum height */
    minHeight?: string;
}

export const SimpleTextEditor = ({
    content = "",
    placeholder = "Start typing...",
    onUpdate,
    disabled = false,
    className,
    minHeight = "100px",
}: SimpleTextEditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: false,
                codeBlock: false,
            }),
            Placeholder.configure({ placeholder }),
        ],
        content,
        editable: !disabled,
        onUpdate: ({ editor }) => {
            onUpdate?.(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "text-sm focus:outline-none",
            },
        },
    });

    return (
        <div
            className={cx(
                "rounded-lg border border-border-primary bg-bg-primary p-3",
                disabled && "cursor-not-allowed opacity-60",
                className,
            )}
            style={{ minHeight }}
        >
            <EditorContent
                editor={editor}
                className={cx(
                    "[&_.ProseMirror]:outline-none",
                    "[&_.ProseMirror_p.is-editor-empty:first-child::before]:text-fg-placeholder [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0 [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none",
                    "[&_.ProseMirror_p]:mb-2",
                )}
            />
        </div>
    );
};
SimpleTextEditor.displayName = "SimpleTextEditor";

