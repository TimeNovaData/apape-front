<template>
  <OInput
    v-bind="attrs"
    ref="componentRef"
    v-model="model"
    class="text-center select-none"
    @update:model-value="(value) => $emit('updateValue', value)">
    <template #prepend>
      <q-icon
        size="1.5rem"
        name="svguse:/icons.svg#icon_minus_circle"
        class="cursor-pointer hover:opacity-70 transition-opacity select-none"
        :class="{ 'cursor-not-allowed !opacity-30': model === 1 }"
        @click="model > 1 ? model-- : (model = 1)"></q-icon>
    </template>

    <template #append>
      <q-icon
        size="1.5rem"
        name="svguse:/icons.svg#icon_plus_circle"
        class="cursor-pointer hover:opacity-70 transition-opacity select-none"
        @click="model++"></q-icon>
    </template>
  </OInput>
</template>

<script setup>
import { useAttrs, ref, watch } from 'vue'
import OInput from './OInput.vue'

const attrs = useAttrs()
const componentRef = ref(null)

const emit = defineEmits(['updateValue'])

const props = defineProps({
  modelValue: { type: [Number, String], default: '' },
})

const model = ref(props.modelValue)

watch(model, () => emit('updateValue', model.value))

defineExpose({ componentRef })
</script>
