---
name: Vercel Deployment Verification
description: Provides procedures and checklists for verifying Vercel deployments of Storybook.
---

# Vercel Deployment Verification Skill

This skill provides standardized procedures for verifying Vercel deployments.

## Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All TypeScript errors are resolved (`npm run build`)
- [ ] Storybook builds successfully (`npm run build-storybook`)
- [ ] No console errors in local Storybook
- [ ] All stories render correctly
- [ ] Environment variables are configured in Vercel

## Vercel CLI Commands

```bash
# Login to Vercel
npx vercel login

# Link project (first time only)
npx vercel link

# Deploy preview
npx vercel

# Deploy to production
npx vercel --prod

# List recent deployments
npx vercel ls

# Check deployment logs
npx vercel logs <deployment-url>

# Inspect a deployment
npx vercel inspect <deployment-url>
```

## Browser Verification Steps

### 1. Initial Load Test
- Navigate to deployment URL
- Verify page loads within 5 seconds
- Check for loading spinners completing
- Verify no blank screens

### 2. Storybook Sidebar
- Confirm all component categories appear
- Verify component count matches local
- Check search functionality works

### 3. Component Rendering
Test these critical components:
- Buttons (all variants)
- Forms (inputs, selects)
- Modals (open/close)
- Charts (data rendering)
- Tables (sorting, pagination)

### 4. Theme Testing
- Toggle between light and dark modes
- Verify colors update correctly
- Check for any unstyled elements

### 5. Documentation
- Verify autodocs pages load
- Check code snippets render
- Confirm controls panel works

## Common Deployment Issues

### Build Failures

**Missing Dependencies**
```
Error: Cannot find module 'xyz'
```
Fix: Add to package.json and redeploy

**TypeScript Errors**
```
Type error: Property 'x' does not exist
```
Fix: Resolve type errors locally first

**Memory Issues**
```
FATAL ERROR: Heap out of memory
```
Fix: Add to vercel.json:
```json
{
  "functions": {
    "api/**/*.ts": {
      "memory": 1024
    }
  }
}
```

### Runtime Issues

**Missing Environment Variables**
Check Vercel project settings → Environment Variables

**CORS Errors**
Add appropriate headers in vercel.json

**404 on Routes**
Ensure rewrites are configured for SPA routing

## Deployment URLs

- **Production**: `https://<project>.vercel.app`
- **Preview**: `https://<project>-<branch>-<team>.vercel.app`
- **Specific Deploy**: `https://<deploy-id>.vercel.app`

## Verification Report Template

```markdown
## Deployment Verification Report

**URL**: [deployment-url]
**Date**: [date]
**Status**: ✅ Success / ❌ Failed

### Build
- Duration: X minutes
- Size: X MB
- Errors: None / [list errors]

### Smoke Tests
- [ ] Initial load < 5s
- [ ] Sidebar renders
- [ ] Components load
- [ ] Theme toggle works
- [ ] No console errors

### Issues Found
- [List any issues]

### Screenshots
- [Attach key screenshots]
```

