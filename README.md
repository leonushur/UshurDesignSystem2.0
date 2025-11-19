# Ushur Design System for Vite

This repository hosts the Ushur Design System component library, powered by the Untitled UI React kit and wired into a Vite + Storybook workflow. It provides every available foundation token, component, and complex pattern so product teams can explore, test, and integrate the design system quickly.

## Getting started

First, install dependencies (pnpm, yarn, and npm all work):

```bash
npm install
```

Then run either the Vite app or the Storybook catalog:

```bash
npm run dev          # Vite playground
npm run storybook    # Storybook component explorer
```

The Vite app lives at [http://localhost:5173](http://localhost:5173); Storybook defaults to [http://localhost:6006](http://localhost:6006) (or the next open port).

## Available scripts

- `npm run dev` — Vite development server
- `npm run build` — Type-check + production build
- `npm run preview` — Preview built output
- `npm run storybook` — Launch Storybook with Vite builder
- `npm run build-storybook` — Generate the static Storybook site (outputs to `storybook-static/`)

## Storybook structure

All stories live next to their source under `src/**`. Foundations (color, typography, spacing, icons) live under `Foundations/*`, base components under `Components/*`, and application patterns under `Patterns/*` inside the Storybook sidebar.

Key folders:

- `src/styles/` — Tailwind + CSS variables defining the design tokens
- `src/components/foundations/` — Colors, typography, logos, icons, tokens
- `src/components/base/` — Primitive controls (buttons, inputs, form controls)
- `src/components/application/` — Higher-order components (navigation, tables, pagination, modals)
- `src/components/marketing/` — Marketing navigation and shared assets

## Resources

Ushur Design System leverages the Untitled UI React open-source kit.

- [Untitled UI React documentation](https://www.untitledui.com/react/docs/introduction)
- [Untitled UI Figma library](https://www.untitledui.com/figma)
- [Untitled UI Icons](https://www.untitledui.com/react/resources/icons)

## License

Ushur Design System builds on Untitled UI React components, which are licensed under the MIT license. You may use the components freely in commercial projects; see the [Untitled UI license](https://www.untitledui.com/license) for details.
