module.exports = {
	extends: ['stylelint-config-recommended', 'stylelint-config-styled-components', 'stylelint-prettier/recommended'],
	processors: ['stylelint-processor-styled-components'],
	plugins: ['stylelint-prettier'],
	rules: {
		'prettier/prettier': true,
		'declaration-block-no-duplicate-properties': true
	},
	ignoreFiles: ['dist/**/*', 'node_modules/**/*', 'src/client/static/coverage/**/*', 'src/client/static/docs/**/*']
};
