import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage, SignUpPage, ForgotPasswordPage, VerificationPage } from "./auth-pages";
import { NotFoundPage, ServerErrorPage, MaintenancePage } from "./error-pages";

const meta: Meta = {
    title: "Application/Page Examples",
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;

const SampleLogo = () => (
    <div className="flex size-12 items-center justify-center rounded-xl bg-bg-brand-solid">
        <span className="text-xl font-bold text-white">U</span>
    </div>
);

// Auth Pages
export const Login: StoryObj = {
    render: () => (
        <LoginPage
            logo={<SampleLogo />}
            onLogin={(email, password) => console.log("Login:", email, password)}
            onForgotPassword={() => console.log("Forgot password")}
            onSignUp={() => console.log("Sign up")}
            onSocialLogin={(provider) => console.log("Social login:", provider)}
        />
    ),
};

export const SignUp: StoryObj = {
    render: () => (
        <SignUpPage
            logo={<SampleLogo />}
            onSignUp={(data) => console.log("Sign up:", data)}
            onLogin={() => console.log("Login")}
        />
    ),
};

export const ForgotPassword: StoryObj = {
    render: () => (
        <ForgotPasswordPage
            logo={<SampleLogo />}
            onSubmit={(email) => console.log("Reset:", email)}
            onBackToLogin={() => console.log("Back to login")}
        />
    ),
};

export const Verification: StoryObj = {
    render: () => (
        <VerificationPage
            logo={<SampleLogo />}
            email="olivia@untitledui.com"
            onVerify={(code) => console.log("Verify:", code)}
            onResend={() => console.log("Resend")}
            onBackToLogin={() => console.log("Back to login")}
        />
    ),
};

// Error Pages
export const NotFound: StoryObj = {
    render: () => (
        <NotFoundPage
            onPrimaryAction={() => console.log("Go home")}
            onSecondaryAction={() => console.log("Contact support")}
        />
    ),
};

export const ServerError: StoryObj = {
    render: () => (
        <ServerErrorPage
            onRetry={() => console.log("Retry")}
            onGoHome={() => console.log("Go home")}
        />
    ),
};

export const Maintenance: StoryObj = {
    render: () => (
        <MaintenancePage
            returnTime="January 15, 2025 at 10:00 AM PST"
            onNotifyMe={() => console.log("Notify me")}
        />
    ),
};

// Custom error pages
export const Custom404: StoryObj = {
    render: () => (
        <NotFoundPage
            errorCode="404"
            title="We lost this page"
            description="The page you are looking for doesn't exist or has been moved."
            primaryAction="Take me home"
            secondaryAction="Go back"
        />
    ),
};

export const Custom403: StoryObj = {
    render: () => (
        <NotFoundPage
            errorCode="403"
            title="Access denied"
            description="You don't have permission to access this resource. Please contact your administrator."
            primaryAction="Request access"
            secondaryAction="Go back"
        />
    ),
};

