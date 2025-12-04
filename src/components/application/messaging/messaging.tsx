import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface Message {
    /** Unique message ID */
    id: string;
    /** Message text content */
    content: ReactNode;
    /** Sender name */
    sender: string;
    /** Sender avatar (URL or component) */
    avatar?: ReactNode;
    /** Timestamp */
    timestamp: Date | string;
    /** Whether this message is from the current user */
    isCurrentUser?: boolean;
    /** Message status */
    status?: "sending" | "sent" | "delivered" | "read" | "failed";
    /** Optional attachments */
    attachments?: Array<{
        name: string;
        url: string;
        type?: string;
    }>;
}

export interface MessageBubbleProps {
    message: Message;
    showAvatar?: boolean;
    showTimestamp?: boolean;
    className?: string;
}

export const MessageBubble = ({
    message,
    showAvatar = true,
    showTimestamp = true,
    className,
}: MessageBubbleProps) => {
    const formatTimestamp = (timestamp: Date | string) => {
        const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
        return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    };

    return (
        <div
            className={cx(
                "flex gap-3",
                message.isCurrentUser ? "flex-row-reverse" : "flex-row",
                className,
            )}
        >
            {/* Avatar */}
            {showAvatar && (
                <div className="flex-shrink-0">
                    {message.avatar ? (
                        typeof message.avatar === "string" ? (
                            <img
                                src={message.avatar as string}
                                alt={message.sender}
                                className="size-8 rounded-full object-cover"
                            />
                        ) : (
                            message.avatar
                        )
                    ) : (
                        <div className="flex size-8 items-center justify-center rounded-full bg-bg-brand-secondary text-sm font-medium text-fg-brand-primary">
                            {message.sender[0].toUpperCase()}
                        </div>
                    )}
                </div>
            )}

            {/* Message content */}
            <div className={cx("flex max-w-[70%] flex-col gap-1", message.isCurrentUser ? "items-end" : "items-start")}>
                {/* Sender name (only for received messages) */}
                {!message.isCurrentUser && (
                    <span className="text-xs font-medium text-fg-secondary">{message.sender}</span>
                )}

                {/* Message bubble */}
                <div
                    className={cx(
                        "rounded-2xl px-4 py-2",
                        message.isCurrentUser
                            ? "bg-brand-solid text-white rounded-br-sm"
                            : "bg-bg-secondary text-fg-primary rounded-bl-sm",
                    )}
                >
                    <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>

                    {/* Attachments */}
                    {message.attachments && message.attachments.length > 0 && (
                        <div className="mt-2 space-y-2">
                            {message.attachments.map((attachment, index) => (
                                <a
                                    key={index}
                                    href={attachment.url}
                                    className={cx(
                                        "flex items-center gap-2 rounded-lg p-2 text-xs transition-colors",
                                        message.isCurrentUser
                                            ? "bg-white/10 hover:bg-white/20"
                                            : "bg-bg-tertiary hover:bg-bg-quaternary",
                                    )}
                                >
                                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                        />
                                    </svg>
                                    <span className="truncate">{attachment.name}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* Timestamp and status */}
                {showTimestamp && (
                    <div className={cx("flex items-center gap-1 text-xs text-fg-quaternary")}>
                        <span>{formatTimestamp(message.timestamp)}</span>
                        {message.isCurrentUser && message.status && (
                            <span className="text-xs">
                                {message.status === "sending" && "•"}
                                {message.status === "sent" && "✓"}
                                {message.status === "delivered" && "✓✓"}
                                {message.status === "read" && <span className="text-fg-brand-primary">✓✓</span>}
                                {message.status === "failed" && "!"}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export interface MessageListProps {
    messages: Message[];
    showAvatars?: boolean;
    showTimestamps?: boolean;
    className?: string;
    /** Optional header component */
    header?: ReactNode;
    /** Optional input component */
    input?: ReactNode;
}

export const MessageList = ({
    messages,
    showAvatars = true,
    showTimestamps = true,
    className,
    header,
    input,
}: MessageListProps) => {
    return (
        <div className={cx("flex h-full flex-col bg-bg-primary", className)}>
            {/* Header */}
            {header && <div className="border-b border-border-secondary">{header}</div>}

            {/* Messages list */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        message={message}
                        showAvatar={showAvatars}
                        showTimestamp={showTimestamps}
                    />
                ))}
            </div>

            {/* Input */}
            {input && <div className="border-t border-border-secondary">{input}</div>}
        </div>
    );
};

export interface MessageInputProps {
    placeholder?: string;
    onSend?: (message: string) => void;
    disabled?: boolean;
    className?: string;
}

export const MessageInput = ({
    placeholder = "Type a message...",
    onSend,
    disabled = false,
    className,
}: MessageInputProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const message = formData.get("message") as string;
        if (message.trim() && onSend) {
            onSend(message);
            e.currentTarget.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} className={cx("flex items-center gap-2 p-4", className)}>
            <input
                type="text"
                name="message"
                placeholder={placeholder}
                disabled={disabled}
                className="flex-1 rounded-lg border border-border-primary bg-bg-primary px-4 py-2 text-sm text-fg-primary placeholder:text-fg-quaternary focus:border-border-brand focus:outline-none focus:ring-2 focus:ring-focus-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
                type="submit"
                disabled={disabled}
                className="rounded-lg bg-brand-solid px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-solid-hover focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Send
            </button>
        </form>
    );
};
