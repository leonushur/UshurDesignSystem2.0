# ScrollArea Component

A customizable scroll container with styled scrollbars that match the Ushur Design System.

## Features

- **Custom scrollbar styling** - Matches design system tokens
- **Multiple directions** - Vertical, horizontal, or both
- **Auto-hide option** - Show scrollbars only on hover
- **Color variants** - Default (gray), brand (blue), muted
- **Flexible sizing** - maxHeight and maxWidth with number or string values
- **Cross-browser** - Works on Chrome, Safari, Firefox, Edge
- **Accessible** - Uses native scrolling for keyboard navigation

## Usage

### Basic Vertical Scroll

```tsx
import { ScrollArea } from "@/components/base/scroll-area";

<ScrollArea maxHeight={400}>
    <div className="p-4">
        {/* Long content here */}
    </div>
</ScrollArea>
```

### Horizontal Scroll

```tsx
<ScrollArea direction="horizontal" maxWidth={600}>
    <div className="flex gap-4 p-4">
        <Card />
        <Card />
        <Card />
    </div>
</ScrollArea>
```

### Both Directions

```tsx
<ScrollArea
    direction="both"
    maxHeight={400}
    maxWidth={800}
>
    {/* Wide and tall content */}
</ScrollArea>
```

### Auto-Hide Scrollbars

```tsx
<ScrollArea
    maxHeight={400}
    autoHide
>
    {/* Content - scrollbars appear on hover */}
</ScrollArea>
```

### Brand Color Scrollbars

```tsx
<ScrollArea
    maxHeight={400}
    scrollbarColor="brand"
>
    {/* Content with brand-colored scrollbars */}
</ScrollArea>
```

### With Table (Sticky Header)

```tsx
<ScrollArea maxHeight={400} scrollbarColor="brand">
    <table className="w-full">
        <thead className="sticky top-0 bg-bg-secondary">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {/* Many rows */}
        </tbody>
    </table>
</ScrollArea>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `"vertical" \| "horizontal" \| "both"` | `"vertical"` | Scroll direction |
| `autoHide` | `boolean` | `false` | Show scrollbars only on hover |
| `scrollbarColor` | `"default" \| "brand" \| "muted"` | `"default"` | Scrollbar color variant |
| `maxHeight` | `string \| number` | `undefined` | Maximum height (e.g., `400` or `"50vh"`) |
| `maxWidth` | `string \| number` | `undefined` | Maximum width (e.g., `600` or `"80%"`) |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | - | Content to scroll |

## Browser Support

- **Chrome/Edge** - Custom ::-webkit-scrollbar styles
- **Safari** - Custom ::-webkit-scrollbar styles
- **Firefox** - scrollbar-width and scrollbar-color
- **All browsers** - Fallback to native scrollbars

## Design Tokens

The component uses these design system tokens for colors:

- **Default**: `gray-300` track, `gray-400` thumb (hover: `gray-500`)
- **Brand**: `brand-600` thumb (hover: `brand-700`)
- **Muted**: `gray-200` track, `gray-300` thumb (hover: `gray-400`)

## Accessibility

- Uses native scroll behavior (fully keyboard accessible)
- Screen readers can navigate scrolled content
- Focus management works with overflow content
- Scrollbars are visible by default (auto-hide is opt-in)

## Examples

See the Storybook stories for comprehensive examples:

- Basic vertical/horizontal/both scrolling
- All scrollbar color variants
- Auto-hide behavior
- Custom heights/widths
- Nested scroll areas
- Tables with sticky headers
- Code blocks
- List items

## Notes

- The component applies CSS classes that are styled in `theme.css`
- Numbers for `maxHeight`/`maxWidth` are converted to `px` values
- Strings are passed through as-is (e.g., `"50vh"`, `"100%"`)
- The scrollbar width is 12px on desktop browsers
- Auto-hide uses opacity transitions for smooth appearance
