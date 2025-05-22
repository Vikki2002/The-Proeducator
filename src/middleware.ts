
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const url = request.nextUrl;

    // If user is NOT authenticated and trying to access protected routes, redirect to home
    if (!token && url.pathname.startsWith("/userdashboard")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Allow the request if no redirects are needed
    return NextResponse.next();
}

export const config = {
    matcher: [],
};
