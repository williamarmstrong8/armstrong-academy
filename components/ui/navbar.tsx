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
          {/* Left: Brand */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-tight shrink-0"
          >
            Armstrong Academy
          </Link>

          {/* Desktop: Center nav links */}
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

          {/* Right: CTA + mobile menu button */}
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

        {/* Mobile menu */}
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
