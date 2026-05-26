"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "How do you manage the quality of your services?",
    a: "We partner with best-in-class providers and practitioners. Each Provider must go through a deep due diligence process and continue to adhere to our very strict Service Level Agreements. Each interaction is tracked and measured for customer satisfaction.",
  },
  {
    q: "How much does the service cost? How will I be billed?",
    a: "Care41 offers flexible packages tailored to your family's needs. After an initial consultation, an Account Manager will design a personalized plan and walk you through pricing, billing cadence, and the services included. There are no hidden fees and you can adjust your package as needs evolve.",
  },
  {
    q: "Where and to whom is this Service available?",
    a: "Care41 currently serves families across India and supports families abroad whose loved ones live in India. Reach out and our team will confirm coverage for your specific city or town.",
  },
  {
    q: "How does Care41 manage communication and client relationships?",
    a: "Every family is assigned a dedicated Account Manager who serves as your single point of contact. We provide daily/weekly updates depending on the package, and our team is available 24/7 to address concerns. You also get a single dashboard for visibility across services.",
  },
  {
    q: "Why do you focus on other things besides just medical care?",
    a: "Wellbeing is multi-dimensional. Medical care is critical, but vitality, security and joy for an aging loved one also depend on nutrition, fitness, financial stability, social connection, and a safe home. Care41 was built to address the whole picture in one place.",
  },
  {
    q: "What if my loved one is single or is physically impaired?",
    a: "Our services are designed to work for every family situation. For loved ones who are single, our Account Managers function as an extended family — coordinating care, checking in, and keeping everyone informed. We also tailor services for those with mobility or other physical challenges.",
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div
            key={faq.q}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-50 sm:text-lg"
              >
                <span>{faq.q}</span>
                <ChevronDown open={isOpen} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-6 text-base leading-7 text-zinc-600"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
