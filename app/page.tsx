import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <p className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground">
          Learn fundamentals by building real things
        </p>

        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          Copy. Paste. Build.
          <span className="block text-muted-foreground">
            Learn the fundamentals that make websites scale.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Armstrong Academy gives you modern, copy-paste prompts that teach you
          the why while you ship the what. Build cleaner components, stronger
          foundations, and sites that don’t break when you grow.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/courses">Start learning</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/components">Browse components</Link>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Next.js best practices</span>
          <span className="hidden sm:inline">•</span>
          <span>shadcn/ui components</span>
          <span className="hidden sm:inline">•</span>
          <span>prompts that teach fundamentals</span>
          <span className="hidden sm:inline">•</span>
          <span>built for scale</span>
        </div>
      </section>
    </main>
  );
}
