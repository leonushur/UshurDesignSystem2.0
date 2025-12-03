---
name: Vercel Deployment Debugging
description: Comprehensive guide for debugging and fixing failed Vercel/Storybook deployments.
---

# Vercel Deployment Debugging Guide

## 🚨 When Deployment Fails - Quick Reference

### Step 1: Get the Error
1. Go to **Vercel Dashboard** → Your Project → **Deployments**
2. Click the **failed deployment** (red X)
3. Click **"Build Logs"**
4. Find the **FIRST error** (ignore cascading errors)

### Step 2: Reproduce Locally
```bash
# Clean slate - exactly like Vercel
rm -rf node_modules storybook-static
npm ci
npm run build-storybook
```

### Step 3: Apply the Fix (see below)

---

## 🔧 Error → Fix Reference

### Module Not Found
```
Error: Cannot find module '@untitledui/xyz'
```
**Fix:**
```bash
npm install @untitledui/xyz
```

---

### TypeScript Errors
```
Type error: Property 'X' does not exist on type 'Y'
```
**Fix:**
```bash
# Find the file
npx tsc --noEmit 2>&1 | head -20

# Fix the type error, then verify
npx tsc --noEmit
```

---

### MDX/Docs Errors
```
Error: Expected a closing tag for `<Component>`
```
**Fix:** Check MDX files for:
- Unclosed JSX tags: `<div>` needs `</div>`
- Self-closing tags need slash: `<img />` not `<img>`
- Import statements at top of MDX

---

### Out of Memory
```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```
**Fix:** Update `package.json`:
```json
{
  "scripts": {
    "build-storybook": "NODE_OPTIONS='--max-old-space-size=4096' storybook build"
  }
}
```

---

### Storybook Addon Missing
```
Error: Cannot find module '@storybook/addon-docs'
```
**Fix:**
```bash
npm install @storybook/addon-docs
```

---

### ESM/CJS Conflicts
```
Error: require() of ES Module not supported
```
**Fix:** Add to `.storybook/main.ts`:
```typescript
viteFinal: async (config) => {
  config.optimizeDeps = config.optimizeDeps ?? {};
  config.optimizeDeps.include = [
    ...(config.optimizeDeps.include ?? []),
    'problematic-package'
  ];
  return config;
}
```

---

### Circular Dependencies
```
Error: Maximum call stack size exceeded
```
**Fix:**
```bash
# Find circular imports
npx madge --circular src/

# Refactor to break the cycle
```

---

### CSS/Tailwind Errors
```
Error: Unknown at rule @tailwind
```
**Fix:** Ensure PostCSS config is correct and tailwindcss is installed:
```bash
npm install -D tailwindcss postcss autoprefixer
```

---

### React Version Conflicts
```
Error: Invalid hook call. Hooks can only be called inside...
```
**Fix:**
```bash
# Check for duplicate React
npm ls react

# If multiple versions, add to package.json:
"overrides": {
  "react": "^18.2.0"
}
```

---

### Environment Variables
```
Error: process.env.NEXT_PUBLIC_X is undefined
```
**Fix:**
1. Go to **Vercel Dashboard** → Project → **Settings** → **Environment Variables**
2. Add the missing variable
3. **Redeploy** (env vars need new deploy)

---

## 🔍 Diagnostic Commands

```bash
# Full diagnostic
npm run build-storybook 2>&1 | tee build.log

# Check TypeScript
npx tsc --noEmit

# Check for circular deps
npx madge --circular src/

# Check bundle size
npm run build-storybook && du -sh storybook-static/

# List all dependencies
npm ls --depth=0

# Check peer dependency issues
npm ls 2>&1 | grep -i "UNMET\|invalid"
```

---

## 📋 Pre-Push Checklist

Before pushing to trigger a new deploy:

```bash
# 1. Clean build
rm -rf node_modules storybook-static
npm ci

# 2. Type check
npx tsc --noEmit

# 3. Build Storybook
npm run build-storybook

# 4. If all pass, push
git push
```

---

## 🔗 Useful Links

- **Vercel Build Logs**: `vercel.com/<team>/<project>/deployments`
- **Vercel Status**: `vercel-status.com`
- **Storybook Issues**: `github.com/storybookjs/storybook/issues`

