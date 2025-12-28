import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

export interface CreditCardDisplayProps {
    /** Card number (will be masked if needed) */
    cardNumber: string;
    /** Cardholder name */
    cardholderName: string;
    /** Expiry date in MM/YY format */
    expiryDate: string;
    /** Card brand (visa, mastercard, amex, discover) */
    brand?: "visa" | "mastercard" | "amex" | "discover" | "generic";
    /** CVV number (optional, usually not displayed) */
    cvv?: string;
    /** Card variant */
    variant?: "default" | "premium" | "dark";
    /** Whether to show the full card number or mask it */
    masked?: boolean;
    /** Custom className */
    className?: string;
    /** Optional custom brand logo */
    brandLogo?: ReactNode;
}

const brandLogos = {
    visa: (
        <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#1434CB" />
            <path
                d="M19.5 10.5h-3.2l-2 11h2.4l.4-2.3h1.6c1.8 0 3-.9 3.3-2.7.2-1.5-.9-2.7-2.5-2.7v-.1l1.2-3.2h-1.2zm-2 5.4l.6-3.5h1c.8 0 1.3.6 1.2 1.3-.1.8-.7 1.4-1.5 1.4h-1.3l-.0.8zm7.8-5.4l-2.7 11h2.4l2.7-11h-2.4zm6.5 0l-2.9 7.3-.9-6.1c-.1-.8-.7-1.2-1.3-1.2h-3.7l-.1.4c1.1.2 2.1.6 3 1.1l2 9.7h2.5l3.8-11h-2.4zm6.2 0h-2.1c-.7 0-1.2.4-1.5 1l-4.2 10h2.5l.5-1.3h3l.3 1.3h2.2l-1.9-11h.2zm-3 7.2l1.2-3.3.7 3.3h-1.9z"
                fill="white"
            />
        </svg>
    ),
    mastercard: (
        <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#EB001B" />
            <circle cx="18" cy="16" r="8" fill="#FF5F00" />
            <circle cx="30" cy="16" r="8" fill="#F79E1B" />
            <path
                d="M24 8.8a7.96 7.96 0 0 0 0 14.4 7.96 7.96 0 0 0 0-14.4z"
                fill="#FF5F00"
            />
        </svg>
    ),
    amex: (
        <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#006FCF" />
            <path
                d="M15.3 14.5l-1.5 3.4h3l-1.5-3.4zm17.9-.5h-3.4v1h3.3v1.2h-3.3v1.1h3.4v1.3h-5v-5.9h5v1.3zm-8.3-1.3l-2 5.9h-1.8l-1.2-4.5-1.2 4.5h-1.8l-2-5.9h1.7l1.2 4.6 1.2-4.6h1.6l1.2 4.6 1.2-4.6h1.7zm-10.5 0l-3.2 5.9h-1.9l-3.2-5.9h1.9l2.2 4.1 2.2-4.1h2z"
                fill="white"
            />
        </svg>
    ),
    discover: (
        <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="#FF6000" />
            <circle cx="38" cy="16" r="10" fill="#FFA500" />
            <text x="8" y="20" fill="white" fontSize="8" fontWeight="bold">
                DISCOVER
            </text>
        </svg>
    ),
    generic: (
        <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
            <rect width="48" height="32" rx="4" fill="currentColor" fillOpacity="0.1" />
            <rect x="4" y="12" width="40" height="8" rx="2" fill="currentColor" fillOpacity="0.2" />
        </svg>
    ),
};

const formatCardNumber = (number: string, masked: boolean = false): string => {
    const cleaned = number.replace(/\s/g, "");
    if (masked) {
        const lastFour = cleaned.slice(-4);
        return `•••• •••• •••• ${lastFour}`;
    }
    return cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
};

export const CreditCardDisplay = ({
    cardNumber,
    cardholderName,
    expiryDate,
    brand = "generic",
    variant = "default",
    masked = true,
    className,
    brandLogo,
}: CreditCardDisplayProps) => {
    const variantStyles = {
        default: "bg-gradient-to-br from-utility-gray-700 to-utility-gray-900 text-fg-white",
        premium: "bg-gradient-to-br from-utility-purple-600 to-utility-indigo-900 text-fg-white",
        dark: "bg-utility-gray-900 text-fg-white",
    };

    return (
        <div
            className={cx(
                "relative aspect-[1.586/1] w-full max-w-[400px] overflow-hidden rounded-2xl p-6 shadow-xl transition-transform hover:scale-[1.02]",
                variantStyles[variant],
                className,
            )}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white blur-2xl" />
            </div>

            {/* Card content */}
            <div className="relative flex h-full flex-col justify-between">
                {/* Top section - Brand logo */}
                <div className="flex items-start justify-between">
                    <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                        <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="24" rx="2" fill="currentColor" fillOpacity="0.3" />
                            <rect x="4" y="8" width="24" height="4" fill="currentColor" fillOpacity="0.5" />
                        </svg>
                    </div>
                    {brandLogo || brandLogos[brand]}
                </div>

                {/* Middle section - Card number */}
                <div className="text-2xl font-mono tracking-wider">
                    {formatCardNumber(cardNumber, masked)}
                </div>

                {/* Bottom section - Name and expiry */}
                <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="text-xs uppercase tracking-wider opacity-70">
                            Card Holder
                        </div>
                        <div className="font-medium uppercase tracking-wide">
                            {cardholderName}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-xs uppercase tracking-wider opacity-70">
                            Expires
                        </div>
                        <div className="font-mono font-medium">
                            {expiryDate}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
