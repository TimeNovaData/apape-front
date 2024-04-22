import { ref } from 'vue'
import OInput from './OInput.vue'
import OInputPassword from './OInputPassword.vue'
import html from 'src/utils/html'
import SyntaxHighlight from 'src/components/DesignSystem/SyntaxHighlight.vue'

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
  explicacao: {
    table: { disable: true },
  },
  slot: {
    table: {
      type: {
        summary: 'q-input slots',
      },
    },
    control: { type: null },
  },
}

//  Default
// <==================================>
export default {
  title: 'Components/Input/OInput',
  component: OInput,

  tags: ['autodocs'],
  args: {
    size: 'md',
    label: 'Usuario',
  },
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          '<strong> <a target="_blank" href="https://quasar.dev/vue-components/input">QInput</a></strong>',
      },
    },
    explicacao: '',
  },

  render: (args, instance) => ({
    components: {
      OInput,
      SyntaxHighlight,
    },
    setup() {
      const model = ref('')
      const code = instance.parameters.code
      return {
        args,
        model,
        instance,
        code,
      }
    },
    template: html`
      <OInput v-bind="args" v-model="model" />
      <p class="my-8">{{instance.parameters.explicacao}}</p>
      <SyntaxHighlight v-if="code" :code="code" :collapse="false" />
    `,
  }),
}

// Variantes
export const Default = {}

export const Icone = {
  args: {
    size: 'md',
    label: 'Usuario',
    model: 'Valor',
  },
}
const code = `rules: [
  (val, rules) => rules.email(val) || 'Preencha um email valido',
  (val) => val.length >= 25 || 'Por favor digite mais de 25 caracteres',
]`

export const Validação = {
  parameters: {
    explicacao: 'dupla validaçao \n email valido  + 25 caracteres',
    code,
  },
  args: {
    size: 'md',
    label: 'Email',
    model: '',

    rules: [
      (val, rules) => rules.email(val) || 'Preencha um email valido',
      (val) => val.length >= 25 || 'Por favor digite mais de 25 caracteres',
    ],
  },
}

export const Senha = {
  render: (args, instance) => ({
    components: {
      OInputPassword,
    },
    setup() {
      const senha = ref('')

      return {
        args,
        senha,
      }
    },
    template: html`
      <OInputPassword
        v-bind="args"
        :model-value="senha"
        @update:model-value="(v) => (senha = v)" />
    `,
  }),
}
