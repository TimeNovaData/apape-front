<template>
  <div id="chart-resumo" class="min-w-full"></div>
</template>

<script setup>
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  ref,
  watch,
  watchEffect,
} from 'vue'


import ApexCharts from 'apexcharts'

const emits = defineEmits(['click'])

const dados = ref({})

// const tooltipComp = ref({
//   custom: function ({ dataPointIndex }) {
//     return html`
//       <div
//         class="w-[208px] flex flex-col rounded-lg bg-white border border-solid border-neutral-100/10">
//         <span
//           class="flex items justify-between text-headline-4 text-neutral-60 px-14 py-10 rounded-t-lg">
//           Acertos:
//           <span class="text-headline-3 text-alert-success">
//             ${dados.value?.acertos[dataPointIndex]}
//           </span>
//         </span>
//         <span
//           class="flex items justify-between text-headline-4 text-neutral-60 px-14 py-10 ">
//           Erros:
//           <span class="text-headline-3 text-alert-error">
//             ${dados.value?.erros[dataPointIndex]}
//           </span>
//         </span>
//       </div>
//     `
//   },
//   y: {
//     formatter: function (value) {
//       return value
//     },
//   },
// })

const options = ref({
  series: [
    {
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201],
    },
    {
      name: 'Linha 1',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17],
    },
    {
      name: 'Linha 2',
      type: 'line',
      data: [40, 50, 45, 60, 49, 60, 47],
    },
    {
      name: 'Linha 3',
      type: 'line',
      data: [30, 40, 35, 50, 39, 50, 44],
    },
    {
      name: 'Linha 4',
      type: 'line',
      data: [60, 70, 65, 80, 69, 80, 74],
    },
  ],
  chart: {
    height: 410,
    type: 'line',
  },
  colors: ['#596080'],
  stroke: {
    width: [0, 4],
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [1, 2, 3,4,5,6],
  },
  labels: [
    '01 Jan 2001',
    '02 Jan 2001',
    '03 Jan 2001',
    '04 Jan 2001',
    '05 Jan 2001',
    '06 Jan 2001',
    '07 Jan 2001',

  ],
  xaxis: {
    type: 'datetime',
  },

})

const categorySelected = ref('')

const chart = ref({
  resumo: {},
})

function handleRenderChart() {
  options.value = {
    ...options.value,

    xaxis: {

      type: 'category',
      labels: {
        style: {
          fontSize: '10px',
        },
      },
    },
  }

  chart.value.resumo = new ApexCharts(
    document.querySelector('#chart-resumo'),
    options.value
  )

  chart.value.resumo.render()
}

onMounted(async () => {
  handleRenderChart()
})

onUnmounted(() => {
  chart.value.resumo?.destroy()
})
</script>

<style lang="sass" scoped>
.apexcharts-tooltip.apexcharts-theme-light
  border: none !important
</style>
