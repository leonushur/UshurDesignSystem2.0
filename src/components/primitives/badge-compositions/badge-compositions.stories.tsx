import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
    Code01,
    Heart,
    LayersThree01,
    Mail01,
    Palette,
    Settings01,
    ShoppingCart01,
    Star01,
    Tag01,
    Zap,
} from "@untitledui-pro/icons/line";
import { CategoryBadge } from "./category-badge";
import { DismissibleBadge } from "./dismissible-badge";

// ============================================================================
// CategoryBadge Stories
// ============================================================================

const categoryMeta: Meta<typeof CategoryBadge> = {
    title: "Components/Primitives/Badge Compositions/CategoryBadge",
    component: CategoryBadge,
    argTypes: {
        color: {
            control: "select",
            options: ["gray", "brand", "blue", "purple", "pink", "orange", "indigo"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        type: {
            control: "select",
            options: ["pill-color", "badge-color"],
        },
    },
    args: {
        label: "Category",
        color: "gray",
        size: "sm",
        type: "pill-color",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default categoryMeta;

type CategoryStory = StoryObj<typeof CategoryBadge>;

export const Default: CategoryStory = {
    args: {
        label: "Design",
        color: "purple",
    },
};

export const AllColors: CategoryStory = {
    name: "All Colors",
    render: () => (
        <div className="space-y-6">
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Pill Style</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <CategoryBadge label="Gray" color="gray" />
                    <CategoryBadge label="Brand" color="brand" />
                    <CategoryBadge label="Blue" color="blue" />
                    <CategoryBadge label="Purple" color="purple" />
                    <CategoryBadge label="Pink" color="pink" />
                    <CategoryBadge label="Orange" color="orange" />
                    <CategoryBadge label="Indigo" color="indigo" />
                </div>
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Badge Style</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <CategoryBadge label="Gray" color="gray" type="badge-color" />
                    <CategoryBadge label="Brand" color="brand" type="badge-color" />
                    <CategoryBadge label="Blue" color="blue" type="badge-color" />
                    <CategoryBadge label="Purple" color="purple" type="badge-color" />
                    <CategoryBadge label="Pink" color="pink" type="badge-color" />
                    <CategoryBadge label="Orange" color="orange" type="badge-color" />
                    <CategoryBadge label="Indigo" color="indigo" type="badge-color" />
                </div>
            </section>
        </div>
    ),
};

export const AllSizes: CategoryStory = {
    name: "All Sizes",
    render: () => (
        <div className="space-y-6">
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <CategoryBadge label="Design" color="purple" size="sm" />
                    <CategoryBadge label="Engineering" color="blue" size="sm" />
                    <CategoryBadge label="Marketing" color="pink" size="sm" />
                </div>
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <CategoryBadge label="Design" color="purple" size="md" />
                    <CategoryBadge label="Engineering" color="blue" size="md" />
                    <CategoryBadge label="Marketing" color="pink" size="md" />
                </div>
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Large</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <CategoryBadge label="Design" color="purple" size="lg" />
                    <CategoryBadge label="Engineering" color="blue" size="lg" />
                    <CategoryBadge label="Marketing" color="pink" size="lg" />
                </div>
            </section>
        </div>
    ),
};

export const WithIcons: CategoryStory = {
    name: "With Icons",
    render: () => (
        <div className="space-y-6">
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Department Tags</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <CategoryBadge label="Design" color="purple" icon={Palette} />
                    <CategoryBadge label="Engineering" color="blue" icon={Code01} />
                    <CategoryBadge label="Marketing" color="pink" icon={Mail01} />
                    <CategoryBadge label="Product" color="orange" icon={LayersThree01} />
                </div>
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Category Labels</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <CategoryBadge label="Featured" color="brand" icon={Star01} />
                    <CategoryBadge label="New" color="indigo" icon={Zap} />
                    <CategoryBadge label="Popular" color="orange" icon={Heart} />
                    <CategoryBadge label="On Sale" color="pink" icon={Tag01} />
                </div>
            </section>
        </div>
    ),
};

export const DepartmentTags: CategoryStory = {
    name: "Real-World Example: Department Tags",
    render: () => (
        <div className="space-y-4">
            <div className="rounded-lg border border-border-primary bg-bg-primary p-6">
                <h3 className="mb-4 text-md font-semibold text-fg-primary">Team Directory</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border-secondary pb-4">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-primary text-fg-brand-secondary">
                                OR
                            </div>
                            <div>
                                <p className="text-sm font-medium text-fg-primary">Olivia Rhye</p>
                                <p className="text-sm text-fg-tertiary">olivia@ushur.com</p>
                            </div>
                        </div>
                        <CategoryBadge label="Design" color="purple" icon={Palette} />
                    </div>
                    <div className="flex items-center justify-between border-b border-border-secondary pb-4">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-primary text-fg-brand-secondary">
                                PH
                            </div>
                            <div>
                                <p className="text-sm font-medium text-fg-primary">Phoenix Baker</p>
                                <p className="text-sm text-fg-tertiary">phoenix@ushur.com</p>
                            </div>
                        </div>
                        <CategoryBadge label="Engineering" color="blue" icon={Code01} />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-primary text-fg-brand-secondary">
                                LM
                            </div>
                            <div>
                                <p className="text-sm font-medium text-fg-primary">Lana Steiner</p>
                                <p className="text-sm text-fg-tertiary">lana@ushur.com</p>
                            </div>
                        </div>
                        <CategoryBadge label="Marketing" color="pink" icon={Mail01} />
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const ProductCategories: CategoryStory = {
    name: "Real-World Example: Product Categories",
    render: () => (
        <div className="space-y-4">
            <div className="rounded-lg border border-border-primary bg-bg-primary p-6">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-md font-semibold text-fg-primary">New Arrivals</h3>
                    <CategoryBadge label="Featured" color="brand" icon={Star01} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-border-secondary p-4">
                        <div className="mb-3 flex items-start justify-between">
                            <div className="flex size-12 items-center justify-center rounded-lg bg-bg-secondary">
                                <ShoppingCart01 className="size-6 text-fg-tertiary" />
                            </div>
                            <CategoryBadge label="New" color="indigo" icon={Zap} size="sm" />
                        </div>
                        <h4 className="mb-1 text-sm font-semibold text-fg-primary">Premium Package</h4>
                        <p className="text-sm text-fg-tertiary">Advanced features for growing teams</p>
                    </div>
                    <div className="rounded-lg border border-border-secondary p-4">
                        <div className="mb-3 flex items-start justify-between">
                            <div className="flex size-12 items-center justify-center rounded-lg bg-bg-secondary">
                                <Settings01 className="size-6 text-fg-tertiary" />
                            </div>
                            <CategoryBadge label="Popular" color="orange" icon={Heart} size="sm" />
                        </div>
                        <h4 className="mb-1 text-sm font-semibold text-fg-primary">Enterprise Suite</h4>
                        <p className="text-sm text-fg-tertiary">Complete solution for large organizations</p>
                    </div>
                </div>
            </div>
        </div>
    ),
};

// ============================================================================
// DismissibleBadge Stories
// ============================================================================

const dismissibleMeta: Meta<typeof DismissibleBadge> = {
    title: "Components/Primitives/Badge Compositions/DismissibleBadge",
    component: DismissibleBadge,
    argTypes: {
        color: {
            control: "select",
            options: ["gray", "brand", "blue", "purple", "pink", "orange", "error", "warning", "success"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        type: {
            control: "select",
            options: ["pill-color", "badge-color"],
        },
    },
    args: {
        label: "Dismissible",
        color: "gray",
        size: "sm",
        type: "pill-color",
        onDismiss: () => alert("Badge dismissed!"),
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export { dismissibleMeta as DismissibleBadgeMeta };

type DismissibleStory = StoryObj<typeof DismissibleBadge>;

export const DismissibleDefault: DismissibleStory = {
    name: "Default",
    args: {
        label: "React",
        color: "brand",
    },
};

export const DismissibleAllColors: DismissibleStory = {
    name: "All Colors",
    render: () => (
        <div className="space-y-6">
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Pill Style</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <DismissibleBadge label="Gray" color="gray" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Brand" color="brand" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Blue" color="blue" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Purple" color="purple" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Pink" color="pink" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Orange" color="orange" onDismiss={() => console.log("Dismissed")} />
                </div>
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Status Colors</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <DismissibleBadge label="Error" color="error" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Warning" color="warning" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Success" color="success" onDismiss={() => console.log("Dismissed")} />
                </div>
            </section>
        </div>
    ),
};

export const DismissibleSizes: DismissibleStory = {
    name: "All Sizes",
    render: () => (
        <div className="space-y-6">
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Small</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <DismissibleBadge label="React" color="blue" size="sm" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="TypeScript" color="brand" size="sm" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Tailwind" color="purple" size="sm" onDismiss={() => console.log("Dismissed")} />
                </div>
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Medium</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <DismissibleBadge label="React" color="blue" size="md" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="TypeScript" color="brand" size="md" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Tailwind" color="purple" size="md" onDismiss={() => console.log("Dismissed")} />
                </div>
            </section>
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Large</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <DismissibleBadge label="React" color="blue" size="lg" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="TypeScript" color="brand" size="lg" onDismiss={() => console.log("Dismissed")} />
                    <DismissibleBadge label="Tailwind" color="purple" size="lg" onDismiss={() => console.log("Dismissed")} />
                </div>
            </section>
        </div>
    ),
};

export const InteractiveFilterExample: DismissibleStory = {
    name: "Interactive Example: Filter Tags",
    render: function InteractiveFilterStory() {
        const [filters, setFilters] = useState([
            { id: 1, label: "React", color: "blue" as const },
            { id: 2, label: "TypeScript", color: "brand" as const },
            { id: 3, label: "Tailwind CSS", color: "purple" as const },
            { id: 4, label: "Storybook", color: "pink" as const },
        ]);

        const removeFilter = (id: number) => {
            setFilters((prev) => prev.filter((filter) => filter.id !== id));
        };

        const resetFilters = () => {
            setFilters([
                { id: 1, label: "React", color: "blue" },
                { id: 2, label: "TypeScript", color: "brand" },
                { id: 3, label: "Tailwind CSS", color: "purple" },
                { id: 4, label: "Storybook", color: "pink" },
            ]);
        };

        return (
            <div className="space-y-4">
                <div className="rounded-lg border border-border-primary bg-bg-primary p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-fg-primary">Active Filters ({filters.length})</h3>
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="text-sm font-medium text-fg-brand-secondary hover:text-fg-brand-primary"
                        >
                            Reset all
                        </button>
                    </div>
                    {filters.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <DismissibleBadge
                                    key={filter.id}
                                    label={filter.label}
                                    color={filter.color}
                                    onDismiss={() => removeFilter(filter.id)}
                                    dismissLabel={`Remove ${filter.label} filter`}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-fg-tertiary">No active filters. Click "Reset all" to add filters back.</p>
                    )}
                </div>
            </div>
        );
    },
};

export const SearchFiltersExample: DismissibleStory = {
    name: "Real-World Example: Search Results",
    render: function SearchFilterStory() {
        const [selectedTags, setSelectedTags] = useState([
            { id: 1, label: "Design", color: "purple" as const },
            { id: 2, label: "Engineering", color: "blue" as const },
        ]);

        const removeTag = (id: number) => {
            setSelectedTags((prev) => prev.filter((tag) => tag.id !== id));
        };

        return (
            <div className="space-y-4">
                <div className="rounded-lg border border-border-primary bg-bg-primary p-6">
                    <div className="mb-4">
                        <h3 className="mb-2 text-md font-semibold text-fg-primary">Search Results</h3>
                        <p className="text-sm text-fg-tertiary">
                            Showing 42 results for "{selectedTags.length > 0 ? selectedTags.map((t) => t.label).join(", ") : "all items"}"
                        </p>
                    </div>

                    {selectedTags.length > 0 && (
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-sm font-medium text-fg-secondary">Filters:</span>
                            <div className="flex flex-wrap gap-2">
                                {selectedTags.map((tag) => (
                                    <DismissibleBadge
                                        key={tag.id}
                                        label={tag.label}
                                        color={tag.color}
                                        onDismiss={() => removeTag(tag.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="space-y-3 border-t border-border-secondary pt-4">
                        <div className="rounded-lg border border-border-secondary p-3">
                            <p className="text-sm font-medium text-fg-primary">Design System Components</p>
                            <p className="text-xs text-fg-tertiary">Updated 2 days ago</p>
                        </div>
                        <div className="rounded-lg border border-border-secondary p-3">
                            <p className="text-sm font-medium text-fg-primary">Frontend Architecture Guide</p>
                            <p className="text-xs text-fg-tertiary">Updated 1 week ago</p>
                        </div>
                        <div className="rounded-lg border border-border-secondary p-3">
                            <p className="text-sm font-medium text-fg-primary">API Documentation</p>
                            <p className="text-xs text-fg-tertiary">Updated 3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};

export const SkillTagsExample: DismissibleStory = {
    name: "Real-World Example: Skill Tags",
    render: function SkillTagsStory() {
        const [skills, setSkills] = useState([
            { id: 1, label: "React", color: "blue" as const },
            { id: 2, label: "TypeScript", color: "brand" as const },
            { id: 3, label: "Node.js", color: "success" as const },
            { id: 4, label: "GraphQL", color: "pink" as const },
            { id: 5, label: "AWS", color: "orange" as const },
        ]);

        const removeSkill = (id: number) => {
            setSkills((prev) => prev.filter((skill) => skill.id !== id));
        };

        return (
            <div className="space-y-4">
                <div className="rounded-lg border border-border-primary bg-bg-primary p-6">
                    <div className="mb-4 flex items-center gap-4">
                        <div className="flex size-16 items-center justify-center rounded-full bg-bg-brand-primary text-xl font-semibold text-fg-brand-secondary">
                            OR
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-fg-primary">Olivia Rhye</h3>
                            <p className="text-sm text-fg-tertiary">Senior Software Engineer</p>
                        </div>
                    </div>

                    <div className="mb-4 border-t border-border-secondary pt-4">
                        <div className="mb-2 flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-fg-secondary">Skills ({skills.length})</h4>
                            <button type="button" className="text-xs font-medium text-fg-brand-secondary hover:text-fg-brand-primary">
                                Edit skills
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <DismissibleBadge
                                    key={skill.id}
                                    label={skill.label}
                                    color={skill.color}
                                    onDismiss={() => removeSkill(skill.id)}
                                    dismissLabel={`Remove ${skill.label} skill`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};
