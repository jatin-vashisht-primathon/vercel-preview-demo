import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Personalized senior care skillfully combining human compassion with the latest technology. | Care41",
  description:
    "Care41 is the ONLY premier concierge service providing comprehensive - medical, fitness, community, home proofing, legal and financial, and so on - for families with aging loved ones.",
  keywords: [
    "senior care",
    "elderly care",
    "caregiving",
    "family support",
    "medical care",
    "home care",
    "concierge service",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-zinc-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
