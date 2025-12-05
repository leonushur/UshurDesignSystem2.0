import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as LineIcons from "@untitledui-pro/icons/line";
import * as SolidIcons from "@untitledui-pro/icons/solid";
import * as DuocolorIcons from "@untitledui-pro/icons/duocolor";
import * as DuotoneIcons from "@untitledui-pro/icons/duotone";

type IconExports = Record<string, ComponentType<{ className?: string }>>;
type IconStyle = "line" | "solid" | "duocolor" | "duotone";

const ICON_SETS: Record<IconStyle, IconExports> = {
    line: LineIcons,
    solid: SolidIcons,
    duocolor: DuocolorIcons,
    duotone: DuotoneIcons,
};

const STYLE_OPTIONS: { value: IconStyle; label: string }[] = [
    { value: "line", label: "Line" },
    { value: "solid", label: "Solid" },
    { value: "duocolor", label: "Duocolor" },
    { value: "duotone", label: "Duotone" },
];

const meta: Meta = {
    title: "Foundations/Icons/Icon Browser",
    parameters: {
        layout: "fullscreen",
        previewTabs: {
            "storybook/docs/panel": { hidden: true },
        },
    },
    tags: ["autodocs"],
};

export default meta;

const IconBrowser = () => {
    const [query, setQuery] = useState("");
    const [style, setStyle] = useState<IconStyle>("line");
    const activeIcons = ICON_SETS[style];

    const filteredIcons = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) {
            return Object.entries(activeIcons);
        }

        return Object.entries(activeIcons).filter(([name]) => name.toLowerCase().includes(normalized));
    }, [activeIcons, query]);

    return (
        <div className="min-h-screen space-y-6 bg-primary px-6 py-10">
            <div className="space-y-4 rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex flex-wrap items-center gap-3">
                    <label className="text-sm font-semibold text-secondary">Icon Style</label>
                    <div className="flex flex-wrap gap-2">
                        {STYLE_OPTIONS.map(({ value, label }) => {
                            const isActive = style === value;
                            return (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => setStyle(value)}
                                    className={[
                                        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                                        isActive ? "bg-brand-solid text-white shadow-sm" : "bg-primary text-secondary hover:bg-primary_hover",
                                    ].join(" ")}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <label className="text-sm font-semibold text-secondary" htmlFor="icon-search">
                        SearchMd
                    </label>
                    <input
                        id="icon-search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="SearchMd by icon name…"
                        className="flex-1 rounded-lg border border-primary bg-white px-3 py-2 text-sm text-secondary outline-none focus-visible:ring-2 focus-visible:ring-brand-solid md:max-w-sm"
                    />
                    <span className="text-xs font-semibold text-tertiary">
                        Showing {filteredIcons.length} of {Object.keys(activeIcons).length} icons
                    </span>
                </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
                {filteredIcons.length === 0 ? (
                    <p className="text-sm text-tertiary">No icons found. Try a different term.</p>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredIcons.map(([name, Icon]) => (
                            <div
                                key={`${style}-${name}`}
                                className="flex flex-col gap-3 rounded-xl border border-primary/60 bg-primary px-4 py-5 text-center"
                            >
                                <Icon className="mx-auto size-8 text-brand-solid" />
                                <p className="text-xs font-mono text-secondary">{name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

type Story = StoryObj<typeof IconBrowser>;

export const Gallery: Story = {
    render: () => <IconBrowser />,
};

