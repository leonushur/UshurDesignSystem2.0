import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./carousel";

const meta: Meta<typeof Carousel> = {
    title: "Application/Carousel",
    component: Carousel,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const sampleImages = [
    <div key="1" className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Slide 1</h2>
            <p className="text-lg">Beautiful gradient background</p>
        </div>
    </div>,
    <div key="2" className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600">
        <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Slide 2</h2>
            <p className="text-lg">Vibrant colors and smooth transitions</p>
        </div>
    </div>,
    <div key="3" className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-600">
        <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Slide 3</h2>
            <p className="text-lg">Responsive and accessible</p>
        </div>
    </div>,
    <div key="4" className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-600">
        <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Slide 4</h2>
            <p className="text-lg">Keyboard navigation supported</p>
        </div>
    </div>,
];

const productShowcase = [
    <div key="product-1" className="flex h-full w-full flex-col items-center justify-center bg-gray-50 p-8">
        <div className="text-center">
            <div className="mb-4 text-6xl">📱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Smartphone</h3>
            <p className="text-gray-600">Advanced features and sleek design</p>
            <p className="mt-4 text-3xl font-bold text-gray-900">$999</p>
        </div>
    </div>,
    <div key="product-2" className="flex h-full w-full flex-col items-center justify-center bg-gray-50 p-8">
        <div className="text-center">
            <div className="mb-4 text-6xl">💻</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ultra Laptop</h3>
            <p className="text-gray-600">Powerful performance for professionals</p>
            <p className="mt-4 text-3xl font-bold text-gray-900">$1,499</p>
        </div>
    </div>,
    <div key="product-3" className="flex h-full w-full flex-col items-center justify-center bg-gray-50 p-8">
        <div className="text-center">
            <div className="mb-4 text-6xl">⌚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Watch</h3>
            <p className="text-gray-600">Track your health and stay connected</p>
            <p className="mt-4 text-3xl font-bold text-gray-900">$399</p>
        </div>
    </div>,
];

const testimonials = [
    <div key="testimonial-1" className="flex h-full w-full items-center justify-center bg-white p-12">
        <div className="max-w-2xl text-center">
            <p className="text-xl text-gray-700 mb-6 italic">
                "This product has completely transformed the way we work. The team is incredibly responsive and the features are exactly what we needed."
            </p>
            <div className="flex items-center justify-center gap-3">
                <div className="size-12 rounded-full bg-blue-500" />
                <div className="text-left">
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">CEO, TechCorp</p>
                </div>
            </div>
        </div>
    </div>,
    <div key="testimonial-2" className="flex h-full w-full items-center justify-center bg-white p-12">
        <div className="max-w-2xl text-center">
            <p className="text-xl text-gray-700 mb-6 italic">
                "Outstanding quality and exceptional customer service. We've been using this for 2 years and couldn't be happier with the results."
            </p>
            <div className="flex items-center justify-center gap-3">
                <div className="size-12 rounded-full bg-purple-500" />
                <div className="text-left">
                    <p className="font-semibold text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-600">Designer, CreativeStudio</p>
                </div>
            </div>
        </div>
    </div>,
];

export const Default: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: true,
        loop: true,
        aspectRatio: "video",
    },
};

export const AutoPlay: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: true,
        autoPlay: true,
        autoPlayInterval: 3000,
        loop: true,
        aspectRatio: "video",
    },
};

export const NoArrows: Story = {
    args: {
        items: sampleImages,
        showArrows: false,
        showDots: true,
        loop: true,
        aspectRatio: "video",
    },
};

export const NoDots: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: false,
        loop: true,
        aspectRatio: "video",
    },
};

export const SquareAspectRatio: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: true,
        loop: true,
        aspectRatio: "square",
    },
};

export const WideAspectRatio: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: true,
        loop: true,
        aspectRatio: "wide",
    },
};

export const ProductShowcase: Story = {
    args: {
        items: productShowcase,
        showArrows: true,
        showDots: true,
        loop: true,
        aspectRatio: "square",
    },
};

export const Testimonials: Story = {
    args: {
        items: testimonials,
        showArrows: true,
        showDots: true,
        autoPlay: true,
        autoPlayInterval: 6000,
        loop: true,
        aspectRatio: "video",
    },
};

export const NoLoop: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: true,
        loop: false,
        aspectRatio: "video",
    },
};

export const FastAnimation: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: true,
        loop: true,
        animationDuration: 0.2,
        aspectRatio: "video",
    },
};

export const SlowAnimation: Story = {
    args: {
        items: sampleImages,
        showArrows: true,
        showDots: true,
        loop: true,
        animationDuration: 1,
        aspectRatio: "video",
    },
};
