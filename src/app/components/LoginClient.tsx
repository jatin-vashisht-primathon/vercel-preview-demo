"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function LoginClient() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
        return;
      }
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      setError(data?.error ?? "Invalid email or OTP");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#EAEDF3] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-[#1F2937] sm:text-3xl">
            Sign In
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Enter your email and one-time password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#404040]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-md border border-zinc-300 bg-white px-3 text-base text-zinc-900 outline-none transition-colors focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/30"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="otp" className="text-sm font-medium text-[#404040]">
              OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="h-11 rounded-md border border-zinc-300 bg-white px-3 text-base tracking-widest text-zinc-900 outline-none transition-colors focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/30"
              placeholder="6-digit code"
            />
          </div>

          {error && (
            <p
              role="alert"
              data-testid="login-error"
              className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-[#4A90E2] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3A7BC8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
