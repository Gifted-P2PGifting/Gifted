module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-native'],
  rules: {
    'no-use-before-define': 'warn',
    'react/jsx-filename-extension': 'warn',
    'import/no-unresolved': 'warn',
    'import/extensions': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'global-require': 'warn',
    'no-undef': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react/destructuring-assignment': 'warn',
    'import/prefer-default-export': 'warn',
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        semi: 'off',
      },
    },
  ],
};
