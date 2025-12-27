import type { Meta, StoryObj } from "@storybook/react";
import { CareerSectionCards, CareerSectionSplit } from "./careers-sections";

const openings = [
    {
        id: "1",
        title: "Senior Product Designer",
        team: "Design",
        location: "Remote",
        type: "Full-time",
        description: "Drive the evolution of our design system across marketing and product.",
    },
    {
        id: "2",
        title: "Staff Frontend Engineer",
        team: "Engineering",
        location: "San Francisco",
        type: "Full-time",
        description: "Scale our React component architecture and performance tooling.",
    },
    {
        id: "3",
        title: "Product Marketing Manager",
        team: "Marketing",
        location: "New York",
        type: "Hybrid",
        description: "Lead cross-functional launches that highlight customer wins.",
    },
];

const meta = {
    title: "Marketing/Careers Sections",
    component: CareerSectionCards,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof CareerSectionCards>;

export default meta;

type CardsStory = StoryObj<typeof CareerSectionCards>;

export const Cards: CardsStory = {
    args: {
        eyebrow: "We’re hiring",
        title: "Come build the future",
        description: "We’re a team of designers, developers, and strategists excited about building the next generation of customer experiences.",
        openings,
        benefits: ["Health, dental, and vision", "401k with matching", "Remote stipend", "Flexible PTO", "Parental leave", "Annual retreat"],
    },
};

type SplitStory = StoryObj<typeof CareerSectionSplit>;

export const Split: SplitStory = {
    args: {
        eyebrow: "Careers at Ushur",
        title: "Make your next chapter your best chapter",
        description: "We hire curious builders that love making things better.",
        openings,
        sidebarContent: (
            <div className="space-y-3 text-sm text-tertiary">
                <p className="text-lg font-semibold text-primary">Why join us?</p>
                <ul className="space-y-2">
                    <li>Global remote-first culture</li>
                    <li>Quarterly product labs</li>
                    <li>Learning stipend of $2,000</li>
                    <li>Flexible work hours</li>
                </ul>
                <a href="/careers" className="inline-flex text-sm font-semibold text-brand-secondary">
                    Explore culture guide →
                </a>
            </div>
        ),
    },
};

