import { cn } from "@/lib/utils";

interface SummaryCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function SummaryCard({ title = "What we will build", children, className }: SummaryCardProps) {
  return (
    <div 
      className={cn(
        // Layout: Larger padding (p-6), rounded corners, subtle border/bg
        "my-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50",
        className
      )}
    >
      {/* Title: Larger, semibold, with bottom margin */}
      {title && (
        <h3 className="mb-3 text-lg font-semibold text-foreground tracking-tight">
          {title}
        </h3>
      )}
      
      {/* Content: Base text size (not small), relaxed line height for reading */}
      <div className="text-base text-muted-foreground leading-7">
        {children}
      </div>
    </div>
  );
}