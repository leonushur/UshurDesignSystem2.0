import { readFile } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import type { StorybookConfig } from "@storybook/react-vite";
import { compile } from "@storybook/mdx2-csf";
import { loadCsf } from "storybook/internal/csf-tools";

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
    experimental_indexers: async (existing = []) => [
        {
            test: /\.mdx$/,
            createIndex: async (fileName, options) => {
                const code = await readFile(fileName, "utf-8");
                const compiled = await compile(code, { skipCsf: false });
                const csf = loadCsf(compiled, { ...options, fileName });
                return csf.parse().indexInputs;
            },
        },
        ...existing,
    ],
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