import { notFound } from "next/navigation";
import { getCourseBySlug, getAllCourses } from "@/lib/courses";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock } from "lucide-react";

// 1. Import Syntax Highlighter and Plugins
import rehypePrettyCode from "rehype-pretty-code";

// 2. Import Custom MDX Components
import { SummaryCard } from "@/components/mdx/summary-card";
import { CodeWindow } from "@/components/mdx/code-window";
import { PromptBox } from "@/components/mdx/prompt-box";
import { RouteVisualizer } from "@/components/mdx/route-visualizer";
import { CustomLink } from "@/components/mdx/link";

// 3. Configure Syntax Highlighter
const codeOptions = {
  theme: "github-light", // or 'min-light' for even cleaner look
  keepBackground: false, 
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

// 4. Define Component Map (The "Design System" for Markdown)
const components = {
  // --- Custom Components ---
  Summary: SummaryCard,
  CodeWindow: CodeWindow,
  PromptBox: PromptBox,
  PromptSection: PromptBox,
  RouteVisualizer: RouteVisualizer,

  // --- HTML Overrides ---
  
  // Links: Smart links that detect external vs internal
  a: CustomLink, 
  
  // Headers: Clean, tight tracking, with scroll margins for sticky navs
  h1: (props: any) => (
    <h1 {...props} className="text-3xl font-medium mt-16 mb-6 tracking-tight text-zinc-900 scroll-m-20" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-medium mt-16 mb-4 tracking-tight text-zinc-900 border-b border-zinc-100 pb-2 scroll-m-20" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-xl font-medium mt-10 mb-4 tracking-tight text-zinc-900 scroll-m-20" />
  ),
  
  // Body Text: High readability, specific zinc shade
  p: (props: any) => (
    <p {...props} className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-600 text-[17px]" />
  ),
  
  // Lists: Custom bullets
  ul: (props: any) => (
    <ul {...props} className="my-6 ml-0 list-none space-y-2" />
  ),
  li: (props: any) => (
    <li {...props} className="relative pl-7 text-zinc-600 leading-7 before:content-[''] before:absolute before:left-2 before:top-3 before:h-1.5 before:w-1.5 before:bg-zinc-300 before:rounded-full" />
  ),
  
  // Inline Code: Distinct from CodeBlocks
  code: (props: any) => (
    <code 
      {...props} 
      className="font-mono text-[13px] bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded-md border border-zinc-200/50" 
    />
  ),
  
  // Blockquotes: Callout style
  blockquote: (props: any) => (
    <blockquote {...props} className="mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-500" />
  ),
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      
      {/* Top Navigation / Breadcrumb */}
      <div className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="container mx-auto max-w-3xl px-6 h-14 flex items-center">
            <Link 
                href="/courses" 
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1"
            >
                <ChevronLeft size={14} /> Curriculum
            </Link>
            <span className="mx-2 text-zinc-300">/</span>
            <span className="text-sm font-medium text-zinc-900 truncate">
                {course.title}
            </span>
        </div>
      </div>

      <main className="container mx-auto max-w-3xl px-6 py-16">
        
        {/* Course Header */}
        <div className="mb-16 border-b border-zinc-100 pb-10">
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-6">
            <span className="flex items-center gap-1.5">
               <Calendar size={12} /> Last Updated
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
               <Clock size={12} /> 15 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
            {course.title}
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-light">
            {course.description}
          </p>
        </div>

        {/* Content Body */}
        <article className="prose prose-zinc max-w-none prose-headings:font-medium prose-p:text-zinc-600 prose-pre:bg-transparent prose-pre:p-0 prose-pre:border-none prose-pre:overflow-visible">
          <MDXRemote 
            source={course.content} 
            components={components}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, codeOptions]],
              },
            }}
          />
        </article>
        
        {/* Footer Navigation */}
        <div className="mt-24 pt-10 border-t border-zinc-100">
          <div className="flex justify-between items-center">
             <div className="text-sm text-zinc-400">
                Armstrong Academy
             </div>
             <Link href="/courses" className="text-sm font-bold text-zinc-900 hover:underline">
                Complete Module →
             </Link>
          </div>
        </div>
      </main>
    </div>
  );
}