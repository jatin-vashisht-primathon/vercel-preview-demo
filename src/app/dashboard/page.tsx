import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Care41",
};

export default function DashboardPage() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-white px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#1F2937] sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-3 text-base text-zinc-500">
          You are signed in.
        </p>
      </div>
    </main>
  );
}
