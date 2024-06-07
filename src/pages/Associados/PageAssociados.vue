<template>
  <div class="container mx-auto pt-48 pb-64 px-24">
    <div>
      <h3 class="text-caps-1 !font-semibold">
        Bem vindo de volta,
        <span class="text-primary-pure">{{ user.username }} 👋🏽</span>
      </h3>
    </div>

    <q-card
      class="py-32 px-24 border-neutral-100/5 rounded mt-24"
      flat
      bordered>
      <div class="flex items-center justify-between">
        <TextIcon icon="svguse:/icons.svg#icon_users" text="Associados" />
        <OButton
          primary
          class="text-white"
          :to="{ name: 'associados-adicionar' }">
          <q-icon name="add_circle" />
          <span>Novo cadastro</span>
        </OButton>
      </div>

      <div class="mt-24">
        <OTableServerSideBase
          ref="tableRef"
          :columns="columns"
          :visible-columns="visible"
          :limit="limit"
          :offset="offset"
          :count="count"
          :urls="`/associados/`"
          :scheme="scheme"
          :show-download-button="false"
          :show-print-button="false"
          :show-import-button="false"
          @@row-click="
            $router.push({
              name: 'associado-single',
              params: { id: $event.row.id },
            })
          ">
          <template #body="props">
            <TrAssociados :props="props" />
          </template>
        </OTableServerSideBase>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { computed, inject, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAssociadosStore } from 'stores/associados.store'
import OButton from 'components/Button/OButton.vue'
import OTableServerSideBase from 'components/Table/OTableServerSideBase.vue'
import TextIcon from 'components/Text/TextIcon.vue'
import TrAssociados from 'components/TR/TrAssociados.vue'

const tableRef = ref(null)

const user = inject('user')

const associadoStore = useAssociadosStore()

const {
  columns,
  visible,
  limit,
  offset,
  count,
  scheme,
  email,
  nome,
  pagination,
  status_pagamento,
} = storeToRefs(associadoStore)
</script>

<style lang="sass" scoped>
:deep(.q-tab)
  & .q-tab__content
    flex-wrap: nowrap !important
    padding: .75rem
</style>
