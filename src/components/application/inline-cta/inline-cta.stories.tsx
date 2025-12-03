import type { Meta, StoryObj } from "@storybook/react";
import { Zap, Star01, Upload01, CreditCard01 } from "@untitledui-pro/icons/line";
import { InlineCTA, InlineCTABanner } from "./inline-cta";

const meta: Meta<typeof InlineCTA> = {
    title: "Application/Inline CTAs",
    component: InlineCTA,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type InlineCTAStory = StoryObj<typeof InlineCTA>;

export const Default: InlineCTAStory = {
    args: {
        title: "Upgrade to Pro",
        description: "Get access to all features and priority support.",
        primaryAction: "Upgrade now",
        secondaryAction: "Learn more",
        icon: Zap,
    },
};

export const BrandVariant: InlineCTAStory = {
    args: {
        title: "Try our new feature",
        description: "Experience the power of AI-assisted design.",
        primaryAction: "Get started",
        icon: Star01,
        variant: "brand",
    },
};

export const GrayVariant: InlineCTAStory = {
    args: {
        title: "Complete your profile",
        description: "Add more details to help others find you.",
        primaryAction: "Add details",
        secondaryAction: "Skip",
        variant: "gray",
    },
};

export const WithoutIcon: InlineCTAStory = {
    args: {
        title: "Need help getting started?",
        description: "Check out our documentation and tutorials.",
        primaryAction: "View docs",
    },
};

export const SmallSize: InlineCTAStory = {
    args: {
        title: "Upload your files",
        primaryAction: "Upload",
        icon: Upload01,
        size: "sm",
    },
};

export const LargeSize: InlineCTAStory = {
    args: {
        title: "Update your payment method",
        description: "Your card ending in 4242 will expire soon. Update your payment details to avoid service interruption.",
        primaryAction: "Update payment",
        secondaryAction: "Remind me later",
        icon: CreditCard01,
        size: "lg",
    },
};

export const BannerBrand: StoryObj<typeof InlineCTABanner> = {
    render: () => (
        <InlineCTABanner
            actionLabel="Learn more"
            onAction={() => console.log("Action")}
            onDismiss={() => console.log("Dismiss")}
        >
            🎉 We've just released a new feature! Check it out.
        </InlineCTABanner>
    ),
};

export const BannerGray: StoryObj<typeof InlineCTABanner> = {
    render: () => (
        <InlineCTABanner
            variant="gray"
            actionLabel="Update now"
            onAction={() => console.log("Action")}
            onDismiss={() => console.log("Dismiss")}
        >
            A new version is available. Update to get the latest features.
        </InlineCTABanner>
    ),
};

export const BannerSuccess: StoryObj<typeof InlineCTABanner> = {
    render: () => (
        <InlineCTABanner
            variant="success"
            onDismiss={() => console.log("Dismiss")}
        >
            Your changes have been saved successfully!
        </InlineCTABanner>
    ),
};

export const BannerWarning: StoryObj<typeof InlineCTABanner> = {
    render: () => (
        <InlineCTABanner
            variant="warning"
            actionLabel="Verify email"
            onAction={() => console.log("Action")}
        >
            Please verify your email address to access all features.
        </InlineCTABanner>
    ),
};

export const BannerError: StoryObj<typeof InlineCTABanner> = {
    render: () => (
        <InlineCTABanner
            variant="error"
            actionLabel="Retry"
            onAction={() => console.log("Retry")}
            onDismiss={() => console.log("Dismiss")}
        >
            Failed to save changes. Please try again.
        </InlineCTABanner>
    ),
};

export const AllVariants: InlineCTAStory = {
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <p className="mb-3 text-sm font-medium text-fg-tertiary">Card CTAs</p>
                <div className="flex flex-col gap-4">
                    <InlineCTA
                        title="Default CTA"
                        description="This is the default variant with an icon."
                        primaryAction="Action"
                        secondaryAction="Cancel"
                        icon={Zap}
                    />
                    <InlineCTA
                        title="Brand CTA"
                        description="This is the brand variant."
                        primaryAction="Get started"
                        icon={Star01}
                        variant="brand"
                    />
                    <InlineCTA
                        title="Gray CTA"
                        description="This is the gray variant."
                        primaryAction="Continue"
                        variant="gray"
                    />
                </div>
            </div>

            <div>
                <p className="mb-3 text-sm font-medium text-fg-tertiary">Banner CTAs</p>
                <div className="flex flex-col gap-2">
                    <InlineCTABanner actionLabel="Learn more" variant="brand">
                        Brand announcement banner
                    </InlineCTABanner>
                    <InlineCTABanner actionLabel="Update" variant="gray">
                        Gray informational banner
                    </InlineCTABanner>
                    <InlineCTABanner variant="success">
                        Success notification banner
                    </InlineCTABanner>
                    <InlineCTABanner actionLabel="Fix" variant="warning">
                        Warning notification banner
                    </InlineCTABanner>
                    <InlineCTABanner actionLabel="Retry" variant="error">
                        Error notification banner
                    </InlineCTABanner>
                </div>
            </div>
        </div>
    ),
};

