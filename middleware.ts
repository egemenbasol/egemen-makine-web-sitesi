import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const session = request.cookies.get(SESSION_COOKIE)?.value;
    const authenticated = await verifyAdminSessionToken(session);

    if (!authenticated) {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
      }

      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
