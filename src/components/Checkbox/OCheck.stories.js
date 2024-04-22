import { ref } from 'vue'
import OCheck from './OCheck.vue'

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
        summary: 'q-checkbox slots',
      },
    },
    control: { type: null },
  },
}

export default {
  title: 'Components/Checkbox/OCheck',
  component: OCheck,
  tags: ['autodocs'],
  args: {
    size: 'md',
    label: 'Checkbox'
  },
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          '<strong> <a target="_blank" href="https://quasar.dev/vue-components/checkbox">QCheckbox</a></strong>',
      },
    },
  },
  render: (args) => ({
    components: {
      OCheck,
    },
    setup() {

      const model = ref(false)
      return {
        args,
        model
      }
    },
    template: '<OCheck v-bind="args" v-model="model"  />',
  }),
}

// Variantes
export const Default = {}

