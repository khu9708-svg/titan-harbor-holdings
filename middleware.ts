import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = process.env.ADMIN_PREVIEW_TOKEN;

  if (!token) {
    return NextResponse.next();
  }

  const queryToken = request.nextUrl.searchParams.get("token");
  const cookieToken = request.cookies.get("titan_admin_preview")?.value;

  if (queryToken === token) {
    const response = NextResponse.next();
    response.cookies.set("titan_admin_preview", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/admin",
    });
    return response;
  }

  if (cookieToken === token) {
    return NextResponse.next();
  }

  return new NextResponse("Admin route protected", { status: 401 });
}

export const config = {
  matcher: ["/admin/:path*"],
};
