/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';
import nextTranslate from 'next-translate-plugin';

const createPWA = withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true,
});

const nextConfig = nextTranslate({
	reactStrictMode: true,
});

export default createPWA(nextConfig);
