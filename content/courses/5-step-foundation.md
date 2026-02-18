---
title: "The 5-Step Foundation"
description: "Initialize a scalable Next.js + shadcn architecture in under 5 minutes."
difficulty: "Beginner"
---

> **What we will build**
>
> We are going to build a new website from scratch using Next.js. We will set up the styling, organize our page routing, and install the essential component library needed for our user interface.

## 1. The Basics

The fundamentals are that we need to set up our site with the proper framework. We will use Next.js, Tailwind CSS, and TypeScript. This is called our framework.

To start we have to create the app in our terminal in cursor. Paste this in to create a react app with the default settings.

```bash
pnpm create next-app@latest my-app --yes
cd my-app
pnpm dev
```

We will also use shadcn/ui, which is a library of components that have great design, function, and features built-in.

```bash
pnpm dlx shadcn@latest init
```

## 2. Styling

Next we will setup the style of our site. This is where you can get really creative and differentiate your site from others.

Your global or site wide styling lives here. If you make changes here they change for your entire website.

<div data-component="route-visualizer" data-files='[{"type":"folder","name":"app","level":0},{"type":"file","name":"global.css","level":1}]'></div>

In here you can define styling choices like hear font, color, size, then reference them in your code so you don't need to specify or worry about consistency across pages.

## 3. Pages and routes

Next.js uses a very intuitve way to think about pages. If there is a page.tsx in a folder, that folder name becomes the url path. For example in app a folder called About with page.tsx in it is routed to with /about.

<div data-component="route-visualizer" data-files='[{"type":"folder","name":"app","level":0},{"type":"folder","name":"about","level":1},{"type":"file","name":"page.tsx","level":2}]' data-route="portfolio.com/about"></div>

We also have layout.tsx that acts as a layout for your site. This allows paages to render without needing to refresh the page. It also means if you add components like a nav bar to them, that nav bar will appear for all pages within that layout.

<div data-component="route-visualizer" data-files='[{"type":"folder","name":"app","level":0},{"type":"folder","name":"about","level":1},{"type":"file","name":"about.tsx","level":2},{"type":"folder","name":"contact","level":1},{"type":"file","name":"contact.tsx","level":2},{"type":"file","name":"layout.tsx","level":1}]'></div>

So this layout applies to both contact and about pages. So we add a nav bar here so it shows up on both and doesn't need ot be imported or rendered for each page as it doesnt change per page.

If you want to create a blog or course log like this, we will have a bit of a different setup which I will show in another course.

## 4. Components

Next.js uses react which is a really cool framework that uses components for styling and storing things. Instead of having files with 2000 lines of code, components break up each item on a page, store it in a separate place, then import it where needed. This means you can resuse cards, frames, buttons, etc. wherever you need them without writing the code for them again.

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
```

These are the 3 essentials every site needs out of the box. To use them just reference that you use shadecn button, card, and input components and add them in places you need. To find more components check out this site: [Entire Library Here](https://ui.shadcn.com/docs/components)

## 5. Organization

Finally, we need to know where to put our files so our project doesn't become a mess as it grows. We separate our **Pages** (what the user navigates to) from our **Components** (the building blocks used to build those pages).

<div data-component="route-visualizer" data-files='[{"type":"folder","name":"app","level":0},{"type":"folder","name":"components","level":0},{"type":"folder","name":"ui","level":1},{"type":"file","name":"button.tsx","level":2},{"type":"file","name":"navbar.tsx","level":1},{"type":"folder","name":"lib","level":0},{"type":"file","name":"utils.ts","level":1}]'></div>

* **app**: Only for pages and layouts. Keep logic here to a minimum.
* **components/ui**: The shadcn primitives (Button, Card, Input).
* **components**: Your custom site parts (Navbar, Footer, Hero Section).
* **lib**: Helper functions and settings.

This structure allows your app to grow to hundreds of pages without getting confusing.

We will go into more detail about how to setup specifcs for the type of app you create later. Now you are ready to start building!

Instead of manually creating these folders one by one, we can use AI to set this up instantly.

## Prompt Section

For each course, I will provide a copy and paste cursor ready propmt at the end. This will allow you to take these principles and apply them to you site right away.

You can edit them to be more specific to your site's structure and style and them copy from there.

<div data-component="prompt-box" data-title="Copy this into Cursor" data-src="5-step-foundation.txt"></div>
