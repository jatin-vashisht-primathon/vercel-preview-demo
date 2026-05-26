"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Package = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
};

const PACKAGES: Package[] = [
  {
    name: "Care41 Home Attendants",
    price: "$300",
    period: "/monthly",
    description:
      "Get trained and verified home attendants matched to your family's specific dietary, cultural, and geographic needs.",
    features: [
      "Home Attendant - Ongoing care",
      "24*7 support",
      "Community Feature Available on All Services",
    ],
  },
  {
    name: "Care41 Estate Planning",
    price: "$10",
    period: "/monthly",
    description:
      "Comprehensive Estate Planning with professionals who understand cross-border accounting and taxation regulations. Package includes consultation, preparation, and any ongoing advice/changes needed.",
    features: [
      "Estate Planning Consultation 1 Hour",
      "24*7 support",
      "Community Feature Available on All Services",
    ],
  },
  {
    name: "Care41 Senior Yoga Care",
    price: "$40",
    period: "/monthly",
    description:
      "Unlock the power of yoga at home. Our instructors are available to visit at your home or if you prefer, conduct the session remotely.",
    features: [
      "Yoga Virtual - 4 Sessions Per Month",
      "24*7 support",
      "Community Feature Available on All Services",
    ],
  },
  {
    name: "Care41 Senior Medical Care ElderEase",
    price: "$140",
    period: "/monthly",
    description:
      "This service provides you with monthly medical monitoring and support. This includes twice a day check-ins on WhatsApp, training of home attendants, and availability of a medical professional 24X7. Note - Any other costs such as Doctor visits and diagnostic procedures etc. are billed as utilized. Please discuss with your Care Manager.",
    features: [
      "Care41 Online Subscription",
      "Senior Medical Care ElderEase",
      "Online Community",
      "24*7 support",
      "Community Feature Available on All Services",
    ],
  },
  {
    name: "Care41 Starter Package",
    price: "$15",
    period: "/monthly",
    description:
      "Get Started with Care41's basic subscription. This package assigns you a Care Manager who is your point of control for all things related to Care41's platform. Your Care Manager is your personal concierge who will customize Care41's plan for your specific situation. This package also gives you access to an online community for Care41 families to meet and enjoy learning, entertaining discussions, and connection with fellow families.",
    features: [
      "Online Community",
      "Care41 Online Subscription",
      "24*7 support",
      "Community Feature Available on All Services",
    ],
  },
];

const FAQS = [
  {
    q: "How do you manage the quality of your services?",
    a: "We partner with best-in-class providers and practitioners. Each Provider must go through a deep due diligence process and continue to adhere to our very strict Service Level Agreements. Each interaction is tracked and measured for customer satisfaction.",
  },
  {
    q: "How much does the service cost? How will I be billed?",
    a: "The basic subscription to Care41 is $15/month (waived for the first 2 months.) Every other service is on-demand and can be activated or deactivated on demand with a 30 day notification window. Every service can be billed monthly or annually. We are an authorized Stripe platform and can use any digital form of payment.",
  },
  {
    q: "Where and to whom is this Service available?",
    a: "Currently, Care41 operates in Mumbai, India with plans to expand to many other cities in India over the next few months. Primary Caregivers can reside anywhere in the world. In fact, our elderly members. have children or siblings living in the US, UK and Asia.",
  },
  {
    q: "How does Care41 manage communication and client relationships?",
    a: "Every family in the Care41 network is assigned a primary Account Manager and assigned to a dedicated WhatsApp group. Daily reports are provided via WhatsApp which are reviewed by medical professionals (if signed up for Medical), in addition to scheduling updates for other services. The Account Manager provides monthly reporting to the family in addition to being available for any questions or emergencies that might arise.",
  },
  {
    q: "Why do you focus on other things besides just medical care?",
    a: "Our belief is that medical care while vital is only one part of wellbeing. We are focused on holistic wellness - from social engagement and companionship, clean and secure physical space, physical fitness and healthy lifestyle, financial planning and wellness, creative arts, and so much more - so that your loved one can truly be well taken care of and live a happy, productive daily life.",
  },
  {
    q: "What if my loved one is single or is physically impaired?",
    a: "We understand every family's situation is unique. We personalize all aspects of care based on financial affordability, domestic situation, physical capability, mental cognition, and individual goals.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 4.5L4.5 8L11 1.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4A90E2]">
        <CheckIcon />
      </div>
      <span className="text-xs font-medium leading-relaxed text-[#1A1A1A]">
        {children}
      </span>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 transition-transform duration-200"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PackageCard({
  pkg,
  expanded,
  onToggleExpanded,
  onViewDetails,
}: {
  pkg: Package;
  expanded: boolean;
  onToggleExpanded: () => void;
  onViewDetails: () => void;
}) {
  return (
    <div className="flex h-auto min-h-[540px] flex-col rounded-2xl bg-white text-[#1A1A1A] transition-all duration-300 sm:min-h-[610px] xl:shadow">
      <div className="flex flex-shrink-0 flex-col space-y-1.5 p-6 pb-4">
        <div className="mb-1 break-words text-lg font-semibold tracking-tight text-[#1A1A1A]">
          {pkg.name}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-[#1A1A1A]">
            {pkg.price}
          </span>
          <span className="font-semibold text-[#1A1A1A] opacity-70">
            {pkg.period}
          </span>
        </div>
        <div className="mt-4">
          <p
            className={`text-xs font-semibold leading-relaxed text-[#000000] opacity-80 transition-all duration-300 ease-in-out ${
              expanded ? "" : "line-clamp-2"
            }`}
          >
            {pkg.description}
          </p>
          {pkg.description.length > 110 && (
            <button
              type="button"
              onClick={onToggleExpanded}
              className="mt-1 text-xs text-[#4A90E2] underline transition-colors duration-200 hover:text-[#3A7BC8]"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pb-6 pt-0">
        <div className="mb-4 h-[1.5px] w-full shrink-0 bg-[#D5D5D5]" />
        <div className="flex flex-1 flex-col gap-4">
          <h4 className="font-semibold text-[#1A1A1A]">What&apos;s Included</h4>
          <div className="flex flex-col gap-4">
            {pkg.features.map((feature) => (
              <CheckBullet key={feature}>{feature}</CheckBullet>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onViewDetails}
            className="text-sm font-medium text-[#565656] underline transition-colors hover:text-[#1A1A1A] lg:text-base"
          >
            View Package details
          </button>
          <Link
            href="/#contact-form"
            className="w-full rounded-lg bg-[#4A90E2] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#3A7BC8]"
          >
            Contact Us
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sm text-gray-600 transition-colors hover:text-[#4A90E2]"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}

function PackageModal({
  pkg,
  onClose,
}: {
  pkg: Package;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="package-modal-title"
    >
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="fixed inset-0 bg-black/60"
      />
      <div className="relative z-[71] max-h-[85vh] w-[92%] overflow-y-auto rounded-2xl bg-white p-5 shadow-lg sm:w-[560px] sm:p-6 md:w-[720px] md:p-8">
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-6 top-6 text-[#1A1A1A] hover:text-[#565656]"
        >
          <CloseIcon />
        </button>
        <div>
          <h3
            id="package-modal-title"
            className="mb-1 break-words text-lg text-[#1A1A1A] md:text-xl"
          >
            {pkg.name}
          </h3>
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-[#1A1A1A] sm:text-2xl">
              {pkg.price}
            </span>
            <span className="font-semibold text-[#1A1A1A] opacity-70">
              {pkg.period}
            </span>
          </div>
          <Link
            href="/terms-and-conditions"
            className="mb-4 block text-left text-xs font-medium text-[#4A90E2] underline transition-colors hover:text-[#3A7BC8]"
          >
            Terms &amp; Conditions
          </Link>
          <p className="text-xs font-semibold leading-relaxed text-[#000000] opacity-80 sm:text-sm">
            {pkg.description}
          </p>
        </div>

        <div className="my-5 h-[1.5px] w-full shrink-0 bg-[#D5D5D5]" />

        <div>
          <h4 className="mb-4 font-semibold text-[#1A1A1A]">
            What&apos;s Included
          </h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pkg.features.map((feature) => (
              <CheckBullet key={feature}>{feature}</CheckBullet>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PackagesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [expandedSet, setExpandedSet] = useState<Set<number>>(new Set());
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1280) setSlidesPerView(3);
      else if (w >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = Math.max(0, PACKAGES.length - slidesPerView);
  const effectiveIndex = Math.min(selectedIndex, maxIndex);

  const goPrev = useCallback(
    () => setSelectedIndex((i) => Math.max(0, Math.min(i, maxIndex) - 1)),
    [maxIndex],
  );
  const goNext = useCallback(
    () => setSelectedIndex((i) => Math.min(maxIndex, i + 1)),
    [maxIndex],
  );

  const toggleExpanded = useCallback((idx: number) => {
    setExpandedSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  const trackStyle = useMemo(
    () => ({
      transform: `translate3d(calc(-${effectiveIndex} * (100% / ${slidesPerView})), 0, 0)`,
      transition: "transform 350ms ease",
    }),
    [effectiveIndex, slidesPerView],
  );

  const slideBasis =
    slidesPerView === 3
      ? "basis-1/3"
      : slidesPerView === 2
        ? "basis-1/2"
        : "basis-full";

  return (
    <div className="relative w-full" role="region" aria-roledescription="carousel">
      <div className="overflow-hidden">
        <div className="my-4 flex -ml-12" style={trackStyle}>
          {PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${PACKAGES.length}`}
              className={`min-w-0 shrink-0 grow-0 pl-12 ${slideBasis}`}
            >
              <PackageCard
                pkg={pkg}
                expanded={expandedSet.has(idx)}
                onToggleExpanded={() => toggleExpanded(idx)}
                onViewDetails={() => setOpenModalIndex(idx)}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        disabled={effectiveIndex === 0}
        aria-label="Previous package"
        className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A90E2] shadow transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        onClick={goNext}
        disabled={effectiveIndex >= maxIndex}
        aria-label="Next package"
        className="absolute right-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A90E2] shadow transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRightIcon />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === effectiveIndex}
            className={`h-2 rounded-full transition-all ${
              i === effectiveIndex ? "w-6 bg-[#4A90E2]" : "w-2 bg-[#D5D5D5]"
            }`}
          />
        ))}
      </div>

      {openModalIndex !== null && (
        <PackageModal
          pkg={PACKAGES[openModalIndex]}
          onClose={() => setOpenModalIndex(null)}
        />
      )}
    </div>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  panelId,
  buttonId,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  buttonId: string;
}) {
  return (
    <div className="mb-6 overflow-hidden border-b bg-white">
      <h3 className="flex">
        <button
          type="button"
          id={buttonId}
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={onToggle}
          className="flex w-full flex-1 items-center justify-between p-6 text-left text-sm font-medium transition-all hover:underline"
        >
          <span className="pr-6 text-base font-[16px] text-[#2C2738] md:text-lg">
            {question}
          </span>
          <span
            className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="overflow-hidden text-sm"
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-[14px] font-normal leading-[1.6] text-[#565656] md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="w-full">
      {FAQS.map((faq, i) => (
        <FaqItem
          key={faq.q}
          question={faq.q}
          answer={faq.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          panelId={`packages-faq-panel-${i}`}
          buttonId={`packages-faq-trigger-${i}`}
        />
      ))}
    </div>
  );
}

export default function PackagesClient() {
  return (
    <main className="flex-1">
      {/* Hero band */}
      <section className="relative h-[260px] overflow-hidden md:h-[29vh]">
        <Image
          src="/care41/about_hero_background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
          style={{ objectPosition: "50% 22%" }}
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative flex h-full items-center justify-center px-4">
          <h1 className="max-w-3xl text-center text-3xl font-medium leading-[1.2] tracking-tight text-white sm:text-4xl md:text-[40px]">
            Our Packages
          </h1>
        </div>
      </section>

      {/* Blue banner */}
      <section className="w-full bg-[#4A90E2] py-8 md:py-12">
        <div className="flex flex-col items-center justify-between px-4 sm:px-8 md:flex-row md:px-12 lg:px-16 xl:px-28">
          <h2 className="mb-6 max-w-lg text-center text-xl font-normal leading-[1.6] tracking-tight text-white sm:text-2xl md:mb-0 md:text-left md:text-3xl lg:max-w-3xl">
            Select Any Package That Best Suits Your Needs. Have Questions? Hit
            the Contact Us Button and a Care Manager Will Contact You in the
            Next 24 Hours.
          </h2>
          <Link
            href="/#contact-form"
            className="inline-flex w-full min-w-36 items-center justify-center rounded bg-white px-6 py-3 text-base font-semibold text-[#4A90E2] transition-colors hover:text-[#3A7BC8] sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:min-w-44 lg:min-w-56"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Packages carousel */}
      <section className="flex min-h-[700px] w-full items-center justify-center bg-[#F8F9FA] py-12 sm:py-3 md:h-[90vh] lg:py-36">
        <div className="flex h-full w-full flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32">
          <PackagesCarousel />
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full bg-[#f5f8fc] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-medium leading-[1.2] tracking-tight text-[#2C2738] md:text-[40px] lg:text-[40px]">
            Here Are Some FAQs That Come to Mind for Our Clients
          </h2>
          <p className="mb-8 text-base font-medium leading-[1.375] tracking-tight text-[#404040] md:mb-16">
            Our Account Management Team is available 24/7 to address any
            questions or concerns you may have.
          </p>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
