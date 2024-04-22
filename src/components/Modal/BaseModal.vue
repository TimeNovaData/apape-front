<template>
  <q-dialog
    class="base-modal"
    transition-hide="slide-down"
    transition-show="fade"
    transition-duration="200"
    :model-value="state.open"
    @update:model-value="close">
    <q-card class="q-dialog-card">
      <!-- @slot Onde entra o Header, com default -->
      <slot
        name="header"
        :subtitle="state.header.subtitle"
        :title="state.header.title"
        :close="close">
        <header
          class="h-80 bg-primary-pure flex items-center pl-24 pr-8 w-full shrink-0">
          <div class="mr-24">
            <span class="text-caps-3 text-neutral-100/50">
              {{ state.header.subtitle }}
            </span>
            <h4 class="text-title-4 text-neutral-100">
              {{ state.header.title }}
            </h4>
          </div>

          <q-space></q-space>

          <OButton
            tertiary
            class="!p-0 place-items-center grid dark:text-neutral-100 cursor-pointer"
            icon-size="48px"
            @click.stop.prevent="close">
            <q-icon name="svguse:/icons.svg#icon_close"></q-icon>
          </OButton>
        </header>
      </slot>

      <!-- CONTENT -->
      <div class="q-dialog-content">
        <!-- @slot Onde entra o conteudo do modal -->
        <slot name="content" :data="state.data">
          <h2 class="text-title-2 flex-1 grid place-items-center">
            Conteúdo do modal
          </h2>
        </slot>
      </div>
      <!--  -->
    </q-card>
  </q-dialog>
</template>

<script setup>
import OButton from 'components/Button/OButton.vue'

//
const props = defineProps({
  state: {
    type: Object,
    required: true,
  },
  open: {
    type: Function,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
})
</script>

<style lang="sass" scoped>
.base-modal
  border: none

  .q-dialog-card
    max-width: 76rem
    min-height: 25rem
    height: auto
    width: 100%
    overflow: hidden
    display: flex
    flex-direction: column

    .q-dialog-content
      flex: 1
      display: flex
      flex-direction: column
      max-height: calc(98vh - 5rem)
      overflow-y: auto
      height: 100%
      padding: 1.5rem
</style>
