import BaseModal from 'src/components/Modal/BaseModal.vue'
import useModal from 'src/composables/useModal'
// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
import html from 'src/utils/html'
import OButton from 'src/components/Button/OButton.vue'
import SyntaxHighlight from 'src/components/DesignSystem/SyntaxHighlight.vue'

/**
```typescript
import { test } de "test"
```
 */

const argTypes = {
  state: {
    name: 'state',
    type: { required: true },
    description: 'o estado do modal',
    table: { type: { summary: 'object' } },
    control: { type: null },
  },
  open: {
    description: 'Callback para abrir o modal',
  },
}
const componentDescription =
  'Modal base , usa o  <strong> <a target="_blank" href="https://quasar.dev/vue-components/dialog#qdialog-api">QDialog</a></strong>  e o composable <b>UseModal.js</b>'

const code = html` <script setup>
    import useModal from 'src/composables/useModal'
    const { state, close, open, setState } = useModal()
    setState({
      id: 11,
      name: 'modal_1',
      header: { title: 'Modal Titulo', subtitle: 'Modal Subtitle' },
    })
  </script>

  <template>
    <BaseModal :state="state" :close="close" :open="open"></BaseModal>
  </template>`

// <==================================>
//  Default
// <==================================>
export default {
  // title: 'Components/Modal/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes,
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
      source: { code, language: 'html' },
    },
  },
}

const Template = {
  render: (args) => ({
    components: { BaseModal, OButton, SyntaxHighlight },
    setup() {
      const { state, close, open, setState } = useModal()

      setState({
        id: 11,
        name: 'modal_1',
        header: {
          title: 'Modal Titulo',
          subtitle: 'Modal Subtitle',
        },
      })

      const comment = '// state - useModal.js    \n\n'

      return {
        args,
        state,
        close,
        open,
        comment,
      }
    },
    template: html`
            <div class="w-full flex  flex-col">
        <OButton primary size="lg" class="!min-w-[120px]" @click="open({id:11})"
          >open</OButton
        >
        <div class="flex flex-col gap-2 mt-12">
          <SyntaxHighlight
            :code="''.concat(comment, JSON.stringify(state, false, 2))"
            :collapse="false" />
        </div>
        <BaseModal v-bind="args" :state="state" :close="close" :open="open">
          <template #content>
            <SyntaxHighlight
              :code="JSON.stringify(state, false, 2)"
              :collapse="false" />
          </template>
        </BaseModal>
      </div>
    `,
  }),
}

export const Default = { ...Template }

// Default.args = {
//   state: {
//     id: 11,
//     name: 'modal_1',
//     header: {
//       title: 'Modal Titulo',
//       subtitle: 'Modal Subtitle',
//     },
//   },
// }
