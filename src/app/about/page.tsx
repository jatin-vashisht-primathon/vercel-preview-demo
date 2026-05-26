import type { Metadata } from "next";
import Image from "next/image";
import TeamTabs from "../components/TeamTabs";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "About | Care41",
  description:
    "Care41 was built for caregivers by caregivers. Learn about our mission to bring joy, vitality, and security to families with aging loved ones.",
};

function PillarHeart() {
  return (
    <svg
      viewBox="0 0 43 38"
      fill="currentColor"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M37.81 2.46c-4.35-2.85-9.86-2.22-14.05 1.61-1.02.93-1.83 1.64-2.27 1.64s-1.25-.71-2.28-1.64C14.67-.08 8.46-.42 4.12 3.25 -.28 6.95-2.15 14.51 3.59 23.04c2.02 2.99 4.85 5.92 8.41 8.7l.6.4.7.5.85.59.16.11c3.35 2.35 5.12 3.52 6.89 3.52 1.77 0 3.54-1.17 6.88-3.51l.18-.12.86-.6.7-.5.6-.41 1-.79c3.39-2.74 6.04-5.55 7.99-8.46.13-.21.27-.42.4-.64l2.45-4.73.05-.1c2.81-7.7-.47-13.24-4.13-15.64Z" />
    </svg>
  );
}

function PillarBolt() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M13 2 4 14h6v8l9-12h-6V2z" />
    </svg>
  );
}

function PillarPeople() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-2.67 0-8 1.34-8 4v3h9v-3c0-1.04.45-2.05 1.22-2.85A14 14 0 0 0 8 13Zm8 0a17.4 17.4 0 0 0-2.5.18A4.46 4.46 0 0 1 16 17v3h8v-3c0-2.66-5.33-4-8-4Z" />
    </svg>
  );
}

const PILLARS = [
  { label: "Trusted Providers", icon: <PillarHeart /> },
  { label: "Tech Forward", icon: <PillarBolt /> },
  { label: "Community Engagement", icon: <PillarPeople /> },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero band */}
      <section className="relative h-[260px] overflow-hidden">
        <Image
          src="/care41/about_hero_background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
        <div className="relative flex h-full items-center justify-center px-4">
          <h1 className="text-center text-3xl font-medium text-white sm:text-4xl md:text-[40px]">
            Built for Caregivers by Caregivers
          </h1>
        </div>
      </section>

      {/* Intro section */}
      <section className="container mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="max-w-6xl font-poppins text-3xl font-medium leading-tight text-zinc-900 sm:text-[34px] lg:text-[40px]">
          Empowering caregivers with high-quality services that ensure wellbeing
          and peace of mind.
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* Image collage: stacked on mobile, overlapping on desktop */}
          <div className="flex justify-center lg:block">
            {/* Mobile/tablet: simple 2-image grid */}
            <div className="grid w-full max-w-[420px] grid-cols-2 gap-4 lg:hidden">
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src="/care41/about_hero_1.png"
                  alt="Caregiver and senior smiling"
                  width={272}
                  height={397}
                  sizes="(max-width: 1024px) 50vw, 18vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src="/care41/about_hero_2.png"
                  alt="Family member with elderly loved one"
                  width={272}
                  height={397}
                  sizes="(max-width: 1024px) 50vw, 18vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Desktop: overlapping collage */}
            <div className="relative hidden h-[600px] w-full lg:block">
              <div className="absolute left-0 top-0 z-10 w-[60%] overflow-hidden rounded-[34px]">
                <Image
                  src="/care41/about_hero_1.png"
                  alt="Caregiver and senior smiling"
                  width={272}
                  height={397}
                  sizes="18vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-20 w-[60%] overflow-hidden rounded-[34px]">
                <Image
                  src="/care41/about_hero_2.png"
                  alt="Family member with elderly loved one"
                  width={272}
                  height={397}
                  sizes="18vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy + cards */}
          <div className="space-y-12 lg:col-span-2 lg:ml-16">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900">
                Human Compassion Meets Technology:
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-700">
                We are rewriting the script when it comes to distant
                caregiving. Technological advances have made it possible for
                families separated by physical distance to stay in touch and
                communicate. Built on the same idea, we have curated
                best-in-class providers and digital tools to bring the
                first-of-its-kind caregiving platform that spans all aspects of
                life&apos;s essence and essentials. For the longest time guilt,
                worry, latency in communication, and access have negatively
                impacted families the world over. There is a better way, and
                Care41 is designed to be it.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative overflow-hidden rounded-lg bg-[#4A90E2] px-8 py-12 text-white sm:px-10 sm:py-14">
                <div
                  className="absolute left-4 top-2 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative">
                  <h4 className="mb-4 text-2xl font-semibold">Our Mission</h4>
                  <p className="text-sm font-medium leading-relaxed">
                    Our mission is to tap into the utmost potential of human
                    expertise, technology, and compassion to ensure the
                    vitality of our aging loved ones while easing the burden on
                    their families.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-green-500 px-8 py-12 text-white sm:px-10 sm:py-14">
                <div
                  className="absolute left-4 top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative">
                  <h4 className="mb-4 text-2xl font-semibold">Our Vision</h4>
                  <p className="text-sm font-medium leading-relaxed">
                    In a world living longer than ever before, Care41 will make
                    affordable and compassionate care accessible to millions
                    around the world. By 2030, we aim to be the premier distant
                    caregiving platform globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="mx-auto mt-16 py-5 sm:mt-20">
        <h2 className="mb-11 mt-5 flex px-4 text-[34px] font-semibold leading-tight tracking-tight sm:px-10 sm:text-[40px] sm:leading-[48px] lg:px-24">
          <span className="text-black">Meet Our</span>
          <span className="ml-2 text-[#4A90E2]">Team</span>
        </h2>
        <div className="mx-auto mb-12 px-4 sm:px-10 lg:px-24">
          <TeamTabs />
        </div>
      </section>

      {/* Mission with dark background */}
      <section className="relative mt-4 h-auto w-full overflow-hidden lg:mt-8 xl:mt-0">
        <div className="relative w-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/care41/about_mission_bg.png')",
              backgroundColor: "#222",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-center px-4 py-16 text-white sm:px-8 md:min-h-[640px] md:py-20 lg:px-28">
            <div>
              <h4 className="mb-4 text-2xl font-poppins">Our Mission:</h4>
              <h2 className="mb-10 font-poppins text-3xl font-medium leading-[1.2] sm:text-4xl sm:leading-[50px]">
                Bring joy, vitality, and security
                <br />
                to families with aging loved ones
              </h2>
            </div>
            <div className="flex w-full max-w-5xl flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-12 md:px-0">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center sm:items-start"
                >
                  <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white p-6">
                    <span className="text-[#4A90E2]">{p.icon}</span>
                  </div>
                  <p className="text-base font-medium sm:text-lg">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F5F5] px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 xl:px-32">
        <h2 className="mb-10 text-center text-3xl font-semibold text-zinc-900 sm:text-4xl">
          Hear From Our Members
        </h2>
        <TestimonialsCarousel />
      </section>
    </main>
  );
}
