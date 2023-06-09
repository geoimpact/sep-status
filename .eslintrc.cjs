module.exports = {
  env: {
    browser: false,
    es2022: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': "off",
    '@typescript-eslint/ban-ts-commen': "off"
  },
  ignorePatterns: [
      "src/**/*.js"
  ],
}
