import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import Image from 'next/image';

import styles from '~/styles/auth/auth.module.css';

export default function Page() {
	return (
		<main className={styles['auth']}>
			<section>
				<h1 className={styles['proyect-name']}>MemoGraph</h1>
				<article>
					<h2>Welcome</h2>
					<p>Please, enter your credentials</p>
				</article>
				<p className={styles['nothing']}>something but i dont know what</p>
			</section>
			<Image className={styles['test']} src="/images/artwork-03.jpg" alt="test" width="1920" height="1080" priority />
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
