<template>
  <q-table ref="componentRef" v-bind="attrs" class="OTable">
    <template v-for="slot in Object.keys(slots)" #[slot]="slotProps">
      <slot :name="slot" v-bind="slotProps"></slot>
    </template>
  </q-table>
</template>

<script>
import { ref, useAttrs, useSlots } from 'vue'

export default { inheritAttrs: false }

export function configTable() {
  const componentRef = ref(null)

  function requestServerInteraction() {
    return componentRef.value.requestServerInteraction()
  }

  function setPagination(pagination, forceServerRequest) {
    return componentRef.value.setPagination(pagination, forceServerRequest)
  }

  return {
    componentRef,
    requestServerInteraction,
    setPagination,
  }
}
</script>

<script setup>
const slots = useSlots()
const attrs = useAttrs()

const context = configTable()
const { componentRef } = context
defineExpose(context)
</script>

<style lang="sass">
.OTable
  .q-select .q-field__native span
    padding: 4px

.sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: rgb(var(--table-header-bg))

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
