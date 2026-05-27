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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full w-full flex-col items-stretch overflow-hidden rounded-[10px] bg-white md:flex-row">
      <div className="relative h-48 w-full flex-shrink-0 bg-zinc-100 md:h-auto md:min-h-[250px] md:w-[40%]">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex min-h-[200px] flex-1 flex-col justify-center p-4 md:min-h-[250px] md:w-[60%] lg:pl-6 lg:pr-4 xl:pl-[50px] xl:pr-6">
        <p className="break-words text-sm font-normal italic leading-[20px] tracking-[-0.011em] text-[#565656] md:text-base md:leading-[22px]">
          {testimonial.quote}
        </p>
        <div className="mt-3 text-right text-sm font-semibold leading-[20px] tracking-[-0.011em] text-[#565656] md:mt-4 md:text-base md:leading-[22px]">
          {testimonial.name}
        </div>
      </div>
    </div>
  );
}

const ARROW_CLASS =
  "absolute top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#2C2738] bg-white text-[#2C2738] shadow-sm transition-colors hover:bg-[#2C2738] hover:text-white disabled:pointer-events-none disabled:opacity-50";

function Carousel({ visibleCount, className }: { visibleCount: number; className?: string }) {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);
  const safeIndex = Math.min(index, maxIndex);
  const step = 100 / visibleCount;

  const prev = () => setIndex((i) => Math.max(0, Math.min(i, maxIndex) - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div
      className={`relative mx-auto w-full max-w-[82rem] px-12 sm:px-14 md:px-16 lg:px-20 ${className ?? ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Member testimonials"
    >
      <div className="overflow-hidden">
        <div
          className="flex -ml-4 items-stretch lg:-ml-6"
          style={{
            transform: `translate3d(-${safeIndex * step}%, 0, 0)`,
            transition: "transform 0.5s ease",
          }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="flex min-w-0 shrink-0 grow-0 pl-4 lg:pl-6"
              style={{ flexBasis: `${step}%` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${TESTIMONIALS.length}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        disabled={safeIndex <= 0}
        aria-label="Previous testimonial"
        className={`${ARROW_CLASS} left-0`}
      >
        <ChevronLeft />
      </button>

      <button
        type="button"
        onClick={next}
        disabled={safeIndex >= maxIndex}
        aria-label="Next testimonial"
        className={`${ARROW_CLASS} right-0`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <>
      {/* Mobile / tablet: one card at a time (matches care41.net below lg) */}
      <Carousel visibleCount={1} className="lg:hidden" />
      {/* Desktop: two cards at a time (matches care41.net at lg+) */}
      <Carousel visibleCount={2} className="hidden lg:block" />
    </>
  );
}
