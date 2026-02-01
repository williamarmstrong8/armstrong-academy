import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Loader2 } from "lucide-react"; // Make sure to import Github from lucide

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Welcome back
        </h1>
        <p className="text-sm text-zinc-500">
          Enter your email below to sign in to your account
        </p>
      </div>

      <div className="grid gap-6">
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="bg-zinc-50 border-zinc-200"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link 
                  href="/auth/forgot-password"
                  className="text-xs text-zinc-500 hover:text-zinc-900 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="bg-zinc-50 border-zinc-200"
              />
            </div>
            <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
              Sign In
            </Button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-zinc-500">
              Or continue with
            </span>
          </div>
        </div>

        <Button variant="outline" className="w-full border-zinc-200 bg-white hover:bg-zinc-50">
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
      </div>

      <p className="px-8 text-center text-sm text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link 
          href="/auth/signup" 
          className="underline underline-offset-4 hover:text-zinc-900"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}