"use client";

import { useState } from "react";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    const target = event.currentTarget;
    setTimeout(() => {
      target.reset();
      setAgreed(false);
      setSubmitted(false);
    }, 3500);
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-200 bg-white px-5 py-4 text-base text-zinc-900 placeholder:text-zinc-500 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 sm:p-8"
    >
      <label htmlFor={`${idPrefix}-name`} className="sr-only">
        Full Name
      </label>
      <input
        id={`${idPrefix}-name`}
        name="name"
        type="text"
        required
        placeholder="Full Name*"
        className={inputClass}
      />

      <label htmlFor={`${idPrefix}-email`} className="sr-only">
        Email
      </label>
      <input
        id={`${idPrefix}-email`}
        name="email"
        type="email"
        required
        placeholder="Email*"
        className={inputClass}
      />

      <div className="flex gap-3">
        <button
          type="button"
          className="flex h-[58px] shrink-0 items-center gap-1 rounded-lg border border-zinc-200 bg-white px-4 text-base text-zinc-700"
          aria-label="Country code: +1"
        >
          <span>+1</span>
          <ChevronDown className="h-4 w-4 text-[#565656]" />
        </button>
        <label htmlFor={`${idPrefix}-phone`} className="sr-only">
          Phone number
        </label>
        <input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          required
          placeholder="Phone number*"
          className={inputClass}
        />
      </div>

      <label htmlFor={`${idPrefix}-postal`} className="sr-only">
        Loved one&apos;s postal code
      </label>
      <input
        id={`${idPrefix}-postal`}
        name="postal"
        type="text"
        placeholder="Loved one's postal code (Optional)"
        className={inputClass}
      />

      <div className="flex items-start gap-3 text-sm text-zinc-600">
        <input
          id={`${idPrefix}-agree`}
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#4A90E2]"
          required
        />
        <label htmlFor={`${idPrefix}-agree`} className="leading-6 cursor-pointer">
          By checking this box, you confirm that you agree to Care41{" "}
          <a
            href="/terms-and-conditions"
            className="font-medium text-[#4A90E2] hover:underline"
          >
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            className="font-medium text-[#4A90E2] hover:underline"
          >
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={!agreed}
        className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-lg bg-[#4A90E2] px-8 text-base font-medium text-white shadow-md transition-colors hover:bg-[#3A7BC8] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitted ? "Request Sent — Thank You!" : "Send Request"}
      </button>
    </form>
  );
}
