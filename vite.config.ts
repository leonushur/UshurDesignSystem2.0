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
        preserveSymlinks: true, // Prevent traversing parent directories
    },
    optimizeDeps: {
        include: ["@untitledui/file-icons"],
    },
});
