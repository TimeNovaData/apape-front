/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')
const path = require('path')
const dotenv = require('dotenv')

module.exports = configure(async function (ctx) {
  const env = ctx.dev ? dotenv.config().parsed : process.env
  return {
    eslint: {
      fix: true,
      // include = [],
      // exclude = [],
      // rawOptions = {},
      warnings: true,
      errors: true,
    },

    // https://v2.quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli/boot-files
    boot: [
      'axios',
      'emitter',
      'LoadingBar',
      'apexCharts',
      'filepond',
      'Notify',
      'BroadcastChannel',
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: ['@index.sass'],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'material-symbols-rounded',
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      //  'roboto-font', // optional, you are not bound to it
      // 'material-icons-round' // optional, you are not bound to it
      // 'svg-mdi-v6'
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16',
      },
      showProgress: true,
      vueRouterMode: 'history', // available values: 'hash', 'history'
      rebuildCache: true, // rebuilds Vite/linter/etc cache on startup
      // transpile: true,

      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,

      // publicPath: 'dist/spa',
      // analyze: true,
      env: {
        API_URL: env.API_URL,
        BACKEND_URL: env.BACKEND_URL,
        HTTPS_MODE: !ctx.dev,
        DARK_MODE: env.DARK_MODE,
        development: ctx.dev,
      },
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir

      extendViteConf(viteConf) {
        console.log('⚡ ⠂ DEV')
        const empty = '../public/empty.js'

        viteConf.resolve.alias['quasar/dist/quasar.sass'] = empty
        viteConf.resolve.alias['quasar/dist/quasar.css'] = empty

        const url = (p) => path.resolve(__dirname, p)

        viteConf.resolve.alias = {
          ...viteConf.resolve.alias,
          composables: url('./src/composables'),
          utils: url('./src/utils'),
          public: url('./public'),
          css: url('./src/css'),
          router: url('./src/router'),
          stories: url('./src/stories'),
        }
      },

      // viteVuePluginOptions: {},

      vitePlugins: [],
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    // devServer: {
    //   // https: true
    //   vueDevtools: true,
    //   open: false, // opens browser window automatically,
    //   options: {
    //     usePolling: true,
    //   },
    // },
    devServer: {
      // https: true
      open: false, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      config: {
        screen: {
          bodyClasses: true,
        },
        // loadingBar: {
        //   size: '4px',
        // },
        // dark: 'auto' // or Boolean true/false
      },

      // iconSet: 'material-icons', // Quasar icon set
      lang: 'pt-BR', // Quasar language pack
      ripple: {
        early: true,
      },
      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],
      // iconSet: 'material-symbols-rounded',
      // Quasar plugins
      plugins: ['Notify', 'Dialog', 'LoadingBar', 'Loading'],
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    // animations: ['fadeIn', 'fadeOut', 'fadeOutLeft', 'fadeOutLeft'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#property-sourcefiles
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },

    // https://v2.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR

      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},

      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render', // keep this as last one
      ],
    },

    // https://v2.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)

      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'app-vite',
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      contentScripts: ['my-content-script'],

      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    },
  }
})
