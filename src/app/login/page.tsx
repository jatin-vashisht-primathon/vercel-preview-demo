import type { Metadata } from "next";
import LoginClient from "../components/LoginClient";

export const metadata: Metadata = {
  title: "Sign In | Care41",
  description: "Sign in to your Care41 account.",
};

export default function LoginPage() {
  return <LoginClient />;
}
