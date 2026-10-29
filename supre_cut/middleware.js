import { NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "./lib/session";

// First gate for the dashboard: no valid session cookie, no page.
// Pages and API routes still re-check the admin role against the database.
export async function middleware(request) {
  const session = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (session?.role === "admin") return NextResponse.next();

  const login = new URL("/admin/login", request.url);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/admin", "/admin/((?!login).*)"],
};
