"use client";

import Image from "next/image";
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

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function TakeFirstStepSection() {
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

  const fieldWrapper =
    "flex items-center rounded-lg border border-[#E5E5E5] bg-white";
  const inputClass =
    "w-full rounded-lg border-none bg-white px-5 py-4 text-base text-[#565656] placeholder:text-[#565656] focus:outline-none";

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Green background card */}
          <div className="absolute inset-0 rounded-lg bg-[#6CC57C]">
            <Image
              src="/care41/home_contact_old_couple.png"
              alt="Caregiver with senior"
              width={482}
              height={442}
              sizes="(max-width: 1024px) 0px, (max-width: 1280px) 420px, 482px"
              className="absolute bottom-0 right-0 z-10 hidden h-96 w-[420px] rounded-lg object-cover lg:block xl:h-[442px] xl:w-[482px]"
            />
          </div>

          {/* Content */}
          <div className="relative px-4 py-10 mb-9 sm:px-6 lg:px-10">
            <div className="flex flex-col items-start lg:flex-row lg:gap-16">
              <div className="w-full pl-0 sm:pl-2 lg:w-1/2 xl:w-[60%]">
                <h2 className="mb-6 text-[40px] font-medium leading-[1.2] tracking-[-0.022em] text-white">
                  Take the First Step to Set Up a Personalized Caregiving
                  Solution for Your Family.
                </h2>
                <p className="mb-10 text-base font-medium leading-[1.5] tracking-[-0.011em] text-white/80 md:mb-12">
                  We appreciate you taking the time to send us a request. A
                  Care41 Account Manager will be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className={fieldWrapper}>
                    <label htmlFor="cta-name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full Name*"
                      className={inputClass}
                    />
                  </div>

                  <div className={fieldWrapper}>
                    <label htmlFor="cta-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email*"
                      className={inputClass}
                    />
                  </div>

                  <div className={`${fieldWrapper} relative`}>
                    <div className="flex h-full select-none items-center gap-1 rounded-l-lg px-4 text-[#565656]">
                      <span className="text-base font-medium">+1</span>
                      <ChevronDown className="ml-1 h-4 w-4 text-[#565656]" />
                    </div>
                    <label htmlFor="cta-phone" className="sr-only">
                      Phone number
                    </label>
                    <input
                      id="cta-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Phone number*"
                      className="w-full rounded-lg border-none bg-white py-4 pr-5 text-base text-[#565656] placeholder:text-[#565656] focus:outline-none"
                    />
                  </div>

                  <div className={fieldWrapper}>
                    <label htmlFor="cta-postal" className="sr-only">
                      Loved one&apos;s postal code
                    </label>
                    <input
                      id="cta-postal"
                      name="postal"
                      type="text"
                      maxLength={6}
                      placeholder="Loved one's postal code (Optional)"
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-4 flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => setAgreed((v) => !v)}
                      aria-pressed={agreed}
                      aria-label="Agree to terms"
                      className={`mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
                        agreed
                          ? "border-[#4A90E2] bg-[#4A90E2] text-white"
                          : "border-gray-300 bg-white text-transparent hover:border-gray-400"
                      }`}
                    >
                      <CheckIcon className="h-3 w-3" />
                    </button>
                    <label
                      htmlFor="cta-agree"
                      className="cursor-pointer text-sm leading-relaxed text-white/90"
                      onClick={() => setAgreed((v) => !v)}
                    >
                      By checking this box, you confirm that you agree to
                      Care41&nbsp;
                      <a
                        href="/terms-and-conditions"
                        className="border-b border-white font-semibold text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Terms &amp; Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        className="border-b border-white font-semibold text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!agreed}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#4A90E2] px-[38px] py-4 text-lg font-medium tracking-[-0.011em] text-white transition-colors hover:bg-[#3A7BC8] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitted ? "Request Sent — Thank You!" : "Send Request"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
