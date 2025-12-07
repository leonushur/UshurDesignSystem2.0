import { useRef, useState, useEffect, type VideoHTMLAttributes } from "react";
import { PlayCircle, PauseCircle, VolumeMax, VolumeX, Maximize01, Minimize01 } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

export interface VideoPlayerProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "controls"> {
    /** Video source URL */
    src: string;
    /** Poster image URL */
    poster?: string;
    /** Whether to show custom controls */
    showControls?: boolean;
    /** Whether the video should autoplay */
    autoPlay?: boolean;
    /** Whether the video should loop */
    loop?: boolean;
    /** Whether the video should be muted */
    muted?: boolean;
    /** Custom className */
    className?: string;
    /** Aspect ratio */
    aspectRatio?: "video" | "square" | "wide";
}

const aspectRatios = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
};

export const VideoPlayer = ({
    src,
    poster,
    showControls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    className,
    aspectRatio = "video",
    ...props
}: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(muted);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControlsState, setShowControlsState] = useState(true);
    const hideControlsTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleDurationChange = () => setDuration(video.duration);
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => setIsPlaying(false);

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("durationchange", handleDurationChange);
        video.addEventListener("play", handlePlay);
        video.addEventListener("pause", handlePause);
        video.addEventListener("ended", handleEnded);

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("durationchange", handleDurationChange);
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
            video.removeEventListener("ended", handleEnded);
        };
    }, []);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const toggleFullscreen = async () => {
        const video = videoRef.current;
        if (!video) return;

        if (!isFullscreen) {
            await video.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;

        const newTime = parseFloat(e.target.value);
        video.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleMouseMove = () => {
        setShowControlsState(true);
        if (hideControlsTimeoutRef.current) {
            clearTimeout(hideControlsTimeoutRef.current);
        }
        hideControlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) {
                setShowControlsState(false);
            }
        }, 3000);
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div
            className={cx("group relative overflow-hidden rounded-xl bg-black", aspectRatios[aspectRatio], className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                if (isPlaying) setShowControlsState(false);
            }}
        >
            {/* Video element */}
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                className="size-full object-contain"
                onClick={togglePlay}
                {...props}
            />

            {/* Play overlay (when paused) */}
            {!isPlaying && (
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
                    aria-label="Play video"
                >
                    <div className="flex size-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-transform hover:scale-110">
                        <PlayCircle className="size-16 text-gray-900" />
                    </div>
                </button>
            )}

            {/* Custom controls */}
            {showControls && (
                <div
                    className={cx(
                        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300",
                        showControlsState || !isPlaying ? "opacity-100" : "opacity-0",
                    )}
                >
                    {/* Progress bar */}
                    <div className="mb-3">
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full accent-white"
                            style={{
                                background: `linear-gradient(to right, white ${progress}%, rgba(255,255,255,0.3) ${progress}%)`,
                            }}
                        />
                    </div>

                    {/* Controls row */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            {/* Play/Pause button */}
                            <button
                                onClick={togglePlay}
                                className="text-white transition-transform hover:scale-110"
                                aria-label={isPlaying ? "Pause" : "Play"}
                            >
                                {isPlaying ? <PauseCircle className="size-6" /> : <PlayCircle className="size-6" />}
                            </button>

                            {/* Time display */}
                            <div className="text-sm font-medium text-white">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Mute/Unmute button */}
                            <button
                                onClick={toggleMute}
                                className="text-white transition-transform hover:scale-110"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? <VolumeX className="size-6" /> : <VolumeMax className="size-6" />}
                            </button>

                            {/* Fullscreen button */}
                            <button
                                onClick={toggleFullscreen}
                                className="text-white transition-transform hover:scale-110"
                                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                            >
                                {isFullscreen ? <Minimize01 className="size-6" /> : <Maximize01 className="size-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
