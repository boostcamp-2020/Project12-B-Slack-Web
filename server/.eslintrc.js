module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'airbnb-base', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['dist/', 'node_modules/'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    'prefer-const': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'class-methods-use-this': 0
  }
};
