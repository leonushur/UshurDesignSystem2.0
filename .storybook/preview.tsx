import type { Decorator, Preview } from "@storybook/react";
import { useEffect } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

// Enhanced theme wrapper with proper TypeScript types
const ThemeWrapper: Decorator = (Story, context) => {
    const theme = context.globals.theme ?? "light";
    
    // Apply theme class directly to document
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark-mode");
        if (theme === "dark") {
            root.classList.add("dark-mode");
        } else {
            root.classList.add("light");
        }
    }, [theme]);
    
    return (
        <ThemeProvider defaultTheme={theme} storageKey="storybook-theme">
            <div className="font-sans text-primary bg-primary min-h-screen transition-colors">
                <Story />
            </div>
        </ThemeProvider>
    );
};

const preview: Preview = {
    // Story sorting to show Welcome/Introduction first
    options: {
        storySort: {
            order: ["Welcome", ["Introduction"], "Foundations", "Components", "Application", "Marketing", "*"],
        },
    },
    globalTypes: {
        theme: {
            name: "Theme",
            description: "Global theme for components",
            defaultValue: "light",
            toolbar: {
                icon: "mirror",
                items: [
                    { value: "light", title: "Light", icon: "sun" },
                    { value: "dark", title: "Dark", icon: "moon" },
                ],
                dynamicTitle: true,
                showName: true,
            },
        },
    },
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            expanded: true,
            sort: "requiredFirst",
        },
        docs: {
            toc: {
                contentsSelector: ".sbdocs-content",
                headingSelector: "h1, h2, h3",
                ignoreSelector: "#primary",
                title: "Table of Contents",
                disable: false,
            },
        },
        layout: "padded",
        // Viewport configurations for responsive testing
        viewport: {
            viewports: {
                mobile: {
                    name: "Mobile",
                    styles: {
                        width: "375px",
                        height: "667px",
                    },
                },
                tablet: {
                    name: "Tablet",
                    styles: {
                        width: "768px",
                        height: "1024px",
                    },
                },
                laptop: {
                    name: "Laptop",
                    styles: {
                        width: "1366px",
                        height: "768px",
                    },
                },
                desktop: {
                    name: "Desktop",
                    styles: {
                        width: "1920px",
                        height: "1080px",
                    },
                },
            },
        },
        // Component status badges support
        status: {
            statuses: {
                stable: {
                    background: "#10b981",
                    color: "#ffffff",
                    description: "This component is stable and ready for production use.",
                },
                experimental: {
                    background: "#f59e0b",
                    color: "#ffffff",
                    description: "This component is experimental and may change.",
                },
                deprecated: {
                    background: "#ef4444",
                    color: "#ffffff",
                    description: "This component is deprecated and will be removed in a future version.",
                },
            },
        },
        // Enhanced backgrounds for better component visualization
        backgrounds: {
            default: "light",
            values: [
                { name: "light", value: "#ffffff" },
                { name: "dark", value: "#0c0e12" },
                { name: "gray", value: "#f3f4f6" },
                { name: "brand", value: "#2f80ed" },
            ],
        },
    },
    decorators: [ThemeWrapper],
    // Tags for organizing stories
    tags: ["autodocs"],
};

export default preview;