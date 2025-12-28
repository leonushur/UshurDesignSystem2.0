import type { ReactNode } from "react";
import { AlertCircle, CheckCircle, InfoCircle, XClose } from "@untitledui-pro/icons/line";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const iconMap = {
    info: InfoCircle,
    success: CheckCircle,
    warning: AlertCircle,
    error: AlertCircle,
};

const colorMap = {
    info: "text-fg-brand-primary",
    success: "text-fg-success-primary",
    warning: "text-fg-warning-primary",
    error: "text-fg-error-primary",
};

export interface NotificationProps {
    /** Notification title */
    title: string;
    /** Notification message/description */
    message?: ReactNode;
    /** Type/severity of notification */
    type?: "info" | "success" | "warning" | "error";
    /** Show close button */
    dismissible?: boolean;
    /** Primary action button label */
    actionLabel?: string;
    /** Secondary action button label */
    secondaryActionLabel?: string;
    /** Callback when closed */
    onClose?: () => void;
    /** Callback for primary action */
    onAction?: () => void;
    /** Callback for secondary action */
    onSecondaryAction?: () => void;
    /** Additional class name */
    className?: string;
}

export const Notification = ({
    title,
    message,
    type = "info",
    dismissible = true,
    actionLabel,
    secondaryActionLabel,
    onClose,
    onAction,
    onSecondaryAction,
    className,
}: NotificationProps) => {
    const Icon = iconMap[type];

    return (
        <div
            className={cx(
                "relative flex gap-4 rounded-xl border border-border-secondary bg-bg-primary p-4 shadow-lg",
                className
            )}
            role="alert"
        >
            <div className={cx("flex-shrink-0", colorMap[type])}>
                <Icon className="size-5" />
            </div>

            <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-col gap-1 pr-6">
                    <p className="text-sm font-semibold text-fg-primary">{title}</p>
                    {message && <p className="text-sm text-fg-tertiary">{message}</p>}
                </div>

                {(actionLabel || secondaryActionLabel) && (
                    <div className="flex gap-3">
                        {secondaryActionLabel && (
                            <Button size="sm" color="link-gray" onPress={onSecondaryAction}>
                                {secondaryActionLabel}
                            </Button>
                        )}
                        {actionLabel && (
                            <Button size="sm" color="link-color" onPress={onAction}>
                                {actionLabel}
                            </Button>
                        )}
                    </div>
                )}
            </div>

            {dismissible && (
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 text-fg-quaternary transition-colors hover:text-fg-secondary"
                    aria-label="Dismiss notification"
                >
                    <XClose className="size-5" />
                </button>
            )}
        </div>
    );
};

export interface NotificationWithAvatarProps extends Omit<NotificationProps, "type"> {
    /** Avatar image URL */
    avatarSrc?: string;
    /** Avatar alt text */
    avatarAlt?: string;
    /** Avatar initials fallback */
    avatarInitials?: string;
}

export const NotificationWithAvatar = ({
    title,
    message,
    avatarSrc,
    avatarAlt = "",
    avatarInitials,
    dismissible = true,
    actionLabel,
    secondaryActionLabel,
    onClose,
    onAction,
    onSecondaryAction,
    className,
}: NotificationWithAvatarProps) => {
    return (
        <div
            className={cx(
                "relative flex gap-4 rounded-xl border border-border-secondary bg-bg-primary p-4 shadow-lg",
                className
            )}
            role="alert"
        >
            <div className="flex-shrink-0">
                {avatarSrc ? (
                    <img
                        src={avatarSrc}
                        alt={avatarAlt}
                        className="size-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-primary text-sm font-semibold text-fg-brand-primary">
                        {avatarInitials}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-col gap-1 pr-6">
                    <p className="text-sm font-semibold text-fg-primary">{title}</p>
                    {message && <p className="text-sm text-fg-tertiary">{message}</p>}
                </div>

                {(actionLabel || secondaryActionLabel) && (
                    <div className="flex gap-3">
                        {secondaryActionLabel && (
                            <Button size="sm" color="link-gray" onPress={onSecondaryAction}>
                                {secondaryActionLabel}
                            </Button>
                        )}
                        {actionLabel && (
                            <Button size="sm" color="link-color" onPress={onAction}>
                                {actionLabel}
                            </Button>
                        )}
                    </div>
                )}
            </div>

            {dismissible && (
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 text-fg-quaternary transition-colors hover:text-fg-secondary"
                    aria-label="Dismiss notification"
                >
                    <XClose className="size-5" />
                </button>
            )}
        </div>
    );
};

export interface ToastProps {
    /** Toast message */
    message: string;
    /** Type/severity */
    type?: "info" | "success" | "warning" | "error";
    /** Show close button */
    dismissible?: boolean;
    /** Action button label */
    actionLabel?: string;
    /** Callback when closed */
    onClose?: () => void;
    /** Callback for action */
    onAction?: () => void;
    /** Additional class name */
    className?: string;
}

export const Toast = ({
    message,
    type = "info",
    dismissible = true,
    actionLabel,
    onClose,
    onAction,
    className,
}: ToastProps) => {
    const Icon = iconMap[type];

    return (
        <div
            className={cx(
                "flex items-center gap-3 rounded-xl bg-bg-primary-solid px-4 py-3 shadow-lg",
                className
            )}
            role="alert"
        >
            <Icon className={cx("size-5 flex-shrink-0", colorMap[type])} />
            <p className="flex-1 text-sm font-medium text-text-primary_on-brand">{message}</p>
            
            {actionLabel && (
                <button
                    type="button"
                    onClick={onAction}
                    className="text-sm font-semibold text-brand-200 transition-colors hover:text-white"
                >
                    {actionLabel}
                </button>
            )}

            {dismissible && (
                <button
                    type="button"
                    onClick={onClose}
                    className="text-fg-quaternary transition-colors hover:text-fg-primary"
                    aria-label="Dismiss"
                >
                    <XClose className="size-5" />
                </button>
            )}
        </div>
    );
};

