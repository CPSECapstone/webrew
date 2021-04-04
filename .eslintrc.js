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
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/react-in-jsx-scope": "off",
        'prettier/prettier': 1,
        "prettier/prettier": ["error", {
            "endOfLine":"auto"
          }],
        "no-console": "off"
    }
  };