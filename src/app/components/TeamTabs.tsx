"use client";

import Image from "next/image";
import { useState } from "react";

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

type Partner = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const PARTNERS: Partner[] = [
  {
    name: "PHE Healthcare",
    role: "Partner - Medical Provider: Comprehensive Senior Care",
    image: "/care41/partner_phe.png",
    description:
      "PHE is a unique primary healthcare delivery mode, transforming your primary care experience by being the 1 stop for all your health needs before or after hospitalization. Their uniqueness lies in a standout phygital delivery model of a primary healthcare team being available to the patient at the clinic, at home, and online. Family physicians are frontline players who coordinate & maintain continuity of care throughout the patient’s health journey using a proactive monitoring approach to ensure early detection, timely intervention and better long term clinical outcomes. PHE’s team manages the medical care at home as much as possible so hospital admissions and duration of stay can be minimized. As part of E-care, PHE is working on a mobile application for early diagnosis and chronic monitoring of the common non-communicable diseases.",
  },
  {
    name: "Fund Horizon LLP, Abhijit Mahapatra",
    role: "Partner - Financial Advisory",
    image: "/care41/partner_fund_horizon.jpg",
    description:
      "Fund Horizon is a premier mutual fund distribution company dedicated to empowering clients with tailored wealth creation and financial planning solutions. Founded by seasoned professionals with over 15 years of experience in financial planning and wealth management, our partners bring expertise from leading institutions such as HDFC Bank Private Banking, Kotak Privy Banking, Citigold Wealth Management, Standard Chartered Priority Banking, and SBI Wealth Management. At Fund Horizon, we offer a comprehensive suite of services, including mutual fund investments, portfolio management, retirement planning, tax-saving solutions, and goal-based financial planning. Our client-centric approach, backed by deep industry knowledge, ensures personalized strategies to help you achieve your financial aspirations with confidence.",
  },
  {
    name: "Sandhya Bolar",
    role: "Partner - Yoga Instructor",
    image: "/care41/partner_yoga.png",
    description:
      "Sandhya Bolar is a certified yoga instructor passionate about holistic well-being. She specializes in gentle, mindful practices tailored for seniors to improve mobility, relaxation, and balance. Offering in-home and virtual sessions, her services include chair yoga, breath work, Yog Nidra, and simple techniques for stress, sleep, and digestion. Sandhya holds a 200-hour YTT and Bilva Yoga certification, with expertise in Hatha, Restorative Yoga, and Pranayama. Her mission is to bring ease, warmth, and confidence through the healing power of yoga.",
  },
  {
    name: "Dhirendra Kalghatgi",
    role: "Digicom - Tech Support",
    image: "/care41/partner_digicom.jpg",
    description:
      "‘Digicom’, co-founded in 1998 and with 26 years of experience, we provide customized office and home CCTV, Security solutions, automation solutions in Communication and IT. Our biggest strength today is our ability to provide customised solutions to each of our customers. We have successfully completed prestigious and critical assignments of providing CCTV surveillance for India’s largest Diamond & Gold Jewellery Exhibition - IIJS, conducted by The Gem & Jewellery Export Promotion Council. We also provide our services to Police Department, BARC, Banks etc.",
  },
];

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

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="w-full max-w-[577px] overflow-hidden rounded-lg bg-white shadow-[0px_0px_20px_4px_rgba(0,0,0,0.08)]">
      <div className="relative mx-auto mt-4 aspect-[545/312] w-full max-w-[545px] overflow-hidden rounded-lg">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          sizes="(max-width: 768px) 100vw, 545px"
          className="object-contain"
        />
      </div>
      <div className="px-7 py-6">
        <h3 className="mb-1 text-2xl font-semibold text-[#1D1F1E]">
          {partner.name}
        </h3>
        <p className="mb-4 text-lg font-medium text-[#6B7280]">{partner.role}</p>
        <p className="text-base font-medium leading-[25px] text-[#6B7280]">
          {partner.description}
        </p>
      </div>
    </article>
  );
}

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
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch justify-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:gap-20">
          {PARTNERS.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
