import { NextResponse, type NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.split('/')[1];

  if(['about'].includes(pathname)) {
    return NextResponse.rewrite(new URL('/about-us', request.url))
  }
}

export const config = {
  matcher: '/:path*',
}