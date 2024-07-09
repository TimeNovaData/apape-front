<template>
  <q-tr :props="props">
    <q-td key="cliente">
      {{ props.row.customer_name }}
    </q-td>
    <q-td key="valor">
      {{ fMoney(props.row.value) }}
    </q-td>
    <!-- <q-td key="descricao">
      {{ props.row.description }}
    </q-td> -->
    <q-td key="forma_pagamento">
      {{setPaymentText(props.row.billing_type) }}
    
    </q-td>
    <q-td key="status" auto-width>
      <OBadge
        :label="setTextStatus(props.row.status)"
        class="!rounded-[3px]"
        :class="`${colorBadge(props.row.status)}`"
         />
    </q-td>

    <q-td key="data_vencimento" auto-width>
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

const setPaymentText = (payment) =>{


  switch (payment) {
    case 'BOLETO':
      return 'Boleto'
    case 'CREDIT_CARD':
      return 'Cartão de Crédito'
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
</script>


<style scoped lang="scss">
.pending{
  color: rgba(var(--status-pending), 1);
  background-color: rgba(var(--status-pending), .10);
}
.received{
  color: rgba(var(--status-received), 1);
  background-color: rgba(var(--status-received), .10);
}
.overdue{
  color: rgba(var(--alert-error), 1);
  background-color: rgba(var(--alert-error), .10);
}

</style>
