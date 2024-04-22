import { ref } from 'vue'
import OSelect from './OSelect.vue'
import OCheck from 'src/components/Checkbox/OCheck.vue'
import OChip from 'src/components/Chip/OChip.vue'
import OAvatar from 'src/components/Avatar/OAvatar.vue'
import html from 'src/utils/html.js' // template tag for use vscode extension lit-html,

const options = [
  {
    label: 'Google',
    value: 1,
  },
  {
    label: 'Facebook',
    value: 2,
  },
  {
    label: 'Twitter',
    value: 3,
  }
]
const args = {
  size: 'md',
  multiple: false,
  label: 'label select',


}

/**
 *  Arg Types - permite definir e documentar os tipos de args (props)
 */
const argTypes = {
  size: {
    control: { type: 'select' },  // https://storybook.js.org/docs/vue/essentials/controls#annotation
    options: ['sm', 'md', 'lg'],
    table: {
      type: {
        summary: 'sm | md | lg',
      },
    },
  },
  options: {
    control: {
      type: 'object'
    },
    table: {
      type: {
        summary: 'array de options do select',
      }
    },
  },
  multiple: {
    control: {
      type: 'boolean'
    },
    table: {
      type: {
        summary: 'False | true',
      }
    },
  },

  label: {
    control: {
      type: 'text'
    },
    table: {
      type: {
        summary: 'string | undefined',
      }
    },
  },
  slot: {
    control: {
      type: ''
    },

  }
}

/**
 *  Parameters
 */
const parameters = {
  docs: {
    source: { withSetupScript: true },
  }
}

/*
 * Component Story Format  https://storybook.js.org/docs/vue/api/csf
 * Default Metadata Storie https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
 */

/**
 * <br/> <a target="_blank" href="https://quasar.dev/vue-components/select"> QSelect </a>
 */
export default {
  title: 'Components/Select/OSelect',
  component: OSelect,
  tags: ['autodocs'], //  https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  //
  args, // https://storybook.js.org/docs/vue/writing-stories/args
  argTypes, // https://storybook.js.org/docs/vue/api/argtypes
  // https://storybook.js.org/docs/vue/writing-stories/parameters
  // https://storybook.js.org/docs/vue/api/csf#custom-render-functions
  render: (args) => ({
    components: {
      OSelect,
    },
    setup() {
      const value = ref([])
      return {
        args,
        value
      }
    },
    template: html`<OSelect v-bind="args" v-model="value"/>`,
  }),
}

/*
 * Stories 🐸
 * https://storybook.js.org/docs/vue/writing-stories/introduction#defining-stories
 */


export const Default = {
  args: {
    options,

  },
  parameters,
}

export const Multiple = {
  args: {
    multiple: true,
    options
  },
  render: (args) => ({
    components: {
      OSelect,
    },
    setup() {
      const value = ref([])
      return {
        args,
        value
      }
    },
    template: html`<OSelect v-bind="args" v-model="value"/>`,
  }),
}

export const SelectEmpty = {
  args: {
    options: []
  }
}
const codeMultipleToggle = html`<OSelect v-bind="args" v-model="value">
  <template #option="{ itemProps, opt, selected, toggleOption }">
    <q-item v-bind="itemProps">
      <q-item-section>
        <q-item-label>{{ opt.label }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-toggle
          :model-value="selected"
          @update:model-value="toggleOption(opt)" />
      </q-item-section>
    </q-item>
  </template>
</OSelect> `

export const SelectMultipleToggle = {
  args: {
    multiple: true,
    options,

  },
  parameters: {
    docs: {
      source: { code: codeMultipleToggle }
    }
  },
  render: (args) => ({
    components: {
      OSelect,
    },
    setup() {
      const value = ref([])
      return {
        args,
        value
      }
    },
    template: codeMultipleToggle,
  }),
}


const codeMultipleCheck = html`<OSelect v-bind="args" v-model="value">
<template #option="{ itemProps, opt, selected, toggleOption }">
  <q-item v-bind="itemProps" class="pl-8 items-center">
    <q-item-section side class="pr-8">
      <o-check
        size="md"
        :model-value="selected"
        @update:model-value="toggleOption(opt)"></o-check>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ opt.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
</OSelect>`

export const SelectMultipleCheck = {
  args: {
    multiple: true,
    options
  },
  parameters: {
    docs: {
      source: { code: codeMultipleCheck }
    }
  },
  render: (args) => ({
    components: {
      OSelect,
      OCheck
    },

    setup() {
      const value = ref([])
      return {
        args,
        value
      }
    },
    template: codeMultipleCheck,
  }),
}

const codeAvatar = html`<OSelect v-bind="args" v-model="value">
   <template #option="{ itemProps, opt }">
            <q-item v-bind="itemProps" class="pl-8">
              <q-item-section side class="pr-8">
                <q-avatar size="28px">
                  <img :src="opt.img" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

          <template #selected-item="scope">
            <o-chip size="sm">
              <q-avatar size="18px">
                <img :src="scope.opt.img" />
              </q-avatar>
              <p>{{ scope.opt.label }}</p>
            </o-chip>
          </template>
</OSelect>`

export const SelectAvatar = {
  args: {
    options: [
      {
        label: 'Google',
        img: 'https://files.tecnoblog.net/wp-content/uploads/2021/09/logotipo_da_empresa_google.jpg',
        value: 1,
      },
      {
        label: 'Facebook',
        img: 'https://www.facebook.com/images/fb_icon_325x325.png',
        value: 2,
      },
      {
        label: 'Twitter',
        img: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
        value: 3,
      }
    ],
    multiple: false
  },
  parameters: {
    docs: {
      source: { code: codeAvatar }
    }
  },
  render: (args) => ({
    components: {
      OSelect,
      OChip,
      OAvatar

    },
    setup() {
      const value = ref()
      return {
        args,
        value
      }
    },
    template: codeAvatar,
  }),
}