"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Support", href: "#" },
];

function Logo() {
  return (
    <span className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-950 text-sm font-bold text-white dark:bg-zinc-50 dark:text-zinc-950"
      >
        S
      </span>
      <span>Store</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Auto-close when the viewport grows past the mobile breakpoint so the
  // drawer can't be stranded open in desktop mode (and body scroll-lock is
  // released along with it).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 640px)");
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

  const handleInertLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-black/[.08] bg-white/90 backdrop-blur dark:border-white/[.145] dark:bg-black/80">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          onClick={handleInertLink}
          className="flex items-center"
          aria-label="Store home"
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={handleInertLink}
                  className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-950 hover:bg-black/[.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 sm:hidden dark:text-zinc-50 dark:hover:bg-white/[.06] dark:focus-visible:ring-zinc-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 sm:hidden ${
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
        className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[80vw] flex-col bg-white shadow-xl transition-transform duration-200 ease-out sm:hidden dark:bg-zinc-950 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-black/[.08] px-4 dark:border-white/[.145]">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-950 hover:bg-black/[.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:text-zinc-50 dark:hover:bg-white/[.06] dark:focus-visible:ring-zinc-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          </button>
        </div>
        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    handleInertLink(event);
                    setOpen(false);
                  }}
                  className="block rounded-md px-3 py-3 text-base font-medium text-zinc-800 hover:bg-black/[.04] dark:text-zinc-200 dark:hover:bg-white/[.06]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
