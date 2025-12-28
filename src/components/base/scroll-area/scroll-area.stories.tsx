import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";

type ScrollAreaStory = StoryObj<typeof ScrollArea>;
type ScrollAreaMeta = Meta<typeof ScrollArea>;

const meta: ScrollAreaMeta = {
    title: "Components/Base/ScrollArea",
    component: ScrollArea,
    args: {
        direction: "vertical",
        autoHide: false,
        scrollbarColor: "default",
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

// Sample content generators
const generateLongText = () => (
    <div className="p-4">
        <h3 className="mb-4 text-lg font-semibold text-fg-primary">Long Text Content</h3>
        <p className="mb-4 text-sm text-fg-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
        <p className="mb-4 text-sm text-fg-secondary">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
        <p className="mb-4 text-sm text-fg-secondary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className="mb-4 text-sm text-fg-secondary">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p className="mb-4 text-sm text-fg-secondary">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p className="text-sm text-fg-secondary">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur.
        </p>
    </div>
);

const generateListItems = (count = 50) => (
    <div className="p-4">
        <h3 className="mb-4 text-lg font-semibold text-fg-primary">List Items ({count} items)</h3>
        <ul className="space-y-2">
            {Array.from({ length: count }, (_, i) => (
                <li
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-border-secondary bg-bg-secondary px-4 py-2.5"
                >
                    <div className="flex size-8 items-center justify-center rounded-full bg-bg-brand-solid text-sm font-medium text-text-primary_on-brand">
                        {i + 1}
                    </div>
                    <span className="text-sm text-fg-secondary">List item {i + 1}</span>
                </li>
            ))}
        </ul>
    </div>
);

const generateCodeBlock = () => (
    <div className="p-4">
        <h3 className="mb-4 text-lg font-semibold text-fg-primary">Code Example</h3>
        <pre className="rounded-lg bg-bg-tertiary p-4 text-xs font-mono text-fg-primary">
            {`import { ScrollArea } from "@/components/base/scroll-area";

export const MyComponent = () => {
    return (
        <ScrollArea
            maxHeight={400}
            direction="vertical"
            scrollbarColor="brand"
        >
            <div className="p-4">
                {/* Your scrollable content here */}
            </div>
        </ScrollArea>
    );
};

// With auto-hide scrollbars
export const AutoHideExample = () => {
    return (
        <ScrollArea
            maxHeight={300}
            autoHide
        >
            <div className="p-4">
                Long content that scrolls...
                Lorem ipsum dolor sit amet.
            </div>
        </ScrollArea>
    );
};

// Horizontal scrolling
export const HorizontalExample = () => {
    return (
        <ScrollArea
            direction="horizontal"
            maxWidth={600}
        >
            <div className="flex gap-4 p-4">
                <Card />
                <Card />
                <Card />
            </div>
        </ScrollArea>
    );
};`}
        </pre>
    </div>
);

const generateWideContent = () => (
    <div className="p-4">
        <h3 className="mb-4 text-lg font-semibold text-fg-primary">Horizontal Scroll Content</h3>
        <div className="flex gap-4">
            {Array.from({ length: 10 }, (_, i) => (
                <div
                    key={i}
                    className="flex h-32 w-48 flex-shrink-0 items-center justify-center rounded-lg border border-border-primary bg-bg-secondary"
                >
                    <span className="text-sm font-medium text-fg-secondary">Card {i + 1}</span>
                </div>
            ))}
        </div>
    </div>
);

// Stories
export const Default: ScrollAreaStory = {
    render: () => (
        <ScrollArea maxHeight={400} className="rounded-xl border border-border-primary bg-bg-primary">
            {generateLongText()}
        </ScrollArea>
    ),
};

export const VerticalScroll: ScrollAreaStory = {
    name: "Vertical Scroll",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Default Scrollbar</h3>
                <ScrollArea
                    direction="vertical"
                    maxHeight={300}
                    className="rounded-xl border border-border-primary bg-bg-primary"
                >
                    {generateListItems(30)}
                </ScrollArea>
            </div>
        </div>
    ),
};

export const HorizontalScroll: ScrollAreaStory = {
    name: "Horizontal Scroll",
    render: () => (
        <ScrollArea
            direction="horizontal"
            maxWidth={600}
            className="rounded-xl border border-border-primary bg-bg-primary"
        >
            {generateWideContent()}
        </ScrollArea>
    ),
};

export const BothDirections: ScrollAreaStory = {
    name: "Both Directions",
    render: () => (
        <ScrollArea
            direction="both"
            maxHeight={300}
            maxWidth={600}
            className="rounded-xl border border-border-primary bg-bg-primary"
        >
            <div className="p-4">
                <h3 className="mb-4 text-lg font-semibold text-fg-primary">Two-Dimensional Scrolling</h3>
                <div className="flex gap-4">
                    {Array.from({ length: 15 }, (_, i) => (
                        <div
                            key={i}
                            className="flex h-64 w-48 flex-shrink-0 flex-col gap-2 rounded-lg border border-border-primary bg-bg-secondary p-4"
                        >
                            <div className="text-sm font-semibold text-fg-primary">Card {i + 1}</div>
                            <div className="text-xs text-fg-secondary">
                                This card demonstrates both horizontal and vertical scrolling. The container can scroll
                                in both directions to reveal all content.
                            </div>
                            <div className="mt-auto text-xs text-fg-tertiary">Footer content</div>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollArea>
    ),
};

export const ScrollbarColors: ScrollAreaStory = {
    name: "Scrollbar Colors",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Default (Gray)</h3>
                <ScrollArea
                    scrollbarColor="default"
                    maxHeight={200}
                    className="rounded-xl border border-border-primary bg-bg-primary"
                >
                    {generateListItems(20)}
                </ScrollArea>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Brand</h3>
                <ScrollArea
                    scrollbarColor="brand"
                    maxHeight={200}
                    className="rounded-xl border border-border-primary bg-bg-primary"
                >
                    {generateListItems(20)}
                </ScrollArea>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Muted</h3>
                <ScrollArea
                    scrollbarColor="muted"
                    maxHeight={200}
                    className="rounded-xl border border-border-primary bg-bg-primary"
                >
                    {generateListItems(20)}
                </ScrollArea>
            </div>
        </div>
    ),
};

export const AutoHideScrollbars: ScrollAreaStory = {
    name: "Auto-Hide Scrollbars",
    render: () => (
        <div className="space-y-4">
            <p className="text-sm text-fg-secondary">Hover over the scroll area to reveal scrollbars</p>
            <ScrollArea
                autoHide
                maxHeight={300}
                className="rounded-xl border border-border-primary bg-bg-primary"
            >
                {generateLongText()}
            </ScrollArea>
        </div>
    ),
};

export const AutoHideWithBrand: ScrollAreaStory = {
    name: "Auto-Hide with Brand Color",
    render: () => (
        <div className="space-y-4">
            <p className="text-sm text-fg-secondary">
                Combining auto-hide with brand color - hover to see brand-colored scrollbars
            </p>
            <ScrollArea
                autoHide
                scrollbarColor="brand"
                maxHeight={300}
                className="rounded-xl border border-border-primary bg-bg-primary"
            >
                {generateListItems(30)}
            </ScrollArea>
        </div>
    ),
};

export const CustomHeights: ScrollAreaStory = {
    name: "Custom Heights",
    render: () => (
        <div className="space-y-6">
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Height: 200px</h3>
                <ScrollArea
                    maxHeight={200}
                    className="rounded-xl border border-border-primary bg-bg-primary"
                >
                    {generateListItems(15)}
                </ScrollArea>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Height: 400px</h3>
                <ScrollArea
                    maxHeight={400}
                    className="rounded-xl border border-border-primary bg-bg-primary"
                >
                    {generateListItems(30)}
                </ScrollArea>
            </div>
            <div>
                <h3 className="mb-2 text-sm font-semibold text-fg-tertiary">Height: 50vh (Viewport-based)</h3>
                <ScrollArea
                    maxHeight="50vh"
                    className="rounded-xl border border-border-primary bg-bg-primary"
                >
                    {generateListItems(40)}
                </ScrollArea>
            </div>
        </div>
    ),
};

export const WithCodeBlock: ScrollAreaStory = {
    name: "With Code Block",
    render: () => (
        <ScrollArea
            maxHeight={400}
            scrollbarColor="muted"
            className="rounded-xl border border-border-primary bg-bg-primary"
        >
            {generateCodeBlock()}
        </ScrollArea>
    ),
};

export const NestedScrollAreas: ScrollAreaStory = {
    name: "Nested Scroll Areas",
    render: () => (
        <ScrollArea
            maxHeight={400}
            className="rounded-xl border-2 border-border-brand bg-bg-primary p-4"
        >
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-fg-primary">Outer Scroll Area</h3>
                <p className="text-sm text-fg-secondary">
                    This is the outer scroll area. Below is a nested scroll area with horizontal scrolling.
                </p>

                <ScrollArea
                    direction="horizontal"
                    maxWidth={500}
                    scrollbarColor="brand"
                    className="rounded-lg border border-border-secondary bg-bg-secondary"
                >
                    {generateWideContent()}
                </ScrollArea>

                <p className="text-sm text-fg-secondary">More content in the outer scroll area...</p>
                {generateListItems(20)}
            </div>
        </ScrollArea>
    ),
};

export const TableWithScrollArea: ScrollAreaStory = {
    name: "Table with Scroll Area",
    render: () => (
        <ScrollArea
            maxHeight={400}
            scrollbarColor="brand"
            className="rounded-xl border border-border-primary bg-bg-primary"
        >
            <table className="w-full">
                <thead className="sticky top-0 bg-bg-secondary">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-fg-tertiary">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-fg-tertiary">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-fg-tertiary">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-fg-tertiary">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border-secondary">
                    {Array.from({ length: 50 }, (_, i) => (
                        <tr key={i} className="hover:bg-bg-secondary">
                            <td className="px-6 py-4 text-sm font-medium text-fg-primary">User {i + 1}</td>
                            <td className="px-6 py-4 text-sm text-fg-secondary">user{i + 1}@example.com</td>
                            <td className="px-6 py-4 text-sm text-fg-secondary">
                                {i % 3 === 0 ? "Admin" : i % 2 === 0 ? "Editor" : "Viewer"}
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={
                                        i % 2 === 0
                                            ? "inline-flex rounded-full bg-bg-success-primary px-2 py-1 text-xs font-medium text-text-success-primary"
                                            : "inline-flex rounded-full bg-bg-error-primary px-2 py-1 text-xs font-medium text-text-error-primary"
                                    }
                                >
                                    {i % 2 === 0 ? "Active" : "Inactive"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ScrollArea>
    ),
};

export const AllVariants: ScrollAreaStory = {
    name: "All Variants",
    render: () => (
        <div className="space-y-8">
            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Directions</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Vertical</p>
                        <ScrollArea
                            direction="vertical"
                            maxHeight={200}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            {generateListItems(15)}
                        </ScrollArea>
                    </div>
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Horizontal</p>
                        <ScrollArea
                            direction="horizontal"
                            maxWidth={300}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            {generateWideContent()}
                        </ScrollArea>
                    </div>
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Both</p>
                        <ScrollArea
                            direction="both"
                            maxHeight={200}
                            maxWidth={300}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            <div className="flex gap-4 p-4">
                                {Array.from({ length: 8 }, (_, i) => (
                                    <div
                                        key={i}
                                        className="h-48 w-32 flex-shrink-0 rounded-lg border border-border-secondary bg-bg-secondary"
                                    />
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Scrollbar Colors</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Default</p>
                        <ScrollArea
                            scrollbarColor="default"
                            maxHeight={150}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            {generateListItems(12)}
                        </ScrollArea>
                    </div>
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Brand</p>
                        <ScrollArea
                            scrollbarColor="brand"
                            maxHeight={150}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            {generateListItems(12)}
                        </ScrollArea>
                    </div>
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Muted</p>
                        <ScrollArea
                            scrollbarColor="muted"
                            maxHeight={150}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            {generateListItems(12)}
                        </ScrollArea>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="mb-3 text-sm font-semibold text-fg-tertiary">Auto-Hide</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Always Visible</p>
                        <ScrollArea
                            autoHide={false}
                            maxHeight={150}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            {generateListItems(12)}
                        </ScrollArea>
                    </div>
                    <div>
                        <p className="mb-2 text-xs text-fg-tertiary">Auto-Hide (hover to show)</p>
                        <ScrollArea
                            autoHide
                            maxHeight={150}
                            className="rounded-lg border border-border-primary bg-bg-primary"
                        >
                            {generateListItems(12)}
                        </ScrollArea>
                    </div>
                </div>
            </section>
        </div>
    ),
};
