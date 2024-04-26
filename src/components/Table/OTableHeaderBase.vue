<template>
  <div class="flex items-center justify-between w-full md:gap-16">
    <OInput
      v-model="model.filter"
      size="md"
      debounce="300"
      placeholder="Pesquise por nome, tipo..."
      class="no-label mb-4 w-[22rem]"
      clearable
      @update:model-value="$emit('update', model)"
      @clear="$emit('update', model)" />

    <div class="flex gap-8 items-center">
      <slot name="filtro"> </slot>
      <span
        class="text-paragraph-2 md:!text-paragraph-3 text-neutral-70 dark:text-white/70">
        Mostrar
      </span>
      <OSelect
        v-model="model.rowsPerPage"
        class="w-72 h-40"
        size="md"
        :options="[10, 20, 30, 50]"
        @update:model-value="$emit('update', model)" />
      <span
        class="text-paragraph-2 md:!text-paragraph-3 text-neutral-70 dark:text-white/70">
        Linhas por página
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import OInput from 'components/Input/OInput.vue'
import OSelect from 'components/Select/OSelect.vue'

const emit = defineEmits(['update'])

const props = defineProps({
  filter: { type: String, default: '' },
  rowsPerPage: { type: Number, default: 10 },
})

const model = ref({
  filter: props.filter,
  rowsPerPage: props.rowsPerPage,
})

// watch(
//   () => props.filter,
//   (newValue) => {
//     modelFilter.value = newValue
//   }
// )
</script>

<style lang="sass"></style>
