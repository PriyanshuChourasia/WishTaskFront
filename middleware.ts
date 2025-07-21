import {NextRequest} from "next/server";

export function middleware(request:NextRequest){
    console.log("Middelware running");
}


export const config = {
    matcher: '/dashboard/:path*'
}