import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { getToken } from "next-auth/jwt";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

const protectedRoutes = [
  {
    path: "/api/products",
    methods: ["PUT", "DELETE", "POST"],
  },
  { path: "/api/orders", methods: "*" },
  { path: "/api/collections", methods: ["PUT", "DELETE", "POST"] },
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the route is one of the protected API routes
  const isProtectedRoute = protectedRoutes.some(
    (route) =>
      pathname.startsWith(route.path) &&
      (route.methods === "*" || route.methods.includes(request.method))
  );

  // If the route is protected, verify authentication first
  if (isProtectedRoute) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // If no valid token is found, redirect to the sign-in page
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Allow the request to proceed if authenticated
    return NextResponse.next();
  }

  // Bypass locale and auth checks for robots.txt and sitemap.xml
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return NextResponse.next();
  }

  // Skip locale handling for API routes
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Locale handling: Check if the request path is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect to the correct locale if missing
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
  console.log("pathname:", pathname);
  // Allow the request to proceed if none of the conditions matched
  return NextResponse.next();
}

// Configuration for which paths the middleware should handle
export const config = {
  // Apply middleware to all routes except those explicitly excluded
  matcher: [
    "/((?!_next/static|_next/image|images|favicon.ico|admin).*)",
    "/api/:path*", // Include API routes to ensure they are checked by middleware
  ],
};
