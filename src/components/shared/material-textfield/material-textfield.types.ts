import type { ErrorTextField } from '~/types/shared';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type HTMLInputPropsClone = {
	[K in keyof Omit<HTMLInputProps, 'placeholder' | 'aria-placeholder'>]: HTMLInputProps[K];
};

export type MaterialTextFieldProps = HTMLInputPropsClone & {
	error?: ErrorTextField | null;
	label?: string | undefined;
	helperText?: string | undefined;
};
