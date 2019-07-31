const withPlugins = require('next-compose-plugins'),
	optimizedImages = require('next-optimized-images');

module.exports = withPlugins([[optimizedImages]], {
	distDir: '../../dist',
	webpack(config, {}) {
		config.module.rules.push({
			test: /\.[jt]sx?$/,
			use: [
				{
					loader: 'stylelint-custom-processor-loader',
					options: {
						isServer: false
					}
				},
				{
					loader: 'tslint-loader',
					options: {
						isServer: false
					}
				}
			],
			exclude: /node_modules/
		});
		return config;
	}
});
