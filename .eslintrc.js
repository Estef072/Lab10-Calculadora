module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression'],
      },
    ],
    'no-param-reassign': 0,
  },
};
