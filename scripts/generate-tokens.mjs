import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const FIGMA_EXPORT_PATH = path.join(ROOT, "figma-export.json");
const THEME_CSS_PATH = path.join(ROOT, "src/styles/theme.css");
const TOKENS_JSON_PATH = path.join(ROOT, "src/stories/tokens.json");

const raw = readFileSync(FIGMA_EXPORT_PATH, "utf-8");
const figma = JSON.parse(raw);

const toCssVar = (token) => `--color-${token.replace(/_/g, "-")}`;

const parseColorValue = (value) => {
    if (typeof value === "string") {
        return value;
    }
    if (value && typeof value === "object" && typeof value.r === "number") {
        const r = Math.round(value.r * 255)
            .toString(16)
            .padStart(2, "0");
        const g = Math.round(value.g * 255)
            .toString(16)
            .padStart(2, "0");
        const b = Math.round(value.b * 255)
            .toString(16)
            .padStart(2, "0");
        return `#${r}${g}${b}`.toUpperCase();
    }
    return null;
};

const colorTokens = {};
const palettes = [];

const paletteFilters = ["Colors/", "Gray", "Brand", "Success", "Warning", "Error", "Blue", "Green", "Violet", "Rose", "Pink", "Fuchsia", "Orange", "Yellow", "Teal", "Cyan", "Moss", "Purple", "Indigo"];

const addColor = (color) => {
    const rawValue = color.values?.Style ?? color.values?.Value ?? color.value;
    const hex = parseColorValue(rawValue);
    if (!hex) return;
    const cssVar = toCssVar(color.token);
    colorTokens[cssVar] = hex;

    const paletteMatch = color.name.match(/(.+)\/(\d+)/);
    if (paletteMatch) {
        const [, paletteName, step] = paletteMatch;
        const shouldInclude = paletteFilters.some((filter) => paletteName.includes(filter));
        if (!shouldInclude) return;
        let palette = palettes.find((p) => p.name === paletteName);
        if (!palette) {
            palette = { name: paletteName, steps: [] };
            palettes.push(palette);
        }
        palette.steps.push({ step, token: cssVar, hex });
    }
};

const collections = figma.collections ?? {};

for (const [, collection] of Object.entries(collections)) {
    const colors = collection?.variables?.colors ?? [];
    colors.forEach(addColor);
}

const styles = figma.styles?.colors ?? [];
styles.forEach((style) => {
    const cssVar = toCssVar(style.token);
    if (!colorTokens[cssVar]) {
        const hex = parseColorValue(style.values?.Style ?? style.value);
        if (hex) {
            colorTokens[cssVar] = hex;
        }
    }
});

palettes.forEach((palette) => {
    palette.steps.sort((a, b) => Number(a.step) - Number(b.step));
});

const tokensJson = { colors: colorTokens, palettes };
writeFileSync(TOKENS_JSON_PATH, JSON.stringify(tokensJson, null, 2));

