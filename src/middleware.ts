import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed' 
});

export default function middleware(req: NextRequest) {
  // 1. Run the i18n routing
  const response = intlMiddleware(req);

  // 2. Invisible Edge Personalization - Read Geo Data
  const city = req.geo?.city || "Bahrain";
  response.headers.set('x-user-city', city);

  return response;
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
