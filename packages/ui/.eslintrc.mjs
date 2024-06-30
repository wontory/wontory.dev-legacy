/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['@wontory/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}

export default config
