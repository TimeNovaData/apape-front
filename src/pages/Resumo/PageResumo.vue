<template>
  <div class="container mx-auto pt-48 pb-64">
    <q-card class="py-32 px-24 border-neutral-100/5 rounded" flat bordered>
      <div class="flex items-center justify-between">
        <TextIcon
          icon="svguse:/icons.svg#icon-chart-statistics"
          text="Resumo"
          :has-sub="true"
          sub="As cores dos indicadores são vinculadas ao gráfico abaixo." />

        <div class="flex items-center gap-8">
          <p class="text-caps-3 !font-normal text-neutral-70">Visualizando:</p>

          <q-tabs v-model="filtroVisualizacao">
            <q-tab name="ultimos-7-dias" label="Últimos 7 dias" class="mr-8" />
            <q-tab name="este-mes" label=" Este mês" class="mr-8" />
            <q-tab name="mes-passado" label=" Mês passado" class="mr-8" />
            <q-tab name="ano" label=" Ano" />
          </q-tabs>
        </div>
      </div>

      <div class="mt-24">
        <div class="grid grid-cols-5 gap-16">
          <CardResumo
            v-for="item in dados"
            :key="item.id"
            :icon="`svguse:/icons.svg#${item.icon}`"
            :title="item.value"
            :subtitle="item.label"
            :color="item.color" />
        </div>
      </div>
      <div class="mt-32">
        <ChartResumo />
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChartResumo from 'components/Chart/ChartResumo.vue'
import GLOBAL from 'utils/GLOBAL'

import CardResumo from 'components/Card/CardResumo.vue'
import TextIcon from 'components/Text/TextIcon.vue'

const { fMoney } = GLOBAL

const dados = ref([
  {
    id: 0,
    value: fMoney(249.60),
    label: 'Vendas brutas neste período',
    color: '#0073E5',
    icon: 'icon-dollar-cash-circle'
  },
  {
    id: 1,
    value: fMoney(35.66),
    label: 'Vendas líquidas neste período',
    color: '#0022CC',
    icon: 'icon-calendar-schedule-discount-sale'
  },
  {
    id: 2,
    value: fMoney(249.60),
    label: 'Vendas líquidas neste período',
    color: '#4400CC',

    icon: 'icon-filter-sort-style-3-3d-big'
  },
  {
    id: 3,
    value: fMoney(35.66),
    label: 'Média diária de vendas líquidas',
    color: '#8800CC',
    icon: 'icon-calendar-schedule-discount-sale-1'

  },
  {
    id: 4,
    value: 8,
    label: 'Pedidos feitos',
    color: '#596080',
    icon: 'icon-bag-shopping-thumbs-up'

  },
  {
    id: 5,
    value: 7,
    label: 'Itens comprados',
    color: '#6C7080',
    icon: 'icon-bag-shopping-cart-checkamrk'

  },
  {
    id: 6,
    value: fMoney(0.00),
    label: 'Reembolso de 0 pedido (0 item)',
    color: '#800000',
    icon: 'icon-dollar-payments-onversion'
  },
  {
    id: 7,
    value: fMoney(0.00),
    label: 'Cobrado para o transporte',
    color: '#008055',
    icon: 'icon-truck-2'
  },
  {
    id: 8,
    value: fMoney(149.70),
    label: 'No valor dos cupons usados',
    color: '#807500',
    icon: 'icon-stickers-paper'
  },
])

const filtroVisualizacao = ref('ultimos-7-dias')
</script>

<style lang="sass" scoped>
@import '../../css/quasar/variables'
@import '../../css/quasar/core/typography'

:deep(.q-tab)
  border: 1px solid rgba(var(--neutral-100), 0.10)
  border-radius: .1875rem
  transition: .3s ease
  & .q-tab__content
    flex-wrap: nowrap !important
    padding: .75rem
  & .q-tab__label
    color: rgba(var(--neutral-70), 1)
    @include text(paragraph-2)

  &.q-tab--active, &:hover
    background-color: rgba(var(--primary-pure), 0.10)
    border-color: rgba(var(--primary-pure), 1)

    & .q-tab__label
      color: rgba(var(--primary-pure), 1)
    & .q-tab__indicator
      background: transparent !important
</style>
