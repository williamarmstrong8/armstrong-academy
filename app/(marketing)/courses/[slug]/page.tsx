import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug, getAllCourses } from "@/lib/courses";
import { markdownToReact } from "@/lib/markdownToReact";
import { CourseBody } from "@/components/courses/course-body";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} | Armstrong Academy`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const reactContent = await markdownToReact(course.content);

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
        <article>
          <CourseBody reactContent={reactContent} />
        </article>

        {/* Footer Navigation */}
        <div className="mt-24 pt-10 border-t border-zinc-100">
          <div className="flex justify-between items-center">
            <div className="text-sm text-zinc-400">Armstrong Academy</div>
            <Link
              href="/courses"
              className="text-sm font-bold text-zinc-900 hover:underline"
            >
              Complete Module →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
