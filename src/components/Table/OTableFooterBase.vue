<template>
  <footer
    class="flex items-center justify-between w-full mt-24 table-footer-base md:gap-16 md:flex-col md:items-start md:mt-16">
    <OButton
      v-if="downloadable"
      icon="svguse:/icons.svg#icon_excel"
      size="sm"
      class="dark:bg-white/10 dark:!border-transparent icon-opacity"
      secondary
      @click="() => exportTable(props.columns, props.rows)">
      Baixar tabela
    </OButton>

    <div class="flex items-center gap-8 ml-auto md:ml-0 md:pb-8">
      <OButton
        icon="chevron_left"
        :disable="props.slotProps.isFirstPage"
        primary
        size="sm"
        @click="goPrev()">
        Anterior
      </OButton>

      <q-pagination
        v-model="pagination.page"
        color="primary"
        :max="pagesNumber"
        :max-pages="4"
        :boundary-numbers="false"
        @update:model-value="$emit('update', pagination)" />

      <OButton
        icon-right="chevron_right"
        :disable="props.slotProps.isLastPage"
        primary
        size="sm"
        @click="goNext()">
        Próximo
      </OButton>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref } from 'vue'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'

const { exportTable } = GLOBAL

const emit = defineEmits(['update'])

const props = defineProps({
  rows: { type: Array, default: () => [] },
  columns: { type: Array, default: () => [] },
  slotProps: { type: Object, default: () => ({}) },
  pagination: { type: Object, default: () => ({}) },
  downloadable: { type: Boolean, default: false },
})

const pagination = ref(props.pagination)

const pagesNumber = computed(() =>
  Math.ceil(props.rows.length / props.pagination.rowsPerPage)
)

function goNext() {
  props.slotProps.nextPage()
  pagination.value.page++
}

function goPrev() {
  props.slotProps.prevPage()
  pagination.value.page--
}
</script>

<style lang="sass" scoped>
.table-footer-base
  .q-pagination
    :deep(.q-btn)
      width: 2.25rem
      height: 2.25rem
      border: 1px solid rgba(var(--neutral-100),0.1)
      font-size: .75rem
      margin: 0

      &:before
        box-shadow: initial !important

    :deep(.q-pagination__middle),
    :deep(.q-pagination__content)
      gap: .375rem

.body--light
  .table-footer-base
    :deep(.icon-opacity .q-icon)
      color: #999ca4
    :deep(.q-btn.disabled)
      opacity: 1 !important
      background: rgba(var(--neutral-100), 0.1)
      color: rgba(var(--neutral-100), 0.4)
    .q-pagination :deep(.q-btn)
      color: rgb(var(--neutral-70)) !important
      &.bg-primary
        color: rgb(var(--neutral-100)) !important
        border: transparent

.body--dark
  .table-footer-base
    :deep(.q-table__middle)
      background: rgb(var(--d-neutral-40))
      border-bottom: 1px solid rgba(var(--white), 0.1)
    :deep(.q-btn.disabled)
      opacity: 1 !important
      background: rgba(var(--white), 0.05)
      color: rgba(var(--white), 0.2)
    .q-pagination :deep(.q-btn)
      border: 1px solid rgba(var(--white),0.1)
      color: rgba(var(--white), 0.7) !important
      background: rgba(var(--white), 0.05)
      &.bg-primary
        color: rgb(var(--neutral-100)) !important
</style>
