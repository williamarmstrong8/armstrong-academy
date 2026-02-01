export type Category = 'free' | 'premium' | 'kit';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: string;
  description: string;
  codeSnippet: string;
  prompt?: string;
}

export const inventory: Product[] = [
  {
    id: 'free-1',
    name: 'Primary Button',
    category: 'free',
    price: '$0',
    description: 'Accessible, animated button with loading states.',
    codeSnippet: `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }`,
  },
  {
    id: 'free-2',
    name: 'Sticky Navbar',
    category: 'free',
    price: '$0',
    description: 'Responsive navigation with blur backdrop.',
    codeSnippet: `"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background text-foreground">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="grid h-16 grid-cols-3 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Logo
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8">
            <Link href="/about" className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/courses" className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground">
              Courses
            </Link>
            <Link href="/more" className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground">
              More
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Button>Start learning</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}`,
  },
  {
    id: 'free-3',
    name: 'Feature Card',
    category: 'free',
    price: '$0',
    description: 'Minimal card for displaying value props.',
    codeSnippet: `import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}`,
  },
  {
    id: 'paid-1',
    name: 'SaaS Dashboard',
    category: 'premium',
    price: '$49',
    description: 'Complete admin layout with charts and sidebar.',
    codeSnippet: `// LOCKED CODE`,
  },
  {
    id: 'paid-2',
    name: 'Agency Portfolio',
    category: 'kit',
    price: '$129',
    description: 'Full multi-page site template with CMS integration.',
    codeSnippet: `// LOCKED CODE`,
  },
  {
    id: 'paid-3',
    name: 'Pricing Tables',
    category: 'premium',
    price: '$29',
    description: 'Interactive toggle monthly/yearly pricing cards.',
    codeSnippet: `// LOCKED CODE`,
  },
];