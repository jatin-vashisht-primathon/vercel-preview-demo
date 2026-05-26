import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  "Medical Care",
  "Home Security and Monitoring",
  "Financial Planning & Investing",
  "Estate Planning",
  "Nutrition",
  "Yoga",
  "Online Community",
  "Senior Proofing Home and Appliance",
  "Home Attendants & Nurses",
  "Chartered Accountant (Tax Planning & Filing)",
];

const SITE_LINKS = [
  { label: "About the Company", href: "/about" },
  { label: "Contact Us", href: "/" },
  { label: "Packages", href: "/packages" },
];

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-[#4A90E2]" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-[#4A90E2]" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-[#4A90E2]" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-[#4A90E2]" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-[#F7F9FC] text-zinc-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Care41 home" className="inline-flex">
              <Image
                src="/care41/logo.png"
                alt="Care41 Logo"
                width={160}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm leading-7 text-zinc-600">
              Our mission is to tap into the utmost potential of human expertise,
              technology, and compassion to ensure the vitality of our aging loved
              ones while easing the burden on their families.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-zinc-900">Our Services</h3>
            <ul className="mt-5 space-y-2 text-sm text-zinc-600">
              {SERVICES.map((svc) => (
                <li key={svc}>{svc}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-zinc-900">Site Links</h3>
            <ul className="mt-5 space-y-2 text-sm">
              {SITE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 transition-colors hover:text-[#4A90E2]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-zinc-900">Contacts</h3>
            <ul className="mt-5 space-y-4 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <ClockIcon />
                <span>Daily from 9:00 AM to 9:00 PM ET</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon />
                <a href="tel:+919930007241" className="hover:text-[#4A90E2]">
                  (+91) 9930007241
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon />
                <a
                  href="mailto:info@care41.net"
                  className="break-all hover:text-[#4A90E2]"
                >
                  info@care41.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapIcon />
                <a
                  href="https://maps.app.goo.gl/z9xZeYaUV335nBGs5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-6 hover:text-[#4A90E2]"
                >
                  CARE41
                  <br />
                  30 Lafayette Ave STE 1
                  <br />
                  Morristown, NJ 07960
                  <br />
                  United States
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/Care41/61578788154082/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A90E2] shadow-sm transition-colors hover:bg-[#4A90E2] hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/care4_1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A90E2] shadow-sm transition-colors hover:bg-[#4A90E2] hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link
              href="/terms-and-conditions"
              className="hover:text-[#4A90E2]"
            >
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#4A90E2]">
              Privacy Policy
            </Link>
          </div>
          <p>© {new Date().getFullYear()} All Rights Reserved · Care41</p>
        </div>
      </div>
    </footer>
  );
}
