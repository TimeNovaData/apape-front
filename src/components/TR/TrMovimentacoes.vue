<template>
  <q-tr :props="props">
    <q-td key="associado">
      {{ props.row.associado }}
    </q-td>
    <q-td key="data">
      {{ props.row.data}}
    </q-td>
    <q-td key="status">
      {{ props.row.status }}
    </q-td>
    <q-td key="situacao">
      {{ props.row.situacao }}
    </q-td>
    <q-td key="total">
      {{ props.row.total }}
    </q-td>
    

  </q-tr>
</template>

<script setup>

defineProps({
  props: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['aprove', 'reject'])
</script>
