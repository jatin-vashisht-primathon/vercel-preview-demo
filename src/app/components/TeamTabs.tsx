"use client";

import Image from "next/image";
import { useState } from "react";

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const LEADERSHIP: Member[] = [
  {
    name: "Niharika Shah",
    role: "Founder & CEO",
    image: "/care41/about_ceo.jpg",
    bio: "Niharika is a serial entrepreneur and a passionate advocate for elder care. Her personal experience in ensuring the highest quality care for parents residing in India while managing a highly demanding career and young family in the US, led her to conceive Care41. In her opinion, the standard of care needs to be multifaceted, proactive not just reactive, and most of all bring vitality and joy on a daily basis. In her professional career, Niharika has held C-level positions at Fortune 50 organizations and $B fintech startups, and also serves on the board of the Rutgers Business School.",
  },
  {
    name: "Vinod Paniker",
    role: "CPTO",
    image: "/care41/about_cpto.jpg",
    bio: "Vinod is a veteran product and technology leader with a deep focus on using technology to solve real-world problems at scale. His experience managing long-distance care for his elderly parents in India opened his eyes to the fragmented and reactive nature of elder care today. That perspective led him to work closely with Niharika and the Care41 team to help bring the vision of proactive, high-quality care to life. Vinod is deeply committed to the mission of making aging a dignified, joyful, and connected experience, for families and caregivers alike. With over two decades of leadership experience in Silicon Valley, he has led product and technology teams across startups and enterprises in fintech and healthcare. Most recently, Vinod has been focused on applying generative AI to drive innovation in financial services and health care.",
  },
  {
    name: "Ishaan Mahimtura",
    role: "COO",
    image: "/care41/about_coo.png",
    bio: "I’m a Mumbai-based legal professional with a strong foundation in civil and commercial litigation. I have been actively practicing in the field, handling a wide range of disputes while also exploring opportunities in business development. I am passionate about combining legal strategy with commercial insight to help clients navigate complex issues and achieve practical outcomes. Always looking to connect, collaborate, and grow. Along the way, a need arose to ensure a more systematic way to take care of elders was in place. Collectively bringing all the service providers together and creating an easier means to connect and coordinate made the process of caregiving a lot better for the caregivers. Once conceived, Care41 helped integrate all that we had envisioned.",
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex flex-col gap-5">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={member.image}
          alt={`Photo of ${member.name}, ${member.role}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-zinc-900">{member.name}</h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[#4A90E2]">
          {member.role}
        </p>
        <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-zinc-700">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

export default function TeamTabs() {
  const [tab, setTab] = useState<"leadership" | "partners">("leadership");

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Team category"
        className="flex items-center justify-center border-b border-zinc-200"
      >
        <button
          id="team-tab-leadership"
          type="button"
          role="tab"
          aria-selected={tab === "leadership"}
          aria-controls="team-panel-leadership"
          tabIndex={tab === "leadership" ? 0 : -1}
          onClick={() => setTab("leadership")}
          className={`px-6 py-3 text-base sm:text-lg sm:px-8 transition-colors ${
            tab === "leadership"
              ? "border-b-2 border-[#4A90E2] font-semibold text-[#4A90E2]"
              : "font-normal text-[#1A1A1A] hover:text-[#4A90E2]"
          }`}
        >
          Leadership
        </button>
        <button
          id="team-tab-partners"
          type="button"
          role="tab"
          aria-selected={tab === "partners"}
          aria-controls="team-panel-partners"
          tabIndex={tab === "partners" ? 0 : -1}
          onClick={() => setTab("partners")}
          className={`px-6 py-3 text-base sm:text-lg sm:px-8 transition-colors ${
            tab === "partners"
              ? "border-b-2 border-[#4A90E2] font-semibold text-[#4A90E2]"
              : "font-normal text-[#1A1A1A] hover:text-[#4A90E2]"
          }`}
        >
          Partners
        </button>
      </div>

      <div
        role="tabpanel"
        id="team-panel-leadership"
        aria-labelledby="team-tab-leadership"
        hidden={tab !== "leadership"}
        className="mt-12"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:gap-x-16 lg:gap-y-16">
          {LEADERSHIP.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id="team-panel-partners"
        aria-labelledby="team-tab-partners"
        hidden={tab !== "partners"}
        className="mt-12"
      >
        <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-zinc-50 px-6 py-16 text-center">
          <p className="max-w-md text-base text-zinc-600">
            We work alongside a growing network of trusted partners spanning
            healthcare, finance, home services and wellbeing. More partner
            details coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
