"use client";

import { useState, useMemo, useEffect } from "react";
import { Copy, Eye, Pencil, Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Helper to clean MDX children into plain text for the clipboard
const extractText = (node: React.ReactNode): string => {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  
  if (typeof node === "object" && "props" in node) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    const children = extractText(element.props.children);
    
    // Optional: Attempt to preserve some basic Markdown structure if possible
    // (This is heuristic and mostly helps with simple blocks)
    if (element.type === 'p') return children + '\n\n';
    if (element.type === 'li') return '• ' + children + '\n';
    if (element.type === 'h1' || element.type === 'h2' || element.type === 'h3') return children + '\n\n';
    
    return children;
  }
  
  return "";
};

interface PromptBoxProps {
  children: React.ReactNode;
  title?: string;
}

export function PromptBox({ children, title = "AI Prompt" }: PromptBoxProps) {
  // Clean text for the "Edit" state and "Copy" function
  const initialText = useMemo(() => extractText(children).trim(), [children]);
  
  const [isOpen, setIsOpen] = useState(false); // Edit mode toggle
  const [promptText, setPromptText] = useState(initialText);
  const [isCopied, setIsCopied] = useState(false);
  const [hasEdited, setHasEdited] = useState(false);

  // Update internal state if children prop changes (e.g. fast refresh)
  useEffect(() => {
    setPromptText(initialText);
    setHasEdited(false);
  }, [initialText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    toast.success("Prompt copied to clipboard!");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setPromptText(initialText);
    setHasEdited(false);
    setIsOpen(false);
    toast.info("Prompt reset to original");
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptText(e.target.value);
    setHasEdited(true);
  };

  return (
    <div className={cn(
      "my-8 rounded-lg border overflow-hidden transition-all duration-200",
      isOpen 
        ? "border-indigo-500/30 bg-indigo-50/10 shadow-sm ring-1 ring-indigo-500/10" 
        : "border-border bg-zinc-50 dark:bg-zinc-900/50"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-2.5 bg-white dark:bg-zinc-950">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-500/70" />
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
            {title}
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          {hasEdited && (
             <Button 
             variant="ghost" 
             size="sm" 
             onClick={handleReset}
             className="h-7 px-2 text-xs text-muted-foreground hover:text-red-500"
             title="Reset to original"
           >
             <RotateCcw className="h-3.5 w-3.5" />
           </Button>
          )}

          <Button 
            variant="ghost" 
            size="sm" 
            className={cn(
              "h-7 gap-1.5 text-xs px-2",
              isOpen ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20" : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Check className="h-3.5 w-3.5" /> : <Pencil className="h-3.5 w-3.5" />}
            {isOpen ? "Done" : "Edit"}
          </Button>

          <div className="h-3.5 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />

          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1.5 text-xs px-2 text-muted-foreground hover:text-foreground"
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
      <div className="relative">
         {isOpen ? (
            <Textarea 
              autoFocus
              value={promptText}
              onChange={handleEditChange}
              className="w-full border-0 focus-visible:ring-0 p-6 font-mono text-sm leading-relaxed rounded-none bg-white dark:bg-black shadow-inner resize-none text-foreground"
              style={{ minHeight: "150px", height: "auto" }}
              rows={Math.max(5, promptText.split('\n').length)} 
              spellCheck={false}
            />
         ) : (
            <div className={cn(
                "p-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300 bg-zinc-50/50 dark:bg-zinc-900/30",
                // If edited, we render raw text with whitespace. 
                // If original, we render the passed children (MDX) to preserve pretty formatting.
                hasEdited ? "font-mono whitespace-pre-wrap" : ""
            )}>
              {hasEdited ? promptText : children}
            </div>
         )}
      </div>
    </div>
  );
}