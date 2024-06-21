import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/admin(.*)", "/forum(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req))
    auth().redirectToSignIn({
      returnBackUrl: "/",
    });
  
}, {
  signInUrl: "/auth/Sign-in",
  redirectUrl: "/",
  signUpUrl: "/auth/Sigin-up",
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
