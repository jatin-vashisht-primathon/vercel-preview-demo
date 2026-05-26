import type { Metadata } from "next";
import AboutContent from "../components/AboutContent";

export const metadata: Metadata = {
  title: "About 2 | Care41",
  description:
    "Care41 brings compassionate, trained home-care teams to seniors so they can keep living the life they love.",
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutTwoPage() {
  return <AboutContent />;
}
