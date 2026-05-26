"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
];

const PHONE_DISPLAY = "(+91) 9930007241";
const PHONE_DIAL = "+919930007241";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function Logo() {
  return (
    <Link href="/" aria-label="Care41 home" className="flex items-center">
      <Image
        src="/care41/logo.png"
        alt="Care41 Logo"
        width={94}
        height={47}
        priority
        className="h-[47px] w-auto"
      />
    </Link>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.7998 11.4922C14.7608 11.4735 13.3028 10.7555 13.0437 10.6623C12.9379 10.6243 12.8246 10.5872 12.7041 10.5872C12.5072 10.5872 12.3418 10.6853 12.213 10.878C12.0673 11.0945 11.6264 11.6099 11.4902 11.7639C11.4724 11.7842 11.4481 11.8085 11.4335 11.8085C11.4205 11.8085 11.1948 11.7156 11.1265 11.6859C9.56244 11.0065 8.37524 9.37265 8.21244 9.09713C8.1892 9.05752 8.18822 9.03954 8.18803 9.03954C8.19374 9.01856 8.24634 8.96584 8.27348 8.93863C8.3529 8.86006 8.43894 8.75648 8.52218 8.65629C8.5616 8.60882 8.60108 8.56129 8.63985 8.51648C8.76063 8.37597 8.81439 8.26687 8.87673 8.14051L8.90939 8.07486C9.0616 7.77246 8.9316 7.51726 8.88959 7.43486C8.85511 7.3659 8.23946 5.88006 8.174 5.72395C8.0166 5.34726 7.80861 5.17188 7.51959 5.17188C7.49277 5.17188 7.51959 5.17187 7.40712 5.17662C7.27017 5.18239 6.52439 5.28058 6.19465 5.48843C5.84498 5.70889 5.25342 6.41162 5.25342 7.64746C5.25342 8.75973 5.95926 9.80993 6.26231 10.2093C6.26985 10.2194 6.28368 10.2399 6.30374 10.2692C7.46433 11.9641 8.91115 13.2203 10.3778 13.8062C11.7898 14.3702 12.4585 14.4354 12.8386 14.4354H12.8387C12.9984 14.4354 13.1263 14.4228 13.2391 14.4117L13.3106 14.4049C13.7984 14.3617 14.8704 13.8062 15.1142 13.1286C15.3063 12.5949 15.3569 12.0118 15.2291 11.8002C15.1416 11.6563 14.9908 11.5839 14.7998 11.4922Z"
        fill="#4A90E2"
      />
      <path
        d="M10.1785 0C4.76187 0 0.355117 4.37364 0.355117 9.74955C0.355117 11.4883 0.820442 13.1903 1.70194 14.6799L0.0147277 19.6569C-0.0167008 19.7497 0.00667576 19.8523 0.0753121 19.9221C0.124858 19.9727 0.192065 20 0.260702 20C0.287 20 0.313494 19.996 0.339338 19.9878L5.52895 18.3387C6.94908 19.0975 8.55414 19.498 10.1786 19.498C15.5947 19.4981 20.001 15.1249 20.001 9.74955C20.001 4.37364 15.5947 0 10.1785 0ZM10.1785 17.4671C8.64999 17.4671 7.16953 17.0258 5.89693 16.1907C5.85414 16.1626 5.80447 16.1482 5.75447 16.1482C5.72804 16.1482 5.70155 16.1522 5.67577 16.1604L3.07609 16.9868L3.91531 14.5108C3.94245 14.4307 3.92888 14.3423 3.87888 14.274C2.90979 12.9499 2.39752 11.3854 2.39752 9.74955C2.39752 5.49351 5.88804 2.03091 10.1784 2.03091C14.4683 2.03091 17.9584 5.49351 17.9584 9.74955C17.9585 14.0051 14.4684 17.4671 10.1785 17.4671Z"
        fill="#4A90E2"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const trigger = triggerRef.current;
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-white">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-10 lg:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-10">
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`relative pb-1 text-base font-medium transition-colors duration-300 hover:text-[#4A90E2] ${
                          active ? "text-[#4A90E2]" : "text-[#404040]"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <span
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 h-[2px] w-full bg-[#4A90E2]"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${PHONE_DIAL}`}
                className="flex items-center gap-2 text-base font-semibold text-[#404040] hover:text-[#4A90E2]"
              >
                <PhoneIcon className="h-5 w-5 text-[#4A90E2]" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`https://wa.me/${PHONE_DIAL.replace("+", "")}`}
                aria-label="Contact via WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-6 w-6 items-center justify-center transition-transform hover:scale-110"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>
              <Link
                href="/auth/signin"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-[#4A90E2] px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3A7BC8]"
              >
                Sign In
              </Link>
            </div>
          </div>

          <button
            ref={triggerRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-800 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2] lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-200 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-black/5 px-4">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-800 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2]"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base font-medium hover:bg-black/5 ${
                      active ? "text-[#4A90E2]" : "text-[#404040]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 border-t border-black/5 pt-6">
            <a
              href={`tel:${PHONE_DIAL}`}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-semibold text-[#404040] hover:bg-black/5"
            >
              <PhoneIcon className="h-5 w-5 text-[#4A90E2]" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_DIAL.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-[#404040] hover:bg-black/5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <Link
            href="/auth/signin"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-9 w-full items-center justify-center rounded-lg bg-[#4A90E2] px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3A7BC8]"
          >
            Sign In
          </Link>
        </nav>
      </aside>
    </>
  );
}
