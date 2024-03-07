import { NextResponse } from "next/server";
import { tokenVerification } from "./helper/jwt";
import { adminTokenverification } from "./helper/jwt";
export async function middleware(req) {
  const token = req.cookies.get("AccessToken")?.value;
  const adminToken = req.cookies.get("AdminToken")?.value;
  const isVerified = await tokenVerification(token);
  const isAdminverified = await adminTokenverification(adminToken);
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
  if (pathname==="/admin") {
    if (!adminToken && !isAdminverified) {
      return NextResponse.redirect(new URL("/admin/auth", req.url));
    }
  }
  if (pathname==="/admin/auth") {
    if (adminToken && isAdminverified) {
      return NextResponse.redirect(new URL("/admin/", req.url));
    }
  }
}
export const config = {
  matcher: ["/admin/:path*", "/blog/:path*", "/login", "/signup"],
};
