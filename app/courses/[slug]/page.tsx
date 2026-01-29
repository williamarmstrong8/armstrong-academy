import { notFound } from "next/navigation";
import { getCourseBySlug, getAllCourses } from "@/lib/courses";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

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
  theme: "github-light",
  keepBackground: false, 
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

// 4. Define Component Map
const components = {
  // Custom Components
  Summary: SummaryCard,
  CodeWindow: CodeWindow,
  PromptBox: PromptBox,     // Standard name
  PromptSection: PromptBox, // Alias (in case you used this name in MDX)
  RouteVisualizer: RouteVisualizer,

  // HTML Overrides
  a: CustomLink, // Replaces standard markdown links with our smart link component
  
  h1: (props: any) => (
    <h1 {...props} className="text-3xl font-bold mt-12 mb-6 tracking-tight" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-semibold mt-12 mb-4 tracking-tight border-b pb-2" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-xl font-semibold mt-8 mb-4 tracking-tight" />
  ),
  p: (props: any) => (
    <p {...props} className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground/90" />
  ),
  ul: (props: any) => (
    <ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground" />
  ),
  code: (props: any) => (
    <code 
      {...props} 
      className="font-mono text-sm" 
    />
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
    <div className="container mx-auto max-w-4xl py-12 px-6">
      <Button 
        variant="ghost" 
        asChild 
        className="mb-8 pl-0 -ml-4 text-muted-foreground hover:text-foreground"
      >
        <Link href="/courses">
           <ChevronLeft className="mr-2 h-4 w-4" /> Back to Courses
        </Link>
      </Button>

      <div className="mb-12 pb-8 border-b">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 lg:text-5xl">
          {course.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {course.description}
        </p>
      </div>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
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
      
      <div className="mt-20 border-t pt-10 flex justify-between text-sm text-muted-foreground">
        <p>Armstrong Academy &copy; {new Date().getFullYear()}</p>
        <Link href="/courses" className="hover:underline">
          View all modules
        </Link>
      </div>
    </div>
  );
}