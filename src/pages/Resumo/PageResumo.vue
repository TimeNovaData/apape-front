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
            icon="svguse:/icons.svg#icon-chart-statistics"
            :title="fMoney(item.value)"
            :subtitle="item.label"
            :color="item.color"
            
            />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GLOBAL from 'utils/GLOBAL';

import CardResumo from 'components/Card/CardResumo.vue'
import TextIcon from 'components/Text/TextIcon.vue'


const {fMoney} = GLOBAL

const dados = ref([
  {
    id: 0,
    value: '249.60',
    label: 'Vendas brutas neste período',
    color: '#0073E5',
  },
  {
    id: 1,
    value: '249.60',
    label: 'Vendas líquidas neste período',
    color: '#0073E5',
  },
  {
    id: 2,
    value: '249.60',
    label: 'Vendas brutas neste período',
    color: '#0073E5',
  },
  {
    id: 3,
    value: '249.60',
    label: 'Vendas líquidas neste período',
    color: '#0073E5',
  },
  {
    id: 4,
    value: '249.60',
    label: 'Vendas brutas neste período',
    color: '#0073E5',
  },
  {
    id: 5,
    value: '249.60',
    label: 'Vendas líquidas neste período',
    color: '#0073E5',
  },
  {
    id: 6,
    value: '249.60',
    label: 'Vendas brutas neste período',
    color: '#0073E5',
  },
  {
    id: 7,
    value: '249.60',
    label: 'Vendas líquidas neste período',
    color: '#0073E5',
  },
  {
    id: 8,
    value: '249.60',
    label: 'Vendas brutas neste período',
    color: '#0073E5',
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
