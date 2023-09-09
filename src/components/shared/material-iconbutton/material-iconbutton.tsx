import type { ReactButton } from '~/types/react-elements';

import styles from './material-iconbutton.module.css';

const MaterialIconButton = (props: ReactButton) => {
	return <button className={styles['icon-button']} type="button" {...props} />;
};

export default MaterialIconButton;
