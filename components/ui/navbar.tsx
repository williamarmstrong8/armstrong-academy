"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background text-foreground">
      <div className="mx-auto max-w-screen-2xl px-6">
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
              href="/about"
              className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              Courses
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              Marketplace
            </Link>
          </div>

          {/* Right: Login + CTA */}
          <div className="flex items-center justify-end gap-4">
            <Link
              href="/login"
              className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
            <Button>
              Start learning
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
}
