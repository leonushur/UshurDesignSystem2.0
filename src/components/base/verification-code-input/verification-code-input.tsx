import { useRef, useState, type KeyboardEvent, type ClipboardEvent } from "react";
import { cx } from "@/utils/cx";

export interface VerificationCodeInputProps {
    /** Number of input fields */
    length?: number;
    /** Callback when code is complete */
    onComplete?: (code: string) => void;
    /** Callback on value change */
    onChange?: (value: string) => void;
    /** Input type */
    type?: "text" | "number";
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Error state */
    error?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Auto focus first input */
    autoFocus?: boolean;
    /** Placeholder character */
    placeholder?: string;
    /** Additional class name */
    className?: string;
}

const sizeStyles = {
    sm: "size-10 text-lg",
    md: "size-12 text-xl",
    lg: "size-14 text-2xl",
};

export const VerificationCodeInput = ({
    length = 6,
    onComplete,
    onChange,
    type = "text",
    size = "md",
    error = false,
    disabled = false,
    autoFocus = true,
    placeholder = "",
    className,
}: VerificationCodeInputProps) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const focusInput = (index: number) => {
        if (index >= 0 && index < length) {
            inputRefs.current[index]?.focus();
        }
    };

    const handleChange = (index: number, value: string) => {
        // Handle number type - only allow digits
        if (type === "number" && !/^\d*$/.test(value)) {
            return;
        }

        // Take only the last character if multiple are entered
        const char = value.slice(-1);

        const newValues = [...values];
        newValues[index] = char;
        setValues(newValues);

        const code = newValues.join("");
        onChange?.(code);

        // Move to next input
        if (char && index < length - 1) {
            focusInput(index + 1);
        }

        // Check if complete
        if (code.length === length && !newValues.includes("")) {
            onComplete?.(code);
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "Backspace":
                e.preventDefault();
                if (values[index]) {
                    handleChange(index, "");
                } else if (index > 0) {
                    focusInput(index - 1);
                    handleChange(index - 1, "");
                }
                break;
            case "ArrowLeft":
                e.preventDefault();
                focusInput(index - 1);
                break;
            case "ArrowRight":
                e.preventDefault();
                focusInput(index + 1);
                break;
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, length);

        // Validate pasted data for number type
        if (type === "number" && !/^\d*$/.test(pastedData)) {
            return;
        }

        const newValues = [...values];
        for (let i = 0; i < pastedData.length; i++) {
            newValues[i] = pastedData[i];
        }
        setValues(newValues);

        const code = newValues.join("");
        onChange?.(code);

        // Focus the next empty input or the last one
        const nextEmptyIndex = newValues.findIndex((v) => !v);
        focusInput(nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex);

        if (code.length === length && !newValues.includes("")) {
            onComplete?.(code);
        }
    };

    const handleFocus = (index: number) => {
        inputRefs.current[index]?.select();
    };

    return (
        <div className={cx("flex items-center gap-2", className)}>
            {Array.from({ length }, (_, index) => (
                <input
                    key={index}
                    ref={(el) => {
                        inputRefs.current[index] = el;
                    }}
                    type={type === "number" ? "tel" : "text"}
                    inputMode={type === "number" ? "numeric" : "text"}
                    maxLength={1}
                    value={values[index]}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoFocus={autoFocus && index === 0}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    onFocus={() => handleFocus(index)}
                    className={cx(
                        "rounded-lg border text-center font-semibold outline-none transition-all",
                        "focus:border-border-brand focus:ring-4 focus:ring-brand-500/20",
                        sizeStyles[size],
                        error
                            ? "border-border-error bg-bg-error-primary text-fg-error-primary"
                            : "border-border-primary bg-bg-primary text-fg-primary",
                        disabled && "cursor-not-allowed bg-bg-disabled text-fg-disabled"
                    )}
                    aria-label={`Digit ${index + 1} of ${length}`}
                />
            ))}
        </div>
    );
};

