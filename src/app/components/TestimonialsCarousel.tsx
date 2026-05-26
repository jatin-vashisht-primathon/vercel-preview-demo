"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  name: string;
  quote: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "~ Monica C.",
    image: "/care41/testimonial-image.png",
    quote:
      "\"Before Care41, there was the feeling of being overwhelmed. You know the feeling. The stress that comes with managing a loved one's care from a distance, the endless list of services, contacts to manage and the constant worry. That's why I was so relieved when I discovered Care41. They are a comprehensive platform with so many services! Each time I asked, they delivered and I felt like a kid in a candy shop. Our family is fortunate to be among their very first customers during their launch!\"",
  },
  {
    name: "~ Nikhil S.",
    image: "/care41/testimonial-image-1.png",
    quote:
      "\"Care41 has made our lives so much better. We are confident that mom is well taken care of and the daily updates from the doctor and supervision through the CCTV camera's help us stay informed and connected. Extremely systematic and professional engagement from the team at Care41. With gratitude.\"",
  },
  {
    name: "~ Chaula S.",
    image: "/care41/testimonial-image-2.png",
    quote:
      "\"Care41 gives us peace of mind. Mom is in the safe hands of medical experts who are always guiding us as we provide them with regular updates. Every service is reliable and thoughtfully managed. Truly grateful.\"",
  },
];

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const current = TESTIMONIALS[index];

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5 md:grid-cols-2 md:gap-12 md:p-12">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={current.image}
            alt={current.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <svg
            className="mb-4 h-10 w-10 text-[#4A90E2]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
          <p className="text-base leading-7 text-zinc-700 md:text-lg md:leading-8">
            {current.quote}
          </p>
          <p className="mt-6 text-base font-semibold text-[#4A90E2]">
            {current.name}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-[#4A90E2] hover:text-white"
        >
          <ChevronLeft />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial selector">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-[#4A90E2]" : "w-2 bg-zinc-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-colors hover:bg-[#4A90E2] hover:text-white"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
