import type { Meta, StoryObj } from "@storybook/react";
import { QRCode } from "./qr-code";

const meta: Meta<typeof QRCode> = {
    title: "Application/QR Code",
    component: QRCode,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
    args: {
        value: "https://example.com",
        size: 200,
    },
};

export const SmallSize: Story = {
    args: {
        value: "https://example.com",
        size: 150,
    },
};

export const LargeSize: Story = {
    args: {
        value: "https://example.com",
        size: 300,
    },
};

export const CustomColors: Story = {
    args: {
        value: "https://example.com",
        size: 200,
        bgColor: "f0f0f0",
        fgColor: "0066cc",
    },
};

export const URL: Story = {
    args: {
        value: "https://www.ushur.com",
        size: 200,
    },
};

export const Email: Story = {
    args: {
        value: "mailto:hello@example.com",
        size: 200,
    },
};

export const PhoneNumber: Story = {
    args: {
        value: "tel:+1234567890",
        size: 200,
    },
};

export const WiFi: Story = {
    args: {
        value: "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;",
        size: 200,
    },
};

export const VCard: Story = {
    args: {
        value: `BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:Example Inc.
TEL:+1234567890
EMAIL:john@example.com
END:VCARD`,
        size: 250,
    },
};

export const LongText: Story = {
    args: {
        value: "This is a much longer text that will be encoded in the QR code. It demonstrates how the QR code handles more complex data.",
        size: 250,
    },
};

export const NoMargin: Story = {
    args: {
        value: "https://example.com",
        size: 200,
        includeMargin: false,
    },
};

export const HighErrorCorrection: Story = {
    args: {
        value: "https://example.com",
        size: 200,
        level: "H",
    },
};

export const MultipleQRCodes: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-6">
            <QRCode value="https://example.com" size={150} />
            <QRCode value="mailto:contact@example.com" size={150} bgColor="f8f9fa" fgColor="1a73e8" />
            <QRCode value="tel:+1234567890" size={150} bgColor="fff3cd" fgColor="856404" />
            <QRCode value="https://www.ushur.com" size={150} bgColor="d1ecf1" fgColor="0c5460" />
        </div>
    ),
};
