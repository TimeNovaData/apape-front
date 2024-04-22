<template>
  <div class="container mx-auto pt-48 pb-64">

   
    <q-card class="py-32 px-24 border-neutral-100/5 rounded " flat bordered>
      <div class="flex items-center justify-between">
        <TextIcon icon="svguse:/icons.svg#icon_chart_up" text="Movimentações" />


      </div>

      <div class="mt-24">
        <OTableBase
          :rows="rows"
          :columns="columns"
          :show-print-button="false"
         >
          <template #body="props">
            <TrMovimentacoes :props="props" />
          </template>
        </OTableBase>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'


import OTableBase from 'components/Table/OTableBase.vue'
import TextIcon from 'components/Text/TextIcon.vue'
import TrMovimentacoes from 'components/TR/TrMovimentacoes.vue'

const columns = [
  {
    name: 'associado',
    required: true,
    field: 'associado',
    label: 'Associado',
    align: 'left',
  },
  {
    name: 'data',
    required: true,
    field: 'data',
    label: 'Data',
    align: 'left',
  },
  {
    name: 'status',
    required: true,
    field: 'status',
    label: 'Status',
    align: 'left',
  },

  {
    name: 'situacao',
    required: true,
    field: 'situacao',
    label: 'Situação',
    align: 'left',
  },
  {
    name: 'total',
    required: true,
    field: 'total',
    label: 'Total',
    align: 'left',
  },



]

const rows = ref([
  {
    associado: '#127010 Emily Garcia',
    data: '09/01/2024',
    status: 'Processando',
    situacao: 'Inadimplentes',
    total: 'R$ 598,80'
  },

])

const tab = ref('todos')
</script>

<style lang="sass" scoped>
:deep(.q-tab)
  & .q-tab__content
    flex-wrap: nowrap !important
    padding: .75rem
</style>
