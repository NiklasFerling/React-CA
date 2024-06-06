module.exports = {
    env: {
      node: true,
      ci: true,
    },
    extends: [
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'your-rule-name': ['error', {... }, { 'env': { 'ci': { 'warnings': false } } }],
    },
  };