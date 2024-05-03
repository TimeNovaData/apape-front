<template>
  <div>
    <OInput
      :model-value="dateComplete"
      :size="Screen.lt.md ? 'md' : 'lg'"
      class="bg-white dark:!bg-transparent w-full cursor-pointer label-transparent"
      :label="label"
      v-bind="inputProps"
    >
      <q-popup-proxy
        ref="popUpDate"
        cover
        transition-show="scale"
        transition-hide="scale"
        class="!min-w-0"
      >
        <q-date v-model="model.data" today-btn class="w-[350px]" v-bind="dateProps">
          <div class="flex flex-col w-full">
            <OInput
              v-if="hasTime"
              v-model="model.hora"
              size="md"
              type="time"
              class="label-transparent"
            />
            <OButton
              size="md"
              tertiary
              class="mt-8 ml-auto -mb-8 !min-w-full"
              @click="popUpDate.hide()"
              >Confirmar</OButton
            >
          </div>
        </q-date>
      </q-popup-proxy>

      <template #append>
        <q-icon :name="icon" class="cursor-pointer" />
      </template>
    </OInput>
    
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { date, Screen } from 'quasar'
import { useRefHistory } from '@vueuse/core'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'
import OInput from './OInput.vue'

const { FData } = GLOBAL

const props = defineProps({
  data: { type: String, default: '' },
  label: { type: String, default: '' },
  icon: {
    type: String,
    default: 'svguse:/icons.svg#icon_date',
  },
  hasTime: { type: Boolean, default: true },
  inputProps: {
    type: Object,
    default: () => ({}),
  },
  dateProps: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:date'])

const popUpDate = ref(Element)

const dateComplete = computed(() => {
  if (model.value.data && model.value.hora && props.hasTime) {
    return model.value.data
      ? `${FData(model.value.data)} - ${model.value.hora}`
      : null
  }
  return model.value.data ? `${FData(model.value.data)}` : null
})

const initialDate = computed(() => {
  const prop = props.data
  const today = new Date()
  const myDate = date.formatDate(prop, 'YYYY/MM/DD')
  const result = prop ? myDate : null
  return result
})

const initialTime = computed(() => {
  const prop = props.data
  return prop ? date.formatDate(prop, 'HH[:]mm') : '12:00'
})

// watch(
//   () => initialDate.value,
//   (v) => {
//     model.value.hora = initialDate.value
//     model.value.data = initialTime.value
//   }
// )

const model = ref({
  data: initialDate.value,
  hora: initialTime.value,
})

const history = useRefHistory(model, {
  capacity: 1,
  deep: true,
  flush: 'sync',
})

watch(
  () => [model.value.data, model.value.hora],
  ([data, hora]) => {
    const dateTime = new Date(`${data} ${hora}`)
    const dataFinal = date?.formatDate(dateTime)
    emit('update:date', dataFinal)
    console.log(dataFinal)
  }
)

defineExpose({ history })
</script>

<style lang="scss" scoped></style>
