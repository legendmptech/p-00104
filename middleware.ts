import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(pathname)
    // Redirect '/' to '/home'
    if (pathname === '/') {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // Get the JWT token
    const token = await getToken({ req: request });

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    // Handle /admin routes: Only accessible by admins
    if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
        if (token.user_type !== 'admin') {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Allow access for other cases
    return NextResponse.next();
}

export const config = {
    matcher: ['/profile', '/admin/:path*', '/', '/api/admin/:path*', '/api/appointment'],
};