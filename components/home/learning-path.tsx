'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, BookOpen, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Course } from '@/lib/courses';

const ICON_MAP: Record<string, { icon: React.ReactNode; color: string }> = {
  '5-step-foundation': { icon: <Monitor className="w-5 h-5" />, color: 'bg-neutral-100 text-neutral-900' },
  'database-integration': { icon: <Database className="w-5 h-5" />, color: 'bg-emerald-50 text-emerald-700' },
  'forms-that-save-to-database': { icon: <Code className="w-5 h-5" />, color: 'bg-blue-50 text-blue-700' },
  'building-a-blog-with-markdown': { icon: <BookOpen className="w-5 h-5" />, color: 'bg-pink-50 text-pink-700' },
};

const DEFAULT_STYLE = { icon: <BookOpen className="w-5 h-5" />, color: 'bg-neutral-100 text-neutral-900' };

interface LearningPathProps {
  courses: Course[];
}

export function LearningPath({ courses }: LearningPathProps) {
  return (
    <section className="py-24 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">
              The Curriculum
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              Don't just learn syntax.<br />
              <span className="text-neutral-400">Learn to ship.</span>
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              A free, project-based roadmap designed for "builders", people who want to 
              build beautiful software without getting bogged down in computer science theory.
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <ModuleCard key={course.slug} course={course} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                <p className="text-neutral-500">All courses are completely free and open.</p>
            </div>
            <Link href="/courses">
              <button className="px-8 py-4 bg-neutral-900 text-white rounded-lg font-bold hover:bg-neutral-800 transition-all flex items-center gap-2 group">
                  Start Learning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
        </div>

      </div>
    </section>
  );
}

// --- Individual Card Component ---

function ModuleCard({ course, index }: { course: Course; index: number }) {
  const style = ICON_MAP[course.slug] ?? DEFAULT_STYLE;
  const moduleNum = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link 
        href={`/courses/${course.slug}`}
        className="group block relative h-full p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all hover:shadow-sm"
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-lg ${style.color}`}>
            {style.icon}
          </div>
          <span className="text-xs font-mono text-neutral-400">
              MODULE {moduleNum}
          </span>
        </div>

        <h4 className="text-2xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h4>
        <p className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wide">
          {course.difficulty ?? 'Course'}
        </p>
        
        <p className="text-neutral-600 leading-relaxed mb-8">
          {course.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
              Available Now
          </span>
          
          <div className="text-sm font-bold text-neutral-900 flex items-center gap-1 group-hover:gap-2 transition-all">
              View Course <ArrowRight size={14}/>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}