# ScrollArea - Usage Examples

Quick copy-paste examples for common use cases.

## 1. Simple Vertical List

```tsx
import { ScrollArea } from "@/components/base";

export const UserList = ({ users }) => (
    <ScrollArea maxHeight={400} className="rounded-xl border border-border-primary">
        <div className="divide-y divide-border-secondary">
            {users.map((user) => (
                <div key={user.id} className="p-4 hover:bg-bg-secondary">
                    <div className="font-medium text-fg-primary">{user.name}</div>
                    <div className="text-sm text-fg-secondary">{user.email}</div>
                </div>
            ))}
        </div>
    </ScrollArea>
);
```

## 2. Data Table with Fixed Header

```tsx
import { ScrollArea } from "@/components/base";

export const DataTable = ({ data }) => (
    <ScrollArea maxHeight={500} scrollbarColor="brand">
        <table className="w-full">
            <thead className="sticky top-0 z-10 bg-bg-secondary border-b border-border-primary">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-fg-tertiary">
                        Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-fg-tertiary">
                        Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-fg-tertiary">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-border-secondary">
                {data.map((row) => (
                    <tr key={row.id} className="hover:bg-bg-secondary">
                        <td className="px-6 py-4 text-sm text-fg-primary">{row.name}</td>
                        <td className="px-6 py-4 text-sm text-fg-secondary">{row.email}</td>
                        <td className="px-6 py-4 text-sm text-fg-secondary">{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </ScrollArea>
);
```

## 3. Horizontal Card Carousel

```tsx
import { ScrollArea } from "@/components/base";

export const CardCarousel = ({ items }) => (
    <ScrollArea direction="horizontal" className="pb-4">
        <div className="flex gap-4 p-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="w-72 flex-shrink-0 rounded-xl border border-border-primary bg-bg-primary p-6"
                >
                    <h3 className="mb-2 text-lg font-semibold text-fg-primary">{item.title}</h3>
                    <p className="text-sm text-fg-secondary">{item.description}</p>
                </div>
            ))}
        </div>
    </ScrollArea>
);
```

## 4. Modal Content with Auto-Hide Scrollbars

```tsx
import { ScrollArea } from "@/components/base";
import { Dialog } from "react-aria-components";

export const ContentModal = ({ isOpen, onClose, content }) => (
    <Dialog isOpen={isOpen} onClose={onClose}>
        <div className="rounded-2xl bg-bg-primary p-6 shadow-xl">
            <h2 className="mb-4 text-xl font-semibold text-fg-primary">Details</h2>

            <ScrollArea
                maxHeight="60vh"
                autoHide
                scrollbarColor="brand"
                className="pr-2"
            >
                <div className="prose prose-sm text-fg-secondary">
                    {content}
                </div>
            </ScrollArea>

            <div className="mt-6 flex justify-end gap-3">
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </Dialog>
);
```

## 5. Code Editor with Custom Scrollbars

```tsx
import { ScrollArea } from "@/components/base";

export const CodeEditor = ({ code }) => (
    <div className="rounded-xl border border-border-primary bg-bg-tertiary">
        <div className="border-b border-border-secondary px-4 py-2">
            <span className="text-xs font-medium text-fg-tertiary">index.tsx</span>
        </div>
        <ScrollArea
            maxHeight={400}
            direction="both"
            scrollbarColor="muted"
        >
            <pre className="p-4">
                <code className="text-xs font-mono text-fg-primary">
                    {code}
                </code>
            </pre>
        </ScrollArea>
    </div>
);
```

## 6. Sidebar Navigation with Scroll

```tsx
import { ScrollArea } from "@/components/base";

export const Sidebar = ({ navItems }) => (
    <aside className="w-64 border-r border-border-primary bg-bg-primary">
        <div className="p-4">
            <h2 className="text-lg font-semibold text-fg-primary">Navigation</h2>
        </div>

        <ScrollArea maxHeight="calc(100vh - 80px)" autoHide>
            <nav className="px-2 pb-4">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-fg-secondary hover:bg-bg-secondary"
                    >
                        <item.icon className="size-5" />
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>
        </ScrollArea>
    </aside>
);
```

## 7. Chat Messages

```tsx
import { ScrollArea } from "@/components/base";

export const ChatWindow = ({ messages }) => (
    <div className="flex h-screen flex-col">
        <div className="border-b border-border-primary p-4">
            <h2 className="font-semibold text-fg-primary">Chat</h2>
        </div>

        <ScrollArea className="flex-1 bg-bg-secondary">
            <div className="space-y-4 p-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={msg.isMe ? "ml-auto max-w-xs" : "mr-auto max-w-xs"}
                    >
                        <div
                            className={
                                msg.isMe
                                    ? "rounded-2xl bg-bg-brand-solid px-4 py-2 text-text-primary_on-brand"
                                    : "rounded-2xl bg-bg-primary px-4 py-2 text-fg-primary"
                            }
                        >
                            {msg.text}
                        </div>
                        <div className="mt-1 text-xs text-fg-tertiary">{msg.timestamp}</div>
                    </div>
                ))}
            </div>
        </ScrollArea>

        <div className="border-t border-border-primary p-4">
            <input
                type="text"
                placeholder="Type a message..."
                className="w-full rounded-lg border border-border-primary px-4 py-2"
            />
        </div>
    </div>
);
```

## 8. Product Grid with Two-Way Scroll

```tsx
import { ScrollArea } from "@/components/base";

export const ProductGrid = ({ products }) => (
    <ScrollArea
        direction="both"
        maxHeight="80vh"
        maxWidth="100%"
        scrollbarColor="brand"
    >
        <div className="grid grid-cols-5 gap-4 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="rounded-lg border border-border-primary bg-bg-primary p-4"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="mb-3 aspect-square rounded-lg object-cover"
                    />
                    <h3 className="font-medium text-fg-primary">{product.name}</h3>
                    <p className="text-sm text-fg-secondary">${product.price}</p>
                </div>
            ))}
        </div>
    </ScrollArea>
);
```

## 9. Settings Panel with Sections

```tsx
import { ScrollArea } from "@/components/base";

export const SettingsPanel = ({ sections }) => (
    <div className="mx-auto max-w-4xl">
        <div className="mb-6">
            <h1 className="text-2xl font-bold text-fg-primary">Settings</h1>
        </div>

        <ScrollArea maxHeight="calc(100vh - 200px)" className="pr-2">
            <div className="space-y-8">
                {sections.map((section) => (
                    <section key={section.id} className="rounded-xl border border-border-primary bg-bg-primary p-6">
                        <h2 className="mb-4 text-lg font-semibold text-fg-primary">
                            {section.title}
                        </h2>
                        <div className="space-y-4">
                            {section.settings.map((setting) => (
                                <div key={setting.id} className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-fg-primary">{setting.label}</div>
                                        <div className="text-sm text-fg-secondary">{setting.description}</div>
                                    </div>
                                    <input type="checkbox" checked={setting.enabled} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </ScrollArea>
    </div>
);
```

## 10. File Browser

```tsx
import { ScrollArea } from "@/components/base";

export const FileBrowser = ({ files, folders }) => (
    <div className="h-full rounded-xl border border-border-primary bg-bg-primary">
        <div className="border-b border-border-secondary p-4">
            <h3 className="font-semibold text-fg-primary">Files</h3>
        </div>

        <ScrollArea maxHeight={600} autoHide>
            <div className="p-2">
                {/* Folders */}
                <div className="mb-4">
                    {folders.map((folder) => (
                        <button
                            key={folder.id}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-bg-secondary"
                        >
                            <FolderIcon className="size-5 text-fg-tertiary" />
                            <span className="text-sm font-medium text-fg-primary">{folder.name}</span>
                        </button>
                    ))}
                </div>

                {/* Files */}
                <div>
                    {files.map((file) => (
                        <button
                            key={file.id}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-bg-secondary"
                        >
                            <FileIcon className="size-5 text-fg-tertiary" />
                            <div className="flex-1">
                                <div className="text-sm font-medium text-fg-primary">{file.name}</div>
                                <div className="text-xs text-fg-tertiary">{file.size}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </ScrollArea>
    </div>
);
```

## Tips

1. **Sticky Headers**: Use `sticky top-0` on table headers or section headers
2. **Padding**: Add `pr-2` or `pr-4` to content for spacing from scrollbar
3. **Auto-hide**: Great for modals and overlays where scrollbars are visual clutter
4. **Brand Color**: Use for primary content areas to reinforce brand
5. **Viewport Heights**: Use `maxHeight="80vh"` for responsive full-screen experiences
6. **Both Directions**: Best for grids and tables with many columns
7. **Nested Scrolling**: Works well, but use sparingly for better UX
