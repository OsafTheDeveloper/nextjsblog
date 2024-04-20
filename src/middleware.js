import { NextResponse } from "next/server";
import { tokenVerification } from "./helper/jwt";
export async function middleware(req) {
  const token = req.cookies.get("AccessToken")?.value;
  console.log(token, "from middleware");
  const Verification = await tokenVerification(token);
  console.log(Verification);
  const publicRoutes = ["/login", "/signup"];
  const pathname = req.nextUrl.pathname;
  if (!token && !Verification && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (pathname === "/login" || pathname === "/signup") {
    if (token && Verification) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
export const config = {
  matcher: ["/blog/:path*", "/admin ", "/login", "/signup", "/user/:path*"],
};
