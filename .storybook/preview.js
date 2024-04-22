// /** @type { import('@storybook/vue').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// }

// export default preview

// css

import '../src/css/@index.sass'
import '../src/css/tailwind.css'
import '../src/css/vendor/dracula.css'
import '../src/stories/css/stories-global.sass'

// Loads the quasar styles and registers quasar functionality with storybook
import { setup } from '@storybook/vue3'
import { Quasar, Notify, Dialog, LoadingBar } from 'quasar'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

// import DocumentationTemplate from './DocumentationTemplate.mdx'
// import { themes } from '@storybook/theming'

// import { app } from '@storybook/vue3'
// console.log(app)

// This is also where you would setup things such as pinia for storybook
async function loadFonts() {
  const font = new FontFace(
    'Material Symbols Rounded',
    'url(../public/fonts/material-symbols-rounded-200.woff2)',
    {
      style: 'normal',
      weight: '200',
    }
  )
  // wait for font to be loaded
  await font.load()
  // add font to document
  document.fonts.add(font)
  // enable font with CSS class
  document.body.classList.add('fonts-loaded')
}

export const pinia = createPinia()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  // // All stories expect a theme arg
  // argTypes: { theme: { control: 'select', options: ['light', 'dark'] } },

  // // The default value of the theme arg to all stories
  // args: { theme: 'light' },
  // darkMode: {
  //   // Override the default dark theme
  //   dark: { ...themes.dark, appBg: 'black' },
  //   // Override the default light theme
  //   light: { ...themes.dark, appBg: 'white' },
  //   darkClass: 'body--dark',
  //   lightClass: 'body--light',
  //   stylePreview: true,
  // },
  /* docs: {
    page: DocumentationTemplate,
  }, */
  // layout: 'centered',
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
})



const quasarConfig = {
  framework: {
    config: {
      screen: {
        bodyClasses: true,
      },
    },

    lang: 'pt-BR',
    ripple: {
      early: true,
    },

  },

}

export default {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div><story /></div>',
    }),
  ],
}

setup((app) => {
  app.use(router)
  app.use(pinia)
  app.config.globalProperties.$console = console.log
  app.use(Quasar, {
    config: quasarConfig,
    plugins: {
      Notify, Dialog, LoadingBar
    },
  })

  loadFonts()
})
