import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { BentoGrid } from "@/components/home/bento-grid";
import { LearningPath } from "@/components/home/learning-path";
import { ProjectShowcase } from "@/components/home/project-showcase";


export default function HomePage() {
  return (
    <>  {/* 1. Hero Section */}
      <HeroSection />
      {/* 2. Bento Grid */}
      <BentoGrid />
      {/* 3. Learning Path */}
      <LearningPath />
      {/* 4. Project Showcase */}
      <ProjectShowcase />
    </>
  );
}
