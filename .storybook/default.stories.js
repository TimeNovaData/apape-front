import COMPONENT_NAME from './COMPONENT_NAME.vue'
import html from 'src/utils/html.js' // template tag for use vscode extension lit-html,

const args = {
  // size: 'md',
}


const argTypes = {
  // size: {
  //   control: { type: 'select' }, 
  //   options: ['sm', 'md', 'lg'],
  //   table: { type: { summary: 'sm | md | lg' }},
  // },
  // slot: {
  //   table: { type: { summary: 'QBtn slots' } },
  //   control: { type: null },
  // },
}


const parameters = { docs: {} }


export default {
  title: 'Components/PASTA/COMPONENT_NAME',
  component: COMPONENT_NAME,
  tags: ['autodocs'],

  args,
  argTypes,
  parameters,
  // render: (args) => ({
  //   components: { COMPONENT_NAME },
  //   setup() {
  //     return {
  //       args,
  //     }
  //   },
  //   template: html`<COMPONENT_NAME v-bind="args" />`,
  // }),
}

/*
 * Stories 🐸
 */

export const Default = {}
