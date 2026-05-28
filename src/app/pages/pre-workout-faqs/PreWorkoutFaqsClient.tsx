"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Faq = { q: string; a: string };
type FaqSection = {
  id: string;
  number: string;
  title: string;
  faqs: Faq[];
};

const SECTIONS: FaqSection[] = [
  {
    id: "general",
    number: "01",
    title: "General Usage",
    faqs: [
      {
        q: "How do I choose the right pre-workout supplement?",
        a: "Choosing the right pre-workout depends mainly on your fitness goals and tolerance levels. Look for a balanced formula that supports energy, endurance, and focus without excessive stimulants. It is very important to choose a trusted brand that clearly mentions its ingredients and dosage.",
      },
      {
        q: "When should I take pre-workout for the best results?",
        a: "Most people take pre-workout before training to feel more energised and focused. Taking it consistently before your workouts can help you build a better routine and improve overall performance.",
      },
      {
        q: "How long before a workout should I take pre-workout?",
        a: "Ideally, you must take pre-workout around 20 to 30 minutes before your session. This gives your body enough time to absorb the ingredients and start feeling the effects.",
      },
      {
        q: "Can I take pre-workout on rest days?",
        a: "Pre-workout is usually for training days. On rest days, it is usually not necessary unless you need an energy boost for other activities.",
      },
      {
        q: "How often can I use pre-workout safely?",
        a: "Pre-workout can be used regularly as long as you follow the recommended dosage. It is also helpful to take occasional breaks to maintain its effectiveness.",
      },
    ],
  },
  {
    id: "performance",
    number: "02",
    title: "Performance",
    faqs: [
      {
        q: "Does pre-workout increase energy levels?",
        a: "Yes, most pre-workouts are designed to boost energy levels. Ingredients like caffeine help reduce fatigue and make you feel more alert and ready to train.",
      },
      {
        q: "Can pre-workout improve workout performance and endurance?",
        a: "Pre-workout may help you train for longer durations with better stamina. Ingredients like beta-alanine support endurance, allowing you to push through tougher workouts.",
      },
      {
        q: "Does pre-workout help with muscle pumps?",
        a: "Yes, nitric oxide boosters in pre-workouts improve blood flow, which may lead to better muscle pumps during exercise. This usually makes your training feel more effective and rewarding.",
      },
      {
        q: "Can it improve focus and mind-muscle connection?",
        a: "Many pre-workout supplements include ingredients that support mental focus. This can help you stay concentrated during your workout and improve your mind-muscle connection.",
      },
      {
        q: "Does pre-workout help lift heavier weights?",
        a: "With improved energy and focus, several users find it easier to lift heavier weights or complete more repetitions, which can support strength progression over time.",
      },
    ],
  },
  {
    id: "ingredients",
    number: "03",
    title: "Ingredients & Safety",
    faqs: [
      {
        q: "What ingredients are commonly found in Dynamite Pre-Workout?",
        a: "Dynamite Pre-Workout includes ingredients like caffeine, beta-alanine, and nitric oxide boosters. These usually help support energy, endurance, blood flow, and overall workout performance.",
      },
      {
        q: "Does pre-workout contain caffeine?",
        a: "Yes, most pre-workouts contain caffeine as it's one of the main ingredients used to boost energy and alertness.",
      },
      {
        q: "What does caffeine do in a pre-workout supplement?",
        a: "Caffeine reduces fatigue, improves focus and increases alertness. It plays a key role in helping you feel more energised before and during your workout.",
      },
      {
        q: "Are there any side effects of pre-workout supplements?",
        a: "Some people may experience mild effects like a slight tingling sensation, a faster heartbeat, or a bit of restlessness if they are sensitive to caffeine. These are usually temporary and can be managed by simply sticking to the recommended dosage.",
      },
      {
        q: "Is pre-workout safe for beginners?",
        a: "Yes, it can be suitable for beginners when taken in the recommended quantity. It is advisable to start with a smaller dose to assess your tolerance.",
      },
    ],
  },
  {
    id: "dynamite",
    number: "04",
    title: "Dynamite Pre Workout",
    faqs: [
      {
        q: "Can I take Dynamite Pre-Workout with whey protein?",
        a: "Yes, Dynamite pre-workout and whey protein serve different purposes and can be used together.",
      },
      {
        q: "Can Dynamite Pre-Workout be Combined with Creatine?",
        a: "Yes, several people combine pre-workout with creatine. Some pre-workouts may already include creatine, so it is very important to check the label before adding extra.",
      },
      {
        q: "Is Dynamite Pre-Workout useful for fat loss or cutting?",
        a: "Dynamite Pre-workout can support fat loss indirectly by improving workout intensity and helping you burn more calories during training sessions.",
      },
      {
        q: "Can I use Dynamite Pre-Workout for Cardio Sessions?",
        a: "Yes, pre-workout can be used before cardio sessions too. It may help improve stamina and keep you energised during longer workouts.",
      },
      {
        q: "Does pre-workout help with muscle building?",
        a: "While pre-workout does not directly build muscle, it helps you train harder and more effectively, which can support muscle growth over time when combined with proper nutrition and training.",
      },
    ],
  },
];

const DYNAMITE_INTRO =
  "Dynamite Pre-Workout is for you. It's extra energy. A focused feeling. That extra push for your best lift. Some extra stamina or endurance for cardio. It's a mix of science-backed, performance-enhancing ingredients carefully selected to clean up what you don't need and boost what you do.";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#e3242b] text-[#e3242b] transition-transform duration-200 ${
        open ? "rotate-45" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
  idPrefix,
  index,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
  idPrefix: string;
  index: number;
}) {
  const buttonId = `${idPrefix}-button-${index}`;
  const panelId = `${idPrefix}-panel-${index}`;
  return (
    <div className="border-b border-zinc-200">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#e3242b] sm:py-5 sm:text-base md:text-[15px]"
        >
          <span>{faq.q}</span>
          <PlusIcon open={isOpen} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pb-5 pr-10 text-sm leading-7 text-zinc-600 sm:text-[15px]">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqSectionBlock({
  section,
  showDynamiteImage,
}: {
  section: FaqSection;
  showDynamiteImage?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  return (
    <section id={section.id} className="mb-12 md:mb-16">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-2xl font-semibold italic text-[#e3242b] md:text-3xl">
          {section.number}
        </span>
        <h2 className="text-xl font-semibold text-[#1A1A1A] md:text-2xl">
          {section.title}
        </h2>
      </div>

      {showDynamiteImage && (
        <div className="mb-8">
          <p className="mb-6 text-sm leading-7 text-zinc-700 sm:text-[15px]">
            {DYNAMITE_INTRO}
          </p>
          <div className="relative mx-auto aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-lg bg-zinc-50">
            <Image
              src="/pre-workout-faqs/dynamite-product.png"
              alt="Dynamite Pre-Workout product"
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      <div className="w-full">
        {section.faqs.map((faq, i) => (
          <FaqItem
            key={faq.q}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            idPrefix={section.id}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

function HeroNavTabs() {
  const tabs = [
    { id: "general", label: "General Usage" },
    { id: "performance", label: "Performance" },
    { id: "ingredients", label: "Ingredients & Safety" },
    { id: "dynamite", label: "Dynamite Pre Workout" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {tabs.map((tab, i) => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          className={`rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
            i === 0
              ? "bg-[#e3242b] text-white hover:bg-[#c41e24]"
              : "bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]"
          }`}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}

export default function PreWorkoutFaqsClient() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#3a0a0a] px-4 py-10 sm:py-14 md:py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="relative mb-6 h-12 w-40 sm:h-16 sm:w-52">
            <Image
              src="/pre-workout-faqs/dynamite-logo.png"
              alt="Dynamite Logo"
              fill
              priority
              sizes="208px"
              className="object-contain"
            />
          </div>
          <h1 className="mb-4 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[40px]">
            Frequently Asked Questions About{" "}
            <span className="text-[#e3242b]">Pre-Workout</span>
          </h1>
          <div
            className="mx-auto mb-2 h-[2px] w-12 bg-[#e3242b]"
            aria-hidden="true"
          />
          <p className="mx-auto mb-4 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-[15px]">
            <span className="text-[#e3242b]">Pre-workout supplements</span> are
            commonly used by fitness enthusiasts to support energy, focus,
            strength, and overall workout performance. They are designed to
            help you feel more prepared and energised before training,
            especially on days when motivation or energy levels feel low.
          </p>
          <a
            href="#general"
            className="mb-8 text-sm font-medium text-[#e3242b] hover:underline"
          >
            Read More
          </a>
          <HeroNavTabs />
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-zinc-500 sm:text-sm">
          <Link href="/" className="hover:text-[#e3242b]">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-zinc-500">FAQs</span>
          <span aria-hidden="true">›</span>
          <span className="text-[#e3242b]">Pre-Workout</span>
        </div>
      </div>

      {/* FAQ sections */}
      <section className="bg-white px-4 py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-4xl">
          {SECTIONS.map((section) => (
            <FaqSectionBlock
              key={section.id}
              section={section}
              showDynamiteImage={section.id === "dynamite"}
            />
          ))}
        </div>
      </section>

      {/* Final Words */}
      <section className="bg-white px-4 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-semibold text-[#e3242b] md:text-3xl">
            The Final Words
          </h2>
          <p className="mb-4 text-sm font-semibold leading-7 text-[#e3242b] sm:text-base">
            Dynamite Pre-Workout
          </p>
          <p className="mb-4 text-sm leading-7 text-zinc-700 sm:text-[15px]">
            Dynamite Pre-Workout is designed to help you feel more energised,
            focused, and ready to train. It supports better endurance and
            overall performance, so you can push yourself a little more, stay
            consistent, and make the most of every workout.
          </p>
          <p className="mb-4 text-sm leading-7 text-zinc-700 sm:text-[15px]">
            Like any supplement, it works best when used correctly. Paying
            attention to when you take it, how much you use, and what it
            contains helps you get safe and effective results.
          </p>
          <p className="mb-8 text-sm leading-7 text-zinc-700 sm:text-[15px]">
            When used regularly and in the right amount, a good pre-workout
            can become a helpful part of your routine. Choosing a reliable
            option like Wellversed Dynamite Pre-Workout can support your
            consistency and help you move closer to your fitness goals.
          </p>
          <a
            href="#dynamite"
            className="inline-flex items-center gap-2 rounded-full bg-[#e3242b] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c41e24] sm:text-base"
          >
            Explore Dynamite Pre Workout
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
