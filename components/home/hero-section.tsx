import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Command, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 md:px-8 text-center overflow-hidden bg-white text-zinc-900 border-b border-zinc-100">
      
      {/* 0. Background Pattern (CSS Grid) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      {/* 1. Trust Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="tracking-wide uppercase">System Operational</span>
        <span className="text-zinc-300">|</span>
        <span>Updated for Next.js 16</span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="max-w-4xl text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] text-zinc-900 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
        The foundation for <br />
        <span className="text-zinc-400">AI-native builders.</span>
      </h1>

      {/* 3. Subheadline */}
      <p className="max-w-2xl mx-auto text-lg text-zinc-500 leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        Skip the boring setup entirely. Describe what you want in plain language, and ship a real app fast. No more wrestling with configs or boilerplate.
      </p>

      {/* 4. CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <Button size="lg" className="h-10 px-8 text-sm font-bold bg-zinc-900 text-white hover:bg-zinc-800 rounded-md" asChild>
          <Link href="/courses">
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="h-10 px-8 text-sm font-bold border-zinc-200 text-zinc-600 hover:text-zinc-900 rounded-md bg-white" asChild>
          <Link href="/stack">
            View the Stack
          </Link>
        </Button>
      </div>

      {/* 5. Visual Hook: The "Prompt-to-Product" Window */}
      <div className="relative w-full max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-200">
        
        {/* Glow Effect behind the window */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[100px] -z-10 rounded-full" />
        
        <div className="rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row h-[450px] md:h-[500px]">
          
          {/* LEFT: The "Prompt" (Input) */}
          <div className="w-full md:w-[40%] bg-zinc-50 border-r border-zinc-200 p-6 flex flex-col relative">
             
             {/* Fake Mac Window Controls */}
             <div className="flex gap-2 mb-8">
                <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
             </div>

             {/* The "AI Chat" UI */}
             <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4 uppercase tracking-wider">
                <Sparkles size={12} className="text-blue-500" />
                <span>AI Agent / Cursor</span>
             </div>

             {/* The Prompt Bubble */}
             <div className="bg-white border border-zinc-200 p-4 rounded-lg shadow-sm mb-4">
                <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                   "Create a responsive SaaS dashboard with a sidebar, a stats grid, and a recent activity feed. Use a clean, monochromatic aesthetic."
                </p>
             </div>

             {/* The "Thinking" State */}
             <div className="mt-auto space-y-3">
                 <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Zap size={12} className="text-yellow-500 fill-yellow-500" />
                    <span>Generating components...</span>
                 </div>
                 <div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-zinc-900 rounded-full" />
                 </div>
                 <div className="font-mono text-[10px] text-zinc-400 space-y-1">
                    <p>+ src/components/dashboard/stats-grid.tsx</p>
                    <p>+ src/components/layout/sidebar.tsx</p>
                 </div>
             </div>
          </div>

          {/* RIGHT: The "Product" (Output Preview) */}
          <div className="w-full md:w-[60%] bg-white p-8 relative overflow-hidden">
             
             {/* Abstract UI Representation of the Result */}
             <div className="absolute inset-0 bg-zinc-50/50" />
             
             {/* The Mock Dashboard */}
             <div className="relative z-10 h-full w-full bg-white rounded-xl border border-zinc-200 shadow-sm flex overflow-hidden transform md:translate-x-4 md:translate-y-4 transition-transform hover:translate-x-2 hover:translate-y-2 duration-500">
                
                {/* Sidebar */}
                <div className="w-16 md:w-48 border-r border-zinc-100 bg-zinc-50 p-4 flex flex-col gap-4">
                   <div className="h-6 w-6 rounded bg-zinc-900 mb-4" />
                   <div className="h-2 w-20 bg-zinc-200 rounded-full" />
                   <div className="h-2 w-16 bg-zinc-200 rounded-full" />
                   <div className="h-2 w-24 bg-zinc-200 rounded-full" />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-white">
                   {/* Header */}
                   <div className="flex justify-between items-center mb-8">
                      <div className="h-4 w-32 bg-zinc-100 rounded-full" />
                      <div className="h-8 w-8 rounded-full bg-zinc-100" />
                   </div>

                   {/* Stats Grid */}
                   <div className="grid grid-cols-3 gap-4 mb-8">
                      {[1, 2, 3].map((i) => (
                          <div key={i} className="p-4 rounded-lg border border-zinc-100 bg-zinc-50/50">
                             <div className="h-2 w-8 bg-zinc-200 rounded-full mb-2" />
                             <div className="h-6 w-16 bg-zinc-900 rounded-md" />
                          </div>
                      ))}
                   </div>

                   {/* Activity Feed */}
                   <div className="space-y-3">
                      <div className="h-2 w-full bg-zinc-100 rounded-full" />
                      <div className="h-2 w-5/6 bg-zinc-100 rounded-full" />
                      <div className="h-2 w-4/6 bg-zinc-100 rounded-full" />
                   </div>
                </div>

                {/* Floating "Live" Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    localhost:3000
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}