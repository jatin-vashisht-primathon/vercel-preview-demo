"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function ChromeShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/auth")) return null;
  return <>{children}</>;
}
