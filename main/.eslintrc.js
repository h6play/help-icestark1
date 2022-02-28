// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  // add your custom rules here
  rules: {
    'no-param-reassign': 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary':true
    }],
    'guard-for-in':0,
    'arrow-parens': 0,
    'linebreak-style': 0,
    'comma-dangle': [
      'error',
      'only-multiline'
    ],
    'global-require': 0,
    'arrow-body-style': 0,
    'no-mixed-operators': 0,
    'prefer-destructuring': 0,
    'import/newline-after-import': 1,
    'prefer-template': 1,
    'spaced-comment': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-return-assign': 0, //
    'no-restricted-syntax': 0, //
    'no-lonely-if': 0,
    'no-bitwise': 0,
    'no-unused-vars': 1,
    'import/no-dynamic-require': 0,
    'func-names': 0,
    // 哎，关了吧。但是还是比较建议 打开 console 错误提醒...
    'no-console': 0,
    'no-debugger': 0,
    'indent': 'off',
    'max-len': 'off',
    'eqeqeq': 'off',
    'quote-props': 'off',
    'prefer-const': 'off'
    // 'no-debugger': process.env.NODE_ENV === 'development' ?  0 : 2,
    // 'no-console': process.env.NODE_ENV === 'development' ? 0 : 2,
  }
}
