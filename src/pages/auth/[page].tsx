import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { MaterialButton } from '~/components/shared';

import styles from '~/styles/auth.module.css';

export default function Page() {
	const { t } = useTranslation('auth');

	return (
		<main className={styles['auth']}>
			<section>
				<h1 className={styles['proyect-name']}>MemoGraph</h1>
				<article>
					<h2>{t('welcome')}</h2>
					<p>{t('please-enter-credentials')}</p>
				</article>
				<MaterialButton variety="text">{t('create-account')}</MaterialButton>
			</section>
			<Image
				className={styles['test']}
				src="/images/test.png"
				alt="test"
				width="1920"
				height="1080"
				quality="100"
				priority
			/>
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const { resolvedUrl } = context;

	const validPages = ['/auth/sign-in', '/auth/sign-up'];

	if (!validPages.includes(resolvedUrl)) {
		return {
			notFound: true,
		};
	}

	return {
		props: {},
	};
};
