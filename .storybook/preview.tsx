import type { Preview } from "@storybook/react";

import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: "padded",
    },
    decorators: [
        (Story) => (
            <ThemeProvider defaultTheme="light" storageKey="storybook-theme">
                <div className="font-sans text-foreground-primary bg-background-primary">
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export default preview;

