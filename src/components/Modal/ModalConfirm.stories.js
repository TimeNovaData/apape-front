import { ref } from 'vue'
import ModalConfirm from './ModalConfirm.vue'
import html from 'src/utils/html.js' // template tag for use vscode extension lit-html,

/**
 * Args - define as (props)
 */
const args = {
  // size: 'md',
  title: "titulo do modal"
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

/**
 * Exemplo de descrição
 * <br/> <a target="_blank" href="https://quasar.dev/vue-components/button"> QBtn </a>
 */
export default {
  title: 'Components/Modal/ModalConfirm',
  component: ModalConfirm,
  tags: ['autodocs'], //  https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  //
  args, // https://storybook.js.org/docs/vue/writing-stories/args
  argTypes, // https://storybook.js.org/docs/vue/api/argtypes
  parameters, // https://storybook.js.org/docs/vue/writing-stories/parameters
  // https://storybook.js.org/docs/vue/api/csf#custom-render-functions
  render: (args) => ({
    components: {
      ModalConfirm,
    },
    setup() {
      const refModal = ref(null)


      return {
        args,
        refModal
      }
    },
    template: html`
    <button @click="refModal.dialogRef.show()">Open</button>
    <ModalConfirm ref="refModal" v-bind="args" />
    `,
  }),
}

/*
 * Stories 🐸
 * https://storybook.js.org/docs/vue/writing-stories/introduction#defining-stories
 */

/**
 * Exemplo de descrição do Story
 */
export const Default = {}
