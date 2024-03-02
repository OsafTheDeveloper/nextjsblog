import { NextResponse } from "next/server";
import { tokenVerification } from "./helper/jwt";
export async function middleware(req) {
  const token = req.cookies.get("AccessToken")?.value;
  const isVerified = await tokenVerification(token);
  const pathname = req.nextUrl.pathname;
  const publicRoutes = ["/login", "/signup"];
  if (!token && !isVerified && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (pathname === "/login" || pathname === "/signup") {
    if (token && isVerified) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
export const config = {
  matcher: ["/admin", "/blog/:path*","/login" ,"/signup"],
};
