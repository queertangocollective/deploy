module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2015
  },
  plugins: ['node'],
  extends: [
    'eslint:recommended'
  ],
  env: {
    browser: false,
    node: true
  },
  rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {

  })
};
