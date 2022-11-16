module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect', //автоматически определяет версию реакт
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    //   'plugin:import/errors',
    //   'plugin:import/warnings',
    //   'plugin:import/typescript',
    //   'plugin:jsx-a11y/recommended',
    //   'plugin:eslint-comments/recommended',
    'prettier',
    //   'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
