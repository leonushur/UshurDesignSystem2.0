import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer } from "./video-player";

const meta: Meta<typeof VideoPlayer> = {
    title: "Application/Video Player",
    component: VideoPlayer,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

// Using public domain sample videos from pexels.com or similar free sources
const sampleVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const samplePosterUrl = "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217";

export const Default: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: true,
        aspectRatio: "video",
    },
};

export const WithoutControls: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: false,
        aspectRatio: "video",
    },
};

export const AutoPlay: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: true,
        autoPlay: true,
        muted: true, // Browsers require muted for autoplay
        aspectRatio: "video",
    },
};

export const Loop: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: true,
        loop: true,
        aspectRatio: "video",
    },
};

export const SquareAspectRatio: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: true,
        aspectRatio: "square",
    },
};

export const WideAspectRatio: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: true,
        aspectRatio: "wide",
    },
};

export const CustomStyling: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: true,
        aspectRatio: "video",
        className: "max-w-3xl",
    },
};

export const Responsive: Story = {
    args: {
        src: sampleVideoUrl,
        poster: samplePosterUrl,
        showControls: true,
        aspectRatio: "video",
    },
    render: (args) => (
        <div className="w-full max-w-4xl">
            <VideoPlayer {...args} />
        </div>
    ),
};
