export const URLPROPS = {
	pattern:
		/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
};

export const USERNAMEPROPS = {
	pattern: /^[a-z0-9]+$/,
	minLength: 4,
	maxLength: 64,
};

export const PASSWORDPROPS = {
	minLength: 8,
};
