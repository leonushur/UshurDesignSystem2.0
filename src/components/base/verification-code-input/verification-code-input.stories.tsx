import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { VerificationCodeInput } from "./verification-code-input";

const meta: Meta<typeof VerificationCodeInput> = {
    title: "Base/Verification Code Input",
    component: VerificationCodeInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VerificationCodeInput>;

export const Default: Story = {
    args: {
        length: 6,
        onComplete: (code) => console.log("Complete:", code),
    },
};

export const FourDigits: Story = {
    args: {
        length: 4,
        type: "number",
        onComplete: (code) => console.log("Complete:", code),
    },
};

export const SmallSize: Story = {
    args: {
        length: 6,
        size: "sm",
    },
};

export const LargeSize: Story = {
    args: {
        length: 6,
        size: "lg",
    },
};

export const WithPlaceholder: Story = {
    args: {
        length: 6,
        placeholder: "○",
    },
};

export const ErrorState: Story = {
    args: {
        length: 6,
        error: true,
    },
};

export const Disabled: Story = {
    args: {
        length: 6,
        disabled: true,
    },
};

export const NumberOnly: Story = {
    args: {
        length: 6,
        type: "number",
        placeholder: "0",
    },
};

export const Interactive: Story = {
    render: function InteractiveStory() {
        const [code, setCode] = useState("");
        const [isVerifying, setIsVerifying] = useState(false);
        const [error, setError] = useState(false);
        const [success, setSuccess] = useState(false);

        const handleComplete = (value: string) => {
            setIsVerifying(true);
            setError(false);
            
            // Simulate verification
            setTimeout(() => {
                setIsVerifying(false);
                if (value === "123456") {
                    setSuccess(true);
                } else {
                    setError(true);
                }
            }, 1500);
        };

        return (
            <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-fg-primary">
                        Enter verification code
                    </h3>
                    <p className="mt-1 text-sm text-fg-tertiary">
                        We sent a code to your email. Try "123456"
                    </p>
                </div>

                <VerificationCodeInput
                    length={6}
                    type="number"
                    onChange={setCode}
                    onComplete={handleComplete}
                    error={error}
                    disabled={isVerifying || success}
                />

                <div className="h-6 text-sm">
                    {isVerifying && (
                        <span className="text-fg-tertiary">Verifying...</span>
                    )}
                    {error && (
                        <span className="text-fg-error-primary">
                            Invalid code. Please try again.
                        </span>
                    )}
                    {success && (
                        <span className="text-fg-success-primary">
                            ✓ Code verified successfully!
                        </span>
                    )}
                </div>

                <button
                    type="button"
                    className="text-sm font-medium text-fg-brand-secondary hover:underline"
                    onClick={() => console.log("Resend")}
                >
                    Didn't receive a code? Resend
                </button>
            </div>
        );
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-8">
            <div>
                <p className="mb-3 text-center text-sm font-medium text-fg-tertiary">
                    Sizes
                </p>
                <div className="flex flex-col items-center gap-4">
                    <VerificationCodeInput length={4} size="sm" />
                    <VerificationCodeInput length={4} size="md" />
                    <VerificationCodeInput length={4} size="lg" />
                </div>
            </div>

            <div>
                <p className="mb-3 text-center text-sm font-medium text-fg-tertiary">
                    States
                </p>
                <div className="flex flex-col items-center gap-4">
                    <VerificationCodeInput length={4} placeholder="○" />
                    <VerificationCodeInput length={4} error />
                    <VerificationCodeInput length={4} disabled />
                </div>
            </div>

            <div>
                <p className="mb-3 text-center text-sm font-medium text-fg-tertiary">
                    Lengths
                </p>
                <div className="flex flex-col items-center gap-4">
                    <VerificationCodeInput length={4} />
                    <VerificationCodeInput length={6} />
                    <VerificationCodeInput length={8} size="sm" />
                </div>
            </div>
        </div>
    ),
};

