"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background text-foreground">
      <div className="mx-auto max-w-8xl px-24">
        <div className="grid h-16 grid-cols-3 items-center">
          
          {/* Left: Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Armstrong Academy
            </Link>
          </div>

          {/* Center: Nav Links (true centered) */}
          <div className="flex items-center justify-center gap-8">
            <Link
              href="/courses"
              className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/components"
              className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              Components
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center justify-end">
            <Button>
              Start learning
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
}
