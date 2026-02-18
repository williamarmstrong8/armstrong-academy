import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Github, Linkedin, Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Newsletter (Span 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">Armstrong Academy</h3>
              <p className="mt-2 text-zinc-500 leading-relaxed">
                A teaching platform for builders who want to learn prompt-driven development. Free courses, real projects, and the skills to ship.
              </p>
            </div>
          </div>

          {/* Spacer Column (Optional) */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Links Section (Span 6 cols - right aligned) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
            
            {/* Column: Marketplace */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-zinc-900">Marketplace</h4>
              <nav className="flex flex-col gap-3">
                <FooterLink href="/marketplace">All Components</FooterLink>
                <FooterLink href="/marketplace?filter=free">Free Kits</FooterLink>
                <FooterLink href="/marketplace?filter=premium">Premium</FooterLink>
              </nav>
            </div>

            {/* Column: Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-zinc-900">Resources</h4>
              <nav className="flex flex-col gap-3">
                <FooterLink href="/courses">Courses</FooterLink>
                <FooterLink href="/stack">Stack</FooterLink>
                <FooterLink href="/about">About</FooterLink>
              </nav>
            </div>

            {/* Column: More */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-zinc-900">More</h4>
              <nav className="flex flex-col gap-3">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="https://github.com" external>GitHub</FooterLink>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Armstrong Academy. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <SocialLink href="https://x.com/armstrongwill8" icon={<Twitter className="h-4 w-4" />} />
            <SocialLink href="https://github.com/williamarmstrong8" icon={<Github className="h-4 w-4" />} />
            <SocialLink href="https://www.linkedin.com/in/william-armstrong8/" icon={<Linkedin className="h-4 w-4" />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Helper Components for clean code ---

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <Link 
      href={href} 
      className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="h-8 w-8 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-500 border border-zinc-200 hover:border-zinc-300 hover:bg-white hover:text-zinc-900 transition-all"
    >
      {icon}
    </Link>
  );
}