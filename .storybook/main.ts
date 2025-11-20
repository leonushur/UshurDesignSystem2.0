import { dirname, join } from "path";
import { fileURLToPath } from "url";
import type { StorybookConfig } from "@storybook/react-vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@chromatic-com/storybook", "@storybook/addon-a11y", "@storybook/addon-docs", "@storybook/addon-vitest"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: true,
        defaultName: "Documentation",
    },
    core: {
        disableTelemetry: true, // Prevent external lookups
    },
    viteFinal: async (config) => {
        config.resolve = config.resolve ?? {};
        config.resolve.alias = {
            ...(config.resolve.alias ?? {}),
            "@": join(__dirname, "../src"),
        };
        
        // Prevent module resolution from traversing parent directories
        config.resolve.preserveSymlinks = true;
        
        // Ensure @untitledui/icons is pre-bundled to avoid resolution issues
        config.optimizeDeps = config.optimizeDeps ?? {};
        config.optimizeDeps.include = [...(config.optimizeDeps.include ?? []), "@untitledui/file-icons"];

        return config;
    },
};

export default config;