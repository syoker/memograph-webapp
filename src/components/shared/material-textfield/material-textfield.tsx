import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { MaterialIconButton, StyledIcon } from '~/components/shared';

import type { MaterialTextFieldProps } from './material-textfield.types';

import classNames from 'classnames';
import styles from './material-textfield.module.css';

const MaterialTextField = ({ type, value, label, helperText, style, error, ...rest }: MaterialTextFieldProps) => {
	const [isShowPassword, setShowPassword] = useState(false);

	const textFieldType = isShowPassword ? 'text' : type === 'password' ? 'password' : type;

	const classesHelperText = classNames(styles['helper-text'], (error || helperText) && styles['show-helper-text']);

	return (
		<div className={classNames(styles['container'], error && styles['error'])} style={style}>
			<fieldset className={styles['field-set']}>
				{type === 'url' && (
					<span className={styles['icon-container']}>
						<StyledIcon type="icon" url={value ? (value as string) : ''} />
					</span>
				)}
				<input className={styles['input']} type={textFieldType} placeholder=" " {...rest} />
				<label className={styles['label']}>{label}</label>
				{type === 'password' && (
					<MaterialIconButton onClick={() => setShowPassword((show) => !show)}>
						{isShowPassword ? <MdVisibilityOff /> : <MdVisibility />}
					</MaterialIconButton>
				)}
			</fieldset>

			<span className={classesHelperText} aria-label="helper-text">
				{error ? error.message : helperText}
			</span>
		</div>
	);
};

export default MaterialTextField;
