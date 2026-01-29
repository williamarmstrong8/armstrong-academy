# Armstrong Academy

**Educational course platform** — Modern learning site for web development fundamentals. Users browse courses, follow step-by-step MDX lessons, and use copy-paste prompts to build while learning best practices.

## Overview

Armstrong Academy delivers structured, copy-paste–oriented lessons (e.g. “5-Step Foundation”) so learners can ship real components and pages while understanding the underlying patterns. Content is authored in MDX with custom interactive components; courses are loaded from the filesystem and rendered via the Next.js App Router.

## Highlights

- **MDX-driven courses** — Course content in MDX with custom components (code windows, prompt boxes, summary cards, route visualizer)
- **Dynamic course routing** — File-based course discovery and `[slug]` dynamic routes with gray-matter front matter
- **Component library** — Reusable UI (shadcn/ui–style) and MDX-specific components for consistent lesson UX
- **App Router & server-side data** — Next.js 14+ App Router, server-side course loading, and type-safe course APIs

## Tech Stack

| Area | Technologies |
|------|--------------|
| Framework | Next.js (App Router) |
| Content | MDX, gray-matter |
| UI | React, Tailwind CSS, shadcn/ui patterns |
| Tooling | TypeScript, pnpm |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Course content lives in `content/courses/`; add or edit MDX there to extend the curriculum.
