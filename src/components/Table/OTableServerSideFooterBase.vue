<template>
  <footer
    class="flex items-center justify-between w-full mt-12 table-footer-base md:gap-16 sm:flex-col md:items-start md:mt-16 md:!flex-wrap"
  >
    <div class="flex items-center">
      <OButton
        v-if="downloadable"
        icon="svguse:/icons.svg#icon_excel"
        size="sm"
        class="dark:bg-white/10 dark:!border-transparent icon-opacity mr-8"
        secondary
        :loading="exporting"
        @click="exportTable(props.columns, props.rows)"
        >
        <!-- @click="emit('export')" -->
        Baixar tabela
      </OButton>
      <OButton
        v-if="importable && isHistoricoTabelaAdmin"
        icon="svguse:/icons.svg#icon_import"
        size="sm"
        class="dark:bg-white/10 dark:!border-transparent icon-opacity mr-8"
        secondary
        :loading="importing"
        @click="emit('import')"
      >
        Importar tabela
      </OButton>
      <OButton
        v-if="printable"
        icon="print"
        size="sm"
        class="dark:bg-white/10 dark:!border-transparent icon-opacity"
        secondary
        @click="emit('print')"
        >
        Imprimir
      </OButton>
    </div>
    <!-- @click="() => exportTable(props.columns, props.rows)" -->

    <div class="flex items-center gap-8 ml-auto md:ml-0 md:pb-8">
      <OButton
        icon="chevron_left"
        :disable="
          pagination.page === 1 || pagination.page === 0
        "
        class="rounded-[21px] !min-w-[96px]"
        secondary
        size="sm"
        @click="goTo(pagination.page= pagination.page - 1)"
      >
        Anterior
      </OButton>

      <q-pagination
        v-model="pagination.page"
        color="primary"
        active-text-color="white"
        :max="pagesNumber"
        :max-pages="4"
        :boundary-numbers="false"
        @update:model-value="goTo"
      />
   
      <OButton
        v-model="pagination.page"
        icon-right="chevron_right"
        :disable="
          pagination.page === pagesNumber || pagination.page === 0
        "
        class="rounded-[21px] !min-w-[96px]"
        secondary
        size="sm"
        @click="goTo(pagination.page= pagination.page + 1)"
      >
        Próximo
      </OButton>
    </div>
  </footer>
</template>

<script setup>
import { computed, toRefs, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from 'stores/usuarios/user.store'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'

const { isSuperuser } = storeToRefs(useUserStore())

// router.currentRoute.value.name !== 'home'
const router = useRouter()

const { exportTable } = GLOBAL

const emit = defineEmits(['update', 'export', 'import'])

const props = defineProps({
  rows: { type: Array, default: () => [] },
  columns: { type: Array, default: () => [] },
  slotProps: { type: Object, default: () => ({}) },
  pagination: { type: Object, default: () => ({}) },
  downloadable: { type: Boolean, default: false },
  printable: { type: Boolean, default: false },
  importable: { type: Boolean, default: false },
  importing: { type: Boolean, default: false },
  exporting: { type: Boolean, default: false },

})

const { pagination, slotProps } = toRefs(props)

const pagesNumber = computed(() =>
  Math.ceil(
    pagination.value.rowsNumber /
      (pagination.value.page * pagination.value.rowsPerPage)
  )
)

const isHistoricoTabelaAdmin = computed(() => {
  return router.currentRoute.value.name !== 'historico-visitas' || (router.currentRoute.value.name === 'historico-visitas' && isSuperuser.value)
})


function goTo(page) {
  emit('update', page)
}
</script>

<style lang="sass" scoped>
.table-footer-base
  .q-pagination

    :deep(.q-btn)
      min-width: auto !important
      width: 2.25rem
      height: 2.25rem
      border: 1px solid rgba(var(--neutral-100),0.1)
      font-size: .75rem
      margin: 0
      border-radius: 50%
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
      // color: rgb(var(--neutral-70)) !important
      // &.bg-primary
      //   color: rgb(var(--neutral-100)) !important
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
