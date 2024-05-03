<template>
  <q-tr
    :props="props"
    class="cursor-pointer"
    @click="
     () => $router.push({ path: `/associados/${props.row.id}`})
    ">

    <q-td key="matricula">
      {{ props.row.matricula }}
    </q-td>
    <q-td key="nome">
      {{ props.row.name }}
    </q-td>
    <q-td key="cpf">
      {{ props.row.cpf_cnpj }}
    </q-td>
    <q-td key="patrocinadora" class="capitalize">
      {{ props.row.associados_patroc_set[0]?.nome }}
    </q-td>
    <q-td key="matricula_patrocinadora">
      {{ props.row.associados_patroc_set[0]?.maticula_patrocinadora }}
    </q-td>
    <q-td key="email">
      {{ props.row.email }}
    </q-td>
    <q-td key="data_cadastro">
      {{ FData(props.row.dt_cadastro) }}
    </q-td>
    <q-td key="tipo_beneficio">
      <OBadge
        :label="props.row.tipo_beneficio"
        class="!rounded-[3px]"
        :class="`text-${colorBadge(props.row.tipo_beneficio)}`"
        :style="`background-color: rgba(var(--${colorBadge(
          props.row.tipo_beneficio
        )}), .10);`" />
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
import GLOBAL from 'utils/GLOBAL'
import OBadge from 'components/Badge/OBadge.vue'

const { FData } = GLOBAL

defineProps({
  props: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['aprove', 'reject'])

const colorBadge = (status) => {
  switch (status) {
    case 'Aposentado':
      return 'primary-pure'
    default:
      return 'neutral-70'
  }
}
</script>
