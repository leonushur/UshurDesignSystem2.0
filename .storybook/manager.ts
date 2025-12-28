import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

// Ushur Design System brand colors (from theme.css)
const ushurBrand = {
    primary: "#2f80ed", // brand-600
    secondary: "#3a97f7", // brand-500
    dark: "#1968d8", // brand-700
    light: "#ebf3ff", // brand-50
    lightest: "#f5f9ff", // brand-25
};

const ushurTheme = create({
    base: "light",

    // Brand
    brandTitle: "Ushur Design System",
    brandUrl: "?path=/story/welcome-introduction--welcome",
    brandImage: "/ushur-logo-small.svg",
    brandTarget: "_self",

    // Colors
    colorPrimary: ushurBrand.primary,
    colorSecondary: ushurBrand.secondary,

    // UI
    appBg: "#fafbfc",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#e4e7ec",
    appBorderRadius: 8,

    // Typography
    fontBase: '"Proxima Nova", -apple-system, "Segoe UI", "Inter", Roboto, Arial, sans-serif',
    fontCode: 'ui-monospace, "Roboto Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace',

    // Text colors
    textColor: "#101828",
    textInverseColor: "#ffffff",
    textMutedColor: "#667085",

    // Toolbar
    barTextColor: "#667085",
    barHoverColor: ushurBrand.primary,
    barSelectedColor: ushurBrand.primary,
    barBg: "#ffffff",

    // Form colors
    inputBg: "#ffffff",
    inputBorder: "#d0d5dd",
    inputTextColor: "#101828",
    inputBorderRadius: 6,

    // Buttons
    buttonBg: ushurBrand.primary,
    buttonBorder: ushurBrand.primary,

    // Boolean (toggles)
    booleanBg: "#e4e7ec",
    booleanSelectedBg: ushurBrand.primary,
});

addons.setConfig({
    theme: ushurTheme,
    // Load Welcome/Introduction first when visiting Storybook
    initialActive: "sidebar",
    sidebar: {
        showRoots: true,
        collapsedRoots: ["other"],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});
