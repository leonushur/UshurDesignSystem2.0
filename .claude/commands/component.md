---
description: Create a new component with stories
argument-hint: <component name and description>
---

# Create New Component

Delegate to the storybook-creator for component creation:

```
@storybook-creator Create a new component: $ARGUMENTS. Include TypeScript props interface, proper design tokens, and comprehensive Storybook stories covering all variants and states.
```

After creation, recommend:
1. @design-system-auditor for token compliance
2. @storybook-tester for visual and interaction testing
3. @code-reviewer for final review

