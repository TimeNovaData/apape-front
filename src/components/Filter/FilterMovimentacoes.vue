<template>
  <OButton v-bind="attrs" icon="svguse:/icons.svg#icon_filtros" secondary>
    {{ title }}

    <q-menu
      ref="menuRef"
      class="p-16"
      transition-show="jump-down"
      transition-hide="jump-up"
      @hide="onClose">
      <q-list class="w-[23.5rem] md:w-[20rem]">
        <q-form ref="form">
          <OInput v-model="search.nome" label="Nome" class="w-full" size="lg" />
          <!-- <OInput
            v-model="search.email"
            label="Email"
            class="w-full mt-16"
            size="lg" /> -->
          
          <OSelect
            v-model="search.status_pagamento"
            class="w-full mt-16"
            size="lg"
            label="Status de pagamento"
            clearable
            multiple
            :options="selectOptions.status_pagamento" />
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
import OInput from 'components/Input/OInput.vue'
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
  nome: movimentacaoStore.nome,
  email: movimentacaoStore.email,
  status_pagamento: movimentacaoStore.status_pagamento,
})

const { nome, email, status_pagamento } = toRefs(search)

const isDirty = computed(
  () =>
    nome.value !== movimentacaoStore.nome ||
    email.value !== movimentacaoStore.email ||
    status_pagamento.value !== movimentacaoStore.status_pagamento
)

const selectOptions = ref({
  status_pagamento: [
    { label: 'Pendente', value: 'PENDING' },
    { label: 'Vencido', value: 'OVERDUE' },
    { label: 'Pago', value: 'RECEIVED' },
  ],
})

function onClose() {
  nome.value = movimentacaoStore.nome
  email.value = movimentacaoStore.email
  status_pagamento.value = movimentacaoStore.status_pagamento
  menuRef.value.hide()
}

function onConfirm() {
  movimentacaoStore.nome = nome.value
  movimentacaoStore.email = email.value
  movimentacaoStore.status_pagamento = status_pagamento.value
  emit('filter')
  menuRef.value.hide()
}
</script>

<style lang="scss" scoped></style>
