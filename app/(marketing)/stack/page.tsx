import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Cpu, 
  Database, 
  Layout, 
  Sparkles, 
  Layers, 
  Wind, 
  Box, 
  Zap,
  Terminal,
  Code2
} from "lucide-react";

export const metadata = {
  title: "The Stack | Armstrong Academy",
  description: "The opinionated, production-ready stack for modern design engineers.",
};

// --- Data ---
const stackLayers = [
  {
    title: "The AI Workbench",
    description: "The tools that act as your force multiplier. Coding without these is coding in the past.",
    items: [
      {
        name: "Cursor",
        role: "The Editor",
        icon: <Terminal className="w-5 h-5" />,
        verdict: "VS Code is dead. Long live Cursor. Its ability to index your codebase and suggest architecture changes makes it the ultimate pair programmer.",
        popular: true,
      },
      {
        name: "v0.dev",
        role: "UI Generation",
        icon: <Code2 className="w-5 h-5" />,
        verdict: "The fastest way to go from idea to React component. We use v0 to scaffold the UI to 90%, then refine the logic manually.",
      },
      {
        name: "Claude 4.5 Sonnet",
        role: "The Brain",
        icon: <Sparkles className="w-5 h-5" />,
        verdict: "The current king of coding LLMs. It understands complex context, refactoring patterns, and architectural nuance better than any model on the market.",
      }
    ]
  },
  {
    title: "The Frontend Core",
    description: "The industry standard. Fast, typed, and visually stunning.",
    items: [
      {
        name: "Next.js 16",
        role: "The Framework",
        icon: <Cpu className="w-5 h-5" />,
        verdict: "Server Components are the future. Next.js 16 handles routing, aggressive caching, and hydration better than anything else on the market.",
        popular: true,
      },
      {
        name: "Tailwind CSS",
        role: "Styling",
        icon: <Wind className="w-5 h-5" />,
        verdict: "Utility classes map perfectly to how LLMs 'think' about style. It allows for rapid iteration without context switching to CSS files.",
      },
      {
        name: "Shadcn UI",
        role: "Component Library",
        icon: <Layout className="w-5 h-5" />,
        verdict: "Not a library, but a collection of copy-paste components. Complete ownership of your code with accessible, beautiful defaults.",
      },
      {
        name: "Framer Motion",
        role: "Animation",
        icon: <Zap className="w-5 h-5" />,
        verdict: "The only library that makes complex React animations declarative and readable. Essential for the 'luxury' feel.",
      }
    ]
  },
  {
    title: "The Backend & Data",
    description: "Serverless, scalable, and type-safe from the database up.",
    items: [
      {
        name: "Supabase",
        role: "Database, Auth & Realtime",
        icon: <Database className="w-5 h-5" />,
        verdict: "The infinite scaler. We skip the ORM wars and use the type-safe Supabase SDK directly. It handles Postgres, Authentication, and Edge Functions in one cohesive platform.",
        popular: true,
      },
    ]
  }
];

export default function StackPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      
      {/* 1. Page Header */}
      <section className="pt-32 pb-20 px-6 border-b border-zinc-100">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 uppercase tracking-wider">
            <Layers size={12} />
            <span>The Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-8">
            The Reference Stack.
          </h1>

          <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl font-light">
            We don't chase trends. We choose tools that maximize shipping speed and maintainability. 
            This is the "Vibe Stack": opinionated, type-safe, and AI-optimized.
          </p>
        </div>
      </section>

      {/* 2. The Stack Grid - same padding as header: outer px-6, inner max-w */}
      <div className="px-6 py-24">
        <div className="container mx-auto max-w-5xl space-y-24">
        {stackLayers.map((layer, layerIndex) => (
          <div key={layerIndex}>
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight mb-2">{layer.title}</h2>
                <p className="text-zinc-500">{layer.description}</p>
              </div>
              <div className="h-px flex-1 bg-zinc-100 md:ml-8 translate-y-[-8px] hidden md:block" />
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {layer.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="group relative flex flex-col p-6 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-lg transition-all duration-300"
                >
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
                          {item.role}
                        </span>
                      </div>
                    </div>
                    
                    {/* Popular Badge (Optional) */}
                    {item.popular && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 uppercase tracking-wider">
                        Standard
                      </span>
                    )}
                  </div>

                  {/* Verdict / Description */}
                  <div className="mt-2">
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item.verdict}
                    </p>
                  </div>

                  {/* Micro-interaction Line */}
                  <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-zinc-100 group-hover:bg-zinc-200 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* 3. Bottom CTA */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="w-16 h-16 bg-white rounded-2xl border border-zinc-200 flex items-center justify-center mx-auto mb-8 shadow-sm">
             <Box className="w-8 h-8 text-zinc-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Stop arguing about tools. <br /> Start shipping.
          </h2>
          <p className="text-lg text-zinc-500 mb-10">
            We have done the research so you don't have to. 
            This stack is battle-tested and ready for your next billion-dollar idea.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-10 px-8 bg-zinc-900 text-white hover:bg-zinc-800 rounded-md" asChild>
              <Link href="/courses/5-step-foundation">
                Build the Foundation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-10 px-8 bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50 rounded-md" asChild>
              <Link href="/courses">
                Browse all Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}