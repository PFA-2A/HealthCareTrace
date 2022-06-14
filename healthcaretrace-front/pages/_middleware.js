import { NextResponse } from "next/server";
import { getCookie, getCookies } from "cookies-next";
import { checkCookies, setCookies } from 'cookies-next';


export async function middleware(req) {

  //const userKey = getCookie("userKey")
  const userKey = req.cookies["userKey"];  
  var connected = req.cookies["connected"]

  const { pathname } = req.nextUrl;

  if (!connected && pathname !=="/connectTowallet") {
    return NextResponse.rewrite(new URL('/connectTowallet', req.url))
  }

  if (connected && !userKey && pathname !== "/signin" && pathname !== "/signup") {
    return NextResponse.rewrite(new URL('/signup', req.url))
  }

  /*if (connected && userKey && pathname === "/signin") {
    return NextResponse.rewrite(new URL('/', req.url))
  }*/

  
}
