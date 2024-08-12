<template>
  <OButton v-bind="attrs" icon="svguse:/icons.svg#icon_filtros" secondary>


    <q-menu
      ref="menuRef"
      class="p-16"
      transition-show="jump-down"
      transition-hide="jump-up"
      @hide="onClose">
      <q-list class="w-[23.5rem] md:w-[20rem]">
        <pre></pre>
        <q-form ref="form">
          <OSelect
            v-model="search.billing_type"
            class="w-full mt-16"
            size="lg"
            label="Tipo de cobrança"
            clearable
            multiple
            :options="selectOptions.billing_type" />

          <OSelect
            v-model="search.status_pagamento"
            class="w-full mt-16"
            size="lg"
            label="Status de pagamento"
            clearable
            multiple
            :options="selectOptions.status_pagamento" />
          <OInputDate
           :data="search.data_inicio"
            class="w-full mt-16"
            size="lg"
            label="Data de início "
            clearable
            @update:date="(v) => (search.data_inicio = v)" />
          <OInputDate
           :data="search.data_fim"
            class="w-full mt-16"
            size="lg"
            label="Data de fim"
            clearable
            @update:date="(v) => (search.data_fim = v)" />
          <div class="flex items-center justify-end mt-24">
            <OButton
              secondary
              size="md"
              icon="close"
              class="mr-8"
              @click="onClose">
              Cancelar
            </OButton>
            <OButton
              primary
              size="md"
              icon="check"
              :disabled="!isDirty"
              @click="onConfirm">
              Aplicar
            </OButton>
          </div>
        </q-form>
      </q-list>
    </q-menu>

    <q-badge
      v-if="showBtnBadge && applyedFilters.length"
      floating
      rounded
      class="bg-primary-pure p-2 text-10 w-16 h-16 grid place-content-center text-[#000]">
      {{ applyedFilters.length }}
    </q-badge>
  </OButton>

  <div v-for="item in applyedFilters" :key="item">
    <OBadge
      v-show="item.length"
      size="md"
      :badge="false"
      class="!px-6 !bg-neutral-30 dark:!bg-white/10 text-neutral-70 border border-neutral-100/5 dark:!text-white/70">
      <template #content> {{ item }} </template>
    </OBadge>
  </div>
</template>

<script setup>
import { computed, reactive, ref, Teleport, toRefs, useAttrs } from 'vue'
import { useMovimentacoesStore } from 'src/stores/movimentacoes.store'
import OBadge from 'components/Badge/OBadge.vue'
import OButton from 'components/Button/OButton.vue'
import OInputDate from 'components/Input/OInputDate.vue'
import OSelect from 'components/Select/OSelect.vue'

const emit = defineEmits(['filter'])
const props = defineProps({
  title: {
    type: String,
    default: 'Filtros',
  },
  showBtnBadge: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
    default: true,
  },
  applyedFilters: {
    type: Array,
    default: () => [],
  },
})

const attrs = useAttrs()

const menuRef = ref()
const movimentacaoStore = useMovimentacoesStore()

const search = reactive({
  status_pagamento: movimentacaoStore.status_pagamento,
  billing_type: movimentacaoStore.billing_type,
  data_inicio: movimentacaoStore.data_inicio,
  data_fim: movimentacaoStore.data_fim,
})

const { nome, email, status_pagamento, billing_type, data_inicio, data_fim } =
  toRefs(search)

const isDirty = computed(
  () =>
    // nome.value !== movimentacaoStore.nome ||
    // email.value !== movimentacaoStore.email ||
    data_inicio.value !== movimentacaoStore.data_inicio ||
    data_fim.value !== movimentacaoStore.data_fim ||
    billing_type.value !== movimentacaoStore.billing_type ||
    status_pagamento.value !== movimentacaoStore.status_pagamento
)

const selectOptions = ref({
  status_pagamento: [
    { label: 'Pendente', value: 'PENDING' },
    { label: 'Vencido', value: 'OVERDUE' },
    { label: 'Pago', value: 'RECEIVED' },
  ],

  billing_type: [
    { label: 'Boleto', value: 'BOLETO' },
    // { label: 'Cartão de Crédito', value: 'CREDIT_CARD' },
    { label: 'Debito automático', value: 'DEBITO_AUTOMATICO' },
    { label: 'AEPET BR', value: 'AEPET_BR' },
    { label: 'AEPET MACAE', value: 'AEPET_MACAE' },
    { label: 'Convênio PETROS', value: 'CONVENIO_PETROS' },
  ],
})

function onClose() {
  nome.value = movimentacaoStore.nome
  email.value = movimentacaoStore.email
  status_pagamento.value = movimentacaoStore.status_pagamento
  billing_type.value = movimentacaoStore.billing_type
  data_inicio.value = movimentacaoStore.data_inicio
  data_fim.value = movimentacaoStore.data_fim
  menuRef.value.hide()
}

function onConfirm() {
  movimentacaoStore.nome = nome.value
  movimentacaoStore.email = email.value
  movimentacaoStore.status_pagamento = status_pagamento.value
  movimentacaoStore.billing_type = billing_type.value
  movimentacaoStore.data_inicio = data_inicio.value
  movimentacaoStore.data_fim = data_fim.value
  emit('filter')
  menuRef.value.hide()
}
</script>

<style lang="scss" scoped></style>
