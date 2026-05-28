"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

const SLIDES = [
  "Thoughtful, personalized support for the seniors you love.",
  "A safe, comforting space your loved ones can call home.",
  "Caregivers who treat every elder with dignity and respect.",
];

const VALID_EMAIL = "test@gmail.com";

type Step = "email" | "otp";

export default function LoginClient() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (trimmed !== VALID_EMAIL) {
      setError("Invalid email. Please try again.");
      return;
    }
    setError(null);
    setStep("otp");
  }

  async function handleOtpSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), otp: otp.trim() }),
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

  function handleChangeEmail() {
    setStep("email");
    setOtp("");
    setError(null);
  }

  const inputBorder = error
    ? "border-red-500 focus:border-red-500"
    : "border-[#DCDCDC] focus:border-[#4A90E2]";

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 relative h-[300px] sm:h-[400px] md:h-auto">
        <Link
          href="/"
          aria-label="Care41 home"
          className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/care41/logo.png"
            alt="Care41 Logo"
            width={122}
            height={61}
            priority
            className="w-[100px] sm:w-[122px] h-auto drop-shadow-lg"
          />
        </Link>

        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/care41/signin-bg.jpg"
            alt="Care41 senior care"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover p-3 rounded-3xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-16 md:pb-24">
            <div className="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] text-center px-3 md:px-0">
              <p
                key={slide}
                className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-white leading-[1.389em] drop-shadow-lg transition-opacity duration-500"
              >
                {SLIDES[slide]}
              </p>
              <div className="flex gap-2 justify-center mt-3 sm:mt-4 md:mt-6">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={
                      i === slide
                        ? "transition-all duration-300 w-10 md:w-12 h-2 bg-[#FF8742] rounded-xl"
                        : "transition-all duration-300 w-2 h-2 bg-white rounded-full hover:bg-[#FF8742]/50"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center items-center py-8 md:py-0 px-4 md:px-0">
        <div className="w-full max-w-[90%] sm:max-w-[450px] md:max-w-[500px]">
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-[#1A1A1A] leading-[1.384em]">
            Welcome to
            <br />
            <span className="text-[#4A90E2]">Care41</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] font-normal text-[#565656] leading-[1.389em] mt-3 md:mt-4">
            To access account and manage services
          </p>
          <p className="text-[18px] sm:text-[20px] font-medium text-[#565656] leading-[1.25em] mt-6 md:mt-8">
            {step === "email" ? "Please Sign In" : "Enter OTP"}
          </p>

          {step === "email" ? (
            <form onSubmit={handleEmailSubmit} className="mt-6 md:mt-8" noValidate>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Email"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "login-error" : undefined}
                className={`w-full h-[50px] md:h-[60px] px-4 text-[16px] md:text-[18px] text-black border-[1.5px] ${inputBorder} rounded-lg bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {error && (
                <p
                  id="login-error"
                  role="alert"
                  data-testid="login-error"
                  className="mt-3 text-[14px] sm:text-[15px] font-medium text-red-600 leading-snug"
                >
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full h-[48px] md:h-[54px] bg-[#4A90E2] text-white text-[16px] md:text-[18px] font-medium rounded-lg mt-4 md:mt-5 transition-colors hover:bg-[#357ABD]"
              >
                Continue
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="mt-6 md:mt-8" noValidate>
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]*"
                maxLength={6}
                required
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, ""));
                  if (error) setError(null);
                }}
                placeholder="Enter OTP"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "login-error" : undefined}
                className={`w-full h-[50px] md:h-[60px] px-4 text-[16px] md:text-[18px] tracking-[0.3em] text-black border-[1.5px] ${inputBorder} rounded-lg bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {error && (
                <p
                  id="login-error"
                  role="alert"
                  data-testid="login-error"
                  className="mt-3 text-[14px] sm:text-[15px] font-medium text-red-600 leading-snug"
                >
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-[48px] md:h-[54px] bg-[#4A90E2] text-white text-[16px] md:text-[18px] font-medium rounded-lg mt-4 md:mt-5 transition-colors hover:bg-[#357ABD] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Signing in…" : "Sign In"}
              </button>
              <button
                type="button"
                onClick={handleChangeEmail}
                className="mt-4 block text-[14px] sm:text-[15px] font-medium text-[#4A90E2] hover:underline"
              >
                Use a different email
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
