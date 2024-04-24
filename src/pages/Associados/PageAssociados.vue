<template>
  <div class="container mx-auto pt-48 pb-64">
    <div >
      <h3 class="text-caps-1 !font-semibold">Bem vindo de volta, <span class="text-primary-pure">Thiago! 👋🏽</span></h3>
    </div>
   
    <q-card class="py-32 px-24 border-neutral-100/5 rounded mt-24" flat bordered>
      <div class="flex items-center justify-between">
        <TextIcon icon="svguse:/icons.svg#icon_users" text="Associados" />


      </div>

      <div class="mt-24">
        <OTableBase
          :rows="rows"
          :columns="columns"
          :show-print-button="false"
         >
          <template #body="props">
            <TrAssociados :props="props" />
          </template>
        </OTableBase>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import OButton from 'components/Button/OButton.vue'

import OTableBase from 'components/Table/OTableBase.vue'
import TextIcon from 'components/Text/TextIcon.vue'

import TrAssociados from 'components/TR/TrAssociados.vue'

const columns = [
  {
    name: 'matricula',
    required: true,
    field: 'matricula',
    label: 'Matrícula',
    align: 'left',
  },
  {
    name: 'nome',
    required: true,
    field: 'nome',
    label: 'Nome',
    align: 'left',
  },
  {
    name: 'cpf',
    required: true,
    field: 'cpf',
    label: 'CPF',
    align: 'left',
  },
  {
    name: 'patrocinadora',
    required: true,
    field: 'patrocinadora',
    label: 'Patrocinadora',
    align: 'left',
  },
  {
    name: 'matricula_patrocinadora',
    required: true,
    field: 'matricula_patrocinadora',
    label: 'Matrícula da Patrocinadora',
    align: 'left',
  },
  {
    name: 'email',
    required: true,
    field: 'email',
    label: 'E-mail',
    align: 'left',
  },
  {
    name: 'data_cadastro',
    required: true,
    field: 'data_cadastro',
    label: 'Data de Cadastro',
    align: 'left',
  },
  {
    name: 'tipo_beneficio',
    required: true,
    field: 'tipo_beneficio',
    label: 'Tipo de Benefício',
    align: 'left',
  },
  {
    name: 'cidade',
    required: true,
    field: 'cidade',
    label: 'Cidade',
    align: 'left',
  },
  {
    name: 'estado',
    required: true,
    field: 'estado',
    label: 'Estado',
    align: 'left',
  },
  {
    name: 'pais',
    required: true,
    field: 'pais',
    label: 'País',
    align: 'left',
  },


]

const rows = ref([
  {
    matricula: '123456',
    nome: 'João da Silva',
    cpf: '123.456.789-00',
    patrocinadora: 'Patrocinadora 1',
    matricula_patrocinadora: '123456',
    email: 'joao@email.com',
    data_cadastro: '01/01/2021',
    tipo_beneficio: 'Aposentado',
    cidade: 'Cidade 1',
    estado: 'Estado 1',
    pais: 'País 1',
  },

])

const tab = ref('todos')
</script>

<style lang="sass" scoped>
:deep(.q-tab)
  & .q-tab__content
    flex-wrap: nowrap !important
    padding: .75rem
</style>
