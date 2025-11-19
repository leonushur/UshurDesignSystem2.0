import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialSectionGrid, TestimonialSectionQuote } from "./testimonial-sections";
import { Badge } from "@/components/base/badges/badges";
import { UshurLogo } from "@/components/foundations/logo/ushur-logo";

const meta: Meta<typeof TestimonialSectionQuote> = {
    title: "Marketing/Testimonial Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type QuoteStory = StoryObj<typeof TestimonialSectionQuote>;

export const Quote: QuoteStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <TestimonialSectionQuote
                eyebrow="Customer stories"
                title="Loved by modern GTM teams"
                description="Ushur helps revenue teams move faster with a complete component library."
                testimonial={{
                    quote: "Ushur has become the foundation for every marketing launch, allowing us to ship in days instead of weeks.",
                    author: { name: "Marin Cox", role: "VP of Marketing", company: "Sisyphus" },
                    logo: <UshurLogo className="h-6 text-tertiary" />,
                    highlight: "4.8x ROI",
                }}
            />
        </div>
    ),
};

type GridStory = StoryObj<typeof TestimonialSectionGrid>;

const testimonials = [
    {
        quote: "The level of polish and flexibility means we rarely have to leave the design system.",
        author: { name: "Devon Reed", role: "Head of Growth", company: "Layer" },
        highlight: "Enterprise",
    },
    {
        quote: "Our brand stayed consistent across marketing, product, and sales collateral in record time.",
        author: { name: "Priya Desai", role: "Director of Product Marketing", company: "Catalog" },
        logo: <Badge size="sm">Series C</Badge>,
    },
    {
        quote: "Ushur gave our team superpowers. We re-platformed in six weeks.",
        author: { name: "Alex Kim", role: "Chief Creative Officer", company: "Quotient" },
    },
];

export const Grid: GridStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <TestimonialSectionGrid
                eyebrow="Testimonials"
                title="Trusted by ambitious teams"
                description="See how Ushur accelerates go-to-market teams at every stage."
                testimonials={testimonials}
            />
        </div>
    ),
};

