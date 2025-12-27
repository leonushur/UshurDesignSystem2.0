import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

// ============================================
// Email Template Base Container
// ============================================

interface EmailContainerProps {
    children: ReactNode;
    maxWidth?: number;
    backgroundColor?: string;
}

const EmailContainer = ({
    children,
    maxWidth = 600,
    backgroundColor = "#f5f5f5",
}: EmailContainerProps) => (
    <div
        style={{
            backgroundColor,
            padding: "40px 20px",
            fontFamily: "'Proxima Nova', -apple-system, 'Segoe UI', sans-serif",
        }}
    >
        <div
            style={{
                maxWidth,
                margin: "0 auto",
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
        >
            {children}
        </div>
    </div>
);

// ============================================
// Welcome Email Template
// ============================================

export interface WelcomeEmailProps {
    userName?: string;
    companyName?: string;
    logo?: ReactNode;
    primaryColor?: string;
    ctaText?: string;
    ctaUrl?: string;
}

export const WelcomeEmail = ({
    userName = "there",
    companyName = "Untitled UI",
    logo,
    primaryColor = "#7C3AED",
    ctaText = "Get Started",
    ctaUrl = "#",
}: WelcomeEmailProps) => (
    <EmailContainer>
        {/* Header */}
        <div
            style={{
                padding: "32px 40px",
                textAlign: "center" as const,
                borderBottom: "1px solid #e5e5e5",
            }}
        >
            {logo || (
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        backgroundColor: primaryColor,
                        borderRadius: "12px",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    U
                </div>
            )}
        </div>

        {/* Content */}
        <div style={{ padding: "48px 40px" }}>
            <h1
                style={{
                    margin: "0 0 16px",
                    fontSize: "28px",
                    fontWeight: "600",
                    color: "#111827",
                    textAlign: "center" as const,
                }}
            >
                Welcome to {companyName}! 🎉
            </h1>
            <p
                style={{
                    margin: "0 0 24px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#6b7280",
                    textAlign: "center" as const,
                }}
            >
                Hey {userName}, we're thrilled to have you on board. You're now part of a community of thousands who are
                building amazing things.
            </p>

            {/* CTA Button */}
            <div style={{ textAlign: "center" as const, margin: "32px 0" }}>
                <a
                    href={ctaUrl}
                    style={{
                        display: "inline-block",
                        padding: "14px 32px",
                        backgroundColor: primaryColor,
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "600",
                        textDecoration: "none",
                        borderRadius: "8px",
                    }}
                >
                    {ctaText}
                </a>
            </div>

            {/* Features */}
            <div style={{ marginTop: "40px" }}>
                <p
                    style={{
                        margin: "0 0 20px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.05em",
                    }}
                >
                    What you can do now
                </p>
                {[
                    { title: "Complete your profile", desc: "Add a photo and bio to personalize your account" },
                    { title: "Explore features", desc: "Discover all the tools available to you" },
                    { title: "Connect with others", desc: "Join the community and start collaborating" },
                ].map((item, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "16px",
                            padding: "16px 0",
                            borderTop: i > 0 ? "1px solid #f3f4f6" : "none",
                        }}
                    >
                        <div
                            style={{
                                width: "24px",
                                height: "24px",
                                backgroundColor: "#f3f4f6",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "#6b7280",
                                flexShrink: 0,
                            }}
                        >
                            {i + 1}
                        </div>
                        <div>
                            <p style={{ margin: "0", fontSize: "14px", fontWeight: "600", color: "#111827" }}>
                                {item.title}
                            </p>
                            <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#6b7280" }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer */}
        <div
            style={{
                padding: "24px 40px",
                backgroundColor: "#f9fafb",
                textAlign: "center" as const,
            }}
        >
            <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#6b7280" }}>
                Need help? Contact us at{" "}
                <a href="mailto:support@example.com" style={{ color: primaryColor, textDecoration: "none" }}>
                    support@example.com
                </a>
            </p>
            <p style={{ margin: "0", fontSize: "12px", color: "#9ca3af" }}>
                © 2024 {companyName}. All rights reserved.
            </p>
        </div>
    </EmailContainer>
);
WelcomeEmail.displayName = "WelcomeEmail";

// ============================================
// Password Reset Email Template
// ============================================

export interface PasswordResetEmailProps {
    userName?: string;
    companyName?: string;
    logo?: ReactNode;
    primaryColor?: string;
    resetUrl?: string;
    expiryTime?: string;
}

export const PasswordResetEmail = ({
    userName = "there",
    companyName = "Untitled UI",
    logo,
    primaryColor = "#7C3AED",
    resetUrl = "#",
    expiryTime = "24 hours",
}: PasswordResetEmailProps) => (
    <EmailContainer>
        {/* Header */}
        <div
            style={{
                padding: "32px 40px",
                textAlign: "center" as const,
                borderBottom: "1px solid #e5e5e5",
            }}
        >
            {logo || (
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        backgroundColor: primaryColor,
                        borderRadius: "12px",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    U
                </div>
            )}
        </div>

        {/* Content */}
        <div style={{ padding: "48px 40px" }}>
            {/* Icon */}
            <div style={{ textAlign: "center" as const, marginBottom: "24px" }}>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "64px",
                        height: "64px",
                        backgroundColor: "#fef3c7",
                        borderRadius: "50%",
                        fontSize: "32px",
                    }}
                >
                    🔑
                </div>
            </div>

            <h1
                style={{
                    margin: "0 0 16px",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#111827",
                    textAlign: "center" as const,
                }}
            >
                Reset Your Password
            </h1>
            <p
                style={{
                    margin: "0 0 24px",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#6b7280",
                    textAlign: "center" as const,
                }}
            >
                Hey {userName}, we received a request to reset your password. Click the button below to create a new
                password. This link will expire in {expiryTime}.
            </p>

            {/* CTA Button */}
            <div style={{ textAlign: "center" as const, margin: "32px 0" }}>
                <a
                    href={resetUrl}
                    style={{
                        display: "inline-block",
                        padding: "14px 32px",
                        backgroundColor: primaryColor,
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "600",
                        textDecoration: "none",
                        borderRadius: "8px",
                    }}
                >
                    Reset Password
                </a>
            </div>

            {/* Security Notice */}
            <div
                style={{
                    marginTop: "32px",
                    padding: "16px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "8px",
                }}
            >
                <p style={{ margin: "0", fontSize: "14px", color: "#6b7280", lineHeight: "1.5" }}>
                    <strong>Didn't request this?</strong> If you didn't request a password reset, you can safely ignore
                    this email. Your password will remain unchanged.
                </p>
            </div>
        </div>

        {/* Footer */}
        <div
            style={{
                padding: "24px 40px",
                backgroundColor: "#f9fafb",
                textAlign: "center" as const,
            }}
        >
            <p style={{ margin: "0", fontSize: "12px", color: "#9ca3af" }}>
                © 2024 {companyName}. All rights reserved.
            </p>
        </div>
    </EmailContainer>
);
PasswordResetEmail.displayName = "PasswordResetEmail";

// ============================================
// Invoice Email Template
// ============================================

export interface InvoiceItem {
    description: string;
    quantity: number;
    price: number;
}

export interface InvoiceEmailProps {
    companyName?: string;
    logo?: ReactNode;
    primaryColor?: string;
    invoiceNumber?: string;
    invoiceDate?: string;
    dueDate?: string;
    customerName?: string;
    items?: InvoiceItem[];
    subtotal?: number;
    tax?: number;
    total?: number;
    paymentUrl?: string;
}

export const InvoiceEmail = ({
    companyName = "Untitled UI",
    logo,
    primaryColor = "#7C3AED",
    invoiceNumber = "INV-2024-001",
    invoiceDate = "December 1, 2024",
    dueDate = "December 15, 2024",
    customerName = "Olivia Rhye",
    items = [
        { description: "Pro Plan - Monthly", quantity: 1, price: 29.0 },
        { description: "Additional storage - 50GB", quantity: 1, price: 10.0 },
    ],
    subtotal = 39.0,
    tax = 3.12,
    total = 42.12,
    paymentUrl = "#",
}: InvoiceEmailProps) => (
    <EmailContainer>
        {/* Header */}
        <div
            style={{
                padding: "32px 40px",
                backgroundColor: primaryColor,
                color: "#ffffff",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    {logo || (
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "40px",
                                height: "40px",
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                borderRadius: "8px",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "bold",
                            }}
                        >
                            U
                        </div>
                    )}
                </div>
                <div style={{ textAlign: "right" as const }}>
                    <p style={{ margin: "0", fontSize: "14px", opacity: 0.8 }}>Invoice</p>
                    <p style={{ margin: "4px 0 0", fontSize: "18px", fontWeight: "600" }}>{invoiceNumber}</p>
                </div>
            </div>
        </div>

        {/* Content */}
        <div style={{ padding: "40px" }}>
            {/* Invoice Details */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
                <div>
                    <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#9ca3af", textTransform: "uppercase" as const }}>
                        Bill To
                    </p>
                    <p style={{ margin: "0", fontSize: "16px", fontWeight: "600", color: "#111827" }}>{customerName}</p>
                </div>
                <div style={{ textAlign: "right" as const }}>
                    <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#9ca3af" }}>
                        Date: <span style={{ color: "#111827" }}>{invoiceDate}</span>
                    </p>
                    <p style={{ margin: "0", fontSize: "12px", color: "#9ca3af" }}>
                        Due: <span style={{ color: "#111827" }}>{dueDate}</span>
                    </p>
                </div>
            </div>

            {/* Items Table */}
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th
                            style={{
                                padding: "12px 0",
                                textAlign: "left" as const,
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "#6b7280",
                                borderBottom: "2px solid #e5e7eb",
                                textTransform: "uppercase" as const,
                            }}
                        >
                            Description
                        </th>
                        <th
                            style={{
                                padding: "12px 0",
                                textAlign: "center" as const,
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "#6b7280",
                                borderBottom: "2px solid #e5e7eb",
                                textTransform: "uppercase" as const,
                            }}
                        >
                            Qty
                        </th>
                        <th
                            style={{
                                padding: "12px 0",
                                textAlign: "right" as const,
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "#6b7280",
                                borderBottom: "2px solid #e5e7eb",
                                textTransform: "uppercase" as const,
                            }}
                        >
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => (
                        <tr key={i}>
                            <td
                                style={{
                                    padding: "16px 0",
                                    fontSize: "14px",
                                    color: "#111827",
                                    borderBottom: "1px solid #f3f4f6",
                                }}
                            >
                                {item.description}
                            </td>
                            <td
                                style={{
                                    padding: "16px 0",
                                    textAlign: "center" as const,
                                    fontSize: "14px",
                                    color: "#6b7280",
                                    borderBottom: "1px solid #f3f4f6",
                                }}
                            >
                                {item.quantity}
                            </td>
                            <td
                                style={{
                                    padding: "16px 0",
                                    textAlign: "right" as const,
                                    fontSize: "14px",
                                    color: "#111827",
                                    borderBottom: "1px solid #f3f4f6",
                                }}
                            >
                                ${item.price.toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Totals */}
            <div style={{ marginTop: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Subtotal</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Tax (8%)</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>${tax.toFixed(2)}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "16px 0",
                        borderTop: "2px solid #e5e7eb",
                        marginTop: "8px",
                    }}
                >
                    <span style={{ fontSize: "16px", fontWeight: "600", color: "#111827" }}>Total</span>
                    <span style={{ fontSize: "20px", fontWeight: "600", color: primaryColor }}>${total.toFixed(2)}</span>
                </div>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: "center" as const, marginTop: "32px" }}>
                <a
                    href={paymentUrl}
                    style={{
                        display: "inline-block",
                        padding: "14px 32px",
                        backgroundColor: primaryColor,
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "600",
                        textDecoration: "none",
                        borderRadius: "8px",
                    }}
                >
                    Pay Now
                </a>
            </div>
        </div>

        {/* Footer */}
        <div
            style={{
                padding: "24px 40px",
                backgroundColor: "#f9fafb",
                textAlign: "center" as const,
            }}
        >
            <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#6b7280" }}>
                Questions? Contact us at{" "}
                <a href="mailto:billing@example.com" style={{ color: primaryColor, textDecoration: "none" }}>
                    billing@example.com
                </a>
            </p>
            <p style={{ margin: "0", fontSize: "12px", color: "#9ca3af" }}>
                © 2024 {companyName}. All rights reserved.
            </p>
        </div>
    </EmailContainer>
);
InvoiceEmail.displayName = "InvoiceEmail";

// ============================================
// Newsletter Email Template
// ============================================

export interface NewsletterArticle {
    title: string;
    excerpt: string;
    imageUrl?: string;
    url: string;
}

export interface NewsletterEmailProps {
    companyName?: string;
    logo?: ReactNode;
    primaryColor?: string;
    preheader?: string;
    headline?: string;
    articles?: NewsletterArticle[];
    unsubscribeUrl?: string;
}

export const NewsletterEmail = ({
    companyName = "Untitled UI",
    logo,
    primaryColor = "#7C3AED",
    preheader = "Your weekly dose of design inspiration",
    headline = "This Week in Design",
    articles = [
        {
            title: "The Future of Design Systems",
            excerpt: "How modern design systems are evolving to meet the needs of growing teams.",
            url: "#",
        },
        {
            title: "Color Theory Fundamentals",
            excerpt: "A deep dive into the psychology of color and how to apply it in your designs.",
            url: "#",
        },
        {
            title: "Typography Best Practices",
            excerpt: "Essential tips for creating readable, accessible, and beautiful type.",
            url: "#",
        },
    ],
    unsubscribeUrl = "#",
}: NewsletterEmailProps) => (
    <EmailContainer>
        {/* Header */}
        <div
            style={{
                padding: "32px 40px",
                textAlign: "center" as const,
                backgroundColor: primaryColor,
            }}
        >
            {logo || (
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "12px",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    U
                </div>
            )}
            <h1
                style={{
                    margin: "16px 0 0",
                    fontSize: "28px",
                    fontWeight: "600",
                    color: "#ffffff",
                }}
            >
                {headline}
            </h1>
            <p
                style={{
                    margin: "8px 0 0",
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                }}
            >
                {preheader}
            </p>
        </div>

        {/* Content */}
        <div style={{ padding: "40px" }}>
            {articles.map((article, i) => (
                <div
                    key={i}
                    style={{
                        padding: "24px 0",
                        borderBottom: i < articles.length - 1 ? "1px solid #f3f4f6" : "none",
                    }}
                >
                    <a
                        href={article.url}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <h2
                            style={{
                                margin: "0 0 8px",
                                fontSize: "18px",
                                fontWeight: "600",
                                color: "#111827",
                            }}
                        >
                            {article.title}
                        </h2>
                        <p
                            style={{
                                margin: "0 0 12px",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                color: "#6b7280",
                            }}
                        >
                            {article.excerpt}
                        </p>
                        <span
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: primaryColor,
                            }}
                        >
                            Read more →
                        </span>
                    </a>
                </div>
            ))}
        </div>

        {/* Footer */}
        <div
            style={{
                padding: "24px 40px",
                backgroundColor: "#f9fafb",
                textAlign: "center" as const,
            }}
        >
            <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#6b7280" }}>
                You're receiving this email because you subscribed to our newsletter.
            </p>
            <p style={{ margin: "0 0 16px", fontSize: "12px", color: "#9ca3af" }}>
                © 2024 {companyName}. All rights reserved.
            </p>
            <a
                href={unsubscribeUrl}
                style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                    textDecoration: "underline",
                }}
            >
                Unsubscribe
            </a>
        </div>
    </EmailContainer>
);
NewsletterEmail.displayName = "NewsletterEmail";

// ============================================
// Order Confirmation Email Template
// ============================================

export interface OrderItem {
    name: string;
    quantity: number;
    price: number;
    image?: string;
}

export interface OrderConfirmationEmailProps {
    companyName?: string;
    logo?: ReactNode;
    primaryColor?: string;
    orderNumber?: string;
    orderDate?: string;
    customerName?: string;
    shippingAddress?: string;
    items?: OrderItem[];
    subtotal?: number;
    shipping?: number;
    total?: number;
    trackingUrl?: string;
}

export const OrderConfirmationEmail = ({
    companyName = "Untitled Store",
    logo,
    primaryColor = "#7C3AED",
    orderNumber = "ORD-2024-1234",
    orderDate = "December 1, 2024",
    customerName = "Olivia Rhye",
    shippingAddress = "123 Main Street, San Francisco, CA 94102",
    items = [
        { name: "Classic T-Shirt (Black, M)", quantity: 2, price: 29.0 },
        { name: "Denim Jacket (Blue, L)", quantity: 1, price: 89.0 },
    ],
    subtotal = 147.0,
    shipping = 9.99,
    total = 156.99,
    trackingUrl = "#",
}: OrderConfirmationEmailProps) => (
    <EmailContainer>
        {/* Header */}
        <div
            style={{
                padding: "32px 40px",
                textAlign: "center" as const,
                borderBottom: "1px solid #e5e5e5",
            }}
        >
            {logo || (
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        backgroundColor: primaryColor,
                        borderRadius: "12px",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    U
                </div>
            )}
        </div>

        {/* Content */}
        <div style={{ padding: "40px" }}>
            {/* Success Icon */}
            <div style={{ textAlign: "center" as const, marginBottom: "24px" }}>
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "64px",
                        height: "64px",
                        backgroundColor: "#d1fae5",
                        borderRadius: "50%",
                        fontSize: "32px",
                    }}
                >
                    ✓
                </div>
            </div>

            <h1
                style={{
                    margin: "0 0 8px",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#111827",
                    textAlign: "center" as const,
                }}
            >
                Order Confirmed!
            </h1>
            <p
                style={{
                    margin: "0 0 32px",
                    fontSize: "16px",
                    color: "#6b7280",
                    textAlign: "center" as const,
                }}
            >
                Thanks for your order, {customerName.split(" ")[0]}! We'll send you shipping confirmation soon.
            </p>

            {/* Order Info */}
            <div
                style={{
                    backgroundColor: "#f9fafb",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "24px",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Order number</span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>{orderNumber}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Order date</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>{orderDate}</span>
                </div>
            </div>

            {/* Items */}
            <div style={{ marginBottom: "24px" }}>
                <p
                    style={{
                        margin: "0 0 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        textTransform: "uppercase" as const,
                    }}
                >
                    Order Items
                </p>
                {items.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "12px 0",
                            borderTop: i > 0 ? "1px solid #f3f4f6" : "none",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    backgroundColor: "#f3f4f6",
                                    borderRadius: "8px",
                                }}
                            />
                            <div>
                                <p style={{ margin: "0", fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                                    {item.name}
                                </p>
                                <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#6b7280" }}>
                                    Qty: {item.quantity}
                                </p>
                            </div>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                            ${item.price.toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>

            {/* Totals */}
            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Subtotal</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Shipping</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>${shipping.toFixed(2)}</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "12px 0",
                        borderTop: "1px solid #e5e7eb",
                        marginTop: "8px",
                    }}
                >
                    <span style={{ fontSize: "16px", fontWeight: "600", color: "#111827" }}>Total</span>
                    <span style={{ fontSize: "16px", fontWeight: "600", color: primaryColor }}>${total.toFixed(2)}</span>
                </div>
            </div>

            {/* Shipping Address */}
            <div
                style={{
                    marginTop: "24px",
                    padding: "16px",
                    backgroundColor: "#f9fafb",
                    borderRadius: "8px",
                }}
            >
                <p
                    style={{
                        margin: "0 0 8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#6b7280",
                        textTransform: "uppercase" as const,
                    }}
                >
                    Shipping to
                </p>
                <p style={{ margin: "0", fontSize: "14px", color: "#111827" }}>{customerName}</p>
                <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#6b7280" }}>{shippingAddress}</p>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center" as const, marginTop: "32px" }}>
                <a
                    href={trackingUrl}
                    style={{
                        display: "inline-block",
                        padding: "14px 32px",
                        backgroundColor: primaryColor,
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "600",
                        textDecoration: "none",
                        borderRadius: "8px",
                    }}
                >
                    Track Order
                </a>
            </div>
        </div>

        {/* Footer */}
        <div
            style={{
                padding: "24px 40px",
                backgroundColor: "#f9fafb",
                textAlign: "center" as const,
            }}
        >
            <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#6b7280" }}>
                Questions about your order? Contact{" "}
                <a href="mailto:support@example.com" style={{ color: primaryColor, textDecoration: "none" }}>
                    support@example.com
                </a>
            </p>
            <p style={{ margin: "0", fontSize: "12px", color: "#9ca3af" }}>
                © 2024 {companyName}. All rights reserved.
            </p>
        </div>
    </EmailContainer>
);
OrderConfirmationEmail.displayName = "OrderConfirmationEmail";


