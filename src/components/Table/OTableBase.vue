<template>
  <OTable
    v-show="rows?.length"
    v-bind="attrs"
    v-model:pagination="pagination"
    :rows="rows"
    :columns="columns"
    :filter="searchFilter"
    class="table-base"
    primary>
    <template v-if="header" #top>
      <OTableHeaderBase
        :filter="searchFilter"
        :rows-per-page="pagination.rowsPerPage"
        @update="updateModels" />
    </template>

    <template v-for="slot in Object.keys(slots)" #[slot]="slotProps">
      <slot :name="slot" v-bind="slotProps"></slot>
    </template>

    <template #bottom="slotProps">
      <OTableFooterBase
        v-if="footer"
        :downloadable="props.showDownloadButton"
        :rows="props.rows"
        :columns="props.columns"
        :slot-props="slotProps"
        :pagination="pagination"
        @update="(val) => updatePagination(val)" />
    </template>
  </OTable>

  <div v-if="!rows?.length && !isFetching" class="w-full h-[300px]">
    <EmptyItem :text="labelNotData" />
  </div>

  <SkeletonTable v-if="isFetching" class="mt-20 px-16" />
</template>

<script setup>
import { ref, useSlots, useAttrs } from 'vue'
import GLOBAL from 'utils/GLOBAL'
import OTable from 'components/Table/OTable.vue'

import EmptyItem from 'components/Empty/EmptyItem.vue'
import OTableFooterBase from 'components/Table/OTableFooterBase.vue'
import OTableHeaderBase from 'components/Table/OTableHeaderBase.vue'
import SkeletonTable from 'components/Skeleton/SkeletonTable.vue'
const slots = useSlots()
const attrs = useAttrs()

const { returnRGB } = GLOBAL

const props = defineProps({
  rows: { type: Array, default: () => [] },
  columns: { type: Array, default: () => [] },
  /**
   *Enable Footer
   */
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
  labelNotData: { type: String, default: '' },
  isFetching: {
    type: Boolean,
    default: false,
  },
})

const searchFilter = ref('')

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 10,
})

function updateModels(val) {
  searchFilter.value = val.filter
  pagination.value.rowsPerPage = val.rowsPerPage
}

function updatePagination(val) {
  pagination.value = val
}
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
