import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FileUpload } from "./file-upload-base";

const meta: Meta<typeof FileUpload.DropZone> = {
    title: "Patterns/File Upload",
    component: FileUpload.DropZone,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FileUpload.DropZone>;

export const DropZone: Story = {
    args: {
        hint: "SVG, PNG, JPG or GIF (max. 800x400px)",
        allowsMultiple: true,
    },
};

export const WithProgressBar: Story = {
    render: () => {
        const [files, setFiles] = useState<Array<{ id: string; name: string; size: number; progress: number; failed?: boolean }>>([]);

        const handleDrop = (fileList: FileList) => {
            const newFiles = Array.from(fileList).map((file) => ({
                id: Math.random().toString(),
                name: file.name,
                size: file.size,
                progress: 0,
                failed: false,
            }));
            setFiles((prev) => [...prev, ...newFiles]);

            // Simulate upload progress
            newFiles.forEach((file) => {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    if (progress > 100) {
                        clearInterval(interval);
                        return;
                    }
                    setFiles((prev) =>
                        prev.map((f) => (f.id === file.id ? { ...f, progress } : f))
                    );
                }, 200);
            });
        };

        const handleDelete = (id: string) => {
            setFiles((prev) => prev.filter((f) => f.id !== id));
        };

        return (
            <FileUpload.Root>
                <FileUpload.DropZone
                    hint="SVG, PNG, JPG or GIF (max. 10MB)"
                    allowsMultiple
                    onDropFiles={handleDrop}
                />
                {files.length > 0 && (
                    <FileUpload.List>
                        {files.map((file) => (
                            <FileUpload.ListItemProgressBar
                                key={file.id}
                                name={file.name}
                                size={file.size}
                                progress={file.progress}
                                type="pdf"
                                onDelete={() => handleDelete(file.id)}
                            />
                        ))}
                    </FileUpload.List>
                )}
            </FileUpload.Root>
        );
    },
};

export const WithProgressFill: Story = {
    render: () => {
        const [files, setFiles] = useState<Array<{ id: string; name: string; size: number; progress: number; failed?: boolean }>>([]);

        const handleDrop = (fileList: FileList) => {
            const newFiles = Array.from(fileList).map((file) => ({
                id: Math.random().toString(),
                name: file.name,
                size: file.size,
                progress: 0,
                failed: false,
            }));
            setFiles((prev) => [...prev, ...newFiles]);

            // Simulate upload progress
            newFiles.forEach((file) => {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    if (progress > 100) {
                        clearInterval(interval);
                        return;
                    }
                    setFiles((prev) =>
                        prev.map((f) => (f.id === file.id ? { ...f, progress } : f))
                    );
                }, 200);
            });
        };

        const handleDelete = (id: string) => {
            setFiles((prev) => prev.filter((f) => f.id !== id));
        };

        return (
            <FileUpload.Root>
                <FileUpload.DropZone
                    hint="Upload any file type"
                    allowsMultiple
                    onDropFiles={handleDrop}
                />
                {files.length > 0 && (
                    <FileUpload.List>
                        {files.map((file) => (
                            <FileUpload.ListItemProgressFill
                                key={file.id}
                                name={file.name}
                                size={file.size}
                                progress={file.progress}
                                type="image"
                                onDelete={() => handleDelete(file.id)}
                            />
                        ))}
                    </FileUpload.List>
                )}
            </FileUpload.Root>
        );
    },
};

export const FileStates: Story = {
    render: () => (
        <FileUpload.Root>
            <FileUpload.List>
                <FileUpload.ListItemProgressBar
                    name="document.pdf"
                    size={2400000}
                    progress={45}
                    type="pdf"
                    onDelete={() => {}}
                />
                <FileUpload.ListItemProgressBar
                    name="presentation.pptx"
                    size={5800000}
                    progress={100}
                    type="ppt"
                    onDelete={() => {}}
                />
                <FileUpload.ListItemProgressBar
                    name="failed-upload.docx"
                    size={1200000}
                    progress={30}
                    type="doc"
                    failed
                    onDelete={() => {}}
                    onRetry={() => {}}
                />
            </FileUpload.List>
        </FileUpload.Root>
    ),
};

