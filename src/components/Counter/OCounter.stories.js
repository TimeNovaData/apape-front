import { ref } from 'vue'
import OCounter from './OCounter.vue'
import html from 'src/utils/html.js' // template tag for use vscode extension lit-html,
import OButton from 'src/components/Button/OButton.vue'
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
  /*  slot: {
     table: { type: { summary: 'slot' } },
     control: { type: null },
   }, */

  color: {
    table: { type: { summary: 'color' } },
    control: {
      type: 'text'
    }
  },

  absolute: {
    control: { type: 'select' },
    options: ['left', 'right'],
    table: {
      type: {
        summary: 'left | right',
      },
    },
  },
}

/**
 *  Parameters
 */
const parameters = { docs: {} }

export default {
  title: 'Components/Counter/OCounter',
  component: OCounter,
  tags: ['autodocs'],
  args,
  argTypes,
  parameters,

  render: (args) => ({
    components: {
      OCounter,
    },
    setup() {
      const count = ref(0)
      return {
        args,
        count
      }
    },
    template: html`
    <div class="relative w-[80px] h-[60px]">
    <OCounter v-bind="args" v-model="count" @click="count++">{{count}}</>
    </div>
    `,
  }),
}

/*
 * Stories 🐸
 * https://storybook.js.org/docs/vue/writing-stories/introduction#defining-stories
 */

/**
 * Counter Padrão
 */
export const Default = {
  args: {
    bg: '17, 210, 118',
    color: '0,0,0'
  }
}

export const Absolute = {
  render: (args) => ({
    components: {
      OCounter,
      OButton
    },
    setup() {
      const count = ref(0)
      return {
        args,
        count
      }
    },
    template: html`<OButton primary size='lg' @click="count++" >Add

      <OCounter v-model="count" @click="count++" absolute="right"  v-bind="args">{{count}}
    </OCounter>
    </OButton>`,
  }),
}
