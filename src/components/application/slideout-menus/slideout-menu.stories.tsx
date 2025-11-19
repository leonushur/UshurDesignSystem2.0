import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { SlideoutMenu } from "./slideout-menu";

const meta: Meta<typeof SlideoutMenu> = {
    title: "Patterns/Slideout Menu",
    component: SlideoutMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SlideoutMenu>;

export const Basic: Story = {
    render: () => (
        <SlideoutMenu.Trigger>
            <Button>Open Slideout</Button>
            <SlideoutMenu>
                {({ close }) => (
                    <>
                        <SlideoutMenu.Header onClose={close}>
                            <h2 className="text-lg font-semibold text-primary">Slideout Title</h2>
                            <p className="mt-1 text-sm text-tertiary">Additional description goes here</p>
                        </SlideoutMenu.Header>
                        <SlideoutMenu.Content>
                            <div className="flex flex-col gap-4">
                                <p className="text-md text-secondary">
                                    This is a basic slideout menu that slides in from the right side of the screen.
                                </p>
                                <p className="text-sm text-tertiary">
                                    Add your content here. The slideout will overlay the page and can be dismissed by
                                    clicking outside or pressing Escape.
                                </p>
                            </div>
                        </SlideoutMenu.Content>
                        <SlideoutMenu.Footer>
                            <div className="flex justify-end gap-3">
                                <Button color="secondary" onPress={close}>
                                    Cancel
                                </Button>
                                <Button>Save changes</Button>
                            </div>
                        </SlideoutMenu.Footer>
                    </>
                )}
            </SlideoutMenu>
        </SlideoutMenu.Trigger>
    ),
};

export const WithForm: Story = {
    render: () => (
        <SlideoutMenu.Trigger>
            <Button>Edit Profile</Button>
            <SlideoutMenu>
                {({ close }) => (
                    <>
                        <SlideoutMenu.Header onClose={close}>
                            <h2 className="text-lg font-semibold text-primary">Edit Profile</h2>
                            <p className="mt-1 text-sm text-tertiary">Update your personal information</p>
                        </SlideoutMenu.Header>
                        <SlideoutMenu.Content>
                            <div className="flex flex-col gap-5">
                                <Input label="Full Name" placeholder="John Doe" />
                                <Input label="Email" type="email" placeholder="john@example.com" />
                                <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
                                <TextArea label="Bio" placeholder="Tell us about yourself" rows={4} />
                            </div>
                        </SlideoutMenu.Content>
                        <SlideoutMenu.Footer>
                            <div className="flex justify-end gap-3">
                                <Button color="secondary" onPress={close}>
                                    Cancel
                                </Button>
                                <Button onPress={close}>Save changes</Button>
                            </div>
                        </SlideoutMenu.Footer>
                    </>
                )}
            </SlideoutMenu>
        </SlideoutMenu.Trigger>
    ),
};

export const LongContent: Story = {
    render: () => (
        <SlideoutMenu.Trigger>
            <Button>View Details</Button>
            <SlideoutMenu>
                {({ close }) => (
                    <>
                        <SlideoutMenu.Header onClose={close}>
                            <h2 className="text-lg font-semibold text-primary">Terms and Conditions</h2>
                        </SlideoutMenu.Header>
                        <SlideoutMenu.Content>
                            <div className="flex flex-col gap-4">
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <div key={i}>
                                        <h3 className="text-md font-semibold text-secondary">Section {i + 1}</h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </SlideoutMenu.Content>
                        <SlideoutMenu.Footer>
                            <div className="flex justify-end gap-3">
                                <Button color="secondary" onPress={close}>
                                    Decline
                                </Button>
                                <Button onPress={close}>Accept</Button>
                            </div>
                        </SlideoutMenu.Footer>
                    </>
                )}
            </SlideoutMenu>
        </SlideoutMenu.Trigger>
    ),
};

