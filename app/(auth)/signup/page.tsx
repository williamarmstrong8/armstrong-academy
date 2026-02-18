import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";

export default function SignupPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Create an account
        </h1>
        <p className="text-sm text-zinc-500">
          Enter your email below to create your account
        </p>
      </div>

      <div className="grid gap-6">
        <form>
          <div className="grid gap-4">
             {/* Optional: Add Name Field */}
             <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Jane Doe"
                type="text"
                autoCapitalize="words"
                className="bg-zinc-50 border-zinc-200"
              />
            </div>

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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="bg-zinc-50 border-zinc-200"
              />
            </div>
            
            <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
              Create Account
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
        By clicking continue, you agree to our{" "}
        <Link 
          href="/terms" 
          className="underline underline-offset-4 hover:text-zinc-900"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link 
          href="/privacy" 
          className="underline underline-offset-4 hover:text-zinc-900"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {/* <p className="px-8 text-center text-sm text-zinc-500 mt-4">
        Already have an account?{" "}
        <Link 
          href="/login" 
          className="underline underline-offset-4 hover:text-zinc-900"
        >
          Log in
        </Link>
      </p> */}
    </>
  );
}