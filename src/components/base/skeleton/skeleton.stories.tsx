import type { Meta, StoryObj } from "@storybook/react";
import {
	Skeleton,
	SkeletonText,
	SkeletonAvatar,
	SkeletonCard,
	SkeletonTable,
} from "./skeleton";

type SkeletonStory = StoryObj<typeof Skeleton>;
type SkeletonMeta = Meta<typeof Skeleton>;

const meta: SkeletonMeta = {
	title: "Components/Base/Skeleton",
	component: Skeleton,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;

// ============================================================================
// Basic Shapes
// ============================================================================

export const Variants: SkeletonStory = {
	name: "Variants",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Text</h3>
				<Skeleton variant="text" width={200} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Rectangular</h3>
				<Skeleton variant="rectangular" width={200} height={100} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Rounded</h3>
				<Skeleton variant="rounded" width={200} height={100} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Circular</h3>
				<Skeleton variant="circular" className="size-20" />
			</div>
		</div>
	),
};

export const Animations: SkeletonStory = {
	name: "Animations",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Pulse (Default)</h3>
				<Skeleton animation="pulse" width={300} height={100} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Wave</h3>
				<Skeleton animation="wave" width={300} height={100} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">None</h3>
				<Skeleton animation="none" width={300} height={100} />
			</div>
		</div>
	),
};

export const CustomSizes: SkeletonStory = {
	name: "Custom Sizes",
	render: () => (
		<div className="space-y-6">
			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Custom Width & Height (pixels)
				</h3>
				<Skeleton width={400} height={60} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Custom Width & Height (CSS values)
				</h3>
				<Skeleton width="100%" height="120px" />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Responsive Width</h3>
				<Skeleton width="50%" height={80} className="min-w-[200px]" />
			</div>
		</div>
	),
};

// ============================================================================
// Text Skeletons
// ============================================================================

export const TextSkeletons: StoryObj<typeof SkeletonText> = {
	name: "Text Skeletons",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Single Line</h3>
				<SkeletonText lines={1} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Multiple Lines (Default)</h3>
				<SkeletonText lines={3} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Custom Last Line Width</h3>
				<SkeletonText lines={4} lastLineWidth="60%" />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Spacing Variants</h3>
				<div className="grid grid-cols-3 gap-6">
					<div>
						<p className="text-xs text-fg-tertiary mb-2">Small Spacing</p>
						<SkeletonText lines={3} spacing="sm" />
					</div>
					<div>
						<p className="text-xs text-fg-tertiary mb-2">Medium Spacing</p>
						<SkeletonText lines={3} spacing="md" />
					</div>
					<div>
						<p className="text-xs text-fg-tertiary mb-2">Large Spacing</p>
						<SkeletonText lines={3} spacing="lg" />
					</div>
				</div>
			</div>
		</div>
	),
};

// ============================================================================
// Avatar Skeletons
// ============================================================================

export const AvatarSkeletons: StoryObj<typeof SkeletonAvatar> = {
	name: "Avatar Skeletons",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Avatar Only - Sizes</h3>
				<div className="flex items-end gap-4">
					<SkeletonAvatar size="xs" />
					<SkeletonAvatar size="sm" />
					<SkeletonAvatar size="md" />
					<SkeletonAvatar size="lg" />
					<SkeletonAvatar size="xl" />
					<SkeletonAvatar size="2xl" />
				</div>
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Avatar with Text (Single Line)
				</h3>
				<div className="space-y-4">
					<SkeletonAvatar size="sm" withText textLines={1} />
					<SkeletonAvatar size="md" withText textLines={1} />
					<SkeletonAvatar size="lg" withText textLines={1} />
				</div>
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Avatar with Text (Two Lines)
				</h3>
				<div className="space-y-4">
					<SkeletonAvatar size="sm" withText textLines={2} />
					<SkeletonAvatar size="md" withText textLines={2} />
					<SkeletonAvatar size="lg" withText textLines={2} />
				</div>
			</div>
		</div>
	),
};

// ============================================================================
// Card Skeletons
// ============================================================================

export const CardSkeletons: StoryObj<typeof SkeletonCard> = {
	name: "Card Skeletons",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Basic Card (with image)
				</h3>
				<div className="max-w-sm">
					<SkeletonCard />
				</div>
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Card without Image
				</h3>
				<div className="max-w-sm">
					<SkeletonCard withImage={false} />
				</div>
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Image Aspect Ratios
				</h3>
				<div className="grid grid-cols-3 gap-4">
					<SkeletonCard imageAspect="square" lines={2} />
					<SkeletonCard imageAspect="video" lines={2} />
					<SkeletonCard imageAspect="wide" lines={2} />
				</div>
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Card with Actions
				</h3>
				<div className="max-w-sm">
					<SkeletonCard withActions />
				</div>
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Custom Lines</h3>
				<div className="grid grid-cols-2 gap-4">
					<SkeletonCard lines={2} />
					<SkeletonCard lines={5} />
				</div>
			</div>
		</div>
	),
};

// ============================================================================
// Table Skeletons
// ============================================================================

export const TableSkeletons: StoryObj<typeof SkeletonTable> = {
	name: "Table Skeletons",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">Basic Table</h3>
				<SkeletonTable rows={5} columns={4} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Table with Avatars
				</h3>
				<SkeletonTable rows={4} columns={4} withAvatar />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Table without Header
				</h3>
				<SkeletonTable rows={3} columns={3} withHeader={false} />
			</div>

			<div className="space-y-3">
				<h3 className="text-sm font-semibold text-fg-tertiary">
					Compact Table (fewer rows)
				</h3>
				<SkeletonTable rows={3} columns={5} />
			</div>
		</div>
	),
};

// ============================================================================
// Real-World Examples
// ============================================================================

export const ProfileSkeleton: SkeletonStory = {
	name: "Profile Loading Example",
	render: () => (
		<div className="max-w-2xl border border-border-secondary rounded-xl p-6 bg-bg-primary">
			{/* Header */}
			<div className="flex items-start gap-4 pb-6 border-b border-border-secondary">
				<SkeletonAvatar size="2xl" />
				<div className="flex-1 space-y-3">
					<Skeleton variant="text" width="40%" height={24} />
					<Skeleton variant="text" width="60%" />
					<div className="flex gap-2 pt-2">
						<Skeleton variant="rounded" width={100} height={36} />
						<Skeleton variant="rounded" width={100} height={36} />
					</div>
				</div>
			</div>

			{/* Stats */}
			<div className="grid grid-cols-3 gap-4 py-6 border-b border-border-secondary">
				<div className="space-y-2">
					<Skeleton variant="text" width="60%" height={28} />
					<Skeleton variant="text" width="80%" />
				</div>
				<div className="space-y-2">
					<Skeleton variant="text" width="60%" height={28} />
					<Skeleton variant="text" width="80%" />
				</div>
				<div className="space-y-2">
					<Skeleton variant="text" width="60%" height={28} />
					<Skeleton variant="text" width="80%" />
				</div>
			</div>

			{/* About */}
			<div className="pt-6 space-y-3">
				<Skeleton variant="text" width="20%" height={20} />
				<SkeletonText lines={4} lastLineWidth="70%" />
			</div>
		</div>
	),
};

export const ProductCardSkeleton: SkeletonStory = {
	name: "Product Card Loading Example",
	render: () => (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<SkeletonCard animation="wave" withActions />
			<SkeletonCard animation="wave" withActions />
			<SkeletonCard animation="wave" withActions />
		</div>
	),
};

export const DashboardSkeleton: SkeletonStory = {
	name: "Dashboard Loading Example",
	render: () => (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="space-y-2">
					<Skeleton variant="text" width={200} height={32} />
					<Skeleton variant="text" width={300} />
				</div>
				<Skeleton variant="rounded" width={120} height={40} />
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{Array.from({ length: 4 }).map((_, index) => (
					<div
						key={index}
						className="border border-border-secondary rounded-xl p-6 bg-bg-primary"
					>
						<div className="space-y-3">
							<Skeleton variant="text" width="60%" />
							<Skeleton variant="text" width="40%" height={36} />
							<Skeleton variant="text" width="80%" />
						</div>
					</div>
				))}
			</div>

			{/* Chart */}
			<div className="border border-border-secondary rounded-xl p-6 bg-bg-primary">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<Skeleton variant="text" width={150} height={20} />
						<Skeleton variant="rounded" width={100} height={32} />
					</div>
					<Skeleton variant="rectangular" width="100%" height={300} />
				</div>
			</div>

			{/* Table */}
			<SkeletonTable rows={6} columns={5} withAvatar />
		</div>
	),
};

export const FeedSkeleton: SkeletonStory = {
	name: "Feed Loading Example",
	render: () => (
		<div className="max-w-2xl space-y-4">
			{Array.from({ length: 3 }).map((_, index) => (
				<div
					key={index}
					className="border border-border-secondary rounded-xl p-6 bg-bg-primary"
				>
					{/* Post Header */}
					<div className="flex items-start gap-3 mb-4">
						<SkeletonAvatar size="md" withText textLines={2} />
					</div>

					{/* Post Content */}
					<div className="space-y-3">
						<SkeletonText lines={3} lastLineWidth="65%" />
						<Skeleton variant="rounded" width="100%" height={300} />
					</div>

					{/* Post Actions */}
					<div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-secondary">
						<Skeleton variant="rounded" width={80} height={32} />
						<Skeleton variant="rounded" width={80} height={32} />
						<Skeleton variant="rounded" width={80} height={32} />
					</div>
				</div>
			))}
		</div>
	),
};

export const ListSkeleton: SkeletonStory = {
	name: "List Loading Example",
	render: () => (
		<div className="max-w-2xl border border-border-secondary rounded-xl overflow-hidden bg-bg-primary divide-y divide-border-secondary">
			{Array.from({ length: 6 }).map((_, index) => (
				<div key={index} className="px-6 py-4 flex items-center gap-4">
					<SkeletonAvatar size="md" withText textLines={2} className="flex-1" />
					<Skeleton variant="rounded" width={80} height={36} />
				</div>
			))}
		</div>
	),
};

// ============================================================================
// Playground
// ============================================================================

export const Playground: SkeletonStory = {
	args: {
		variant: "rectangular",
		animation: "pulse",
		width: 300,
		height: 100,
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["text", "circular", "rectangular", "rounded"],
		},
		animation: {
			control: "select",
			options: ["pulse", "wave", "none"],
		},
		width: {
			control: "text",
		},
		height: {
			control: "text",
		},
	},
};
