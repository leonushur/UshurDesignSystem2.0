/**
 * Base Components
 * Core UI primitives for building interfaces
 */

// Avatar
export * from "./avatar/avatar";
// Note: AvatarLabelGroup is also in primitives/avatar-compositions - use that for new code
export { AvatarLabelGroup as BaseAvatarLabelGroup } from "./avatar/avatar-label-group";
export * from "./avatar/avatar-profile-photo";

// Badges
export * from "./badges/badges";
export * from "./badges/badge-types";
export * from "./badges/badge-groups";

// Buttons - Primary button exports
export * from "./buttons/button";
export { ButtonUtility } from "./buttons/button-utility";
export * from "./buttons/close-button";
export { SocialButton } from "./buttons/social-button";
export * from "./buttons/social-logos";
export * from "./buttons/app-store-buttons";
// Note: app-store-buttons-outline has same component names - import directly if needed
export { ButtonGroup, ButtonGroupItem } from "./button-group/button-group";

// Form Controls
export * from "./checkbox/checkbox";
export * from "./radio-buttons/radio-groups";
export * from "./radio-buttons/radio-buttons";
export * from "./toggle/toggle";
export * from "./slider/slider";

// Dropdowns
export * from "./dropdown/dropdown";
export { Select, SelectContext } from "./select/select";
export * from "./select/select-native";
export * from "./select/select-item";
export * from "./select/combobox";
export * from "./select/multi-select";
// Note: popover is mostly internal, but exported for advanced use
export { Popover } from "./select/popover";

// Text Inputs
export * from "./input/input";
export { InputGroup } from "./input/input-group";
export * from "./input/input-payment";
export * from "./input/label";
export * from "./input/hint-text";
export * from "./textarea/textarea";
export * from "./verification-code-input/verification-code-input";

// File Upload
export * from "./file-upload-trigger/file-upload-trigger";

// Forms
export * from "./form/form";

// Progress
export * from "./progress-indicators/simple-circle";
export * from "./progress-indicators/progress-indicators";
export * from "./progress-indicators/progress-circles";

// Tags
export * from "./tags/tags";

// Text Editor
export * from "./text-editor/text-editor";

// Tooltip
export * from "./tooltip/tooltip";
