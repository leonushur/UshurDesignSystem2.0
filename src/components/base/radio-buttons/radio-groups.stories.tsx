import type { Meta, StoryObj } from "@storybook/react";
import { RadioCardGroup, RadioCard, RadioTile, RadioListItem } from "./radio-groups";
import { RadioGroup } from "react-aria-components";
import {
    CreditCard01,
    Building01,
    Globe01,
    Phone01,
    Mail01,
    Zap,
    Rocket01,
    Star01,
    Heart,
    Shield01,
    Lock01,
    Key01,
} from "@untitledui-pro/icons/line";

type RadioCardGroupStory = StoryObj<typeof RadioCardGroup>;

const meta: Meta<typeof RadioCardGroup> = {
    title: "Base/Radio Groups",
    component: RadioCardGroup,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

// ============================================
// Radio Card Group Stories
// ============================================

export const CardGroupDefault: RadioCardGroupStory = {
    name: "Card Group - Default",
    render: () => (
        <RadioCardGroup defaultValue="monthly" className="max-w-md">
            <RadioCard
                value="monthly"
                title="Monthly billing"
                description="Pay month-to-month, cancel anytime"
                icon={<CreditCard01 className="size-5" />}
            />
            <RadioCard
                value="annually"
                title="Annual billing"
                description="Save 20% with annual billing"
                icon={<Building01 className="size-5" />}
            />
            <RadioCard
                value="lifetime"
                title="Lifetime access"
                description="One-time payment for lifetime access"
                icon={<Star01 className="size-5" />}
            />
        </RadioCardGroup>
    ),
};

export const CardGroupSizes: RadioCardGroupStory = {
    name: "Card Group - Sizes",
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Small</h3>
                <RadioCardGroup defaultValue="option1" size="sm" className="max-w-sm">
                    <RadioCard
                        value="option1"
                        title="Small option"
                        description="Compact card"
                        icon={<Zap className="size-4" />}
                    />
                    <RadioCard
                        value="option2"
                        title="Another small"
                        description="Also compact"
                        icon={<Rocket01 className="size-4" />}
                    />
                </RadioCardGroup>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Medium (Default)</h3>
                <RadioCardGroup defaultValue="option1" size="md" className="max-w-md">
                    <RadioCard
                        value="option1"
                        title="Medium option"
                        description="Standard size card"
                        icon={<Zap className="size-5" />}
                    />
                    <RadioCard
                        value="option2"
                        title="Another medium"
                        description="Also standard"
                        icon={<Rocket01 className="size-5" />}
                    />
                </RadioCardGroup>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Large</h3>
                <RadioCardGroup defaultValue="option1" size="lg" className="max-w-lg">
                    <RadioCard
                        value="option1"
                        title="Large option"
                        description="Spacious card layout"
                        icon={<Zap className="size-6" />}
                    />
                    <RadioCard
                        value="option2"
                        title="Another large"
                        description="Also spacious"
                        icon={<Rocket01 className="size-6" />}
                    />
                </RadioCardGroup>
            </div>
        </div>
    ),
};

export const CardGroupVariants: RadioCardGroupStory = {
    name: "Card Group - Variants",
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Outlined</h3>
                <RadioCardGroup defaultValue="option1" variant="outlined" className="max-w-md">
                    <RadioCard
                        value="option1"
                        title="Outlined card"
                        description="Has visible border"
                        icon={<Globe01 className="size-5" />}
                    />
                    <RadioCard
                        value="option2"
                        title="Another outlined"
                        description="Also has border"
                        icon={<Phone01 className="size-5" />}
                    />
                </RadioCardGroup>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">Filled</h3>
                <RadioCardGroup defaultValue="option1" variant="filled" className="max-w-md">
                    <RadioCard
                        value="option1"
                        title="Filled card"
                        description="Background filled style"
                        icon={<Globe01 className="size-5" />}
                    />
                    <RadioCard
                        value="option2"
                        title="Another filled"
                        description="Also filled"
                        icon={<Phone01 className="size-5" />}
                    />
                </RadioCardGroup>
            </div>
        </div>
    ),
};

export const CardGroupGrid: RadioCardGroupStory = {
    name: "Card Group - Grid Layout",
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">2 Columns</h3>
                <RadioCardGroup defaultValue="basic" columns={2} className="max-w-2xl">
                    <RadioCard
                        value="basic"
                        title="Basic Plan"
                        description="For individuals"
                        icon={<Heart className="size-5" />}
                    />
                    <RadioCard
                        value="pro"
                        title="Pro Plan"
                        description="For professionals"
                        icon={<Zap className="size-5" />}
                    />
                    <RadioCard
                        value="team"
                        title="Team Plan"
                        description="For small teams"
                        icon={<Building01 className="size-5" />}
                    />
                    <RadioCard
                        value="enterprise"
                        title="Enterprise"
                        description="For large organizations"
                        icon={<Shield01 className="size-5" />}
                    />
                </RadioCardGroup>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-medium text-fg-tertiary">3 Columns</h3>
                <RadioCardGroup defaultValue="email" columns={3} className="max-w-4xl">
                    <RadioCard
                        value="email"
                        title="Email"
                        description="Receive via email"
                        icon={<Mail01 className="size-5" />}
                    />
                    <RadioCard
                        value="phone"
                        title="Phone"
                        description="Receive via SMS"
                        icon={<Phone01 className="size-5" />}
                    />
                    <RadioCard
                        value="app"
                        title="App"
                        description="Push notification"
                        icon={<Globe01 className="size-5" />}
                    />
                </RadioCardGroup>
            </div>
        </div>
    ),
};

// ============================================
// Radio Tile Stories
// ============================================

export const TileGroup: RadioCardGroupStory = {
    name: "Tile Group",
    render: () => (
        <RadioGroup defaultValue="security" className="flex flex-wrap gap-4">
            <RadioTile value="security" label="Security" icon={<Shield01 className="size-6" />} />
            <RadioTile value="privacy" label="Privacy" icon={<Lock01 className="size-6" />} />
            <RadioTile value="access" label="Access" icon={<Key01 className="size-6" />} />
            <RadioTile value="rocket" label="Launch" icon={<Rocket01 className="size-6" />} />
        </RadioGroup>
    ),
};

// ============================================
// Radio List Item Stories
// ============================================

export const ListItemGroup: RadioCardGroupStory = {
    name: "List Item Group",
    render: () => (
        <RadioGroup defaultValue="basic" className="max-w-md divide-y divide-border-secondary rounded-xl border border-border-primary">
            <RadioListItem
                value="basic"
                label="Basic"
                description="Good for starters"
                trailing="$9/mo"
            />
            <RadioListItem
                value="pro"
                label="Professional"
                description="For growing teams"
                trailing="$29/mo"
            />
            <RadioListItem
                value="enterprise"
                label="Enterprise"
                description="For large organizations"
                trailing="Contact us"
            />
        </RadioGroup>
    ),
};

// ============================================
// Payment Method Example
// ============================================

export const PaymentMethodExample: RadioCardGroupStory = {
    name: "Example - Payment Methods",
    render: () => (
        <div className="max-w-md">
            <h2 className="mb-4 text-lg font-semibold text-fg-primary">Select payment method</h2>
            <RadioCardGroup defaultValue="card">
                <RadioCard
                    value="card"
                    title="Credit or debit card"
                    description="Visa, Mastercard, American Express"
                    icon={<CreditCard01 className="size-5" />}
                />
                <RadioCard
                    value="bank"
                    title="Bank transfer"
                    description="Direct bank account transfer"
                    icon={<Building01 className="size-5" />}
                />
                <RadioCard
                    value="paypal"
                    title="PayPal"
                    description="Pay with your PayPal account"
                    icon={<Globe01 className="size-5" />}
                />
            </RadioCardGroup>
        </div>
    ),
};

// ============================================
// Disabled State
// ============================================

export const DisabledStates: RadioCardGroupStory = {
    name: "Disabled States",
    render: () => (
        <RadioCardGroup defaultValue="option1" className="max-w-md">
            <RadioCard
                value="option1"
                title="Available option"
                description="This option is selectable"
                icon={<Zap className="size-5" />}
            />
            <RadioCard
                value="option2"
                title="Disabled option"
                description="This option is not available"
                icon={<Lock01 className="size-5" />}
                isDisabled
            />
            <RadioCard
                value="option3"
                title="Another available"
                description="This option is also selectable"
                icon={<Star01 className="size-5" />}
            />
        </RadioCardGroup>
    ),
};


