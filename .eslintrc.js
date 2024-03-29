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
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-unsafe-assignment' : 'off',
      '@typescript-eslint/no-unsafe-call' : 'off',
      '@typescript-eslint/no-unsafe-member-access' : 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any' : 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'auto',
         },
      ],
      'no-underscore-dangle': ['error', { allow: ['__typename'] }],
      'no-console': 'off',
      'no-plusplus': 'off',
   },
};
