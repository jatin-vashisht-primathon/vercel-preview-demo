import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const VALID_EMAIL = "test@gmail.com";
const VALID_OTP = "123456";
const COOKIE_NAME = "auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
  let body: { email?: unknown; otp?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const otp = typeof body.otp === "string" ? body.otp.trim() : "";

  if (email !== VALID_EMAIL || otp !== VALID_OTP) {
    return NextResponse.json(
      { error: "Invalid email or OTP" },
      { status: 401 },
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "1", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    secure: process.env.NODE_ENV === "production",
  });

  return NextResponse.json({ ok: true });
}
