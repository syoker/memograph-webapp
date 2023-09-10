import { useState, type ChangeEvent } from 'react';

import useTranslation from 'next-translate/useTranslation';

import type { ErrorTextField } from '~/types/error-textfield';

type TextFieldProps = [
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void,
	error: ErrorTextField | null,
];

interface TextField {
	pattern?: RegExp;
	minLength?: number;
	maxLength?: number;
}

const useTextField = ({ pattern, minLength, maxLength }: TextField): TextFieldProps => {
	const { lang } = useTranslation();

	const [value, setValue] = useState('');
	const [error, setError] = useState<ErrorTextField | null>(null);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setError(null);

		if (minLength && event.target.value.length < minLength) {
			setError({
				type: 'min-length',
				message: lang === 'es' ? `Ingrese más de ${minLength} carácteres` : `Enter more than ${minLength} characters`,
			});
		}

		if (maxLength && event.target.value.length > maxLength) {
			setError({
				type: 'max-length',
				message: lang === 'es' ? `Ingrese menos de ${maxLength} carácteres` : `Enter less than ${maxLength} characters`,
			});
		}

		if (pattern && !event.target.value.match(pattern)) {
			if (event.target.type === 'url') {
				setError({
					type: 'pattern',
					message: lang === 'es' ? 'Ingrese un URL válido' : 'Enter a valid URL',
				});
			} else {
				setError({
					type: 'pattern',
					message: lang === 'es' ? `Ingrese carácteres validos: ${pattern}` : `Enter valid characters: ${pattern}`,
				});
			}
		}

		setValue(event.target.value);
	};

	return [value, onChange, error];
};

export default useTextField;
