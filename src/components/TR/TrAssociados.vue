<template>
  <q-tr
    :props="props"
    class="cursor-pointer"
    @click="() => $router.push({ path: `/associados/${props.row.id}` })">
    <q-td key="matricula" class="text-center">
      {{ props.row.matricula }}
    </q-td>
    <q-td key="nome" class="text-center">
      {{ props.row.name }}
    </q-td>
    <q-td key="cpf" class="text-center">
      {{ props.row.cpf_cnpj }}
    </q-td>
    <q-td key="patrocinadora" class="capitalize text-center">
      {{ props.row.patrocinadores?.nome }}
    </q-td>
    <q-td key="maticula_patrocinadora" class="text-center">
      {{ props.row.maticula_patrocinadora }}
    </q-td>
    <q-td key="email" class="text-center">
      {{ props.row.email }}
    </q-td>
    <q-td key="data_cadastro" class="text-center">
      {{ FData(props.row.dt_cadastro) }}
    </q-td>
    <q-td key="tipo_beneficio" class="text-center">
      <OBadge
        :label="props.row.status"
        class="w-full flex-col !rounded-[3px]"
        :class="`cor-${props.row.status?.toLowerCase()}`" />
    </q-td>
    <q-td key="cidade" class="text-center">
      {{ props.row.cidade }}
    </q-td>
    <q-td key="estado" class="text-center">
      {{ props.row.estado }}
    </q-td>
    <q-td key="pais" class="text-center">
      {{ props.row.pais }}
    </q-td>
  </q-tr>
</template>

<script setup>
import { computed } from 'vue'
import GLOBAL from 'utils/GLOBAL'
import OBadge from 'components/Badge/OBadge.vue'

const { FData } = GLOBAL

const { props } = defineProps({
  props: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['aprove', 'reject'])

const tipoBeneficiario = computed(() => {
  const statusANegar = ['N', '', '0', 0, null, undefined]

  if (!statusANegar.includes(props.row.aposentado)) {
    return 'Pensionista'
  } else if (!statusANegar.includes(props.row.pensionista)) {
    return 'Aposentado'
  } else {
    return 'Ativo'
  }
})
</script>
<style scoped lang="scss">
.cor-aposentado {
  color: rgba(102, 205, 170, 1);
  background-color: rgba(102, 205, 170, 0.1);
}
.cor-falecido {
  color: rgba(139, 0, 0, 1);
  background-color: rgba(139, 0, 0, 0.1);
}
.cor-pensionista {
  color: rgba(65, 105, 225, 1);
  background-color: rgba(65, 105, 225, 0.1);
}
.cor-desfiliado {
  color: rgba(169, 169, 169, 1);
  background-color: rgba(169, 169, 169, 0.1);
}
.cor-ativo {
  color: rgba(34, 139, 34, 1);
  background-color: rgba(34, 139, 34, 0.1);
}
</style>
