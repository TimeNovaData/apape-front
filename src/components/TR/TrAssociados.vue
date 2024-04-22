<template>
  <q-tr :props="props">
    <q-td key="matricula">
      {{ props.row.matricula }}
    </q-td>
    <q-td key="nome">
      {{ props.row.nome}}
    </q-td>
    <q-td key="cpf">
      {{ props.row.cpf }}
    </q-td>
    <q-td key="patrocinadora">
      {{ props.row.patrocinadora }}
    </q-td>
    <q-td key="matricula_patrocinadora">
      {{ props.row.matricula_patrocinadora }}
    </q-td>
    <q-td key="email">
      {{ props.row.email }}
    </q-td>
    <q-td key="data_cadastro">
      {{ props.row.data_cadastro }}
    </q-td>
    <q-td key="tipo_beneficio">
      {{ props.row.tipo_beneficio }}
    </q-td>
    <q-td key="cidade">
      {{ props.row.cidade }}
    </q-td>
    <q-td key="estado">
      {{ props.row.estado }}
    </q-td>
    <q-td key="pais">
      {{ props.row.pais }}
    </q-td>

  </q-tr>
</template>

<script setup>
import OButton from 'components/Button/OButton.vue'
defineProps({
  props: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['aprove', 'reject'])
</script>
