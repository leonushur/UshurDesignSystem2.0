import type { Meta, StoryObj } from "@storybook/react";
import { AlertFloating, AlertFullWidth } from "./alerts";

type AlertFloatingStory = StoryObj<typeof AlertFloating>;
type AlertFullWidthStory = StoryObj<typeof AlertFullWidth>;

const metaFloating: Meta<typeof AlertFloating> = {
    title: "Application/Alerts/Floating Alert",
    component: AlertFloating,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default metaFloating;

export const Default: AlertFloatingStory = {
    args: {
        title: "We've just released a new feature",
        description: "Check out the new dashboard view. Pages now load faster.",
        confirmLabel: "View changes",
        dismissLabel: "Dismiss",
        onClose: () => console.log("Dismissed"),
        onConfirm: () => console.log("Confirmed"),
    },
};

export const BrandColor: AlertFloatingStory = {
    args: {
        title: "New integration available",
        description: "Connect your account to unlock new features.",
        confirmLabel: "Connect now",
        color: "brand",
        onClose: () => console.log("Dismissed"),
        onConfirm: () => console.log("Confirmed"),
    },
};

export const ErrorAlert: AlertFloatingStory = {
    args: {
        title: "There was a problem with your submission",
        description: "Please check the form for errors and try again.",
        confirmLabel: "Try again",
        color: "error",
        onClose: () => console.log("Dismissed"),
        onConfirm: () => console.log("Confirmed"),
    },
};

export const WarningAlert: AlertFloatingStory = {
    args: {
        title: "Your session is about to expire",
        description: "You will be logged out in 5 minutes due to inactivity.",
        confirmLabel: "Stay logged in",
        color: "warning",
        onClose: () => console.log("Dismissed"),
        onConfirm: () => console.log("Confirmed"),
    },
};

export const SuccessAlert: AlertFloatingStory = {
    args: {
        title: "Successfully saved",
        description: "Your changes have been saved to the cloud.",
        confirmLabel: "View changes",
        color: "success",
        onClose: () => console.log("Dismissed"),
        onConfirm: () => console.log("Confirmed"),
    },
};

export const AllVariants: AlertFloatingStory = {
    render: () => (
        <div className="flex flex-col gap-4">
            <AlertFloating
                title="Default alert"
                description="This is a default alert message."
                confirmLabel="Action"
                color="default"
            />
            <AlertFloating
                title="Brand alert"
                description="This is a brand-colored alert message."
                confirmLabel="Action"
                color="brand"
            />
            <AlertFloating
                title="Gray alert"
                description="This is a gray alert message."
                confirmLabel="Action"
                color="gray"
            />
            <AlertFloating
                title="Error alert"
                description="This is an error alert message."
                confirmLabel="Action"
                color="error"
            />
            <AlertFloating
                title="Warning alert"
                description="This is a warning alert message."
                confirmLabel="Action"
                color="warning"
            />
            <AlertFloating
                title="Success alert"
                description="This is a success alert message."
                confirmLabel="Action"
                color="success"
            />
        </div>
    ),
};

// Full Width Alert Stories
export const FullWidthDefault: AlertFullWidthStory = {
    name: "Full Width - Default",
    render: () => (
        <AlertFullWidth
            title="We've just released a new feature"
            description="Check out the new dashboard view. Pages now load faster."
            confirmLabel="View changes"
            onClose={() => console.log("Dismissed")}
            onConfirm={() => console.log("Confirmed")}
        />
    ),
};

export const FullWidthLinks: AlertFullWidthStory = {
    name: "Full Width - Link Actions",
    render: () => (
        <AlertFullWidth
            title="We've just released a new feature"
            description="Check out the new dashboard view."
            confirmLabel="View changes"
            actionType="link"
            onClose={() => console.log("Dismissed")}
            onConfirm={() => console.log("Confirmed")}
        />
    ),
};

export const FullWidthError: AlertFullWidthStory = {
    name: "Full Width - Error",
    render: () => (
        <AlertFullWidth
            title="Action required"
            description="Please update your payment information to continue using the service."
            confirmLabel="Update payment"
            color="error"
            onClose={() => console.log("Dismissed")}
            onConfirm={() => console.log("Confirmed")}
        />
    ),
};

