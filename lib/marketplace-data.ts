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
    name: 'Sticky Navbar',
    category: 'free',
    price: '$0',
    description: 'Responsive navigation with blur backdrop.',
    codeSnippet: `"use client";
import Link from "next/link";
// ... (Your free navbar code here)
export default function Navbar() {}`,
  },
  {
    id: 'free-3',
    name: 'Feature Card',
    category: 'free',
    price: '$0',
    description: 'Minimal card for displaying value props.',
    codeSnippet: `import * as React from "react"
// ... (Your free card code here)
export { Card }`,
  },

  // --- PREMIUM ITEMS ---
  {
    // ⚠️ MUST match the ID in product-secrets.ts AND Stripe logs
    id: 'prod_Ttv9MPW0ErPNBS', 
    name: 'SaaS Dashboard',
    category: 'premium',
    price: '$150', 
    description: 'Complete admin layout with charts and sidebar.',
    
    // 🔒 The user only sees this if they inspect your site source code
    codeSnippet: `// 🔒 This code is locked. 
// It will be sent to your email immediately after purchase.`, 
  },
  {
    id: 'paid-2',
    name: 'Agency Portfolio',
    category: 'kit',
    price: '$129',
    description: 'Full multi-page site template with CMS integration.',
    codeSnippet: `// 🔒 Locked Code`,
  },
  {
    id: 'paid-3',
    name: 'Pricing Tables',
    category: 'premium',
    price: '$29',
    description: 'Interactive toggle monthly/yearly pricing cards.',
    codeSnippet: `// 🔒 Locked Code`,
  },
];