import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";
import axios from "axios";
function extractLocaleFromCookie(
  cookieHeader: string | null,
  defaultLocale: string
): string {
  let locale = defaultLocale;

  if (cookieHeader) {
    const cookies = cookieHeader
      .split(";")
      .map((cookie) => cookie.trim().split("="));
    const localeCookie = cookies.find((cookie) => cookie[0] === "NEXT_LOCALE");

    if (localeCookie) {
      locale = decodeURIComponent(localeCookie[1]);
    }
  }

  return locale;
}
export const getIPAddress = async (req: NextRequest) => {
  // Access the remote IP address from the request headers
  const ipAddress =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for");
  return ipAddress;
};
export const getUserAgent = async (req: NextRequest) => {
  // Access the remote IP address from the request headers
  const agent = req.headers.get("user-agent");
  return agent;
};

export default async function middleware(request: NextRequest) {
  /** Code To Get Ip & Country */

  const pathname = request.nextUrl.pathname;
  const defaultLocale = request.headers.get("x-your-custom-locale") || "id";
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "id"],
    defaultLocale,
  });
  const cookieHeader = request.headers.get("cookie");
  const locale = extractLocaleFromCookie(cookieHeader, defaultLocale);
  const response = handleI18nRouting(request);
  response.headers.set("x-your-custom-locale", defaultLocale);
  const token = (await getToken({
    req: request as any,
    secret: process.env.NEXTAUTH_SECRET!,
  })) as {
    user: { email: string; role: string; bearer: string; id: number };
  } | null;

  if (pathname.startsWith("/client") || pathname.startsWith("/admin")) {
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/admin/:path*", "/client/:path*", "/(id|en)/:path*"],
};
