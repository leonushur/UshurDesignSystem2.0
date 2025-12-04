import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MessageBubble, MessageList, MessageInput, type Message } from "./messaging";

const meta: Meta<typeof MessageList> = {
    title: "Application/Messaging",
    component: MessageList,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MessageList>;

const sampleMessages: Message[] = [
    {
        id: "1",
        sender: "Alice Johnson",
        content: "Hey! How are you doing?",
        timestamp: new Date(Date.now() - 3600000),
        isCurrentUser: false,
        status: "read",
    },
    {
        id: "2",
        sender: "You",
        content: "I'm doing great, thanks! How about you?",
        timestamp: new Date(Date.now() - 3500000),
        isCurrentUser: true,
        status: "read",
    },
    {
        id: "3",
        sender: "Alice Johnson",
        content: "Pretty good! I wanted to share this document with you.",
        timestamp: new Date(Date.now() - 3400000),
        isCurrentUser: false,
        status: "read",
        attachments: [
            {
                name: "Project_Proposal.pdf",
                url: "#",
                type: "pdf",
            },
        ],
    },
    {
        id: "4",
        sender: "You",
        content: "Thanks! I'll review it and get back to you.",
        timestamp: new Date(Date.now() - 3300000),
        isCurrentUser: true,
        status: "delivered",
    },
    {
        id: "5",
        sender: "Alice Johnson",
        content: "Perfect! Let me know if you have any questions.",
        timestamp: new Date(Date.now() - 1800000),
        isCurrentUser: false,
        status: "read",
    },
    {
        id: "6",
        sender: "You",
        content: "Will do!",
        timestamp: new Date(Date.now() - 1700000),
        isCurrentUser: true,
        status: "read",
    },
];

const HeaderComponent = () => (
    <div className="flex items-center gap-3 p-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-secondary text-fg-brand-primary">
            A
        </div>
        <div className="flex-1">
            <h3 className="font-semibold text-fg-primary">Alice Johnson</h3>
            <p className="text-sm text-fg-tertiary">Active now</p>
        </div>
    </div>
);

export const Default: Story = {
    args: {
        messages: sampleMessages,
        showAvatars: true,
        showTimestamps: true,
        header: <HeaderComponent />,
        input: <MessageInput placeholder="Type a message..." />,
    },
    render: (args) => (
        <div className="h-[600px] max-w-2xl mx-auto border border-border-secondary rounded-xl overflow-hidden">
            <MessageList {...args} />
        </div>
    ),
};

export const WithoutAvatars: Story = {
    args: {
        messages: sampleMessages,
        showAvatars: false,
        showTimestamps: true,
        input: <MessageInput />,
    },
    render: (args) => (
        <div className="h-[600px] max-w-2xl mx-auto border border-border-secondary rounded-xl overflow-hidden">
            <MessageList {...args} />
        </div>
    ),
};

export const WithoutTimestamps: Story = {
    args: {
        messages: sampleMessages,
        showAvatars: true,
        showTimestamps: false,
        input: <MessageInput />,
    },
    render: (args) => (
        <div className="h-[600px] max-w-2xl mx-auto border border-border-secondary rounded-xl overflow-hidden">
            <MessageList {...args} />
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const InteractiveExample = () => {
            const [messages, setMessages] = useState<Message[]>(sampleMessages);

            const handleSend = (content: string) => {
                const newMessage: Message = {
                    id: String(Date.now()),
                    sender: "You",
                    content,
                    timestamp: new Date(),
                    isCurrentUser: true,
                    status: "sent",
                };
                setMessages([...messages, newMessage]);
            };

            return (
                <div className="h-[600px] max-w-2xl mx-auto border border-border-secondary rounded-xl overflow-hidden">
                    <MessageList
                        messages={messages}
                        showAvatars={true}
                        showTimestamps={true}
                        header={<HeaderComponent />}
                        input={<MessageInput onSend={handleSend} />}
                    />
                </div>
            );
        };

        return <InteractiveExample />;
    },
};

export const SingleMessageBubble: StoryObj<typeof MessageBubble> = {
    render: () => (
        <div className="space-y-4 p-4">
            <MessageBubble
                message={{
                    id: "1",
                    sender: "Alice",
                    content: "This is a received message",
                    timestamp: new Date(),
                    isCurrentUser: false,
                    status: "read",
                }}
            />
            <MessageBubble
                message={{
                    id: "2",
                    sender: "You",
                    content: "This is a sent message",
                    timestamp: new Date(),
                    isCurrentUser: true,
                    status: "delivered",
                }}
            />
        </div>
    ),
};

const groupChatMessages: Message[] = [
    {
        id: "1",
        sender: "Alice Johnson",
        content: "Hey everyone! Meeting starts in 5 minutes.",
        timestamp: new Date(Date.now() - 600000),
        isCurrentUser: false,
    },
    {
        id: "2",
        sender: "Bob Smith",
        content: "Thanks for the reminder!",
        timestamp: new Date(Date.now() - 540000),
        isCurrentUser: false,
    },
    {
        id: "3",
        sender: "You",
        content: "I'll be there",
        timestamp: new Date(Date.now() - 480000),
        isCurrentUser: true,
        status: "read",
    },
    {
        id: "4",
        sender: "Carol Williams",
        content: "Can someone share the agenda?",
        timestamp: new Date(Date.now() - 420000),
        isCurrentUser: false,
    },
    {
        id: "5",
        sender: "Alice Johnson",
        content: "Here's the agenda for today's meeting.",
        timestamp: new Date(Date.now() - 360000),
        isCurrentUser: false,
        attachments: [
            {
                name: "Meeting_Agenda.docx",
                url: "#",
            },
        ],
    },
];

export const GroupChat: Story = {
    args: {
        messages: groupChatMessages,
        showAvatars: true,
        showTimestamps: true,
        header: (
            <div className="flex items-center gap-3 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-bg-brand-secondary text-fg-brand-primary">
                    T
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-fg-primary">Team Chat</h3>
                    <p className="text-sm text-fg-tertiary">4 members</p>
                </div>
            </div>
        ),
        input: <MessageInput placeholder="Message #team-chat..." />,
    },
    render: (args) => (
        <div className="h-[600px] max-w-2xl mx-auto border border-border-secondary rounded-xl overflow-hidden">
            <MessageList {...args} />
        </div>
    ),
};
