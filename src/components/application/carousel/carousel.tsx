import { useState, type ReactNode, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "@untitledui-pro/icons/line";
import { cx } from "@/utils/cx";

export interface CarouselProps {
    /** Carousel items */
    items: ReactNode[];
    /** Whether to show navigation arrows */
    showArrows?: boolean;
    /** Whether to show navigation dots */
    showDots?: boolean;
    /** Whether to auto-play the carousel */
    autoPlay?: boolean;
    /** Auto-play interval in milliseconds */
    autoPlayInterval?: number;
    /** Whether the carousel should loop */
    loop?: boolean;
    /** Custom className */
    className?: string;
    /** Aspect ratio of the carousel items */
    aspectRatio?: "video" | "square" | "wide" | "portrait";
    /** Animation duration in seconds */
    animationDuration?: number;
}

const aspectRatios = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
};

export const Carousel = ({
    items,
    showArrows = true,
    showDots = true,
    autoPlay = false,
    autoPlayInterval = 5000,
    loop = true,
    className,
    aspectRatio = "video",
    animationDuration = 0.5,
}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = useCallback(() => {
        if (currentIndex === items.length - 1) {
            if (loop) {
                setDirection(1);
                setCurrentIndex(0);
            }
        } else {
            setDirection(1);
            setCurrentIndex((prev) => prev + 1);
        }
    }, [currentIndex, items.length, loop]);

    const handlePrevious = useCallback(() => {
        if (currentIndex === 0) {
            if (loop) {
                setDirection(-1);
                setCurrentIndex(items.length - 1);
            }
        } else {
            setDirection(-1);
            setCurrentIndex((prev) => prev - 1);
        }
    }, [currentIndex, items.length, loop]);

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Auto-play effect
    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(handleNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, handleNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                handlePrevious();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleNext, handlePrevious]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
        }),
    };

    return (
        <div className={cx("relative w-full", className)}>
            {/* Carousel container */}
            <div className={cx("relative overflow-hidden rounded-xl bg-bg-secondary", aspectRatios[aspectRatio])}>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "tween", duration: animationDuration, ease: "easeInOut" },
                            opacity: { duration: animationDuration * 0.6 },
                        }}
                        className="absolute inset-0"
                    >
                        {items[currentIndex]}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {showArrows && items.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevious}
                            disabled={!loop && currentIndex === 0}
                            className={cx(
                                "absolute left-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                            )}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="size-5 text-gray-900" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={!loop && currentIndex === items.length - 1}
                            className={cx(
                                "absolute right-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                            )}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="size-5 text-gray-900" />
                        </button>
                    </>
                )}
            </div>

            {/* Dots navigation */}
            {showDots && items.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={cx(
                                "size-2 rounded-full transition-all",
                                index === currentIndex
                                    ? "w-6 bg-brand-solid"
                                    : "bg-bg-tertiary hover:bg-bg-quaternary",
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === currentIndex}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
