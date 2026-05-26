import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Our Packages | Care41",
  description:
    "Select any Care41 package that best suits your needs. Comprehensive senior care - medical, attendants, estate planning, yoga, and online community subscriptions.",
};

export default function PackagesPage() {
  return <PackagesClient />;
}
