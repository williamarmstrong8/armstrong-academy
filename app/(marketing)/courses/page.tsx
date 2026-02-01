import Link from "next/link";
import { getAllCourses } from "@/lib/courses";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Terminal, BookOpen, Sparkles } from "lucide-react";

export const metadata = {
  title: "Courses | Armstrong Academy",
  description: "Prompt-driven learning modules for the modern web.",
};

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="min-h-screen bg-white text-zinc-900 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. Page Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6 uppercase tracking-wider">
            <Terminal size={12} />
            <span>The Curriculum</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-6">
            Master the <span className="text-zinc-400">Vibe Stack</span>.
          </h1>
          
          <p className="text-xl text-zinc-500 leading-relaxed">
            Practical, prompt-driven modules designed to take you from an empty folder 
            to a production-ready architecture. No fluff, just shipping.
          </p>
        </div>

        {/* 2. Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Link key={course.slug} href={`/courses/${course.slug}`} className="group h-full block">
              <Card className="h-full border-zinc-200 bg-white shadow-none transition-all duration-300 hover:border-zinc-400 hover:shadow-lg hover:-translate-y-1 overflow-hidden flex flex-col">
                
                {/* A. Abstract Visual Header (CSS-only UI preview) */}
                <div className="h-48 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden flex items-end justify-center px-6 pt-6">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* The "Window" */}
                    <div className="w-full h-full bg-white rounded-t-xl shadow-sm border border-zinc-200 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 p-4 flex flex-col gap-3">
                        {/* Window Controls */}
                        <div className="flex gap-1.5 mb-1 opacity-50">
                            <div className="w-2 h-2 rounded-full bg-zinc-300" />
                            <div className="w-2 h-2 rounded-full bg-zinc-300" />
                            <div className="w-2 h-2 rounded-full bg-zinc-300" />
                        </div>
                        {/* Abstract Code Lines */}
                        <div className="space-y-2">
                           <div className="h-2 w-1/3 bg-zinc-100 rounded-full" />
                           <div className="h-2 w-3/4 bg-zinc-50 rounded-full" />
                           <div className="h-2 w-1/2 bg-zinc-50 rounded-full" />
                        </div>
                        {/* Accent for variety based on index (optional) */}
                        <div className={`mt-auto h-1 w-full rounded-full opacity-20 ${
                           index % 3 === 0 ? 'bg-blue-500' : index % 3 === 1 ? 'bg-orange-500' : 'bg-purple-500'
                        }`} />
                    </div>
                </div>

                {/* B. Card Content */}
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                     <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        Module 0{index + 1}
                     </span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-zinc-500 leading-relaxed mb-8 flex-1">
                    {course.description}
                  </p>

                  <div className="flex items-center text-sm font-bold text-zinc-900 mt-auto pt-6 border-t border-zinc-100">
                    Start Learning 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-zinc-400 group-hover:text-blue-600" />
                  </div>
                </CardContent>

              </Card>
            </Link>
          ))}

          {/* 3. Empty State */}
          {courses.length === 0 && (
            <div className="col-span-full py-32 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50 flex flex-col items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                <BookOpen className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">No courses published yet</h3>
              <p className="text-zinc-500 max-w-sm mt-2">
                Add <code>.mdx</code> files to your content directory to populate this grid.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}