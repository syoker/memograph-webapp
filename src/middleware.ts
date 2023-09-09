import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const { redirect } = NextResponse;

	const { url } = request;

	console.log(url);

	return redirect(new URL('/auth/sign-in', request.url));
}

export const config = {
	matcher: '/auth',
};
