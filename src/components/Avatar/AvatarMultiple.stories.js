import AvatarMultiple from 'src/components/Avatar/AvatarMultiple.vue'
import html from 'src/utils/html'

const argTypes = {
  side: {
    control: { type: 'select' },
    options: ['left', 'right'],
    table: {
      type: {
        summary: 'left | right ',
      },
    },
  },
  slot: {
    control: { type: null },
  },
}
const fakeData = [
  {
    foto: 'https://cdn.quasar.dev/img/avatar1.jpg',
    nome: 'Teste',
  },
  {
    foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
    nome: 'Teste',
  },
  {
    foto: 'https://cdn.quasar.dev/img/avatar3.jpg',
    nome: 'Teste',
  },
  {
    foto: 'https://cdn.quasar.dev/img/avatar4.jpg',
    nome: 'Teste',
  },
  {
    foto: 'https://cdn.quasar.dev/img/avatar5.jpg',
    nome: 'Teste',
  },
]

export default {
  title: 'Components/Avatar/AvatarMultiple',
  component: AvatarMultiple,
  tags: ['autodocs'],
  args: {
    list: fakeData,
    side: 'left',
  },
  argTypes,

  render: (args) => ({
    components: {
      AvatarMultiple,
    },
    setup() {
      return {
        args,
      }
    },
    template: html`
      <div class="relative h-[30px]">
        <AvatarMultiple v-bind="args" />
      </div>
    `,
  }),
}

// // Variantes
export const Default = {}

