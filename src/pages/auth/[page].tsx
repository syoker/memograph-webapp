import { Form, Navigator } from '~/components/auth';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import useTranslation from 'next-translate/useTranslation';

import styles from '~/styles/auth.module.css';

export default function Page({ resolvedUrl }: { resolvedUrl: string }) {
	const { t } = useTranslation('auth');

	return (
		<main className={styles['auth']}>
			<h1 className={styles['proyect-name']}>MemoGraph</h1>
			<section className={styles['section']}>
				<h2 className={styles['title']}>{t('welcome')}</h2>
				<p className={styles['paragraph']}>{t('please-enter-credentials')}</p>
				<Navigator url={resolvedUrl} />
				<Form url={resolvedUrl} />
			</section>
			<p className={styles['license']}>Copyrigth @Syoker 2023 | MIT License</p>
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
		props: {
			resolvedUrl,
		},
	};
};
