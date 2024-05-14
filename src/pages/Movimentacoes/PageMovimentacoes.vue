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
          :urls="`/payments/`"
          :scheme="scheme"
          :show-download-button="false"
          :show-print-button="false"
          :show-import-button="false"
          :filters="{
            email,
            nome,
            status: status_pagamento,
          }"
          >
          <template #filtro>
            <FilterMovimentacoes ref="filterRef" @filter="doSearch" />
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

import { storeToRefs } from 'pinia'
import { useMovimentacoesStore } from 'stores/movimentacoes.store'
import FilterMovimentacoes from 'components/Filter/FilterMovimentacoes.vue'
import OTableServerSideBase from 'components/Table/OTableServerSideBase.vue'
import TextIcon from 'components/Text/TextIcon.vue'
import TrMovimentacoes from 'components/TR/TrMovimentacoes.vue'
const tableRef = ref(null)


const movimentacaoStore = useMovimentacoesStore()

const { columns, visible, limit, offset, count, scheme, email, nome, pagination, status_pagamento } = storeToRefs(movimentacaoStore)

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
