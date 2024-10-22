<template>
  <q-tr :props="props">
    <q-td key="matricula" auto-width class="text-center">
      {{ props.row.matricula }}
    </q-td>
    <q-td key="cliente" auto-width>
      {{ props.row.customer_name }}
    </q-td>
    <q-td key="valor" auto-width class="text-center">
      {{ fMoney(props.row.value_valor) }}
    </q-td>
    <q-td key="forma_pagamento" auto-width class="text-center">
      {{ setPaymentText(props.row.billing_type) }}
    </q-td>
    <q-td key="periodicidade" auto-width class="text-center">
      {{ setPeriodicityText(props.row.periodicidade) }}
    </q-td>
    <q-td key="status" auto-width class="text-center">
      <OBadge
        :label="setTextStatus(props.row.status)"
        class="!rounded-[3px] w-full text-center"
        :class="`${colorBadge(props.row.status)}`" />
    </q-td>

    <q-td key="data_vencimento" auto-width class="text-center">
      {{ FData(props.row.due_date) }}
    </q-td>
  </q-tr>
</template>

<script setup>
import GLOBAL from 'utils/GLOBAL'
import OBadge from 'components/Badge/OBadge.vue'

const { fMoney, FData } = GLOBAL

defineProps({
  props: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['aprove', 'reject'])

const colorBadge = (status) => {
  switch (status) {
    case 'RECEIVED':
      return 'received'
    case 'PENDING':
      return 'pending'
    case 'OVERDUE':
      return 'overdue'
    default:
      return ''
  }
}

const setPaymentText = (payment) => {
  switch (payment) {
    case 'BOLETO':
      return 'Boleto'
    case 'DEBITO_AUTOMATICO':
      return 'Debito automático'
    case 'AEPET_BR':
      return 'AEPET BR'
    case 'AEPET_MACAE':
      return 'AEPET MACAE'
    case 'CONVENIO_PETROS':
      return 'Convênio PETROS'
    default:
      return ''
  }
}
const setTextStatus = (status) => {
  switch (status) {
    case 'RECEIVED':
      return 'Pagamento Efetuado'
    case 'OVERDUE':
      return 'Vencido'
    case 'PENDING':
      return 'Pendente'
    default:
      return 'N/A'
  }
}

const setPeriodicityText = (period) => {
  // SEMANALMENTE = 'WEEKLY'
  //   QUINZENAL = 'BIWEEKLY'
  //   MENSALMENTE = 'MONTHLY'
  //   BIMENSAL = 'BIMONTHLY'
  //   TRIMESTRAL = 'QUARTERLY'
  //   SEMI_ANUALMENTE = 'SEMIANNUALLY'
  //   ANUAL = 'YEARLY'
  //   mensal 1
  //   trimestral 3
  //   semestral 6
  //   anual 12
  console.log(period)
  switch (period) {
    case '1':
      return 'Mensalmente'
    case '3':
      return 'Trimestralmente'
    case '6':
      return 'Semestralmente'
    case '12':
      return 'Anualmente'

    default:
      return 'N/A'
  }
  // switch (period) {
  //   case 'WEEKLY':
  //     return 'Semanalmente'
  //   case 'SEMANALMENTE':
  //     return 'Semanalmente'
  //   case 'BIWEEKLY':
  //     return 'Quinzenalmente'
  //   case 'QUINZENAL':
  //     return 'Quinzenalmente'
  //   case 'MONTHLY':
  //     return 'Mensalmente'
  //   case 'MENSALMENTE':
  //     return 'Mensalmente'
  //   case 'BIMONTHLY':
  //     return 'Bimestralmente'
  //   case 'BIMENSAL':
  //     return 'Bimestralmente'
  //   case 'QUARTERLY':
  //     return 'Trimestralmente'
  //   case 'TRIMESTRAL':
  //     return 'Trimestralmente'
  //   case 'SEMIANNUALLY':
  //     return 'Semestralmente'
  //   case 'SEMI_ANUALMENTE':
  //     return 'Semestralmente'
  //   case 'ANNUALLY':
  //     return 'Anualmente'
  //   case 'ANUAL':
  //     return 'Anualmente'
  //   case 'YEARLY':
  //     return 'Anualmente'

  //   default:
  //     return 'N/A'
  // }
}
</script>

<style scoped lang="scss">
.pending {
  color: rgba(var(--status-pending), 1);
  background-color: rgba(var(--status-pending), 0.1);
}

.received {
  color: rgba(var(--status-received), 1);
  background-color: rgba(var(--status-received), 0.1);
}

.overdue {
  color: rgba(var(--alert-error), 1);
  background-color: rgba(var(--alert-error), 0.1);
}
</style>
