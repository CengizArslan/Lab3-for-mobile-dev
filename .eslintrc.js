module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: true, // ESLint will use babel.config.js
    babelOptions: {
      presets: ['module:metro-react-native-babel-preset'],
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['plugin:react/recommended', '@react-native/eslint-config'],
  rules: {
    // Your custom rules
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
  },
};
