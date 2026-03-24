import { NextRequest, NextResponse } from "next/server";

const password = process.env.BASIC_AUTH_PASSWORD;

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export function middleware(req: NextRequest) {
  if (!password) {
    console.error("BASIC_AUTH_PASSWORD is not set.");
    return unauthorized();
  }

  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return unauthorized();
  }

  const base64Credentials = authHeader.split(" ")[1];
  const decoded = atob(base64Credentials);
  const providedPassword = decoded.split(":")[1] ?? "";

  if (providedPassword !== password) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
