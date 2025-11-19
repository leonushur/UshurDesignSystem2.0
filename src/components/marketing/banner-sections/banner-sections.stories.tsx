import type { Meta, StoryObj } from "@storybook/react";
import { BannerSectionAnnouncement, BannerSectionCard } from "./banner-sections";
import { Button } from "@/components/base/buttons/button";

const meta = {
    title: "Marketing/Banner Sections",
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BannerSectionAnnouncement>;

export default meta;

type AnnouncementStory = StoryObj<typeof BannerSectionAnnouncement>;

export const Announcement: AnnouncementStory = {
    args: {
        eyebrow: "Changelog",
        highlight: "v2.4",
        title: "Workflow automations just got twice as fast",
        description: "We rebuilt the orchestration layer to scale up to 10,000 automation jobs per second with full observability.",
        supportingText: "Shipped Nov 18, 2025",
        actions: (
            <div className="flex gap-2">
                <Button size="sm">Read release</Button>
                <Button size="sm" color="secondary">
                    Follow updates
                </Button>
            </div>
        ),
    },
};

type CardStory = StoryObj<typeof BannerSectionCard>;

export const HighlightCard: CardStory = {
    args: {
        eyebrow: "Ushur Summit 2025",
        title: "Join us live for the roadmap preview",
        description: "Two days of workshops, product deep dives, and conversations with the builders behind Ushur.",
        background: "purple",
        stats: [
            { label: "Speakers", value: "40+", trend: "+10 vs 2024" },
            { label: "Sessions", value: "28", trend: "New product labs added" },
            { label: "Tickets", value: "85% sold", trend: "Limited early pricing" },
        ],
        actions: (
            <>
                <Button size="lg">Reserve seat</Button>
                <Button size="lg" color="secondary">
                    View agenda
                </Button>
            </>
        ),
    },
};

