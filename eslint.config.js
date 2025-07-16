import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'quotes': ['warn', 'single'],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'space-before-function-paren': ['warn', 'always'],
      'space-before-blocks': ['warn', 'always'],
    }
  },
  ...tseslint.configs.recommended,
]);
