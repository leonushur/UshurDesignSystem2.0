import { dirname, join } from "path";
import { fileURLToPath } from "url";
import type { StorybookConfig } from "@storybook/react-vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@chromatic-com/storybook", "@storybook/addon-a11y", "@storybook/addon-docs", "@storybook/addon-vitest"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: true,
        defaultName: "Documentation",
    },
    viteFinal: async (config) => {
        config.resolve = config.resolve ?? {};
        config.resolve.alias = {
            ...(config.resolve.alias ?? {}),
            "@": join(__dirname, "../src"),
        };

        return config;
    },
};

export default config;