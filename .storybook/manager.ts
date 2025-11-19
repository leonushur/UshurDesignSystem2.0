import { themes } from "@storybook/theming";
import type { ManagerConfig } from "@storybook/manager-api";

const managerConfig: ManagerConfig = {
    theme: {
        brandTitle: "Ushur Design System",
        brandUrl: "https://www.ushur.com",
    },
    toolbar: {
        title: { hidden: true },
    },
    globals: {
        backgrounds: {
            values: [
                { name: "Light", value: "#ffffff" },
                { name: "Dark", value: "#0f111b" },
            ],
        },
    },
};

export default managerConfig;

