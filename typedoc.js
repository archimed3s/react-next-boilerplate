module.exports = {
	name: 'Cortex JE',
	out: 'src/client/static/docs',
	exclude:
		'src/client/assets/**/*,src/client/static/**/*,src/client/common/styles/**/*,**/*.config.js,**/test.tsx,typedoc.js,jest.setup.js,**/*.d.tsx,**/styles.ts,**/colors.ts',
	target: 'es5',
	hideGenerator: true,
	excludeExternals: true,
	ignoreCompilerErrors: true
};
