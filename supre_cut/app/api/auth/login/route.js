import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "../../../../lib/db";
import { loginSchema, fieldErrors } from "../../../../lib/validation";
import { SESSION_COOKIE, createSessionToken, sessionCookieOptions } from "../../../../lib/session";

// Simple per-IP throttle: 5 failed attempts locks that IP for 15 minutes.
// In-memory, so it resets on redeploy; enough to slow casual guessing.
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60 * 1000;
const failures = globalThis.__loginFailures ?? (globalThis.__loginFailures = new Map());

// Compared against when the email is unknown, so timing doesn't reveal which emails exist
const DUMMY_HASH = bcrypt.hashSync("not-a-real-password", 12);

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const entry = failures.get(ip);
  if (entry && entry.count >= MAX_FAILS && Date.now() - entry.last < LOCK_MS) {
    return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the highlighted fields", fields: fieldErrors(parsed.error) }, { status: 400 });
  }

  const { email, password } = parsed.data;
  const db = await getDb();
  const user = await db.collection("users").findOne({ email });
  const valid = await bcrypt.compare(password, user?.passwordHash ?? DUMMY_HASH);

  if (!user || !valid || user.role !== "admin") {
    const prev = failures.get(ip);
    failures.set(ip, { count: (prev && Date.now() - prev.last < LOCK_MS ? prev.count : 0) + 1, last: Date.now() });
    return NextResponse.json({ error: "Incorrect email or password" }, { status: 401 });
  }

  failures.delete(ip);
  const token = await createSessionToken({ userId: user._id.toString(), email: user.email, role: user.role });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
  return res;
}
