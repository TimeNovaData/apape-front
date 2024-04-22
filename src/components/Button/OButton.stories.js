import OButton from './OButton.vue'

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
        summary: 'QBtn slots',
      },
    },
    control: { type: null },
  },
}

export default {
  title: 'Components/Button/OButton',
  component: OButton,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          '<strong> <a target="_blank" href="https://quasar.dev/vue-components/button">QBtn</a></strong>',
      },
    },
  },
  render: (args) => ({
    components: {
      OButton,
    },
    setup() {
      return {
        args,
      }
    },
    template: '<OButton v-bind="args"  />',
  }),
}

// Variantes
export const Primary = {
  args: {
    primary: true,
    label: 'Button Primary',
  },
}

export const Secondary = {
  args: {
    secondary: true,
    label: 'Button Secondary',
  },
}

export const Tertiary = {
  args: {
    tertiary: true,
    label: 'Button Tertiary',
  },
}

export const ComIcone = {
  args: {
    primary: true,
    label: 'Button Icone',
    'icon': "refresh",

  },
}
