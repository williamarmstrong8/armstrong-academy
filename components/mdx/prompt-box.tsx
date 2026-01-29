"use client";

import { useState, useMemo } from "react";
import { Copy, Eye, Pencil, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Helper to clean MDX children
const extractText = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as any).props.children);
  }
  return "";
};

export function PromptBox({ children }: { children: React.ReactNode }) {
  const cleanedPrompt = useMemo(() => extractText(children).trim(), [children]);
  
  const [isOpen, setIsOpen] = useState(false);
  const [promptText, setPromptText] = useState(cleanedPrompt);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    toast.success("Prompt copied to clipboard!");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={cn(
      "my-8 rounded-lg border overflow-hidden transition-all duration-200",
      // Edit Mode: Subtle primary border and background tint to highlight focus
      isOpen 
        ? "border-primary/20 bg-primary/5 shadow-sm" 
        : "border-border bg-zinc-50 dark:bg-zinc-900"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-3 bg-white dark:bg-zinc-950">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            AI Prompt
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={cn(
              "h-8 gap-2 text-xs",
              isOpen ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Eye className="h-3.5 w-3.5" /> : <Pencil className="h-3.5 w-3.5" />}
            {isOpen ? "Done" : "Edit"}
          </Button>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-2 text-xs text-muted-foreground hover:text-foreground"
            onClick={handleCopy}
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {isCopied ? "Copied" : "Copy"}
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div>
         {isOpen ? (
            <Textarea 
              autoFocus
              value={promptText}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPromptText(e.target.value)}
              // Visual Cue: White background (vs gray) + Inner Shadow
              className="w-full border-0 focus-visible:ring-0 p-6 font-mono text-sm leading-relaxed rounded-none bg-white dark:bg-black shadow-inner resize-none text-foreground"
              style={{ minHeight: "100px", height: "auto" }}
              rows={Math.max(3, promptText.split('\n').length)} 
              spellCheck={false}
            />
         ) : (
            <div className="p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">
              {promptText}
            </div>
         )}
      </div>
    </div>
  );
}