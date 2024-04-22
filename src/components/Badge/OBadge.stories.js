import { ref } from 'vue'
import OBadge from './OBadge.vue'
import html from 'src/utils/html.js' // template tag for use vscode extension lit-html,

const args = {
  size: 'sm',
  label: 'Badge sm',
  square: false,
  color: '210, 175, 0'

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

  slots: {
    table: {
      type: {
        summary: 'QChip slots',
      },
    },
    control: { type: null },
  },
  color: {
    table: { type: { summary: 'color' } },
    control: {
      type: 'text'
    }
  },

}


const parameters = {
  docs: {

    description: {
      component:
        '<strong> <a target="_blank" href="https://quasar.dev/vue-components/badge">QBadge</a></strong>',
    },

  }
}

export default {
  title: 'Components/Badge/OBadge',
  component: OBadge,
  tags: ['autodocs'],
  args,
  argTypes,
  parameters,
  render: (args) => ({
    components: {
      OBadge,
    },
    setup() {

      return {
        args,

      }
    },
    template: html`<OBadge v-bind="args"  >
   
      
  </OBadge>`,
  }),
}

/*
 * Stories 🐸
 * https://storybook.js.org/docs/vue/writing-stories/introduction#defining-stories
 */

/**
 * Badge padrão
 */
export const Default = {
}

export const Icon = {

  args: {
    size: 'md',
    label: '',
    square: false,

  },
  render: (args) => ({
    components: {
      OBadge,
    },
    setup() {


      return {
        args,

      }
    },
    template: html`
      <OBadge
        v-bind="args">
        <template #content>
        <q-avatar icon="star" size="1.35rem" class="mb-2s" /> With Icon
      </template>
        </>
    `,
  }),
}


export const IconIMG = {

  args: {
    size: 'md',
    label: '',
    square: false,

  },
  render: (args) => ({
    components: {
      OBadge,
    },
    setup() {


      return {
        args,

      }
    },
    template: html`
      <OBadge
        v-bind="args">
        <template #content>
        <q-avatar
          size="1.35rem"
          class="m-2"
          icon="img:https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
        />
      Badge Img
      </template>
        </>
    `,
  }),
}
