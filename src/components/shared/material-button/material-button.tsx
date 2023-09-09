import type { ReactButton } from '~/types/react-elements';

import classNames from 'classnames';
import styles from './material-button.module.css';

type MaterialButtonProps = ReactButton & {
	variant: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
};

const MaterialButton = ({ disabled, variant, children, ...rest }: MaterialButtonProps) => {
	let classes = classNames(styles['text-button'], disabled && styles['text-button-disabled']);

	if (variant === 'filled') {
		classes = classNames(styles['filled-button'], disabled && styles['filled-button-disabled']);
	}

	if (variant === 'outlined') {
		classes = classNames(styles['outlined-button'], disabled && styles['outlined-button-disabled']);
	}

	if (variant === 'elevated') {
		classes = classNames(styles['elevated-button'], disabled && styles['elevated-button-disabled']);
	}

	if (variant === 'tonal') {
		classes = classNames(styles['tonal-button'], disabled && styles['tonal-button-disabled']);
	}

	return (
		<button className={classes} {...rest}>
			<span className={styles['hover']} />
			{children}
		</button>
	);
};

export default MaterialButton;
