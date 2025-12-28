import { cx } from "@/utils/cx";
import type { ComponentProps, ReactNode } from "react";

// ============================================================================
// Base Skeleton Component
// ============================================================================

export interface SkeletonProps extends Omit<ComponentProps<"div">, "children"> {
	/** Visual variant of the skeleton */
	variant?: "text" | "circular" | "rectangular" | "rounded";
	/** Animation style */
	animation?: "pulse" | "wave" | "none";
	/** Custom width (CSS value or number in px) */
	width?: string | number;
	/** Custom height (CSS value or number in px) */
	height?: string | number;
	/** Additional class names */
	className?: string;
}

export const Skeleton = ({
	variant = "rectangular",
	animation = "pulse",
	width,
	height,
	className,
	...props
}: SkeletonProps) => {
	const getVariantStyles = () => {
		switch (variant) {
			case "text":
				return "rounded h-4";
			case "circular":
				return "rounded-full aspect-square";
			case "rounded":
				return "rounded-lg";
			case "rectangular":
			default:
				return "rounded-md";
		}
	};

	const getAnimationStyles = () => {
		switch (animation) {
			case "pulse":
				return "animate-pulse";
			case "wave":
				return "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";
			case "none":
			default:
				return "";
		}
	};

	const style: React.CSSProperties = {
		...(width !== undefined && {
			width: typeof width === "number" ? `${width}px` : width,
		}),
		...(height !== undefined && {
			height: typeof height === "number" ? `${height}px` : height,
		}),
	};

	return (
		<div
			className={cx(
				// Base styles
				"bg-bg-tertiary",
				// Variant styles
				getVariantStyles(),
				// Animation styles
				getAnimationStyles(),
				// Custom classes
				className
			)}
			style={style}
			aria-busy="true"
			aria-live="polite"
			{...props}
		/>
	);
};

// ============================================================================
// Skeleton Text Component
// ============================================================================

export interface SkeletonTextProps extends Omit<SkeletonProps, "variant"> {
	/** Number of text lines to show */
	lines?: number;
	/** Width of the last line (percentage or CSS value) */
	lastLineWidth?: string | number;
	/** Spacing between lines */
	spacing?: "sm" | "md" | "lg";
}

export const SkeletonText = ({
	lines = 3,
	lastLineWidth = "80%",
	spacing = "md",
	animation = "pulse",
	className,
	...props
}: SkeletonTextProps) => {
	const getSpacingClass = () => {
		switch (spacing) {
			case "sm":
				return "gap-1.5";
			case "lg":
				return "gap-3";
			case "md":
			default:
				return "gap-2";
		}
	};

	return (
		<div className={cx("flex flex-col", getSpacingClass(), className)}>
			{Array.from({ length: lines }).map((_, index) => (
				<Skeleton
					key={index}
					variant="text"
					animation={animation}
					width={index === lines - 1 ? lastLineWidth : "100%"}
					{...props}
				/>
			))}
		</div>
	);
};

// ============================================================================
// Skeleton Avatar Component
// ============================================================================

export interface SkeletonAvatarProps extends Omit<SkeletonProps, "variant"> {
	/** Size of the avatar */
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
	/** Whether to include text beside avatar */
	withText?: boolean;
	/** Number of text lines if withText is true */
	textLines?: 1 | 2;
}

export const SkeletonAvatar = ({
	size = "md",
	withText = false,
	textLines = 2,
	animation = "pulse",
	className,
	...props
}: SkeletonAvatarProps) => {
	const getSizeClass = () => {
		switch (size) {
			case "xs":
				return "size-6";
			case "sm":
				return "size-8";
			case "lg":
				return "size-12";
			case "xl":
				return "size-14";
			case "2xl":
				return "size-16";
			case "md":
			default:
				return "size-10";
		}
	};

	const getTextWidth = () => {
		switch (size) {
			case "xs":
			case "sm":
				return "w-20";
			case "lg":
			case "xl":
			case "2xl":
				return "w-32";
			case "md":
			default:
				return "w-24";
		}
	};

	if (!withText) {
		return (
			<Skeleton
				variant="circular"
				animation={animation}
				className={cx(getSizeClass(), className)}
				{...props}
			/>
		);
	}

	return (
		<div className={cx("flex items-center gap-3", className)}>
			<Skeleton
				variant="circular"
				animation={animation}
				className={getSizeClass()}
			/>
			<div className="flex flex-col gap-2 flex-1">
				<Skeleton
					variant="text"
					animation={animation}
					className={getTextWidth()}
				/>
				{textLines === 2 && (
					<Skeleton
						variant="text"
						animation={animation}
						className="w-16"
					/>
				)}
			</div>
		</div>
	);
};

// ============================================================================
// Skeleton Card Component
// ============================================================================

export interface SkeletonCardProps extends ComponentProps<"div"> {
	/** Animation style */
	animation?: "pulse" | "wave" | "none";
	/** Whether to include an image/thumbnail area */
	withImage?: boolean;
	/** Image aspect ratio */
	imageAspect?: "square" | "video" | "wide";
	/** Number of text lines in card body */
	lines?: number;
	/** Whether to include action buttons at bottom */
	withActions?: boolean;
}

export const SkeletonCard = ({
	animation = "pulse",
	withImage = true,
	imageAspect = "video",
	lines = 3,
	withActions = false,
	className,
	...props
}: SkeletonCardProps) => {
	const getImageAspectClass = () => {
		switch (imageAspect) {
			case "square":
				return "aspect-square";
			case "wide":
				return "aspect-[21/9]";
			case "video":
			default:
				return "aspect-video";
		}
	};

	return (
		<div
			className={cx(
				"border border-border-secondary rounded-xl overflow-hidden bg-bg-primary",
				className
			)}
			{...props}
		>
			{withImage && (
				<Skeleton
					variant="rectangular"
					animation={animation}
					className={cx("w-full rounded-none", getImageAspectClass())}
				/>
			)}
			<div className="p-6 space-y-4">
				<div className="space-y-2">
					<Skeleton variant="text" animation={animation} width="60%" />
					<SkeletonText lines={lines} animation={animation} />
				</div>
				{withActions && (
					<div className="flex gap-2 pt-2">
						<Skeleton
							variant="rounded"
							animation={animation}
							width={100}
							height={36}
						/>
						<Skeleton
							variant="rounded"
							animation={animation}
							width={100}
							height={36}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

// ============================================================================
// Skeleton Table Component
// ============================================================================

export interface SkeletonTableProps extends ComponentProps<"div"> {
	/** Number of rows to show */
	rows?: number;
	/** Number of columns */
	columns?: number;
	/** Animation style */
	animation?: "pulse" | "wave" | "none";
	/** Whether to show table header */
	withHeader?: boolean;
	/** Whether to include avatar in first column */
	withAvatar?: boolean;
}

export const SkeletonTable = ({
	rows = 5,
	columns = 4,
	animation = "pulse",
	withHeader = true,
	withAvatar = false,
	className,
	...props
}: SkeletonTableProps) => {
	return (
		<div
			className={cx(
				"border border-border-secondary rounded-xl overflow-hidden",
				className
			)}
			{...props}
		>
			{withHeader && (
				<div className="bg-bg-secondary px-6 py-3 border-b border-border-secondary">
					<div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
						{Array.from({ length: columns }).map((_, index) => (
							<Skeleton
								key={`header-${index}`}
								variant="text"
								animation={animation}
								width="60%"
							/>
						))}
					</div>
				</div>
			)}
			<div className="divide-y divide-border-secondary">
				{Array.from({ length: rows }).map((_, rowIndex) => (
					<div
						key={`row-${rowIndex}`}
						className="px-6 py-4"
					>
						<div className="grid gap-4 items-center" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
							{Array.from({ length: columns }).map((_, colIndex) => {
								// First column with avatar
								if (colIndex === 0 && withAvatar) {
									return (
										<SkeletonAvatar
											key={`cell-${rowIndex}-${colIndex}`}
											size="sm"
											withText
											textLines={1}
											animation={animation}
										/>
									);
								}
								// Regular cells
								return (
									<Skeleton
										key={`cell-${rowIndex}-${colIndex}`}
										variant="text"
										animation={animation}
										width={colIndex === columns - 1 ? "40%" : "70%"}
									/>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
