import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(
  (auth, req) => {
    if (isProtectedRoute(req) && !auth())
      auth().redirectToSignIn({
        returnBackUrl: req.url,
      });
  },
  {
    signInUrl: "/auth/Sign-in",
    signUpUrl: "/auth/Sigin-up",
  }
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
