import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterCTACard, NewsletterCTAInline } from "./newsletter-cta-sections";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { BadgeWithDot } from "@/components/base/badges/badges";

const meta: Meta<typeof NewsletterCTAInline> = {
    title: "Marketing/Newsletter CTA Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type InlineStory = StoryObj<typeof NewsletterCTAInline>;

const InlineForm = (
    <form className="flex flex-col gap-3 sm:flex-row">
        <Input placeholder="Enter your work email" size="lg" className="sm:flex-1" />
        <Button size="lg">Subscribe</Button>
    </form>
);

export const Inline: InlineStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <NewsletterCTAInline
                eyebrow="Newsletter"
                title="Stay ahead with Ushur"
                description="Weekly strategies, component drops, and product updates delivered to your inbox."
                badge={
                    <BadgeWithDot size="sm" color="success" type="pill-color">
                        No spam, unsubscribe anytime
                    </BadgeWithDot>
                }
                formContent={InlineForm}
                supportingText="Join 18,000+ product and marketing teams building with Ushur."
            />
        </div>
    ),
};

type CardStory = StoryObj<typeof NewsletterCTACard>;

const CardForm = (
    <form className="flex flex-col gap-3 sm:flex-row">
        <Input placeholder="First name" size="lg" />
        <Input placeholder="Work email" type="email" size="lg" className="sm:flex-1" />
        <Button size="lg">Join waitlist</Button>
    </form>
);

export const Card: CardStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <NewsletterCTACard
                eyebrow="Customer stories"
                title="Get the Ushur insider briefing"
                description="Every two weeks we share marketing experiments, templates, and data-backed insights from top SaaS teams."
                badge={
                    <BadgeWithDot size="sm" color="warning" type="pill-color">
                        New case study
                    </BadgeWithDot>
                }
                formContent={CardForm}
                footerNote="We respect your inbox. Expect bite-sized summaries and actionable templates."
            />
        </div>
    ),
};

