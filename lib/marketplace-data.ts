import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Category = 'free' | 'premium' | 'kit';

export interface Product {
  id: string; // This matches the Stripe Product ID for paid items
  name: string;
  category: Category;
  price: string;
  description: string;
  codeSnippet: string;
  prompt?: string; // <--- Optional field to prevent TypeScript errors
}

export const inventory: Product[] = [
  // --- FREE ITEMS ---
  {
    id: 'free-1',
    name: 'Primary Button',
    category: 'free',
    price: '$0',
    description: 'Accessible, animated button with loading states.',
    prompt: 'Create a modern primary button with hover effects',
    codeSnippet: `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`,
  },
  {
    id: 'free-2',
    name: 'Responsive Navbar',
    category: 'free',
    price: '$0',
    description: 'Mobile-friendly navbar with hamburger menu, centered desktop links, and CTA.',
    prompt: `Add a responsive, mobile-friendly navbar to my Next.js app. Create components/ui/navbar.tsx with this implementation. I have a Button component at @/components/ui/button. Update the navLinks array to match my routes, replace 'Your Brand' with my site name, and update the CTA button link and text.

\`\`\`tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/marketplace", label: "Marketplace" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background text-foreground">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-tight shrink-0"
          >
            Your Brand
          </Link>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/courses">Start learning</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t">
                <Button asChild className="w-full">
                  <Link href="/courses" onClick={() => setMobileOpen(false)}>
                    Start learning
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
\`\`\``,
    codeSnippet: `"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/marketplace", label: "Marketplace" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background text-foreground">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-tight shrink-0"
          >
            Your Brand
          </Link>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/courses">Start learning</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t">
                <Button asChild className="w-full">
                  <Link href="/courses" onClick={() => setMobileOpen(false)}>
                    Start learning
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
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
    description: 'Minimal card for displaying value props and feature highlights.',
    prompt: `Add a reusable FeatureCard component to my Next.js app for value props and feature highlights. Create components/ui/feature-card.tsx with this implementation. Update the example usage with my own content—number, icon, title, and description. Use lucide-react for icons.

\`\`\`tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ number, icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm",
        "hover:border-zinc-300 transition-all hover:shadow-md",
        className
      )}
    >
      <span className="block font-mono text-xs text-zinc-400 mb-6">{number}</span>
      <div className="mb-6 w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

// Example usage:
// import { FeatureCard } from "@/components/ui/feature-card";
// import { Terminal } from "lucide-react";
//
// <FeatureCard
//   number="01"
//   icon={<Terminal size={20} />}
//   title="Foundation First"
//   description="AI can write code, but it cannot decide your architecture."
// />
\`\`\``,
    codeSnippet: `import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ number, icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm",
        "hover:border-zinc-300 transition-all hover:shadow-md",
        className
      )}
    >
      <span className="block font-mono text-xs text-zinc-400 mb-6">{number}</span>
      <div className="mb-6 w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}`,
  },

  // --- PREMIUM ITEMS ---
  // {
  //   // ⚠️ MUST match the ID in product-secrets.ts AND Stripe logs
  //   id: 'prod_Ttv9MPW0ErPNBS', 
  //   name: 'SaaS Dashboard',
  //   category: 'premium',
  //   price: '$150', 
  //   description: 'Complete admin layout with charts and sidebar.',
  //   
  //   // 🔒 The user only sees this if they inspect your site source code
  //   codeSnippet: `// 🔒 This code is locked. 
  // // It will be sent to your email immediately after purchase.`, 
  // },
];