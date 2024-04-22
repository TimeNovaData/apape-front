import { TextTokens } from 'src/utils/design/Text.js'
import BaseTypography from 'src/components/DesignSystem/BaseTypography.vue'
import html from 'src/utils/html'

export default {
  title: 'Tokens/Typography',
  component: BaseTypography,
  tags: ['autodocs'],
  render: (args) => ({
    components: { BaseTypography },
    setup() {
      return { ...args, TextTokens }
    },
    template: html` <BaseTypography v-bind="args" :textos="TextTokens" />`,
  }),
}

export const Default = {}
