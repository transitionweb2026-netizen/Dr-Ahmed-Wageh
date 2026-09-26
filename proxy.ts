import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

// /admin lives outside app/[locale]/ (it's a single-locale internal tool),
// so it's routed around next-intl entirely and instead gets a Supabase
// session refresh + auth guard. Refreshing here (not just in the layout)
// matters because Server Components can read cookies but never set them —
// only middleware and Server Actions can persist a refreshed session token
// back to the browser.
async function handleAdminAuth(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (!user && !isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  if (user && isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return response;
}

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return handleAdminAuth(request);
  }

  // An explicit request for "/en" is a deliberate ask for the English home
  // page (typed directly, an old bookmark, the switcher's escape hatch).
  // Left alone, next-intl's own "as-needed" canonicalization would redirect
  // it to "/" on its own subsequent pass — which, by then, is a brand new
  // request indistinguishable from a fresh visit, so it would go on to hit
  // the Arabic redirect below and land on the wrong language entirely. This
  // has to be resolved directly to the escape hatch in the same pass instead.
  if (request.nextUrl.pathname === "/en") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("lang", "en");
    return NextResponse.redirect(url, 307);
  }

  // Arabic is the default landing experience: a fresh visit to the bare
  // domain root goes straight to /ar. The one carve-out is the language
  // switcher's own "back to English" link from the Arabic home page — it
  // can't target "/" directly (that would just bounce right back here), so
  // it appends ?lang=en, which this check lets through unredirected. Nothing
  // else ever needs to link to that form, so it's not something a crawler
  // would organically discover.
  if (request.nextUrl.pathname === "/" && !request.nextUrl.searchParams.has("lang")) {
    const url = request.nextUrl.clone();
    url.pathname = "/ar";
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
