<template>
  <div class="container mx-auto pt-48 pb-64 px-24">
    <q-card class="py-32 px-24 border-neutral-100/5 rounded" flat bordered>
      <div class="flex items-center justify-between">
        <TextIcon icon="svguse:/icons.svg#icon_chart_up" text="Movimentações" />
      </div>

      <div class="mt-24">
        <OTableServerSideBase
          ref="tableRef"
          :columns="columns"
          :visible-columns="visible"
          :limit="limit"
          :offset="offset"
          :count="count"
          :urls="`/associados/`"
          :scheme="scheme"
          :show-print-button="false"
          :show-import-button="false">
          <template #filtro>
            <FilterMedicos ref="filterRef" @filter="doSearch" />
          </template>
          <template #body="props">
            <TrMovimentacoes :props="props" />
          </template>
        </OTableServerSideBase>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

import OTableServerSideBase from 'components/Table/OTableServerSideBase.vue'
import TextIcon from 'components/Text/TextIcon.vue'
import TrMovimentacoes from 'components/TR/TrMovimentacoes.vue'
const tableRef = ref(null)

const scheme = computed(() =>
  columns.value
    .filter((col) => !!col.label)
    .map((col) => ({
      field: col.field,
      label: col.label,
    }))
)
const pagination = reactive({
  visible: [],
  count: 0,
  limit: 10,
  offset: 0,
})

const { visible, count, limit, offset } = pagination

const columns = ref([
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
])
function doSearch() {
  tableRef.value.requestServerInteraction()
}
</script>

<style lang="sass" scoped>
:deep(.q-tab)
  & .q-tab__content
    flex-wrap: nowrap !important
    padding: .75rem
</style>
