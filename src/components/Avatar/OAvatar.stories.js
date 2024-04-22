import OAvatar from 'src/components/Avatar/OAvatar.vue'

import html from 'src/utils/html'

const argTypes = {
  slot: {
    control: { type: null },
  },
}
const fakeData = {
  foto: 'https://cdn.quasar.dev/img/avatar1.jpg',
}
export default {
  title: 'Components/Avatar/OAvatar',
  component: OAvatar,
  tags: ['autodocs'],
  args: {
    foto: 'https://cdn.quasar.dev/img/avatar1.jpg',
    nome: 'Allan Ferreira',
    subtitle: 'Dev',
  },

  argTypes,

  render: (args) => ({
    components: {
      OAvatar,
    },
    setup() {
      return {
        args,
      }
    },
    template: html`
      <div class="relative h-[30px]">
        <OAvatar v-bind="args" />
      </div>
    `,
  }),
}

export const Default = {}
