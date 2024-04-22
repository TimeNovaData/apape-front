import html from 'src/utils/html'
import BaseHeader from './BaseHeader.vue'

const argTypes = {
  // size: {
  //   control: { type: 'select' },
  //   options: ['sm', 'md', 'lg'],
  //   table: {
  //     type: {
  //       summary: 'sm | md | lg',
  //     },
  //   },
  // },
  // slot: {
  //   table: {
  //     type: {
  //       summary: 'QBtn slots',
  //     },
  //   },
  //   control: { type: null },
  // },
}

export default {
  title: 'Components/Header/BaseHeader',
  component: BaseHeader,
  tags: ['autodocs'],
  args: {
    breadcrumbs: [
      { label: 'Home', name: 'home' },
      { label: 'Contato', name: 'contato' },
    ],
    nome: 'Altamiro',
  },
  argTypes,
  // parameters: {
  //   docs: {
  //     description: {
  //       component:
  //         'Botao base , usa o  <strong> <a href="https://quasar.dev/vue-components/button">QBtn</a></strong> do quasar',
  //     },
  //   },
  // },
  render: (args) => ({
    components: {
      BaseHeader,
    },
    setup() {
      return {
        args,
      }
    },
    template: html`
      <q-layout class="border border-neutral-100/30 overflow-hidden rounded-md">
        <BaseHeader v-bind="args" />
      </q-layout>
    `,
  }),
}

// Variantes
export const Default = {}
