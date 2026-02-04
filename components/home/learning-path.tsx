'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, BookOpen, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// --- Data ---
const modules = [
  {
    id: '01',
    title: 'The 5 Step Foundation',
    subtitle: 'From Zero to Deployed SaaS',
    description: 'The absolute essentials for building your first scalable SaaS application from scratch. No fluff, just shipping.',
    icon: <Monitor className="w-5 h-5" />,
    status: 'Available Now',
    color: 'bg-neutral-100 text-neutral-900',
    href: '/courses/5-step-foundation', // Real Link
  },
  {
    id: '02',
    title: 'Advanced State Management',
    subtitle: 'Redux, Zustand & Context',
    description: 'Stop struggling with useEffect. Master the patterns that keep large applications fast and bug-free.',
    icon: <Code className="w-5 h-5" />,
    status: 'Available Now',
    color: 'bg-blue-50 text-blue-700',
    href: '/courses', // Mock Link
  },
  {
    id: '03',
    title: 'UI/UX for Developers',
    subtitle: 'Design Rules & Typography',
    description: 'Learn the physics of UI, spacing, and color theory to build beautiful apps without needing a designer.',
    icon: <BookOpen className="w-5 h-5" />,
    status: 'Available Now',
    color: 'bg-pink-50 text-pink-700',
    href: '/courses', // Mock Link
  },
  {
    id: '04',
    title: 'Database Design 101',
    subtitle: 'Postgres & Prisma',
    description: 'Schema design, relations, and indexing. How to structure your data so it scales with your users.',
    icon: <Database className="w-5 h-5" />,
    status: 'Available Now',
    color: 'bg-emerald-50 text-emerald-700',
    href: '/courses', // Mock Link
  },
];

export function LearningPath() {
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
              A free, project-based roadmap designed for "builders"—people who want to 
              build beautiful software without getting bogged down in computer science theory.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="flex -space-x-4">
               {/* Tiny social proof avatars */}
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200" />
               ))}
               <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-900 text-white flex items-center justify-center text-xs font-bold">
                 1k+
               </div>
            </div>
            <p className="text-xs text-neutral-500 mt-2 text-right">Builders joined</p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, index) => (
            <ModuleCard key={mod.id} module={mod} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                <p className="text-neutral-500">The "Foundation" module is completely free and open.</p>
            </div>
            <Link href="/courses/5-step-foundation">
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

function ModuleCard({ module, index }: { module: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link 
        href={module.href}
        className="group block relative h-full p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all hover:shadow-sm"
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-lg ${module.color}`}>
            {module.icon}
          </div>
          <span className="text-xs font-mono text-neutral-400">
              MODULE {module.id}
          </span>
        </div>

        <h4 className="text-2xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
          {module.title}
        </h4>
        <p className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wide">
          {module.subtitle}
        </p>
        
        <p className="text-neutral-600 leading-relaxed mb-8">
          {module.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              module.status === 'Available Now' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-neutral-100 text-neutral-500'
          }`}>
              {module.status}
          </span>
          
          <div className="text-sm font-bold text-neutral-900 flex items-center gap-1 group-hover:gap-2 transition-all">
              View Course <ArrowRight size={14}/>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}