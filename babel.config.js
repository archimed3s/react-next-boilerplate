const moduleResolver = [
	'module-resolver',
	{
		alias: {
			assets: './src/client/assets',
			common: './src/client/common',
			blocks: './src/client/components/blocks',
			elements: './src/client/components/elements'
		}
	}
];

module.exports = {
	env: {
		production: {
			presets: ['next/babel'],
			plugins: [
				[
					'styled-components',
					{
						displayName: false,
						pure: true
					}
				],
				moduleResolver
			]
		},
		development: {
			presets: ['next/babel'],
			plugins: [
				[
					'styled-components',
					{
						displayName: true,
						minify: false
					}
				],
				moduleResolver
			]
		},
		test: {
			presets: [
				[
					'next/babel',
					{
						'preset-env': {
							modules: 'commonjs'
						}
					}
				]
			],
			plugins: [['styled-components'], moduleResolver]
		}
	}
};
