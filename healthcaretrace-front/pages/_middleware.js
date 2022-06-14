import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export async function middleware(req) {
  /*

  //const userKey = getCookie("userKey")
  const userKey = "dummy";  
  var connected = getCookie("wallet")

  const { pathname } = req.nextUrl;
  console.log(connected)


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
