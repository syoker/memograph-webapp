import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1c1e" />
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fdfbff" />

				<link rel="icon" href="/icon/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon/icon-192x192.png" />

				<meta name="twitter:creator" content="@Syoker_" />
				<meta name="twitter:card" content="summary_large_image" />

				<meta property="og:type" content="website" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
