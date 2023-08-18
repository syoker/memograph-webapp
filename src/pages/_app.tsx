import '~/styles/app/reset.css';
import '~/styles/app/theme.css';
import '~/styles/app/globals.css';
import '~/styles/app/shadows.css';

import '/public/fonts/geometos-rounded.css';

import type { AppProps } from 'next/app';
import { Languages } from '~/components/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Languages validLanguages={['en', 'es']}>
			<Component {...pageProps} />
		</Languages>
	);
}
