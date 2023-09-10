import Link from 'next/link';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './navigator.module.css';

const Navigator = ({ url }: { url: string }) => {
	const { t } = useTranslation('auth');

	return (
		<nav className={styles['navigator']}>
			<Link className={classNames(url === '/auth/sign-in' && styles['active'])} href="/auth/sign-in">
				{t('sign-in')}
			</Link>
			<Link className={classNames(url === '/auth/sign-up' && styles['active'])} href="/auth/sign-up">
				{t('sign-up')}
			</Link>
			<span className={classNames(styles['indicator'], url === '/auth/sign-in' ? styles['left'] : styles['right'])} />
		</nav>
	);
};

export default Navigator;
