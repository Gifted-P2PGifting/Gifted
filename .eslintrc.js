module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-native', 'jest'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts', '.js'] }],
    'react/no-unescaped-entities': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'warn',
    'global-require': 'off',
    'spaced-comment': [2, 'always'],
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        semi: 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    jest: {
      version: 36,
    },
  },
};
