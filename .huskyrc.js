module.exports = {
	hooks: {
		'pre-commit': 'npm run lint && pretty-quick --staged && npm run test'
	}
};
