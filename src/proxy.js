import {  NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./app/lib/auth";
// import { auth } from "./app/lib/auth";


export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session);
    if (!session) {
        const signInUrl = new URL("/sign-in", request.url);
        signInUrl.searchParams.set("message", "unauthorized");

        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile", '/productDetail/:path*'], // "/productDetail/:path*"
};