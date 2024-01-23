/* export function middleware() {

     this is going to be invoked for every route 
  console.log("hello broo");
} */

import { NextResponse } from "next/server";

export function middleware(request) {
  /*  return Response.json({
    msg: "hello there",
  }); */

  /* new URL('/client',request.url) this will redirect from current
  url to {/client} */

  return NextResponse.redirect(new URL("/", request.url));
}

/* to set up the middleware for specific routes */

export const config = {
  /* {/about/:path*} this will run form /about and 
    everything after about ex:- /about/info */

  matcher: ["/about/:path*"],
};
