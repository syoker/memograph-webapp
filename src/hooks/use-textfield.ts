import { useState, type ChangeEvent } from 'react';

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
	const [value, setValue] = useState('');
	const [error, setError] = useState<ErrorTextField | null>(null);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setError(null);

		if (minLength && event.target.value.length < minLength) {
			setError({
				type: 'min-length',
				message: `Ingrese más de ${minLength} carácteres`,
			});
		}

		if (maxLength && event.target.value.length > maxLength) {
			setError({
				type: 'max-length',
				message: `Ingrese menos de ${maxLength} carácteres`,
			});
		}

		if (pattern && !event.target.value.match(pattern)) {
			setError({
				type: 'pattern',
				message: 'Ingrese carácteres validos',
			});
		}

		setValue(event.target.value);
	};

	return [value, onChange, error];
};

export default useTextField;
