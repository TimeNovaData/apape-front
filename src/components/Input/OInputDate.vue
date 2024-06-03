<template>
 
    <OInput
      v-model="dataInicial"
      class=" dark:!bg-transparent w-full cursor-pointer label-transparent"
      :label="label"
      v-bind="attrs">
      <q-popup-proxy
        ref="datePopUp"
        transition-show="scale"
        transition-hide="scale">
        <q-date v-model="model.data" mask="DD/MM/YYYY" today-btn>
          <OButton
            size="md"
            tertiary
            class="mt-8 ml-auto -mb-8 !min-w-full"
            @click="datePopUp.hide()"
            >Confirmar</OButton>
        </q-date>
      </q-popup-proxy>
      <template #append>
        <q-icon :name="icon" class="cursor-pointer"></q-icon>
      </template>
    </OInput>

</template>


<script setup>
import { computed, onMounted, onUpdated, ref, useAttrs, watch } from 'vue'
import {  Screen } from 'quasar'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'
import OInput from './OInput.vue'

const attrs = useAttrs()
const datePopUp = ref(Element)

const emit = defineEmits(['update:date'])
defineOptions({ inheritAttrs: false })

const props = defineProps({
  data:{type:String, default: ''},
  label:{type:String, default: ''},
  icon:{type:String, default: 'svguse:/icons.svg#icon_date'}
})

const dataInicial = computed(() => {
  return !props.data 
    ? null
    : props.data.includes('/')
    ? props.data
    : GLOBAL.FData(props.data)
})

const model = ref({
  data: dataInicial.value
})

watch(() => model.value.data, (val) => {
  emit('update:date', GLOBAL.FDateBRtoEU(val))
})
</script>

<style lang="scss" scoped></style>
