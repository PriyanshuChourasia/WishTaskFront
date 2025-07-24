import {NextRequest, NextResponse} from "next/server";
import Cookies from "js-cookie";

export async function middleware(request:NextRequest){
  const accessToken = request.cookies.get('access_token')?.value;

    if (!accessToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        const res = await fetch('http://localhost:9000/api/health-check', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (!res.ok) {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('access_token');
            response.cookies.delete('refresh_token');
            return response;
        }
    } catch (err) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete('access_token');
        response.cookies.delete('refresh_token');
        return response;
    }

    return NextResponse.next();
}


export const config = {
    matcher: '/dashboard/:path*'
}