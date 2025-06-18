// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
	expoConfig,
	{
		ignores: ['dist/*'],
		rules: {
			'brace-style': ['error', '1tbs'],
			'no-inner-declarations': ['off'],
			'linebreak-style': ['error', 'windows'],
			indent: ['error', 'tab', {
				SwitchCase: 1,
			}],
			'space-before-function-paren': ['error', 'always'],
			'keyword-spacing': ['error', { before: true, after: true }],
			'no-extra-parens': ['off'],
			'comma-dangle': ['error', {
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'never',
				exports: 'never',
				functions: 'never',
			}],
			'no-multiple-empty-lines': ['error', { max: 1 }],
			quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			'space-before-blocks': ['error', 'always'],
			semi: ['error', 'always'],
			'semi-spacing': ['error', { before: false, after: true }],
			'space-infix-ops': ['error'],
			'object-curly-spacing': ['error', 'always'],
		},
	},
]);
