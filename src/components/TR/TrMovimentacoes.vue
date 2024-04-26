<template>
  <q-tr :props="props">
    <q-td key="associado">
      {{ props.row.associado }}
    </q-td>
    <q-td key="data" auto-width>
      {{ props.row.data }}
    </q-td>
    <q-td key="status" auto-width>
      <OBadge
        :label="props.row.status"
        class="!rounded-[3px]"
        :class="`text-${colorBadge(props.row.status)}`"
        :style="`background-color: rgba(var(--${colorBadge(
          props.row.status
        )}), .10);`" />
    </q-td>
    <q-td key="situacao" auto-width>
      {{ props.row.situacao }}
    </q-td>
    <q-td key="total" auto-width>
      {{ props.row.total }}
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
