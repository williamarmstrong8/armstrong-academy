import { HeroSection } from "@/components/home/hero-section";
import { BentoGrid } from "@/components/home/bento-grid";
import { LearningPath } from "@/components/home/learning-path";
// import { ProjectShowcase } from "@/components/home/project-showcase";
import { getAllCourses } from "@/lib/courses";

const COURSE_ORDER = ['5-step-foundation', 'database-integration', 'forms-that-save-to-database', 'building-a-blog-with-markdown'];

export default function HomePage() {
  const allCourses = getAllCourses();
  const courses = [...allCourses].sort(
    (a, b) => (COURSE_ORDER.indexOf(a.slug) === -1 ? 999 : COURSE_ORDER.indexOf(a.slug)) -
              (COURSE_ORDER.indexOf(b.slug) === -1 ? 999 : COURSE_ORDER.indexOf(b.slug))
  );

  return (
    <>  {/* 1. Hero Section */}
      <HeroSection />
      {/* 2. Bento Grid */}
      <BentoGrid />
      {/* 3. Learning Path */}
      <LearningPath courses={courses} />
      {/* 4. Project Showcase */}
      {/* <ProjectShowcase /> */}
    </>
  );
}
