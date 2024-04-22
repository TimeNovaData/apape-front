import EmptyItem from './EmptyItem.vue'
import html from 'src/utils/html.js' // template tag for use vscode extension lit-html,

/**
 * Args - define as (props)
 */
const args = {
  // size: 'md',
}

/**
 *  Arg Types - permite definir e documentar os tipos de args (props)
 */
const argTypes = {
  // size: {
  //   control: { type: 'select' },  // https://storybook.js.org/docs/vue/essentials/controls#annotation
  //   options: ['sm', 'md', 'lg'],
  //   table: {
  //     type: {
  //       summary: 'sm | md | lg',
  //     },
  //   },
  // },
  // slot: {
  //   table: { type: { summary: 'QBtn slots' } },
  //   control: { type: null },
  // },
}

/**
 *  Parameters
 */
const parameters = { docs: {} }

/*
 * Component Story Format  https://storybook.js.org/docs/vue/api/csf
 * Default Metadata Storie https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
 */


export default {
  title: 'Components/Empty/EmptyItem',
  component: EmptyItem,
  tags: ['autodocs'], //  https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  //
  args, // https://storybook.js.org/docs/vue/writing-stories/args
  argTypes, // https://storybook.js.org/docs/vue/api/argtypes
  parameters, // https://storybook.js.org/docs/vue/writing-stories/parameters
  // https://storybook.js.org/docs/vue/api/csf#custom-render-functions
  // render: (args) => ({
  //   components: {
  //     EmptyItem,
  //   },
  //   setup() {
  //     return {
  //       args,
  //     }
  //   },
  //   template: html`<EmptyItem v-bind="args" />`,
  // }),
}

/*
 * Stories 🐸
 * https://storybook.js.org/docs/vue/writing-stories/introduction#defining-stories
 */

/**
 * Exemplo de descrição do Story
 */
export const Default = {}

export const OtoTexto = {
  args: {
    text: "oto texto"
  }
}
