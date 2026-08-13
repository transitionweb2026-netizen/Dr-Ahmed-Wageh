import { Stethoscope } from "lucide-react";
import { signIn } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/[0.03]">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-brand-600">
            <Stethoscope className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <h1 className="font-display text-xl font-semibold text-brand-950">Admin Login</h1>
            <p className="mt-1 text-sm text-slate-500">Dr. Ahmed Wagih — content management</p>
          </div>
        </div>

        {error && (
          <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-700">{error}</p>
        )}

        <form action={signIn} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-brand-950 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-brand-950 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
