<template>
  <q-tr :props="props">
    <q-td key="cliente">
      {{ props.row.name }}
    </q-td>
    <q-td key="valor">
      {{ props.row.value }}
    </q-td>
    <q-td key="descricao" >
      {{ props.row.description }}
    </q-td>
    <q-td key="forma_pagamento" >
      {{ props.row.billing_type }}
    </q-td>
    <q-td key="status" auto-width>
      <OBadge
        :label="props.row.status ? props.row.status : 'N/A'"
        class="!rounded-[3px]"
        :class="`text-${colorBadge(props.row.status)}`"
        :style="`background-color: rgba(var(--${colorBadge(
          props.row.status
        )}), .10);`" />
    </q-td>


    <q-td key="data_vencimento" auto-width>
      {{ props.row.due_date }}
    </q-td>
  </q-tr>
</template>

<script setup>
import OBadge from 'components/Badge/OBadge.vue'
defineProps({
  props: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['aprove', 'reject'])

const colorBadge = (status) => {
  switch (status) {
    case 'Pagamento Efetuado':
      return 'primary-pure'
    default:
      return 'neutral-70'
  }
}
</script>
