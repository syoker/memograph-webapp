import { Header } from '~/components/landing';
import { CustomHead } from '~/components/shared';

import useTranslation from 'next-translate/useTranslation';

import styles from '~/styles/landing.module.css';

export default function Landing() {
	const { t } = useTranslation('landing');

	return (
		<>
			<CustomHead properties={{ title: 'Memograph' }} />

			<Header />

			<main className={styles['main']}>
				<h1 className={styles['landing-title']}>
					{`${t('landing-title')} `} <span>memograph</span>
				</h1>
				<p className={styles['landing-subtitle']}>{t('landing-subtitle')}</p>
			</main>
		</>
	);
}
