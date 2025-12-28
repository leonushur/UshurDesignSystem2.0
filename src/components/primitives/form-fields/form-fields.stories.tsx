import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InfoCircle, AlertTriangle, Check, HelpCircle } from "@untitledui-pro/icons/line";
import { FieldLabel } from "./field-label";
import { FieldHint } from "./field-hint";
import { FieldError } from "./field-error";
import { FieldWrapper } from "./field-wrapper";

const meta: Meta = {
    title: "Components/Primitives/Form Fields",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

// ============================================================================
// FieldLabel Stories
// ============================================================================

export const LabelBasic: Story = {
    name: "Label - Basic",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Default</h3>
                <FieldLabel label="Email address" htmlFor="email" />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Required</h3>
                <FieldLabel label="Password" htmlFor="password" required />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Optional</h3>
                <FieldLabel label="Bio" htmlFor="bio" optional />
            </div>
        </div>
    ),
};

export const LabelWithTooltip: Story = {
    name: "Label - With Tooltip",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">With Tooltip</h3>
                <FieldLabel
                    label="API Key"
                    htmlFor="api-key"
                    tooltip="Your API key is used to authenticate requests"
                />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Required + Tooltip</h3>
                <FieldLabel
                    label="Username"
                    htmlFor="username"
                    required
                    tooltip="Must be 3-20 characters, alphanumeric only"
                />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Optional + Tooltip</h3>
                <FieldLabel
                    label="Display Name"
                    htmlFor="display-name"
                    optional
                    tooltip="This is how your name will appear to other users"
                />
            </div>
        </div>
    ),
};

export const LabelSizes: Story = {
    name: "Label - Sizes",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Small (sm)</h3>
                <FieldLabel label="Compact label" size="sm" />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Medium (md) - Default</h3>
                <FieldLabel label="Standard label" size="md" />
            </div>
        </div>
    ),
};

// ============================================================================
// FieldHint Stories
// ============================================================================

export const HintBasic: Story = {
    name: "Hint - Basic",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Simple Hint</h3>
                <FieldHint>We'll never share your email with anyone else.</FieldHint>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Multi-line Hint</h3>
                <FieldHint>
                    Your password must be at least 8 characters long and include a mix of uppercase,
                    lowercase, numbers, and symbols.
                </FieldHint>
            </div>
        </div>
    ),
};

export const HintWithIcon: Story = {
    name: "Hint - With Icon",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Info Icon</h3>
                <FieldHint icon={InfoCircle}>
                    Markdown formatting is supported in this field.
                </FieldHint>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Help Icon</h3>
                <FieldHint icon={HelpCircle}>
                    Need help? Check out our documentation for examples.
                </FieldHint>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Success Icon</h3>
                <FieldHint icon={Check}>
                    This username is available!
                </FieldHint>
            </div>
        </div>
    ),
};

export const HintCharacterCount: Story = {
    name: "Hint - Character Count",
    render: function CharacterCountExample() {
        const [text, setText] = useState("");
        const maxLength = 280;

        return (
            <div className="max-w-md space-y-1.5">
                <FieldLabel label="Bio" htmlFor="bio" />
                <textarea
                    id="bio"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    maxLength={maxLength}
                    placeholder="Tell us about yourself..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring resize-none"
                    rows={4}
                />
                <FieldHint>
                    {text.length}/{maxLength} characters
                </FieldHint>
            </div>
        );
    },
};

export const HintSizes: Story = {
    name: "Hint - Sizes",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Small (sm)</h3>
                <FieldHint size="sm">Compact hint text for space-constrained layouts.</FieldHint>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Medium (md) - Default</h3>
                <FieldHint size="md">Standard hint text for most form fields.</FieldHint>
            </div>
        </div>
    ),
};

// ============================================================================
// FieldError Stories
// ============================================================================

export const ErrorBasic: Story = {
    name: "Error - Basic",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Single Error</h3>
                <FieldError>This field is required.</FieldError>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Specific Error</h3>
                <FieldError>Please enter a valid email address.</FieldError>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Detailed Error</h3>
                <FieldError>
                    Password must be at least 8 characters and contain at least one uppercase letter,
                    one number, and one special character.
                </FieldError>
            </div>
        </div>
    ),
};

export const ErrorMultiple: Story = {
    name: "Error - Multiple Messages",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">List of Errors</h3>
                <FieldError>
                    <div className="space-y-0.5">
                        <div>Password requirements not met:</div>
                        <ul className="list-disc list-inside space-y-0.5 ml-1">
                            <li>Must contain uppercase letter</li>
                            <li>Must contain number</li>
                            <li>Must contain special character</li>
                        </ul>
                    </div>
                </FieldError>
            </div>
        </div>
    ),
};

export const ErrorCustomIcon: Story = {
    name: "Error - Custom Icon",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Default (AlertCircle)</h3>
                <FieldError>Please enter a valid email address.</FieldError>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Warning Icon</h3>
                <FieldError icon={AlertTriangle}>
                    This username is already taken. Please choose another.
                </FieldError>
            </div>
        </div>
    ),
};

export const ErrorSizes: Story = {
    name: "Error - Sizes",
    render: () => (
        <div className="space-y-4 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Small (sm)</h3>
                <FieldError size="sm">Compact error message for tight layouts.</FieldError>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-2">Medium (md) - Default</h3>
                <FieldError size="md">Standard error message for most form fields.</FieldError>
            </div>
        </div>
    ),
};

// ============================================================================
// FieldWrapper Stories
// ============================================================================

export const WrapperBasic: Story = {
    name: "Wrapper - Basic Usage",
    render: () => (
        <div className="space-y-6 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-3">Complete Field (No Error)</h3>
                <FieldWrapper
                    label="Email address"
                    hint="We'll never share your email."
                    htmlFor="email-basic"
                >
                    <input
                        id="email-basic"
                        type="email"
                        placeholder="name@company.com"
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-3">Complete Field (With Error)</h3>
                <FieldWrapper
                    label="Password"
                    error="Password must be at least 8 characters."
                    htmlFor="password-basic"
                >
                    <input
                        id="password-basic"
                        type="password"
                        placeholder="••••••••"
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-error bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-error focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>
            </div>
        </div>
    ),
};

export const WrapperAdvanced: Story = {
    name: "Wrapper - Advanced Configuration",
    render: () => (
        <div className="space-y-6 max-w-md">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-3">Required + Tooltip</h3>
                <FieldWrapper
                    label={{
                        label: "API Key",
                        required: true,
                        tooltip: "Your API key is used to authenticate all requests",
                    }}
                    hint={{
                        children: "Keep this key secure. Don't share it publicly.",
                        icon: InfoCircle,
                    }}
                    htmlFor="api-key"
                >
                    <input
                        id="api-key"
                        type="text"
                        placeholder="sk_live_..."
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder font-mono text-sm focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-3">Optional + Custom Error Icon</h3>
                <FieldWrapper
                    label={{
                        label: "Username",
                        optional: true,
                    }}
                    error={{
                        children: "This username is already taken.",
                        icon: AlertTriangle,
                    }}
                    htmlFor="username"
                >
                    <input
                        id="username"
                        type="text"
                        placeholder="john_doe"
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-error bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-error focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>
            </div>
        </div>
    ),
};

export const WrapperLayouts: Story = {
    name: "Wrapper - Layouts",
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-3">Vertical Layout (Default)</h3>
                <div className="max-w-md">
                    <FieldWrapper
                        label="Full Name"
                        hint="Enter your full legal name"
                        layout="vertical"
                        htmlFor="name-vertical"
                    >
                        <input
                            id="name-vertical"
                            type="text"
                            placeholder="Jane Doe"
                            className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                        />
                    </FieldWrapper>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-fg-tertiary mb-3">Horizontal Layout</h3>
                <div className="max-w-2xl">
                    <FieldWrapper
                        label="Company Name"
                        hint="The official name of your organization"
                        layout="horizontal"
                        htmlFor="company-horizontal"
                    >
                        <input
                            id="company-horizontal"
                            type="text"
                            placeholder="Acme Corp"
                            className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                        />
                    </FieldWrapper>
                </div>
            </div>
        </div>
    ),
};

// ============================================================================
// Real-World Examples
// ============================================================================

export const ExampleLoginForm: Story = {
    name: "Example - Login Form",
    render: () => (
        <div className="max-w-md mx-auto p-6 bg-bg-secondary rounded-xl">
            <h2 className="text-display-xs font-semibold text-fg-primary mb-1">Welcome back</h2>
            <p className="text-sm text-fg-tertiary mb-6">Enter your credentials to sign in</p>

            <div className="space-y-4">
                <FieldWrapper
                    label="Email"
                    htmlFor="login-email"
                >
                    <input
                        id="login-email"
                        type="email"
                        placeholder="name@company.com"
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>

                <FieldWrapper
                    label="Password"
                    htmlFor="login-password"
                >
                    <input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>

                <button
                    type="submit"
                    className="w-full h-10 px-4 rounded-lg bg-bg-brand-solid text-text-primary_on-brand font-medium hover:bg-bg-brand-solid_hover focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                >
                    Sign in
                </button>
            </div>
        </div>
    ),
};

export const ExampleRegistrationForm: Story = {
    name: "Example - Registration with Validation",
    render: function RegistrationExample() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [showErrors, setShowErrors] = useState(false);

        const emailError = showErrors && !email.includes("@") ? "Please enter a valid email address" : undefined;
        const passwordError =
            showErrors && password.length < 8
                ? "Password must be at least 8 characters"
                : undefined;

        return (
            <div className="max-w-md mx-auto p-6 bg-bg-secondary rounded-xl">
                <h2 className="text-display-xs font-semibold text-fg-primary mb-1">Create account</h2>
                <p className="text-sm text-fg-tertiary mb-6">Get started with your free account</p>

                <div className="space-y-4">
                    <FieldWrapper
                        label={{ label: "Email address", required: true }}
                        hint="We'll send a verification email"
                        error={emailError}
                        htmlFor="reg-email"
                    >
                        <input
                            id="reg-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className={`w-full h-10 px-3.5 py-2.5 rounded-lg border ${
                                emailError ? "border-border-error" : "border-border-primary"
                            } bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring`}
                        />
                    </FieldWrapper>

                    <FieldWrapper
                        label={{
                            label: "Password",
                            required: true,
                            tooltip: "Use a strong password with letters, numbers, and symbols",
                        }}
                        hint="Must be at least 8 characters"
                        error={passwordError}
                        htmlFor="reg-password"
                    >
                        <input
                            id="reg-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className={`w-full h-10 px-3.5 py-2.5 rounded-lg border ${
                                passwordError ? "border-border-error" : "border-border-primary"
                            } bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring`}
                        />
                    </FieldWrapper>

                    <button
                        type="submit"
                        onClick={() => setShowErrors(true)}
                        className="w-full h-10 px-4 rounded-lg bg-bg-brand-solid text-text-primary_on-brand font-medium hover:bg-bg-brand-solid_hover focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                    >
                        Create account
                    </button>
                </div>
            </div>
        );
    },
};

export const ExampleSettingsForm: Story = {
    name: "Example - Settings Form (Horizontal)",
    render: () => (
        <div className="max-w-3xl mx-auto p-6 bg-bg-secondary rounded-xl">
            <h2 className="text-display-xs font-semibold text-fg-primary mb-1">Profile settings</h2>
            <p className="text-sm text-fg-tertiary mb-6">Update your profile information</p>

            <div className="space-y-6">
                <FieldWrapper
                    label="Display name"
                    hint="This is how your name will appear to other users"
                    layout="horizontal"
                    htmlFor="settings-name"
                >
                    <input
                        id="settings-name"
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>

                <FieldWrapper
                    label="Email"
                    hint="Your email is used for notifications and account recovery"
                    layout="horizontal"
                    htmlFor="settings-email"
                >
                    <input
                        id="settings-email"
                        type="email"
                        placeholder="name@company.com"
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>

                <FieldWrapper
                    label={{ label: "Bio", optional: true }}
                    hint="140 characters max"
                    layout="horizontal"
                    htmlFor="settings-bio"
                >
                    <textarea
                        id="settings-bio"
                        placeholder="Tell us about yourself..."
                        maxLength={140}
                        rows={3}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring resize-none"
                    />
                </FieldWrapper>

                <div className="flex justify-end gap-3 pt-4 border-t border-border-secondary">
                    <button
                        type="button"
                        className="h-10 px-4 rounded-lg border border-border-primary bg-bg-primary text-fg-secondary font-medium hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="h-10 px-4 rounded-lg bg-bg-brand-solid text-text-primary_on-brand font-medium hover:bg-bg-brand-solid_hover focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                    >
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    ),
};

export const ExampleSearchWithHint: Story = {
    name: "Example - Search with Character Count",
    render: function SearchExample() {
        const [query, setQuery] = useState("");
        const maxLength = 100;

        return (
            <div className="max-w-md mx-auto">
                <FieldWrapper
                    label="Search query"
                    hint={`${query.length}/${maxLength} characters`}
                    htmlFor="search-query"
                >
                    <input
                        id="search-query"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        maxLength={maxLength}
                        placeholder="Enter your search terms..."
                        className="w-full h-10 px-3.5 py-2.5 rounded-lg border border-border-primary bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring"
                    />
                </FieldWrapper>
            </div>
        );
    },
};

export const ExampleTextareaWithValidation: Story = {
    name: "Example - Character-Limited Textarea",
    render: function TextareaExample() {
        const [text, setText] = useState("");
        const maxLength = 500;
        const minLength = 50;
        const [showError, setShowError] = useState(false);

        const error =
            showError && text.length < minLength
                ? `Please write at least ${minLength} characters (${minLength - text.length} more needed)`
                : undefined;

        return (
            <div className="max-w-md mx-auto">
                <FieldWrapper
                    label={{
                        label: "Description",
                        required: true,
                        tooltip: "Provide a detailed description of your project",
                    }}
                    hint={{
                        children: `${text.length}/${maxLength} characters (minimum ${minLength})`,
                        icon: InfoCircle,
                    }}
                    error={error}
                    htmlFor="description"
                >
                    <textarea
                        id="description"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={() => setShowError(true)}
                        maxLength={maxLength}
                        placeholder="Describe your project in detail..."
                        rows={6}
                        className={`w-full px-3.5 py-2.5 rounded-lg border ${
                            error ? "border-border-error" : "border-border-primary"
                        } bg-bg-primary text-fg-primary placeholder:text-text-placeholder focus:border-border-brand focus:ring-2 focus:ring-focus-ring resize-none`}
                    />
                </FieldWrapper>
            </div>
        );
    },
};
