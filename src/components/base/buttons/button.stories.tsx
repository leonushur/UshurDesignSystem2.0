import type { Meta, StoryObj } from "@storybook/react";
import { Flag06, Lightning01, LinkExternal01, Star01 } from "@untitledui-pro/icons/line";
import { Button } from "./button";

type ButtonStory = StoryObj<typeof Button>;
type ButtonMeta = Meta<typeof Button>;

const COLORS: ButtonStory["args"][] = [
    { color: "primary", children: "Primary" },
    { color: "secondary", children: "Secondary" },
    { color: "tertiary", children: "Tertiary" },
    { color: "primary-destructive", children: "Primary Destructive" },
    { color: "secondary-destructive", children: "Secondary Destructive" },
    { color: "tertiary-destructive", children: "Tertiary Destructive" },
];

const LINK_VARIANTS: ButtonStory["args"][] = [
    { color: "link-color", children: "Link Color" },
    { color: "link-gray", children: "Link Gray" },
    { color: "link-destructive", children: "Link Destructive" },
];

const SIZES: ButtonStory["args"][] = [
    { size: "sm", children: "Small" },
    { size: "md", children: "Medium" },
    { size: "lg", children: "Large" },
    { size: "xl", children: "Extra Large" },
];

const meta: ButtonMeta = {
    title: "Components/Buttons/Button",
    component: Button,
    args: {
        children: "Primary Button",
        color: "primary",
        size: "sm",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

const StoryGrid = ({ stories }: { stories: ButtonStory["args"][] }) => (
    <div className="flex flex-wrap items-center gap-4">
        {stories.map((story, index) => (
            <Button key={index} {...story}>
                {story.children}
            </Button>
        ))}
    </div>
);

export const AllPrimary: ButtonStory = {
    name: "Primary & Secondary",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Solid Buttons</h3>
                <StoryGrid stories={COLORS.slice(0, 3)} />
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Destructive Buttons</h3>
                <StoryGrid stories={COLORS.slice(3)} />
            </div>
        </div>
    ),
};

export const LinkButtons: ButtonStory = {
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Link Buttons</h3>
                <StoryGrid stories={LINK_VARIANTS} />
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Link Buttons with Icons</h3>
                <StoryGrid
                    stories={LINK_VARIANTS.map((variant) => ({
                        ...variant,
                        iconTrailing: LinkExternal01,
                    }))}
                />
            </div>
        </div>
    ),
};

export const IconButtons: ButtonStory = {
    name: "Icon & Loading",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Leading / Trailing Icons</h3>
                <StoryGrid
                    stories={[
                        { iconLeading: Star01, children: "Leading Icon" },
                        { iconTrailing: Lightning01, children: "Trailing Icon" },
                        { iconLeading: Star01, iconTrailing: Lightning01, children: "Both Icons" },
                    ]}
                />
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Icon Only</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <Button aria-label="Leading Icon" iconLeading={Flag06} />
                    <Button aria-label="Trailing Icon" iconTrailing={Lightning01} />
                    <Button aria-label="Both Icons" iconLeading={Flag06} iconTrailing={Lightning01} />
                </div>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Loading States</h3>
                <StoryGrid
                    stories={[
                        { isLoading: true, children: "Loading" },
                        { isLoading: true, showTextWhileLoading: true, children: "Loading (show text)" },
                        { isLoading: true, iconLeading: Star01, children: "Loading with Icon" },
                    ]}
                />
            </div>
        </div>
    ),
};

export const Sizes: ButtonStory = {
    render: () => <StoryGrid stories={SIZES} />,
};
