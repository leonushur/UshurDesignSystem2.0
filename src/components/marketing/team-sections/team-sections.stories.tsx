import type { Meta, StoryObj } from "@storybook/react";
import { TeamSectionGrid, TeamSectionList } from "./team-sections";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof TeamSectionGrid> = {
    title: "Marketing/Team Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type GridStory = StoryObj<typeof TeamSectionGrid>;

const members = [
    {
        name: "Marin Cox",
        role: "Co-founder & CEO",
        bio: "Previously scaled growth at high-growth SaaS companies (Figma, Intercom).",
        avatar: <div className="size-full bg-gradient-to-br from-brand-secondary/30 to-primary" />,
        socials: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
        ],
    },
    {
        name: "Priya Desai",
        role: "Head of Product",
        bio: "Leading the component and platform roadmap for Ushur.",
        avatar: <div className="size-full bg-gradient-to-br from-brand-secondary/30 to-primary" />,
    },
    {
        name: "Devon Reed",
        role: "VP of GTM",
        bio: "Former RevOps leader, now scaling Ushur’s go-to-market engine.",
        avatar: <div className="size-full bg-gradient-to-br from-brand-secondary/30 to-primary" />,
    },
];

export const Grid: GridStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <TeamSectionGrid
                eyebrow="Our Team"
                title="People behind Ushur"
                description="We’re a distributed team of product, design, and GTM leaders helping SaaS companies ship faster."
                members={members}
            />
        </div>
    ),
};

type ListStory = StoryObj<typeof TeamSectionList>;

export const List: ListStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <TeamSectionList
                eyebrow="Leadership"
                title="Meet the founders"
                description="We’re building the design system we wished we had at our previous companies."
                members={members}
                highlight={
                    <div className="rounded-2xl border border-secondary bg-primary_hover p-5 text-left">
                        <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">We’re hiring!</p>
                        <p className="mt-2 text-sm text-tertiary">Join us to shape the future of component-driven product development.</p>
                        <Button size="sm" className="mt-4">
                            View open roles
                        </Button>
                    </div>
                }
            />
        </div>
    ),
};

