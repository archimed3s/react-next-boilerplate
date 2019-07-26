module.exports = {
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
};
