<template>
  <OSelect
    ref="componentRef"
    v-model="model"
    class="select-avatar"
    :class="{ 'have-model': model }"
    option-value="id"
    option-label="nome"
    use-input
    :popup-content-class="popupClass"
    v-bind="attrs"
    @update:model-value="(value) => $emit('updateValue', value)">
    <template #option="{ itemProps, opt }">
      <q-item v-bind="itemProps" :key="opt.id" class="px-4">
        <OAvatar
          :nome="opt[nomeKey]"
          :foto="opt[fotoKey]"
          class-avatar="!w-[1.25em] !h-[1.25em]" />
      </q-item>
    </template>

    <template #selected-item="{ itemProps, opt }">
      <q-item v-bind="itemProps" class="translate-y-2 p-0 min-h-0">
        <OAvatar
          v-show="opt[nomeKey]"
          class-avatar="!w-[0.74em] !h-[0.74em]"
          :nome="opt[nomeKey]"
          :foto="opt[fotoKey]"
          :class-text="classText" />
      </q-item>
    </template>
  </OSelect>
</template>

<script setup>
import { useAttrs, ref, watch } from 'vue'
import OAvatar from 'components/Avatar/OAvatar.vue'
import OSelect from './OSelect.vue'

const emit = defineEmits(['updateValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: '',
  },
  classText: {
    type: String,
    default: '',
  },
  popupClass: {
    type: String,
    default: 'select-menu',
  },
  nomeKey: {
    type: String,
    default: 'nome',
  },
  fotoKey: {
    type: String,
    default: 'foto',
  },
})

// Se resetar de fora reflete dentro do component

watch(
  () => props.modelValue,
  (v) => (model.value = v),
  { deep: true }
)

const model = ref(props.modelValue)

const attrs = useAttrs()
const componentRef = ref(null)

defineExpose({ componentRef })
</script>

<style lang="sass" scoped>
// .select-avatar
//   :deep(.q-placeholder)
//     opacity: 0 !important
//   &.have-model
//     :deep(.q-placeholder)
//       opacity: 1 !important
</style>
