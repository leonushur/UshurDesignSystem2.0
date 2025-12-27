import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        preserveSymlinks: true,
    },
    optimizeDeps: {
        include: ["@untitledui/file-icons"],
    },
    build: {
        lib: {
            // Multiple entry points for granular imports
            entry: {
                index: path.resolve(__dirname, "src/index.ts"),
                base: path.resolve(__dirname, "src/components/base/index.ts"),
                application: path.resolve(__dirname, "src/components/application/index.ts"),
                primitives: path.resolve(__dirname, "src/components/primitives/index.ts"),
                foundations: path.resolve(__dirname, "src/components/foundations/index.ts"),
                marketing: path.resolve(__dirname, "src/components/marketing/index.ts"),
                "shared-assets": path.resolve(__dirname, "src/components/shared-assets/index.ts"),
                hooks: path.resolve(__dirname, "src/hooks/index.ts"),
                utils: path.resolve(__dirname, "src/utils/index.ts"),
            },
            name: "UshurDesignSystem",
            formats: ["es", "cjs"],
            fileName: (format, entryName) =>
                `${entryName}.${format === "es" ? "js" : "cjs"}`,
        },
        rollupOptions: {
            // Externalize all peer dependencies and heavy libs for smaller bundle
            external: (id) => {
                // Core React
                if (id === "react" || id === "react-dom" || id.startsWith("react/")) return true;
                // React Aria (large accessibility library)
                if (id === "react-aria" || id === "react-aria-components" || id.startsWith("@react-aria/") || id.startsWith("@react-stately/")) return true;
                // All Tiptap packages (rich text editor)
                if (id.startsWith("@tiptap/")) return true;
                // Recharts (charting library)
                if (id === "recharts" || id.startsWith("recharts/")) return true;
                // Motion (animation library)
                if (id === "motion" || id === "framer-motion") return true;
                // React Router
                if (id === "react-router" || id.startsWith("react-router/")) return true;
                // React hotkeys
                if (id === "react-hotkeys-hook") return true;
                return false;
            },
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "jsxRuntime",
                },
                // Preserve module structure for tree-shaking
                preserveModules: false,
            },
        },
        // Generate source maps for debugging
        sourcemap: true,
        // CSS code splitting
        cssCodeSplit: false,
    },
});
