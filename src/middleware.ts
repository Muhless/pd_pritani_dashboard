import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}


// for setting the route
export const config = {
  matcher: ["/", "/adad/:path*", "/dada/:path*", "/dadad/:path*"],
};
