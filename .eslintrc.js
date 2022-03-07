const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  overrides: [
    {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        browser: true,
        'react-native/react-native': true,
      },
      files: ['*.ts', '*.tsx'],
      rules: {
        // globals
        'no-shadow': RULES.OFF,
        'no-console': RULES.WARN,
        'no-undef': 2,
        // react
        'react/no-did-mount-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/jsx-uses-vars': 2,
        'react/react-in-jsx-scope': RULES.OFF,
        'react/prop-types': RULES.OFF,
        'react/jsx-no-bind': [2, { allowArrowFunctions: true }],
        'react/jsx-no-duplicate-props': 2,
        'react/display-name': RULES.OFF,
        'react-hooks/exhaustive-deps': RULES.WARN,
        'react-hooks/rules-of-hooks': RULES.ERROR,
        // prettier
        'prettier/prettier': RULES.ERROR,
        'arrow-body-style': RULES.OFF,
        'prefer-arrow-callback': RULES.OFF,
        'arrow-parens': [RULES.ERROR, 'as-needed'],
        // ts
        '@typescript-eslint/no-shadow': [RULES.ERROR],
        '@typescript-eslint/no-var-requires': RULES.OFF,
        '@typescript-eslint/no-use-before-define': RULES.OFF,
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
        // React Native
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
      },
    },
  ],
};
