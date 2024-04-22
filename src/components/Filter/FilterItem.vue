<template>
  <OButton v-bind="attrs" icon="svguse:/icons.svg#icon_filtros">
    {{ title }}

    <q-menu
      ref="menu"
      class="p-12"
      transition-show="jump-down"
      transition-hide="jump-up">
      <q-form ref="form">
        <q-list class="w-[23.5rem] md:w-[20rem]">
          <q-item
            class="px-0 text-headline-3 text-neutral-60 dark:text-white/60 justify-between flex items-center w-full"
            dense>
            {{ title }}
            <q-icon size="20px" name="svguse:/icons.svg#icon_filtros"></q-icon>
          </q-item>

          <slot name="content">
            <h2 class="text-title-5 h-64 grid place-items-center">
              Campos do filtro
            </h2>
          </slot>

          <q-item class="px-0 flex gap-4 justify-end w-full">
            <OButton
              tertiary
              size="md"
              icon="close"
              @click="$emit('removeFilters')">
              Remover Filtros
            </OButton>
            <OButton
              primary
              size="md"
              icon="check"
              :loading="isLoading"
              @click="$emit('applyFilters')">
              Aplicar
            </OButton>
          </q-item>
        </q-list>
      </q-form>
    </q-menu>

    <q-badge
      v-if="showBtnBadge && applyedFilters.length"
      floating
      rounded
      class="bg-primary-pure p-2 text-10 w-16 h-16 grid place-content-center text-[#000]">
      {{ applyedFilters.length }}
    </q-badge>
  </OButton>

  <Teleport v-if="isMounted" to="#badges">
    <div v-for="item in applyedFilters" :key="item">
      <OBadge
        v-show="item.length"
        size="md"
        :badge="false"
        class="!px-6 !bg-neutral-30 dark:!bg-white/10 text-neutral-70 border border-neutral-100/5 dark:!text-white/70">
        <template #content> {{ item }} </template>
      </OBadge>
    </div>
  </Teleport>
</template>

<script setup>
import { useAttrs, ref, Teleport, onMounted, onUnmounted } from 'vue'

import OBadge from 'components/Badge/OBadge.vue'
import OButton from 'components/Button/OButton.vue'

//
const emit = defineEmits(['removeFilters', 'applyFilters'])
const props = defineProps({
  title: {
    type: String,
    default: 'Filtros',
  },
  showBtnBadge: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
    default: true,
  },
  applyedFilters: {
    type: Array,
    default: () => [],
  },
})

const attrs = useAttrs()

const menu = ref(null)
const form = ref(null)
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
onUnmounted(() => {
  isMounted.value = true
})
</script>

<style lang="scss" scoped></style>
