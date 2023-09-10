import { useTextField } from '~/hooks';
import { useEffect, useState, type FormEvent } from 'react';
import { MaterialTextField, MaterialButton } from '~/components/shared';
import { PASSWORDPROPS, URLPROPS, USERNAMEPROPS } from './form.constants';

import useTranslation from 'next-translate/useTranslation';

import styles from './form.module.css';

const Form = ({ url }: { url: string }) => {
	const { t } = useTranslation('auth');

	const [buttonStatus, setButtonStatus] = useState(true);

	const [urlErrorStatus, setUrlErrorStatus] = useState(false);
	const [usernameErrorStatus, setUsernameErrorStatus] = useState(false);
	const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);

	const [urlValue, urlOnChange, urlError] = useTextField(URLPROPS);
	const [usernameValue, usernameOnChange, usernameError] = useTextField(USERNAMEPROPS);
	const [passwordValue, passwordOnChange, passwordError] = useTextField(PASSWORDPROPS);

	useEffect(() => {
		if (urlValue.length > 0 && usernameValue.length > 0 && passwordValue.length > 0) {
			setButtonStatus(false);
		} else {
			setButtonStatus(true);
		}
	}, [urlValue, usernameValue, passwordValue]);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (urlError) {
			setUrlErrorStatus(true);
		}

		if (usernameError) {
			setUsernameErrorStatus(true);
		}

		if (passwordError) {
			setPasswordErrorStatus(true);
		}

		if (urlError || usernameError || passwordError) {
			return false;
		}

		return false;
	};

	return (
		<form onSubmit={onSubmit} noValidate className={styles['form']}>
			<MaterialTextField
				type="url"
				label={t('url-label')}
				value={urlValue}
				onChange={urlOnChange}
				error={urlErrorStatus ? urlError : null}
			/>
			<MaterialTextField
				type="text"
				label={t('username-label')}
				value={usernameValue}
				helperText={url === '/auth/sign-up' ? t('username-helper-text') : ''}
				onChange={usernameOnChange}
				error={usernameErrorStatus ? usernameError : null}
			/>
			<MaterialTextField
				type="password"
				label={t('password-label')}
				value={passwordValue}
				onChange={passwordOnChange}
				error={passwordErrorStatus ? passwordError : null}
			/>
			<MaterialButton
				type={buttonStatus ? 'button' : 'submit'}
				variant="filled"
				style={{ borderRadius: '8px', padding: '1.4rem' }}
				disabled={buttonStatus}
			>
				{url === '/auth/sign-in' ? t('sign-in') : t('sign-up')}
			</MaterialButton>
		</form>
	);
};

export default Form;
