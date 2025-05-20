import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from "next/server";

const publicRoutes = [
  { path: "/", whenAuthenticated: "next" },
  { path: "/auth", whenAuthenticated: "redirect" },
  { path: "/changelog", whenAuthenticated: "next" },
  { path: "/about", whenAuthenticated: "next" },
  { path: "/faq", whenAuthenticated: "next" },
];

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/auth";
const REDIRECT_WHEN_AUTHENTICATED_ROUTE = "/dashboard";

const isShortCode = (path: string) => /^\/[a-zA-Z0-9]{5,20}$/.test(path);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (isShortCode(path)) {
    return NextResponse.redirect(
      `https://qck-link-backend.onrender.com${path}`
    );
  }

  const publicRoute = publicRoutes.find((route) => route.path === path);
  const authToken = request.cookies.get("token");

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === "redirect"
  ) {
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
