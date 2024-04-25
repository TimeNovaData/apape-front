<template>
  <OTable
    ref="componentRef"
    v-bind="attrs"
    :pagination="pagination"
    :rows="rows.length ? rows : _rows"
    :columns="columns"
    :filter="searchFilter"
    class="table-base"
    primary
    :computed-rows-number="pagination.rowsNumber"
    :loading="_isLoading"
    @request="onRequest">
    <template v-if="header" #top>
      <OTableServerSideHeaderBase
        :filter="searchFilter"
        :rows-per-page="pagination.rowsPerPage"
        @update="handleUpdate">
        <template #name_tab>
          <slot name="name_tab"></slot>
        </template>
        <template #search>
          <slot name="search"></slot>
        </template>
        <template #filtro="slotProps">
          <slot name="filtro" v-bind="slotProps"></slot>
        </template>
        <template #botao="slotProps">
          <slot name="botao" v-bind="slotProps"></slot>
        </template>
      </OTableServerSideHeaderBase>
    </template>
    <template #header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          @click="handleSort(col)">
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <template v-for="slot in Object.keys(slots)" #[slot]="slotProps">
      <slot :name="slot" v-bind="slotProps"></slot>
    </template>

    <template #bottom="slotProps">
      <OTableServerSideFooterBase
        v-if="footer"
        :downloadable="props.showDownloadButton"
        :importable="props.showImportButton"
        :printable="props.showPrintButton"
        :rows="_rows"
        :columns="props.columns"
        :slot-props="slotProps"
        binary-state-sort
        :pagination="pagination"
        :importing="importing"
        :exporting="exporting"
        @import="onImportFn"
        @export="onExportFn"
        @update="(val) => updatePagination(val)" />
    </template>
    <template #no-data>
      <div class="w-full h-[300px]">
        <EmptyItem :text="labelNotData" />
      </div>
    </template>
  </OTable>

  <SkeletonTable v-if="isFetching" class="mt-20 px-16" />
</template>

<script setup>
import {
  computed,
  onMounted,
  reactive,
  ref,
  toRefs,
  useAttrs,
  useSlots,
  watch,
  watchEffect,
} from 'vue'

import { readSheet } from 'src/utils/sheet'
import { useTableStore } from 'stores/table.store.js'
import EmptyItem from 'components/Empty/EmptyItem.vue'
import GLOBAL from 'utils/GLOBAL'
import OTable, { configTable } from 'components/Table/OTable.vue'
import OTableServerSideFooterBase from 'components/Table/OTableServerSideFooterBase.vue'
import OTableServerSideHeaderBase from 'components/Table/OTableServerSideHeaderBase.vue'
import SkeletonTable from 'components/Skeleton/SkeletonTable.vue'


const slots = useSlots()
const attrs = useAttrs()

const context = configTable()
const { componentRef } = context

const importing = ref(false)
const exporting = ref(false)
const searchFilter = ref('')
const { fetchFn, exportSheet, importSheet } = useTableStore()

defineExpose(context)

const props = defineProps({
  rows: { type: Array, default: () => [] },
  columns: { type: Array, default: () => [] },
  limit: { type: Number, default: 10 },
  offset: { type: Number, default: 0 },
  count: { type: Number, default: 0 },
  columnsVisible: { type: Array, default: () => [] },

  footer: {
    type: Boolean,
    default: true,
  },
  header: {
    type: Boolean,
    default: true,
  },
  showDownloadButton: {
    type: Boolean,
    default: true,
  },
  showImportButton: {
    type: Boolean,
    default: true,
  },
  showPrintButton: {
    type: Boolean,
    default: true,
  },
  labelNotData: { type: String, default: 'Sem dados' },
  isFetching: {
    type: Boolean,
    default: false,
  },
  onImport: { type: Function, default: () => () => 0 },
  onExport: { type: Function, default: () => () => 0 },
  urls: { type: String, default: '' },
  filters: { type: Object, default: () => ({}) },
  scheme: { type: Object, default: () => ({}) },
})
const { columnsVisible } = toRefs(props)

const optionsServerSide = reactive({
  _rows: [],
  _limit: 10,
  _count: 0,
  _isLoading: false,
  _offset: 0,
  _sortBy: null,
})

const { _rows, _limit, _count, _isLoading, _offset, _sortBy } =
  toRefs(optionsServerSide)

async function onImportFn() {
  try {
    importing.value = true
    const file = await readSheet()
    await importSheet(file, props.scheme)
  } finally {
    importing.value = false
  }
}

async function onExportFn() {
  try {
    exporting.value = true
    await exportSheet(
      {
        url: props.urls,
        filters: GLOBAL.generateStringFilterFromObject({
          ...props.filters,
          search: searchFilter.value,
          limit: pagination.value.rowsPerPage,
          offset: pagination.value.page,
        }),
      },
      props.scheme
    )
  } catch (error) {
    console.log(error)
  } finally {
    exporting.value = false
  }
}

function handleUpdate(model) {
  searchFilter.value = model.filter
  _limit.value = model.rowsPerPage
  componentRef.value.requestServerInteraction()
}

// watch(
//   () => searchFilter.value,
//   (v) => {
//     componentRef.value.requestServerInteraction()
//   }
// )

const pagination = computed(() => {
  const page = Math.round(_offset.value + _limit.value) / _limit.value
  return {
    page,
    rowsPerPage: _limit.value,
    rowsNumber: _count.value,
    sortBy: _sortBy.value,
    descending: false,
  }
})

function updatePagination(page) {
  componentRef.value.setPagination({ page, ...pagination.value }, true)
}

// function handleWithFilterArrType(){
//   const filter = {}
//   Object.keys(props.filters).forEach((key) => {
//     if (Array.isArray(props.filters[key])) {
//       filter[`${key}__in`] = props.filters[key].join(',')
//     } else {
//       filter[key] = props.filters[key]
//     }
//   })
//   return filter
// }
async function onRequest() {
  console.log(props.filters)
  try {
    _isLoading.value = true
    const offset =
      pagination.value.page === 1
        ? 0
        : (pagination.value.page - 1) * _limit.value
    const { data } = await fetchFn(
      {
        url: props.urls,
        filters: GLOBAL.generateStringFilterFromObject({
          ...props.filters,
          search: searchFilter.value,
          limit: pagination.value.rowsPerPage,
          offset,
          ordering: pagination.value.sortBy,
        }),
      },
      true
    )

    _rows.value = data.results ? data.results : data
    _count.value = data.count ? data.count : data.length
  } catch (error) {
    console.log(error)
  } finally {
    _isLoading.value = false
  }
}

watchEffect(async () => {
  componentRef.value?.requestServerInteraction()
})

/**
 * @description função que faz o sort da tabela de acordo com o campo sort_filter da coluna atual
 * @param {Object} col
 */

function handleSort(col) {
  if (!col.sort_filter) return
  _sortBy.value = col.sort_filter
  if (pagination.value.sortBy.includes('-'))
    pagination.value.sortBy = pagination.value.sortBy.replace('-', '')
  else pagination.value.sortBy = `-${pagination.value.sortBy}`
}

onMounted(async () => {
  componentRef.value.requestServerInteraction()
})
</script>

<style lang="sass" scoped>
@import "src/css/responsivo.sass"
.table-base
  .q-chip :deep(.q-chip__content)
    justify-content: center

  :deep(.q-table__middle)
    max-height: 37rem

    thead
      position: sticky
      top: 0
      background: rgb(var(--white))
      z-index: 10

      @include d(md)
        th
          font-size: .75rem

.body--dark
  .table-base
    :deep(.q-table__middle)
      border: 1px solid rgba(var(--white), 0.1)

    :deep(thead)
      background: rgb(var(--d-neutral-10))

    :deep(.q-td:not(:last-child))
      border-right: 1px solid rgba(var(--white),0.1)



.body--light
  .table-base
    :deep(.icon-opacity .q-icon)
      color: #999ca4

    :deep(.q-td:not(:last-child))
     border-right: 1px solid rgba(var(--neutral-100),0.1)
</style>
