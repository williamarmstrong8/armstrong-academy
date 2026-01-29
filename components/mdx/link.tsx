"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function CustomLink({ href, children, className, ...props }: CustomLinkProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link
        href={href}
        className={cn(
          "font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary",
        className
      )}
      {...props}
    >
      {children}
      <ExternalLink className="h-3 w-3 opacity-50" />
    </a>
  );
}