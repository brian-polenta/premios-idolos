<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project rules

- Do not invent or redesign pages without an explicit request. Figma is the visual source of truth.
- Prefer React Server Components. Add `"use client"` only to the smallest interactive leaf.
- Use shadcn/ui components backed by Base UI. Check `components.json` and the current component documentation before adding or changing a primitive.
- Keep content structure in Sanity and presentation in React components. Never place write tokens in client code.
- Follow `docs/client-first.md` for naming and structure.
- Use Tailwind utilities for styling. Add a semantic custom class only when an effect cannot be expressed clearly with tokens or utilities.
- Run `pnpm check` before committing meaningful changes.
