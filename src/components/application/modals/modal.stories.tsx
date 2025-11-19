import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Dialog, DialogTrigger, Modal, ModalOverlay } from "./modal";

const meta: Meta<typeof Modal> = {
    title: "Patterns/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
    render: () => (
        <DialogTrigger>
            <Button>Open Modal</Button>
            <ModalOverlay>
                <Modal className="max-w-md">
                    <Dialog>
                        <div className="flex flex-col gap-4 rounded-xl bg-primary p-6 shadow-xl ring-1 ring-secondary_alt">
                            <h2 className="text-xl font-semibold text-primary">Modal Title</h2>
                            <p className="text-md text-secondary">
                                This is a basic modal dialog. Click outside or press Escape to close.
                            </p>
                            <div className="flex justify-end gap-3">
                                <Button color="secondary">Cancel</Button>
                                <Button>Confirm</Button>
                            </div>
                        </div>
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    ),
};

export const Controlled: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>Open Controlled Modal</Button>
                <ModalOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
                    <Modal className="max-w-lg">
                        <Dialog>
                            <div className="flex flex-col gap-4 rounded-xl bg-primary p-6 shadow-xl ring-1 ring-secondary_alt">
                                <h2 className="text-xl font-semibold text-primary">Controlled Modal</h2>
                                <p className="text-md text-secondary">
                                    This modal is controlled by external state. You can programmatically open and close it.
                                </p>
                                <div className="flex justify-end gap-3">
                                    <Button color="secondary" onPress={() => setIsOpen(false)}>
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </Dialog>
                    </Modal>
                </ModalOverlay>
            </>
        );
    },
};

export const LargeContent: Story = {
    render: () => (
        <DialogTrigger>
            <Button>Open Large Modal</Button>
            <ModalOverlay>
                <Modal className="max-w-2xl">
                    <Dialog>
                        <div className="flex flex-col gap-4 rounded-xl bg-primary p-6 shadow-xl ring-1 ring-secondary_alt">
                            <h2 className="text-xl font-semibold text-primary">Large Modal</h2>
                            <div className="max-h-96 overflow-y-auto">
                                <p className="text-md text-secondary">
                                    This modal contains a lot of content. Scroll to see more.
                                </p>
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <p key={i} className="mt-2 text-sm text-tertiary">
                                        Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                ))}
                            </div>
                            <div className="flex justify-end gap-3">
                                <Button color="secondary">Cancel</Button>
                                <Button>Accept</Button>
                            </div>
                        </div>
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    ),
};
