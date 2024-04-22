module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,
  parserOptions: {
    ecmaVersion: '2021', // Allows for the parsing of modern ECMAScript features
  },

  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  // Rules order is important, please avoid shuffling them
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'standard',
    'prettier',
    'plugin:storybook/recommended',
    // 'plugin:tailwindcss/recommended',
  ],
  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'no-relative-import-paths',
    'vue',
    'sort-imports-es6-autofix',
  ],
  globals: {
    ga: 'readonly',
    // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    'prefer-promise-reject-errors': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['off'],
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true,
        rootDir: 'src',
        prefix: '',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 3,
        maxBOF: 3,
        maxEOF: 3,
      },
    ],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'sort-imports-es6-autofix/sort-imports-es6': [
      1,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
  // 'tailwindcss/no-custom-classname': [2 /* <enabled> */, {
  //   callees :["classnames", "clsx", "ctl", "cva", "tv"]
  // }],
}
