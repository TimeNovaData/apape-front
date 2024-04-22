import { ref } from 'vue'
import OChip from './OChip.vue'
import html from 'src/utils/html.js' // template tag for use vscode extension lit-html,

const args = {
  size: 'sm',
  label: 'Chip sm',
  square: true,

}

/**
 *  Arg Types - permite definir e documentar os tipos de args (props)
 */
const argTypes = {
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
    table: {
      type: {
        summary: 'sm | md | lg',
      },
    },
  },

  slot: {
    table: {
      type: {
        summary: 'QChip slots',
      },
    },
    control: { type: null },
  },

}


const parameters = {
  docs: {

    description: {
      component:
        '<strong> <a target="_blank" href="https://quasar.dev/vue-components/chip">QChip</a></strong>',
    },

  }
}

export default {
  title: 'Components/Chip/OChip',
  component: OChip,
  tags: ['autodocs'],
  args,
  argTypes,
  parameters,
  render: (args) => ({
    components: {
      OChip,
    },
    setup() {

      return {
        args,

      }
    },
    template: html`<OChip v-bind="args"  />`,
  }),
}

/*
 * Stories 🐸
 * https://storybook.js.org/docs/vue/writing-stories/introduction#defining-stories
 */

/**
 * Chip padrão
 */
export const Default = {}

export const IconLeft = {
  args: {
    icon: 'done',
    label: 'Chip icon',
  },
}

export const IconRight = {
  args: {
    'icon-right': 'arrow_outward',
    label: 'Chip icon right',
  },
}
export const Clicavel = {
  args: {
    size: 'md',
    label: 'Chip Clicável',
    square: false,

  },
  render: (args) => ({
    components: {
      OChip,
    },
    setup() {
      const model = ref(false)

      return {
        args,
        model
      }
    },
    template: html`
      <OChip
        v-bind="args"
        v-model:selected="model" />
    `,
  }),
}
