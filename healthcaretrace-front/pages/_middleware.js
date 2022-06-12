import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export async function middleware(req) {

  //const userKey = getCookie("userKey")
  const userKey = "dummy";

  const { pathname } = req.nextUrl;
  console.log(pathname)

  if (!userKey && pathname !== "/signin") {
    return NextResponse.rewrite(new URL('/signin', req.url))
  }

  if (userKey && pathname === "/signin") {
    return NextResponse.rewrite(new URL('/', req.url))
  }
}
