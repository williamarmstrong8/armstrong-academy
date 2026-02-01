import { AuthShowcase } from "@/components/auth/auth-showcase";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full overflow-auto overscroll-none">
      <div className="min-h-full w-full lg:grid lg:grid-cols-3">
        <div className="hidden lg:block bg-zinc-900 min-h-full lg:col-span-1 border-l border-zinc-800">
          <AuthShowcase />
        </div>

        <div className="lg:col-span-2 flex flex-col p-8 bg-white min-h-full">
        <div className="flex justify-center mb-8">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900">
            Armstrong Academy
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[350px] space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}