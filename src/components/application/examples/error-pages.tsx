import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export interface NotFoundPageProps {
    /** Title text */
    title?: string;
    /** Error code to display */
    errorCode?: string;
    /** Description text */
    description?: string;
    /** Primary action label */
    primaryAction?: string;
    /** Secondary action label */
    secondaryAction?: string;
    /** Primary action callback */
    onPrimaryAction?: () => void;
    /** Secondary action callback */
    onSecondaryAction?: () => void;
    /** Additional class name */
    className?: string;
}

export const NotFoundPage = ({
    title = "Page not found",
    errorCode = "404",
    description = "Sorry, the page you are looking for doesn't exist. Here are some helpful links:",
    primaryAction = "Go back home",
    secondaryAction = "Contact support",
    onPrimaryAction,
    onSecondaryAction,
    className,
}: NotFoundPageProps) => {
    return (
        <div
            className={cx(
                "flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12",
                className
            )}
        >
            <div className="text-center">
                <p className="text-md font-semibold text-fg-brand-secondary">{errorCode}</p>
                <h1 className="mt-3 text-display-lg font-semibold text-fg-primary">{title}</h1>
                <p className="mx-auto mt-4 max-w-md text-lg text-fg-tertiary">{description}</p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    {secondaryAction && (
                        <Button color="secondary" onPress={onSecondaryAction}>
                            {secondaryAction}
                        </Button>
                    )}
                    <Button onPress={onPrimaryAction}>{primaryAction}</Button>
                </div>
            </div>
        </div>
    );
};

export interface ServerErrorPageProps {
    /** Title text */
    title?: string;
    /** Error code */
    errorCode?: string;
    /** Description */
    description?: string;
    /** Retry action label */
    retryAction?: string;
    /** Home action label */
    homeAction?: string;
    /** Retry callback */
    onRetry?: () => void;
    /** Go home callback */
    onGoHome?: () => void;
}

export const ServerErrorPage = ({
    title = "Something went wrong",
    errorCode = "500",
    description = "We're experiencing technical difficulties. Please try again later.",
    retryAction = "Try again",
    homeAction = "Go back home",
    onRetry,
    onGoHome,
}: ServerErrorPageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
            <div className="text-center">
                <p className="text-md font-semibold text-fg-error-secondary">{errorCode}</p>
                <h1 className="mt-3 text-display-lg font-semibold text-fg-primary">{title}</h1>
                <p className="mx-auto mt-4 max-w-md text-lg text-fg-tertiary">{description}</p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button color="secondary" onPress={onGoHome}>
                        {homeAction}
                    </Button>
                    <Button onPress={onRetry}>{retryAction}</Button>
                </div>
            </div>
        </div>
    );
};

export interface MaintenancePageProps {
    /** Title text */
    title?: string;
    /** Description */
    description?: string;
    /** Expected return time */
    returnTime?: string;
    /** Notify me action */
    onNotifyMe?: () => void;
}

export const MaintenancePage = ({
    title = "We're under maintenance",
    description = "We're making some improvements to our service. We'll be back shortly.",
    returnTime,
    onNotifyMe,
}: MaintenancePageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
            <div className="text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-bg-brand-primary">
                    <svg
                        className="size-8 text-fg-brand-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
                <h1 className="text-display-lg font-semibold text-fg-primary">{title}</h1>
                <p className="mx-auto mt-4 max-w-md text-lg text-fg-tertiary">{description}</p>

                {returnTime && (
                    <p className="mt-4 text-sm text-fg-tertiary">
                        Expected return: <span className="font-medium">{returnTime}</span>
                    </p>
                )}

                {onNotifyMe && (
                    <Button className="mt-8" onPress={onNotifyMe}>
                        Notify me when it's back
                    </Button>
                )}
            </div>
        </div>
    );
};

