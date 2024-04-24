<template>
  <q-header class="base-header">
    <div class="flex items-center justify-between w-full">
      <!-- breadcrumbs -->

      <q-icon
        class="OSidebar-open mr-16 w-24 h-24 hidden md:!block cursor-pointer"
        name="svguse:/icons.svg#_kanban"
        @click="$emit('open:menu')"></q-icon>

      <OBreadcrumb :breadcrumbs="breadcrumbs" />
      <q-space></q-space>
      <div
        class="flex items-center gap-8 flex-nowrap"
        style="--neutral-100: var(--white)">
        <slot name="right"> </slot>

        <div
          v-ripple
          class="cursor-pointer relative overflow-hidden !w-32 !h-32 rounded-full">
          <!-- <q-icon name="person"> </q-icon> -->
          <OAvatar class="!w-32 !h-32" :foto="foto" />
          <BaseHeaderMenu :nome="nome"></BaseHeaderMenu>
        </div>
      </div>

      <!-- Avatar -->
    </div>
  </q-header>
</template>

<script setup>
import BaseHeaderMenu from './BaseHeaderMenu.vue'
import OAvatar from 'components/Avatar/OAvatar.vue'
import OBreadcrumb from 'components/Breadcrumb/OBreadcrumb.vue'
import OButton from 'components/Button/OButton.vue'
const emit = defineEmits([
  /**
   * Click para abrir menu mobile
   */
  'open:menu',
])

defineProps({
  /**
   * passar direto pelas rotas  `$route.meta.breadcrumbs`
   */
  breadcrumbs: { type: Array, default: () => [] },
  nome: { type: String, default: '' },
  foto: { type: String, default: '' },
})
</script>

<style lang="sass">
@import "src/css/responsivo.sass"

:root
  --header-bg: rgb(var(--white))
  --header-color: rgb(var(--neutral-60))
  --breadcrumb-color: rgb(var(--neutral-60))
  --header-base-height: 3rem
  --header-border-b: 1px solid rgba(var(--neutral-100),0.1)

  @include d(md)
    --header-base-height: 3rem


.base-header
  height: var(--header-base-height)
  display: flex
  align-items: center
  padding: .5625rem 1rem
  background: var(--header-bg)
  width: calc(100% - var(--Nv0-sidebar-width))
  margin-left: auto
  color: var(--header-color)
  border-bottom: var(--header-border-b)



  .q-breadcrumbs
    .q-breadcrumbs__separator
      color: var(--breadcrumb-color)
    .q-breadcrumbs__el
      color: var(--breadcrumb-color)

    @include d(md)
      font-size: .75rem

.body--dark
  .base-header
    --header-bg: rgb(var(--d-neutral-10))
    --header-border-b: 1px solid rgba(var(--white),0.05)
    --breadcrumb-color: rgba(var(--white), 0.9)
</style>
