import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server";

const privateRoutes = ["/dashboard", "/admin", "/profile"];

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/auth";
const REDIRECT_WHEN_AUTHENTICATED_ROUTE = "/dashboard";

const isShortCode = (path: string) => {
  const knownRoutes = [
    "/",
    "/auth",
    "/changelog",
    "/about",
    "/faq",
    ...privateRoutes,
  ];
  if (knownRoutes.some((route) => path.startsWith(route))) return false;
  return /^\/[\w\-\/]+$/.test(path);
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (isShortCode(path)) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`
    );
  }

  const authToken = request.cookies.get("token");

  const isPrivateRoute = privateRoutes.includes(path);

  if (isPrivateRoute && !authToken) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && path === "/auth") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
