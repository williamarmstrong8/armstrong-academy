# Armstrong Academy

A Next.js course platform for Armstrong Academy. Courses are authored in MDX and rendered with custom components.

## Getting Started

Install dependencies with pnpm:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- **`app/`** – Next.js App Router pages (home, about, courses)
- **`content/courses/`** – Course content in MDX (e.g. `5-step-foundation`)
- **`components/`** – React components, including MDX components (`code-window`, `prompt-box`, `summary-card`, etc.)
- **`lib/`** – Utilities and course loading logic

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [MDX](https://mdxjs.com) for course content
- pnpm for package management

## Deploy on Vercel

Deploy with [Vercel](https://vercel.com/new?filter=next.js). Connect the repo and Vercel will detect the Next.js app and build with `pnpm`.
