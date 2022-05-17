module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	/* extends1: {
		eslint:recommended,
	}, */
	extends: ['standard',
	'eslint-config-prettier'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
