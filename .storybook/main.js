const { mergeConfig } = require('vite')
const path = require('path')
exports.default = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.mdx'],
  framework: '@storybook/vue3-vite',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     vueDocgenOptions: {
    //       alias: {
    //         src: path.resolve(__dirname, '../src'),
    //       },
    //     },
    //   },
    // },
  ],
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  async viteFinal(config) {
    const configFinal = mergeConfig(config, {
      plugins: [],
      resolve: {
        alias: {
          src: path.resolve(__dirname, '../src'),
          composables: path.resolve(__dirname, '../src/composables'),
          utils: path.resolve(__dirname, '../src/utils'),
          public: path.resolve(__dirname, '../public'),
          css: path.resolve(__dirname, '../src/css'),
          components: path.resolve(__dirname, '../src/components'),
          pages: path.resolve(__dirname, '../src/pages'),
          // assets: path.resolve(__dirname, '../src/assets'),
          boot: path.resolve(__dirname, '../src/boot'),
          stores: path.resolve(__dirname, '../src/stores'),
          router: path.resolve(__dirname, '../src/router'),
          layouts: path.resolve(__dirname, '../src/layouts'),
        },
      },
      define: {
        process: {
          env: {
            API_URL: null,
            development: true,
          },
        },
      },
    })
    console.log(configFinal)
    return configFinal
  },
}
/* export const framework = {
  name: '@storybook/vue3-vite',
  options: {}
};
export const addons = ['@storybook/addon-mdx-gfm'];
export const docs = {
  autodocs: true
}; */
