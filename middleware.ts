import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Apply to API routes only
  if (request.nextUrl.pathname.startsWith("/api/")) {
    // Add security headers
    const response = NextResponse.next();

    // Rate limiting headers
    response.headers.set("X-RateLimit-Limit", "5");
    response.headers.set("X-RateLimit-Remaining", "4");

    // Security headers
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

    // CORS for contact form
    if (request.nextUrl.pathname === "/api/send-mail") {
      const origin = request.headers.get("origin");
      const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://aptechbenin.com.ng",
        "https://www.aptechbenin.com.ng",
        "https://aptechbenin.vercel.app",
        "https://www.aptechbenin.vercel.app",
      ];

      if (origin && allowedOrigins.includes(origin)) {
        response.headers.set("Access-Control-Allow-Origin", origin);
      }

      response.headers.set("Access-Control-Allow-Methods", "POST");
      response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
