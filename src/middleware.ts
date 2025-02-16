import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(pathname)
    // Redirect '/' to '/home'
    if (pathname === '/') {
        return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};