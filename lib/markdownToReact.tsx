import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import * as prod from "react/jsx-runtime";
import { SummaryCard } from "@/components/courses/summary-card";
import { CodeWindow } from "@/components/courses/code-window";
import { RouteVisualizer } from "@/components/courses/route-visualizer";
import { PromptBox } from "@/components/courses/prompt-box";

type CourseDivProps = React.HTMLAttributes<HTMLDivElement> & {
  "data-component"?: string;
  "data-title"?: string;
  "data-terminal"?: string;
  "data-files"?: string;
  "data-route"?: string;
  children?: React.ReactNode;
};

function CourseDivWrapper({
  "data-component": component,
  "data-title": title,
  "data-terminal": terminal,
  "data-files": filesJson,
  "data-route": route,
  children,
  ...rest
}: CourseDivProps) {
  if (component === "summary") {
    return <SummaryCard title={title}>{children}</SummaryCard>;
  }
  if (component === "code-window") {
    return (
      <CodeWindow
        title={title ?? "Code"}
        isTerminal={terminal === "true"}
      >
        {children}
      </CodeWindow>
    );
  }
  if (component === "route-visualizer") {
    let files: { type: "folder" | "layout" | "page" | "file"; name: string; level?: number }[] = [];
    try {
      if (filesJson) {
        const parsed = JSON.parse(filesJson) as { type: string; name: string; level?: number }[];
        files = parsed.map((f) => ({
          type: f.type as "folder" | "layout" | "page" | "file",
          name: f.name,
          level: f.level,
        }));
      }
    } catch {
      // ignore parse errors
    }
    return (
      <RouteVisualizer
        files={files}
        route={route ?? undefined}
      />
    );
  }
  if (component === "prompt-box" || component === "prompt-section") {
    return (
      <PromptBox title={title ?? "AI Prompt"}>
        {children}
      </PromptBox>
    );
  }
  return <div {...rest}>{children}</div>;
}

const production = {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
} as const;

export async function markdownToReact(markdown: string): Promise<React.ReactElement> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeReact, {
      ...production,
      components: {
        div: CourseDivWrapper as React.ComponentType<Record<string, unknown>>,
      },
    })
    .process(markdown);

  return result.result as React.ReactElement;
}
