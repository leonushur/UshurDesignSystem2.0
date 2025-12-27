---
description: Debug a failed Vercel deployment or build error
argument-hint: <error description or deployment URL>
---

# Deployment Debugging

Delegate to the vercel-deployment-verifier:

```
@vercel-deployment-verifier Debug the deployment issue: $ARGUMENTS. Reproduce locally, analyze build logs, and provide fixes.
```

Debugging process:
1. Reproduce the build locally
2. Check for common Storybook build errors
3. Analyze Vercel build logs
4. Identify root cause and fix
5. Verify fix locally before pushing

