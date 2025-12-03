import type { Meta, StoryObj } from "@storybook/react";
import { Notification, NotificationWithAvatar, Toast } from "./notifications";

const meta: Meta<typeof Notification> = {
    title: "Application/Notifications",
    component: Notification,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type NotificationStory = StoryObj<typeof Notification>;

export const Info: NotificationStory = {
    args: {
        title: "We've just released a new feature",
        message: "Check out the new dashboard view. Pages now load faster.",
        type: "info",
        actionLabel: "View changes",
        secondaryActionLabel: "Dismiss",
    },
};

export const Success: NotificationStory = {
    args: {
        title: "Successfully saved!",
        message: "Your changes have been saved to the cloud.",
        type: "success",
        actionLabel: "View",
    },
};

export const Warning: NotificationStory = {
    args: {
        title: "Your trial is ending soon",
        message: "Upgrade now to keep access to all features.",
        type: "warning",
        actionLabel: "Upgrade now",
        secondaryActionLabel: "Learn more",
    },
};

export const Error: NotificationStory = {
    args: {
        title: "There was a problem",
        message: "We couldn't process your request. Please try again.",
        type: "error",
        actionLabel: "Try again",
        secondaryActionLabel: "Cancel",
    },
};

export const WithAvatar: StoryObj<typeof NotificationWithAvatar> = {
    render: () => (
        <NotificationWithAvatar
            title="Katherine Moss commented on your post"
            message="Hey, I really liked your latest project update. Great work on the new design!"
            avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            avatarAlt="Katherine Moss"
            actionLabel="Reply"
            secondaryActionLabel="View"
        />
    ),
};

export const WithAvatarInitials: StoryObj<typeof NotificationWithAvatar> = {
    render: () => (
        <NotificationWithAvatar
            title="John Doe mentioned you"
            message="@you Check out this new feature request"
            avatarInitials="JD"
            actionLabel="View"
        />
    ),
};

export const ToastInfo: StoryObj<typeof Toast> = {
    render: () => (
        <div className="w-fit">
            <Toast message="Changes saved successfully" type="info" />
        </div>
    ),
};

export const ToastSuccess: StoryObj<typeof Toast> = {
    render: () => (
        <div className="w-fit">
            <Toast message="File uploaded successfully" type="success" actionLabel="View" />
        </div>
    ),
};

export const ToastError: StoryObj<typeof Toast> = {
    render: () => (
        <div className="w-fit">
            <Toast message="Failed to save changes" type="error" actionLabel="Retry" />
        </div>
    ),
};

export const AllVariants: NotificationStory = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Info Notification</p>
                <Notification
                    title="New update available"
                    message="A new version is ready to install."
                    type="info"
                    actionLabel="Update now"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Success Notification</p>
                <Notification
                    title="Payment successful"
                    message="Your payment has been processed."
                    type="success"
                    actionLabel="View receipt"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Warning Notification</p>
                <Notification
                    title="Storage almost full"
                    message="You're using 90% of your storage."
                    type="warning"
                    actionLabel="Upgrade"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Error Notification</p>
                <Notification
                    title="Connection lost"
                    message="Please check your internet connection."
                    type="error"
                    actionLabel="Retry"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">With Avatar</p>
                <NotificationWithAvatar
                    title="Alex Chen shared a file"
                    message="Q4 Report.pdf"
                    avatarInitials="AC"
                    actionLabel="Download"
                />
            </div>
            <div>
                <p className="mb-2 text-sm font-medium text-fg-tertiary">Toast Notifications</p>
                <div className="flex flex-col gap-2">
                    <Toast message="Copied to clipboard" type="success" />
                    <Toast message="Processing your request..." type="info" />
                    <Toast message="Unable to connect" type="error" actionLabel="Retry" />
                </div>
            </div>
        </div>
    ),
};

