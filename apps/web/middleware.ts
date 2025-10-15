import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { request } from 'http'
import { NextResponse } from 'next/server'

const isPublicRoutes = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)"
])


const isOrgFreeRoutes = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/org-selection(.*)",
])

export default clerkMiddleware(async (auth, req) => {

    const {userId,orgId} = await auth()

if (!isPublicRoutes(req))
    await auth.protect() 


if (userId && !orgId && !isOrgFreeRoutes(req)){
    const searchParams = new URLSearchParams({ redirectUrl: req.url })
    const orgSelection = new URL(`/org-selection?${searchParams.toString()}`, req.url)
    return NextResponse.redirect(orgSelection)
}
})
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}