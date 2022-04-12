module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',

  },

  plugins: ['react'],

  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': 0,
    'react/state-in-constructor': 0,
    'react/no-unused-state': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-relative-packages': 0,
    'no-await-in-loop': 0,
    'no-undef': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'react/static-property-placement': 0,
    'no-buffer-constructor': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-unescaped-entities': 0,
    'react/forbid-prop-types': 0,
    'default-param-last': 0,
    'no-case-declarations': 0,
    'import/no-mutable-exports': 0,
    'prefer-destructuring': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,

  },
};
