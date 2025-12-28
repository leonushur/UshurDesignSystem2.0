import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import { Button } from "../buttons/button";
import { Badge } from "../badges/badges";
import { Avatar } from "../avatar/avatar";
import { Heart, MessageCircle01, Share06, Star01, TrendUp01 } from "@untitledui-pro/icons/line";

type CardStory = StoryObj<typeof Card>;
type CardMeta = Meta<typeof Card>;

const meta: CardMeta = {
    title: "Components/Base/Card",
    component: Card,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

/**
 * Default card with basic content
 */
export const Default: CardStory = {
    render: () => (
        <Card style={{ maxWidth: 400 }}>
            <Card.Header>
                <h3 className="text-lg font-semibold text-fg-primary">
                    Card Title
                </h3>
                <p className="text-sm text-fg-tertiary">
                    Subtitle or description
                </p>
            </Card.Header>
            <Card.Body>
                <p className="text-sm text-fg-secondary mt-4">
                    This is a default card with a header and body. Cards are flexible
                    containers for grouping related content and actions.
                </p>
            </Card.Body>
        </Card>
    ),
};

/**
 * All card variants side by side
 */
export const AllVariants: CardStory = {
    name: "All Variants",
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: 900 }}>
            <Card variant="default">
                <Card.Header>
                    <h3 className="text-md font-semibold text-fg-primary">Default</h3>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-3">
                        Default variant with subtle border and white background.
                    </p>
                </Card.Body>
            </Card>

            <Card variant="outlined">
                <Card.Header>
                    <h3 className="text-md font-semibold text-fg-primary">Outlined</h3>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-3">
                        Outlined variant with stronger border for emphasis.
                    </p>
                </Card.Body>
            </Card>

            <Card variant="elevated">
                <Card.Header>
                    <h3 className="text-md font-semibold text-fg-primary">Elevated</h3>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-3">
                        Elevated variant with shadow for depth and hierarchy.
                    </p>
                </Card.Body>
            </Card>

            <Card variant="ghost">
                <Card.Header>
                    <h3 className="text-md font-semibold text-fg-primary">Ghost</h3>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-3">
                        Ghost variant with no background or border.
                    </p>
                </Card.Body>
            </Card>
        </div>
    ),
};

/**
 * All card sizes
 */
export const AllSizes: CardStory = {
    name: "All Sizes",
    render: () => (
        <div className="flex flex-col gap-6" style={{ maxWidth: 500 }}>
            <Card variant="outlined" size="sm">
                <Card.Header>
                    <h3 className="text-sm font-semibold text-fg-primary">Small Card</h3>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-2">
                        Compact padding for dense layouts.
                    </p>
                </Card.Body>
            </Card>

            <Card variant="outlined" size="md">
                <Card.Header>
                    <h3 className="text-md font-semibold text-fg-primary">Medium Card</h3>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-3">
                        Default size with balanced padding.
                    </p>
                </Card.Body>
            </Card>

            <Card variant="outlined" size="lg">
                <Card.Header>
                    <h3 className="text-lg font-semibold text-fg-primary">Large Card</h3>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-4">
                        Generous padding for featured content.
                    </p>
                </Card.Body>
            </Card>
        </div>
    ),
};

/**
 * Card with header, body, and footer sections
 */
export const WithHeaderAndFooter: CardStory = {
    name: "With Header and Footer",
    render: () => (
        <Card variant="outlined" style={{ maxWidth: 400 }}>
            <Card.Header>
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-fg-primary">
                            Project Update
                        </h3>
                        <p className="text-sm text-fg-tertiary mt-1">
                            Dec 27, 2025
                        </p>
                    </div>
                    <Badge color="success" dot>
                        Active
                    </Badge>
                </div>
            </Card.Header>
            <Card.Body>
                <p className="text-sm text-fg-secondary mt-4">
                    The new design system components are ready for review. All
                    accessibility requirements have been met and comprehensive stories
                    have been created.
                </p>
            </Card.Body>
            <Card.Footer className="mt-6 pt-4 border-t border-border-secondary">
                <Button size="sm" color="secondary">
                    Dismiss
                </Button>
                <Button size="sm" color="primary">
                    View Details
                </Button>
            </Card.Footer>
        </Card>
    ),
};

/**
 * Card with image/media section
 */
export const WithMedia: CardStory = {
    name: "With Media",
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: 900 }}>
            {/* Card with image */}
            <Card variant="outlined" size="sm">
                <Card.Media
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
                    alt="Laptop with code editor"
                    aspectRatio="16/9"
                />
                <Card.Header className="mt-4">
                    <h3 className="text-md font-semibold text-fg-primary">
                        Getting Started with React
                    </h3>
                    <p className="text-sm text-fg-tertiary mt-1">
                        Learn the fundamentals
                    </p>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-3">
                        A comprehensive guide to building modern web applications with React.
                    </p>
                </Card.Body>
            </Card>

            {/* Card with custom media content */}
            <Card variant="outlined" size="sm">
                <Card.Media aspectRatio="16/9">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700">
                        <Star01 className="size-12 text-white" />
                    </div>
                </Card.Media>
                <Card.Header className="mt-4">
                    <h3 className="text-md font-semibold text-fg-primary">
                        Custom Media Content
                    </h3>
                    <p className="text-sm text-fg-tertiary mt-1">
                        Use custom elements
                    </p>
                </Card.Header>
                <Card.Body>
                    <p className="text-sm text-fg-secondary mt-3">
                        The media section can contain any custom content, not just images.
                    </p>
                </Card.Body>
            </Card>
        </div>
    ),
};

/**
 * Interactive clickable cards with hover effects
 */
export const InteractiveCards: CardStory = {
    name: "Interactive Cards",
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
                variant="outlined"
                size="sm"
                interactive
                onClick={() => alert("Default card clicked")}
            >
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-bg-brand-primary">
                        <Star01 className="size-6 text-fg-brand-primary" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-fg-primary">
                            Feature A
                        </h3>
                        <p className="text-xs text-fg-tertiary mt-1">
                            Click to explore
                        </p>
                    </div>
                </div>
            </Card>

            <Card
                variant="elevated"
                size="sm"
                interactive
                onClick={() => alert("Elevated card clicked")}
            >
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-bg-success-primary">
                        <TrendUp01 className="size-6 text-fg-success-primary" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-fg-primary">
                            Feature B
                        </h3>
                        <p className="text-xs text-fg-tertiary mt-1">
                            Click to explore
                        </p>
                    </div>
                </div>
            </Card>

            <Card
                variant="ghost"
                size="sm"
                interactive
                onClick={() => alert("Ghost card clicked")}
            >
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-bg-error-primary">
                        <Heart className="size-6 text-fg-error-primary" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-fg-primary">
                            Feature C
                        </h3>
                        <p className="text-xs text-fg-tertiary mt-1">
                            Click to explore
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    ),
};

/**
 * Grid layout of multiple cards
 */
export const CardGrid: CardStory = {
    name: "Card Grid Layout",
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} variant="outlined" size="sm">
                    <Card.Header>
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-bg-brand-primary text-fg-brand-primary">
                                {i}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-fg-primary">
                                    Item {i}
                                </h3>
                                <p className="text-xs text-fg-tertiary">
                                    Description
                                </p>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <p className="text-sm text-fg-secondary mt-3">
                            Card content for item {i}.
                        </p>
                    </Card.Body>
                </Card>
            ))}
        </div>
    ),
};

/**
 * Profile card example
 */
export const ProfileCard: CardStory = {
    name: "Profile Card Example",
    render: () => (
        <Card variant="elevated" style={{ maxWidth: 400 }}>
            <Card.Media aspectRatio="21/9">
                <div className="h-full bg-gradient-to-r from-brand-400 to-brand-600" />
            </Card.Media>
            <div className="-mt-10 px-6">
                <Avatar
                    size="xl"
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Olivia Rhye"
                    className="border-4 border-bg-primary"
                />
            </div>
            <Card.Header className="mt-3">
                <h3 className="text-lg font-semibold text-fg-primary">
                    Olivia Rhye
                </h3>
                <p className="text-sm text-fg-tertiary">
                    Product Designer
                </p>
            </Card.Header>
            <Card.Body>
                <p className="text-sm text-fg-secondary mt-3">
                    Passionate about creating accessible and beautiful user experiences.
                    Based in San Francisco, CA.
                </p>
                <div className="flex gap-2 mt-4">
                    <Badge color="brand" size="sm">Design</Badge>
                    <Badge color="brand" size="sm">UX</Badge>
                    <Badge color="brand" size="sm">Accessibility</Badge>
                </div>
            </Card.Body>
            <Card.Footer className="mt-6 pt-6 border-t border-border-secondary">
                <Button size="sm" color="secondary" className="flex-1">
                    Message
                </Button>
                <Button size="sm" color="primary" className="flex-1">
                    Follow
                </Button>
            </Card.Footer>
        </Card>
    ),
};

/**
 * Product card example
 */
export const ProductCard: CardStory = {
    name: "Product Card Example",
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                {
                    title: "Wireless Headphones",
                    price: "$299",
                    rating: "4.8",
                    reviews: "1,234",
                    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
                },
                {
                    title: "Smart Watch",
                    price: "$399",
                    rating: "4.9",
                    reviews: "2,156",
                    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
                },
                {
                    title: "Laptop Stand",
                    price: "$79",
                    rating: "4.7",
                    reviews: "892",
                    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
                },
            ].map((product, i) => (
                <Card
                    key={i}
                    variant="outlined"
                    size="sm"
                    interactive
                    onClick={() => alert(`View ${product.title}`)}
                >
                    <Card.Media
                        src={product.image}
                        alt={product.title}
                        aspectRatio="1/1"
                    />
                    <Card.Header className="mt-4">
                        <h3 className="text-sm font-semibold text-fg-primary">
                            {product.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                                <Star01 className="size-4 text-fg-warning-primary fill-warning-400" />
                                <span className="text-sm font-medium text-fg-secondary">
                                    {product.rating}
                                </span>
                            </div>
                            <span className="text-xs text-fg-tertiary">
                                ({product.reviews} reviews)
                            </span>
                        </div>
                    </Card.Header>
                    <Card.Footer className="mt-3 justify-between">
                        <span className="text-lg font-bold text-fg-primary">
                            {product.price}
                        </span>
                        <Button size="sm" color="primary">
                            Add to Cart
                        </Button>
                    </Card.Footer>
                </Card>
            ))}
        </div>
    ),
};

/**
 * Social media post card example
 */
export const SocialPostCard: CardStory = {
    name: "Social Post Card Example",
    render: () => (
        <Card variant="outlined" style={{ maxWidth: 500 }}>
            <Card.Header>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar
                            src="https://i.pravatar.cc/150?img=32"
                            alt="Phoenix Baker"
                            size="md"
                        />
                        <div>
                            <h3 className="text-sm font-semibold text-fg-primary">
                                Phoenix Baker
                            </h3>
                            <p className="text-xs text-fg-tertiary">
                                2 hours ago
                            </p>
                        </div>
                    </div>
                    <Button size="sm" color="tertiary" iconLeading={Heart}>
                        Follow
                    </Button>
                </div>
            </Card.Header>
            <Card.Body>
                <p className="text-sm text-fg-secondary mt-4">
                    Just shipped the new Card component for our design system! It supports
                    multiple variants, sizes, and compound component patterns. Check it out!
                </p>
                <Card.Media
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop"
                    alt="Code on laptop screen"
                    aspectRatio="16/9"
                    className="mt-4"
                />
            </Card.Body>
            <Card.Footer className="mt-4 pt-4 border-t border-border-secondary justify-between">
                <Button size="sm" color="tertiary" iconLeading={Heart}>
                    124
                </Button>
                <Button size="sm" color="tertiary" iconLeading={MessageCircle01}>
                    32
                </Button>
                <Button size="sm" color="tertiary" iconLeading={Share06}>
                    Share
                </Button>
            </Card.Footer>
        </Card>
    ),
};

/**
 * Stat cards for dashboards
 */
export const StatCards: CardStory = {
    name: "Stat Card Example",
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
                {
                    label: "Total Revenue",
                    value: "$45,231",
                    change: "+20.1%",
                    positive: true,
                },
                {
                    label: "Active Users",
                    value: "2,456",
                    change: "+12.5%",
                    positive: true,
                },
                {
                    label: "Conversion Rate",
                    value: "3.24%",
                    change: "-4.3%",
                    positive: false,
                },
                {
                    label: "Avg. Session",
                    value: "4m 32s",
                    change: "+8.2%",
                    positive: true,
                },
            ].map((stat, i) => (
                <Card key={i} variant="outlined" size="sm">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-fg-tertiary">
                            {stat.label}
                        </p>
                        <div className="flex items-end justify-between">
                            <span className="text-display-xs font-semibold text-fg-primary">
                                {stat.value}
                            </span>
                            <span
                                className={cx(
                                    "text-sm font-medium",
                                    stat.positive ? "text-fg-success-primary" : "text-fg-error-primary"
                                )}
                            >
                                {stat.change}
                            </span>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    ),
};
