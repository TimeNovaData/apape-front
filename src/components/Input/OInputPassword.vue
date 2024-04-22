<template>
  <OInput
    :model-value="modelValue"
    :rules="[(val) => !!val || 'Campo Obrigatorio']"
    :size="Screen.lt.md ? 'md' : 'lg'"
    label="Senha"
    :type="type"
    class="mt-24 md:mt-16"
    @update:model-value="(v) => $emit('update:model-value', v)">
    <template #append>
      <OButton
        class="!w-32 !h-32 !p-0 !min-h-0 md:!w-[1.375rem] md:!h-[1.375rem]"
        size="sm"
        tertiary
        icon="visibility"
        @click="type === 'password' ? (type = 'text') : (type = 'password')">
    </OButton>
    </template>
  </OInput>
</template>

<script setup>
import { Screen } from 'quasar'
import { ref } from 'vue'
import OButton from 'components/Button/OButton.vue'
import OInput from './OInput.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:model-value'])
const type = ref('password')
</script>

<style lang="scss" scoped></style>
