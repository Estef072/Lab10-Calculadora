module.exports = {

  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],

  moduleNameMapper: { '^.+\\.(css|less|scss)$': 'babel-jest' },

  // transform: {
  //   "^.+\\.(js|jsx|mjs)$": '<rootDir>/src/setupTests.js'
  // },

  testEnvironment: 'jsdom',
  // CIERTA CONFIGURACIÓN PARA REALIZAR TESTING
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  collectCoverage: true,

  coverageDirectory: 'coverage',
};