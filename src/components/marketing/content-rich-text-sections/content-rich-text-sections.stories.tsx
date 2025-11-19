import type { Meta, StoryObj } from "@storybook/react";
import { ContentSectionSplit, ContentSectionStack } from "./content-rich-text-sections";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof ContentSectionSplit> = {
    title: "Marketing/Content & Rich Text Sections",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type SplitStory = StoryObj<typeof ContentSectionSplit>;

export const Split: SplitStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <ContentSectionSplit
                eyebrow="Guided tours"
                title="Build a unified knowledge experience"
                description="Use Ushur to create modular documentation, onboarding, and marketing narratives."
                content={[
                    {
                        title: "Rich text + components",
                        body: (
                            <p>
                                Drop in CTA buttons, code snippets, FAQs, and images inline with prose. Ushur ships with composable MDX + React blocks so your team
                                can document products and campaigns in record time.
                            </p>
                        ),
                    },
                    {
                        title: "Embed anywhere",
                        body: <p>Publish to marketing pages, help centers, or gated customer hubs with consistent theming and analytics tracking.</p>,
                    },
                ]}
                media={
                    <div className="w-full rounded-2xl border border-secondary bg-primary_hover p-6 text-left">
                        <p className="text-sm uppercase tracking-wide text-tertiary">Live preview</p>
                        <p className="mt-3 text-xl font-semibold text-primary">Personalization teardown checklist</p>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-tertiary">
                            <li>Audits to run before importing audiences</li>
                            <li>Design tokens for consistent copy blocks</li>
                            <li>Experimentation prompts for AI copilots</li>
                        </ul>
                    </div>
                }
            />
        </div>
    ),
};

type StackStory = StoryObj<typeof ContentSectionStack>;

export const Stack: StackStory = {
    render: () => (
        <div className="bg-primary px-6 py-16">
            <ContentSectionStack
                eyebrow="Docs"
                title="What’s inside Ushur"
                description="We include everything you need to go from idea to shipped product in days."
                sections={[
                    {
                        title: "Composable sections",
                        body: (
                            <p>
                                200+ ready-made marketing, product, and application blocks built with accessibility-first React components and Tailwind CSS.
                                Mix-and-match for hero layouts, pricing tables, dashboards, and more.
                            </p>
                        ),
                    },
                    {
                        title: "Powerful theming",
                        body: (
                            <>
                                <p>
                                    Switch between light, dark, and brand themes instantly using our design token system. Extend tokens via CSS variables and keep Storybook
                                    in sync with Figma styles.
                                </p>
                                <Button size="sm" className="mt-3 w-fit">
                                    Explore theming docs
                                </Button>
                            </>
                        ),
                    },
                ]}
            />
        </div>
    ),
};

