"use client";

import { ArrowRight, FileText, Folder, Globe, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileSystemItem {
  type: "folder" | "layout" | "page";
  name: string;
  level?: number;
}

interface RouteVisualizerProps {
  files: FileSystemItem[];
  route?: string; // Made optional
}

export function RouteVisualizer({ files, route }: RouteVisualizerProps) {
  const getIcon = (type: FileSystemItem["type"]) => {
    switch (type) {
      case "folder":
        return <Folder className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />;
      case "layout":
        return <Layout className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />;
      case "page":
        return <FileText className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />;
    }
  };

  return (
    <div className="my-8 flex flex-col md:flex-row items-center justify-center gap-6 overflow-x-auto p-4">
      
      {/* File Structure Box */}
      <div className="w-full md:w-auto min-w-[200px] rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm overflow-hidden">
        {files.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5",
              index !== files.length - 1 && "border-b border-zinc-100 dark:border-zinc-900"
            )}
            style={{ paddingLeft: `${(item.level || 0) * 1.25 + 1}rem` }}
          >
            {getIcon(item.type)}
            <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Only render arrow and route box if a route is provided */}
      {route && (
        <>
          <ArrowRight className="h-5 w-5 text-zinc-400 rotate-90 md:rotate-0" />

          <div className="w-full md:w-auto min-w-[150px] flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm px-4 py-3">
            <Globe className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            <span className="font-mono text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {route}
            </span>
          </div>
        </>
      )}

    </div>
  );
}