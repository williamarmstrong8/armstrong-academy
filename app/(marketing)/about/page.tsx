import Link from "next/link";
import { ArrowRight, Terminal, Zap, Compass, Code2 } from "lucide-react";

export const metadata = {
  title: "About | Armstrong Academy",
  description: "The mission behind prompt-driven engineering education.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      
      {/* 1. Hero Section: The Manifesto */}
      <section className="pt-32 pb-24 px-6 border-b border-zinc-100">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              00 / The Mission
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-12">
            The syntax of the future <br />
            is <span className="text-zinc-400">natural language.</span>
          </h1>

          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed text-zinc-600 mb-8">
              We are entering the golden age of creation. The barrier to entry for building software 
              has collapsed. It is no longer about memorizing syntax; it is about 
              <span className="text-zinc-900 font-medium"> vision, architecture, and direction.</span>
            </p>
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2 text-sm font-bold border-b border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors"
            >
              View the Curriculum <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Grid: "The Spec Sheet" */}
      <section className="py-24 px-6 bg-zinc-50/50">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-16">
             <h2 className="text-3xl font-medium tracking-tight">Core Principles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 01 */}
            <div className="group relative bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
              <span className="block font-mono text-xs text-zinc-400 mb-6">01</span>
              <div className="mb-6 w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <Terminal size={20} />
              </div>
              <h3 className="text-xl font-medium mb-3">Foundation First</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                AI can write code, but it cannot decide your architecture. We focus on the "Day 1" 
                setup—auth, database, and structure—that determines project success.
              </p>
            </div>

            {/* Card 02 */}
            <div className="group relative bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
              <span className="block font-mono text-xs text-zinc-400 mb-6">02</span>
              <div className="mb-6 w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Compass size={20} />
              </div>
              <h3 className="text-xl font-medium mb-3">Prompt Engineering</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Learning to communicate intent to an LLM is the new "knowing syntax." 
                We provide the master prompts and mental models to get pixel-perfect results.
              </p>
            </div>

            {/* Card 03 */}
            <div className="group relative bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
              <span className="block font-mono text-xs text-zinc-400 mb-6">03</span>
              <div className="mb-6 w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-medium mb-3">Speed to Market</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                What used to take 2 weeks now takes 2 hours. We teach you how to move 
                at the speed of thought without breaking things or creating technical debt.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Context: Visual Story */}
      <section className="py-24 px-6 border-t border-zinc-100">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-medium tracking-tight mb-8">
                Why we started
              </h2>
              <div className="space-y-6 text-lg text-zinc-500 font-light leading-relaxed">
                <p>
                  The landscape of web development has changed forever. Tools like Cursor, 
                  Windsurf, and v0 have made writing code trivial. The bottleneck is no 
                  longer <span className="text-zinc-900 italic font-serif">typing</span>—it's <span className="text-zinc-900 italic font-serif">thinking</span>.
                </p>
                <p>
                  Most tutorials still teach you how to center a div manually. We believe 
                  that's a waste of time.
                </p>
                <p>
                  Our goal is to create a generation of <strong className="text-zinc-900 font-medium">Design Engineers</strong> who can visualize a full-stack application and use AI to manifest it instantly, ensuring it is secure, scalable, and clean.
                </p>
              </div>
            </div>
            
            {/* Visual Decoration: "The Blueprint" */}
            <div className="order-1 lg:order-2 relative h-[400px] bg-zinc-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 shadow-2xl">
                
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Floating Elements */}
                <div className="relative z-10 w-full max-w-xs space-y-4">
                    
                    {/* Element 1: The Prompt */}
                    <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700 shadow-xl transform -rotate-2 translate-x-4">
                        <div className="flex gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-red-500" />
                             <div className="w-2 h-2 rounded-full bg-yellow-500" />
                             <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-zinc-600 rounded-full animate-pulse" />
                            <div className="h-2 w-1/2 bg-zinc-600 rounded-full" />
                        </div>
                    </div>

                    {/* Arrow Connection */}
                    <div className="flex justify-center text-zinc-500">
                        <Code2 size={24} />
                    </div>

                    {/* Element 2: The Result */}
                    <div className="bg-white rounded-lg p-4 shadow-xl transform rotate-2 -translate-x-4">
                        <div className="h-24 bg-zinc-100 rounded border border-zinc-200 border-dashed flex items-center justify-center">
                           <span className="text-[10px] font-mono text-zinc-400">Preview</span>
                        </div>
                        <div className="mt-3 flex gap-2">
                             <div className="h-2 w-8 bg-zinc-200 rounded-full" />
                             <div className="h-2 w-16 bg-zinc-900 rounded-full" />
                        </div>
                    </div>

                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}