import Image from "next/image";
import ContactForm from "./components/ContactForm";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FaqAccordion from "./components/FaqAccordion";

const CORE_SERVICES = [
  {
    title: "Medical",
    desc: "Responsive and expert medical care with digital monitoring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
        <path d="M8 12h2l1-3 2 6 1-3h2" />
      </svg>
    ),
  },
  {
    title: "Home Security and Monitoring",
    desc: "Your eyes, your safety, our priority.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Financial Planning & Investing",
    desc: "Smart financial planning builds wealth and security.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Estate Planning",
    desc: "Secure your legacy with smart estate planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    title: "Nutrition",
    desc: "Healthy nutrition fuels body, mind, and life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M12 20c-3.5 0-6-3-6-7 0-3 1.5-6 4-6 1.5 0 2 1 4 1s2.5-1 4-1c2.5 0 4 3 4 6 0 4-2.5 7-6 7" />
        <path d="M12 8c0-3-1-5-3-6" />
      </svg>
    ),
  },
  {
    title: "Chartered Accountant (Tax Planning & Filing)",
    desc: "Expert tax planning, seamless filing, stress-free finances.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="16" y2="11" />
        <line x1="8" y1="15" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "Yoga",
    desc: "Balance and wellness through yoga.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5l-3 8" />
        <path d="M12 12l3 8" />
        <path d="M5 11l7 1 7-1" />
      </svg>
    ),
  },
  {
    title: "Online Community",
    desc: "Connect, share, grow together in online community.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="12" y1="18" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    title: "Senior Proofing Home and Appliance",
    desc: "Safe homes, senior-friendly spaces, worry-free living.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Home Attendants & Nurses",
    desc: "Caring hands, trusted home attendants and nurses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 22v-2a7 7 0 0 1 14 0v2" />
      </svg>
    ),
  },
];

const MISSION_PILLARS = [
  {
    title: "Trusted Providers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Tech Forward",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Community Engagement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const COMMUNITY_CARDS = [
  {
    title: "Share Your Journey",
    desc: "Connect with caregivers, share experiences, and find solace in stories of resilience and compassion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
        <path d="M3 7l9-5 9 5v10l-9 5-9-5z" />
        <polyline points="3 7 12 12 21 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Enhance Social Wellbeing",
    desc: "Join us as we host fun online events such as cooking classes, antakshari, and trivia games.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Learn and Grow",
    desc: "Explore tips and resources tailored for caregivers, empowering you to navigate challenges and provide better care.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <h4 className="text-sm font-semibold uppercase tracking-widest text-[#4A90E2]">
          {eyebrow}
        </h4>
      )}
      <h2 className="mt-3 text-3xl font-medium leading-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg md:leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EAF2FB] via-white to-white" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          {/* Left collage */}
          <div className="order-2 grid grid-cols-2 gap-6 lg:order-1">
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-white p-4 shadow-lg ring-1 ring-black/5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src="/care41/home_page_hero_1.png"
                    alt="Senior care"
                    fill
                    sizes="(max-width: 1024px) 45vw, 280px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <h3 className="text-lg font-semibold text-zinc-900">Health</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    In-home healthcare spanning medical, nutrition and fitness.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-6">
              <div className="rounded-3xl bg-white p-4 shadow-lg ring-1 ring-black/5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src="/care41/home_page_hero_2.png"
                    alt="Senior with pet"
                    fill
                    sizes="(max-width: 1024px) 45vw, 280px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 px-2 pb-2">
                  <h3 className="text-lg font-semibold text-zinc-900">Community</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    Connecting caregivers and loved ones with peers and experts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#222222] sm:text-4xl md:text-[42px] md:leading-[50px]">
              Comprehensive Caregiving
              <br />
              Services For Families
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg">
              Everything you need to ensure your loved one&apos;s wellbeing
              <br className="hidden sm:block" />
              and your peace of mind.
            </p>
            <div className="mt-8">
              <ContactForm idPrefix="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium leading-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
              Core Services We Offer for Comprehensive Care
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg md:leading-8">
              Tap into the power of tech and human care to ensure your loved
              one&apos;s joy, security, and vitality. Speak to us to learn
              about all available services.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="group relative h-[300px] overflow-hidden rounded-xl bg-[#EAEDF3] p-6 shadow-md transition-all duration-300 hover:bg-[#6CC57C] hover:text-white hover:shadow-lg"
              >
                <div className="relative z-10">
                  <h3 className="pb-2 text-[20px] font-semibold leading-[1.3] text-[#404040] group-hover:text-white md:text-[22px]">
                    {svc.title}
                  </h3>
                  <p className="max-w-[85%] text-[14px] font-medium leading-[1.5] text-[#565656] duration-300 group-hover:text-white">
                    {svc.desc}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 flex h-28 w-28 items-center justify-center text-[#B2C2E1] transition-all duration-300 group-hover:scale-110 group-hover:text-[#83D591] [&_svg]:h-full [&_svg]:w-full">
                  {svc.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Mission:"
            title={
              <>
                Bring joy, vitality, and security
                <br className="hidden sm:block" /> to families with aging loved ones
              </>
            }
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {MISSION_PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-center gap-5 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5"
              >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF2FB] text-[#4A90E2]">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Hear From Our Members" />
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:mb-16">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
              Interact With Peers and Professionals On a Variety of Topics
            </h2>
            <p className="mt-4 max-w-[835px] text-base font-medium leading-snug text-[#565656]">
              From online yoga sessions to nutrition advice, learn from experts and engage with fellow members. Available to all family members.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
            {COMMUNITY_CARDS.map((c) => (
              <div
                key={c.title}
                className="flex w-full flex-col overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative h-full w-full bg-[#4A90E2] px-10 pb-14 pt-8 text-white">
                  <h3 className="mb-4 text-xl font-bold">{c.title}</h3>
                  <p className="w-4/5 text-xs leading-snug opacity-80">{c.desc}</p>
                  <div className="pointer-events-none absolute -bottom-3 -right-2 h-32 w-32 text-white [&_svg]:h-full [&_svg]:w-full">
                    {c.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-100">
              <Image
                src="/care41/home_contact_old_couple.png"
                alt="Contact Person Image"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium leading-tight text-[#2C2738] sm:text-4xl md:text-[40px] md:leading-[48px]">
                Take the First Step to Set Up a Personalized Caregiving Solution
                for Your Family.
              </h2>
              <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg">
                We appreciate you taking the time to send us a request. A Care41
                Account Manager will be in touch shortly.
              </p>
              <div className="mt-8">
                <ContactForm idPrefix="cta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Here Are Some FAQs That Come to Mind for Our Clients"
            subtitle="Our Account Management Team is available 24/7 to address any questions or concerns you may have."
          />
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
