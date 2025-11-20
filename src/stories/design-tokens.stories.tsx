import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Meta } from "@storybook/react";
import tokens from "./tokens.json";
const COLOR_VALUE_MAP: Record<string, string> = tokens.colors;

const meta = {
    title: "Foundations/Design Tokens",
    parameters: {
        layout: "padded",
        status: {
            type: "stable",
        },
    },
} satisfies Meta;

export default meta;

// Color palette display component
const toHex = (color: string) => {
    const trimmed = color.trim();
    if (trimmed.startsWith("#")) {
        return trimmed.toUpperCase();
    }

    const rgbMatch = trimmed
        .replace(/rgb(a)?\(/i, "")
        .replace(/\)/, "")
        .split(/[, ]+/)
        .filter(Boolean)
        .map((token) => Number(token));

    if (rgbMatch.length >= 3 && rgbMatch.every((num) => !Number.isNaN(num))) {
        const [r, g, b] = rgbMatch;
        return `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
    }

    return trimmed;
};

const getLuminance = (color: string) => {
    const trimmed = color.trim();
    let r = 255,
        g = 255,
        b = 255;

    if (trimmed.startsWith("#")) {
        const hex = trimmed.replace("#", "");
        if (hex.length === 3) {
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
        } else if (hex.length === 6) {
            r = parseInt(hex.slice(0, 2), 16);
            g = parseInt(hex.slice(2, 4), 16);
            b = parseInt(hex.slice(4, 6), 16);
        }
    } else if (trimmed.startsWith("rgb")) {
        const channels = trimmed
            .replace(/rgb(a)?\(/i, "")
            .replace(")", "")
            .split(/[, ]+/)
            .filter(Boolean)
            .map((token) => Number(token));
        if (channels.length >= 3 && channels.every((num) => !Number.isNaN(num))) {
            [r, g, b] = channels;
        }
    }

    const srgb = [r, g, b].map((channel) => {
        const normalized = channel / 255;
        return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
};

const ColorSwatch = ({ name, value, cssVar }: { name: string; value?: string; cssVar?: string }) => {
    const srcValue = cssVar ? COLOR_VALUE_MAP[cssVar] ?? value : value;
    const [resolvedColor, setResolvedColor] = useState(srcValue ?? "#ffffff");

    useEffect(() => {
        if (!cssVar || typeof window === "undefined") {
            if (srcValue) {
                setResolvedColor(srcValue);
            }
            return;
        }

        const computed = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
        if (computed) {
            setResolvedColor(computed);
        } else if (COLOR_VALUE_MAP[cssVar]) {
            setResolvedColor(COLOR_VALUE_MAP[cssVar]);
        } else if (value) {
            setResolvedColor(value);
        }
    }, [cssVar, srcValue, value]);

    const hexValue = useMemo(() => toHex(resolvedColor), [resolvedColor]);
    const isLight = useMemo(() => getLuminance(resolvedColor) > 0.85, [resolvedColor]);

    const swatchStyle: CSSProperties = {
        backgroundColor: cssVar ? `var(${cssVar})` : resolvedColor,
        boxShadow: isLight ? "inset 0 0 0 1px rgba(15, 23, 42, 0.15)" : undefined,
    };

    return (
    <div className="flex flex-col gap-2">
            <div className="h-16 w-full rounded-lg border border-gray-200 shadow-sm" style={swatchStyle} />
        <div className="text-xs">
            <div className="font-semibold text-gray-900">{name}</div>
                <div className="font-mono text-gray-500 text-[11px] uppercase tracking-wide">{hexValue}</div>
                {cssVar && <div className="font-mono text-gray-400 text-[10px]">{cssVar}</div>}
        </div>
    </div>
    );
};

// Typography sample component
const TypographySample = ({ name, className, description }: { name: string; className: string; description: string }) => (
    <div className="mb-8">
        <div className="mb-2">
            <span className="text-sm font-medium text-gray-900">{name}</span>
            <span className="text-xs text-gray-500 ml-2">• {description}</span>
        </div>
        <div className={className}>
            The quick brown fox jumps over the lazy dog
        </div>
        <div className="mt-1 font-mono text-xs text-gray-400">{className}</div>
    </div>
);

const colorGroups = tokens.palettes.map((palette) => ({
    title: palette.name,
    description: "",
    colors: palette.steps.map((step) => ({
        name: `${palette.name} ${step.step}`,
        cssVar: step.token,
    })),
}));

export const Colors = () => {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold mb-4">Color System</h1>
            <p className="text-gray-600 mb-8 text-lg">
                The Ushur Design System preserves the full Untitled UI palette for parity across components. Brand hues are updated
                to Royal Blue, while all supporting neutrals and accent palettes remain unchanged.
            </p>

            <div className="space-y-12">
                {colorGroups.map((group) => (
                    <div key={group.title}>
                        <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
                        {group.description && <p className="text-gray-600 mb-6">{group.description}</p>}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                            {group.colors.map((color) => (
                                <ColorSwatch key={`${group.title}-${color.name}`} {...color} />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Usage Guidelines */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Usage Guidelines</h2>
                    <div className="bg-gray-50 rounded-lg p-6">
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• <strong>Primary actions:</strong> Use Brand 600 (bg-brand-solid)</li>
                            <li>• <strong>Hover states:</strong> Use Brand 700 (bg-brand-solid_hover)</li>
                            <li>• <strong>Text on brand:</strong> Use white or Brand 200 for proper contrast</li>
                            <li>• <strong>Borders:</strong> Use Gray 300 for light mode, automatically inverted in dark</li>
                            <li>• <strong>Backgrounds:</strong> Use Gray 25-100 for subtle backgrounds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Typography = () => {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold mb-4">Typography System</h1>
            <p className="text-gray-600 mb-8 text-lg">
                The Ushur Design System uses Proxima Nova as the primary font family, with a carefully crafted type scale for consistent hierarchy.
            </p>

            <div className="space-y-12">
                {/* Display Sizes */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Display</h2>
                    <TypographySample 
                        name="Display 2XL" 
                        className="text-display-2xl"
                        description="72px • Hero sections"
                    />
                    <TypographySample 
                        name="Display XL" 
                        className="text-display-xl"
                        description="60px • Page headers"
                    />
                    <TypographySample 
                        name="Display Large" 
                        className="text-display-lg"
                        description="48px • Section headers"
                    />
                    <TypographySample 
                        name="Display Medium" 
                        className="text-display-md"
                        description="36px • Card headers"
                    />
                    <TypographySample 
                        name="Display Small" 
                        className="text-display-sm"
                        description="30px • Subsection headers"
                    />
                    <TypographySample 
                        name="Display XS" 
                        className="text-display-xs"
                        description="24px • Component headers"
                    />
                </div>

                {/* Text Sizes */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Text</h2>
                    <TypographySample 
                        name="Text XL" 
                        className="text-xl"
                        description="20px • Large body text"
                    />
                    <TypographySample 
                        name="Text Large" 
                        className="text-lg"
                        description="18px • Emphasized body"
                    />
                    <TypographySample 
                        name="Text Medium" 
                        className="text-md"
                        description="16px • Default body"
                    />
                    <TypographySample 
                        name="Text Small" 
                        className="text-sm"
                        description="14px • Secondary text"
                    />
                    <TypographySample 
                        name="Text XS" 
                        className="text-xs"
                        description="12px • Captions & labels"
                    />
                </div>

                {/* Font Weights */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Font Weights</h2>
                    <div className="space-y-4">
                        <div className="font-thin text-lg">Thin (100)</div>
                        <div className="font-extralight text-lg">Extra Light (200)</div>
                        <div className="font-light text-lg">Light (300)</div>
                        <div className="font-normal text-lg">Regular (400)</div>
                        <div className="font-medium text-lg">Medium (500)</div>
                        <div className="font-semibold text-lg">Semibold (600)</div>
                        <div className="font-bold text-lg">Bold (700)</div>
                        <div className="font-extrabold text-lg">Extra Bold (800)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Spacing = () => {
    const spacingValues = [
        { name: "0", value: "0px", cssVar: "--spacing-0" },
        { name: "0.5", value: "2px", cssVar: "--spacing-0.5" },
        { name: "1", value: "4px", cssVar: "--spacing-1" },
        { name: "1.5", value: "6px", cssVar: "--spacing-1.5" },
        { name: "2", value: "8px", cssVar: "--spacing-2" },
        { name: "2.5", value: "10px", cssVar: "--spacing-2.5" },
        { name: "3", value: "12px", cssVar: "--spacing-3" },
        { name: "3.5", value: "14px", cssVar: "--spacing-3.5" },
        { name: "4", value: "16px", cssVar: "--spacing-4" },
        { name: "5", value: "20px", cssVar: "--spacing-5" },
        { name: "6", value: "24px", cssVar: "--spacing-6" },
        { name: "7", value: "28px", cssVar: "--spacing-7" },
        { name: "8", value: "32px", cssVar: "--spacing-8" },
        { name: "9", value: "36px", cssVar: "--spacing-9" },
        { name: "10", value: "40px", cssVar: "--spacing-10" },
        { name: "11", value: "44px", cssVar: "--spacing-11" },
        { name: "12", value: "48px", cssVar: "--spacing-12" },
        { name: "14", value: "56px", cssVar: "--spacing-14" },
        { name: "16", value: "64px", cssVar: "--spacing-16" },
        { name: "20", value: "80px", cssVar: "--spacing-20" },
        { name: "24", value: "96px", cssVar: "--spacing-24" },
    ];

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold mb-4">Spacing System</h1>
            <p className="text-gray-600 mb-8 text-lg">
                Consistent spacing creates visual rhythm and hierarchy. Our spacing system is based on a 4px unit.
            </p>

            <div className="space-y-4">
                {spacingValues.map((space) => (
                    <div key={space.name} className="flex items-center gap-4">
                        <div className="w-16 text-sm font-medium text-gray-900">{space.name}</div>
                        <div className="flex-1">
                            <div 
                                className="bg-brand-solid rounded" 
                                style={{ height: "24px", width: space.value }}
                            />
                        </div>
                        <div className="w-20 text-sm text-gray-500 text-right">{space.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Shadows = () => {
    const shadows = [
        { name: "XS", cssVar: "--shadow-xs", description: "Subtle elevation" },
        { name: "SM", cssVar: "--shadow-sm", description: "Small cards" },
        { name: "MD", cssVar: "--shadow-md", description: "Default cards" },
        { name: "LG", cssVar: "--shadow-lg", description: "Modal dialogs" },
        { name: "XL", cssVar: "--shadow-xl", description: "Dropdown menus" },
        { name: "2XL", cssVar: "--shadow-2xl", description: "Popovers" },
        { name: "3XL", cssVar: "--shadow-3xl", description: "High elevation" },
    ];

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold mb-4">Shadow System</h1>
            <p className="text-gray-600 mb-8 text-lg">
                Shadows create depth and hierarchy in the interface. Use them to indicate interactive elements or separate content layers.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
                {shadows.map((shadow) => (
                    <div key={shadow.name}>
                        <div className="mb-2">
                            <span className="text-sm font-medium text-gray-900">{shadow.name}</span>
                            <span className="text-xs text-gray-500 ml-2">• {shadow.description}</span>
                        </div>
                        <div 
                            className="bg-white rounded-lg p-6 flex items-center justify-center"
                            style={{ boxShadow: `var(${shadow.cssVar})` }}
                        >
                            <span className="text-sm text-gray-600 font-mono">{shadow.cssVar}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const BorderRadius = () => {
    const radiusValues = [
        { name: "None", value: "0px", cssVar: "--radius-none" },
        { name: "XS", value: "2px", cssVar: "--radius-xs" },
        { name: "SM", value: "4px", cssVar: "--radius-sm" },
        { name: "Default", value: "6px", cssVar: "--radius-md" },
        { name: "LG", value: "8px", cssVar: "--radius-lg" },
        { name: "XL", value: "12px", cssVar: "--radius-xl" },
        { name: "2XL", value: "16px", cssVar: "--radius-2xl" },
        { name: "3XL", value: "24px", cssVar: "--radius-3xl" },
        { name: "Full", value: "9999px", cssVar: "--radius-full" },
    ];

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold mb-4">Border Radius</h1>
            <p className="text-gray-600 mb-8 text-lg">
                Border radius values create consistent rounded corners throughout the interface.
            </p>

            <div className="grid gap-6 grid-cols-3 sm:grid-cols-5">
                {radiusValues.map((radius) => (
                    <div key={radius.name} className="text-center">
                        <div 
                            className="bg-brand-solid h-20 w-full mb-2"
                            style={{ borderRadius: radius.value }}
                        />
                        <div className="text-sm font-medium text-gray-900">{radius.name}</div>
                        <div className="text-xs text-gray-500">{radius.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ComponentStatus = () => {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold mb-4">Component Status System</h1>
            <p className="text-gray-600 mb-8 text-lg">
                Components in the Ushur Design System are tagged with status badges to indicate their stability and readiness for use.
            </p>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded">
                        Stable
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Stable Components</h3>
                        <p className="text-gray-600">
                            These components are production-ready and follow our design system guidelines. 
                            They have been thoroughly tested and are safe to use in production applications.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded">
                        Experimental
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Experimental Components</h3>
                        <p className="text-gray-600">
                            These components are still being developed and may change significantly. 
                            Use them to preview upcoming features, but be prepared for breaking changes.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded">
                        Deprecated
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Deprecated Components</h3>
                        <p className="text-gray-600">
                            These components are being phased out and will be removed in future versions. 
                            Migrate to the recommended alternatives as soon as possible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Using Status in Stories</h2>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                    <code>{`export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        status: {
            type: "stable", // or "experimental" | "deprecated"
        },
    },
} satisfies Meta<typeof Button>;`}</code>
                </pre>
            </div>
        </div>
    );
};
