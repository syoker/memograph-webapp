import type { MetaData } from '~/types/shared';

type METADATA = {
	error404: {
		[key: string]: MetaData;
	};
	error500: {
		[key: string]: MetaData;
	};
};

const METADATA: METADATA = {
	error404: {
		en: {
			title: 'Error 404 | Page not found',
			description: 'Page not found',
		},
		es: {
			title: 'Error 404 | Página no encontrada',
			description: 'Página no encontrada',
		},
	},
	error500: {
		en: {
			title: 'Error 500 | Internal server error',
			description: 'Internal server error',
		},
		es: {
			title: 'Error 500 | Error interno del servidor',
			description: 'Error interno del servidor',
		},
	},
};

export default METADATA;
