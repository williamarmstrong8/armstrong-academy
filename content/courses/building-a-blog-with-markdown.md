---
title: "Building a Blog with Markdown"
description: "Learn how to treat content as data using Next.js, Markdown, and Dynamic Routes."
difficulty: "Intermediate"
---

> **What we will build**
>
> We are going to build a scalable blog engine where you write your posts in simple markdown files, and Next.js automatically turns them into beautiful, styled web pages. We will cover dynamic routing, reading files from your system, and rendering them safely.

## 1. The Problem: Hardcoded Pages

Without dynamic content, if you wanted to write 50 blog posts, you would have to manually create 50 different folders and 50 different `page.tsx` files.

`app/blog/post-1/page.tsx`

`app/blog/post-2/page.tsx`

`app/blog/post-3/page.tsx`

... and so on.

This is unmaintainable. If you wanted to change the title font size, you'd have to edit 50 files.

The solution is to separate **Content** (what you write) from **Structure** (how it looks). We write content in `.md` files and use one single template to display all of them.

## 2. Setting up Markdown

First, we need a few packages to help Next.js read and render these files.

```bash
pnpm add remark remark-html remark-gfm gray-matter @tailwindcss/typography
```

- **`remark`** + **`remark-html`**: Convert markdown to HTML on the server.
- **`remark-gfm`**: Adds support for tables, strikethrough, and other GitHub Flavored Markdown.
- **`gray-matter`**: Lets us add metadata to the top of our files (like Title, Date, Author) called "frontmatter".
- **`@tailwindcss/typography`**: A plugin that automatically styles your markdown (headers, bold text, lists) so you don't have to write CSS for every paragraph.

## 3. Architecture

We need a specific place to store our raw blog posts. We don't put them inside the `app/` folder because they aren't pages themselves; they are data.

We create a `content/` folder at the root of our project.

<div data-component="route-visualizer" data-files='[{"type":"folder","name":"app","level":0},{"type":"folder","name":"content","level":0},{"type":"file","name":"hello-world.md","level":1},{"type":"file","name":"nextjs-guide.md","level":1},{"type":"file","name":"why-i-code.md","level":1}]'></div>

Inside one of these files (`hello-world.md`), it looks like this:

```md
---
title: "Hello World"
date: "2024-03-15"
description: "My first post on the new site."
---

# Welcome to my blog

This is a paragraph written in standard markdown.
```

The part between the `---` dashes is the **Frontmatter**. That is the data we will read to display the title and date on your blog index.

## 4. Dynamic Routing

Now, how do we create one page that renders any of those files? We use a **Dynamic Segment**.

In Next.js, if you put square brackets around a folder name, it acts as a variable. We will create `app/blog/[slug]/page.tsx`.

<div data-component="route-visualizer" data-files='[{"type":"folder","name":"app","level":0},{"type":"folder","name":"blog","level":1},{"type":"folder","name":"[slug]","level":2},{"type":"file","name":"page.tsx","level":3}]' data-route="portfolio.com/blog/hello-world"></div>

When a user visits `/blog/hello-world`, Next.js grabs `"hello-world"`, puts it into a variable called `slug`, and passes it to our page. We then tell our code: "Go look in the content folder for a file named `hello-world.md`."

## 5. The Logic

Here is the simplified logic of how we read that file. We use Node.js's built-in file system (`fs`) module.

```ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export function getPost(slug: string) {
  const filePath = path.join(root, 'content', `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')

  // separate metadata (frontmatter) from the actual content
  const { data, content } = matter(fileContent)

  return { metadata: data, content }
}
```

This structure allows your blog to grow infinitely. You just add `.md` files to the folder, and they automatically exist as pages on your site.

## Prompt Section

Implementing a blog system involves a lot of boilerplate code (reading files, parsing dates, setting up types). Use this prompt to have Cursor build the entire engine for you in one go.

<div data-component="prompt-box" data-title="Copy this into Cursor" data-src="building-a-blog.txt"></div>
