import { useTextField } from '~/hooks';
import { MaterialTextField, MaterialButton } from '~/components/shared';

import useTranslation from 'next-translate/useTranslation';

import styles from './sign-in.module.css';

const SignIn = () => {
	const { t } = useTranslation('auth');

	const [urlValue, urlOnChange, urlError] = useTextField({
		pattern:
			/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
	});
	const [usernameValue, usernameOnChange, usernameError] = useTextField({
		pattern: /^[a-z0-9]+$/,
		minLength: 4,
		maxLength: 64,
	});
	const [passwordValue, passwordOnChange, passwordError] = useTextField({ minLength: 8 });

	return (
		<article className={styles['sign-in']}>
			<h2>{t('welcome')}</h2>
			<p>{t('please-enter-credentials')}</p>
			<form className={styles['form']}>
				<MaterialTextField
					type="url"
					label="URL del servidor"
					value={urlValue}
					onChange={urlOnChange}
					error={urlError}
				/>
				<MaterialTextField
					type="text"
					label="Nombre de usuario"
					value={usernameValue}
					onChange={usernameOnChange}
					error={usernameError}
				/>
				<MaterialTextField
					type="password"
					label="Contraseña"
					value={passwordValue}
					onChange={passwordOnChange}
					error={passwordError}
				/>
				<MaterialButton variant="filled" style={{ borderRadius: '8px', padding: '1rem' }}>
					Iniciar Sesión
				</MaterialButton>
			</form>
		</article>
	);
};

export default SignIn;
