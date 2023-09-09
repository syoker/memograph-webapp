import { SignIn } from '~/components/auth';
import { MaterialButton } from '~/components/shared';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import useTranslation from 'next-translate/useTranslation';

import styles from '~/styles/auth.module.css';

export default function Page() {
	const { t } = useTranslation('auth');

	return (
		<main className={styles['auth']}>
			<h1 className={styles['proyect-name']}>MemoGraph</h1>
			<SignIn />
			<MaterialButton variant="text">{t('create-account')}</MaterialButton>
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
