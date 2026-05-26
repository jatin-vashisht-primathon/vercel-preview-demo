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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 102 102" aria-hidden="true">
      <defs>
        <radialGradient
          id="care41-ig-a"
          cx="6.601"
          cy="99.766"
          r="129.502"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".09" stopColor="#fa8f21" />
          <stop offset=".78" stopColor="#d82d7e" />
        </radialGradient>
        <radialGradient
          id="care41-ig-b"
          cx="70.652"
          cy="96.49"
          r="113.963"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
          <stop offset="1" stopColor="#8c3aaa" />
        </radialGradient>
      </defs>
      <path
        fill="url(#care41-ig-a)"
        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      />
      <path
        fill="url(#care41-ig-b)"
        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      />
      <path
        fill="#fff"
        d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
        transform="translate(-422.637 -426.196)"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-white text-zinc-800">
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
            <p className="mt-6 max-w-[400px] text-[14px] font-semibold leading-relaxed text-gray-600">
              Our mission is to tap into the utmost potential of human expertise,
              technology, and compassion to ensure the vitality of our aging loved
              ones while easing the burden on their families.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-zinc-900">Our Services</h3>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {SERVICES.map((svc) => (
                <li key={svc}>
                  <a
                    href="#"
                    className="text-zinc-600 transition-colors hover:text-[#4A90E2]"
                  >
                    {svc}
                  </a>
                </li>
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
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://www.facebook.com/people/Care41/61578788154082/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4A90E2] text-white transition-colors hover:bg-blue-600"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/care4_1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4A90E2] text-white transition-colors hover:bg-blue-600"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-zinc-600 md:flex-row sm:px-6 lg:px-8">
          <Link
            href="/terms-and-conditions"
            className="transition-colors hover:text-[#4A90E2]"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-[#4A90E2]"
          >
            Privacy Policy
          </Link>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <p>Care41</p>
        </div>
      </div>
    </footer>
  );
}
