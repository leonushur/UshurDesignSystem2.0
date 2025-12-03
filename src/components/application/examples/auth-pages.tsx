import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { VerificationCodeInput } from "@/components/base/verification-code-input/verification-code-input";
import { cx } from "@/utils/cx";

export interface LoginPageProps {
    /** Logo element */
    logo?: React.ReactNode;
    /** Page title */
    title?: string;
    /** Page subtitle */
    subtitle?: string;
    /** Show social login buttons */
    showSocialLogin?: boolean;
    /** Login callback */
    onLogin?: (email: string, password: string) => void;
    /** Forgot password callback */
    onForgotPassword?: () => void;
    /** Sign up callback */
    onSignUp?: () => void;
    /** Social login callback */
    onSocialLogin?: (provider: string) => void;
}

export const LoginPage = ({
    logo,
    title = "Log in to your account",
    subtitle = "Welcome back! Please enter your details.",
    showSocialLogin = true,
    onLogin,
    onForgotPassword,
    onSignUp,
    onSocialLogin,
}: LoginPageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
            <div className="w-full max-w-sm">
                {/* Logo */}
                {logo && <div className="mb-6 flex justify-center">{logo}</div>}

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-display-sm font-semibold text-fg-primary">{title}</h1>
                    <p className="mt-2 text-md text-fg-tertiary">{subtitle}</p>
                </div>

                {/* Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        onLogin?.(formData.get("email") as string, formData.get("password") as string);
                    }}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                            Email
                        </label>
                        <Input name="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                            Password
                        </label>
                        <Input name="password" type="password" placeholder="••••••••" />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="size-4 rounded border-border-primary text-brand-600"
                            />
                            <span className="text-sm text-fg-secondary">Remember for 30 days</span>
                        </label>
                        <button
                            type="button"
                            onClick={onForgotPassword}
                            className="text-sm font-semibold text-fg-brand-secondary hover:text-fg-brand-secondary_hover"
                        >
                            Forgot password
                        </button>
                    </div>

                    <Button type="submit" className="w-full">
                        Sign in
                    </Button>
                </form>

                {/* Social login */}
                {showSocialLogin && (
                    <>
                        <div className="my-6 flex items-center gap-3">
                            <div className="h-px flex-1 bg-border-secondary" />
                            <span className="text-sm text-fg-tertiary">OR</span>
                            <div className="h-px flex-1 bg-border-secondary" />
                        </div>

                        <Button
                            color="secondary"
                            className="w-full"
                            onPress={() => onSocialLogin?.("google")}
                        >
                            <svg className="mr-2 size-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Sign in with Google
                        </Button>
                    </>
                )}

                {/* Sign up link */}
                <p className="mt-8 text-center text-sm text-fg-tertiary">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        onClick={onSignUp}
                        className="font-semibold text-fg-brand-secondary hover:text-fg-brand-secondary_hover"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export interface SignUpPageProps {
    /** Logo element */
    logo?: React.ReactNode;
    /** Page title */
    title?: string;
    /** Page subtitle */
    subtitle?: string;
    /** Sign up callback */
    onSignUp?: (data: { name: string; email: string; password: string }) => void;
    /** Login callback */
    onLogin?: () => void;
}

export const SignUpPage = ({
    logo,
    title = "Create an account",
    subtitle = "Start your 30-day free trial.",
    onSignUp,
    onLogin,
}: SignUpPageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
            <div className="w-full max-w-sm">
                {logo && <div className="mb-6 flex justify-center">{logo}</div>}

                <div className="mb-8 text-center">
                    <h1 className="text-display-sm font-semibold text-fg-primary">{title}</h1>
                    <p className="mt-2 text-md text-fg-tertiary">{subtitle}</p>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        onSignUp?.({
                            name: formData.get("name") as string,
                            email: formData.get("email") as string,
                            password: formData.get("password") as string,
                        });
                    }}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                            Name
                        </label>
                        <Input name="name" placeholder="Enter your name" />
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                            Email
                        </label>
                        <Input name="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                            Password
                        </label>
                        <Input name="password" type="password" placeholder="Create a password" />
                        <p className="mt-1.5 text-sm text-fg-tertiary">
                            Must be at least 8 characters.
                        </p>
                    </div>

                    <Button type="submit" className="w-full">
                        Get started
                    </Button>
                </form>

                <p className="mt-8 text-center text-sm text-fg-tertiary">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={onLogin}
                        className="font-semibold text-fg-brand-secondary hover:text-fg-brand-secondary_hover"
                    >
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
};

export interface ForgotPasswordPageProps {
    /** Logo element */
    logo?: React.ReactNode;
    /** Submit callback */
    onSubmit?: (email: string) => void;
    /** Back to login callback */
    onBackToLogin?: () => void;
}

export const ForgotPasswordPage = ({
    logo,
    onSubmit,
    onBackToLogin,
}: ForgotPasswordPageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
            <div className="w-full max-w-sm">
                {logo && <div className="mb-6 flex justify-center">{logo}</div>}

                <div className="mb-8 text-center">
                    <h1 className="text-display-sm font-semibold text-fg-primary">
                        Forgot password?
                    </h1>
                    <p className="mt-2 text-md text-fg-tertiary">
                        No worries, we'll send you reset instructions.
                    </p>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        onSubmit?.(formData.get("email") as string);
                    }}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-fg-secondary">
                            Email
                        </label>
                        <Input name="email" type="email" placeholder="Enter your email" />
                    </div>

                    <Button type="submit" className="w-full">
                        Reset password
                    </Button>
                </form>

                <button
                    type="button"
                    onClick={onBackToLogin}
                    className="mt-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-fg-tertiary hover:text-fg-secondary"
                >
                    ← Back to log in
                </button>
            </div>
        </div>
    );
};

export interface VerificationPageProps {
    /** Logo element */
    logo?: React.ReactNode;
    /** Email address to show */
    email?: string;
    /** Verify callback */
    onVerify?: (code: string) => void;
    /** Resend callback */
    onResend?: () => void;
    /** Back to login callback */
    onBackToLogin?: () => void;
}

export const VerificationPage = ({
    logo,
    email = "olivia@untitledui.com",
    onVerify,
    onResend,
    onBackToLogin,
}: VerificationPageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-4 py-12">
            <div className="w-full max-w-sm">
                {logo && <div className="mb-6 flex justify-center">{logo}</div>}

                <div className="mb-8 text-center">
                    <h1 className="text-display-sm font-semibold text-fg-primary">
                        Check your email
                    </h1>
                    <p className="mt-2 text-md text-fg-tertiary">
                        We sent a verification code to
                        <br />
                        <span className="font-medium text-fg-primary">{email}</span>
                    </p>
                </div>

                <div className="flex justify-center">
                    <VerificationCodeInput length={6} type="number" onComplete={onVerify} />
                </div>

                <Button className="mt-6 w-full">Verify email</Button>

                <p className="mt-8 text-center text-sm text-fg-tertiary">
                    Didn't receive the email?{" "}
                    <button
                        type="button"
                        onClick={onResend}
                        className="font-semibold text-fg-brand-secondary hover:text-fg-brand-secondary_hover"
                    >
                        Click to resend
                    </button>
                </p>

                <button
                    type="button"
                    onClick={onBackToLogin}
                    className="mt-8 flex w-full items-center justify-center gap-2 text-sm font-semibold text-fg-tertiary hover:text-fg-secondary"
                >
                    ← Back to log in
                </button>
            </div>
        </div>
    );
};

