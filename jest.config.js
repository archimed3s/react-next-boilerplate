const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	testRegex: TEST_REGEX,
	transform: {
		'^.+\\.tsx?$': 'babel-jest'
	},
	testPathIgnorePatterns: [
		'<rootDir>/dist/',
		'<rootDir>/node_modules/',
		'<rootDir>/src/types/',
		'<rootDir>/src/client/assets/',
		'<rootDir>/src/client/common/styles/',
		'<rootDir>/src/client/static/'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	collectCoverage: false,
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/styles.ts',
		'!src/client/next.config.js',
		'!src/client/next-env.d.ts',
		'!<rootDir>/dist/',
		'!<rootDir>/node_modules/',
		'!<rootDir>/src/types/**/*',
		'!<rootDir>/src/client/assets/**/*',
		'!<rootDir>/src/client/common/styles/**/*',
		'!<rootDir>/src/client/static/**/*'
	],
	coverageDirectory: 'src/client/static/coverage'
};
