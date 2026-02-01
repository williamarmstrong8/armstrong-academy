"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
  icon?: React.ReactNode;
}

export function CopyButton({ text, label, variant = "ghost", className, icon }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button 
      variant={variant} 
      className={cn("transition-all font-semibold", className)} 
      onClick={handleCopy}
      size={label ? "default" : "icon"}
    >
      {copied ? <Check className={cn("h-4 w-4", label && "mr-2")} /> : (icon || <Copy className={cn("h-4 w-4", label && "mr-2")} />)}
      {label && (copied ? "Copied!" : label)}
    </Button>
  );
}