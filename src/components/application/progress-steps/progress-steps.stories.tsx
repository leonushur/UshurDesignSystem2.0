import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ProgressSteps, ProgressStepsSimple, ProgressStepsDot } from "./progress-steps";
import { Button } from "@/components/base/buttons/button";

const meta: Meta<typeof ProgressSteps> = {
    title: "Application/Progress Steps",
    component: ProgressSteps,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

export default meta;

type ProgressStepsStory = StoryObj<typeof ProgressSteps>;

const defaultSteps = [
    { label: "Your details", description: "Name and email" },
    { label: "Company details", description: "A few more questions" },
    { label: "Invite your team", description: "Start collaborating" },
    { label: "Complete", description: "You're all set" },
];

export const Horizontal: ProgressStepsStory = {
    args: {
        steps: defaultSteps,
        currentStep: 1,
        orientation: "horizontal",
    },
};

export const Vertical: ProgressStepsStory = {
    args: {
        steps: defaultSteps,
        currentStep: 2,
        orientation: "vertical",
    },
};

export const SmallSize: ProgressStepsStory = {
    args: {
        steps: defaultSteps,
        currentStep: 1,
        size: "sm",
    },
};

export const Completed: ProgressStepsStory = {
    args: {
        steps: defaultSteps,
        currentStep: 4,
    },
};

export const Interactive: ProgressStepsStory = {
    render: function InteractiveStory() {
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div className="space-y-8">
                <ProgressSteps
                    steps={defaultSteps}
                    currentStep={currentStep}
                    onStepClick={(step) => setCurrentStep(step)}
                />

                <div className="flex items-center justify-between">
                    <Button
                        color="secondary"
                        onPress={() => setCurrentStep((s) => Math.max(0, s - 1))}
                        isDisabled={currentStep === 0}
                    >
                        Back
                    </Button>
                    <span className="text-sm text-fg-tertiary">
                        Step {currentStep + 1} of {defaultSteps.length}
                    </span>
                    <Button
                        color="primary"
                        onPress={() => setCurrentStep((s) => Math.min(defaultSteps.length - 1, s + 1))}
                        isDisabled={currentStep === defaultSteps.length - 1}
                    >
                        {currentStep === defaultSteps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                </div>
            </div>
        );
    },
};

export const SimpleProgress: StoryObj<typeof ProgressStepsSimple> = {
    render: () => (
        <div className="space-y-4">
            <ProgressStepsSimple totalSteps={4} currentStep={1} />
            <ProgressStepsSimple totalSteps={4} currentStep={2} />
            <ProgressStepsSimple totalSteps={4} currentStep={3} />
            <ProgressStepsSimple totalSteps={4} currentStep={4} />
        </div>
    ),
};

export const DotProgress: StoryObj<typeof ProgressStepsDot> = {
    render: () => (
        <div className="space-y-4">
            <ProgressStepsDot totalSteps={5} currentStep={1} />
            <ProgressStepsDot totalSteps={5} currentStep={3} />
            <ProgressStepsDot totalSteps={5} currentStep={5} />
        </div>
    ),
};

export const InteractiveDots: StoryObj<typeof ProgressStepsDot> = {
    render: function InteractiveDotsStory() {
        const [currentStep, setCurrentStep] = useState(1);
        const totalSteps = 5;

        return (
            <div className="space-y-8">
                <div className="rounded-xl border border-border-secondary bg-bg-primary p-8">
                    <div className="mb-6 text-center">
                        <h3 className="text-lg font-semibold text-fg-primary">
                            Step {currentStep}: {["Getting started", "Personal info", "Preferences", "Review", "Complete"][currentStep - 1]}
                        </h3>
                        <p className="text-sm text-fg-tertiary">
                            Complete this step to continue
                        </p>
                    </div>

                    <ProgressStepsDot
                        totalSteps={totalSteps}
                        currentStep={currentStep}
                        onStepClick={setCurrentStep}
                    />
                </div>

                <div className="flex justify-center gap-3">
                    <Button
                        color="secondary"
                        onPress={() => setCurrentStep((s) => Math.max(1, s - 1))}
                        isDisabled={currentStep === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        color="primary"
                        onPress={() => setCurrentStep((s) => Math.min(totalSteps, s + 1))}
                        isDisabled={currentStep === totalSteps}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    },
};

export const AllVariants: ProgressStepsStory = {
    render: () => (
        <div className="space-y-12">
            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Horizontal (Default)</p>
                <ProgressSteps steps={defaultSteps} currentStep={1} />
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Horizontal - Completed</p>
                <ProgressSteps steps={defaultSteps} currentStep={3} />
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Vertical</p>
                <ProgressSteps steps={defaultSteps} currentStep={2} orientation="vertical" />
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Small Size</p>
                <ProgressSteps steps={defaultSteps} currentStep={1} size="sm" />
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Simple Progress Bar</p>
                <div className="max-w-md space-y-2">
                    <ProgressStepsSimple totalSteps={5} currentStep={3} />
                    <p className="text-sm text-fg-tertiary">Step 3 of 5</p>
                </div>
            </div>

            <div>
                <p className="mb-4 text-sm font-medium text-fg-tertiary">Dot Progress</p>
                <ProgressStepsDot totalSteps={6} currentStep={4} />
            </div>
        </div>
    ),
};

