import { useState } from "react";
import { Copy01, Check } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

export interface CodeSnippetProps {
    /** Code content */
    code: string;
    /** Language for syntax highlighting hint */
    language?: string;
    /** Show line numbers */
    showLineNumbers?: boolean;
    /** Show copy button */
    showCopyButton?: boolean;
    /** Title/filename */
    title?: string;
    /** Maximum height before scrolling */
    maxHeight?: number;
    /** Additional class name */
    className?: string;
}

export const CodeSnippet = ({
    code,
    language,
    showLineNumbers = false,
    showCopyButton = true,
    title,
    maxHeight,
    className,
}: CodeSnippetProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split("\n");

    return (
        <div
            className={cx(
                "overflow-hidden rounded-xl border border-border-secondary bg-gray-900",
                className
            )}
        >
            {/* Header */}
            {(title || showCopyButton) && (
                <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
                    <div className="flex items-center gap-2">
                        {title && (
                            <span className="text-sm font-medium text-gray-400">{title}</span>
                        )}
                        {language && (
                            <span className="rounded bg-gray-700 px-2 py-0.5 text-xs text-gray-400">
                                {language}
                            </span>
                        )}
                    </div>
                    {showCopyButton && (
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                        >
                            {copied ? (
                                <>
                                    <Check className="size-3.5" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy01 className="size-3.5" />
                                    Copy
                                </>
                            )}
                        </button>
                    )}
                </div>
            )}

            {/* Code content */}
            <div
                className="overflow-auto p-4"
                style={{ maxHeight: maxHeight ? `${maxHeight}px` : undefined }}
            >
                <pre className="text-sm leading-relaxed">
                    <code className="text-gray-100">
                        {showLineNumbers ? (
                            <table className="w-full">
                                <tbody>
                                    {lines.map((line, index) => (
                                        <tr key={index}>
                                            <td className="select-none pr-4 text-right text-gray-500">
                                                {index + 1}
                                            </td>
                                            <td className="whitespace-pre">{line || " "}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            code
                        )}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export interface CodeSnippetInlineProps {
    /** Code content */
    children: string;
    /** Additional class name */
    className?: string;
}

export const CodeSnippetInline = ({ children, className }: CodeSnippetInlineProps) => {
    return (
        <code
            className={cx(
                "rounded bg-bg-secondary px-1.5 py-0.5 font-mono text-sm text-fg-primary",
                className
            )}
        >
            {children}
        </code>
    );
};

export interface CodeSnippetTabsProps {
    /** Array of code tabs */
    tabs: Array<{
        label: string;
        code: string;
        language?: string;
    }>;
    /** Show line numbers */
    showLineNumbers?: boolean;
    /** Maximum height */
    maxHeight?: number;
    /** Additional class name */
    className?: string;
}

export const CodeSnippetTabs = ({
    tabs,
    showLineNumbers = false,
    maxHeight,
    className,
}: CodeSnippetTabsProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(tabs[activeTab].code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = tabs[activeTab].code.split("\n");

    return (
        <div
            className={cx(
                "overflow-hidden rounded-xl border border-border-secondary bg-gray-900",
                className
            )}
        >
            {/* Tabs header */}
            <div className="flex items-center justify-between border-b border-gray-700">
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActiveTab(index)}
                            className={cx(
                                "px-4 py-2 text-sm font-medium transition-colors",
                                activeTab === index
                                    ? "border-b-2 border-brand-500 text-white"
                                    : "text-gray-400 hover:text-gray-300"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={handleCopy}
                    className="mr-2 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                    {copied ? (
                        <>
                            <Check className="size-3.5" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy01 className="size-3.5" />
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code content */}
            <div
                className="overflow-auto p-4"
                style={{ maxHeight: maxHeight ? `${maxHeight}px` : undefined }}
            >
                <pre className="text-sm leading-relaxed">
                    <code className="text-gray-100">
                        {showLineNumbers ? (
                            <table className="w-full">
                                <tbody>
                                    {lines.map((line, index) => (
                                        <tr key={index}>
                                            <td className="select-none pr-4 text-right text-gray-500">
                                                {index + 1}
                                            </td>
                                            <td className="whitespace-pre">{line || " "}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            tabs[activeTab].code
                        )}
                    </code>
                </pre>
            </div>
        </div>
    );
};

