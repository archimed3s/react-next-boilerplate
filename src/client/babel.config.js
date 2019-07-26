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
				]
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
				]
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
			plugins: [
				[
					'styled-components',
					{
						ssr: true
					}
				]
			]
		}
	}
};
