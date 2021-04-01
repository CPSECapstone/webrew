module.exports = {
    extends: [
      'airbnb-typescript-prettier',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 1,
        "prettier/prettier": ["error", {
            "endOfLine":"auto"
          }],
        "no-console": "off"
    }
  };