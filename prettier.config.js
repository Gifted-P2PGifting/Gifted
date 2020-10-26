module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  overrides: [
    {
      files: '*.json',
      options: {
        semi: false,
      },
    },
  ],
};
