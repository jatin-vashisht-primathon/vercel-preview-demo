const VALUES = [
  {
    title: "Compassion",
    body: "We treat every senior with the warmth, patience, and dignity we would want for our own loved ones.",
  },
  {
    title: "Trust",
    body: "Every caregiver is background-checked, trained, and supervised so families can rest easy.",
  },
  {
    title: "Personalisation",
    body: "Care plans are tailored to each senior's medical needs, daily routines, and personal preferences.",
  },
  {
    title: "Continuity",
    body: "The same caregiver visits the same home, building familiarity and consistency over time.",
  },
];

const TEAM_INTRO = [
  {
    role: "Care Managers",
    body: "Registered nurses who design and supervise every care plan, available around the clock for families.",
  },
  {
    role: "Trained Caregivers",
    body: "Full-time professionals trained in elder care, mobility support, dementia care, and post-surgical recovery.",
  },
  {
    role: "Doctors on Call",
    body: "Empanelled physicians, physiotherapists, and specialists who consult on every case as needed.",
  },
];

export default function AboutContent() {
  return (
    <main className="flex-1 bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <section className="border-b border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4A90E2]">
            About Care41
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Compassionate home care that lets seniors live where they belong &mdash; at home.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 dark:text-zinc-300">
            Care41 is a senior-care service built around one belief: ageing should never mean losing
            independence, dignity, or the comfort of family. We bring trained caregivers, doctors,
            and care managers home to seniors across the country, so they can keep living the life
            they love.
          </p>
        </div>
      </section>

      <section className="border-b border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:grid-cols-2 sm:gap-14 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our story</h2>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Care41 was started by a small group of doctors, nurses, and technologists who watched
              their own parents struggle to find dependable home care. Hospitals were over-stretched.
              Independent caregivers were unverified. Families were left coordinating everything
              themselves, often from another city.
            </p>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              We built Care41 to fix that. One trusted team. One care plan. One number to call.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our mission</h2>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              To give every senior the freedom to age in the home they love, supported by a team
              that knows them by name and treats them like family.
            </p>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              We believe great care is local, personal, and consistent &mdash; never transactional.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What we stand for</h2>
            <p className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Four values shape every care visit, every care plan, and every conversation we have
              with a family.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <li
                key={value.title}
                className="flex flex-col gap-2 rounded-xl border border-black/[.06] bg-white p-6 shadow-sm dark:border-white/[.08] dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold tracking-tight">{value.title}</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">The team behind every visit</h2>
            <p className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Every Care41 senior is supported by a coordinated team &mdash; not a single visiting
              attendant. Here is who you meet.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3">
            {TEAM_INTRO.map((member) => (
              <li
                key={member.role}
                className="flex flex-col gap-2 rounded-xl border border-black/[.06] bg-white p-6 shadow-sm dark:border-white/[.08] dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold tracking-tight">{member.role}</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{member.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Want care for someone you love?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Our care managers will design a plan around your family in a free 30-minute consultation.
            No commitment, no scripts &mdash; just an honest conversation about what they need.
          </p>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#4A90E2] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#3a7bc8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2] focus-visible:ring-offset-2"
          >
            Book a free consultation
          </button>
        </div>
      </section>
    </main>
  );
}
