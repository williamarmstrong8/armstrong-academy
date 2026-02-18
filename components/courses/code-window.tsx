"use client";

import { Check, Copy, FileCode, Terminal } from "lucide-react";
import { useState, useRef } from "react";

interface CodeWindowProps {
  title: string;
  children: React.ReactNode;
  isTerminal?: boolean;
}

export function CodeWindow({
  title,
  children,
  isTerminal = false,
}: CodeWindowProps) {
  const [isCopied, setIsCopied] = useState(false);
  const codeBlockRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async () => {
    if (codeBlockRef.current) {
      const codeText = codeBlockRef.current.innerText;
      try {
        await navigator.clipboard.writeText(codeText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  if (isTerminal) {
    return (
      <div className="my-6 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {title}
          </span>
          <button
            onClick={copyToClipboard}
            className="transition-opacity hover:opacity-70 text-zinc-400"
            title="Copy"
            type="button"
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
        <div
          ref={codeBlockRef}
          className="font-mono text-sm leading-relaxed whitespace-pre text-zinc-700 dark:text-zinc-300 [&_pre]:m-0 [&_pre]:p-0 [&_pre]:bg-transparent [&_code]:m-0 [&_code]:p-0 [&_code]:bg-transparent [&_code]:text-inherit [&_code]:text-sm"
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <span className="font-mono text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {title}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="transition-opacity hover:opacity-70"
          title="Copy code"
          type="button"
        >
          {isCopied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-zinc-400" />
          )}
        </button>
      </div>
      <div
        ref={codeBlockRef}
        className="p-4 overflow-x-auto text-sm font-mono whitespace-pre text-zinc-800 dark:text-zinc-300 [&_pre]:m-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
      >
        {children}
      </div>
    </div>
  );
}
