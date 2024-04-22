//para mudar as docss

export default {
  parameters: {
    componentSubtitle: 'Subtitle',
    docs: {
      description: {
        component:
          'Botao base , usa o  <strong> <a href="https://quasar.dev/vue-components/button">QBtn</a></strong> do quasar',
        story: 'Another description on the story, overriding the comments',
      },
      source: { code: ``, language: 'js' },
    },
  },
}

const table = {
  argTypes: {
    table: {
      type: {
        summary: 'something short',
        detail: 'something really really long',
      },
      defaultValue: { summary: 'Hello' },
    },
  },
}

const argTypes = {
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    defaultValue: 'Hello',
    description: 'demo description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Hello' },
    },
    control: {
      type: 'text',
    },
  },
}
