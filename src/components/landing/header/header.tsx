import { MaterialLink } from '~/components/shared';

import useTranslation from 'next-translate/useTranslation';

import styles from './header.module.css';

const Header = () => {
	const { t } = useTranslation('landing');

	return (
		<header className={styles['header']}>
			<nav className={styles['nav']}>
				<MaterialLink variant="outlined" href="/auth/sign-in">
					{t('sign-in')}
				</MaterialLink>
			</nav>
		</header>
	);
};

export default Header;
